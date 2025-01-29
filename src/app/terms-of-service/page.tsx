'use client';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-8 gold-text-gradient">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="mb-6">Last updated: January 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using the services of Rajini by The Waters, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Booking and Reservations</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>All reservations are subject to availability and confirmation</li>
              <li>Valid identification is required at check-in</li>
              <li>Payment terms and cancellation policies apply as specified during booking</li>
              <li>Special requests are subject to availability and may incur additional charges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Rates are in LKR/USD as specified</li>
              <li>Prices include applicable taxes and fees</li>
              <li>Additional charges may apply for extra services</li>
              <li>Secure payment methods are required for all transactions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Cancellation Policy</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Free cancellation up to 48 hours before check-in</li>
              <li>Late cancellations may incur charges</li>
              <li>No-shows will be charged the full amount</li>
              <li>Special events and peak season bookings may have different terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. House Rules</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Check-in time: 2:00 PM</li>
              <li>Check-out time: 12:00 PM</li>
              <li>No smoking in rooms</li>
              <li>Pets are not allowed</li>
              <li>Quiet hours: 10:00 PM - 7:00 AM</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Liability</h2>
            <p className="mb-4">The hotel is not liable for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Loss or damage to personal belongings</li>
              <li>Personal injury on premises (except due to hotel negligence)</li>
              <li>Service interruptions beyond our control</li>
              <li>Third-party service provider issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
            <p className="mb-4">For questions about these terms, please contact:</p>
            <p>Email: legal@rajinihotels.com<br />
            Phone: +94 76 281 0000<br />
            Address: 437 Beralihela, Colony 5, 82600 Tissamaharama, Sri Lanka</p>
          </section>
        </div>
      </div>
    </main>
  );
} 