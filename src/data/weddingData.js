// ============================================================
// WEDDING DATA CONFIGURATION
// Edit this file to update all wedding information across the site.
// ============================================================

const weddingData = {
  // Couple Information
  bride: {
    firstName: "Bride's Name",
    lastName: "",
  },
  groom: {
    firstName: "Groom's Name",
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
    address: "Ikorodu Crescent, Dolphin Estate (facing Nigeria Correctional Services), Lagos 106104",
    city: "Lagos",
    country: "Nigeria",
    googleMapsUrl: "https://www.google.com/maps/search/Federal+Marriage+Registry+Ikoyi+Lagos",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.4!3d6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMDAuMCJMIDPCNTAnMjQuMCJF!5e0!3m2!1sen!2sng!4v1",
  },

  // Couple's Story
  story: {
    title: "Our Story",
    paragraphs: [
      "Every love story is beautiful, but ours is our favorite. Our journey began with a simple moment that changed everything — a chance encounter that led to a lifetime of love.",
      "From our first conversation to the countless adventures we've shared, each moment has strengthened our bond and deepened our love. Through laughter and tears, through calm and storm, we found in each other a love that feels like home.",
      "Now, as we prepare to begin this new chapter together, we are filled with gratitude for the journey that brought us here and excitement for the future that awaits us.",
    ],
  },

  // Wedding Hashtag
  hashtag: "#OurWedding",

  // Event Schedule
  events: [
    {
      title: "Wedding Ceremony",
      date: "24th September 2026",
      time: "Time to be announced",
      venue: "Federal Marriage Registry, Ikoyi",
      address: "Ikorodu Crescent, Dolphin Estate (facing Nigeria Correctional Services), Lagos 106104",
    },
  ],

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
    deadline: null, // e.g., "2026-09-01"
    deadlineDisplay: "To be announced",
    backendEndpoint: null, // Set when backend is ready
    fields: {
      guestName: true,
      email: true,
      phone: true,
      numberOfGuests: true,
      attendance: true,
      message: true,
    },
  },

  // Gift Registry
  giftRegistry: {
    title: "Gift Registry",
    message: "Your presence is the greatest gift we could ask for. However, if you wish to honor us with a gift, we have established a small registry for your convenience.",
    bankDetails: null, // Placeholder - bank details to be added later
    // bankDetails: {
    //   bankName: "",
    //   accountName: "",
    //   accountNumber: "",
    //   sortCode: "",
    // },
    items: [], // Placeholder for gift registry items
  },

  // FAQ Section
  faqs: [
    {
      question: "What is the dress code?",
      answer: "Dress code details will be announced closer to the wedding date. We encourage elegant and formal attire for the celebration.",
    },
    {
      question: "Is there parking available at the venue?",
      answer: "Parking is available at the Federal Marriage Registry. We recommend arriving early to ensure convenient parking.",
    },
    {
      question: "Can I bring a plus one?",
      answer: "Please indicate the number of guests attending when you submit your RSVP. We will do our best to accommodate all requests.",
    },
    {
      question: "When is the RSVP deadline?",
      answer: "The RSVP deadline will be announced soon. Please submit your response as early as possible to help us with planning.",
    },
    {
      question: "Will there be a reception after the ceremony?",
      answer: "Details about the reception will be shared once arrangements are finalized. Please stay tuned for updates.",
    },
  ],

  // Music Configuration
  music: {
    enabled: true, // Set to false to disable the music player
    audioFile: "/music/Timi_Dakolo_Iyawo_Mi_.mp3",
    autoplay: false, // Note: browsers block autoplay without user interaction
    title: "Wedding Song",
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
