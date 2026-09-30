import Image from "next/image";
import Header from "@/components/Header";
import { NetworkCanvas, Typer, Effects, CopyButton } from "@/components/Interactive";
import { TechMarquee, ServiceIcon, SapOrbit, CloudTopology, Gauge, ProjectVisual, SupportIcon, TicketQueue } from "@/components/Graphics";
import { profile, about, services, skills, projects, education, languages, supportTasks, supportStats } from "@/components/data";

function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px] shadow-cyan" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance text-white sm:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-slate-400">{children}</p>}
    </div>
  );
}

const Chip = ({ children }) => (
  <span className="rounded-md border border-white/10 bg-white/[.04] px-2 py-0.5 font-mono text-[11px] text-slate-300">{children}</span>
);

export default function Home() {
  const big = { sap: <SapOrbit />, cloud: <CloudTopology /> };

  return (
    <>
      <Header resume={profile.resume} />
      <Effects />

      <main id="top" className="relative overflow-x-clip">
        {/* ================= HERO ================= */}
        <section className="relative min-h-[92vh] pt-28 pb-16 sm:pt-32">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="blob left-[-10%] top-[-10%] h-[28rem] w-[28rem] bg-violet/50" />
            <div className="blob right-[-8%] top-[10%] h-[24rem] w-[24rem] bg-cyan/35" style={{ animationDelay: "-6s" }} />
            <div className="blob bottom-[-20%] left-[30%] h-[22rem] w-[22rem] bg-azure/30" style={{ animationDelay: "-12s" }} />
            <div className="grid-bg absolute inset-0" />
          </div>
          <NetworkCanvas />

          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="min-w-0">
              <p className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                </span>
                Open to IT, SAP &amp; developer roles · {profile.location}
              </p>

              <h1 className="mt-7 text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Hi, I&apos;m {profile.first}.
              </h1>
              <p className="mt-5 min-h-[2.5em] text-2xl font-semibold text-slate-200 sm:min-h-0 sm:text-3xl">
                <Typer words={profile.roles} />
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">{profile.tagline}</p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan via-azure to-violet px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition hover:shadow-cyan/40">
                  See my work
                  <span className="transition group-hover:translate-x-1">→</span>
                </a>
                <a href={profile.resume} target="_blank" rel="noopener" className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan/50">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" /></svg>
                  Download resume
                </a>
              </div>

              <div className="mt-10 flex items-center gap-5 text-sm text-slate-400">
                <a href={profile.github} target="_blank" rel="noopener" className="transition hover:text-white">GitHub ↗</a>
                <a href={profile.linkedin} target="_blank" rel="noopener" className="transition hover:text-white">LinkedIn ↗</a>
                <a href={`mailto:${profile.email}`} className="transition hover:text-white">Email ↗</a>
              </div>
            </div>

            {/* Photo (original, unedited) */}
            <div className="relative mx-auto w-full max-w-[22rem]">
              <div className="relative mx-auto w-[82%] max-w-full">
                <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan/40 via-azure/30 to-violet/40 opacity-60 blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl shadow-black/50">
                  <Image src="/profile.jpg" alt="Devkumar Patel" width={437} height={555} priority unoptimized className="block h-auto w-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-20 max-w-6xl px-4 sm:px-6">
            <p className="mb-4 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">Tools &amp; technologies I work with</p>
            <TechMarquee />
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="relative py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="min-w-0">
              <SectionHead eyebrow="About" title={<>Where business meets <span className="grad-text">technology</span></>} />
              <p className="reveal max-w-2xl text-lg leading-relaxed text-slate-300">{about}</p>
            </div>
            <div className="reveal grid content-center gap-4">
              {[
                ["Based in", profile.location],
                ["Studying", "Business IT · Seneca Polytechnic"],
                ["Background", "B.Sc. Cybersecurity & Networking"],
                ["Speaks", languages.join(" · ")],
              ].map(([k, v]) => (
                <div key={k} className="glass spot flex items-center justify-between gap-4 rounded-2xl px-5 py-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500">{k}</span>
                  <span className="text-right text-sm font-medium text-white">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= IT SUPPORT ================= */}
        <section id="it-support" className="relative py-24">
          <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-mint/10 blur-3xl" aria-hidden="true" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead eyebrow="IT Support" title={<>Keeping people and systems <span className="grad-text">up and running</span></>}>
              Day-to-day support is the core of what I do. These are the tasks I handle.
            </SectionHead>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start">
              <ul className="grid gap-3 sm:grid-cols-2">
                {supportTasks.map((t) => (
                  <li key={t.title} className="reveal spot glass flex gap-4 rounded-2xl p-5">
                    <SupportIcon k={t.icon} />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-white">{t.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{t.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="reveal grid gap-4 lg:sticky lg:top-24">
                <TicketQueue />
                <div className="grid grid-cols-3 gap-3">
                  {supportStats.map((s) => (
                    <div key={s.label} className="glass rounded-2xl p-4 text-center">
                      <p className="grad-text text-xl font-extrabold tabular-nums sm:text-2xl">{s.value}</p>
                      <p className="mt-1 text-[11px] leading-tight text-slate-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHAT I DO (bento) ================= */}
        <section id="services" className="relative py-24">
          <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-violet/20 blur-3xl" aria-hidden="true" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead eyebrow="What I do" title="Systems, integrations and apps">
              From keeping an ERP healthy to shipping a web app, these are the areas I work in.
            </SectionHead>
            <div className="grid gap-4 md:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.key}
                  className={`reveal spot glass flex flex-col gap-4 overflow-hidden rounded-3xl p-6 sm:p-7 ${s.size === "lg" ? "md:col-span-2 md:flex-row md:items-center" : ""}`}
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-4">
                    <ServiceIcon k={s.key} />
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                    <p className="leading-relaxed text-slate-400">{s.text}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5">{s.tags.map((t) => <Chip key={t}>{t}</Chip>)}</div>
                  </div>
                  {s.size === "lg" && <div className="h-44 w-full shrink-0 md:h-48 md:w-64">{big[s.key]}</div>}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="relative py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead eyebrow="Skills" title="Proficiency at a glance">Self-assessed, based on hands-on work and coursework.</SectionHead>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {skills.map((s) => <Gauge key={s.name} {...s} />)}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="relative py-24">
          <div className="pointer-events-none absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-cyan/15 blur-3xl" aria-hidden="true" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead eyebrow="Projects" title="Things I've built and configured" />
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((p) => (
                <article key={p.title} className={`reveal spot glass flex flex-col gap-5 rounded-3xl p-5 sm:p-6 ${p.wide ? "md:col-span-2 md:grid md:grid-cols-2 md:items-center md:gap-8" : ""}`}>
                  <ProjectVisual type={p.visual} />
                  <div className="flex min-w-0 flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-cyan">{p.kind}</span>
                      {p.badge && <span className="rounded-full bg-gradient-to-r from-cyan to-violet px-2 py-0.5 text-[10px] font-bold text-void">{p.badge}</span>}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                    <p className="leading-relaxed text-slate-400">{p.text}</p>
                    {p.highlights && (
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {p.highlights.map(([v, l]) => (
                          <div key={l} className="rounded-xl border border-white/10 bg-white/[.03] px-3 py-2">
                            <p className="grad-text text-lg font-extrabold tabular-nums">{v}</p>
                            <p className="text-[11px] leading-tight text-slate-400">{l}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1.5">{p.tags.map((t) => <Chip key={t}>{t}</Chip>)}</div>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener" className="mt-1 inline-flex w-fit items-center gap-1 text-sm font-semibold text-cyan hover:text-white">
                        View on GitHub <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section id="education" className="relative py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead eyebrow="Education" title="Learning path" />
            <ol className="relative grid gap-6 md:grid-cols-2">
              {education.map((e) => (
                <li key={e.degree} className="reveal spot glass relative flex flex-col gap-4 overflow-hidden rounded-3xl p-6 sm:p-8">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan/20 to-violet/20 blur-2xl" aria-hidden="true" />
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/15 to-violet/15 text-cyan">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 9v6" /></svg>
                    </span>
                    {e.current ? (
                      <span className="rounded-full border border-mint/40 bg-mint/10 px-2.5 py-1 text-[11px] font-semibold text-mint">In progress</span>
                    ) : (
                      <span className="rounded-full border border-violet/40 bg-violet/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-violet-300">GPA {e.gpa}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-mono text-xs text-cyan">{e.dates}</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{e.degree}</h3>
                    <p className="text-sm text-slate-400">{e.school} · {e.place}</p>
                  </div>
                  {e.courses.length > 0 && <div className="flex flex-wrap gap-1.5">{e.courses.map((c) => <Chip key={c}>{c}</Chip>)}</div>}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="relative py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel px-6 py-16 text-center sm:px-12">
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="blob left-[10%] top-[-40%] h-72 w-72 bg-violet/40" />
                <div className="blob right-[5%] bottom-[-50%] h-72 w-72 bg-cyan/30" style={{ animationDelay: "-8s" }} />
                <div className="grid-bg absolute inset-0 opacity-60" />
              </div>
              <p className="relative font-mono text-[11px] uppercase tracking-[0.25em] text-cyan">Contact</p>
              <h2 className="relative mx-auto mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-balance text-white sm:text-5xl">
                Let&apos;s build something <span className="grad-text grad-anim">great</span>.
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-slate-400">
                I&apos;m looking for IT support, SAP and junior developer roles in the Toronto area. Email is the fastest way to reach me.
              </p>
              <div className="relative mt-9 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${profile.email}`} className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-void transition hover:bg-cyan">{profile.email}</a>
                <CopyButton text={profile.email} label="Copy email" className="glass rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan/50" />
              </div>
              <div className="relative mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
                <a href={`tel:+1${profile.phone.replace(/-/g, "")}`} className="hover:text-white">{profile.phone}</a>
                <a href={profile.linkedin} target="_blank" rel="noopener" className="hover:text-white">LinkedIn ↗</a>
                <a href={profile.github} target="_blank" rel="noopener" className="hover:text-white">GitHub ↗</a>
                <a href={profile.resume} target="_blank" rel="noopener" className="hover:text-white">Resume (PDF) ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 text-sm text-slate-500 sm:px-6">
          <p>© {new Date().getFullYear()} Devkumar Patel</p>
          <p className="font-mono text-xs">Built with Next.js · Tailwind CSS · Vercel</p>
        </div>
      </footer>
    </>
  );
}
