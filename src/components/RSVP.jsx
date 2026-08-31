import { useInView } from "react-intersection-observer";
import weddingData from "../data/weddingData";

export default function RSVP() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="rsvp" ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-cream to-cream-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className={`font-body text-xs uppercase tracking-[0.3em] text-warm-gray mb-3 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We Would Love to Hear From You
          </p>
          <h2
            className={`font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            RSVP
          </h2>
          <div
            className={`transition-all duration-1000 delay-400 ${
              inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
              <div className="w-12 h-[1px] bg-gold/40" />
            </div>
          </div>
          {weddingData.rsvp.deadline && (
            <p className="font-body text-sm text-warm-gray">
              Please respond by <span className="text-charcoal font-medium">{weddingData.rsvp.deadlineDisplay}</span>
            </p>
          )}
        </div>

        {/* RSVP Card */}
        <div
          className={`glass-card text-center transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/20 flex items-center justify-center bg-gold/5">
            <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h3 className="font-heading text-2xl text-charcoal mb-3">Kindly Respond</h3>
          <p className="font-body text-sm text-warm-gray mb-8 max-w-md mx-auto">
            Please fill out our RSVP form to let us know if you will be joining us to celebrate this special day.
          </p>

          {/* Google Forms Button */}
          <a
            href={weddingData.rsvp.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Respond via Google Forms
          </a>

          {/* Contact Numbers */}
          {weddingData.rsvp.contacts && weddingData.rsvp.contacts.length > 0 && (
            <div className="pt-6 border-t border-gold/10">
              <p className="font-body text-xs uppercase tracking-wider text-warm-gray-light mb-4">
                For inquiries, reach out to
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {weddingData.rsvp.contacts.map((contact) => (
                  <div key={contact.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center bg-gold/5">
                      <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-body text-sm font-medium text-charcoal">{contact.name}</p>
                      <p className="font-body text-xs text-warm-gray-light">{contact.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
