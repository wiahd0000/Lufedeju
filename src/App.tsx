/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { MoveRight, Menu, X, ArrowRight, Brain, Cpu, Database, Code, ShieldCheck, BarChart3, Users, Mail, Phone, Globe, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tighter ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-brand-navy'}`}>
            LUFNET <span className="text-brand-blue">TECH</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                !scrolled && location.pathname === '/' ? "text-white/80 hover:text-white" : "text-brand-navy/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              !scrolled && location.pathname === '/' 
                ? "bg-white text-brand-navy hover:bg-brand-sky" 
                : "bg-brand-blue text-white hover:bg-brand-navy"
            }`}
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-brand-navy" /> : <Menu className={!scrolled && location.pathname === '/' ? "text-white" : "text-brand-navy"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-brand-light-gray p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-brand-navy hover:text-brand-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 bg-brand-blue text-white text-center rounded-lg font-semibold"
            >
              Book a Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter">LUFNET</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Empowering organizations with intelligent technology solutions. From AI automation to custom software development.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors"><Linkedin size={16} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors"><Twitter size={16} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors"><Facebook size={16} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><Link to="/services" className="hover:text-brand-blue">AI Automation</Link></li>
            <li><Link to="/services" className="hover:text-brand-blue">Power Platform</Link></li>
            <li><Link to="/services" className="hover:text-brand-blue">Data Engineering</Link></li>
            <li><Link to="/services" className="hover:text-brand-blue">Software Development</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><Link to="/about" className="hover:text-brand-blue">About Us</Link></li>
            <li><Link to="/industries" className="hover:text-brand-blue">Industries</Link></li>
            <li><Link to="/contact" className="hover:text-brand-blue">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-blue">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Newsletter</h4>
          <p className="text-white/60 text-sm mb-4">Stay updated with our latest insights and AI innovations.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-blue" />
            <button className="bg-brand-blue hover:bg-brand-blue/80 p-2 rounded-lg transition-colors"><ArrowRight size={18} /></button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs text-center md:text-left">
        <p>© 2026 LufNet Technologies Ltd. All rights reserved.</p>
        <p>Made with precision by LufNet</p>
      </div>
    </footer>
  );
};

// --- Pages ---

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen bg-brand-navy flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dzcinges8/video/upload/v1776865253/home_real_xn9icr.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold mb-6 tracking-wider uppercase">
              <ShieldCheck size={14} /> Intelligent IT Consulting
            </div>
            <h1 className="text-5xl md:text-7xl text-white font-bold leading-[1.1] mb-8 tracking-tighter">
              Transforming Businesses with <span className="text-brand-blue">Intelligent</span> Technology
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              LufNet Technologies Ltd delivers cutting-edge IT consulting, AI automation, and digital transformation solutions that empower organizations to innovate, scale, and stay competitive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-lg hover:bg-brand-blue/90 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Get Started <MoveRight size={20} />
              </Link>
              <Link to="/contact#book" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <div className="absolute bottom-0 w-full py-8 border-t border-white/5 bg-brand-navy/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-center lg:text-left">Industries We Serve</p>
            <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale">
              <div className="flex items-center gap-2 text-white font-bold tracking-tight"><Globe size={24} /> FINANCE</div>
              <div className="flex items-center gap-2 text-white font-bold tracking-tight"><ShieldCheck size={24} /> HEALTHCARE</div>
              <div className="flex items-center gap-2 text-white font-bold tracking-tight"><Users size={24} /> RETAIL</div>
              <div className="flex items-center gap-2 text-white font-bold tracking-tight"><BarChart3 size={24} /> GOVERNMENT</div>
              <div className="flex items-center gap-2 text-white font-bold tracking-tight"><Cpu size={24} /> TECHNOLOGY</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-brand-navy mb-8 tracking-tight font-bold">A Partner Committed to Your <span className="text-brand-blue">Digital Growth</span></h2>
              <p className="text-brand-slate text-lg mb-8 leading-relaxed">
                At LufNet, we don't just provide technology; we deliver solutions that align with your strategic goals. Our team combines deep technical expertise with industry insight to help you navigate the complex digital landscape.
              </p>
              <Link to="/about" className="group flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all">
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Experienced Professionals", img: "https://res.cloudinary.com/dzcinges8/image/upload/v1776868087/1_professional_yotka5.jpg" },
                { label: "AI & Automation Experts", img: "https://res.cloudinary.com/dzcinges8/image/upload/v1776868086/2_ai_autmation_xnzsgo.jpg" },
                { label: "Tailored Solutions", img: "https://res.cloudinary.com/dzcinges8/image/upload/v1776868086/3_Tailored_Solutions_os5lvv.jpg" },
                { label: "End-to-End Delivery", img: "https://res.cloudinary.com/dzcinges8/image/upload/v1776868086/4_end_to_end_delivery_jyhj4z.jpg" }
              ].map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square">
                  <img 
                    src={item.img} 
                    referrerPolicy="no-referrer" 
                    alt={item.label} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-brand-navy/20 transition-colors"></div>
                  <div className="absolute inset-0 p-6 flex items-end">
                    <span className="font-bold text-sm text-white leading-tight drop-shadow-md">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brand-light-gray">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl text-brand-navy font-bold mb-4 tracking-tight">Our Core Services</h2>
          <p className="text-brand-slate max-w-2xl mx-auto">Explore our specialist technology solutions designed to scale your enterprise.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "AI Automation", 
              desc: "Automate processes and decisions with intelligent solutions.", 
              icon: <Brain />, 
              path: "/services",
              img: "https://res.cloudinary.com/dzcinges8/image/upload/v1776869395/5_ai_automation_p7tzeb.jpg"
            },
            { 
              title: "Power Platform", 
              desc: "Build apps, automate workflows, and gain real-time insights.", 
              icon: <Cpu />, 
              path: "/services",
              img: "https://res.cloudinary.com/dzcinges8/image/upload/v1776869394/6_power_platform_s4wdrq.jpg"
            },
            { 
              title: "Data Engineering", 
              desc: "Design robust data platforms for analytics and BI.", 
              icon: <Database />, 
              path: "/services",
              img: "https://res.cloudinary.com/dzcinges8/image/upload/v1776869394/7_data_enginering_hhn0ab.jpg"
            },
            { 
              title: "Software Development", 
              desc: "Modern web, mobile, and custom enterprise applications.", 
              icon: <Code />, 
              path: "/services",
              img: "https://res.cloudinary.com/dzcinges8/image/upload/v1776869394/8_software_engineering_kofuih.jpg"
            }
          ].map((service, i) => (
            <Link key={i} to={service.path} className="bg-white rounded-2xl border border-brand-light-gray hover:border-brand-blue hover:-translate-y-2 transition-all flex flex-col shadow-sm group overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.img} 
                  referrerPolicy="no-referrer" 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors"></div>
                <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg text-brand-blue shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-navy mb-4">{service.title}</h3>
                <p className="text-brand-slate text-sm mb-6 leading-relaxed flex-grow">{service.desc}</p>
                <div className="text-brand-blue font-bold text-sm flex items-center gap-2">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Industries Slider Strip (Static for now) */}
      <section className="py-12 bg-white border-y border-brand-light-gray">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 md:gap-4 overflow-hidden">
          {["Finance", "Healthcare", "Retail", "Education", "Government", "Technology", "Logistics"].map((ind) => (
            <span key={ind} className="text-brand-slate/40 font-bold uppercase tracking-widest text-xs hover:text-brand-blue transition-colors cursor-default">
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-8 leading-tight">Ready to accelerate your digital transformation?</h2>
          <Link to="/contact" className="inline-block px-10 py-5 bg-white text-brand-navy rounded-xl font-bold text-lg hover:bg-brand-sky hover:px-12 transition-all">
            Contact LufNet Technologies Today
          </Link>
          <p className="mt-8 text-white/50 text-sm">Discover how technology can drive your business forward.</p>
        </div>
      </section>
    </main>
  );
};

const About = () => (
  <main className="pt-32">
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl font-bold text-brand-navy mb-8">Who We Are</h1>
          <p className="text-brand-slate text-lg mb-6 leading-relaxed">
            LufNet Technologies Ltd is a leading IT consulting firm dedicated to helping businesses leverage the power of technology to achieve their strategic objectives. Our mission is to provide innovative, scalable, and reliable technology solutions that drive digital growth and transformation.
          </p>
          <p className="text-brand-slate text-lg leading-relaxed">
            With years of experience across various industries, our team of experts brings a unique blend of technical expertise and business acumen to every project. We pride ourselves on our client-focused approach, ensuring that every solution we deliver is tailored to meet the specific needs of our clients.
          </p>
        </div>
        <div className="space-y-8">
          <div className="p-8 bg-brand-navy text-white rounded-2xl shadow-xl">
            <h2 className="text-sm font-bold text-brand-blue tracking-[0.2em] uppercase mb-4">Our Mission</h2>
            <p className="text-2xl font-serif italic leading-relaxed">
              "To empower organizations through innovative technology solutions that improve efficiency, drive growth, and create sustainable competitive advantage."
            </p>
          </div>
          <div className="p-8 bg-brand-sky border border-brand-blue/10 rounded-2xl">
            <h2 className="text-sm font-bold text-brand-blue tracking-[0.2em] uppercase mb-4">Our Vision</h2>
            <p className="text-xl text-brand-navy font-bold leading-relaxed">
              "To become a trusted global technology partner known for delivering intelligent solutions that transform businesses."
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-24 bg-brand-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-brand-navy mb-16 text-center">Core Values</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { title: "Innovation", desc: "Pioneering new solutions.", icon: <Cpu /> },
            { title: "Integrity", desc: "Transparent and ethical behavior.", icon: <ShieldCheck /> },
            { title: "Excellence", desc: "Uncompromising quality standards.", icon: <BarChart3 /> },
            { title: "Collaboration", desc: "Working together for success.", icon: <Users /> },
            { title: "Customer Success", desc: "Our clients are our priority.", icon: <Globe /> }
          ].map((v, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-brand-navy/5 text-center">
              <div className="w-12 h-12 bg-brand-sky rounded-lg flex items-center justify-center text-brand-blue mx-auto mb-4">{v.icon}</div>
              <h3 className="font-bold text-brand-navy mb-2">{v.title}</h3>
              <p className="text-xs text-brand-slate leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Approach Section */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-brand-navy mb-16 text-center">Our Approach</h2>
        <div className="relative border-l-2 border-brand-blue/20 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between space-y-12 md:space-y-0">
          {[
            { step: "01", title: "Discovery", desc: "Understanding your unique business needs." },
            { step: "02", title: "Solution Design", desc: "Architecting the perfect technology fit." },
            { step: "03", title: "Agile Development", desc: "Iterative building with full transparency." },
            { step: "04", title: "Testing & Validation", desc: "Ensuring stability and performance." },
            { step: "05", title: "Deployment", desc: "Seamless launch into production environment." },
            { step: "06", title: "Continuous Support", desc: "Ongoing maintenance and optimization." }
          ].map((s, i) => (
            <div key={i} className="relative md:text-center px-8 md:px-0">
              <div className="absolute top-0 -left-[2.15rem] md:left-1/2 md:-translate-x-1/2 md:-top-4 w-8 h-8 rounded-full bg-brand-blue border-4 border-white z-10 hidden md:block"></div>
              <span className="text-4xl font-bold text-brand-blue/10 block mb-2">{s.step}</span>
              <h3 className="font-bold text-brand-navy mb-2">{s.title}</h3>
              <p className="text-xs text-brand-slate max-w-[150px] mx-auto leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

const Services = () => (
  <main className="pt-32">
    <section className="bg-brand-navy py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Technology Solutions Built for Your Business</h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          Comprehensive IT consulting services focusing on AI automation, data engineering, and scalable software solutions.
        </p>
      </div>
    </section>

    <section className="py-24 max-w-7xl mx-auto px-6 divide-y divide-brand-light-gray">
      {[
        { title: "AI Automation & Workflows", icon: <Brain />, content: "Our AI automation services help you streamline operations, reduce manual errors, and make data-driven decisions. From intelligent document processing to predictive analytics, we build solutions that learn and grow with your business." },
        { title: "AI Services & Integration", icon: <Cpu />, content: "Integrate powerful AI capabilities into your existing ecosystem. We specialize in natural language processing (NLP), machine learning model deployment, and AI-powered recommendation systems." },
        { title: "Microsoft Power Platform", icon: <BarChart3 />, content: "Leverage the full potential of Microsoft's ecosystem. We develop custom Power Apps, automate complex workflows with Power Automate, and create interactive business intelligence reports with Power BI." },
        { title: "Data Engineering", icon: <Database />, content: "Unlock the value of your data. We design and implement robust data architectures, ETL pipelines, and cloud-native data warehouses using modern stacks like Snowflake, Azure, and AWS." },
        { title: "Software Development", icon: <Code />, content: "Custom software tailored to your specific needs. From progressive web apps to native mobile applications, our engineering team delivers high-performance, secure, and scalable digital products." },
        { title: "Testing & Quality Assurance", icon: <ShieldCheck />, content: "Reliability is at the core of our delivery. We provide comprehensive software testing services, including automated regression testing, performance audits, and user acceptance testing (UAT)." },
        { title: "Business Analysis", icon: <Users />, content: "Bridging the gap between business needs and technical solutions. Our analysts help you define requirements, map processes, and ensure that every technology investment yields maximum ROI." }
      ].map((s, i) => (
        <div key={i} className="py-20 grid lg:grid-cols-2 gap-12 items-center group">
          <div className={i % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
            <div className="w-16 h-16 bg-brand-sky rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
            <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">{s.title}</h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-8">{s.content}</p>
            <ul className="space-y-3">
              {["Tailored Strategy", "Expert Implementation", "Post-Launch Support"].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-brand-navy">
                  <ShieldCheck className="text-brand-blue" size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={`p-1 bg-brand-light-gray rounded-3xl ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
            <div className="aspect-video bg-white rounded-[20px] shadow-sm flex items-center justify-center text-brand-blue overflow-hidden">
               <img src={`https://picsum.photos/seed/${s.title}/800/450`} referrerPolicy="no-referrer" alt={s.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700" />
            </div>
          </div>
        </div>
      ))}
    </section>
  </main>
);

