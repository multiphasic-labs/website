import Link from 'next/link'
import Image from 'next/image'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/product', label: 'Product' },
  { href: '/benchmark', label: 'Benchmark' },
  { href: '/contact', label: 'Contact' },
]

const GITHUB = 'https://github.com/multiphasic-labs/clinical-testing-tool'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="container-site py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="space-y-3 max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/assets/MULTIPHASIC-9eef11f0-719d-473e-8d4f-6bf93ca47f46.png"
                alt="Multiphasic Labs"
                width={24}
                height={24}
                className="rounded opacity-80"
              />
              <span className="text-sm font-semibold text-neutral-300">Multiphasic Labs</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Open-source safety evaluation for AI in mental health contexts.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-10 gap-y-4" aria-label="Footer">
            <div className="space-y-2">
              <p className="label text-neutral-600">Pages</p>
              <ul className="space-y-1.5">
                {NAV.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-neutral-200 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="label text-neutral-600">Open source</p>
              <ul className="space-y-1.5">
                <li>
                  <a href={GITHUB} target="_blank" rel="noopener noreferrer"
                    className="text-sm hover:text-neutral-200 transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={`${GITHUB}/issues`} target="_blank" rel="noopener noreferrer"
                    className="text-sm hover:text-neutral-200 transition-colors">
                    Issues
                  </a>
                </li>
                <li>
                  <a href={`${GITHUB}/blob/main/docs/METHODOLOGY.md`} target="_blank" rel="noopener noreferrer"
                    className="text-sm hover:text-neutral-200 transition-colors">
                    Methodology
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between gap-3 text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Multiphasic Labs. All rights reserved.</p>
          <p>Not a clinical tool. For AI evaluation only.</p>
        </div>
      </div>
    </footer>
  )
}
