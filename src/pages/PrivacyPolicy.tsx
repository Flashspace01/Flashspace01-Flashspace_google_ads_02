import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-medium tracking-tight text-foreground mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: February 25, 2026</p>

          <div className="space-y-8 text-foreground/80 text-[15px] leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>FlashSpace Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, website, and services.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and billing details provided during registration or booking.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our platform, including pages visited, features used, and session duration.</li>
                <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
                <li><strong>Location Data:</strong> Approximate location based on IP address or precise location if you grant permission.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our workspace services and platform.</li>
                <li>To process bookings, payments, and communicate with you about your account.</li>
                <li>To send promotional communications (you can opt out at any time).</li>
                <li>To analyze usage patterns and enhance user experience.</li>
                <li>To comply with legal obligations and enforce our terms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">4. Sharing of Information</h2>
              <p className="mb-3">We do not sell your personal information. We may share your data with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Space Partners:</strong> To facilitate workspace bookings and services you request.</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist with payment processing, analytics, and communications.</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">5. Data Security</h2>
              <p>We implement industry-standard security measures including encryption, secure servers, and access controls to protect your information. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">6. Cookies</h2>
              <p>We use cookies and similar technologies to enhance your browsing experience, analyze traffic, and personalize content. You can manage cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">7. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, correct, or delete your personal data.</li>
                <li>Opt out of marketing communications.</li>
                <li>Request data portability.</li>
                <li>Withdraw consent where applicable.</li>
              </ul>
              <p className="mt-3">To exercise these rights, contact us at <a href="mailto:privacy@flashspace.com" className="text-primary hover:underline">privacy@flashspace.com</a>.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">8. Data Retention</h2>
              <p>We retain your personal information for as long as your account is active or as needed to provide services. We may retain certain data for longer periods as required by law or for legitimate business purposes.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">9. Children's Privacy</h2>
              <p>Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website with a revised "Last updated" date.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">
                <strong>FlashSpace Technologies</strong><br />
                Email: <a href="mailto:privacy@flashspace.com" className="text-primary hover:underline">privacy@flashspace.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
