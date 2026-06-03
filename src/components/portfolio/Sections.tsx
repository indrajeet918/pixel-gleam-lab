import {
  Mail,
  Phone,
  Linkedin,
  Globe,
  MapPin,
  ArrowRight,
  Trophy,
  GraduationCap,
  Briefcase,
  Github,
  ExternalLink,
  Terminal,
  Database,
  Search,
  Server,
  Code,
  Wrench,
  FileDown,
} from "lucide-react";
import resumeAsset from "@/assets/Indrajeet_Kumar_Resume.pdf.asset.json";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative max-w-6xl mx-auto w-full animate-fade-in">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Indrajeet <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Kumar</span>
        </h1>
        <p className="mt-5 text-lg md:text-2xl text-muted-foreground max-w-2xl">
          Magento 2 Developer <span className="text-primary">|</span> PHP & E‑Commerce Specialist
        </p>
        <p className="mt-4 text-sm md:text-base text-muted-foreground/80 max-w-xl font-mono">
          <span className="text-primary">$</span> building scalable e‑commerce backends from Siliguri, India.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Contact Me
          </a>
          <a
            href={resumeAsset.url}
            download
            className="inline-flex items-center gap-2 rounded-md border border-primary/60 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <FileDown className="h-4 w-4" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-mono uppercase tracking-widest text-primary">// {kicker}</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <SectionHeader kicker="about" title="About Me" />
        </div>
        <div className="md:col-span-2 text-muted-foreground text-base md:text-lg leading-relaxed">
          I'm a final‑year B.Sc. Computer Science student at Salesian College, Siliguri,
          currently interning as a Web Developer at <span className="text-foreground">PlaceWell Retail</span>.
          I specialize in Magento 2 backend development, custom module development,
          technical SEO, and e‑commerce optimization. I enjoy solving real production‑level
          problems and building things that work at scale.
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  { icon: Code, title: "Languages & Frameworks", items: ["Magento 2", "PHP", "Python", "JavaScript", "React.js", "HTML5", "CSS3"] },
  { icon: Database, title: "Backend & Data", items: ["MySQL", "OOP", "Responsive Design"] },
  { icon: Search, title: "SEO & Analytics", items: ["Google Search Console", "Google Merchant Center", "Technical SEO", "JSON-LD Schema"] },
  { icon: Wrench, title: "Tools & Infra", items: ["Git", "GitHub", "VS Code", "Chrome DevTools", "SSH", "Server Management"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader kicker="skills" title="Technical Skills" />
        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const experienceBullets = [
  "Built a custom WhatsApp order notification Magento module integrating WATI API with event observers",
  "Resolved critical server disk space crisis (99% full) via SSH‑based cache and log cleanup",
  "Fixed Google Merchant Center mass product disapproval caused by Cloudflare blocking Googlebot",
  "Debugged Magento layout XML issues and built CMS‑based homepage with hero banner, brand grid, and FAQ with JSON‑LD",
  "Managed product feeds, GSC crawl errors, and on‑page SEO",
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader kicker="experience" title="Experience" />
        <div className="relative pl-8 border-l-2 border-border">
          <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-primary shadow-[var(--shadow-glow)]" />
          <div className="rounded-xl border border-border bg-card p-6 md:p-8" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Web Developer Intern
                </h3>
                <p className="text-primary mt-1">PlaceWell Retail</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>2025 – Present</p>
                <p>Siliguri, India · On‑site</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2.5 text-muted-foreground">
              {experienceBullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="text-primary mt-1.5">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    icon: Terminal,
    title: "WhatsApp Order Notification Module",
    description:
      "Custom Magento 2 module using event observers that sends automatic WhatsApp messages to customers on order placement, integrated with the WATI API.",
    tech: ["Magento 2", "PHP", "WATI API"],
  },
  {
    icon: Search,
    title: "E‑Commerce SEO & Performance Audit",
    description:
      "Full technical SEO audit on a live multi‑store e‑commerce site. Fixed indexing errors, broken links, missing meta tags, and optimized GMC product feeds.",
    tech: ["Magento", "Google Search Console", "SEO"],
  },
  {
    icon: Code,
    title: "Online Event Ticket Booking System",
    description:
      "Full‑stack web app for event registration and ticket booking with form validation, responsive design, and a secure MySQL database.",
    tech: ["React", "JavaScript", "HTML", "CSS", "MySQL"],
  },
  {
    icon: Server,
    title: "Student Event Portal",
    description:
      "College event management portal for announcements and registrations with modular code and form validation.",
    tech: ["HTML", "CSS", "JavaScript", "SQL"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader kicker="projects" title="Selected Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/60 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-primary/80">
                    #{t.toLowerCase().replace(/[\s.]+/g, "")}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  const education = [
    {
      degree: "B.Sc. Computer Science",
      place: "Salesian College, Siliguri",
      period: "2023 – Present",
      detail: "SGPA: 8.31 (3rd Sem) · 7.77 (2nd Sem) · 7.7 (1st Sem)",
    },
    { degree: "Class 12", place: "Kendriya Vidyalaya, Bengdubi", period: "2023", detail: "72%" },
    { degree: "Class 10", place: "Kendriya Vidyalaya, Bengdubi", period: "2021", detail: "85%" },
  ];

  const achievements = [
    { icon: "🏆", text: "3rd Place — CodeChef TechnoKrat 2025" },
    { icon: "🎓", text: "Active Member — Salesian College Techne Association" },
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <SectionHeader kicker="education" title="Education" />
          <div className="space-y-4">
            {education.map((e) => (
              <div
                key={e.degree}
                className="rounded-xl border border-border bg-card p-5"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-semibold text-foreground">{e.degree}</h3>
                      <span className="text-xs font-mono text-muted-foreground">{e.period}</span>
                    </div>
                    <p className="text-sm text-primary mt-0.5">{e.place}</p>
                    <p className="text-sm text-muted-foreground mt-1">{e.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader kicker="achievements" title="Achievements" />
          <div className="space-y-4">
            {achievements.map((a) => (
              <div
                key={a.text}
                className="rounded-xl border border-border bg-card p-5 flex items-center gap-4 hover:border-primary/50 transition-colors"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="text-3xl">{a.icon}</div>
                <p className="text-foreground">{a.text}</p>
              </div>
            ))}
            <div className="rounded-xl border border-dashed border-border p-5 flex items-center gap-3 text-muted-foreground">
              <Trophy className="h-5 w-5 text-primary" />
              <p className="text-sm">More to come — always shipping.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: "indrajeetkr069@gmail.com", href: "mailto:indrajeetkr069@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 91553 47783", href: "tel:+919155347783" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/indrajeeetk", href: "https://linkedin.com/in/indrajeeetk" },
    { icon: Globe, label: "Website", value: "indrajeet.in", href: "https://indrajeet.in" },
    { icon: MapPin, label: "Location", value: "Siliguri, West Bengal", href: null },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-primary">// contact</p>
        <h2 className="mt-2 text-3xl md:text-5xl font-bold text-foreground">
          Let's build something <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">together</span>.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Open to internships, freelance Magento work, and full‑time backend roles. Drop a message — I reply within a day.
        </p>
        <a
          href="mailto:indrajeetkr069@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
        >
          <Mail className="h-4 w-4" /> Say hello
        </a>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-left">
          {items.map((i) => {
            const Inner = (
              <>
                <div className="rounded-md bg-primary/10 p-2 text-primary shrink-0">
                  <i.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{i.label}</p>
                  <p className="text-sm text-foreground truncate">{i.value}</p>
                </div>
              </>
            );
            return i.href ? (
              <a
                key={i.label}
                href={i.href}
                target={i.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                {Inner}
              </a>
            ) : (
              <div key={i.label} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                {Inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Indrajeet Kumar. Built with React & TanStack.</p>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/indrajeeetk" target="_blank" rel="noreferrer" className="hover:text-primary">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://indrajeet.in" target="_blank" rel="noreferrer" className="hover:text-primary">
            <Globe className="h-4 w-4" />
          </a>
          <a href="mailto:indrajeetkr069@gmail.com" className="hover:text-primary">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}