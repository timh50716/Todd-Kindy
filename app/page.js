import Link from 'next/link';

const testimonials = [
  {
    quote: "I came across Todd and his company after searching videos on driveway installations. He seemed very knowledgeable and friendly in his videos, so I decided to call for an estimate. While I'm unfortunately outside of his working area, Todd spent the better part of 30 minutes giving me advice, and providing recommendations on individuals that could potentially help me in my area. While I cannot speak directly for his work, I feel I can vouch for the man. People like Todd are rare in the construction industry, and I'd be happy to work with him given the opportunity.",
    name: "Joshua Reborchick",
  },
  {
    quote: "Highly recommend this company. Professional in explaining every step of the process. Efficient and finished the project in the expected amount of time. Fixed drainage issues, created ditches, and replaced the road Helene washed away. It was awesome getting to know Todd.",
    name: "Susan Horton",
  },
  {
    quote: "I've used Todd for a number of projects around my house and whatever review I do here will not do justice to how excellent Todd and Southeastern Land Specialists, LLC have performed. Competitive pricing, honest, reliable and hard working. If you need something done give Todd a call, he'll fix your problem.",
    name: "Sam Collingwood",
  },
  {
    quote: "This was my first time working with Todd. He is honest, reliable, fair, and extremely easy to work with. His recommendations for my pond were spot-on, and the final result turned out great. I'll be using him again in the future.",
    name: "Robert Brtalik",
  },
];

