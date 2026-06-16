import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Code2,
  Cpu,
  Workflow,
  Database,
  Cloud,
  Sparkles,
  Rocket,
  GraduationCap,
  Award,
  Users,
  Briefcase,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krishna Prashant Nartam | AI Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Krishna Prashant Nartam — AI Engineer, Full-Stack Developer, and Industrial IoT Innovator.",
      },
      { property: "og:title", content: "Krishna Prashant Nartam | AI Engineer" },
      {
        property: "og:description",
        content:
          "Building intelligent systems, AI products, and Industrial IoT solutions for the future.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Krishna Prashant Nartam",
          jobTitle: "AI Engineer & Full-Stack Developer",
          email: "mailto:krishnanartam911@gmail.com",
          telephone: "+91-9921231669",
          address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
          url: "https://github.com/KrishnaNartam",
          sameAs: [
            "https://github.com/KrishnaNartam",
            "https://linkedin.com/in/krishnanartam",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

const ROLES = [
  "AI Engineer",
  "Full-Stack Developer",
  "AI Automation Specialist",
  "Industrial IoT Innovator",
];

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "5+", label: "Major Projects" },
  { value: "10+", label: "Tech Stacks" },
  { value: "AI", label: "Automation Focus" },
  { value: "IIoT", label: "Industrial Experience" },
];

const SKILLS: { title: string; icon: typeof Brain; items: string[] }[] = [
  { title: "AI & Machine Learning", icon: Brain, items: ["Generative AI", "Prompt Engineering", "LLM Integration", "AI Agents", "Agentic Workflows", "AI Automation"] },
  { title: "Frontend", icon: Code2, items: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend", icon: Cpu, items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Python"] },
  { title: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "SQL"] },
  { title: "Automation", icon: Workflow, items: ["n8n", "Node-RED", "Workflow Automation", "System Integration"] },
  { title: "Industrial IoT", icon: Cpu, items: ["MQTT", "OEE Monitoring", "Manufacturing Analytics", "Real-Time Monitoring"] },
  { title: "Cloud & DevOps", icon: Cloud, items: ["Git", "GitHub", "Docker", "AWS"] },
  { title: "Languages", icon: Code2, items: ["Python", "JavaScript", "TypeScript", "C", "C++", "SQL"] },
];

const PROJECTS = [
  {
    name: "AI Resume Builder",
    tag: "AI · SaaS",
    desc: "AI-powered platform that generates ATS-friendly resumes using LLMs, with dashboard, auth, and PDF export.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "Tailwind"],
    impact: "ATS optimization · AI generation",
  },
  {
    name: "The Anti-Cringe Brand Sentinel",
    tag: "AI · Computer Vision",
    desc: "Multimodal AI auditor that scores social content for brand consistency and predicts engagement.",
    stack: ["Next.js", "TypeScript", "Gemini", "Computer Vision", "PostgreSQL"],
    impact: "Brand score · Engagement prediction",
  },
  {
    name: "Real-Time OEE Monitoring",
    tag: "Industrial IoT",
    desc: "Industrial dashboard delivering real-time machine performance, KPI tracking, and manufacturing analytics over MQTT.",
    stack: ["React", "Node.js", "PostgreSQL", "MQTT"],
    impact: "Live KPIs · Real-time analytics",
  },
  {
    name: "Saaj Event Management",
    tag: "Full-Stack",
    desc: "End-to-end event platform with planning, registration, discovery, and booking workflows.",
    stack: ["React", "Node.js", "PostgreSQL"],
    impact: "Booking · Discovery · Coordination",
  },
  {
    name: "Multi-Brand Real Estate Platform",
    tag: "Full-Stack",
    desc: "Scalable property platform with multi-brand listings, advanced filters, and rich detail pages.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    impact: "Multi-tenant · Scalable architecture",
  },
];

const SERVICES = [
  { icon: Brain, title: "AI Application Development", desc: "End-to-end AI products with LLMs, embeddings, and intelligent UX." },
  { icon: Sparkles, title: "AI Agent Development", desc: "Autonomous agents with tools, memory, and agentic workflows." },
  { icon: Workflow, title: "AI Automation Systems", desc: "n8n & custom pipelines that automate business operations." },
  { icon: Code2, title: "Full-Stack & SaaS", desc: "Production-ready web apps with React, Next.js, and Node.js." },
  { icon: Cpu, title: "Industrial IoT Solutions", desc: "MQTT-based real-time dashboards and manufacturing analytics." },
  { icon: Rocket, title: "System Architecture", desc: "Scalable, modular architectures for AI-first products." },
];

