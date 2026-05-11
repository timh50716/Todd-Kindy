import Link from 'next/link';

const testimonials = [
  {
    quote: "Todd and his team cleared 3 acres of dense brush and repaired our entire driveway in two days. Unbelievable work ethic and they left the place cleaner than they found it.",
    name: "James R.",
    location: "Alabama",
  },
  {
    quote: "We had serious flooding issues every time it rained. Southeastern Land came out, installed a French drain system, and we have not had a single problem since. Worth every penny.",
    name: "Sandra M.",
    location: "Georgia",
  },
  {
    quote: "Fair pricing, showed up on time, and the excavation work was exactly what we needed. I have used a lot of contractors and Todd is one of the best.",
    name: "Mike T.",
    location: "Mississippi",
  },
];

const services = [
  {
    icon: '🪨',
    title: 'Gravel Driveway Repair',
    desc: 'Restore and reinforce your gravel driveway with professional grading, regrading, and fresh gravel installation built to last.',
  },
  {
    icon: '💧',
    title: 'Drainage Systems',
    desc: 'Protect your property from water damage with custom-designed drainage solutions including French drains, culverts, and swales.',
  },
  {
    icon: '🌲',
    title: 'Land Clearing',
    desc: 'Full-service land clearing for residential and commercial properties — trees, stumps, brush, and debris removed efficiently.',
  },
  {
    icon: '🌿',
    title: 'Forestry Mulching & Bush Hogging',
    desc: 'Reclaim overgrown land with high-powered forestry mulching and bush hogging for fields, fence lines, and wooded lots.',
  },
  {
    icon: '🏗️',
    title: 'Demolition & Excavation',
    desc: 'Safe, controlled demolition and precision excavation for structures, foundations, ponds, and site prep projects of any scale.',
  },
];

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '5★', label: 'Average Rating' },
];

const whyUs = [
  {
    title: 'Licensed & Insured',
    desc: 'Fully licensed and insured for your peace of mind on every job.',
  },
  {
    title: 'Local Experts',
    desc: 'We know the land, climate, and terrain of the Southeast inside and out.',
  },
  {
    title: 'Modern Equipment',
    desc: 'Top-of-the-line machinery means faster, cleaner, and safer results.',
  },
  {
    title: 'Free Estimates',
    desc: 'No pressure, no obligation. We come to your property and give you a straight price.',
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-gradient min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-amber-500" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-amber-500" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <div className="inline-block mb-6">
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase border border-amber-500 px-4 py-2">
              Southeastern United States
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase leading-none tracking-tight mb-6">
            Land & Property
            <span className="block text-amber-500">Specialists</span>
          </h1>

          <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Gravel driveway repair, drainage systems, land clearing, forestry mulching,
            and excavation services — delivered with precision and built to last.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-widest uppercase px-8 py-4 text-sm transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="border border-white hover:border-amber-500 text-white hover:text-amber-500 font-bold tracking-widest uppercase px-8 py-4 text-sm transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* STATS BAR */}
      <section className="bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-10 px-6 border-r border-amber-500 last:border-r-0">
                <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-amber-100 text-xs font-semibold tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-black text-black uppercase mt-3 mb-4">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border border-zinc-200 hover:border-amber-600 p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-black text-black uppercase tracking-wide mb-3 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
            {/* CTA card */}
            <div className="bg-black p-8 flex flex-col justify-between">
              <div>
                <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Ready to Start?</span>
                <h3 className="text-xl font-black text-white uppercase mt-3 mb-4">
                  Get Your Free Estimate Today
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  No pressure, no obligation. We will come to your property and give you an honest quote.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-widest uppercase text-center px-6 py-3 text-sm transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="border-2 border-black hover:border-amber-600 hover:text-amber-600 text-black font-bold tracking-widest uppercase px-8 py-4 text-sm transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">The Southeastern Difference</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white uppercase mt-3 mb-6 leading-tight">
                Why Choose Us
              </h2>
              <div className="w-16 h-1 bg-amber-600 mb-8" />
              <p className="text-zinc-400 leading-relaxed mb-8">
                With years of hands-on experience across the Southeast, we bring the right equipment,
                the right expertise, and a no-nonsense work ethic to every project — big or small.
              </p>
              <Link
                href="/about"
                className="inline-block border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white font-bold tracking-widest uppercase px-6 py-3 text-sm transition-all duration-200"
              >
                Learn About Us
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div key={item.title} className="bg-zinc-900 border border-zinc-800 p-6 hover:border-amber-600 transition-colors duration-200">
                  <div className="w-8 h-0.5 bg-amber-600 mb-4" />
                  <h3 className="text-white font-black text-sm uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase">What Clients Say</span>
            <h2 className="text-4xl sm:text-5xl font-black text-black uppercase mt-3 mb-4">
              Testimonials
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-zinc-200 p-8 hover:border-amber-500 transition-colors duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed italic mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500 flex items-center justify-center text-white font-black text-sm shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <span className="text-black font-black text-sm uppercase tracking-wide block">{t.name}</span>
                    <span className="text-zinc-400 text-xs">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-amber-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-4">
            Ready to Transform Your Land?
          </h2>
          <p className="text-amber-100 text-lg mb-10 max-w-xl mx-auto">
            Contact us today for a free, no-obligation estimate. We will get the job done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black hover:bg-zinc-900 text-white font-bold tracking-widest uppercase px-8 py-4 text-sm transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold tracking-widest uppercase px-8 py-4 text-sm transition-colors duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
