import { useState } from "react";
import { useInView } from "react-intersection-observer";
import weddingData from "../data/weddingData";

function GalleryItem({ image, index, onClick, inView }) {
  return (
    <div
      className={`group cursor-pointer transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
      onClick={() => onClick(image)}
    >
      <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-gold-light/30 to-cream-dark relative">
        {/* Placeholder content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="w-12 h-12 mb-3 rounded-full border border-gold/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="font-body text-xs text-warm-gray-light text-center">{image.alt}</p>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
            <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
              <svg className="w-4 h-4 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LightboxModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="max-w-2xl w-full aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-gold-light/30 to-cream-dark flex items-center justify-center animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center p-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center">
            <svg className="w-8 h-8 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="font-heading text-xl text-charcoal">{image.alt}</p>
          <p className="font-body text-sm text-warm-gray mt-2">Photo placeholder</p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-28 bg-white/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`font-body text-xs uppercase tracking-[0.3em] text-warm-gray mb-3 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Captured Moments
          </p>
          <h2
            className={`font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Photo Gallery
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {weddingData.gallery.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              index={index}
              onClick={setSelectedImage}
              inView={inView}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <LightboxModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
