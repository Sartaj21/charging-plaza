'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  Mail,
} from 'lucide-react';
import { useState, useRef } from 'react';

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
            <a
              href="mailto:M2@chargingplaza.com"
              className="ml-2 px-4 py-2 rounded-full bg-foreground text-white text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Get in Touch
            </a>
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
              <a href="mailto:M2@chargingplaza.com" className="py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Get in Touch</a>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero with parallax */}
        <section ref={heroRef} className="relative overflow-hidden min-h-[90vh] flex items-center">
          {/* Parallax background image */}
          <motion.div
            style={{ y: heroImageY }}
            className="absolute inset-0 -top-20"
          >
            <img
              src="/images/plaza-render-sunset.jpg"
              alt="Charging Plaza concept render at sunset"
              className="w-full h-[120%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
          </motion.div>

          <motion.div style={{ opacity: heroOpacity }} className="relative max-w-6xl mx-auto px-6 py-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-2xl"
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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
              >
                The future of travel,
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  powered by the sun.
                </span>
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
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-white font-medium text-sm hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/20"
                >
                  View Progress
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#charging"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-white/80 backdrop-blur-sm text-sm font-medium hover:bg-white hover:border-foreground/20 transition-all duration-300"
                >
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Decorative gradient blobs */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/10 via-teal-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Stats bar */}
        <section className="border-y border-border bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/3 via-transparent to-accent/3 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {[
              { value: '200+', label: 'Charging Bays' },
              { value: '350kW', label: 'Max Speed' },
              { value: '24/7', label: 'Always Open' },
              { value: '100%', label: 'Solar Powered' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-1.5">{stat.label}</div>
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
                  img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop',
                },
                {
                  icon: <Truck className="h-5 w-5" />,
                  title: 'Heavy-Duty Trucks',
                  desc: 'Massive pull-through bays engineered for commercial electric trucks. No unhooking trailers.',
                  color: 'text-foreground bg-surface',
                  img: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=800&auto=format&fit=crop',
                },
                {
                  icon: <Sun className="h-5 w-5" />,
                  title: 'Solar Resilience',
                  desc: 'Off-grid solar canopies and battery microgrids powering clean energy for your fleet.',
                  color: 'text-amber-600 bg-amber-50',
                  img: '/images/plaza-render-closeup.png',
                },
                {
                  icon: <Shield className="h-5 w-5" />,
                  title: 'Universal Plugs',
                  desc: 'NACS and CCS natively supported on all dispensers — no adapters, no accounts, no hassle.',
                  color: 'text-emerald-600 bg-emerald-50',
                  img: 'https://images.unsplash.com/photo-1617886322168-72b886573c35?q=80&w=800&auto=format&fit=crop',
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.2, 0, 0, 1] as const } }}
                  className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:shadow-accent/8 transition-shadow duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div
                      className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center mb-4`}
                    >
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-base mb-2">{card.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Full-width image break */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="rounded-3xl overflow-hidden aspect-[21/9] relative">
            <img
              src="/images/plaza-render-solar.jpg"
              alt="Charging Plaza aerial view with solar farm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-lg md:text-2xl font-semibold max-w-lg">
                &ldquo;Building the infrastructure that makes electric travel effortless.&rdquo;
              </p>
            </div>
          </div>
        </motion.section>

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
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      className="flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-surface/60 transition-colors duration-300 cursor-default"
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

              {/* Image collage */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="relative grid grid-cols-2 gap-4"
              >
                <motion.div variants={fadeUp} className="space-y-4">
                  <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop"
                      alt="Modern lounge and cafe interior"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&auto=format&fit=crop"
                      alt="Convenience store aisle"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} custom={1} className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop"
                      alt="Clean shower facilities"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                    <img
                      src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop"
                      alt="Coffee and tea service"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-3xl -z-10" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-400/10 rounded-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fleet - with background image */}
        <section id="fleet" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/plaza-render-full.jpg"
              alt="Charging Plaza full campus render"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/85 backdrop-blur-sm" />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-2xl mx-auto text-center text-white"
            >
              <motion.div
                variants={fadeUp}
                className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 ring-1 ring-white/20"
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
                  href="mailto:M2@chargingplaza.com?subject=Fleet%20Rate%20Inquiry"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-medium text-sm hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
                >
                  <Mail className="h-4 w-4" />
                  Inquire About Fleet Rates
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`relative p-6 rounded-2xl border transition-shadow duration-300 ${
                    phase.active
                      ? 'border-accent bg-accent/5 hover:shadow-lg hover:shadow-accent/10'
                      : 'border-border bg-card hover:shadow-lg hover:shadow-black/5'
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
        <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-teal-400/5 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center max-w-xl mx-auto"
            >
              <motion.div
                variants={fadeUp}
                className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6"
              >
                <Mail className="h-6 w-6 text-accent" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              >
                Stay in the loop
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted mb-8">
                Be the first to know when our flagship location opens and get
                early access to fleet pricing.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:M2@chargingplaza.com"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-white font-medium text-sm hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/20"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
              <motion.p variants={fadeUp} custom={4} className="text-xs text-muted mt-4">
                M2@chargingplaza.com
              </motion.p>
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
            <a href="mailto:M2@chargingplaza.com" className="hover:text-foreground transition-colors">Press</a>
            <a href="mailto:M2@chargingplaza.com" className="hover:text-foreground transition-colors">Investors</a>
            <a href="mailto:M2@chargingplaza.com" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Charging Plaza. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
