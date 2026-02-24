"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DeleteRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/legal?tab=delete");
  }, [router]);

  return null;
}
