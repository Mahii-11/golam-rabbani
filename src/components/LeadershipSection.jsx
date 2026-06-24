import {
  HiOutlineUser,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup,
  HiOutlineCalendarDays,
} from 'react-icons/hi2'

const leadershipPrograms = [
  {
    icon: HiOutlineUser,
    title: 'Leadership Training Programs',
    description: 'For Union Parishad chairmen, members, and officials.',
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: 'Policy Dialogues',
    description: 'On decentralization, finance, and local governance reform.',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Leadership Workshops',
    description: 'Hands-on sessions on planning, budgeting, and accountability.',
  },
  {
    icon: HiOutlineCalendarDays,
    title: 'Annual Leadership Forum',
    description: 'National platform for sharing best practices and innovations.',
  },
]

export default function LeadershipSection() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200/80 bg-[#f8f9fa] p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-navy">School of Leadership</h2>
        <a
          href="#leadership"
          className="text-[12px] font-medium text-blue-600 hover:underline"
        >
          Explore
        </a>
      </div>

      <ul className="flex flex-1 flex-col gap-4">
        {leadershipPrograms.map((item) => {
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
