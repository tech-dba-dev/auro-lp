"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Tab = "privacy" | "terms" | "delete";

const validTabs: Tab[] = ["privacy", "terms", "delete"];

export default function LegalPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab = validTabs.includes(tabParam as Tab) ? (tabParam as Tab) : "privacy";
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  useEffect(() => {
    if (validTabs.includes(tabParam as Tab)) {
      setActiveTab(tabParam as Tab);
    }
  }, [tabParam]);

  return (
    <main className="min-h-screen bg-white-smoke">
      {/* Header */}
      <header
        className="bg-white"
        style={{
          padding: "clamp(20px, 2.5vw, 48px) clamp(24px, 5vw, 96px)",
          borderBottom: "1px solid rgba(85, 122, 134, 0.15)",
        }}
      >
        <div className="mx-auto flex items-center justify-between" style={{ maxWidth: "1200px" }}>
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity" style={{ gap: "clamp(10px, 1vw, 16px)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt="Auro"
              style={{
                width: "clamp(28px, 2.5vw, 44px)",
                height: "clamp(32px, 2.8vw, 50px)",
              }}
            />
            <span
              className="text-teal font-medium"
              style={{ fontSize: "clamp(16px, 1.2vw, 22px)" }}
            >
              Auro
            </span>
          </Link>
          <Link
            href="/"
            className="text-teal hover:opacity-70 transition-opacity"
            style={{ fontSize: "clamp(14px, 1vw, 18px)" }}
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Page Title */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "1200px",
          padding: "clamp(32px, 4vw, 64px) clamp(24px, 5vw, 96px) 0",
        }}
      >
        <h1
          className="text-granite font-semibold"
          style={{
            fontSize: "clamp(28px, 3vw, 48px)",
            lineHeight: 1.2,
            marginBottom: "clamp(8px, 1vw, 16px)",
          }}
        >
          Legal Information
        </h1>
        <p
          className="text-teal"
          style={{
            fontSize: "clamp(14px, 1.1vw, 18px)",
            lineHeight: 1.6,
          }}
        >
          Last updated: February 24, 2026
        </p>
      </div>

      {/* Tabs */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "1200px",
          padding: "clamp(24px, 2.5vw, 40px) clamp(24px, 5vw, 96px) 0",
        }}
      >
        <div
          className="flex flex-wrap bg-white rounded-full"
          style={{
            padding: "4px",
            gap: "4px",
            border: "1px solid rgba(85, 122, 134, 0.15)",
            width: "fit-content",
          }}
        >
          {[
            { id: "privacy" as Tab, label: "Privacy Policy" },
            { id: "terms" as Tab, label: "Terms of Use" },
            { id: "delete" as Tab, label: "Delete Account" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="transition-all cursor-pointer"
              style={{
                padding: "clamp(8px, 0.8vw, 14px) clamp(16px, 1.5vw, 28px)",
                borderRadius: "100px",
                fontSize: "clamp(13px, 0.9vw, 16px)",
                fontWeight: activeTab === tab.id ? 600 : 400,
                background: activeTab === tab.id ? "#557A86" : "transparent",
                color: activeTab === tab.id ? "#fff" : "#557A86",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "1200px",
          padding: "clamp(24px, 2.5vw, 40px) clamp(24px, 5vw, 96px) clamp(48px, 5vw, 96px)",
        }}
      >
        <div
          className="bg-white rounded-2xl"
          style={{
            padding: "clamp(24px, 3vw, 56px) clamp(24px, 3.5vw, 64px)",
            border: "1px solid rgba(85, 122, 134, 0.08)",
          }}
        >
          {activeTab === "privacy" && <PrivacyContent />}
          {activeTab === "terms" && <TermsContent />}
          {activeTab === "delete" && <DeleteContent />}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="text-center text-teal"
        style={{
          padding: "clamp(24px, 2vw, 40px) clamp(24px, 5vw, 96px)",
          fontSize: "clamp(12px, 0.8vw, 14px)",
          borderTop: "1px solid rgba(85, 122, 134, 0.1)",
        }}
      >
        <p>Copyright 2026 © auro.com — All rights reserved.</p>
      </footer>
    </main>
  );
}

/* ============================================= */
/*  Shared Styles                                */
/* ============================================= */

const sectionTitle: React.CSSProperties = {
  fontSize: "clamp(20px, 1.8vw, 30px)",
  fontWeight: 600,
  lineHeight: 1.3,
  marginBottom: "clamp(12px, 1.2vw, 20px)",
  color: "#3C4D47",
};

const subTitle: React.CSSProperties = {
  fontSize: "clamp(16px, 1.2vw, 22px)",
  fontWeight: 600,
  lineHeight: 1.4,
  marginBottom: "clamp(8px, 0.8vw, 14px)",
  marginTop: "clamp(20px, 2vw, 36px)",
  color: "#3C4D47",
};

const paragraph: React.CSSProperties = {
  fontSize: "clamp(14px, 1vw, 17px)",
  lineHeight: 1.75,
  color: "#3C4D47",
  marginBottom: "clamp(12px, 1vw, 18px)",
};

const highlight: React.CSSProperties = {
  color: "#557A86",
  fontWeight: 600,
};

const listStyle: React.CSSProperties = {
  ...paragraph,
  paddingLeft: "clamp(16px, 1.5vw, 28px)",
  marginBottom: "clamp(12px, 1vw, 18px)",
};

const divider: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid rgba(85, 122, 134, 0.12)",
  margin: "clamp(24px, 2.5vw, 44px) 0",
};

