'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BatteryCharging,
  Sun,
  Truck,
  Store,
  Droplets,
  Shirt,
  Coffee,
  Zap,
  Shield,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen text-foreground bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Zap className="h-4.5 w-4.5 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">
              Charging Plaza
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
            <Link href="#charging" className="hover:text-foreground transition-colors">
              Charging
            </Link>
            <Link href="#amenities" className="hover:text-foreground transition-colors">
              Amenities
            </Link>
            <Link href="#fleet" className="hover:text-foreground transition-colors">
              Fleet
            </Link>
            <Link href="#timeline" className="hover:text-foreground transition-colors">
              Timeline
            </Link>
            <Link
              href="#contact"
              className="ml-2 px-4 py-2 rounded-full bg-foreground text-white text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Get in Touch
            </Link>
          </nav>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-3 text-sm">
              <Link href="#charging" className="py-2" onClick={() => setMobileMenuOpen(false)}>Charging</Link>
              <Link href="#amenities" className="py-2" onClick={() => setMobileMenuOpen(false)}>Amenities</Link>
              <Link href="#fleet" className="py-2" onClick={() => setMobileMenuOpen(false)}>Fleet</Link>
              <Link href="#timeline" className="py-2" onClick={() => setMobileMenuOpen(false)}>Timeline</Link>
              <Link href="#contact" className="py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Get in Touch</Link>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-white">
          <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-36">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-light text-accent text-xs font-medium mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Now in development
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
              >
                The future of travel,
                <br />
                <span className="text-accent">powered by the sun.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-xl"
              >
                Premium all-in-one charging destinations for passenger EVs and
                commercial trucks. Eliminating range anxiety, nationwide.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <a
                  href="#timeline"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-white font-medium text-sm hover:bg-foreground/90 transition-colors"
                >
                  View Progress <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#charging"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-surface transition-colors"
                >
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative gradient blob */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Stats bar */}
        <section className="border-y border-border bg-white">
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '200+', label: 'Charging Bays' },
              { value: '350kW', label: 'Max Speed' },
              { value: '24/7', label: 'Always Open' },
              { value: '100%', label: 'Solar Powered' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Charging Infrastructure */}
        <section id="charging" className="py-20 md:py-28 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
                Infrastructure
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Built for every EV on the road
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted max-w-xl mx-auto">
                Whether you drive a sedan or a Class 8 rig, our plazas deliver the power, space, and compatibility you need.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {[
                {
                  icon: <BatteryCharging className="h-5 w-5" />,
                  title: 'Passenger EV',
                  desc: 'Dozens of ultra-fast chargers dedicated to cars and SUVs with plenty of pull-in space.',
                  color: 'text-blue-600 bg-blue-50',
                },
                {
                  icon: <Truck className="h-5 w-5" />,
                  title: 'Heavy-Duty Trucks',
                  desc: 'Massive pull-through bays engineered for commercial electric trucks. No unhooking trailers.',
                  color: 'text-foreground bg-surface',
                },
                {
                  icon: <Sun className="h-5 w-5" />,
                  title: 'Solar Resilience',
                  desc: 'Off-grid solar canopies and battery microgrids powering clean energy for your fleet.',
                  color: 'text-amber-600 bg-amber-50',
                },
                {
                  icon: <Shield className="h-5 w-5" />,
                  title: 'Universal Plugs',
                  desc: 'NACS and CCS natively supported on all dispensers — no adapters, no accounts, no hassle.',
                  color: 'text-emerald-600 bg-emerald-50',
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center mb-5`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-base mb-2">{card.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
                  Amenities
                </motion.p>
                <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Recharge yourself, too.
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="text-muted mb-10">
                  More than a plug in an empty lot. We&apos;re building full-service travel oases so you can refresh while your vehicle charges.
                </motion.p>

                <motion.div variants={stagger} className="space-y-6">
                  {[
                    {
                      icon: <Store className="h-5 w-5 text-orange-500" />,
                      bg: 'bg-orange-50',
                      title: 'Modern Convenience Store',
                      desc: 'Road-trip essentials, fresh snacks, and everything for the road ahead.',
                    },
                    {
                      icon: <Droplets className="h-5 w-5 text-blue-500" />,
                      bg: 'bg-blue-50',
                      title: 'Premium Showers',
                      desc: 'Spotless, private shower suites designed for commercial drivers.',
                    },
                    {
                      icon: <Shirt className="h-5 w-5 text-violet-500" />,
                      bg: 'bg-violet-50',
                      title: 'On-Site Laundry',
                      desc: 'High-capacity washers and dryers to handle chores seamlessly.',
                    },
                    {
                      icon: <Coffee className="h-5 w-5 text-emerald-600" />,
                      bg: 'bg-emerald-50',
                      title: 'Coffee Shop & Lounge',
                      desc: 'Barista-crafted coffee, high-speed Wi-Fi, and a comfortable lounge.',
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      className="flex items-start gap-4"
                    >
                      <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-sm text-muted">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-surface">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
                    alt="Modern coffee shop interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fleet */}
        <section id="fleet" className="py-20 md:py-28 bg-foreground text-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.div
                variants={fadeUp}
                className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6"
              >
                <Truck className="h-6 w-6 text-accent" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              >
                Fleet & Logistics
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-white/60 mb-10 leading-relaxed"
              >
                Located along major freight corridors, our plazas provide
                uncompromising infrastructure for commercial electric fleets.
                Massive pull-through lanes and a reservation system to book
                charging windows ahead of time.
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-medium text-sm hover:bg-white/90 transition-colors"
                >
                  Inquire About Fleet Rates <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="py-20 md:py-28 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
                Progress
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Construction timeline
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted max-w-xl mx-auto">
                Follow our flagship location from blueprint to grand opening.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                {
                  quarter: 'Q3 2026',
                  title: 'Groundbreaking & Foundation',
                  desc: 'Site clearing and foundation work for the main building and amenities.',
                  status: 'Upcoming',
                  active: true,
                },
                {
                  quarter: 'Q4 2026',
                  title: 'Structure & Chargers',
                  desc: 'Solar canopy erection, convenience store framing, and charger installation.',
                  status: 'Planned',
                  active: false,
                },
                {
                  quarter: 'Q1 2027',
                  title: 'Grand Opening',
                  desc: 'Full commissioning with active stores, showers, laundry, and all chargers live.',
                  status: 'Planned',
                  active: false,
                },
              ].map((phase) => (
                <motion.div
                  key={phase.quarter}
                  variants={fadeUp}
                  className={`relative p-6 rounded-2xl border ${
                    phase.active
                      ? 'border-accent bg-accent/5'
                      : 'border-border bg-card'
                  }`}
                >
                  {phase.active && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      {phase.status}
                    </span>
                  )}
                  {!phase.active && (
                    <span className="text-xs text-muted mb-3 block">{phase.status}</span>
                  )}
                  <h3 className="text-xl font-bold mb-1">{phase.quarter}</h3>
                  <p className={`font-medium text-sm mb-2 ${phase.active ? 'text-foreground' : 'text-muted'}`}>
                    {phase.title}
                  </p>
                  <p className="text-sm text-muted">{phase.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center max-w-xl mx-auto"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              >
                Stay in the loop
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted mb-8">
                Be the first to know when our flagship location opens and get
                early access to fleet pricing.
              </motion.p>
              <motion.div variants={fadeUp} custom={2}>
                <a
                  href="mailto:hello@chargingplaza.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-white font-medium text-sm hover:bg-foreground/90 transition-colors"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
              <Zap className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="font-semibold text-sm">Charging Plaza</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#" className="hover:text-foreground transition-colors">Press</a>
            <a href="#" className="hover:text-foreground transition-colors">Investors</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Charging Plaza. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
