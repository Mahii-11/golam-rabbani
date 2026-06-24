import {
  HiOutlineCpuChip,
  HiOutlineBuildingOffice2,
  HiOutlineDevicePhoneMobile,
  HiOutlineChartBarSquare,
} from 'react-icons/hi2'

const aiLabItems = [
  {
    icon: HiOutlineCpuChip,
    title: 'AI for Local Government',
    description: 'Decision support tools for planning, budgeting, and service delivery.',
  },
  {
    icon: HiOutlineBuildingOffice2,
    title: 'Smart Union Parishad Initiative',
    description: 'Pilot projects on digital records, e-services, and open data.',
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: 'Digital Citizen Service Platform',
    description: 'Mobile-friendly access to local government information and services.',
  },
  {
    icon: HiOutlineChartBarSquare,
    title: 'Open Budget Dashboard',
    description: 'Visual tools to track local budgets, projects, and expenditures.',
  },
]

export default function AILabSection() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200/80 bg-[#f8f9fa] p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-navy">
          Digital Governance & AI Lab
        </h2>
        <a
          href="#ai-lab"
          className="text-[12px] font-medium text-blue-600 hover:underline"
        >
          Explore
        </a>
      </div>

      <ul className="flex flex-1 flex-col gap-4">
        {aiLabItems.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.title} className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                <Icon className="h-5 w-5 text-navy/70" />
              </div>
              <div className="min-w-0">
                <h3 className="mb-0.5 text-[12px] font-bold leading-snug text-navy">
                  {item.title}
                </h3>
                <p className="text-[10px] leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
