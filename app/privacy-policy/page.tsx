import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | U-MOVEX",
  description:
    "How U-MOVEX collects, uses and protects your personal information. Privacy policy for moving services in Orlando and across Florida.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://u-movex.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "40px 20px", lineHeight: 1.7 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12 }}>Privacy Policy</h1>
      <p style={{ marginBottom: 24 }}>Last updated: September, 2025</p>

      <p style={{ marginBottom: 16 }}>
        At <strong>U-MOVEX</strong>, accessible from{" "}
        <a href="https://u-movex.com" rel="noopener noreferrer">https://u-movex.com</a>, we respect and value your
        privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website
        and services.
      </p>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 28, marginBottom: 8 }}>Information We Collect</h2>
      <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
        <li>Your name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Pickup and drop-off addresses</li>
        <li>Any additional details you choose to provide</li>
      </ul>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 28, marginBottom: 8 }}>How We Use Your Information</h2>
      <p style={{ marginBottom: 16 }}>
        We use the collected information to provide moving services, contact you regarding your move, improve our
        services, and send updates, quotes, or confirmations related to your request. We do <strong>not</strong> sell,
        rent, or share your personal data with third parties, except as required by law.
      </p>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 28, marginBottom: 8 }}>Cookies</h2>
      <p style={{ marginBottom: 16 }}>
        Our website may use cookies to improve your browsing experience and analyze website traffic. You can disable
        cookies in your browser at any time.
      </p>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 28, marginBottom: 8 }}>Data Security</h2>
      <p style={{ marginBottom: 16 }}>
        We take appropriate security measures to protect your personal data. However, no method of transmission over the
        Internet is 100% secure.
      </p>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 28, marginBottom: 8 }}>Your Rights</h2>
      <p style={{ marginBottom: 16 }}>
        You may request access, correction, or deletion of your personal information by contacting us:
      </p>
      <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
        <li>📞 +1 (407) 639-6520</li>
        <li>📧 info@u-movex.com</li>
      </ul>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 28, marginBottom: 8 }}>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Updates will be posted on this page with a new "Last
        updated" date.
      </p>
    </main>
  );
}