/* ============================================= */
/*  Privacy Policy                               */
/* ============================================= */

function PrivacyContent() {
  return (
    <div>
      <h2 style={sectionTitle}>Privacy Policy</h2>
      <p style={paragraph}>
        <span style={highlight}>[Company Name]</span> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the application{" "}
        <span style={highlight}>[App Name]</span>. This Privacy Policy explains how we collect,
        use, store, and protect your personal information in accordance with the Brazilian General
        Data Protection Law (LGPD — Law No. 13,709/2018).
      </p>
      <p style={paragraph}>
        By using our application, you agree to the practices described in this policy. If you do not agree
        with any part of this policy, please discontinue use of the application.
      </p>

      <hr style={divider} />

      {/* 1. Data We Collect */}
      <h3 style={subTitle}>1. Data We Collect</h3>
      <p style={paragraph}>We may collect the following categories of personal data:</p>
      <ul style={listStyle}>
        <li style={{ marginBottom: "8px" }}><strong>Personal identification data:</strong> full name and email address.</li>
        <li style={{ marginBottom: "8px" }}><strong>Login information:</strong> credentials used for authentication (email/password or social login).</li>
        <li style={{ marginBottom: "8px" }}><strong>Usage data:</strong> interactions within the app, features accessed, session duration, and preferences.</li>
        <li style={{ marginBottom: "8px" }}><strong>Technical data:</strong> IP address, device type, operating system, browser version, and unique device identifiers.</li>
      </ul>

      <hr style={divider} />

      {/* 2. Purpose of Data Collection */}
      <h3 style={subTitle}>2. Purpose of Data Collection</h3>
      <p style={paragraph}>Your data is collected and processed for the following purposes:</p>
      <ul style={listStyle}>
        <li style={{ marginBottom: "8px" }}><strong>Service operation:</strong> to provide, maintain, and personalize your experience within the application.</li>
        <li style={{ marginBottom: "8px" }}><strong>Improvements:</strong> to analyze usage patterns and continuously improve our features and performance.</li>
        <li style={{ marginBottom: "8px" }}><strong>Communication:</strong> to send important notifications, updates, and respond to your requests or inquiries.</li>
        <li style={{ marginBottom: "8px" }}><strong>Security:</strong> to detect and prevent fraud, abuse, or unauthorized access.</li>
      </ul>

      <hr style={divider} />

      {/* 3. Legal Basis */}
      <h3 style={subTitle}>3. Legal Basis (LGPD — Art. 7)</h3>
      <p style={paragraph}>
        We process your personal data based on the following legal grounds as provided by the LGPD:
      </p>
      <ul style={listStyle}>
        <li style={{ marginBottom: "8px" }}>Your express consent (Art. 7, I).</li>
        <li style={{ marginBottom: "8px" }}>Performance of a contract or preliminary procedures (Art. 7, V).</li>
        <li style={{ marginBottom: "8px" }}>Legitimate interest of the controller (Art. 7, IX).</li>
        <li style={{ marginBottom: "8px" }}>Compliance with legal or regulatory obligations (Art. 7, II).</li>
      </ul>

      <hr style={divider} />

      {/* 4. Data Sharing */}
      <h3 style={subTitle}>4. Data Sharing</h3>
      <p style={paragraph}>
        We do not sell your personal data. We may share your data only with:
      </p>
      <ul style={listStyle}>
        <li style={{ marginBottom: "8px" }}>Service providers who assist in operating and maintaining the application (e.g., cloud hosting, analytics).</li>
        <li style={{ marginBottom: "8px" }}>Legal authorities, when required by law, court order, or regulation.</li>
      </ul>
      <p style={paragraph}>
        All third parties are contractually required to protect your data in accordance with applicable law.
      </p>

      <hr style={divider} />

      {/* 5. Data Storage and Security */}
      <h3 style={subTitle}>5. Data Storage and Security</h3>
      <p style={paragraph}>
        Your data is stored on secure servers with industry-standard encryption and access controls. We implement
        appropriate technical and organizational measures to protect your data against unauthorized access,
        alteration, disclosure, or destruction.
      </p>
      <p style={paragraph}>
        While we take reasonable steps to safeguard your information, no system is entirely secure. We cannot
        guarantee absolute security of your data.
      </p>

      <hr style={divider} />

      {/* 6. Your Rights */}
      <h3 style={subTitle}>6. Your Rights</h3>
      <p style={paragraph}>
        Under the LGPD, you have the right to:
      </p>
      <ul style={listStyle}>
        <li style={{ marginBottom: "8px" }}>Confirm the existence of data processing.</li>
        <li style={{ marginBottom: "8px" }}>Access your personal data.</li>
        <li style={{ marginBottom: "8px" }}>Request correction of incomplete, inaccurate, or outdated data.</li>
        <li style={{ marginBottom: "8px" }}>Request anonymization, blocking, or deletion of unnecessary or excessive data.</li>
        <li style={{ marginBottom: "8px" }}>Request data portability to another service provider.</li>
        <li style={{ marginBottom: "8px" }}>Request deletion of data processed with your consent.</li>
        <li style={{ marginBottom: "8px" }}>Obtain information about entities with whom your data has been shared.</li>
        <li style={{ marginBottom: "8px" }}>Revoke your consent at any time.</li>
      </ul>
      <p style={paragraph}>
        To exercise any of these rights, please contact us at{" "}
        <span style={highlight}>[Contact Email]</span>.
      </p>

      <hr style={divider} />

      {/* 7. Cookies */}
      <h3 style={subTitle}>7. Cookies and Tracking Technologies</h3>
      <p style={paragraph}>
        We may use cookies and similar tracking technologies to enhance your experience, analyze usage,
        and personalize content. You may manage your cookie preferences through your browser or device settings.
      </p>

      <hr style={divider} />

      {/* 8. Changes */}
      <h3 style={subTitle}>8. Changes to This Policy</h3>
      <p style={paragraph}>
        We reserve the right to update this Privacy Policy at any time. Changes will be posted within the
        application and/or on our website. Continued use of the application after any changes constitutes
        acceptance of the updated policy.
      </p>

      <hr style={divider} />

      {/* 9. Contact */}
      <h3 style={subTitle}>9. Contact</h3>
      <p style={paragraph}>
        If you have any questions or concerns regarding this Privacy Policy or the processing of your data,
        please contact us:
      </p>
      <p style={paragraph}>
        <span style={highlight}>[Company Name]</span><br />
        Email: <span style={highlight}>[Contact Email]</span>
      </p>
    </div>
  );
}

