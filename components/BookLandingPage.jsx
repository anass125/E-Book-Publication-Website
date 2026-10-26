
import Link from "next/link";

const PAYMENT_URL = "https://rzp.io/rzp/pq5bv6sy";

const benefits = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "Learn to interpret bug reports, identify symptoms, and separate observations from assumptions.",
  },
  {
    number: "02",
    title: "Investigate systematically",
    description:
      "Use a structured debugging workflow instead of randomly changing code and hoping for a fix.",
  },
  {
    number: "03",
    title: "Find the root cause",
    description:
      "Trace failures through your application and identify the underlying reason an issue occurs.",
  },
  {
    number: "04",
    title: "Prevent regressions",
    description:
      "Validate your fixes, communicate findings, and reduce the chance of the same bug returning.",
  },
];

const chapters = [
  "Understanding bug reports",
  "Reproducing the issue",
  "Collecting useful evidence",
  "Reading logs and error messages",
  "Building a debugging hypothesis",
  "Tracing the execution flow",
  "Finding the root cause",
  "Implementing a reliable fix",
  "Testing and preventing regressions",
  "Writing a useful debugging report",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-violet-300">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-7 text-slate-400">{description}</p>
      )}
    </div>
  );
}

// function BookMockup() {
//   return (
//     <div className="relative mx-auto w-full max-w-sm">
//       <div className="absolute inset-8 rounded-full bg-violet-600/30 blur-[90px]" />

//       <div className="relative mx-auto w-[min(78%,280px)] rotate-[-5deg] transition duration-500 hover:rotate-0">
//         <div className="absolute inset-y-2 -right-3 w-5 rounded-r-md bg-slate-300 shadow-xl" />

//         <div className="relative flex aspect-[3/4] flex-col overflow-hidden rounded-r-lg border border-white/20 bg-gradient-to-br from-slate-950 via-[#15102e] to-violet-950 p-6 shadow-[0_25px_80px_rgba(124,58,237,0.28)] sm:p-8">
//           <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-violet-300/20" />
//           <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-violet-300/20" />

//           <p className="relative text-[9px] font-bold uppercase tracking-[0.28em] text-violet-300 sm:text-[10px]">
//             A practical debugging guide
//           </p>

//           <div className="relative mt-10">
//             <div className="mb-3 h-1 w-12 rounded-full bg-violet-400" />

//             <h2 className="text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl">
//               FROM
//               <br />
//               BUG REPORT
//               <br />
//               <span className="text-violet-300">TO ROOT</span>
//               <br />
//               CAUSE
//             </h2>
//           </div>

//           <div className="relative mt-auto">
//             <div className="mb-5 h-px w-full bg-white/20" />

//             <p className="text-[10px] leading-5 text-slate-300 sm:text-xs">
//               A systematic approach to debugging, investigation, and reliable
//               fixes.
//             </p>

//             <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
//               By Anas Shaikh
//             </p>
//           </div>

//           <div className="absolute bottom-0 right-0 h-24 w-24 translate-x-8 translate-y-8 rounded-full bg-violet-500/20 blur-2xl" />
//         </div>
//       </div>

//       <p className="relative mt-10 text-center text-sm text-slate-500">
//         A practical guide for developers who want to debug with confidence.
//       </p>
//     </div>
//   );
// }



function BookMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md px-4 py-6 sm:px-8">
      {/* Ambient background glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[100px]" />

      {/* Book and page edges */}
      <div className="relative mx-auto w-full max-w-[340px]">
        <div className="absolute inset-y-2 -right-2 w-3 rounded-r-md border-y border-r border-slate-500/40 bg-slate-300 shadow-lg" />

        {/* Main cover */}
        <div className="relative flex aspect-[3/4] flex-col overflow-hidden rounded-sm border border-white/15 bg-[#0c0c19] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.45)] sm:p-9">
          {/* Subtle grid texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(167,139,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Cover header */}
          <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400 sm:text-[10px]">
              Developer Field Guide
            </span>

            <span className="rounded border border-violet-400/30 px-2 py-1 text-[9px] font-semibold text-violet-300">
              PRACTICAL
            </span>
          </div>

          {/* Main title */}
          <div className="relative mt-8 sm:mt-10">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-400">
              The Art of Debugging
            </p>

            <h2 className="text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-5xl">
              FROM
              <br />
              BUG REPORT
              <br />
              <span className="text-violet-300">TO ROOT</span>
              <br />
              CAUSE.
            </h2>

            <p className="mt-5 max-w-[240px] text-xs leading-6 text-slate-400 sm:text-sm">
              A systematic approach to investigating bugs and building
              reliable software fixes.
            </p>
          </div>

          {/* Minimal debugging workflow illustration */}
          <div className="relative mt-auto pt-7">
            <div className="rounded-lg border border-white/10 bg-white/[0.035] p-3 sm:p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                <span className="ml-auto font-mono text-[9px] text-slate-500">
                  debug.log
                </span>
              </div>

              <div className="space-y-2.5 font-mono text-[9px] sm:text-[10px]">
                <div className="flex gap-3">
                  <span className="text-slate-600">01</span>
                  <span className="text-violet-300">
                    inspect(error)
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="text-slate-600">02</span>
                  <span className="text-slate-300">
                    trace.execution()
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="text-slate-600">03</span>
                  <span className="text-emerald-300">
                    fix.rootCause()
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                By Anas Shaikh
              </span>

              <span className="font-mono text-[10px] text-violet-300">
                01 — 10
              </span>
            </div>
          </div>

          {/* Small cover accent */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-24 w-1 bg-violet-400/70"
          />
        </div>
      </div>

      {/* Caption below the cover */}
      <p className="relative mx-auto mt-8 max-w-xs text-center text-sm leading-6 text-slate-400">
        Understand the problem. Trace the cause. Fix it with confidence.
      </p>
    </div>
  );
}