const Industries = () => (
  <main className="pt-32">
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-5xl font-bold text-brand-navy mb-6 tracking-tight">Industries We Serve</h1>
        <p className="text-brand-slate max-w-2xl mx-auto">We bring specialized technical expertise to a wide range of industry sectors.</p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Finance & Banking", desc: "Intelligent automation for compliance, fraud detection, and real-time reporting.", icon: <Globe /> },
          { title: "Healthcare", desc: "Secure data platforms and patient management systems focusing on clinical analytics.", icon: <ShieldCheck /> },
          { title: "Retail & E-commerce", desc: "AI-powered recommendation systems and inventory analytics for scaling brands.", icon: <Users /> },
          { title: "Government", desc: "Scalable digital services and infrastructure modernisation for public sectors.", icon: <BarChart3 /> },
          { title: "Education", desc: "Learning management system integrations and automated student analytics platforms.", icon: <Brain /> },
          { title: "Technology", desc: "Rapid software development and QA services for fast-growing tech companies.", icon: <Cpu /> },
          { title: "Professional Services", desc: "Business process automation and data insights for law, accounting, and consulting firms.", icon: <Code /> }
        ].map((ind, i) => (
          <div key={i} className="p-10 bg-brand-sky/30 border border-brand-blue/5 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-brand-blue/20 transition-all group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:rotate-6 transition-transform shadow-sm">
              {ind.icon}
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight">{ind.title}</h3>
            <p className="text-brand-slate leading-relaxed mb-6">{ind.desc}</p>
            <Link to="/contact" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  </main>
);

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <main className="pt-32 bg-brand-light-gray min-h-screen">
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <h1 className="text-5xl font-bold text-brand-navy mb-8 tracking-tight">We Are Ready to Help You Transform Your Business</h1>
          <p className="text-brand-slate text-lg mb-12 leading-relaxed">
            Get in touch with the LufNet team and discover how technology can drive your business forward.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-blue shadow-sm group-hover:scale-110 transition-transform"><Mail /></div>
              <div>
                <p className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-1">Email Us</p>
                <div className="flex flex-col">
                  <a href="mailto:akinluf@lufnettechnologies.com" className="text-brand-navy font-bold text-sm md:text-lg hover:text-brand-blue transition-colors">akinluf@lufnettechnologies.com</a>
                  <a href="mailto:creativeluf@gmail.com" className="text-brand-navy font-bold text-sm md:text-lg hover:text-brand-blue transition-colors">creativeluf@gmail.com</a>
                  <a href="mailto:akinluf@gmail.com" className="text-brand-navy font-bold text-sm md:text-lg hover:text-brand-blue transition-colors">akinluf@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-blue shadow-sm group-hover:scale-110 transition-transform"><Phone /></div>
              <div>
                <p className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-1">WhatsApp</p>
                <a href="https://wa.me/447807000703" target="_blank" rel="noopener noreferrer" className="text-brand-navy font-bold text-lg hover:text-brand-blue transition-colors">+44 7807 000703</a>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-blue shadow-sm group-hover:scale-110 transition-transform"><Globe /></div>
              <div>
                <p className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-1">Website</p>
                <a href="https://www.lufnettechnologies.com" className="text-brand-navy font-bold text-lg hover:text-brand-blue transition-colors">www.lufnettechnologies.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-brand-navy/5 relative">
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-brand-sky rounded-full flex items-center justify-center text-brand-blue mx-auto mb-6">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-3xl font-bold text-brand-navy mb-4">Message Sent!</h3>
                <p className="text-brand-slate">Thank you for reaching out. Our team will contact you shortly.</p>
                <button onClick={() => setFormState('idle')} className="mt-8 text-brand-blue font-bold underline">Send another message</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-navy tracking-widest uppercase">Full Name</label>
                    <input required type="text" placeholder="Your full name" className="w-full px-4 py-3 bg-brand-light-gray border border-transparent focus:border-brand-blue rounded-xl focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-navy tracking-widest uppercase">Email Address</label>
                    <input required type="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-brand-light-gray border border-transparent focus:border-brand-blue rounded-xl focus:outline-none transition-all" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-navy tracking-widest uppercase">Company Name</label>
                    <input required type="text" placeholder="Company name" className="w-full px-4 py-3 bg-brand-light-gray border border-transparent focus:border-brand-blue rounded-xl focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-navy tracking-widest uppercase">Service Interest</label>
                    <select className="w-full px-4 py-3 bg-brand-light-gray border border-transparent focus:border-brand-blue rounded-xl focus:outline-none transition-all appearance-none cursor-pointer">
                      <option>AI Automation</option>
                      <option>Power Platform</option>
                      <option>Data Engineering</option>
                      <option>Software Development</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy tracking-widest uppercase">Message</label>
                  <textarea required rows={4} placeholder="Tell us about your project or challenge..." className="w-full px-4 py-3 bg-brand-light-gray border border-transparent focus:border-brand-blue rounded-xl focus:outline-none transition-all resize-none"></textarea>
                </div>
                <button 
                  disabled={formState === 'loading'}
                  type="submit" 
                  className={`w-full py-4 bg-brand-blue text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-blue/90 transform active:scale-95 transition-all ${formState === 'loading' ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {formState === 'loading' ? 'Sending...' : 'Send Message'} <ArrowRight size={18} />
                </button>
                <p className="text-[10px] text-brand-slate text-center mt-4">Your information is kept private and never shared with third parties.</p>
              </form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

const Privacy = () => (
  <main className="pt-32">
    <section className="py-24 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-brand-navy mb-8">Privacy Policy</h1>
      <div className="prose prose-brand-navy max-w-none text-brand-slate space-y-6">
        <p>Last updated: April 2026</p>
        <p>LufNet Technologies Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website.</p>
        <h2 className="text-2xl font-bold text-brand-navy mt-12">Information Collected</h2>
        <p>We collect information that you provide to us directly, such as when you fill out a contact form or subscribe to our newsletter. This may include your name, email address, company name, and phone number.</p>
        <h2 className="text-2xl font-bold text-brand-navy mt-12">How We Use Your Information</h2>
        <p>We use your information to respond to your inquiries, provide the services you request, and send you updates about our services. We do not sell or share your personal information with third parties for marketing purposes.</p>
        <h2 className="text-2xl font-bold text-brand-navy mt-12">Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, or destruction.</p>
      </div>
    </section>
  </main>
);

const NotFound = () => (
  <main className="h-screen flex items-center justify-center bg-brand-navy text-white text-center px-6">
    <div className="absolute inset-0 tech-grid opacity-10"></div>
    <div className="relative z-10">
      <h1 className="text-[120px] font-bold text-brand-blue leading-none mb-4">404</h1>
      <h2 className="text-4xl font-bold mb-8">Page Not Found</h2>
      <p className="text-white/60 mb-12 max-w-md mx-auto">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to="/" className="inline-block px-8 py-4 bg-brand-blue text-white rounded-xl font-bold hover:bg-brand-blue/80 transition-all">
        Back to Home
      </Link>
    </div>
  </main>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