/* ============================================= */
/*  Terms of Use                                 */
/* ============================================= */

function TermsContent() {
  return (
    <div>
      <h2 style={sectionTitle}>Terms of Use</h2>
      <p style={paragraph}>
        Welcome to <span style={highlight}>[App Name]</span>. These Terms of Use govern your access to
        and use of the application operated by <span style={highlight}>[Company Name]</span>. By using
        the application, you agree to be bound by these terms.
      </p>

      <hr style={divider} />

      {/* 1. Acceptance */}
      <h3 style={subTitle}>1. Acceptance of Terms</h3>
      <p style={paragraph}>
        By creating an account or using <span style={highlight}>[App Name]</span>, you acknowledge that
        you have read, understood, and agree to comply with these Terms of Use. If you do not agree,
        you must not access or use the application.
      </p>

      <hr style={divider} />

      {/* 2. Account */}
      <h3 style={subTitle}>2. User Account</h3>
      <p style={paragraph}>
        To access certain features, you may be required to create an account. You are responsible for:
      </p>
      <ul style={listStyle}>
        <li style={{ marginBottom: "8px" }}>Providing accurate and up-to-date information.</li>
        <li style={{ marginBottom: "8px" }}>Maintaining the confidentiality of your login credentials.</li>
        <li style={{ marginBottom: "8px" }}>All activities that occur under your account.</li>
      </ul>
      <p style={paragraph}>
        You must notify us immediately of any unauthorized use of your account.
      </p>

      <hr style={divider} />

      {/* 3. Acceptable Use */}
      <h3 style={subTitle}>3. Acceptable Use</h3>
      <p style={paragraph}>You agree not to:</p>
      <ul style={listStyle}>
        <li style={{ marginBottom: "8px" }}>Use the application for any unlawful or unauthorized purpose.</li>
        <li style={{ marginBottom: "8px" }}>Interfere with, disrupt, or compromise the security of the application.</li>
        <li style={{ marginBottom: "8px" }}>Attempt to gain unauthorized access to other users&apos; accounts or data.</li>
        <li style={{ marginBottom: "8px" }}>Upload malicious software, spam, or harmful content.</li>
        <li style={{ marginBottom: "8px" }}>Reproduce, distribute, or modify any part of the application without prior written consent.</li>
      </ul>

      <hr style={divider} />

      {/* 4. Intellectual Property */}
      <h3 style={subTitle}>4. Intellectual Property</h3>
      <p style={paragraph}>
        All content, features, design, trademarks, and code within <span style={highlight}>[App Name]</span>{" "}
        are the exclusive intellectual property of <span style={highlight}>[Company Name]</span> or its
        licensors. You may not copy, modify, distribute, or create derivative works without prior
        written authorization.
      </p>

      <hr style={divider} />

      {/* 5. Limitation of Liability */}
      <h3 style={subTitle}>5. Limitation of Liability</h3>
      <p style={paragraph}>
        The application is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind,
        either express or implied. <span style={highlight}>[Company Name]</span> shall not be liable for:
      </p>
      <ul style={listStyle}>
        <li style={{ marginBottom: "8px" }}>Any direct, indirect, incidental, or consequential damages arising from the use or inability to use the application.</li>
        <li style={{ marginBottom: "8px" }}>Loss of data, revenue, or profits resulting from system failures, interruptions, or unauthorized access.</li>
        <li style={{ marginBottom: "8px" }}>Actions taken by third parties, including other users of the application.</li>
      </ul>

      <hr style={divider} />

      {/* 6. Modification of Terms */}
      <h3 style={subTitle}>6. Modification of Terms</h3>
      <p style={paragraph}>
        We reserve the right to modify these Terms of Use at any time. Updated terms will be posted within
        the application and/or on our website. Continued use of the application after changes are published
        constitutes acceptance of the updated terms.
      </p>
      <p style={paragraph}>
        We recommend reviewing these terms periodically to stay informed of any updates.
      </p>

      <hr style={divider} />

      {/* 7. Termination */}
      <h3 style={subTitle}>7. Termination</h3>
      <p style={paragraph}>
        We may suspend or terminate your account at any time, with or without notice, if you violate
        these terms or engage in conduct that we deem harmful to the application or its users.
      </p>
      <p style={paragraph}>
        You may also terminate your account at any time by following the account deletion process
        described in our &quot;Delete Account&quot; section.
      </p>

      <hr style={divider} />

      {/* 8. Governing Law */}
      <h3 style={subTitle}>8. Governing Law</h3>
      <p style={paragraph}>
        These Terms of Use shall be governed by and construed in accordance with the laws of the
        Federative Republic of Brazil. Any disputes arising from these terms shall be submitted to
        the competent courts of Brazil.
      </p>

      <hr style={divider} />

      {/* 9. Contact */}
      <h3 style={subTitle}>9. Contact</h3>
      <p style={paragraph}>
        If you have any questions about these Terms of Use, please contact us:
      </p>
      <p style={paragraph}>
        <span style={highlight}>[Company Name]</span><br />
        Email: <span style={highlight}>[Contact Email]</span>
      </p>
    </div>
  );
}

