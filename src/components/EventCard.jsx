import { HiOutlineCalendar, HiOutlineMapPin } from 'react-icons/hi2'
import eventImage from '../assets/images/event.svg'

const eventData = {
  title: 'Local Government Leadership Forum 2025',
  description: 'Building Resilient & Smart Local Governments for the Future',
  date: 'December 20, 2025',
  location: 'Dhaka, Bangladesh',
  cta: 'Register Now',
}

export default function EventCard() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-4 text-[15px] font-bold text-navy">Upcoming Event</h2>

      <div className="flex flex-1 flex-col overflow-hidden rounded-xl bg-navy shadow-lg">
        <div className="relative h-[120px] shrink-0 overflow-hidden">
          <img
            src={eventImage}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/30" />
        </div>

        <div className="flex flex-1 flex-col px-5 py-5">
          <h3 className="mb-2 text-[14px] font-bold leading-snug text-white">
            {eventData.title}
          </h3>
          <p className="mb-4 text-[11px] leading-relaxed text-white/80">
            {eventData.description}
          </p>

          <div className="mb-5 space-y-2">
            <div className="flex items-center gap-2 text-[11px] text-white/90">
              <HiOutlineCalendar className="h-4 w-4 shrink-0 text-gold" />
              <span>{eventData.date}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-white/90">
              <HiOutlineMapPin className="h-4 w-4 shrink-0 text-gold" />
              <span>{eventData.location}</span>
            </div>
          </div>

          <button
            type="button"
            className="mt-auto w-full rounded-md bg-gold py-2.5 text-[13px] font-bold text-navy transition-colors hover:bg-gold-light"
          >
            {eventData.cta}
          </button>
        </div>
      </div>
    </div>
  )
}
