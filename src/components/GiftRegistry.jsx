import { useInView } from "react-intersection-observer";
import weddingData from "../data/weddingData";

export default function GiftRegistry() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { giftRegistry } = weddingData;

  return (
    <section id="gifts" ref={ref} className="py-20 md:py-28 bg-white/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className={`font-body text-xs uppercase tracking-[0.3em] text-warm-gray mb-3 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Your Generosity
          </p>
          <h2
            className={`font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {giftRegistry.title}
          </h2>
          <div
            className={`transition-all duration-1000 delay-400 ${
              inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-rose-dusty/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-rose-dusty/40" />
              <div className="w-12 h-[1px] bg-rose-dusty/40" />
            </div>
          </div>
        </div>

        {/* Gift Content */}
        <div
          className={`glass-card text-center transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-rose-dusty/20 flex items-center justify-center bg-rose-light/20">
            <svg className="w-7 h-7 text-rose-dusty" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>

          <p className="font-body text-warm-gray leading-relaxed text-sm md:text-base max-w-lg mx-auto">
            {giftRegistry.message}
          </p>

          {/* Bank Details Placeholder */}
          {giftRegistry.bankDetails ? (
            <div className="mt-8 p-6 bg-cream/60 rounded-lg border border-rose-light/30">
              <h4 className="font-heading text-xl text-charcoal mb-4">Bank Transfer Details</h4>
              <div className="space-y-2 font-body text-sm text-warm-gray">
                <p><span className="text-charcoal font-medium">Bank:</span> {giftRegistry.bankDetails.bankName}</p>
                <p><span className="text-charcoal font-medium">Account Name:</span> {giftRegistry.bankDetails.accountName}</p>
                <p><span className="text-charcoal font-medium">Account Number:</span> {giftRegistry.bankDetails.accountNumber}</p>
                {giftRegistry.bankDetails.sortCode && (
                  <p><span className="text-charcoal font-medium">Sort Code:</span> {giftRegistry.bankDetails.sortCode}</p>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-8 p-6 bg-cream/60 rounded-lg border border-rose-light/30">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-rose-dusty/15 flex items-center justify-center">
                <svg className="w-5 h-5 text-rose-dusty/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="font-body text-sm text-warm-gray-light italic">
                Gift and bank details will be added here when available.
              </p>
              <p className="font-body text-xs text-warm-gray-light mt-2">
                This section can be easily updated from the wedding data configuration.
              </p>
            </div>
          )}

          {/* Gift Items Placeholder */}
          {giftRegistry.items.length > 0 && (
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {giftRegistry.items.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-cream/60 rounded-lg border border-rose-light/30 text-left"
                >
                  <h5 className="font-heading text-lg text-charcoal">{item.name}</h5>
                  <p className="font-body text-xs text-warm-gray mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