/* ============================================= */
/*  Delete Account                               */
/* ============================================= */

function DeleteContent() {
  return (
    <div>
      <h2 style={sectionTitle}>Account Deletion Policy</h2>
      <p style={paragraph}>
        We respect your right to manage your personal data. If you wish to delete your account on{" "}
        <span style={highlight}>[App Name]</span>, please follow the instructions below.
      </p>

      <hr style={divider} />

      {/* Steps */}
      <h3 style={subTitle}>How to Delete Your Account</h3>
      <p style={paragraph}>
        To request the deletion of your account, follow these steps within the application:
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 1.2vw, 20px)", margin: "clamp(16px, 1.5vw, 28px) 0" }}>
        {[
          { step: "1", title: "Open the App", desc: "Launch the application and log in to your account." },
          { step: "2", title: 'Go to "My Account"', desc: "Navigate to the account settings section." },
          { step: "3", title: 'Tap "Delete Account"', desc: 'Find and tap the "Delete Account" button in your account settings.' },
          { step: "4", title: "Confirm Your Request", desc: "Review the information and confirm that you wish to permanently delete your account." },
        ].map((item) => (
          <div
            key={item.step}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "clamp(12px, 1.2vw, 20px)",
              padding: "clamp(16px, 1.5vw, 24px)",
              background: "#F4F3F1",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                minWidth: "clamp(32px, 2.5vw, 44px)",
                height: "clamp(32px, 2.5vw, 44px)",
                borderRadius: "50%",
                background: "#557A86",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "clamp(14px, 1vw, 18px)",
                flexShrink: 0,
              }}
            >
              {item.step}
            </div>
            <div>
              <p style={{ fontWeight: 600, fontSize: "clamp(14px, 1.1vw, 18px)", color: "#3C4D47", marginBottom: "4px" }}>
                {item.title}
              </p>
              <p style={{ fontSize: "clamp(13px, 0.9vw, 16px)", color: "#557A86", lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr style={divider} />

      {/* Important info */}
      <h3 style={subTitle}>Important Information</h3>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "clamp(12px, 1.2vw, 20px)", margin: "clamp(16px, 1.5vw, 28px) 0" }}>
        {[
          {
            title: "Permanent Deletion",
            desc: "Account deletion is permanent and irreversible. All your personal data, preferences, and history will be removed from our systems.",
          },
          {
            title: "Completion Timeframe",
            desc: "Your account and associated data will be fully deleted within a maximum of 30 days from the date of your request.",
          },
          {
            title: "Legal Retention",
            desc: "Certain data may be retained beyond the deletion period if required by law or regulation (e.g., tax records, legal proceedings).",
          },
        ].map((card) => (
          <div
            key={card.title}
            style={{
              padding: "clamp(16px, 1.5vw, 24px)",
              background: "#F4F3F1",
              borderRadius: "12px",
              borderLeft: "4px solid #557A86",
            }}
          >
            <p style={{ fontWeight: 600, fontSize: "clamp(14px, 1.1vw, 18px)", color: "#3C4D47", marginBottom: "8px" }}>
              {card.title}
            </p>
            <p style={{ fontSize: "clamp(13px, 0.9vw, 16px)", color: "#557A86", lineHeight: 1.6 }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      <hr style={divider} />

      {/* Data that may be retained */}
      <h3 style={subTitle}>Data That May Be Retained</h3>
      <p style={paragraph}>
        In compliance with Brazilian legislation, the following data may be retained even after account deletion:
      </p>
      <ul style={listStyle}>
        <li style={{ marginBottom: "8px" }}><strong>Tax and financial records</strong> — as required by tax regulations.</li>
        <li style={{ marginBottom: "8px" }}><strong>Access logs</strong> — retained for 6 months as required by the Marco Civil da Internet (Law No. 12,965/2014).</li>
        <li style={{ marginBottom: "8px" }}><strong>Data related to ongoing legal proceedings</strong> — retained until the matter is resolved.</li>
      </ul>

      <hr style={divider} />

      {/* Alternative */}
      <h3 style={subTitle}>Alternative Contact</h3>
      <p style={paragraph}>
        If you are unable to delete your account through the application, you may also request
        deletion by contacting us directly at{" "}
        <span style={highlight}>[Contact Email]</span>. Please include your registered email
        address and the subject line &quot;Account Deletion Request&quot;.
      </p>
      <p style={paragraph}>
        We will process your request and confirm the deletion within the 30-day timeframe.
      </p>
    </div>
  );
}
