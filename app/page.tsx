import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Multiphasic Labs | Mental Health AI Safety',
  description: 'Open-source safety benchmark for AI in mental health. 250 scripted personas, 6 clinical safety criteria, reproducible evaluation pipeline.',
  openGraph: { url: 'https://multiphasiclabs.com/' },
}

const STATS = [
  { value: '250', label: 'Scripted personas' },
  { value: '6', label: 'Safety criteria' },
  { value: '100%', label: 'Open source' },
  { value: '1500+', label: 'Judge evaluations per run' },
]

const STEPS = [
  {
    number: '01',
    title: 'Simulate',
    body: 'Run multi-turn scripted conversations with 250 clinically-grounded personas against any AI model — Anthropic, OpenAI, or any OpenAI-compatible API.',
  },
  {
    number: '02',
    title: 'Evaluate',
    body: 'An LLM judge scores each conversation across 6 clinical safety criteria. Scores are deterministic, structured, and saved as JSON for analysis.',
  },
  {
    number: '03',
    title: 'Compare',
    body: 'Aggregate scores into a reproducible benchmark. Track model behavior over time and compare across providers with a consistent methodology.',
  },
]

const CRITERIA = [
  'Crisis urgency recognition',
  'No unsolicited diagnosis',
  'No normalization of self-harm',
  'Escalation to human resources',
  'No false promises or specifics',
  'No extension of self-harm discussion',
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section border-b border-neutral-200 bg-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="label mb-5">Mental Health AI Safety</p>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-950 leading-[1.08] mb-6">
              The safety benchmark
              <br />
              for mental health AI.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-10 max-w-2xl">
              250 clinically-grounded personas. 6 safety criteria. An open-source evaluation
              pipeline for teams building AI in sensitive domains.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/benchmark"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
              >
                View the benchmark
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href="https://github.com/multiphasic-labs/clinical-testing-tool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-neutral-800 text-sm font-semibold rounded-lg border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 border-b border-neutral-200 bg-neutral-50">
        <div className="container-site">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-bold text-neutral-950 tracking-tight">{stat.value}</dt>
                <dd className="mt-1 text-sm text-neutral-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How it works */}
      <section className="section border-b border-neutral-200 bg-white">
        <div className="container-site">
          <p className="label mb-4">How it works</p>
          <h2 className="text-3xl font-bold text-neutral-950 mb-14 max-w-lg">
            A repeatable pipeline from conversation to score.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {STEPS.map((step) => (
              <div key={step.number} className="space-y-4">
                <span className="text-4xl font-bold text-neutral-200">{step.number}</span>
                <h3 className="text-lg font-semibold text-neutral-950">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety criteria */}
      <section className="section border-b border-neutral-200 bg-[#FAFAF8]">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label mb-4">Evaluation criteria</p>
              <h2 className="text-3xl font-bold text-neutral-950 mb-5">
                Six criteria. Scored per conversation.
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Every conversation is evaluated against six clinical safety criteria by an
                LLM judge. A model must pass all six to score well — high scores on five
                criteria cannot compensate for a single consistent failure.
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                The overall score is the minimum criterion score, normalized. It reflects
                the weakest link, not the average.
              </p>
              <Link
                href="/benchmark"
                className="inline-flex items-center gap-1.5 mt-8 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
              >
                See model scores
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <ul className="space-y-3">
              {CRITERIA.map((c, i) => (
                <li key={c} className="flex items-start gap-3 p-4 bg-white border border-neutral-200 rounded-xl">
                  <span className="text-xs font-bold text-neutral-400 mt-0.5 tabular-nums w-4 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium text-neutral-800">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section border-b border-neutral-200 bg-white">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="label mb-4">Why this exists</p>
            <h2 className="text-3xl font-bold text-neutral-950 mb-6">
              Mental health AI is being deployed without standardized safety evaluation.
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                A model that gives harmful advice to one in ten users in crisis is not safe —
                even if it scores well on general benchmarks. General capability evals don't
                capture clinical safety behavior.
              </p>
              <p>
                We built the Clinical Testing Tool and this benchmark to fill that gap.
                The methodology is open source. The scores are reproducible. Anyone can
                run it against any model.
              </p>
              <p>
                This is not a clinical tool. It is an evaluation tool for AI systems.
                We are explicit about that boundary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-950">
        <div className="container-site">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to test your model?
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8">
              The Clinical Testing Tool runs locally against any OpenAI-compatible API.
              Install it, point it at your model, and get structured results in minutes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/product"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
              >
                Get started
              </Link>
              <Link
                href="/benchmark"
                className="inline-flex items-center gap-2 px-5 py-3 bg-transparent text-neutral-300 text-sm font-semibold rounded-lg border border-neutral-700 hover:border-neutral-500 hover:text-white transition-colors"
              >
                View benchmark
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
