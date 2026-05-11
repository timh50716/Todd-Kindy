'use client';

import { useState } from 'react';

const contactInfo = [
  {
    label: 'Phone',
    value: '(000) 000-0000',
    href: 'tel:+10000000000',
    icon: '📞',
  },
  {
    label: 'Email',
    value: 'info@southeasternlandspecialists.com',
    href: 'mailto:info@southeasternlandspecialists.com',
    icon: '✉️',
  },
  {
    label: 'Service Area',
    value: 'Southeastern United States',
    href: null,
    icon: '📍',
  },
  {
    label: 'Hours',
    value: 'Mon–Fri: 7am–6pm  |  Sat: 8am–4pm',
    href: null,
    icon: '🕐',
  },
];

const services = [
  'Gravel Driveway Repair',
  'Drainage Systems',
  'Land Clearing',
  'Forestry Mulching',
  'Bush Hogging',
  'Demolition & Excavation',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* PAGE HEADER */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Reach Out</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white uppercase mt-3 leading-tight">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-amber-600 mt-6" />
          <p className="text-zinc-300 text-lg mt-6 max-w-xl">
            Ready to get started? Fill out the form and we will get back to you within 24 hours with a free estimate.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black text-black uppercase mb-6">Get In Touch</h2>
              <div className="w-12 h-1 bg-amber-600 mb-8" />
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <span className="text-xs font-bold tracking-widest uppercase text-amber-600 block mb-1">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a href={info.href} className="text-zinc-700 hover:text-amber-600 transition-colors text-sm">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-zinc-700 text-sm">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-zinc-950 p-8">
                <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Free Estimates</p>
                <p className="text-white font-black text-lg uppercase leading-snug mb-3">
                  We Come to You
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We offer free on-site estimates. We will come to your property, assess the work, and give you
                  a straight, no-surprise quote.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-zinc-200 px-8">
                  <div className="text-5xl mb-6">✅</div>
                  <h3 className="text-2xl font-black text-black uppercase mb-3">Message Sent!</h3>
                  <p className="text-zinc-600 max-w-md">
                    Thank you for reaching out. We will review your request and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="mt-8 bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-widest uppercase px-6 py-3 text-sm transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-zinc-700 mb-2">
                        Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-zinc-300 focus:border-amber-600 outline-none px-4 py-3 text-sm transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-zinc-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-zinc-300 focus:border-amber-600 outline-none px-4 py-3 text-sm transition-colors"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-zinc-700 mb-2">
                      Email Address <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-zinc-300 focus:border-amber-600 outline-none px-4 py-3 text-sm transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-zinc-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-zinc-300 focus:border-amber-600 outline-none px-4 py-3 text-sm transition-colors bg-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-zinc-700 mb-2">
                      Project Details <span className="text-amber-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-zinc-300 focus:border-amber-600 outline-none px-4 py-3 text-sm transition-colors resize-none"
                      placeholder="Tell us about your project — location, size, what needs to be done..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-widest uppercase py-4 text-sm transition-colors"
                  >
                    Send My Request
                  </button>

                  <p className="text-zinc-400 text-xs text-center">
                    We typically respond within 24 hours. For urgent requests, please call us directly.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
