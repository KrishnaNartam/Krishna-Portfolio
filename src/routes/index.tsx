import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowDown,
  ArrowUpRight,
  Plus,
  Minus,
  Send,
  Sparkles,
  Brain,
  Code2,
  Workflow,
  Cpu,
  Database,
  Cloud,
  Rocket,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import projResume from "@/assets/proj-resume.jpg";
import projIiot from "@/assets/proj-iiot.jpg";
import projAgent from "@/assets/proj-agent.jpg";

const EMAILJS_SERVICE_ID = "service_138mf4y";
const EMAILJS_TEMPLATE_ID = "template_tzzd9c8";
const EMAILJS_PUBLIC_KEY = "XIuTaiEJ6Ll6vBf4Z";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krishna Prashant Nartam — AI Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Krishna Prashant Nartam — AI Engineer building useful, eye-pleasing AI products, automation systems, and Industrial IoT solutions.",
      },
      { property: "og:title", content: "Krishna Prashant Nartam — AI Engineer" },
      {
        property: "og:description",
        content: "Building intelligent systems, AI products and Industrial IoT solutions.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Insights", href: "#insights" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const LOGOS = ["OpenAI", "Anthropic", "Gemini", "n8n", "Supabase", "Vercel"];

const PROJECTS = [
  {
    name: "AI Resume Builder",
    desc:
      "An AI-powered SaaS that crafts ATS-friendly resumes from a single prompt — dashboard, auth, PDF export, and tailored suggestions for each role.",
    country: "India",
    duration: "2 months",
    year: "2025",
    image: projResume,
  },
  {
    name: "Real-Time OEE Monitoring",
    desc:
      "Industrial IoT dashboard for live machine performance, KPI tracking and manufacturing analytics over MQTT — helping factories see what their lines actually do.",
    country: "India",
    duration: "3 months",
    year: "2025",
    image: projIiot,
  },
  {
    name: "Anti-Cringe Brand Sentinel",
    desc:
      "A multimodal AI auditor that scores social content for brand consistency and predicts engagement — built with Gemini, computer vision and a clean Next.js stack.",
    country: "India",
    duration: "1 month",
    year: "2025",
    image: projAgent,
  },
];

const TOOLS: { label: string; icon: typeof Brain }[] = [
  { label: "AI / LLM", icon: Brain },
  { label: "Next.js", icon: Code2 },
  { label: "n8n", icon: Workflow },
  { label: "PostgreSQL", icon: Database },
  { label: "MQTT / IIoT", icon: Cpu },
  { label: "AWS", icon: Cloud },
];

const EXPERIENCE = [
  { role: "AI Engineer (Freelance)", org: "Independent · Pune, India", years: "2024 — Present" },
  { role: "Full-Stack Developer", org: "Self-initiated SaaS & client work", years: "2023 — 2024" },
  { role: "Industrial IoT Builder", org: "Manufacturing pilots · OEE dashboards", years: "2023 — 2024" },
  { role: "Mechanical Engineering", org: "SKN College of Engineering · Pune", years: "2023 — 2027" },
];

const INSIGHTS = [
  {
    title: "Why great AI products start with the right question",
    excerpt:
      "Most AI features fail not from bad models, but from fuzzy briefs. A short framework I use to scope an AI build.",
    image: projResume,
  },
  {
    title: "Scaling automation without the chaos",
    excerpt:
      "When n8n workflows grow past a dozen nodes, structure beats speed. Patterns I lean on for maintainable automations.",
    image: projIiot,
  },
  {
    title: "Building IIoT dashboards that operators actually use",
    excerpt:
      "Lessons from shipping real-time MQTT dashboards on the factory floor — UX matters more than chart count.",
    image: projAgent,
  },
];

const FAQS = [
  {
    q: "What kind of projects do you take on?",
    a: "I focus on AI products, automation systems, full-stack SaaS, and Industrial IoT dashboards — mostly with startups, scale-ups, and small manufacturers who want to ship something real.",
  },
  {
    q: "Do you offer freelance or consulting services?",
    a: "Yes — short build sprints, long-form product work, and AI/automation consulting. Happy to scope a small paid pilot first.",
  },
  {
    q: "Can we work remotely?",
    a: "Always. I'm based in Pune, India, and work remotely with teams across timezones. On-site visits possible for IIoT pilots.",
  },
  {
    q: "What's your typical process?",
    a: "Discovery call → tight written brief → prototype within a week → iterate weekly with a working demo. No 40-page decks.",
  },
  {
    q: "Do you also handle deployment?",
    a: "Yes — I ship to Vercel, Cloudflare, AWS and self-hosted servers depending on the project. Hand-off includes docs and a Loom walkthrough.",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Tools />
      <Experience />
      <Insights />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

/* ───────── Nav ───────── */
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
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs font-bold">
            K
          </span>
          <span>Krishna</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[13px] text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full border border-border bg-white/5 hover:bg-white/10 transition"
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section id="top" className="relative px-6 pt-28 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative hero-card rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 min-h-[560px] flex flex-col justify-between">
          <div className="absolute inset-0 starfield opacity-50 pointer-events-none" />
          <div className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-3 pl-1 pr-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <img
                src={portrait}
                alt="Krishna avatar"
                width={28}
                height={28}
                className="w-7 h-7 rounded-full object-cover"
              />
              <span className="text-xs font-medium">Hi, there 👋</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-medium max-w-3xl">
              Krishna Prashant Nartam,
              <br />
              <span className="text-foreground/95">
                AI engineer who builds useful
              </span>
              <br />
              <span className="text-foreground/95">and eye-pleasing products.</span>
            </h1>
          </div>

          <div className="relative z-10 flex items-center gap-2 text-xs text-muted-foreground mt-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a href="#work" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
              Scroll down to see the portfolio
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Logo marquee ───────── */
function Marquee() {
  return (
    <section className="px-6 py-10 border-y border-border/60">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
        {LOGOS.map((l) => (
          <span
            key={l}
            className="font-display text-xl sm:text-2xl tracking-tight text-muted-foreground/80 hover:text-foreground transition-colors"
          >
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ───────── Section number kicker ───────── */
function NumKicker({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-6">
      <span className="text-primary">{n}</span>
      <span className="w-6 h-px bg-border" />
      <span>{label}</span>
    </div>
  );
}

/* ───────── About ───────── */
function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <NumKicker n="01" label="Get to know me" />
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">
          <div className="space-y-6 max-w-2xl">
            <p className="text-lg sm:text-xl leading-relaxed text-foreground/90">
              I'm a mechanical engineer turned AI builder. Over the last two years I've shipped
              AI products, automation pipelines and Industrial IoT dashboards — collaborating
              with founders and small teams who want to move fast without breaking trust.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              I consider myself a versatile, practical engineer — equally comfortable wiring an
              MQTT pipeline as I am orchestrating multi-step LLM agents. I care about clean
              architecture, sharp UX, and products that actually get used.
            </p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground/80 self-end">
            <p>Currently freelancing & building AI products.</p>
            <p>Based in Pune, Maharashtra · India.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Work ───────── */
function Work() {
  return (
    <section id="work" className="relative px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <NumKicker n="02" label="Work" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-14 max-w-2xl">
          A glimpse into my latest work.
        </h2>

        <div className="space-y-6">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="group glass-card glass-card-hover rounded-3xl overflow-hidden grid md:grid-cols-[1.2fr_1fr] gap-0 items-stretch"
            >
              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium mb-3">
                    {p.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">{p.desc}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                  <Meta label="Country" value={p.country} />
                  <Meta label="Duration" value={p.duration} />
                  <Meta label="Year" value={p.year} />
                </div>
              </div>
              <div className="relative h-56 md:h-auto overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur border border-white/10 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-primary text-sm font-medium">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

/* ───────── Tools ───────── */
function Tools() {
  return (
    <section className="relative px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {TOOLS.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="aspect-square rounded-2xl glass-card glass-card-hover flex flex-col items-center justify-center gap-2 group"
            >
              <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-[11px] text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Experience ───────── */
function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <NumKicker n="03" label="Experience" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 max-w-3xl">
          Experience that shapes meaningful products.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-14">
          A mix of mechanical engineering fundamentals and modern AI / software craft — from
          factory-floor pilots to LLM-powered SaaS.
        </p>

        <div className="border-t border-border">
          {EXPERIENCE.map((e) => (
            <div
              key={e.role}
              className="grid grid-cols-[1fr_auto] gap-6 items-end py-7 border-b border-border group hover:bg-white/[0.015] transition-colors px-2"
            >
              <div>
                <div className="font-display text-xl sm:text-2xl font-medium">{e.role}</div>
                <div className="text-sm text-muted-foreground mt-1">{e.org}</div>
              </div>
              <div className="text-primary text-sm sm:text-base font-mono whitespace-nowrap">{e.years}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Insights ───────── */
function Insights() {
  return (
    <section id="insights" className="relative px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <NumKicker n="04" label="Insights" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-14 max-w-2xl">
          Practical insights and ideas from the journey so far.
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {INSIGHTS.map((i) => (
            <article
              key={i.title}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={i.image}
                  alt={i.title}
                  loading="lazy"
                  width={640}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-medium leading-snug mb-2">{i.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{i.excerpt}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all"
                >
                  Read more <ArrowDown className="w-3.5 h-3.5 -rotate-45" />
                </a>
              </div>
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
    <section id="faq" className="relative px-6 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <NumKicker n="05" label="FAQ" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-3">
          We got you an answer.
        </h2>
        <p className="text-muted-foreground mb-14">
          Everything you might want to know before we work together — answered clearly and simply.
        </p>
      </div>

      <div className="max-w-4xl mx-auto border-t border-border">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-border">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              >
                <span className={`font-display text-base sm:text-lg font-medium transition-colors ${isOpen ? "text-foreground" : "text-foreground/85 group-hover:text-foreground"}`}>
                  {f.q}
                </span>
                <span className="mt-1 w-6 h-6 flex items-center justify-center text-muted-foreground shrink-0">
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ───────── Contact / Newsletter-style CTA card ───────── */
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
    <section id="contact" className="relative px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="relative cta-card rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div>
              <NumKicker n="06" label="Let's work" />
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
                Have a project in mind?
                <br />
                Let's build it together.
              </h2>
              <p className="text-muted-foreground max-w-md mb-8">
                Open to internships, freelance projects, AI product collaborations and Industrial
                IoT pilots. I usually reply within 24 hours.
              </p>

              <div className="space-y-3 text-sm">
                <ContactItem icon={Mail} label="krishnanartam911@gmail.com" href="mailto:krishnanartam911@gmail.com" />
                <ContactItem icon={Phone} label="+91 99212 31669" href="tel:+919921231669" />
                <ContactItem icon={MapPin} label="Pune, Maharashtra · India" />
              </div>

              <div className="flex items-center gap-2 mt-8">
                <Social href="https://github.com/KrishnaNartam" label="GitHub"><Github className="w-4 h-4" /></Social>
                <Social href="https://linkedin.com/in/krishnanartam" label="LinkedIn"><Linkedin className="w-4 h-4" /></Social>
                <Social href="mailto:krishnanartam911@gmail.com" label="Email"><Mail className="w-4 h-4" /></Social>
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={submit}
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 bg-background/40 backdrop-blur-xl"
            >
              <Field name="from_name" label="Your name" placeholder="Jane Doe" />
              <Field name="from_email" type="email" label="Email" placeholder="jane@company.com" />
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  maxLength={2000}
                  placeholder="Tell me about your project…"
                  className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:animate-pulse-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>Sending…</>
                ) : status === "sent" ? (
                  <><Sparkles className="w-4 h-4" /> Message sent</>
                ) : (
                  <>Send message <Send className="w-4 h-4" /></>
                )}
              </button>

              {status === "sent" && (
                <p className="text-xs text-success text-center">Thanks — I'll reply within 24 hours.</p>
              )}
              {status === "error" && (
                <p className="text-xs text-destructive text-center">{errorMsg || "Something went wrong."}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href?: string }) {
  const cls = "group flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors";
  const inner = (
    <>
      <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
        <Icon className="w-4 h-4" />
      </span>
      {label}
    </>
  );
  return href ? <a href={href} className={cls}>{inner}</a> : <div className={cls}>{inner}</div>;
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition"
    >
      {children}
    </a>
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
      <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        maxLength={255}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}

/* ───────── Footer ───────── */
function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Krishna Prashant Nartam — Crafted with care in Pune.</div>
        <div className="font-mono">AI · Full-Stack · Industrial IoT</div>
      </div>
    </footer>
  );
}
