import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NutriTools privacy policy — what data we collect, how we use it, and your rights.",
};

const LAST_UPDATED = "May 2025";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100 py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-400 text-sm">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="prose prose-gray max-w-none space-y-10 text-gray-600 text-sm leading-relaxed">

            {/* Summary */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h2 className="text-base font-bold text-green-800 mb-2">The short version</h2>
              <ul className="space-y-1 text-green-700 text-sm">
                <li>✓ We do <strong>not</strong> require you to create an account</li>
                <li>✓ We do <strong>not</strong> store your recipes or ingredient queries</li>
                <li>✓ We do <strong>not</strong> sell your data to anyone</li>
                <li>✓ We use minimal, privacy-respecting analytics</li>
                <li>✓ Your AI requests are processed in real time and not retained</li>
              </ul>
            </div>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
              <p>
                NutriTools (<strong>nutritools.ai</strong>) provides free AI-powered nutrition tools including a recipe nutrition analyzer, meal plan generator, and food substitution finder. We are an independent product built for home cooks, fitness enthusiasts, and anyone who wants to make smarter food decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. What Data We Collect</h2>
              <h3 className="font-semibold text-gray-800 mb-2">Information you provide</h3>
              <p className="mb-3">
                When you use our tools, you submit text input (ingredient lists, dietary preferences, etc.). This input is sent to our AI backend to generate a response and is <strong>not stored</strong> in any database after your session ends.
              </p>
              <h3 className="font-semibold text-gray-800 mb-2">Automatically collected data</h3>
              <p>
                Like most websites, we collect basic server logs (IP address, browser type, pages visited, time of visit). This data is used for security, debugging, and understanding general usage patterns. Logs are retained for up to 30 days and are not linked to individual users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Cookies & Local Storage</h2>
              <p>
                We use browser <strong>localStorage</strong> solely to remember your language preference (English or Chinese). No tracking cookies are set by NutriTools. Third-party services we use (such as analytics) may set their own cookies — see Section 5 for details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. How We Use Your Data</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>To process your AI requests and return results</li>
                <li>To monitor and improve site performance and reliability</li>
                <li>To understand which tools are most useful (aggregate, anonymous data only)</li>
                <li>To detect and prevent abuse or misuse of our services</li>
              </ul>
              <p className="mt-3">We do <strong>not</strong> use your data for advertising, profiling, or sale to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Services</h2>
              <p className="mb-3">NutriTools uses the following third-party services:</p>
              <div className="space-y-3">
                {[
                  { name: "AI Processing", desc: "Your ingredient queries are processed via a third-party AI API. Queries are not stored by the AI provider after processing." },
                  { name: "Hosting & CDN", desc: "The site is hosted on Vercel. Server logs may be retained for up to 30 days per their standard policy." },
                  { name: "Analytics (if enabled)", desc: "We may use privacy-friendly analytics to count page views. No personal data is collected or shared." },
                ].map(({ name, desc }) => (
                  <div key={name} className="flex gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="font-semibold text-gray-800 w-36 shrink-0 text-sm">{name}</div>
                    <div className="text-gray-500 text-sm">{desc}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
              <p>
                Your AI queries are processed in real time and are <strong>not retained</strong> in our systems after the response is returned. Server access logs are automatically deleted after 30 days. Language preference stored in localStorage stays on your device and is never sent to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Children's Privacy</h2>
              <p>
                NutriTools is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has submitted personal information through our service, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Your Rights</h2>
              <p>
                Because we do not collect or store personal data beyond server logs, there is typically no personal data to access, correct, or delete. If you have concerns about data we may hold about you, please contact us and we will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this policy as our services evolve. The "Last updated" date at the top of this page will reflect the most recent change. Continued use of NutriTools after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact</h2>
              <p>
                Questions about this privacy policy? We're happy to help. You can reach us at the email listed on our About page, or open an issue if NutriTools is open-source.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
