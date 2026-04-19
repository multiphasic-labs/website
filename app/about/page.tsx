import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Multiphasic Labs builds open-source safety evaluation tooling for AI in mental health contexts. Mission, values, and what we are not.',
  openGraph: { url: 'https://multiphasiclabs.com/about' },
}

const BELIEFS = [
  {
    title: 'Safety testing should be repeatable and citable.',
    body: 'Ad hoc eval processes produce results nobody can verify. We build structured pipelines with versioned personas, fixed criteria, and JSON outputs so results can be reproduced and compared.',
  },
  {
    title: 'Tooling should be open and auditable.',
    body: "If you can't inspect what you're being evaluated against, you can't trust the result. The Clinical Testing Tool is fully open source — personas, criteria, and judge prompts included.",
  },
  {
    title: 'A single safety eval is not enough.',
    body: 'Models change. Personas improve. Criteria evolve. The benchmark is designed to be run repeatedly, not once at deployment. Safety is an ongoing process.',
  },
  {
    title: 'Testing AI is not clinical practice.',
    body: 'Our tools evaluate AI systems. They must not be used to assess or triage real people in mental health distress. This is a hard boundary.',
  },
]

const NOT_THIS = [
  'A clinical assessment tool for real users',
  'A substitute for human expert review or clinical supervision',
  'A complete guarantee of safety in production',
  'A general-purpose chatbot evaluation framework',
  'A diagnostic tool of any kind',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section border-b border-neutral-200 bg-white">
        <div className="container-site max-w-3xl">
          <p className="label mb-5">About</p>
          <h1 className="text-5xl font-bold text-neutral-950 mb-6">
            Practical tooling for<br />AI safety in mental health.
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
            We build evaluation infrastructure for the part of the AI stack that most teams
            skip. Not the most glamorous work. Probably the most important.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section border-b border-neutral-200 bg-[#FAFAF8]">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="label mb-4">Mission</p>
              <h2 className="text-2xl font-bold text-neutral-950 mb-6">
                Make AI safety evaluation accessible and reproducible.
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Mental health chatbots are being deployed at scale in apps used by people
                  in genuine distress. Most of them are tested informally, if at all, against
                  clinical safety criteria.
                </p>
                <p>
                  We built the tooling we wished existed: a structured, open-source pipeline
                  that any team can run to get reproducible safety scores before deployment.
                </p>
                <p>
                  The benchmark at{' '}
                  <Link href="/benchmark" className="text-accent hover:text-accent-dark font-medium transition-colors">
                    multiphasiclabs.com/benchmark
                  </Link>{' '}
                  is the public output of that pipeline — a living comparison of how current
                  AI models perform on clinical safety criteria.
                </p>
              </div>
            </div>
            <div>
              <p className="label mb-4">Early stage</p>
              <h2 className="text-2xl font-bold text-neutral-950 mb-6">
                Where we are.
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  The Clinical Testing Tool is our first release. We're iterating on the
                  persona library, evaluation criteria, and judge design based on feedback
                  from teams building in this space.
                </p>
                <p>
                  We're interested in partnerships with organizations building mental
                  health AI who want to run rigorous pre-deployment safety evaluation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                >
                  Get in touch
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="section border-b border-neutral-200 bg-white">
        <div className="container-site">
          <p className="label mb-4">Values</p>
          <h2 className="text-2xl font-bold text-neutral-950 mb-12">What we believe.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {BELIEFS.map((b) => (
              <div key={b.title} className="p-6 border border-neutral-200 rounded-xl space-y-3">
                <h3 className="font-semibold text-neutral-950">{b.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What this is not */}
      <section className="section bg-[#FAFAF8]">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="label mb-4">Limitations</p>
            <h2 className="text-2xl font-bold text-neutral-950 mb-6">What this is not.</h2>
            <p className="text-neutral-600 leading-relaxed mb-8">
              We are explicit about the boundaries of what this tool does and does not do.
              Misuse of AI safety tooling can cause harm just as misuse of the models themselves can.
            </p>
            <ul className="space-y-3">
              {NOT_THIS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="mt-0.5 shrink-0 text-neutral-400" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5 8H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-sm text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
