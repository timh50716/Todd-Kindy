import Link from 'next/link';

const values = [
  {
    title: 'Integrity',
    desc: 'We give honest assessments, fair pricing, and deliver exactly what we promise — every single time.',
  },
  {
    title: 'Quality',
    desc: 'We do not cut corners. Every project is finished to a standard we are proud to put our name on.',
  },
  {
    title: 'Reliability',
    desc: 'We show up when we say we will, work hard, and see every project through to completion.',
  },
  {
    title: 'Community',
    desc: 'We are a local company that cares about the land and the people who live and work on it.',
  },
];

const team = [
  {
    name: 'Todd Kindy',
    role: 'Owner & Operator',
    bio: 'Todd has spent over a decade working the land across the Southeast. He founded Southeastern Land Specialists with a simple mission: do honest work, treat customers right, and leave every property better than he found it.',
  },
];

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Who We Are</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white uppercase mt-3 leading-tight">
            About Us
          </h1>
          <div className="w-16 h-1 bg-amber-600 mt-6" />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase">Our Story</span>
              <h2 className="text-4xl font-black text-black uppercase mt-3 mb-6">
                Built on Hard Work
              </h2>
              <div className="w-16 h-1 bg-amber-600 mb-8" />
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Southeastern Land Specialists was founded by Todd Kindy with one goal in mind:
                  to provide the Southeast with reliable, professional land management and excavation
                  services that actually get the job done.
                </p>
                <p>
                  What started as a one-man operation has grown into a trusted name across the region.
                  We have worked on everything from residential driveways to large-scale commercial
                  land clearing projects — and we bring the same dedication to every single one.
                </p>
                <p>
                  We invest in the best equipment, hire experienced operators, and never compromise
                  on safety or quality. When you hire Southeastern Land Specialists, you get a team
                  that treats your property like their own.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-widest uppercase px-6 py-3 text-sm transition-colors"
              >
                Work With Us
              </Link>
            </div>

            {/* Decorative block */}
            <div className="relative">
              <div className="bg-zinc-950 p-10 h-full min-h-72 flex flex-col justify-center">
                <div className="border-l-4 border-amber-600 pl-6">
                  <p className="text-white text-xl font-black leading-snug uppercase mb-4">
                    &ldquo;We treat every property like our own and every customer like a neighbor.&rdquo;
                  </p>
                  <span className="text-amber-500 text-sm font-bold tracking-widest uppercase">
                    — Todd Kindy, Owner
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-amber-600 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE OWNER */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase">Meet the Team</span>
            <h2 className="text-4xl font-black text-black uppercase mt-3">Leadership</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4" />
          </div>

          <div className="max-w-2xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white border border-zinc-200 p-10 flex flex-col sm:flex-row gap-8 items-start">
                <div className="w-20 h-20 bg-amber-600 flex items-center justify-center text-white font-black text-2xl shrink-0">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-black text-black uppercase">{member.name}</h3>
                  <span className="text-amber-600 text-xs font-bold tracking-widest uppercase">{member.role}</span>
                  <p className="text-zinc-600 text-sm leading-relaxed mt-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">What Drives Us</span>
            <h2 className="text-4xl font-black text-white uppercase mt-3">Our Values</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-zinc-900 border border-zinc-800 p-8 hover:border-amber-600 transition-colors">
                <div className="w-8 h-0.5 bg-amber-600 mb-6" />
                <h3 className="text-white font-black uppercase text-sm tracking-wide mb-3">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Contact us today for a free estimate on your next project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black hover:bg-zinc-900 text-white font-bold tracking-widest uppercase px-8 py-4 text-sm transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
