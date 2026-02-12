"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useCallback, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
} from "framer-motion";

const CARDS = [
  "/images/card-photo-overlay.png",
  "/images/card-photo-front.png",
  "/images/card-photo-back.png",
  "/images/card-photo-mid.png",
];

const SWIPE_THRESHOLD = 80;
const ROTATION_RANGE = 18;
const STACK_BASE_ROTATION = -5;

export default function SwipeCardStack() {
  const [stack, setStack] = useState(CARDS.map((src, i) => ({ src, id: i })));
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const isSwiping = useRef(false);
  const lastSwipedId = useRef<number | null>(null);

  const dragRotate = useTransform(
    x,
    [-300, 0, 300],
    [STACK_BASE_ROTATION - ROTATION_RANGE, STACK_BASE_ROTATION, STACK_BASE_ROTATION + ROTATION_RANGE]
  );

  const sendToBack = useCallback(() => {
    setStack((prev) => {
      lastSwipedId.current = prev[0].id;
      const [first, ...rest] = prev;
      return [...rest, first];
    });
    x.jump(0);
    y.jump(0);
  }, [x, y]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (isSwiping.current) return;

    if (Math.abs(info.offset.x) > SWIPE_THRESHOLD) {
      isSwiping.current = true;
      const direction = info.offset.x > 0 ? 1 : -1;
      animate(x, direction * 600, {
        duration: 0.25,
        onComplete: () => {
          sendToBack();
          isSwiping.current = false;
        },
      });
    } else {
      animate(x, 0, { type: "spring", stiffness: 500, damping: 30 });
      animate(y, 0, { type: "spring", stiffness: 500, damping: 30 });
    }
  };

  return (
    <div className="relative w-full h-full">
      {stack.map((card, index) => {
        const isTop = index === 0;
        const isLastSwiped = card.id === lastSwipedId.current;
        const scale = 1 - index * 0.02;
        // Fan out behind: each card shifts right and up with increasing rotation
        const offsets = [
          { x: 0, y: 0, rot: STACK_BASE_ROTATION },
          { x: 18, y: -8, rot: STACK_BASE_ROTATION + 4 },
          { x: 34, y: -14, rot: STACK_BASE_ROTATION + 9 },
          { x: 48, y: -18, rot: STACK_BASE_ROTATION + 14 },
        ];
        const { x: offsetX, y: offsetY, rot: baseRotation } = offsets[index] || offsets[offsets.length - 1];

        return (
          <motion.div
            key={card.id}
            className="absolute rounded-[16px] overflow-hidden select-none"
            style={{
              width: "72%",
              height: "80%",
              left: "3%",
              top: "8%",
              x: isTop ? x : 0,
              y: isTop ? y : 0,
              rotate: isTop ? dragRotate : baseRotation,
              scale,
              zIndex: stack.length - index,
              cursor: isTop ? "grab" : "default",
              boxShadow:
                index === 0
                  ? "0 10px 40px rgba(0,0,0,0.18)"
                  : "0 4px 20px rgba(0,0,0,0.08)",
            }}
            drag={isTop ? true : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.9}
            onDragEnd={isTop ? handleDragEnd : undefined}
            whileHover={
              isTop
                ? { scale: 1.03, boxShadow: "0 14px 50px rgba(0,0,0,0.22)" }
                : undefined
            }
            initial={false}
            animate={{
              y: isTop ? 0 : offsetY,
              x: isTop ? 0 : offsetX,
              rotate: isTop ? STACK_BASE_ROTATION : baseRotation,
              scale,
            }}
            transition={
              isLastSwiped
                ? { duration: 0 }
                : { duration: 0.3, ease: "easeOut" }
            }
            onAnimationComplete={() => {
              if (isLastSwiped) {
                lastSwipedId.current = null;
              }
            }}
          >
            <img
              alt="Profile card"
              className="w-full h-full object-cover pointer-events-none"
              src={card.src}
              draggable={false}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
