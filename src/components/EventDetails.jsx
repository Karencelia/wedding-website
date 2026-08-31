import { useInView } from "react-intersection-observer";
import weddingData from "../data/weddingData";

export default function EventDetails() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="events" ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-cream-dark to-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`font-body text-xs uppercase tracking-[0.3em] text-warm-gray mb-3 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Save The Date
          </p>
          <h2
            className={`font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Event Details
          </h2>
          <div
            className={`transition-all duration-1000 delay-400 ${
              inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-gold/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
              <div className="w-12 h-[1px] bg-gold/40" />
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 max-w-2xl mx-auto">
          {weddingData.events.map((event, index) => (
            <div
              key={index}
              className={`glass-card text-center transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 2) * 200}ms` }}
            >
              {/* Event Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/20 flex items-center justify-center bg-gold-light/20">
                <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>

              {/* Event Title */}
              <h3 className="font-heading text-2xl sm:text-3xl text-charcoal mb-4">
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-body text-sm text-warm-gray">{event.date}</span>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-body text-sm text-warm-gray">{event.time}</span>
                </div>

                <div className="flex items-start justify-center gap-3 pt-2">
                  <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-center">
                    <p className="font-body text-sm font-medium text-charcoal">{event.venue}</p>
                    <p className="font-body text-xs text-warm-gray-light mt-1">{event.address}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
