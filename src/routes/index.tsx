import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  Plus,
  Minus,
  Send,
} from "lucide-react";

import krishnaPortraitAsset from "@/assets/krishna-portrait.png.asset.json";
import projResume from "@/assets/proj-resume.jpg";
import projIiot from "@/assets/proj-iiot.jpg";
import projAgent from "@/assets/proj-agent.jpg";

const krishnaPortrait = krishnaPortraitAsset.url;

const EMAILJS_SERVICE_ID = "service_138mf4y";
const EMAILJS_TEMPLATE_ID = "template_tzzd9c8";
const EMAILJS_PUBLIC_KEY = "XIuTaiEJ6Ll6vBf4Z";

const ISSUE = "Vol. 01 · Issue 26";
const TODAY = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krishna Prashant Nartam — AI Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "AI Engineer based in Pune, India. I build LLM-powered SaaS products, n8n automation pipelines, and Industrial IoT dashboards — from idea to production.",
      },
      { property: "og:title", content: "Krishna Prashant Nartam — AI Engineer & Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "AI Engineer based in Pune, India. I build LLM-powered SaaS products, n8n automation pipelines, and Industrial IoT dashboards — from idea to production.",
      },
      { name: "twitter:title", content: "Krishna Prashant Nartam — AI Engineer & Full-Stack Developer" },
      {
        name: "twitter:description",
        content:
          "AI Engineer based in Pune, India. I build LLM-powered SaaS products, n8n automation pipelines, and Industrial IoT dashboards — from idea to production.",
      },
      { property: "og:url", content: "https://krishnanartam.lovable.app/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://krishnanartam.lovable.app/" }],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "Index", href: "#top", n: "00" },
  { label: "About", href: "#about", n: "01" },
  { label: "Work", href: "#work", n: "02" },
  { label: "Craft", href: "#skills", n: "03" },
  { label: "Career", href: "#experience", n: "04" },
  { label: "Notes", href: "#insights", n: "05" },
  { label: "Contact", href: "#contact", n: "06" },
];

const CLIENT_MARKS = [
  "OpenAI · GPT-4o",
  "Anthropic · Claude",
  "Google · Gemini",
  "Supabase",
  "n8n",
  "Vercel",
  "Cloudflare",
  "PostgreSQL",
  "Docker",
  "MQTT",
];

