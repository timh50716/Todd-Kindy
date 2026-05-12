import Link from 'next/link';

const services = [
  {
    image: 'https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a03989c29adc07d21e719e6.png',
    title: 'Gravel Driveway Repair',
    shortDesc: 'Restore and reinforce your gravel driveway.',
    details: [
      'Grading and regrading for proper drainage',
      'Fresh gravel installation and topping',
      'Pothole and rut repair',
      'Culvert installation and clearing',
      'Long driveway and road maintenance',
    ],
    desc: 'A damaged or rutted driveway is more than an eyesore — it can cause serious drainage problems and vehicle damage. We repair and restore gravel driveways of all sizes, from short residential lanes to long rural access roads. Our process includes proper grading, base repair, and fresh gravel application to give you a smooth, lasting result.',
  },
  {
    image: 'https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a03989df90b5bc73b041943.png',
    title: 'Drainage Systems',
    shortDesc: 'Keep water moving away from your property.',
    details: [
      'French drain installation',
      'Culvert installation and replacement',
      'Swale grading and shaping',
      'Catch basin installation',
      'Erosion control solutions',
    ],
    desc: 'Poor drainage can destroy your yard, foundation, and driveway faster than almost anything else. We design and install custom drainage systems tailored to your property — from simple culvert work to full French drain networks. We identify where water is collecting and build a system that moves it away efficiently and permanently.',
  },
  {
    image: 'https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a03989c67457445b9ebebfb.png',
    title: 'Land Clearing',
    shortDesc: 'Clear your land for building, farming, or recreation.',
    details: [
      'Tree and stump removal',
      'Brush and undergrowth clearing',
      'Debris removal and hauling',
      'Site grading after clearing',
      'Residential and commercial lots',
    ],
    desc: 'Whether you are preparing a building site, reclaiming agricultural land, or clearing a recreational property, we have the equipment and expertise to get it done efficiently. We handle full land clearing including tree felling, stump grinding, brush removal, and debris hauling — leaving you with a clean, ready-to-use property.',
  },
  {
    image: 'https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a03989c4d2085f898d04d3d.png',
    title: 'Forestry Mulching & Bush Hogging',
    shortDesc: 'Reclaim overgrown land without hauling debris.',
    details: [
      'Forestry mulching for dense brush and trees',
      'Bush hogging for fields and open areas',
      'Fence line clearing',
      'Firebreak creation',
      'Right-of-way maintenance',
    ],
    desc: 'Forestry mulching is one of the most efficient ways to clear land — the mulcher grinds trees, brush, and stumps in one pass, leaving behind a natural wood chip mulch that enriches the soil. For lighter vegetation and open fields, our bush hog service quickly cuts down overgrowth. Both services are ideal for reclaiming land without the cost of hauling debris.',
  },
  {
    image: 'https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a03989c330f3d5313e0b0bc.png',
    title: 'Demolition & Excavation',
    shortDesc: 'Safe, efficient demolition and precision earthwork.',
    details: [
      'Residential and commercial structure demolition',
      'Foundation and slab removal',
      'Pond and lake construction',
      'Building pad preparation',
      'Trenching and utility excavation',
    ],
    desc: 'From tearing down old structures to digging new foundations, we handle demolition and excavation projects of all scales. We work safely and efficiently, with proper permits and disposal of all materials. Our excavation services include site prep, pond construction, trenching, and precision grading to get your project ready for the next phase.',
  },
];

export default function Services() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">What We Offer</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white uppercase mt-3 leading-tight">
            Our Services
          </h1>
          <div className="w-16 h-1 bg-amber-600 mt-6" />
          <p className="text-zinc-300 text-lg mt-6 max-w-xl">
            Professional land management and excavation services for residential,
            agricultural, and commercial properties across the Southeast.
          </p>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-6 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center py-4">
            {services.map((s) => (
              <a
                key={s.title}
                href={`#${s.title.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                className="text-white text-xs font-bold tracking-widest uppercase border border-white/30 hover:border-white px-4 py-2 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL SECTIONS */}
      <div className="bg-white">
        {services.map((service, i) => (
          <section
            key={service.title}
            id={service.title.toLowerCase().replace(/[^a-z]+/g, '-')}
            className={`py-20 ${i % 2 === 1 ? 'bg-zinc-50' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text column */}
                <div className={i % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                  <span className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase">Service</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-black uppercase mt-2 mb-4">
                    {service.title}
                  </h2>
                  <div className="w-12 h-1 bg-amber-600 mb-6" />
                  <p className="text-zinc-600 leading-relaxed mb-8">{service.desc}</p>

                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="text-amber-600 font-black mt-0.5 shrink-0">→</span>
                        <span className="text-zinc-600 text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-widest uppercase px-6 py-3 text-sm transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>

                {/* Photo column */}
                <div className={`overflow-hidden ${i % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 lg:h-[480px] object-cover"
                  />
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-amber-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-xl mx-auto">
            Give us a call or send us a message. We will come out, assess the property, and recommend the right approach.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black hover:bg-zinc-900 text-white font-bold tracking-widest uppercase px-8 py-4 text-sm transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
