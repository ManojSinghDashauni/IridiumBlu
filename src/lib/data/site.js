/** Mock data for the boutique hotel site. Swap with real backend later. */

export const rooms = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    description:
      "Perfect for couples, solo travellers, and pilgrims seeking comfort and convenience just minutes from Kainchi Dham.",
    pricePerNight: 6000,
    idealFor: ["Couples", "Solo Travellers", "Pilgrims"],
    amenities: ["King Size Bed", "Smart LED TV", "Wi-Fi", "Air Conditioning"],
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "premium-deluxe",
    name: "Premium Deluxe Room",
    description:
      "Enhanced comfort with spacious interiors, elegant décor, and premium amenities for a relaxing Himalayan stay.",
    pricePerNight: 7000,
    idealFor: ["Couples", "Small Families", "Long Stay Guests"],
    amenities: ["King Size Bed", "Premium Linen", "Seating Area", "Tea/Coffee Maker"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "executive-mountain-view",
    name: "Executive Mountain View Room",
    description:
      "Wake up to breathtaking Himalayan mountain views while enjoying the finest comforts of a premium boutique stay.",
    pricePerNight: 8500,
    idealFor: ["Nature Lovers", "Honeymoon Couples", "Premium Travellers"],
    amenities: ["Mountain View", "King Size Bed", "Premium Bath", "Writing Desk"],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "family",
    name: "Family Room",
    description:
      "Spacious room with a King Size Bed and a Large Upper King Size Bunk Bed (selected rooms) — ideal for families with children and small groups.",
    pricePerNight: 10000,
    idealFor: ["Families", "Pilgrimage Groups", "Friends Travelling Together"],
    amenities: ["King Bed + Bunk", "Family Seating", "Extra Bed on Request", "Kids Friendly"],
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=80",
  },
];

export const roomAmenities = [
  "King Size Bed",
  "Premium Mattress & Luxury Linen",
  "Smart LED Television",
  "Complimentary High-Speed Wi-Fi",
  "Air Conditioning",
  "Hair Dryer",
  "Tea & Coffee Maker",
  "Complimentary Bottled Water",
  "Premium Bathroom",
  "Premium Toiletries",
  "Spacious Wardrobe",
  "Writing Desk",
  "Comfortable Seating Area",
  "Daily Housekeeping",
  "24×7 Hot & Cold Water",
  "Mountain View (Selected Rooms)",
];

export const hotelFacilities = [
  "Pure Vegetarian Restaurant",
  "Rooftop Café with Himalayan Views",
  "Meditation Room",
  "Spiritual Book Library",
  "Yoga Hall",
  "Conference Hall",
  "Kids Play Area",
  "Elevator (Lift)",
  "In-House Parking",
  "Driver Dormitory",
  "24-Hour Front Desk",
  "CCTV Security",
  "Travel Assistance",
  "Power Backup",
  "Welcome Drink on Arrival",
  "Digital Payments (UPI, GPay, PhonePe)",
];

export const guestServices = [
  "Laundry Service (On Request)",
  "Iron & Ironing Board",
  "Taxi Service (On Call)",
  "Doctor on Call",
  "Emergency Medical Assistance",
  "Wake-up Call Service",
  "Luggage Assistance",
  "Airport / Railway Transfer",
  "Local Sightseeing Assistance",
  "Temple Visit Assistance",
  "Early Breakfast (On Request)",
  "Room Service",
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
    section: "North Indian",
    items: [
      { name: "Paneer Butter Masala", description: "Cottage cheese in rich tomato-cashew gravy" },
      { name: "Dal Makhani", description: "Slow-cooked black lentils with cream and butter" },
      { name: "Kumaoni Thali", description: "Regional flavours — bhatt, kafuli, madua roti" },
    ],
  },
  {
    section: "South Indian",
    items: [
      { name: "Masala Dosa", description: "Crisp rice crepe with spiced potato filling" },
      { name: "Idli Sambhar", description: "Steamed rice cakes, lentil broth, chutneys" },
      { name: "Filter Coffee", description: "Traditional South Indian brew" },
    ],
  },
  {
    section: "Chinese",
    items: [
      { name: "Veg Hakka Noodles", description: "Wok-tossed noodles with garden vegetables" },
      { name: "Manchurian", description: "Crispy veg dumplings in tangy Indo-Chinese sauce" },
      { name: "Hot & Sour Soup", description: "Warming broth with fresh vegetables" },
    ],
  },
  {
    section: "Tandoor",
    items: [
      { name: "Paneer Tikka", description: "Char-grilled cottage cheese, mint chutney" },
      { name: "Tandoori Aloo", description: "Stuffed potatoes from the clay oven" },
      { name: "Assorted Breads", description: "Naan, kulcha, laccha paratha" },
    ],
  },
  {
    section: "Beverages",
    items: [
      { name: "Masala Chai", description: "Himalayan blend with fresh spices" },
      { name: "Fresh Juices & Mocktails", description: "Seasonal fruit, house recipes" },
      { name: "Buransh Iced Tea", description: "Rhododendron blossom, lime" },
    ],
  },
  {
    section: "Desserts",
    items: [
      { name: "Gulab Jamun", description: "Warm, saffron-scented syrup" },
      { name: "Rasmalai", description: "Soft cheese dumplings in cardamom milk" },
      { name: "Kids' Favourites", description: "Ice cream, brownies and more" },
    ],
  },
];

export const diningTimings = [
  { meal: "Breakfast", time: "7:30 AM – 10:30 AM" },
  { meal: "Lunch", time: "12:00 PM – 3:30 PM" },
  { meal: "Evening Snacks", time: "4:00 PM – 7:00 PM" },
  { meal: "Dinner", time: "7:00 PM – 10:30 PM" },
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