const PROJECTS: {
  n: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  stack: string[];
  role: string;
  year: string;
  duration: string;
  image: string;
  link?: string;
  github?: string;
}[] = [
  {
    n: "P/01",
    name: "Résumé, rebuilt by an AI that reads job ads",
    tagline: "AI Resume Builder — SaaS",
    problem:
      "Job seekers spend hours rewriting résumés for every posting and still get filtered out by ATS keyword screens.",
    solution:
      "A single-prompt SaaS that composes ATS-friendly résumés, adapts tone to the role, and exports clean PDFs — with auth, saved templates, and a dashboard.",
    stack: ["Next.js", "FastAPI", "OpenAI", "Supabase", "Tailwind"],
    role: "Design, product, full-stack",
    year: "2025",
    duration: "2 months",
    image: projResume,
    github: "https://github.com/KrishnaNartam",
  },
  {
    n: "P/02",
    name: "Real-time OEE for factories that never had it",
    tagline: "Industrial IoT dashboard",
    problem:
      "Small manufacturers run blind — no live visibility into machine performance, downtime, or throughput KPIs.",
    solution:
      "An MQTT-fed dashboard that streams live OEE, downtime reasons, and shift analytics onto operator TVs and phones.",
    stack: ["React", "Node.js", "MQTT", "PostgreSQL", "Docker"],
    role: "Architecture, backend, dashboards",
    year: "2025",
    duration: "3 months",
    image: projIiot,
    github: "https://github.com/KrishnaNartam",
  },
  {
    n: "P/03",
    name: "A quiet brand auditor for teams shipping content daily",
    tagline: "Anti-Cringe Brand Sentinel",
    problem:
      "Brand teams push social posts that drift off-tone and underperform, with no early signal before publish.",
    solution:
      "A multimodal auditor that scores each post for brand consistency and predicts engagement before it goes live.",
    stack: ["Next.js", "Gemini", "Python", "Vision API", "Vercel"],
    role: "Product, prompt design, full-stack",
    year: "2025",
    duration: "1 month",
    image: projAgent,
    github: "https://github.com/KrishnaNartam",
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

const EXPERIENCE = [
  {
    role: "AI Engineer — Freelance",
    org: "Independent · Pune, India",
    years: "2024 — Present",
    detail:
      "Shipping LLM-powered SaaS, n8n automation pipelines, and multi-step AI agents for founders and small teams.",
  },
  {
    role: "Full-Stack Developer",
    org: "Self-initiated SaaS & client work",
    years: "2023 — 2024",
    detail:
      "Designed and built end-to-end web products — auth, dashboards, billing surfaces, and API layers.",
  },
  {
    role: "Industrial IoT Builder",
    org: "Manufacturing pilots · OEE dashboards",
    years: "2023 — 2024",
    detail:
      "Ran on-floor pilots: MQTT ingestion, real-time OEE, downtime tracking, and operator-friendly dashboards.",
  },
];

const EDUCATION = [
  {
    degree: "B.E. Mechanical Engineering",
    org: "SKN College of Engineering, Pune",
    years: "2023 — 2027",
    detail: "Final year. Bridging mechanical systems thinking with modern software craft.",
  },
];

const INSIGHTS = [
  {
    kicker: "Field notes · AI",
    title: "Why great AI products start with the right question",
    excerpt:
      "Most AI features fail not from bad models, but from fuzzy briefs. A short framework I use to scope an AI build.",
    image: projResume,
  },
  {
    kicker: "Field notes · Automation",
    title: "Scaling automation without the chaos",
    excerpt:
      "When n8n workflows grow past a dozen nodes, structure beats speed. Patterns I lean on for maintainable automations.",
    image: projIiot,
  },
  {
    kicker: "Field notes · IIoT",
    title: "IIoT dashboards operators actually use",
    excerpt:
      "Lessons from shipping real-time MQTT dashboards on the factory floor — UX matters more than chart count.",
    image: projAgent,
  },
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
  {
    q: "Do you also handle deployment?",
    a: "Yes — Vercel, Cloudflare, AWS, or self-hosted, depending on the project. Hand-off includes docs and a Loom walkthrough.",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Masthead />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Insights />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

/* ───────── Scroll spy ───────── */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids.join("|")]);
  return active;
}

/* ───────── Nav ───────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV.map((n) => n.href.slice(1)));
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/85 backdrop-blur-xl border-b border-rule"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6">
        <a href="#top" className="flex items-center gap-3 min-w-0 group">
          <span className="font-display text-xl leading-none">Krishna Nartam</span>
          <span className="hidden sm:inline kicker text-[10px] shrink-0">
            <span className="italic-accent normal-case tracking-normal text-foreground/60">est.</span> 2023
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-[13px]" aria-label="Primary">
          {NAV.slice(1, -1).map((n) => {
            const isActive = active === n.href.slice(1);
            return (
              <a
                key={n.href}
                href={n.href}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className={isActive ? "italic-accent" : ""}>{n.label}</span>
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-foreground" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <span className="hidden lg:inline-flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
            </span>
            Available Q1
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition"
          >
            Start a project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ───────── Masthead (editorial banner) ───────── */
function Masthead() {
  return (
    <div className="pt-24 border-b border-rule">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-3 flex items-center justify-between text-[10px] kicker">
        <span>{ISSUE}</span>
        <span className="hidden sm:inline">The Portfolio · An editorial index of work</span>
        <span>{TODAY}</span>
      </div>
    </div>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section id="top" className="relative border-b border-rule">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-10 pb-16 lg:pt-16 lg:pb-24">
        {/* Above-fold caption row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-[11px] kicker mb-10 lg:mb-16">
          <div>Feature — 01</div>
          <div className="hidden lg:block">Pune, India · UTC+5:30</div>
          <div className="hidden lg:block text-right">Words &amp; systems by Krishna</div>
          <div className="text-right">4 min read</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left column — kicker + display headline */}
          <div className="lg:col-span-8 animate-fade-up">
            <p className="kicker mb-6">Portfolio / AI Engineer &amp; Full-Stack Developer</p>
            <h1 className="display-xl">
              I build <span className="italic-accent">quiet</span> software
              <br />
              for loud problems<span className="text-muted-foreground">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-foreground/80">
              I&apos;m Krishna — an AI engineer and full-stack developer in Pune, shipping
              <span className="italic-accent"> LLM-powered SaaS</span>, n8n automation pipelines,
              and Industrial IoT dashboards. From first prompt to production, with taste.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition"
              >
                See selected work
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-full border border-foreground/25 hover:border-foreground hover:bg-foreground/[0.04] transition"
              >
                Start a project
              </a>
              <a
                href="https://github.com/KrishnaNartam"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm px-4 py-3 text-muted-foreground hover:text-foreground transition"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/krishnanartam"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm px-2 py-3 text-muted-foreground hover:text-foreground transition"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right column — portrait card */}
          <aside className="lg:col-span-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <figure className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-surface">
                <img
                  src={krishnaPortrait}
                  alt="Portrait of Krishna Nartam"
                  className="w-full h-full object-cover grayscale contrast-[1.05]"
                  loading="eager"
                />
              </div>
              <figcaption className="mt-3 flex items-start justify-between gap-4 text-[11px] kicker">
                <span>Fig. 01 — Krishna, at desk</span>
                <span>Pune, MH</span>
              </figcaption>
            </figure>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-rule pt-6">
              <Stat n="03+" label="Years shipping" />
              <Stat n="12+" label="Projects delivered" />
              <Stat n="24h" label="Reply window" />
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl leading-none">{n}</div>
      <div className="text-[10px] kicker mt-2">{label}</div>
    </div>
  );
}

/* ───────── Marquee — text-only, editorial ───────── */
function Marquee() {
  const list = [...CLIENT_MARKS, ...CLIENT_MARKS];
  return (
    <section className="border-b border-rule overflow-hidden py-5">
      <div className="flex animate-marquee whitespace-nowrap gap-10 text-sm">
        {list.map((m, i) => (
          <span key={i} className="flex items-center gap-10 text-muted-foreground">
            <span className="italic-accent">{m}</span>
            <span className="text-foreground/20">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ───────── Section header ───────── */
function SectionHead({
  n,
  kicker,
  title,
  lede,
}: {
  n: string;
  kicker: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <header className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
      <div className="lg:col-span-3 flex items-start gap-4">
        <span className="font-display text-4xl leading-none text-foreground/30">{n}</span>
        <span className="kicker mt-2">{kicker}</span>
      </div>
      <div className="lg:col-span-9">
        <h2 className="display-lg max-w-3xl">{title}</h2>
        {lede && (
          <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {lede}
          </p>
        )}
      </div>
    </header>
  );
}

/* ───────── About ───────── */
function About() {
  return (
    <section id="about" className="border-b border-rule">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <SectionHead
          n="01"
          kicker="On the record"
          title={
            <>
              A mechanical engineer <span className="italic-accent">who fell in love</span> with software.
            </>
          }
        />

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="lg:col-start-4 lg:col-span-6 space-y-6 text-lg leading-relaxed">
            <p className="first-letter:font-display first-letter:text-6xl first-letter:leading-none first-letter:pr-3 first-letter:float-left first-letter:mt-1">
              I started in mechanics — gears, tolerances, thermal cycles — and slowly
              followed the wire back to software. Today I build AI products, automation
              systems, and IIoT dashboards for founders and small teams who want to
              move quickly without breaking trust.
            </p>
            <p className="text-muted-foreground">
              Engineering taught me to respect constraints. Software taught me to move
              fast anyway. I care about clean architecture, sharp UX, and shipping
              things people actually open on Monday morning.
            </p>
            <p className="text-muted-foreground">
              When I&apos;m not building, I&apos;m usually reverse-engineering a workflow
              or writing about the seams between AI, automation, and physical systems.
            </p>
          </div>

          <aside className="lg:col-span-3 lg:col-start-10 space-y-4 text-sm">
            <FactRow k="Based in" v="Pune, MH · India" />
            <FactRow k="Role" v="AI Engineer / Full-Stack" />
            <FactRow k="Studying" v="B.E. Mechanical, 2023–27" />
            <FactRow k="Availability" v="Freelance · Full-time" />
            <FactRow k="Reply time" v="Within 24 hours" />
          </aside>
        </div>
      </div>
    </section>
  );
}

function FactRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 border-b border-rule pb-3">
      <span className="kicker">{k}</span>
      <span className="text-right text-foreground">{v}</span>
    </div>
  );
}

/* ───────── Work — magazine feature layout ───────── */
function Work() {
  const [feature, ...rest] = PROJECTS;
  return (
    <section id="work" className="border-b border-rule">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <SectionHead
          n="02"
          kicker="Selected work"
          title={
            <>
              Three shipped systems, <span className="italic-accent">from prompt to production.</span>
            </>
          }
          lede="Each piece below solves a specific operational problem. Same author, three different registers."
        />

        {/* Featured cover story */}
        <ProjectFeature p={feature} />

        {/* Rest as alternating editorial rows */}
        <div className="mt-16 lg:mt-24 border-t border-rule">
          {rest.map((p, i) => (
            <ProjectRow key={p.n} p={p} flipped={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectFeature({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <article className="group grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
      <figure className="lg:col-span-8 relative overflow-hidden bg-surface">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
            loading="eager"
          />
        </div>
        <figcaption className="absolute top-4 left-4 kicker bg-background/85 backdrop-blur px-3 py-1.5">
          Cover story · {p.n}
        </figcaption>
      </figure>

      <div className="lg:col-span-4 space-y-5">
        <div className="kicker">{p.tagline}</div>
        <h3 className="font-display text-3xl sm:text-4xl leading-[1.05]">
          {p.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{p.problem}</p>
        <p className="leading-relaxed">
          <span className="italic-accent text-foreground">The build. </span>
          <span className="text-foreground/80">{p.solution}</span>
        </p>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {p.stack.map((s) => (
            <span key={s} className="text-[11px] px-2.5 py-1 border border-foreground/15 rounded-full text-foreground/70">
              {s}
            </span>
          ))}
        </div>
        <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-rule">
          {p.link && (
            <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium">
              Read the case <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
              <Github className="w-4 h-4" /> Source
            </a>
          )}
          <span className="ml-auto kicker">{p.year} · {p.duration}</span>
        </div>
      </div>
    </article>
  );
}

function ProjectRow({ p, flipped }: { p: (typeof PROJECTS)[number]; flipped: boolean }) {
  return (
    <article className="group grid lg:grid-cols-12 gap-8 lg:gap-10 py-12 lg:py-16 border-b border-rule">
      <figure
        className={`lg:col-span-6 relative overflow-hidden bg-surface ${flipped ? "lg:order-2" : ""}`}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
          />
        </div>
      </figure>

      <div className="lg:col-span-6 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display text-2xl text-foreground/30">{p.n}</span>
          <span className="kicker">{p.tagline}</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl lg:text-[38px] leading-[1.05] mb-5 max-w-lg">
          {p.name}
        </h3>

        <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-sm max-w-xl">
          <dt className="kicker pt-0.5">Problem</dt>
          <dd className="text-muted-foreground leading-relaxed">{p.problem}</dd>

          <dt className="kicker pt-0.5">Approach</dt>
          <dd className="text-foreground/85 leading-relaxed">{p.solution}</dd>

          <dt className="kicker pt-0.5">Role</dt>
          <dd className="text-foreground/85">{p.role}</dd>

          <dt className="kicker pt-0.5">Stack</dt>
          <dd className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="text-[11px] px-2.5 py-1 border border-foreground/15 rounded-full text-foreground/70">
                {s}
              </span>
            ))}
          </dd>
        </dl>

        <div className="mt-6 pt-4 border-t border-rule flex flex-wrap items-center gap-4">
          {p.link ? (
            <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium">
              Live demo <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <span className="kicker">In production · demo on request</span>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
              <Github className="w-4 h-4" /> Source
            </a>
          )}
          <span className="ml-auto kicker">{p.year} · {p.duration}</span>
        </div>
      </div>
    </article>
  );
}

/* ───────── Skills — typographic index ───────── */
function Skills() {
  return (
    <section id="skills" className="border-b border-rule">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <SectionHead
          n="03"
          kicker="Craft"
          title={
            <>
              An honest inventory of tools <span className="italic-accent">I actually reach for.</span>
            </>
          }
          lede="No progress bars. Just the stack I use week to week, grouped by the kind of problem it solves."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {SKILL_GROUPS.map((group, i) => (
            <div key={group.title} className="border-t border-foreground pt-4">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-display text-xl">{group.title}</h3>
                <span className="kicker text-[10px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center justify-between border-b border-rule py-1.5">
                    <span>{item}</span>
                    <span className="text-foreground/25 text-xs">·</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Experience + Education (timeline) ───────── */
function Experience() {
  return (
    <section id="experience" className="border-b border-rule">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <SectionHead
          n="04"
          kicker="Career log"
          title={
            <>
              Where the hours have gone, <span className="italic-accent">in reverse.</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="lg:col-span-8">
            <div className="border-t-2 border-foreground">
              {EXPERIENCE.map((e) => (
                <div
                  key={e.role}
                  className="grid grid-cols-[auto_1fr] sm:grid-cols-[140px_1fr_auto] gap-x-6 gap-y-2 py-8 border-b border-rule group"
                >
                  <div className="kicker pt-1.5 sm:pt-2">{e.years}</div>
                  <div className="col-span-1 sm:col-auto">
                    <h3 className="font-display text-xl sm:text-2xl">{e.role}</h3>
                    <div className="text-sm text-muted-foreground mt-0.5">{e.org}</div>
                    <p className="text-sm text-foreground/80 mt-3 max-w-xl leading-relaxed">
                      {e.detail}
                    </p>
                  </div>
                  <ArrowUpRight className="hidden sm:block w-4 h-4 text-foreground/30 mt-2 group-hover:text-foreground transition" />
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="border-t-2 border-foreground">
              <div className="py-6 border-b border-rule">
                <span className="kicker">Education</span>
              </div>
              {EDUCATION.map((e) => (
                <div key={e.degree} className="py-6 border-b border-rule">
                  <div className="kicker mb-2">{e.years}</div>
                  <h3 className="font-display text-xl">{e.degree}</h3>
                  <div className="text-sm text-muted-foreground mt-0.5">{e.org}</div>
                  <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{e.detail}</p>
                </div>
              ))}
              <a
                href="mailto:krishnanartam911@gmail.com?subject=Résumé request"
                className="mt-6 inline-flex items-center gap-2 text-sm border border-foreground/25 px-4 py-2.5 rounded-full hover:bg-foreground hover:text-background transition"
              >
                Request résumé <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ───────── Insights (magazine grid) ───────── */
function Insights() {
  return (
    <section id="insights" className="border-b border-rule">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <SectionHead
          n="05"
          kicker="Notes from the workshop"
          title={
            <>
              Short writing on <span className="italic-accent">AI, automation, and factories.</span>
            </>
          }
          lede="Working notes, not thought leadership. Full essays landing soon."
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {INSIGHTS.map((i, idx) => (
            <article key={i.title} className="group border-t-2 border-foreground pt-5">
              <div className="flex items-center justify-between mb-4">
                <span className="kicker">{i.kicker}</span>
                <span className="kicker text-[10px]">N/0{idx + 1}</span>
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-surface mb-5">
                <img
                  src={i.image}
                  alt={i.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-display text-2xl leading-[1.1] mb-3">{i.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{i.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-xs kicker">
                Essay in edit
              </span>
            </article>
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
    <section id="faq" className="border-b border-rule">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <SectionHead
          n="06"
          kicker="Before you write"
          title={
            <>
              Answers to the <span className="italic-accent">usual questions.</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="lg:col-start-3 lg:col-span-8 border-t-2 border-foreground">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-rule">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="kicker text-[10px] pt-1">Q/{String(i + 1).padStart(2, "0")}</span>
                      <span className={`font-display text-xl sm:text-2xl transition-colors ${isOpen ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"}`}>
                        {f.q}
                      </span>
                    </span>
                    <span className="mt-2 w-6 h-6 flex items-center justify-center text-foreground/60 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base text-muted-foreground leading-relaxed max-w-2xl pl-[68px]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
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

    if (!name || name.length > 100) return setStatus("error"), setErrorMsg("Please enter a valid name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return setStatus("error"), setErrorMsg("Please enter a valid email.");
    if (!message || message.length > 2000)
      return setStatus("error"), setErrorMsg("Message looks empty or too long.");

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
    <section id="contact" className="border-b border-rule bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <p className="kicker mb-8" style={{ color: "oklch(0.75 0.005 60)" }}>
              07 — Correspondence
            </p>
            <h2 className="display-lg">
              Tell me about the <span className="italic-accent">problem worth solving.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: "oklch(0.82 0.005 60)" }}>
              AI products, automation systems, IIoT pilots, or a small paid discovery
              sprint — start with a sentence or two. I reply within 24 hours, always.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <ContactRow icon={Mail} label="krishnanartam911@gmail.com" href="mailto:krishnanartam911@gmail.com" />
              <ContactRow icon={MapPin} label="Pune, Maharashtra · India" />
              <ContactRow icon={Github} label="github.com/KrishnaNartam" href="https://github.com/KrishnaNartam" />
              <ContactRow icon={Linkedin} label="linkedin.com/in/krishnanartam" href="https://linkedin.com/in/krishnanartam" />
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={submit}
            className="lg:col-span-6 lg:col-start-8 space-y-5 self-start"
          >
            <Field name="from_name" label="Your name" placeholder="Jane Doe" />
            <Field name="from_email" type="email" label="Email" placeholder="jane@company.com" />
            <div>
              <label className="text-[11px] font-mono uppercase tracking-[0.22em]" style={{ color: "oklch(0.75 0.005 60)" }}>
                The brief
              </label>
              <textarea
                name="message"
                rows={5}
                required
                maxLength={2000}
                placeholder="What are you building, and where's it stuck?"
                className="mt-2 w-full bg-transparent border-b border-background/25 px-0 py-3 text-base focus:outline-none focus:border-background transition resize-none placeholder:text-background/40"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-background text-foreground font-medium hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>Sending…</>
              ) : status === "sent" ? (
                <>Message received <ArrowUpRight className="w-4 h-4" /></>
              ) : (
                <>Send the brief <Send className="w-4 h-4" /></>
              )}
            </button>

            {status === "sent" && (
              <p className="text-xs" style={{ color: "oklch(0.82 0.14 145)" }}>
                Thanks — I&apos;ll reply within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs" style={{ color: "oklch(0.78 0.19 27)" }}>
                {errorMsg || "Something went wrong."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href?: string }) {
  const cls = "group flex items-center gap-4 hover:opacity-100 transition-opacity";
  const inner = (
    <>
      <span className="w-9 h-9 rounded-full border border-background/25 flex items-center justify-center">
        <Icon className="w-4 h-4" />
      </span>
      <span className="border-b border-transparent group-hover:border-background pb-0.5 transition-all">
        {label}
      </span>
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
      <label className="text-[11px] font-mono uppercase tracking-[0.22em]" style={{ color: "oklch(0.75 0.005 60)" }}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        maxLength={255}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-background/25 px-0 py-3 text-base focus:outline-none focus:border-background transition placeholder:text-background/40"
      />
    </div>
  );
}

/* ───────── Footer ───────── */
function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-rule">
          <div className="lg:col-span-5">
            <div className="font-display text-3xl leading-none">Krishna Nartam</div>
            <p className="mt-4 text-muted-foreground max-w-sm text-sm leading-relaxed">
              Independent AI engineer &amp; full-stack developer building quiet software for
              loud operational problems.
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="kicker mb-4">Sitemap</div>
            <ul className="space-y-2 text-sm">
              {NAV.slice(1).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:italic-accent transition">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="kicker mb-4">Elsewhere</div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/KrishnaNartam" target="_blank" rel="noreferrer" className="hover:italic-accent">GitHub</a></li>
              <li><a href="https://linkedin.com/in/krishnanartam" target="_blank" rel="noreferrer" className="hover:italic-accent">LinkedIn</a></li>
              <li><a href="mailto:krishnanartam911@gmail.com" className="hover:italic-accent">Email</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="kicker mb-4">Colophon</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Set in Instrument Serif &amp; Work Sans.
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2025–2026 Krishna Prashant Nartam. All work, one author.</div>
          <div className="kicker">{ISSUE} · {TODAY}</div>
        </div>
      </div>
    </footer>
  );
}