export default function BookLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070711] text-slate-100">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-700/10 blur-[120px]" />
        <div className="absolute -right-40 top-72 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 border-b border-white/[0.08]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="text-sm font-bold tracking-tight text-white sm:text-base"
          >
            <span className="text-violet-400">{"</>"}</span> Debugging Guide
          </Link>

          <div className="flex items-center gap-5 text-sm text-slate-300 sm:gap-8">
            <a
              href="#benefits"
              className="hidden transition hover:text-white sm:inline"
            >
              Benefits
            </a>

            <a
              href="#chapters"
              className="hidden transition hover:text-white sm:inline"
            >
              Contents
            </a>

            <Link
              href="/about"
              className="transition hover:text-white"
            >
              About author
            </Link>

            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 font-semibold text-violet-200 transition hover:border-violet-300 hover:bg-violet-500/20"
            >
              Get the ebook
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-32">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-xs font-medium text-violet-200">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            A practical guide for developers
          </div>

          <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            From Bug Report
            <br />
            to <span className="text-violet-300">Root Cause.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Stop guessing. Start investigating. Learn a structured approach
            to understanding software bugs, tracing their causes, and
            delivering fixes you can trust.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            {/* Primary purchase CTA */}
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-violet-500 px-7 py-4 font-bold text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:bg-violet-400"
            >
              Get the ebook <span className="ml-2">→</span>
            </a>

            <a
              href="#chapters"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-7 py-4 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.07]"
            >
              Explore the book
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span>✓ Practical workflow</span>
            <span>✓ Developer-focused</span>
            <span>✓ Root-cause thinking</span>
          </div>
        </div>

        <BookMockup />
      </section>

      {/* Benefits */}
      <section
        id="benefits"
        className="relative z-10 border-y border-white/[0.06] bg-white/[0.015] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why this guide?"
            title="Debug smarter, not harder."
            description="A repeatable approach helps you move from symptoms to evidence, from evidence to understanding, and from understanding to a reliable fix."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="group rounded-2xl border border-white/[0.09] bg-[#0c0c19]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/[0.04]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-sm font-bold text-violet-300">
                  {benefit.number}
                </span>

                <h3 className="mt-6 text-lg font-bold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contents */}
      <section
        id="chapters"
        className="relative z-10 mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <SectionHeading
          eyebrow="Inside the book"
          title="A clear path from symptom to solution."
          description="Work through the key stages of a disciplined debugging investigation."
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
          {chapters.map((chapter, index) => (
            <div
              key={chapter}
              className="flex items-center gap-5 border-b border-white/[0.07] px-5 py-5 last:border-b-0 sm:px-7"
            >
              <span className="w-8 shrink-0 font-mono text-sm text-violet-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-sm font-medium text-slate-200 sm:text-base">
                {chapter}
              </p>

              <span className="ml-auto text-slate-600">↗</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs leading-6 text-slate-500">
          Chapter titles above provide a suggested overview of the guide.
        </p>
      </section>

      {/* Author preview
      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.02] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
              About the author
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Built from a developer&apos;s perspective.
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-slate-400">
              Discover more about Anas Shaikh, his projects, and his
              development journey.
            </p>
          </div>

          <Link
            href="/about"
            className="shrink-0 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-violet-400/50 hover:bg-violet-500/10"
          >
            Meet the author →
          </Link>
        </div>
      </section> */}


      {/* Author preview */}
      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.02] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-violet-500/[0.06] via-transparent to-blue-500/[0.05] p-8 sm:p-10 md:flex-row md:items-center lg:p-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-300">
              About the author
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Built from a developer&apos;s perspective.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Discover more about Anas Shaikh, his projects, and his development
              journey. Learn about the experiences and ideas behind this practical
              approach to debugging.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border border-violet-400/30 bg-violet-500/10 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-500/20"
          >
            Meet the author
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>




      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Anas Shaikh. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">
            <Link
              href="/about"
              className="transition hover:text-white"
            >
              About
            </Link>

            <a
              href="https://github.com/anass125"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Get the ebook
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
