export const TIS_INFO = {
  name: "Tula's International School",
  shortName: "TIS Dehradun",
  tagline: "Empowering Young Minds through the Modern Gurukul Approach",
  affiliation: "CBSE Affiliated Co-Ed Boarding School",
  established: 2012,
  trust: "Rishabh Educational Trust",
  campusSize: "22+ Acres",
  grades: "Classes IV to XII",
  helpline: "+91-9837983791",
  landline: "0135-2699444",
  email: "info@tis.edu.in",
  address: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun - 248011, Uttarakhand, India",
  applyUrl: "https://admission.tis.edu.in",
  mapUrl: "https://maps.app.goo.gl/maBF8syXueQkw31E6",
};

export const NAV_LINKS = [
  { name: "About TIS", href: "#about" },
  { name: "Why TIS", href: "#why-tis" },
  { name: "Academics", href: "#academics" },
  { name: "Facilities", href: "#facilities" },
  { name: "Sports & Life", href: "#student-life" },
  { name: "Admissions", href: "#admissions" },
  { name: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { label: "Sprawling Campus", value: "22+", suffix: " Acres" },
  { label: "Sports Disciplines", value: "16+", suffix: " Sports" },
  { label: "Curriculum", value: "CBSE", suffix: " Co-Ed" },
  { label: "Learning Approach", value: "Modern", suffix: " Gurukul" },
];

export const TRUST_METRICS = [
  {
    title: "Modern Gurukul System",
    description: "Harmonizing traditional Indian values and residential discipline with international pedagogy.",
    icon: "BookOpen",
  },
  {
    title: "16+ Sports Disciplines",
    description: "Olympic-standard sports complex including archery, swimming pool, shooting, tennis & squash.",
    icon: "Trophy",
  },
  {
    title: "24/7 Safe Residential Campus",
    description: "Fully air-conditioned dormitories with round-the-clock security, CCTV, & resident wardens.",
    icon: "ShieldCheck",
  },
  {
    title: "Organic Vegetarian Dining",
    description: "Nutritious multi-cuisine vegetarian food prepared under strict hygienic supervision.",
    icon: "Utensils",
  },
];

export const WHY_TIS_PILLARS = [
  {
    id: "gurukul",
    title: "Modern Gurukul Philosophy",
    subtitle: "Mind, Body, and Soul Integration",
    description: "TIS revives the ancient Indian ethos of close teacher-disciple mentorship (Guru-Shishya Parampara) combined with state-of-the-art digital infrastructure.",
    icon: "Sparkles",
    badge: "Ethos & Values",
    stats: "1:8 Teacher-Student Ratio",
  },
  {
    id: "sports",
    title: "16+ Olympic Sports Disciplines",
    subtitle: "Physical Mastery & Team Spirit",
    description: "Sports at TIS are not just extracurriculars—they form the core foundation of character. Features professionally trained national-level coaches.",
    icon: "Activity",
    badge: "Athletic Excellence",
    stats: "16+ Professional Sports",
  },
  {
    id: "academics",
    title: "Holistic Academic Rigor",
    subtitle: "CBSE Curriculum with Global Exposure",
    description: "Equipping students from Class IV to XII with analytical reasoning, STEM labs, creative writing, and competitive exam guidance.",
    icon: "Award",
    badge: "100% Board Success",
    stats: "Class 4 to 12 CBSE",
  },
  {
    id: "boarding",
    title: "World-Class Boarding Life",
    subtitle: "A Second Home Nestled in Nature",
    description: "Air-conditioned residential houses, individual study desks, indoor recreation lounges, and warm housemasters ensure total well-being.",
    icon: "Home",
    badge: "Residential Care",
    stats: "Separate Boys & Girls Dorms",
  },
];

export const ACADEMIC_PROGRAMS = [
  {
    id: "primary",
    grade: "Classes IV - V",
    title: "Primary Foundation Years",
    tagline: "Igniting Curiosity & Creative Discovery",
    description: "Focusing on inquiry-based learning, language development, foundational mathematics, and interactive storytelling.",
    highlights: [
      "Inquiry & Activity-Based Curriculum",
      "Language & Communication Skill Workshops",
      "Introductory Computer & Science Labs",
      "Arts, Music & Physical Fitness Rotation",
    ],
    image: "/images/science-lab.jpg",
  },
  {
    id: "middle",
    grade: "Classes VI - VIII",
    title: "Middle School Explorations",
    tagline: "Fostering Analytical & Experiential Skillsets",
    description: "Transitioning to formal disciplines while encouraging scientific experiments, public speaking, and collaborative projects.",
    highlights: [
      "Integrated STEM & Robotics Labs",
      "Language Options (English, Hindi, Sanskrit, French)",
      "Environmental Science & Community Projects",
      "Specialized Sports Training",
    ],
    image: "/images/science-lab.jpg",
  },
  {
    id: "high",
    grade: "Classes IX - X",
    title: "High School Rigor",
    tagline: "CBSE Board Readiness & Core Competency",
    description: "Structured academic preparation for CBSE secondary examinations with emphasis on conceptual mastery and problem solving.",
    highlights: [
      "Rigorous Science & Mathematics Practice",
      "CBSE Board Exam Orientation & Test Series",
      "Career Counseling & Aptitude Diagnostics",
      "Leadership Roles in School Houses",
    ],
    image: "/images/science-lab.jpg",
  },
  {
    id: "senior",
    grade: "Classes XI - XII",
    title: "Senior Secondary Streams",
    tagline: "Pre-University Specialization & Competitive Prep",
    description: "Offering specialized streams with target mentorship for JEE, NEET, CUET, SAT, and Premier University Admissions.",
    streams: [
      {
        name: "Science Stream",
        subjects: "Physics, Chemistry, Mathematics / Biology, Computer Science / Physical Education",
      },
      {
        name: "Commerce Stream",
        subjects: "Accountancy, Business Studies, Economics, Applied Math / Entrepreneurship",
      },
      {
        name: "Humanities Stream",
        subjects: "Political Science, History, Psychology, Economics, Fine Arts / English Literature",
      },
    ],
    highlights: [
      "In-House Competitive Exam Coaching (JEE/NEET/CUET)",
      "University Guidance & International Placement Cell",
      "Research Projects & Advanced Lab Practicals",
    ],
    image: "/images/science-lab.jpg",
  },
];

export const CAMPUS_FACILITIES = [
  {
    id: 1,
    title: "Smart Digital Classrooms",
    category: "Academic",
    description: "Interactive smartboards, ergonomic seating, and audio-visual setups for immersive learning.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 2,
    title: "16+ Sports Arena",
    category: "Sports",
    description: "Synthetic tennis courts, shooting range, archery field, football ground & Olympic pool.",
    image: "/images/sports-complex.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Air-Conditioned Hostels",
    category: "Residential",
    description: "Comfortable, climate-controlled rooms with personal study stations & 24/7 security.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Advanced Science Labs",
    category: "Innovation",
    description: "Fully equipped Physics, Chemistry, Biology, and Robotics workstations.",
    image: "/images/science-lab.jpg",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 5,
    title: "Hygienic Organic Dining",
    category: "Nutrition",
    description: "Nutritious four-meal vegetarian menu curated by experienced dietitians.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    title: "24/7 Medical Infirmary",
    category: "Healthcare",
    description: "On-campus resident doctor, qualified nurses, and emergency ambulance access.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-1",
  },
];

export const SPORTS_AND_CLUBS = [
  { name: "Archery Range", category: "Sports", icon: "Target" },
  { name: "Swimming Pool", category: "Sports", icon: "Waves" },
  { name: "Equestrian & Polo", category: "Sports", icon: "Compass" },
  { name: "Karate & Taekwondo", category: "Sports", icon: "Shield" },
  { name: "Lawn Tennis Courts", category: "Sports", icon: "CircleDot" },
  { name: "Squash Court", category: "Sports", icon: "Square" },
  { name: "Basketball Arena", category: "Sports", icon: "Dribbble" },
  { name: "Shooting Range", category: "Sports", icon: "Crosshair" },
  { name: "Robotics Club", category: "Co-Curricular", icon: "Cpu" },
  { name: "Pottery & Clay Studio", category: "Co-Curricular", icon: "Feather" },
  { name: "Music & Vocal Ensemble", category: "Co-Curricular", icon: "Music" },
  { name: "Dance & Drama Guild", category: "Co-Curricular", icon: "Film" },
];

export const TESTIMONIALS = [
  {
    quote: "Sending our son to Tula's International School was the best decision. The Modern Gurukul system instills deep cultural values along with top-tier CBSE academic standards.",
    name: "Dr. Rajesh Sharma",
    role: "Parent of Class X Student",
    location: "New Delhi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "At TIS, I found my passion for archery and robotics alongside scoring top marks in my Class 12 CBSE Boards. The teachers are like mentors and housemasters care for us like family.",
    name: "Ananya Agarwal",
    role: "Head Girl / CBSE Batch 2024",
    location: "Dehradun",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "The 22-acre lush green campus, pollution-free atmosphere of Dehradun, and world-class sports infrastructure make TIS stand out among all boarding schools in India.",
    name: "Vikramaditya Verma",
    role: "Parent of Class VIII Student",
    location: "Chandigarh",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

export const ADMISSION_STEPS = [
  { step: "01", title: "Online Registration", desc: "Fill the enquiry form or submit registration online." },
  { step: "02", title: "Campus Interaction", desc: "Visit the campus in Dehradun or schedule a virtual session." },
  { step: "03", title: "Aptitude Diagnostic", desc: "Basic academic assessment appropriate for the grade level." },
  { step: "04", title: "Seat Confirmation", desc: "Document verification and enrollment confirmation." },
];
