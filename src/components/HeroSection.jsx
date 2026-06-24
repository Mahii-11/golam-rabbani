import {
  HiOutlineUserGroup,
  HiOutlineBuildingLibrary,
  HiOutlineCpuChip,
  HiOutlineChartBar,
} from 'react-icons/hi2'
import heroBg from '../assets/images/hero-bg.svg'


const features = [
  { icon: HiOutlineUserGroup, label: 'Leadership Development' },
  { icon: HiOutlineBuildingLibrary, label: 'Local Government Reform' },
  { icon: HiOutlineCpuChip, label: 'Digital Governance & AI' },
  { icon: HiOutlineChartBar, label: 'Finance & Budgeting' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/60" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-end gap-6 px-6 pb-16 pt-8 md:grid-cols-2 lg:px-10 lg:pb-20 lg:pt-10">
        <div className="relative z-10 flex justify-center md:justify-start">
          <img
            src="/images/hero-1.jpg"
            alt="Dr. Golam Rabbani Nayan Bangalee"
            className="h-[340px] w-auto max-w-[320px] object-contain object-bottom sm:h-[400px] sm:max-w-[380px] lg:h-[460px] lg:max-w-[420px]"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center pb-4 md:pb-10">
          <p className="mb-3 text-[12px] font-medium tracking-wide text-gray-600 sm:text-[13px]">
            Local Government Leadership Expert | Researcher | Educator
          </p>

          <h1 className="mb-4 text-[28px] font-bold leading-[1.15] text-navy sm:text-[34px] lg:text-[38px]">
            Dr. Golam Rabbani
            <br />
            Nayan Bangalee
          </h1>

          <div className="mb-8 max-w-xl">
            <div className="mb-3 h-[3px] w-16 bg-gold" />
            <p className="text-[15px] font-semibold leading-snug text-navy sm:text-[17px] lg:text-[18px]">
              Bridging Local Governance Excellence Between Bangladesh and the
              United States
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-3">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 bg-white/60">
                  <Icon className="h-5 w-5 text-navy" />
                </div>
                <p className="text-[11px] font-semibold leading-tight text-navy sm:text-[12px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
