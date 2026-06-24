import logo from '../assets/images/logo.svg'

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'About', href: '#about' },
  { label: 'Research & Publications', href: '#research' },
  { label: 'School of Leadership', href: '#leadership' },
  { label: 'Digital Governance & AI', href: '#ai-lab' },
  { label: 'Media & Speaking', href: '#media' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="bg-navy">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <a href="#" className="flex shrink-0 items-center gap-3">
          <img src={logo} alt="NB Logo" className="h-11 w-11" />
          <div className="leading-tight">
            <p className="text-[13px] font-normal text-white">Dr. Golam Rabbani</p>
            <p className="text-[11px] font-semibold tracking-[0.12em] text-white">
              NAYAN BANGALEE
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-5 md:flex md:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap text-[12px] font-medium transition-colors ${
                link.active
                  ? 'border-b-2 border-gold pb-0.5 text-gold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 xl:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>
    </header>
  )
}
