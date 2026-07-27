import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  Plus,
  Minus,
  Send,
  Download,
} from "lucide-react";

import krishnaPortraitAsset from "@/assets/krishna-portrait.png.asset.json";
import projResume from "@/assets/proj-resume.jpg";
import projIiot from "@/assets/proj-iiot.jpg";
import projAgent from "@/assets/proj-agent.jpg";

const krishnaPortrait = krishnaPortraitAsset.url;

const EMAILJS_SERVICE_ID = "service_138mf4y";
const EMAILJS_TEMPLATE_ID = "template_tzzd9c8";
const EMAILJS_PUBLIC_KEY = "XIuTaiEJ6Ll6vBf4Z";

const EMAIL = "krishnanartam911@gmail.com";
const GITHUB = "https://github.com/KrishnaNartam";
const LINKEDIN = "https://linkedin.com/in/krishnanartam";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fox Founder AI — AI Products, Automation & IIoT Studio" },
      {
        name: "description",
        content:
          "Fox Founder AI is a boutique studio building AI products, n8n automation systems, and Industrial IoT dashboards — from first prompt to production. Founded by Krishna Nartam in Pune, India.",
      },
      { property: "og:title", content: "Fox Founder AI — AI Products, Automation & IIoT Studio" },
      {
        property: "og:description",
        content:
          "A boutique studio building AI products, automation systems, and Industrial IoT dashboards. Founded by Krishna Nartam in Pune, India.",
      },
      { name: "twitter:title", content: "Fox Founder AI — AI Products, Automation & IIoT Studio" },
      {
        name: "twitter:description",
        content:
          "A boutique studio building AI products, automation systems, and Industrial IoT dashboards. Founded by Krishna Nartam in Pune, India.",
      },
      { property: "og:url", content: "https://krishnanartam.lovable.app/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://krishnanartam.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Fox Founder AI",
          alternateName: "Fox Founder AI Studio",
          url: "https://krishnanartam.lovable.app/",
          description:
            "Boutique studio building AI products, automation systems, and Industrial IoT dashboards.",
          founder: {
            "@type": "Person",
            name: "Krishna Prashant Nartam",
            jobTitle: "Founder & Lead AI Engineer",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "SKN College of Engineering, Pune",
            },
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          areaServed: "Worldwide",
          knowsAbout: [
            "Artificial Intelligence",
            "Large Language Models",
            "Prompt Engineering",
            "n8n Automation",
            "Industrial IoT",
            "Full-Stack Development",
          ],
          sameAs: [GITHUB, LINKEDIN],
        }),
      },
    ],
  }),
  component: Portfolio,
});

/* ───────── Data ───────── */

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    n: "01",
    title: "AI Products",
    tags: ["LLM apps", "RAG", "Agents"],
    body: "Production LLM software — chat surfaces, retrieval pipelines, and multi-step agents wired into your data.",
    image: projAgent,
  },
  {
    n: "02",
    title: "Automation Systems",
    tags: ["n8n", "Webhooks", "Ops"],
    body: "n8n and API pipelines that quietly remove the manual hours your team keeps re-spending every week.",
    image: projResume,
  },
  {
    n: "03",
    title: "IIoT Dashboards",
    tags: ["MQTT", "Realtime", "OEE"],
    body: "Factory-floor telemetry, live OEE, and downtime analytics on screens operators actually read.",
    image: projIiot,
  },
  {
    n: "04",
    title: "Full-Stack Builds",
    tags: ["React", "FastAPI", "Cloud"],
    body: "End-to-end product engineering — auth, dashboards, billing surfaces, and the deploy pipeline behind them.",
    image: projResume,
  },
];

