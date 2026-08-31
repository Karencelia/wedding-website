import { useState } from "react";
import { useInView } from "react-intersection-observer";
import weddingData from "../data/weddingData";

function FAQItem({ faq, index, isOpen, onToggle, inView }) {
  return (
    <div
      className={`border-b border-gold-light/30 last:border-0 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-2 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg sm:text-xl text-charcoal group-hover:text-gold transition-colors pr-4">
          {faq.question}
        </span>
        <div
          className={`w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen ? "bg-gold/10 rotate-180" : "group-hover:border-gold/40"
          }`}
        >
          <svg
            className="w-4 h-4 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-body text-sm text-warm-gray px-2 pb-5 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-20 md:py-28 bg-white/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className={`font-body text-xs uppercase tracking-[0.3em] text-warm-gray mb-3 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Have Questions?
          </p>
          <h2
            className={`font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Frequently Asked
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

        {/* FAQ Accordion */}
        <div
          className={`glass-card p-6 sm:p-8 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {weddingData.faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
              inView={inView}
            />
          ))}
        </div>

        {/* Additional Contact */}
        <div
          className={`text-center mt-8 transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-body text-sm text-warm-gray">
            Still have questions? Feel free to{" "}
            {weddingData.social.email ? (
              <a
                href={`mailto:${weddingData.social.email}`}
                className="text-gold hover:text-gold-dark underline underline-offset-4 transition-colors"
              >
                contact us
              </a>
            ) : (
              <span className="text-gold italic">reach out to us directly</span>
            )}
            .
          </p>
        </div>
      </div>
    </section>
  );
}
