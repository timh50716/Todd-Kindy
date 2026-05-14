import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: "Thank You | Southeastern Land Specialists",
  description: "Thank you for contacting Southeastern Land Specialists. We'll be in touch within 24 hours.",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <>
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `gtag('event', 'conversion', {'send_to': 'AW-669034165/KoSRCM2t3ZEDELXNgr8C'});`,
        }}
      />
      {/* PAGE HEADER */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Request Received</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white uppercase mt-3 leading-tight">
            Thank You
          </h1>
          <div className="w-16 h-1 bg-amber-600 mt-6" />
        </div>
      </section>

      {/* THANK YOU CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="text-6xl mb-8">✅</div>

          <h2 className="text-3xl font-black text-black uppercase mb-4">
            Your Message Is On Its Way
          </h2>

          <p className="text-zinc-600 text-lg leading-relaxed mb-4">
            We received your request and will get back to you within <strong>24 hours</strong> with a free estimate.
          </p>
          <p className="text-zinc-500 text-base mb-12">
            If you need to reach us sooner, call Todd directly at{' '}
            <a href="tel:+18282311146" className="text-amber-600 font-bold hover:underline">
              828-231-1146
            </a>
            .
          </p>

          <div className="bg-zinc-950 p-10 mb-12 text-left">
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">What Happens Next</p>
            <ul className="space-y-4">
              {[
                'Todd reviews your project details',
                'We schedule a free on-site estimate at your property',
                'You receive a straight, no-surprise quote',
                'Work begins on your timeline',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-amber-600 font-black text-lg shrink-0">{i + 1}.</span>
                  <span className="text-zinc-300 text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-widest uppercase px-8 py-4 text-sm transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-block bg-zinc-950 hover:bg-zinc-800 text-white font-bold tracking-widest uppercase px-8 py-4 text-sm transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