const PROJECTS = [
  {
    n: "01",
    name: "AI Resume Builder",
    tagline: "SaaS · ATS-ready résumés from one prompt",
    problem:
      "Job seekers rewrite résumés for every posting and still get filtered out by ATS keyword screens.",
    solution:
      "A single-prompt SaaS that composes ATS-friendly résumés, adapts tone to the role, and exports clean PDFs.",
    stack: ["Next.js", "FastAPI", "OpenAI", "Supabase"],
    year: "2025",
    duration: "2 months",
    image: projResume,
    github: GITHUB,
  },
  {
    n: "02",
    name: "Realtime OEE Dashboard",
    tagline: "Industrial IoT · Live factory telemetry",
    problem:
      "Small manufacturers run blind — no live visibility into machine performance, downtime, or throughput.",
    solution:
      "An MQTT-fed dashboard streaming live OEE, downtime reasons, and shift analytics to operator TVs and phones.",
    stack: ["React", "Node.js", "MQTT", "PostgreSQL"],
    year: "2025",
    duration: "3 months",
    image: projIiot,
    github: GITHUB,
  },
  {
    n: "03",
    name: "Brand Sentinel",
    tagline: "Multimodal · Pre-publish brand auditing",
    problem:
      "Brand teams push social posts that drift off-tone, with no early signal before they publish.",
    solution:
      "A multimodal auditor that scores each post for brand consistency and predicts engagement before it goes live.",
    stack: ["Next.js", "Gemini", "Python", "Vercel"],
    year: "2025",
    duration: "1 month",
    image: projAgent,
    github: GITHUB,
  },
];

const SKILL_GROUPS: { title: string; items: string[] }[] = [
  { title: "AI Engineering", items: ["OpenAI", "Anthropic", "Gemini", "LangChain", "Hugging Face", "TensorFlow", "PyTorch"] },
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { title: "Backend", items: ["Python", "FastAPI", "Node.js", "REST", "WebSockets"] },
  { title: "Data", items: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "MQTT"] },
  { title: "Automation", items: ["n8n", "Make", "Cron", "Webhooks", "Zapier"] },
  { title: "Industrial IoT", items: ["MQTT", "Node-RED", "Modbus", "OEE", "Sensor pipelines"] },
  { title: "Cloud & DevOps", items: ["AWS", "Vercel", "Cloudflare", "Docker", "GitHub Actions"] },
  { title: "Tools", items: ["Git", "Figma", "Postman", "Linux", "VS Code"] },
];

const MILESTONES = [
  { n: "01", org: "Fox Founder AI", what: "Studio founded — AI & automation", year: "2026" },
  { n: "02", org: "Manufacturing pilot", what: "Realtime OEE rollout on factory floor", year: "2025" },
  { n: "03", org: "Independent clients", what: "LLM product builds & n8n pipelines", year: "2025" },
  { n: "04", org: "Self-initiated SaaS", what: "Full-stack product engineering", year: "2024" },
  { n: "05", org: "SKN College of Engineering", what: "B.E. Mechanical Engineering, Pune", year: "2023" },
];

const EDUCATION = [
  {
    degree: "B.E. Mechanical Engineering",
    org: "SKN College of Engineering, Pune",
    years: "2023 — 2027",
    detail: "Final year. Bridging mechanical systems thinking with modern software craft.",
  },
];

const STACK_WALL = [
  "OpenAI", "Anthropic", "Gemini", "n8n", "Supabase", "Vercel",
  "Cloudflare", "PostgreSQL", "Docker", "MQTT", "FastAPI", "React",
];

const FAQS = [
  {
    q: "What kind of projects do you take on?",
    a: "AI products, automation systems, full-stack SaaS, and Industrial IoT dashboards — mostly with startups, scale-ups, and small manufacturers who want to ship something real.",
  },
  {
    q: "Do you offer freelance or consulting services?",
    a: "Yes — short build sprints, long-form product work, and AI/automation consulting. Happy to scope a small paid pilot first.",
  },
  {
    q: "What is your current availability?",
    a: "Available for new freelance projects and AI product collaborations, and open to full-time roles for the right team. Typical kickoff is within 1–2 weeks.",
  },
  {
    q: "What is the minimum project size you work with?",
    a: "A paid discovery sprint from around $500, with full builds typically ranging from $1.5k for a focused MVP to larger engagements for production systems.",
  },
  {
    q: "Can we work remotely?",
    a: "Always. Based in Pune, India, working remotely with teams across timezones. On-site visits possible for IIoT pilots.",
  },
  {
    q: "What's your typical process?",
    a: "Discovery call → tight written brief → prototype within a week → iterate weekly with a working demo. No 40-page decks.",
  },
];

