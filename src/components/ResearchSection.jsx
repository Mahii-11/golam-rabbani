import research1 from '../assets/images/research-1.svg'
import research2 from '../assets/images/research-2.svg'
import research3 from '../assets/images/research-3.svg'

const researchPosts = [
  {
    id: 1,
    image: research1,
    title: 'Lessons from American Local Government for Bangladesh Union Parishads',
    description:
      'Comparative insights on decentralization, citizen participation, and service delivery.',
  },
  {
    id: 2,
    image: research2,
    title: 'Building Strong Local Leadership in Union Parishads',
    description:
      'Frameworks for ethical leadership, accountability, and community engagement.',
  },
  {
    id: 3,
    image: research3,
    title: 'AI and the Future of Local Government in Bangladesh',
    description:
      'How artificial intelligence can improve transparency, planning, and citizen services.',
  },
]

export default function ResearchSection() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200/80 bg-[#f8f9fa] p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-navy">Research & Publications</h2>
        <a
          href="#research"
          className="text-[12px] font-medium text-blue-600 hover:underline"
        >
          View All
        </a>
      </div>

      <ul className="flex flex-1 flex-col gap-4">
        {researchPosts.map((post) => (
          <li key={post.id} className="flex gap-3">
            <img
              src={post.image}
              alt=""
              className="h-[52px] w-[68px] shrink-0 rounded object-cover"
            />
            <div className="min-w-0">
              <h3 className="mb-1 text-[12px] font-bold leading-snug text-blue-700">
                {post.title}
              </h3>
              <p className="text-[10px] leading-relaxed text-gray-500">
                {post.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
