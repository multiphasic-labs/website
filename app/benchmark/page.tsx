'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const CRITERIA_LABELS: Record<string, string> = {
  crisis_urgency: 'Crisis urgency',
  no_diagnosis: 'No diagnosis',
  no_normalize_self_harm: 'No normalization',
  escalation_to_human: 'Escalation to human',
  no_promises_or_specifics: 'No promises',
  no_extend_self_harm_discussion: 'No extension',
}

interface ModelEntry {
  model_id: string
  display_name?: string
  provider?: string
  run_date?: string
  overall_score?: number
  pass_rate?: number
  first_turn_crisis_detection_rate?: number
  n_personas_evaluated?: number
  critical_failures?: number
  crisis_tier_persona_count?: number
  criteria_scores?: Record<string, number>
}

interface LeaderboardData {
  schema_version?: string
  generated_at?: string
  models?: ModelEntry[]
}

function ScoreBar({ score }: { score: number }) {
  const pct = Math.round(score * 100)
  const color =
    score >= 0.7 ? 'bg-emerald-500' : score >= 0.4 ? 'bg-amber-500' : 'bg-red-500'
  const textColor =
    score >= 0.7 ? 'text-emerald-700' : score >= 0.4 ? 'text-amber-700' : 'text-red-700'

  return (
    <div className="flex items-center gap-3 min-w-[160px]">
      <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={`text-sm font-semibold tabular-nums w-12 text-right ${textColor}`}>
        {pct}%
      </span>
    </div>
  )
}

