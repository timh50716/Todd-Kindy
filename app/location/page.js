import Link from 'next/link';

const serviceAreas = [
  'Buncombe County, NC',
  'Burke County, NC',
  'McDowell County, NC',
];

const localAreas = [
  'Rural residential properties',
  'Agricultural and farm land',
  'Commercial development sites',
  'Private hunting and recreational land',
  'Subdivisions and new construction',
  'Waterfront and lakeside properties',
];

export default function Location() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Where We Work</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white uppercase mt-3 leading-tight">
            Service Area
          </h1>
          <div className="w-16 h-1 bg-amber-600 mt-6" />
          <p className="text-zinc-300 text-lg mt-6 max-w-xl">
            We proudly serve Buncombe, Burke, and McDowell counties in Western North Carolina.
          </p>
        </div>
      </section>

      {/* MAP + INFO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Map embed */}
            <div className="w-full">
              <h2 className="text-2xl font-black text-black uppercase mb-4">Find Us</h2>
              <div className="w-12 h-1 bg-amber-600 mb-8" />
              <div className="bg-zinc-100 border border-zinc-200 w-full aspect-video flex items-center justify-center">
                <iframe
                  title="Southeastern Land Specialists Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830017.2860405043!2d-82.0570824!3d35.64608795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f92f7318dad9%3A0x8c4723a6b1835b78!2sSoutheastern%20Land%20Specialists%2C%20LLC!5e0!3m2!1sen!2sus!4v1778622605536!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '360px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-amber-600 block mb-1">Base Location</span>
                    <span className="text-zinc-700 text-sm">P.O. Box 536, Swannanoa, NC 28778</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-amber-600 block mb-1">Phone</span>
                    <a href="tel:+18282311146" className="text-zinc-700 hover:text-amber-600 transition-colors text-sm">828-231-1146</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-amber-600 block mb-1">Hours</span>
                    <span className="text-zinc-700 text-sm">Mon–Fri: 7:00am – 6:00pm</span>
                    <span className="text-zinc-700 text-sm block">Saturday: 8:00am – 4:00pm</span>
                    <span className="text-zinc-500 text-sm block">Sunday: Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service area info */}
            <div>
              <h2 className="text-2xl font-black text-black uppercase mb-4">Areas We Serve</h2>
              <div className="w-12 h-1 bg-amber-600 mb-8" />
              <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                We are based in Swannanoa, NC and proudly serve Buncombe, Burke, and McDowell counties.
                Not sure if we cover your area? Give us a call and we will let you know.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-10">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="text-amber-600 font-black">→</span>
                    <span className="text-zinc-700 text-sm font-semibold">{area}</span>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-950 p-8">
                <h3 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">Property Types</h3>
                <ul className="space-y-3">
                  {localAreas.map((area) => (
                    <li key={area} className="flex items-start gap-3">
                      <span className="text-amber-600 font-black mt-0.5 shrink-0">→</span>
                      <span className="text-zinc-300 text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 bg-amber-600 p-8">
                <p className="text-white font-black text-lg uppercase mb-3">Not Sure If We Cover Your Area?</p>
                <p className="text-amber-100 text-sm mb-6">
                  Give us a call or drop us a message — we will let you know if we can get to you and what it would take.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-black hover:bg-zinc-900 text-white font-bold tracking-widest uppercase px-6 py-3 text-sm transition-colors"
                >
                  Ask Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-4">
            We Come to You — Free Estimates
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
            We will visit your property, assess the job, and give you a straight, no-surprise quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-widest uppercase px-8 py-4 text-sm transition-colors"
          >
            Request a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