/* ───────── Shell ───────── */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <CursorDot />
      <Nav />
      <Hero />
      <MarqueeBand words={["Services", "Services", "Services", "Services"]} />
      <Services />
      <About />
      <Work />
      <Milestones />
      <Skills />
      <StackWall />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

/* ───────── Motion helpers ───────── */

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    if (nodes.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            window.setTimeout(() => el.classList.add("is-in"), delay);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    nodes.forEach((n) => io.observe(n));

    // Safety net: anything already within the first viewport reveals regardless.
    const t = window.setTimeout(() => {
      nodes.forEach((n) => {
        const r = n.getBoundingClientRect();
        if (r.top < window.innerHeight) {
          n.classList.add("is-in");
          io.unobserve(n);
        }
      });
    }, 900);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, []);
}


function CursorDot() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal();
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest("a,button,input,textarea");
      el.style.width = interactive ? "34px" : "12px";
      el.style.height = interactive ? "34px" : "12px";
    };
    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} className="cursor-dot hidden md:block" aria-hidden="true" />;
}

function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
}) {
  return (
    <Tag data-reveal="" data-delay={delay} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}

function MaskLine({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <span data-reveal="" data-delay={delay} className={`reveal-mask ${className}`}>
      <span>{children}</span>
    </span>
  );
}

/* ───────── Nav ───────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5 pt-3 sm:pt-5">
      <div
        className={`mx-auto max-w-[1500px] flex items-center justify-between gap-4 rounded-full px-3 sm:px-4 py-2.5 transition-all duration-500 ${
          scrolled ? "bg-surface/85 backdrop-blur-xl border border-rule" : "bg-transparent border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 rounded-full bg-paper text-background pl-2.5 pr-4 py-2">
          <span className="w-5 h-5 rounded-full bg-ember" />
          <span className="font-display text-sm tracking-tight leading-none pt-0.5">FOX FOUNDER</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-4 py-2 rounded-full text-[13px] text-muted-foreground hover:text-foreground hover:bg-elevated transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${EMAIL}?subject=Résumé request`}
            className="btn-ember hidden sm:inline-flex items-center gap-2 text-[13px] px-4 py-2.5"
          >
            <Download className="w-3.5 h-3.5" /> Download CV
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden w-10 h-10 rounded-full border border-rule flex flex-col items-center justify-center gap-1.5 bg-surface"
          >
            <span className={`block w-4 h-px bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block w-4 h-px bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-auto max-w-[1500px] mt-2 rounded-3xl border border-rule bg-surface/95 backdrop-blur-xl p-3">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-2xl text-sm text-muted-foreground hover:text-foreground hover:bg-elevated"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ───────── Hero ───────── */

function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-32 pb-10">
      <div className="absolute inset-0 grid-lines opacity-70 pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1500px] px-3 sm:px-5">
        <div className="relative overflow-hidden rounded-[2rem] bg-surface border border-rule">
          {/* Giant word */}
          <div className="pt-10 sm:pt-14 px-4 sm:px-8">
            <h1 className="display-mega text-center leading-none">
              <MaskLine>AI ENGINEER</MaskLine>
            </h1>
          </div>

          {/* Portrait overlapping the type */}
          <div className="relative -mt-[8vw] sm:-mt-[7vw] flex justify-center">
            <div data-reveal="" className="reveal-clip w-[62%] sm:w-[42%] max-w-[440px]">
              <img
                src={krishnaPortrait}
                alt="Krishna Nartam, founder of Fox Founder AI"
                className="w-full h-auto object-cover grayscale contrast-[1.08]"
                loading="eager"
              />
            </div>
          </div>

          {/* Bottom rail */}
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] items-end px-5 sm:px-8 pb-8 -mt-16 sm:-mt-24">
            <Reveal delay={220} className="max-w-xs">
              <p className="kicker mb-3">Hello — I&apos;m Krishna</p>
              <p className="font-display text-lg sm:text-xl leading-[1.05]">
                AI Engineer &amp; founder of Fox&nbsp;Founder&nbsp;AI, building products that actually ship.
              </p>
              <a href="#work" className="mt-4 inline-flex items-center gap-2 text-xs kicker text-foreground hover:text-ember transition-colors">
                <ArrowRight className="w-3.5 h-3.5" /> Studio / Development
              </a>
            </Reveal>

            <Reveal delay={340} className="flex flex-wrap gap-3">
              <StatCard n="98%" label="Client satisfaction" tone="light" />
              <StatCard n="12+" label="Projects shipped" tone="dark" />
              <StatCard n="24h" label="Reply window" tone="ember" />
            </Reveal>
          </div>
        </div>

        {/* CTA row */}
        <Reveal delay={120} className="mt-5 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn-volt inline-flex items-center gap-2 px-6 py-3.5 text-sm">
            Start a project <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm rounded-full border border-rule hover:border-foreground hover:bg-surface transition-colors"
          >
            See selected work
          </a>
          <span className="chip ml-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-volt" /> Pune, India · UTC+5:30
          </span>
        </Reveal>
      </div>
    </section>
  );
}

