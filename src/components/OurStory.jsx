import { useInView } from "react-intersection-observer";
import weddingData from "../data/weddingData";
import heroImage from "../assets/images/hero-image.jpeg";

export default function OurStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="story" ref={ref} className="py-20 md:py-28 bg-white/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`font-body text-xs uppercase tracking-[0.3em] text-warm-gray mb-3 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            How It All Began
          </p>
          <h2
            className={`font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {weddingData.story.title}
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

        {/* Story Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Decorative Side */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden relative">
              <img
                src={heroImage}
                alt="Gideon & Rebecca"
                className="w-full h-full object-cover"
              />
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/30" />
            </div>
          </div>

          {/* Story Text */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-6">
              {weddingData.story.paragraphs.map((paragraph, index) => {
                const parts = paragraph.split(/(#AChapterCalledForever)/g);
                return (
                  <p
                    key={index}
                    className="font-body text-warm-gray leading-relaxed text-sm md:text-base"
                  >
                    {parts.map((part, i) =>
                      part === "#AChapterCalledForever" ? (
                        <strong key={i} className="font-semibold text-charcoal">{part}</strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              })}
            </div>

            {/* Decorative quote */}
            <div className="mt-8 pl-6 border-l-2 border-gold/30">
              <p className="font-heading text-xl md:text-2xl text-charcoal italic">
                &ldquo;Whatever our souls are made of, yours and mine are the same.&rdquo;
              </p>
              <p className="font-body text-xs text-warm-gray-light mt-2 uppercase tracking-wider">
                — Emily Brontë
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
