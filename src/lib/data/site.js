/** Mock data for the boutique hotel site. Swap with real backend later. */

export const rooms = [
  {
    id: "deodar-suite",
    name: "Deodar Suite",
    description:
      "A serene suite framed by ancient deodar trees with a private balcony overlooking the Kainchi valley.",
    pricePerNight: 14500,
    capacity: 2,
    size: "42 m²",
    view: "Valley",
    amenities: ["King bed", "Soaking tub", "Private balcony", "Fireplace"],
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "kumaoni-cottage",
    name: "Kumaoni Cottage",
    description:
      "Stand-alone slate-roof cottage with hand-loomed textiles and an outdoor sit-out by the pine grove.",
    pricePerNight: 18900,
    capacity: 3,
    size: "58 m²",
    view: "Forest",
    amenities: ["Living area", "Wood stove", "Outdoor patio", "Rain shower"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "ashram-room",
    name: "Ashram View Room",
    description:
      "A quiet contemplative room with a window seat facing the Kainchi Dham temple ridge.",
    pricePerNight: 9800,
    capacity: 2,
    size: "28 m²",
    view: "Mountain",
    amenities: ["Queen bed", "Meditation nook", "Tea station"],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "garden-studio",
    name: "Garden Studio",
    description:
      "Ground-floor studio opening to the rose garden — perfect for slow mornings with chai.",
    pricePerNight: 8200,
    capacity: 2,
    size: "32 m²",
    view: "Garden",
    amenities: ["Queen bed", "Garden access", "Reading desk"],
    image:
      "https://images.unsplash.com/photo-1551776235-dde6d482980b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "himalaya-villa",
    name: "Himalaya Villa",
    description:
      "Two-bedroom villa with a private deck, hot tub, and uninterrupted Nanda Devi views on clear mornings.",
    pricePerNight: 32500,
    capacity: 5,
    size: "120 m²",
    view: "Mountain",
    amenities: ["2 bedrooms", "Private deck", "Hot tub", "Butler service"],
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "valley-suite",
    name: "Valley Suite",
    description:
      "Floor-to-ceiling glass framing the river valley, with a soaking tub angled to the view.",
    pricePerNight: 16800,
    capacity: 2,
    size: "48 m²",
    view: "Valley",
    amenities: ["King bed", "Soaking tub", "Lounge area"],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  },
];



export const attractions = [
  {
    name: "Kainchi Dham Ashram",
    distance: "1.2 km",
    description:
      "Neem Karoli Baba's revered ashram on a bend of the Kosi river — most peaceful at sunrise.",
    image:
      "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Nainital Lake",
    distance: "17 km",
    description:
      "Iconic emerald lake ringed by hills; the boat ride at dusk is a quiet ritual.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Bhimtal & Sattal",
    distance: "26 km",
    description:
      "Calmer lakes for kayaking, bird walks, and lakeside cafes away from the crowds.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mukteshwar Trek",
    distance: "45 km",
    description:
      "Half-day Himalayan ridge trek with a 19th-century temple at the summit.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
];


export const menu = [
  {
    section: "Mornings",
    items: [
      { name: "Bhang Ki Chutney Toast", description: "Hemp-seed chutney on sourdough", price: "₹420" },
      { name: "Aloo Ke Gutke Hash", description: "Kumaoni baby potatoes, sunny egg", price: "₹540" },
      { name: "Saffron Oat Pudding", description: "Slow-cooked oats, kesar, pistachio", price: "₹380" },
    ],
  },
  {
    section: "Valley Plates",
    items: [
      { name: "Bhatt Ki Churkani", description: "Black soybean curry, rice", price: "₹620" },
      { name: "Rainbow Trout Tawa", description: "Line-caught, smoked chili butter", price: "₹980" },
      { name: "Kafuli & Mandua Roti", description: "Spinach-fenugreek stew, finger-millet bread", price: "₹580" },
    ],
  },
  {
    section: "Cafe",
    items: [
      { name: "Mountain Espresso", description: "Single-origin Coorg, slow extraction", price: "₹220" },
      { name: "Buransh Iced Tea", description: "Rhododendron blossom, lime", price: "₹260" },
      { name: "Pine-Honey Cheesecake", description: "Local pine honey, cream cheese", price: "₹420" },
    ],
  },
];


export const itineraries = [
  {
    id: "two-day-reset",
    title: "Two-Day Kainchi Reset",
    duration: "2 days · 1 night",
    summary: "A short pilgrimage and forest reset for a long weekend.",
    days: [
      {
        day: "Day 1 — Arrive & Slow Down",
        activities: [
          "Welcome chai on the valley deck",
          "Walk to Kainchi Dham for evening aarti",
          "Bonfire dinner under the deodars",
        ],
      },
      {
        day: "Day 2 — Sunrise & Cafe",
        activities: [
          "Sunrise yoga on the meditation deck",
          "Forest breakfast trail",
          "Coffee at the Valley View Cafe before departure",
        ],
      },
    ],
  },
  {
    id: "four-day-himalaya",
    title: "Four-Day Himalayan Slow Travel",
    duration: "4 days · 3 nights",
    summary: "Temple, lakes, ridges, and one very good meal each day.",
    days: [
      { day: "Day 1", activities: ["Arrive, valley walk", "Ashram visit at dusk"] },
      { day: "Day 2", activities: ["Nainital lake day", "Sunset at Tiffin Top"] },
      { day: "Day 3", activities: ["Mukteshwar trek", "Stargazing dinner"] },
      { day: "Day 4", activities: ["Slow breakfast", "Pine-grove walk before checkout"] },
    ],
  },
];


export const eventTypes = [
  {
    title: "Intimate Weddings",
    description: "Forest mandap, candlelit dinners, and full-property buyouts up to 80 guests.",
    capacity: "Up to 80 guests",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Corporate Offsites",
    description: "Brainstorms by the river, breakout cabins, and farm-to-table lunches.",
    capacity: "20–40 attendees",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Milestone Celebrations",
    description: "Birthdays, anniversaries, and reunions with private dining experiences.",
    capacity: "10–30 guests",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1200&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "The most peaceful three days we've had in years. The cafe alone is worth the drive from Delhi.",
    author: "Ananya & Karan",
    location: "New Delhi",
  },
  {
    quote:
      "Felt like stepping into a slower century. The staff remember your tea before you do.",
    author: "Maya Iyer",
    location: "Mumbai",
  },
  {
    quote:
      "Our wedding here was intimate, warm, and absolutely beautiful. They thought of everything.",
    author: "Rhea & Vikram",
    location: "Bangalore",
  },
];

export const faqs = [
  {
    question: "How far is the property from Kainchi Dham temple?",
    answer:
      "About 1.2 km — a 15-minute walk along the river road, or a short drive we arrange on request.",
  },
  {
    question: "What is the best season to visit?",
    answer:
      "March–June for warm days and clear ridges, September–November for crisp post-monsoon air and rhododendron blooms.",
  },
  {
    question: "Do you arrange transfers from Kathgodam or Delhi?",
    answer:
      "Yes. We offer private cabs from Kathgodam railway station (2 hours) and door-to-door SUV transfers from Delhi.",
  },
  {
    question: "Is the property family- and child-friendly?",
    answer:
      "Absolutely. Suites accommodate families and we curate gentle activities for kids — nature walks, baking with the chef, and stargazing nights.",
  },
];