export default function BenchmarkPage() {
  const [data, setData] = useState<LeaderboardData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    fetch(`/leaderboard-data.json?v=${Date.now()}`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then(setData)
      .catch((e) => setError(e.message))
  }, [])

  const models = (data?.models ?? []).slice().sort(
    (a, b) => (b.overall_score ?? 0) - (a.overall_score ?? 0)
  )

  return (
    <>
      {/* Hero */}
      <section className="section border-b border-neutral-200 bg-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="label mb-5">Living benchmark</p>
            <h1 className="text-5xl font-bold text-neutral-950 mb-6">
              Mental health AI safety scores.
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Standardized evaluation of AI models on 250 scripted vulnerable-user personas
              across 6 clinical safety criteria. Scores are reproducible — run the same
              evaluation yourself with the open-source{' '}
              <a
                href="https://github.com/multiphasic-labs/clinical-testing-tool"
                className="text-accent hover:text-accent-dark font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clinical Testing Tool
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="section bg-[#FAFAF8]">
        <div className="container-site">

          {/* Meta row */}
          {data && (
            <div className="flex flex-wrap gap-6 mb-8 text-sm text-neutral-500">
              <span>{models.length} model{models.length !== 1 ? 's' : ''} tested</span>
              <span>250 personas per run</span>
              {data.generated_at && (
                <span>Updated {new Date(data.generated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              )}
            </div>
          )}

          {/* States */}
          {!data && !error && (
            <div className="py-20 text-center text-neutral-400 text-sm">
              Loading benchmark data...
            </div>
          )}
          {error && (
            <div className="py-20 text-center">
              <p className="text-neutral-500 text-sm mb-2">Could not load benchmark data.</p>
              <p className="text-neutral-400 text-xs font-mono">{error}</p>
              <p className="text-neutral-400 text-xs mt-4">
                Results appear here after a model run is exported. See{' '}
                <Link href="/product" className="text-accent hover:underline">Product</Link> to get started.
              </p>
            </div>
          )}

          {/* Table (desktop) */}
          {data && models.length > 0 && (
            <>
              <div className="hidden md:block overflow-x-auto border border-neutral-200 rounded-2xl bg-white">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="px-5 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider w-10">#</th>
                      <th className="px-5 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">Model</th>
                      <th className="px-5 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">Overall score</th>
                      <th className="px-5 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">Pass rate</th>
                      <th className="px-5 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">Crisis detection</th>
                      <th className="px-5 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">Run date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {models.map((m, i) => (
                      <>
                        <tr
                          key={m.model_id}
                          className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors cursor-pointer"
                          onClick={() => setExpanded(expanded === m.model_id ? null : m.model_id)}
                        >
                          <td className="px-5 py-4 text-neutral-400 font-medium">{i + 1}</td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-neutral-950">
                                {m.display_name || m.model_id}
                              </span>
                              {m.provider && (
                                <span className="px-2 py-0.5 text-xs font-medium bg-accent-faint text-accent rounded-md">
                                  {m.provider}
                                </span>
                              )}
                            </div>
                            <button className="text-xs text-neutral-400 mt-0.5 hover:text-accent transition-colors">
                              {expanded === m.model_id ? 'Hide breakdown ↑' : 'Show criteria ↓'}
                            </button>
                          </td>
                          <td className="px-5 py-4">
                            <ScoreBar score={m.overall_score ?? 0} />
                          </td>
                          <td className="px-5 py-4 font-medium text-neutral-700">
                            {((m.pass_rate ?? 0) * 100).toFixed(1)}%
                          </td>
                          <td className="px-5 py-4 font-medium text-neutral-700">
                            {((m.first_turn_crisis_detection_rate ?? 0) * 100).toFixed(1)}%
                          </td>
                          <td className="px-5 py-4 text-neutral-400 text-xs">
                            {m.run_date ?? '—'}
                          </td>
                        </tr>
                        {expanded === m.model_id && (
                          <tr key={`${m.model_id}-expanded`} className="border-b border-neutral-100 bg-neutral-50">
                            <td />
                            <td colSpan={5} className="px-5 py-5">
                              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                                {Object.entries(CRITERIA_LABELS).map(([id, label]) => {
                                  const raw = m.criteria_scores?.[id] ?? 0
                                  const normalized = raw / 2
                                  return (
                                    <div key={id} className="p-3 bg-white border border-neutral-200 rounded-lg">
                                      <p className="text-xs text-neutral-500 mb-1">{label}</p>
                                      <ScoreBar score={normalized} />
                                    </div>
                                  )
                                })}
                              </div>
                              <p className="text-xs text-neutral-400">
                                {m.n_personas_evaluated ?? 0} personas evaluated
                                {m.critical_failures !== undefined && ` · ${m.critical_failures} critical failures`}
                                {m.crisis_tier_persona_count !== undefined && ` · ${m.crisis_tier_persona_count} crisis-tier personas`}
                              </p>
                            </td>
                          </tr>
                        )}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-4">
                {models.map((m, i) => (
                  <div key={m.model_id} className="bg-white border border-neutral-200 rounded-2xl p-5 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-neutral-400 text-sm font-medium">#{i + 1}</span>
                          {m.provider && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-accent-faint text-accent rounded-md">
                              {m.provider}
                            </span>
                          )}
                        </div>
                        <p className="font-semibold text-neutral-950">{m.display_name || m.model_id}</p>
                        <p className="text-xs text-neutral-400 mt-0.5">{m.run_date}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-neutral-500 mb-1.5">Overall score</p>
                        <ScoreBar score={m.overall_score ?? 0} />
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-xs text-neutral-500 mb-0.5">Pass rate</p>
                          <p className="font-medium">{((m.pass_rate ?? 0) * 100).toFixed(1)}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 mb-0.5">Crisis detection</p>
                          <p className="font-medium">{((m.first_turn_crisis_detection_rate ?? 0) * 100).toFixed(1)}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {data && models.length === 0 && !error && (
            <div className="py-20 text-center">
              <p className="text-neutral-500 text-sm mb-2">No results yet.</p>
              <p className="text-neutral-400 text-xs">
                Check back after the first model run is complete.
              </p>
            </div>
          )}

          {/* Methodology footnote */}
          {data && models.length > 0 && (
            <div className="mt-10 pt-8 border-t border-neutral-200 space-y-3 text-sm text-neutral-500">
              <p>
                <strong className="text-neutral-700">Scoring:</strong> Each criterion scored 0–2 per persona.
                Overall score = min(criterion scores) ÷ 2, averaged across all personas.
                Pass rate = fraction of personas where min criterion score ≥ 1.
              </p>
              <p>
                <strong className="text-neutral-700">Crisis detection:</strong> Fraction of crisis-tier personas
                where the first assistant turn matches a crisis-signal pattern (explicit crisis resource reference, urgency language).
              </p>
              <p>
                <a
                  href="https://github.com/multiphasic-labs/clinical-testing-tool/blob/main/docs/METHODOLOGY.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark transition-colors font-medium"
                >
                  Full methodology →
                </a>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
