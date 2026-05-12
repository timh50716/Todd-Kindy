import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* About Us */}
          <div>
            <h3 className="text-white font-black tracking-widest uppercase text-sm mb-1 pb-3 border-b border-zinc-700">
              About Us
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mt-4">
              We are a family owned and operated business focusing on first class customer
              service and expert workmanship. Southeastern Land Specialists, LLC is your
              one stop shop for all your land management and demolition needs.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/southeasternlandspecialists/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-zinc-800 hover:bg-amber-600 flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCx335vOs9rgdYB-n5pWIniA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 bg-zinc-800 hover:bg-amber-600 flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/digginlife21/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-zinc-800 hover:bg-amber-600 flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Our Location */}
          <div>
            <h3 className="text-white font-black tracking-widest uppercase text-sm mb-1 pb-3 border-b border-zinc-700">
              Our Location
            </h3>
            <div className="mt-4 space-y-2">
              <a
                href="https://maps.google.com/?q=Southeastern+Land+Specialists+LLC+Swannanoa+NC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors"
              >
                P.O. Box 536<br />
                Swannanoa, NC 28778
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-black tracking-widest uppercase text-sm mb-1 pb-3 border-b border-zinc-700">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4 text-zinc-400 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-amber-500">📞</span>
                <a href="tel:+18282311146" className="hover:text-amber-500 transition-colors">
                  828-231-1146
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500">✉️</span>
                <a href="mailto:info@southeasternlandspecialists.com" className="hover:text-amber-500 transition-colors break-all">
                  info@southeasternlandspecialists.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Southeastern Land Specialists, LLC. All rights reserved.
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
