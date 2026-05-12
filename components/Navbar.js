'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/location', label: 'Location' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-lg' : 'bg-black/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo image */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://assets.cdn.filesafe.space/J5hu37m4rtiqVGr6WbVa/media/6a039cc6f07c4898897b679d.png"
              alt="Southeastern Land Specialists"
              width={180}
              height={60}
              className="h-14 w-auto object-contain"
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-widest uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-amber-500'
                    : 'text-white hover:text-amber-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+18282311146"
              className="border border-white hover:border-amber-500 hover:text-amber-500 text-white text-sm font-bold tracking-widest uppercase px-5 py-2.5 transition-colors duration-200"
            >
              📞 Call Us
            </a>
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold tracking-widest uppercase px-5 py-2.5 transition-colors duration-200"
            >
              Free Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-semibold tracking-widest uppercase py-3 border-b border-zinc-800 transition-colors ${
                  pathname === link.href ? 'text-amber-500' : 'text-white hover:text-amber-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-4">
              <a
                href="tel:+18282311146"
                className="flex-1 border border-white text-white text-sm font-bold tracking-widest uppercase text-center py-3 transition-colors hover:border-amber-500 hover:text-amber-500"
              >
                📞 Call Us
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold tracking-widest uppercase text-center py-3 transition-colors"
              >
                Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
