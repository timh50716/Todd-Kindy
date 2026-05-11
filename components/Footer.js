import Link from 'next/link';

const services = [
  'Gravel Driveway Repair',
  'Drainage Systems',
  'Land Clearing',
  'Forestry Mulching',
  'Bush Hogging',
  'Demolition & Excavation',
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="block text-white font-black text-xl tracking-widest uppercase">
                Southeastern
              </span>
              <span className="block text-amber-500 font-black text-xl tracking-widest uppercase">
                Land Specialists
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Professional land management and excavation services. Built on hard
              work, reliability, and results that last.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-6">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-zinc-400 hover:text-amber-500 text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-6">
              Contact Us
            </h3>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li>
                <span className="text-white font-semibold block">Phone</span>
                <a href="tel:+1-000-000-0000" className="hover:text-amber-500 transition-colors">
                  (000) 000-0000
                </a>
              </li>
              <li>
                <span className="text-white font-semibold block">Email</span>
                <a href="mailto:info@southeasternlandspecialists.com" className="hover:text-amber-500 transition-colors">
                  info@southeasternlandspecialists.com
                </a>
              </li>
              <li>
                <span className="text-white font-semibold block">Service Area</span>
                Southeastern United States
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Southeastern Land Specialists. All rights reserved.
          </p>
          <nav className="flex gap-6 text-xs text-zinc-500">
            <Link href="/" className="hover:text-amber-500 transition-colors uppercase tracking-widest">Home</Link>
            <Link href="/about" className="hover:text-amber-500 transition-colors uppercase tracking-widest">About</Link>
            <Link href="/services" className="hover:text-amber-500 transition-colors uppercase tracking-widest">Services</Link>
            <Link href="/contact" className="hover:text-amber-500 transition-colors uppercase tracking-widest">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
