
import Link from "next/link";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
];

const projects = [
  {
    name: "PassWordMan",
    description:
      "A password-management project built to explore application development and practical software engineering.",
    github: "https://github.com/anass125/PassWordMan",
    live: "https://pass-word-man.vercel.app",
    label: "Password management",
  },
  {
    name: "GetMeAChai",
    description:
      "A web application project focused on building and deploying a full-stack product experience.",
    github: "https://github.com/anass125/GetMeAChai",
    live: "https://get-me-a-chai-rose.vercel.app",
    label: "Web application",
  },
];

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function AuthorPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070711] text-slate-100">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-700/10 blur-[120px]" />
        <div className="absolute -right-40 top-96 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/[0.08]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="text-sm font-bold text-white sm:text-base"
          >
            <span className="text-violet-400">{"</>"}</span> Anas Shaikh
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-400/40 hover:text-white"
          >
            ← Back to book
          </Link>
        </nav>
      </header>

      {/* Profile hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-300">
              About the author
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Hi, I&apos;m Anas
              <br />
              <span className="text-violet-300">Shaikh.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Developer, learner, and builder who enjoys turning ideas into
              working software.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              I enjoy exploring web development, building projects, learning
              how applications work, and improving the way I approach
              software problems. This book reflects an important part of
              that process: learning to investigate a bug instead of merely
              treating its symptoms.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/anass125"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400"
              >
                Visit GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/anas-shaikh-946aa4372"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-violet-400/40 hover:bg-violet-500/10"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Profile card */}
          <div className="mx-auto w-full max-w-sm">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-[#10101d] to-blue-500/[0.06] p-8 shadow-2xl shadow-violet-950/20">
              <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.6)]" />

              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-500/10 text-3xl font-black text-violet-200">
                AS
              </div>

              <h2 className="mt-7 text-2xl font-bold text-white">
                Anas Shaikh
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Software development enthusiast
              </p>

              <div className="my-7 h-px bg-white/10" />

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-slate-500">Focus</p>
                  <p className="mt-1 text-slate-200">
                    Web development and problem solving
                  </p>
                </div>
                <div>
                  <p className="text-slate-500">Currently exploring</p>
                  <p className="mt-1 text-slate-200">
                    Building practical web applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.02] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
              My approach
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Learn by building.
              <br />
              Improve by investigating.
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-slate-400">
            <p>
              Building software involves more than writing code. It also
              means understanding unexpected behaviour, reproducing problems,
              reading error messages, testing assumptions, and verifying
              solutions.
            </p>
            <p>
              I believe a structured problem-solving process makes development
              more effective. Instead of jumping between possible fixes,
              developers can collect evidence, narrow down the cause, and
              explain why a solution works.
            </p>
            <p>
              That is the idea behind{" "}
              <span className="font-semibold text-white">
                From Bug Report to Root Cause
              </span>
              : make debugging a repeatable skill rather than a guessing game.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
            Technologies
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Tools I work with.
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            Technologies and tools relevant to my web-development projects.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300 transition hover:border-violet-400/40 hover:bg-violet-500/[0.08] hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.02] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
                Selected work
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Projects I&apos;ve built.
              </h2>
            </div>

            <ExternalLink href="https://github.com/anass125">
              More on GitHub
            </ExternalLink>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="rounded-2xl border border-white/10 bg-[#0b0b17]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-lg border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-200">
                    {project.label}
                  </span>
                  <span className="font-mono text-sm text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {project.name}
                </h3>

                <p className="mt-3 min-h-20 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-5">
                  <ExternalLink href={project.github}>
                    Source code
                  </ExternalLink>
                  <ExternalLink href={project.live}>
                    Live project
                  </ExternalLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
            Education
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Always learning.
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            I continue to develop my skills through hands-on projects,
            technical exploration, and learning new development practices.
          </p>
        </div>
      </section>

      {/* Book CTA */}
      <section className="relative z-10 px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-950/50 via-[#111020] to-blue-950/30 p-8 sm:p-12 lg:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
            From Bug Report to Root Cause
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
            Better debugging starts with a better process.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Explore the book and discover a structured way to approach
            software bugs, investigate failures, and find root causes.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-xl bg-violet-500 px-6 py-3.5 font-bold text-white transition hover:bg-violet-400"
          >
            Explore the book →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Anas Shaikh.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <ExternalLink href="https://github.com/anass125">
              GitHub
            </ExternalLink>
            <ExternalLink href="https://linkedin.com/in/anas-shaikh-946aa4372">
              LinkedIn
            </ExternalLink>
            <Link href="/" className="transition hover:text-white">
              Book
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