function StatCard({ n, label, tone }: { n: string; label: string; tone: "light" | "dark" | "ember" }) {
  const cls =
    tone === "light"
      ? "bg-paper text-background"
      : tone === "ember"
        ? "bg-ember text-foreground"
        : "bg-background text-foreground border border-rule";
  return (
    <div className={`rounded-2xl px-5 py-4 min-w-[128px] ${cls}`}>
      <div className="font-display text-3xl leading-none">{n}</div>
      <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.18em] opacity-70">{label}</div>
    </div>
  );
}

/* ───────── Marquee band ───────── */

function MarqueeBand({ words, tone = "dark" }: { words: string[]; tone?: "dark" | "light" }) {
  const row = [...words, ...words, ...words, ...words];
  return (
    <div
      className={`overflow-hidden py-6 sm:py-8 border-y border-rule ${
        tone === "light" ? "bg-paper text-background" : "bg-background"
      }`}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className={`display-lg px-6 ${i % 2 === 1 ? "outline-type" : ""}`}>{w}</span>
            <span className="text-ember text-3xl">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────── Section head ───────── */

function SectionHead({
  kicker,
  title,
  lede,
  right,
}: {
  kicker: string;
  title: React.ReactNode;
  lede?: string;
  right?: React.ReactNode;
}) {
  return (
    <header className="mb-12 lg:mb-16 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <Reveal className="chip mb-5 inline-flex">
          <span className="w-1.5 h-1.5 rounded-full bg-ember" /> {kicker}
        </Reveal>
        <h2 className="display-xl max-w-4xl">
          <MaskLine delay={80}>{title}</MaskLine>
        </h2>
        {lede && (
          <Reveal delay={180} className="mt-5 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            {lede}
          </Reveal>
        )}
      </div>
      {right && <Reveal delay={220}>{right}</Reveal>}
    </header>
  );
}

/* ───────── Services ───────── */

function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-3 sm:px-5">
        <SectionHead
          kicker="What we do"
          title="Services"
          lede="Four ways the studio plugs into your roadmap — scoped tight, shipped fast, handed over with docs."
          right={
            <a href="#contact" className="btn-ember inline-flex items-center gap-2 px-5 py-3 text-sm">
              Book a call <ArrowUpRight className="w-4 h-4" />
            </a>
          }
        />

        <div className="space-y-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <article className="panel panel-hover group grid md:grid-cols-[auto_1fr_auto] items-center gap-6 p-4 sm:p-5">
                <div className="flex items-center gap-4 md:w-40">
                  <span className="font-mono text-xs text-ember">{s.n}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground transition-transform duration-500 group-hover:translate-x-1 group-hover:text-ember" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-display text-2xl sm:text-4xl transition-colors group-hover:text-ember">
                    {s.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                  <p className="mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>

                <div className="w-full md:w-56 h-32 rounded-2xl overflow-hidden bg-elevated">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── About ───────── */

function About() {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-rule">
      <div className="mx-auto max-w-[1500px] px-3 sm:px-5">
        <SectionHead kicker="The founder" title={<>About the studio</>} />

        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          <Reveal className="lg:col-span-5">
            <div className="relative h-full min-h-[320px] rounded-[2rem] overflow-hidden bg-surface border border-rule">
              <img
                src={krishnaPortrait}
                alt="Krishna Nartam"
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-[1.08]"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-ember flex flex-col items-center justify-center text-center">
                <span className="font-display text-4xl leading-none">3+</span>
                <span className="mt-1 text-[9px] font-mono uppercase tracking-[0.2em] opacity-80">
                  Years of<br />experience
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-7">
            <div className="panel h-full p-6 sm:p-10 flex flex-col justify-between gap-8">
              <div className="space-y-5">
                <p className="text-lg sm:text-xl leading-relaxed">
                  I&apos;m <span className="text-ember">Krishna</span> — a mechanical engineer who followed
                  the wire back to software. Fox Founder AI is the studio I run today: AI products,
                  automation systems, and IIoT dashboards for founders and small teams.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Engineering taught me to respect constraints. Software taught me to move fast anyway.
                  Every engagement is scoped and led by me personally — no juniors, no hand-offs, no
                  agency layer between you and the work.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                <Fact k="Studio" v="Fox Founder AI · 2026" />
                <Fact k="Founder" v="Krishna P. Nartam" />
                <Fact k="Based in" v="Pune, MH · India" />
                <Fact k="Reply time" v="Within 24 hours" />
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={GITHUB} target="_blank" rel="noreferrer" className="chip hover:text-foreground hover:border-foreground transition-colors">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="chip hover:text-foreground hover:border-foreground transition-colors">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <a href={`mailto:${EMAIL}`} className="chip hover:text-foreground hover:border-foreground transition-colors">
                  <Mail className="w-3.5 h-3.5" /> Email
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Education */}
        <div className="mt-5 grid md:grid-cols-2 gap-5">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.degree} delay={i * 100}>
              <div className="panel p-6 sm:p-8">
                <div className="kicker mb-3">Education · {e.years}</div>
                <h3 className="font-display text-2xl">{e.degree}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{e.org}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.detail}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={100}>
            <div className="panel p-6 sm:p-8 flex flex-col justify-between gap-6 h-full">
              <div>
                <div className="kicker mb-3">Availability</div>
                <h3 className="font-display text-2xl">Open for Q1 builds</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Taking on two new engagements this quarter — AI products, automation, or an IIoT pilot.
                </p>
              </div>
              <a href="#contact" className="btn-volt inline-flex w-fit items-center gap-2 px-5 py-3 text-sm">
                Start a project <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-rule pb-2.5">
      <span className="kicker">{k}</span>
      <span className="text-sm">{v}</span>
    </div>
  );
}

