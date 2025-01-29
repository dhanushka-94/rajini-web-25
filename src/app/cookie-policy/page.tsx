'use client';

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8 gold-text-gradient">Cookie Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-6">Last updated: January 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
            <p className="mb-4">Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Remembering your preferences</li>
              <li>Understanding how you use our website</li>
              <li>Improving our services based on your behavior</li>
              <li>Providing personalized content and advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Essential Cookies</h3>
                <p>Required for the website to function properly. These cannot be disabled.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Functional Cookies</h3>
                <p>Remember your preferences and enhance your experience.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Analytics Cookies</h3>
                <p>Help us understand how visitors interact with our website.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Marketing Cookies</h3>
                <p>Used to deliver relevant advertisements and track their effectiveness.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How to Manage Cookies</h2>
            <p className="mb-4">You can control and manage cookies in various ways:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Browser settings to block or delete cookies</li>
              <li>Our cookie consent tool on the website</li>
              <li>Third-party opt-out tools</li>
              <li>Device-specific settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
            <p className="mb-4">We use cookies from trusted third parties for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Social media integration</li>
              <li>Payment processing</li>
              <li>Analytics services</li>
              <li>Marketing and advertising</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Updates to This Policy</h2>
            <p className="mb-4">We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p className="mb-4">If you have any questions about our Cookie Policy, please contact us at:</p>
            <p>Email: privacy@rajinihotels.com<br />
            Phone: +94 76 281 0000<br />
            Address: 437 Beralihela, Colony 5, 82600 Tissamaharama, Sri Lanka</p>
          </section>
        </div>
      </div>
    </main>
  );
} 