const servicePhotos = [
  {
    title: 'Gravel Driveway Repair',
    image: 'https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a03989c29adc07d21e719e6.png',
    href: '/services#gravel-driveway-repair',
  },
  {
    title: 'Erosion Control',
    image: 'https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a03989df90b5bc73b041943.png',
    href: '/services#drainage-systems',
  },
  {
    title: 'Land Clearing',
    image: 'https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a03989c67457445b9ebebfb.png',
    href: '/services#land-clearing',
  },
  {
    title: 'Forestry Mulching',
    image: 'https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a03989c4d2085f898d04d3d.png',
    href: '/services#forestry-mulching-bush-hogging',
  },
  {
    title: 'Bush Hogging',
    image: 'https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a03989c330f3d5313e0b0bd.png',
    href: '/services#forestry-mulching-bush-hogging',
  },
  {
    title: 'Demolition & Excavation',
    image: 'https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a03989c330f3d5313e0b0bc.png',
    href: '/services#demolition-excavation',
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src="https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a039f15138c806d2d958246.mp4"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Subtle gold accent lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-amber-400" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-amber-400" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <div className="inline-block mb-6">
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase border border-amber-500 px-4 py-2">
              Southeastern Land Specialists
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase leading-none tracking-tight mb-6">
            Land Clearing &
            <span className="block text-amber-500">Excavation</span>
          </h1>

          <p className="text-zinc-300 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            With over a decade of hands-on experience working the steep grades and clay-heavy soils of Western North Carolina, Southeastern Land Specialists delivers gravel driveway repair, land clearing, drainage systems, forestry mulching, and excavation work that holds up — season after season. Todd Kindy personally shows up to every job site in Buncombe, Burke, and McDowell County, so you always know who is doing the work.
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

      {/* ABOUT TODD */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase">Owner-Operated</span>
              <h2 className="text-4xl sm:text-5xl font-black text-black uppercase mt-3 mb-6 leading-tight">
                About Todd
              </h2>
              <div className="w-16 h-1 bg-amber-600 mb-8" />
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Todd Kindy started Southeastern Land Specialists because he saw too many property owners in Western NC get burned by contractors who didn&apos;t understand the terrain — guys who&apos;d slap in a gravel driveway without accounting for slope drainage, or clear land without thinking about erosion on the back side of a ridge.
                </p>
                <p>
                  Todd grew up in this region. He knows how Blue Ridge clay behaves after a hard rain. He knows where water wants to go on a mountain lot, and how to work with that instead of against it. When you call Southeastern Land Specialists, Todd answers. When the equipment rolls onto your property, Todd is running it.
                </p>
                <p>
                  This is an owner-operated business, which means no subcontractors, no guesswork, and no hand-off to a crew you&apos;ve never met. Todd offers honest estimates — if a job doesn&apos;t need to be done, he&apos;ll tell you. If there&apos;s a smarter, less expensive approach to your drainage problem or land clearing project, he&apos;ll walk you through it on-site, free of charge.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-block border-2 border-black hover:border-amber-600 hover:text-amber-600 text-black font-bold tracking-widest uppercase px-6 py-3 text-sm transition-colors"
              >
                More About Us
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div key={item.title} className="bg-zinc-950 border border-zinc-800 p-6 hover:border-amber-600 transition-colors duration-200">
                  <div className="w-8 h-0.5 bg-amber-600 mb-4" />
                  <h3 className="text-white font-black text-sm uppercase tracking-wide mb-2">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PHOTO GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-black text-black uppercase mt-3 mb-4">
              Our Services
            </h2>
            <p className="text-zinc-500 text-sm">Below are some recent examples of our work.</p>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicePhotos.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden block aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              {/* Base overlay */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-colors duration-500" />
              {/* Gold bar that slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <h3 className="text-white font-black uppercase tracking-widest text-sm drop-shadow-lg">
                  {item.title}
                </h3>
                <span className="text-amber-400 font-black text-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="border-2 border-black hover:border-amber-600 hover:text-amber-600 text-black font-bold tracking-widest uppercase px-8 py-4 text-sm transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">How It Works</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase mt-3 mb-4">Our Process</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Free On-Site Estimate', desc: 'Todd comes to you. He walks the property, looks at the terrain, and gives you a straight assessment of what the job requires. No phone quotes, no pressure — just honest numbers.' },
              { step: '02', title: 'Site Assessment & Plan', desc: 'Before any equipment moves, Todd maps out water flow, access points, soil conditions, and project sequencing. In Western NC, the plan matters as much as the work.' },
              { step: '03', title: 'Professional Execution', desc: 'Todd operates the equipment himself using professional-grade machinery suited for mountain terrain. The work gets done efficiently and correctly — no shortcuts, no return visits.' },
              { step: '04', title: 'Clean Completion', desc: 'When the job is done, the site is clean. Todd walks you through what was completed, answers questions, and makes sure you are satisfied before packing up.' },
            ].map((item) => (
              <div key={item.step} className="bg-zinc-900 border border-zinc-800 p-8 hover:border-amber-600 transition-colors">
                <div className="text-amber-600 font-black text-3xl mb-4">{item.step}</div>
                <h3 className="text-white font-black text-sm uppercase tracking-wide mb-3">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WESTERN NC DEMANDS A SPECIALIST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase">Local Knowledge</span>
              <h2 className="text-4xl sm:text-5xl font-black text-black uppercase mt-3 mb-6 leading-tight">
                Why Western NC Demands a Specialist
              </h2>
              <div className="w-16 h-1 bg-amber-600 mb-8" />
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Most land management problems in Western North Carolina aren&apos;t complicated — they&apos;re just specific. The Blue Ridge Mountains create conditions that contractors from flatland counties simply aren&apos;t prepared for.
                </p>
                <p>
                  The clay-heavy soils throughout Buncombe, Burke, and McDowell County compact fast and drain poorly. A gravel driveway installed without proper base material and slope calculation will wash out within two seasons. Drainage systems that work fine in the Piedmont can fail completely on a mountain lot where the grade changes every thirty feet.
                </p>
                <p>
                  Hurricane Helene reminded every property owner in this region just how brutal sustained rainfall can be on slopes, access roads, and drainage infrastructure. The repair work after an event like that isn&apos;t just cleanup — it&apos;s a chance to rebuild smarter, with drainage and erosion control that accounts for what these mountains can throw at a property.
                </p>
                <p className="font-semibold text-black">
                  Local knowledge isn&apos;t a selling point here. It&apos;s the baseline requirement for doing the job right.
                </p>
              </div>
            </div>
            <div className="bg-zinc-950 p-10">
              <h3 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-8">Service Counties</h3>
              {['Buncombe County, NC', 'Burke County, NC', 'McDowell County, NC'].map((county) => (
                <div key={county} className="flex items-center gap-4 py-5 border-b border-zinc-800 last:border-0">
                  <span className="text-amber-600 font-black text-lg">→</span>
                  <span className="text-white font-bold uppercase tracking-wide text-sm">{county}</span>
                </div>
              ))}
              <Link
                href="/location"
                className="mt-8 inline-block border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white font-bold tracking-widest uppercase px-6 py-3 text-sm transition-all duration-200"
              >
                View Service Area
              </Link>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <span className="text-black font-black text-sm uppercase tracking-wide">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Common Questions</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase mt-3 mb-4">FAQ</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto" />
          </div>
          <div className="space-y-0">
            {[
              {
                q: 'Do you offer free estimates?',
                a: 'Yes — every project starts with a free on-site estimate. Todd comes to your property, walks the land with you, and gives you a clear picture of what the work involves and what it will cost. There is no charge for the visit and no obligation to move forward. Todd has been known to spend thirty minutes or more on a site just talking through options, even when the job ends up outside his service area.',
              },
              {
                q: 'What counties do you serve?',
                a: 'Southeastern Land Specialists serves Buncombe County, Burke County, and McDowell County in North Carolina — covering the Asheville and Swannanoa area through Marion, Morganton, and the surrounding communities. If you are on the edge of the service area and are not sure whether Todd can get to you, just call 828-231-1146 and ask. He will give you a straight answer.',
              },
              {
                q: 'How long does a typical project take?',
                a: 'It depends entirely on the scope and site conditions. A gravel driveway repair might be a single day\'s work. A full land clearing and drainage system installation on a steep lot could run several days. Todd gives you a realistic time estimate during the free on-site assessment — not a number designed to win the job, but an honest projection based on what the property actually requires.',
              },
              {
                q: 'Are you licensed and insured?',
                a: 'Yes. Southeastern Land Specialists, LLC is a fully licensed and insured land management contractor in Western North Carolina. Todd carries appropriate liability coverage for heavy equipment and excavation work. If you need proof of insurance for your records or a lender, that documentation is available upon request.',
              },
              {
                q: "What's the difference between forestry mulching and bush hogging?",
                a: 'Bush hogging uses a rotary cutter to mow down overgrowth — efficient for open fields and pasture maintenance on flat or gently sloping terrain. Forestry mulching uses a machine that grinds trees, brush, and stumps into mulch on-site — better for wooded lots and steep terrain where you want to clear land without debris piles. The mulched material stays on the ground and helps with erosion control on Western NC hillsides. Todd will walk you through which approach fits your property during the free estimate.',
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-zinc-800 py-8">
                <h3 className="text-white font-black uppercase tracking-wide text-sm mb-4 flex items-start gap-3">
                  <span className="text-amber-600 shrink-0">Q.</span>
                  {item.q}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed pl-7">{item.a}</p>
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