/* ───────── Work ───────── */

function Work() {
  return (
    <section id="work" className="relative py-20 lg:py-28 border-t border-rule overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-3 sm:px-5">
        <SectionHead
          kicker="Selected work"
          title="Works"
          lede="Three shipped systems. Each solves a specific operational problem — hover a card for the detail."
        />

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-x-0 top-1/3 display-mega outline-type text-center select-none opacity-60"
            aria-hidden="true"
          >
            WORKS
          </div>

          <div className="relative grid gap-5">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.n} delay={i * 110}>
                <article className="panel panel-hover group grid lg:grid-cols-12 gap-6 p-4 sm:p-5 overflow-hidden">
                  <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-elevated aspect-[16/10]">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1100ms] group-hover:scale-[1.06]"
                    />
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        <span className="w-20 h-20 rounded-full bg-paper text-background flex items-center justify-center text-xs font-mono uppercase tracking-[0.16em]">
                          View
                        </span>
                      </a>
                    )}
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-center gap-4 lg:pr-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-ember">{p.n}</span>
                      <span className="kicker">{p.tagline}</span>
                      <span className="ml-auto kicker">{p.year} · {p.duration}</span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-5xl transition-colors group-hover:text-ember">
                      {p.name}
                    </h3>

                    <dl className="grid sm:grid-cols-[90px_1fr] gap-x-6 gap-y-2 text-sm">
                      <dt className="kicker pt-1">Problem</dt>
                      <dd className="text-muted-foreground leading-relaxed">{p.problem}</dd>
                      <dt className="kicker pt-1">Approach</dt>
                      <dd className="leading-relaxed">{p.solution}</dd>
                    </dl>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {p.stack.map((s) => (
                        <span key={s} className="chip">{s}</span>
                      ))}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto inline-flex items-center gap-2 text-sm hover:text-ember transition-colors"
                        >
                          <Github className="w-4 h-4" /> Source
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Milestones (awards-style table) ───────── */

