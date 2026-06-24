import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { BsQuote } from 'react-icons/bs'
import signature from '../assets/images/signature.svg'

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: HiOutlineEnvelope, href: '#', label: 'Email' },
]

export default function FooterQuote() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-3 lg:gap-8 lg:px-10 lg:py-14">
        <div className="flex items-start gap-4">
          <BsQuote className="mt-1 h-10 w-10 shrink-0 text-gold" />
          <p className="text-[15px] italic leading-relaxed text-white/95 lg:text-[16px]">
            Strong local leadership builds strong communities, and strong
            communities build a strong nation.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={signature}
            alt="Nayan Bangalee signature"
            className="mb-2 h-10 w-auto"
          />
          <p className="text-[11px] text-white/80">
            Dr. Golam Rabbani Nayan Bangalee
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <p className="mb-4 text-[13px] font-medium text-white">Connect</p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
