// ============================================================
// WEDDING DATA CONFIGURATION
// Edit this file to update all wedding information across the site.
// ============================================================

const weddingData = {
  // Couple Information
  bride: {
    firstName: "Rebecca Oluwaseun",
    lastName: "",
  },
  groom: {
    firstName: "Sampson Othuke",
    lastName: "",
  },

  // Wedding Date & Time
  weddingDate: "2026-09-24T10:00:00",
  weddingDateDisplay: "24th September 2026",

  // Welcome Message
  welcomeMessage: "Together with their families, invite you to share in their joy as they exchange marriage vows.",

  // Venue Information
  venue: {
    name: "Federal Marriage Registry, Ikoyi",
    address: "Alagbon Close, Ikoyi, Lagos.",
    city: "Lagos",
    country: "Nigeria",
    googleMapsUrl: "https://www.google.com/maps/search/Federal+Marriage+Registry+Ikoyi+Lagos",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.4!3d6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMDAuMCJMIDPCNTAnMjQuMCJF!5e0!3m2!1sen!2sng!4v1",
  },

  // Couple's Story
  story: {
    title: "Our Story",
    paragraphs: [
      "#AChapterCalledForever began at a usual meeting at the Kingdom Hall, an ordinary setting that soon became the nursery for something extraordinary. It was Rebecca's first time attending her sister's congregation, and during the meeting, she noticed Sampson, who was a new brother in the congregation. She liked his comments and simply wondered, \"Who is this person?\" She asked her sister, who told him he was the new brother.",
      "When the meeting ended, Sampson shared a warm greeting with Rebecca; that was how it started. Not long after, Sampson reached out to Rebecca. Their conversations were random and friendly at first. He would call to check how she was doing, and they continued talking for a while.",
      "Then, all of a sudden, he went blank. The calls stopped. Rebecca didn't think much of it at first. To her, they had simply been having random conversations and building a friendship. But after some time, she reached out to him herself. She called him, and the conversation continued. Rebecca reached out a few more times after that, and then Sampson started calling again; calling, calling, calling, still calling.",
      "What began with a meeting, a new brother, a simple greeting, and a few random conversations gradually became something more. And today, Sampson and Rebecca are celebrating the love that grew from that simple beginning. This is their story. This is #AChapterCalledForever. \u2764\uFE0F",
    ],
  },

  // Wedding Hashtag
  hashtag: "#AChapterCalledForever",

  // Event Schedule
  events: [],

  // Gallery Images
  // Replace these placeholder paths with actual photo paths
  gallery: [
    { id: 1, alt: "Couple photo 1", placeholder: true },
    { id: 2, alt: "Couple photo 2", placeholder: true },
    { id: 3, alt: "Couple photo 3", placeholder: true },
    { id: 4, alt: "Couple photo 4", placeholder: true },
    { id: 5, alt: "Couple photo 5", placeholder: true },
    { id: 6, alt: "Couple photo 6", placeholder: true },
  ],

  // RSVP Configuration
  rsvp: {
    deadline: "2026-09-20",
    deadlineDisplay: "20th September 2026",
    formUrl: "https://forms.gle/MrPAADpm7didTL5B6",
    contacts: [
      { name: "Japh", phone: "09015058699" },
      { name: "Dicta", phone: "09067776169" },
    ],
  },

  // Gift Registry
  giftRegistry: {
    title: "Gift Registry",
    message: "Your presence is the greatest gift we could ask for. However, if you wish to honor us with a gift, we have established a small registry for your convenience.",
    bankDetails: {
      bankName: "UBA",
      accountName: "Rebecca Paul",
      accountNumber: "2070190683",
    },
    items: [],
  },

  // FAQ Section
  faqs: [],

  // Music Configuration
  music: {
    enabled: true,
    audioFile: "/music/Tchella_-_Ife_In_Love__CeeNaija.com_.mp3",
    autoplay: false,
    title: "If\u00e9 (In Love) by Tchella",
  },

  // Social Media / Contact (placeholder)
  social: {
    instagram: null,
    twitter: null,
    facebook: null,
    email: null,
    phone: null,
  },

  // Footer
  footer: {
    message: "Made with love for our special day",
  },
};

export default weddingData;