const EXPERIENCE = [
  { year: "2027", title: "B.E. Mechanical (Expected)", org: "Smt. Kashibai Navale College of Engineering", icon: GraduationCap },
  { year: "2024–25", title: "AI Engineering & Full-Stack Focus", org: "Built AI products, agents, and IIoT dashboards", icon: Brain },
  { year: "2023", title: "Diploma in Mechanical Engineering", org: "Government Polytechnic Nagpur", icon: GraduationCap },
  { year: "2023+", title: "Leadership & Team Collaboration", org: "Engineering initiatives & event coordination", icon: Users },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          <span className="gradient-text">Krishna</span>
          <span className="text-muted-foreground">.N</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full glass-card glass-card-hover"
        >
          Let's talk <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center w-full">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-mono text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            Open to opportunities · Pune, India
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Building Intelligent <br />
            <span className="gradient-text">Systems & AI Products</span> <br />
            for the Future.
          </h1>

          <div className="flex items-center gap-3 text-lg sm:text-xl">
            <span className="text-muted-foreground font-mono text-sm">{">"}</span>
            <span className="font-display font-medium text-foreground">I am a</span>
            <span className="relative inline-block h-8 overflow-hidden">
              <span
                key={roleIdx}
                className="block gradient-text font-display font-semibold animate-[fade-in_0.5s_ease-out]"
              >
                {ROLES[roleIdx]}
              </span>
            </span>
          </div>

          <p className="max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
            I design and develop AI-powered applications, automation systems, scalable software
            products, and Industrial IoT solutions that solve real-world business and manufacturing
            challenges.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:animate-pulse-glow transition-all"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card glass-card-hover font-medium"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <SocialIcon href="https://github.com/KrishnaNartam" label="GitHub"><Github className="w-4 h-4" /></SocialIcon>
            <SocialIcon href="https://linkedin.com/in/krishnanartam" label="LinkedIn"><Linkedin className="w-4 h-4" /></SocialIcon>
            <SocialIcon href="mailto:krishnanartam911@gmail.com" label="Email"><Mail className="w-4 h-4" /></SocialIcon>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />
          <div className="relative glass-card rounded-3xl p-3 animate-float">
            <img
              src={portrait}
              alt="Krishna Prashant Nartam portrait"
              width={768}
              height={896}
              className="rounded-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 backdrop-blur-xl">
              <div className="text-xs font-mono text-muted-foreground">currently</div>
              <div className="text-sm font-semibold">Building AI products</div>
            </div>
            <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 backdrop-blur-xl">
              <div className="text-xs font-mono text-muted-foreground">stack</div>
              <div className="text-sm font-semibold">AI · Full-Stack · IIoT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-full glass-card glass-card-hover flex items-center justify-center text-muted-foreground hover:text-primary"
    >
      {children}
    </a>
  );
}

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl mb-14">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">{kicker}</div>
      <h2 className="text-4xl sm:text-5xl font-bold leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="About"
          title="Mechanical engineer turned AI builder."
          sub="I bridge engineering rigor with modern software — shipping AI products, automation workflows, and Industrial IoT systems that create measurable business outcomes."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-card glass-card-hover rounded-2xl p-8 space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              I'm a Mechanical Engineering student in Pune transitioning into AI Engineering and
              Software Development through hands-on project building. My work spans{" "}
              <span className="text-primary">Generative AI</span>,{" "}
              <span className="text-primary">LLM-powered agents</span>,{" "}
              <span className="text-primary">workflow automation</span>, and{" "}
              <span className="text-primary">real-time Industrial IoT</span> dashboards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I care about products that ship — clean architecture, fast iteration, and a strong eye
              for UX. Equally comfortable wiring up an MQTT pipeline as I am orchestrating multi-step
              AI agents.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Generative AI", "AI Agents", "Next.js", "n8n", "MQTT", "PostgreSQL"].map((t) => (
                <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between min-h-[120px]">
                <div className="text-3xl font-display font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Capabilities"
          title="A modern AI & full-stack toolbox."
          sub="From LLM orchestration to industrial telemetry — the stacks I use to ship real products."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="glass-card glass-card-hover rounded-2xl p-6 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-3">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Featured Work"
          title="Selected projects."
          sub="A snapshot of recent AI, full-stack, and Industrial IoT builds."
        />
        <div className="grid lg:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <article
              key={p.name}
              className={`glass-card glass-card-hover rounded-3xl p-8 flex flex-col group ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">{p.tag}</div>
                  <h3 className="text-2xl font-display font-bold">{p.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted/60 border border-border text-foreground/80">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-2 text-sm text-primary font-medium">
                <CheckCircle2 className="w-4 h-4" /> {p.impact}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Journey"
          title="Experience, education & leadership."
          sub="A blend of mechanical engineering fundamentals and modern AI/software craft."
        />
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />
          <div className="space-y-10">
            {EXPERIENCE.map((e, i) => {
              const Icon = e.icon;
              const left = i % 2 === 0;
              return (
                <div key={e.title} className={`relative grid sm:grid-cols-2 gap-6 items-center`}>
                  <div className={`${left ? "sm:text-right sm:pr-12" : "sm:col-start-2 sm:pl-12"} pl-12 sm:pl-0`}>
                    <div className="glass-card glass-card-hover rounded-2xl p-6 inline-block w-full">
                      <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2 justify-start sm:justify-inherit">
                        <Calendar className="w-3 h-3" /> {e.year}
                      </div>
                      <h3 className="font-display font-semibold text-lg">{e.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{e.org}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center glow-primary">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {[
            { icon: Award, title: "Certifications", desc: "AI, automation & full-stack credentials — continuously updated." },
            { icon: Users, title: "Leadership", desc: "Team collaboration, event coordination, engineering initiatives." },
            { icon: Briefcase, title: "Open to Work", desc: "Internships, freelance, and AI engineering opportunities." },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="glass-card glass-card-hover rounded-2xl p-6">
                <Icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-semibold mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Services"
          title="How I can help."
          sub="Engagements spanning AI products, automation, and full-stack engineering."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="glass-card glass-card-hover rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
                <Icon className="w-7 h-7 text-primary mb-4 relative" />
                <h3 className="font-display font-semibold text-lg mb-2 relative">{s.title}</h3>
                <p className="text-sm text-muted-foreground relative">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative glass-card rounded-3xl p-10 sm:p-14 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-10">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">Contact</div>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Let's build <span className="gradient-text">intelligent solutions</span> together.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Open to internships, freelance projects, collaborations, and AI engineering
                opportunities. I usually reply within 24 hours.
              </p>

              <div className="mt-8 space-y-3">
                <ContactItem icon={Mail} label="krishnanartam911@gmail.com" href="mailto:krishnanartam911@gmail.com" />
                <ContactItem icon={Phone} label="+91 99212 31669" href="tel:+919921231669" />
                <ContactItem icon={Phone} label="+91 91462 31669" href="tel:+919146231669" />
                <ContactItem icon={MapPin} label="Pune, Maharashtra, India" />
              </div>

              <div className="flex items-center gap-3 mt-8">
                <SocialIcon href="https://github.com/KrishnaNartam" label="GitHub"><Github className="w-4 h-4" /></SocialIcon>
                <SocialIcon href="https://linkedin.com/in/krishnanartam" label="LinkedIn"><Linkedin className="w-4 h-4" /></SocialIcon>
                <SocialIcon href="mailto:krishnanartam911@gmail.com" label="Email"><Mail className="w-4 h-4" /></SocialIcon>
              </div>
            </div>

            <form
              className="glass-card rounded-2xl p-6 space-y-4 bg-background/40"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const data = new FormData(f);
                const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name") || "you"}`);
                const body = encodeURIComponent(`${data.get("message") || ""}\n\n— ${data.get("name") || ""} (${data.get("email") || ""})`);
                window.location.href = `mailto:krishnanartam911@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <Field name="name" label="Your name" placeholder="Jane Doe" />
              <Field name="email" type="email" label="Email" placeholder="jane@company.com" />
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project…"
                  className="mt-1.5 w-full rounded-xl bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:animate-pulse-glow transition-all"
              >
                Send message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href?: string }) {
  const cls = "group flex items-center gap-3 text-sm text-foreground/90 hover:text-primary transition-colors";
  const content = (
    <>
      <span className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-primary">
        <Icon className="w-4 h-4" />
      </span>
      {label}
    </>
  );
  return href ? <a href={href} className={cls}>{content}</a> : <div className={cls}>{content}</div>;
}

function Field({ name, label, placeholder, type = "text" }: { name: string; label: string; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Krishna Prashant Nartam · Crafted with care in Pune.
        </div>
        <div className="font-mono text-xs">AI · Full-Stack · Industrial IoT</div>
      </div>
    </footer>
  );
}
