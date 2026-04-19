import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Multiphasic Labs. Bug reports, partnerships, and feedback on the Clinical Testing Tool.',
  openGraph: { url: 'https://multiphasiclabs.com/contact' },
}

const LINKS = [
  {
    title: 'GitHub Issues',
    description: 'Bug reports, feature requests, and questions about the Clinical Testing Tool.',
    href: 'https://github.com/multiphasic-labs/clinical-testing-tool/issues',
    label: 'Open an issue →',
    external: true,
  },
  {
    title: 'GitHub Discussions',
    description: 'Broader conversations about methodology, personas, and evaluation design.',
    href: 'https://github.com/multiphasic-labs/clinical-testing-tool/discussions',
    label: 'Join the discussion →',
    external: true,
  },
  {
    title: 'Email',
    description: 'Partnerships, press, and anything that doesn\'t fit GitHub.',
    href: 'mailto:hello@multiphasiclabs.com',
    label: 'hello@multiphasiclabs.com',
    external: false,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section border-b border-neutral-200 bg-white">
        <div className="container-site max-w-3xl">
          <p className="label mb-5">Contact</p>
          <h1 className="text-5xl font-bold text-neutral-950 mb-6">
            Get in touch.
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
            We're interested in feedback from teams building mental health AI, researchers
            working on clinical safety evaluation, and anyone who wants to improve the benchmark.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="section border-b border-neutral-200 bg-[#FAFAF8]">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            {LINKS.map((link) => (
              <div key={link.title} className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-3 flex flex-col">
                <h2 className="font-semibold text-neutral-950">{link.title}</h2>
                <p className="text-sm text-neutral-600 leading-relaxed flex-1">{link.description}</p>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we're looking for */}
      <section className="section bg-white">
        <div className="container-site max-w-2xl">
          <p className="label mb-4">Partnerships</p>
          <h2 className="text-2xl font-bold text-neutral-950 mb-6">
            We want to hear from you if...
          </h2>
          <ul className="space-y-4">
            {[
              "You're building a mental health chatbot and want to run pre-deployment safety evaluation.",
              "You have domain expertise in clinical psychology or mental health crisis response and see gaps in our methodology.",
              "You want to add personas or criteria that reflect populations we haven't covered.",
              "You're a researcher working on AI safety evaluation in sensitive domains.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-neutral-600 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