function Milestones() {
  return (
    <section className="py-20 lg:py-28 border-t border-rule">
      <div className="mx-auto max-w-[1500px] px-3 sm:px-5">
        <SectionHead kicker="Track record" title="Milestones" />

        <div className="border-t border-rule">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.n} delay={i * 70}>
              <div className="group grid grid-cols-[36px_1fr_auto] sm:grid-cols-[60px_1.2fr_2fr_auto] items-center gap-4 py-5 border-b border-rule transition-colors hover:bg-surface px-2 sm:px-4 rounded-2xl">
                <span className="font-mono text-xs text-muted-foreground group-hover:text-ember transition-colors">{m.n}</span>
                <span className="text-sm sm:text-base">{m.org}</span>
                <span className="hidden sm:block text-sm text-muted-foreground">{m.what}</span>
                <span className="font-mono text-xs text-muted-foreground">{m.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Skills ───────── */

function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-rule">
      <div className="mx-auto max-w-[1500px] px-3 sm:px-5">
        <SectionHead
          kicker="Capabilities"
          title="Skills"
          lede="No progress bars. Just the stack I reach for week to week, grouped by the kind of problem it solves."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="panel panel-hover h-full p-6">
                <div className="flex items-baseline justify-between mb-5">
                  <h3 className="font-display text-xl">{g.title}</h3>
                  <span className="font-mono text-[10px] text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item} className="chip">{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Stack wall (light band) ───────── */

function StackWall() {
  return (
    <section className="py-16 lg:py-24 bg-paper text-background">
      <div className="mx-auto max-w-[1500px] px-3 sm:px-5">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-background/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em]">
            <span className="w-1.5 h-1.5 rounded-full bg-ember" /> Built with tools teams trust
          </span>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {STACK_WALL.map((s, i) => (
            <Reveal key={s} delay={i * 45}>
              <div className="rounded-2xl bg-background/[0.05] hover:bg-background/[0.1] transition-colors py-8 flex items-center justify-center">
                <span className="font-display text-lg sm:text-xl">{s}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 lg:py-28 border-t border-rule">
      <div className="mx-auto max-w-[1500px] px-3 sm:px-5">
        <SectionHead kicker="Before you write" title="Questions" />

        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8 lg:col-start-3 space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <div className={`panel overflow-hidden ${isOpen ? "border-ember" : ""}`}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-6 text-left p-5 sm:p-6"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[10px] text-ember">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className={`font-display text-lg sm:text-2xl transition-colors ${isOpen ? "text-ember" : ""}`}>
                          {f.q}
                        </span>
                      </span>
                      <span className="shrink-0 w-9 h-9 rounded-full border border-rule flex items-center justify-center">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 sm:px-6 pb-6 text-sm text-muted-foreground leading-relaxed max-w-2xl sm:pl-16">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Contact ───────── */

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const fd = new FormData(formRef.current);
    const name = String(fd.get("from_name") || "").trim();
    const email = String(fd.get("from_email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || name.length > 100) {
      setStatus("error");
      setErrorMsg("Please enter a valid name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      setStatus("error");
      setErrorMsg("Please enter a valid email.");
      return;
    }
    if (!message || message.length > 2000) {
      setStatus("error");
      setErrorMsg("Message looks empty or too long.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message, reply_to: email },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email me directly.");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-rule">
      <div className="mx-auto max-w-[1500px] px-3 sm:px-5">
        <SectionHead
          kicker="Correspondence"
          title="Let's build"
          lede="AI products, automation systems, IIoT pilots, or a small paid discovery sprint — start with a sentence or two."
        />

        <div className="grid lg:grid-cols-12 gap-5">
          <Reveal className="lg:col-span-4">
            <div className="panel h-full p-6 sm:p-8 flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-elevated">
                <img
                  src={krishnaPortrait}
                  alt="Krishna Nartam"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-[1.08]"
                />
              </div>
              <div>
                <div className="font-display text-2xl">Krishna Nartam</div>
                <div className="text-sm text-muted-foreground mt-1">AI Engineer · Founder</div>
              </div>
              <div className="space-y-3 text-sm">
                <ContactRow icon={Mail} label={EMAIL} href={`mailto:${EMAIL}`} />
                <ContactRow icon={MapPin} label="Pune, Maharashtra · India" />
                <ContactRow icon={Github} label="github.com/KrishnaNartam" href={GITHUB} />
                <ContactRow icon={Linkedin} label="linkedin.com/in/krishnanartam" href={LINKEDIN} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-8">
            <form ref={formRef} onSubmit={submit} className="panel h-full p-6 sm:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field name="from_name" label="Your name" placeholder="Jane Doe" />
                <Field name="from_email" type="email" label="Email" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="kicker">The brief</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  maxLength={2000}
                  placeholder="What are you building, and where's it stuck?"
                  className="mt-2 w-full bg-transparent border-b border-rule px-0 py-3 text-base focus:outline-none focus:border-ember transition-colors resize-none placeholder:text-muted-foreground/60"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-volt w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>Sending…</>
                ) : status === "sent" ? (
                  <>Message received <ArrowUpRight className="w-4 h-4" /></>
                ) : (
                  <>Submit message <Send className="w-4 h-4" /></>
                )}
              </button>

              {status === "sent" && (
                <p className="text-xs text-success">Thanks — I&apos;ll reply within 24 hours.</p>
              )}
              {status === "error" && (
                <p className="text-xs text-destructive">{errorMsg || "Something went wrong."}</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href?: string }) {
  const cls = "group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors";
  const inner = (
    <>
      <span className="w-8 h-8 rounded-full border border-rule flex items-center justify-center shrink-0 group-hover:border-ember transition-colors">
        <Icon className="w-3.5 h-3.5" />
      </span>
      <span className="truncate">{label}</span>
    </>
  );
  return href ? (
    <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="kicker">{label}</label>
      <input
        name={name}
        type={type}
        required
        maxLength={255}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-rule px-0 py-3 text-base focus:outline-none focus:border-ember transition-colors placeholder:text-muted-foreground/60"
      />
    </div>
  );
}

/* ───────── Footer ───────── */

function Footer() {
  return (
    <footer className="pt-16 border-t border-rule overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-3 sm:px-5">
        <div className="grid gap-8 sm:grid-cols-3 pb-10">
          <div>
            <div className="kicker mb-4">Quick links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-ember transition-colors">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex sm:justify-center">
            <a
              href="#top"
              aria-label="Back to top"
              className="w-14 h-14 rounded-full bg-ember flex items-center justify-center hover:-translate-y-1 transition-transform"
            >
              <ArrowUp className="w-5 h-5" />
            </a>
          </div>

          <div className="sm:text-right">
            <div className="kicker mb-4">Fox Founder AI</div>
            <p className="text-sm text-muted-foreground leading-relaxed sm:ml-auto sm:max-w-xs">
              A boutique studio building AI products, automation systems, and Industrial IoT
              dashboards. Founded in Pune, India.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              © 2025–2026 Fox Founder AI · Krishna Prashant Nartam
            </p>
          </div>
        </div>

        <div className="relative select-none" aria-hidden="true">
          <div className="display-mega text-center leading-[0.78] translate-y-[12%]">
            FOX FOUNDER
          </div>
        </div>
      </div>
    </footer>
  );
}
