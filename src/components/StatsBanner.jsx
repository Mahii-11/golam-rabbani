import { FaGraduationCap } from 'react-icons/fa'
import { HiOutlineUserGroup, HiOutlineGlobeAlt } from 'react-icons/hi2'
import { FaHandshake } from 'react-icons/fa6'

const stats = [
  {
    icon: FaGraduationCap,
    value: '20+',
    title: 'Years of Experience',
    description: 'In Local Government, Research & Education',
  },
  {
    icon: HiOutlineUserGroup,
    value: '100+',
    title: 'Training & Workshops',
    description: 'For Local Government Leaders & Officials',
  },
  {
    icon: FaHandshake,
    value: '50+',
    title: 'Policy Dialogues',
    description: 'On Governance, Finance & Decentralization',
  },
  {
    icon: HiOutlineGlobeAlt,
    value: null,
    title: 'International Perspective',
    description: 'Comparative Research on Bangladesh & USA',
    isTextValue: true,
  },
]

export default function StatsBanner() {
  return (
    <section className="relative z-20 -mt-10 px-6 lg:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="overflow-hidden rounded-[28px] bg-navy shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const isLast = index === stats.length - 1
              const isOddOnTablet = index % 2 === 1

              return (
                <div
                  key={stat.title}
                  className={`flex flex-col items-center px-6 py-8 text-center lg:px-8 lg:py-10 ${
                    !isLast ? 'border-b border-white/20 lg:border-b-0' : ''
                  } ${!isLast && !isOddOnTablet ? 'sm:border-r sm:border-white/20' : ''} ${
                    !isLast ? 'lg:border-r lg:border-white/20' : ''
                  }`}
                >
                  <Icon className="mb-4 h-7 w-7 text-gold" />

                  {stat.isTextValue ? (
                    <p className="mb-2 text-[22px] font-bold leading-tight text-gold lg:text-[24px]">
                      {stat.title}
                    </p>
                  ) : (
                    <>
                      <p className="mb-1 text-[32px] font-bold leading-none text-gold lg:text-[36px]">
                        {stat.value}
                      </p>
                      <p className="mb-2 text-[14px] font-semibold text-white">
                        {stat.title}
                      </p>
                    </>
                  )}

                  <p className="max-w-[220px] text-[11px] leading-snug text-white/75">
                    {stat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
