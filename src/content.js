/* ============================================================
   TEN80TEN STUDIOS — creative studio content deck
   Structure mirrors the Vertora template (vertora.webflow.io);
   all copy is original, written for Ten80Ten Studios.
   ============================================================ */

/** Resolve a public asset against the deploy base (works at site root or a
 *  GitHub Pages project subpath). Pass a root-absolute path like '/img/x.png'. */
const BASE = import.meta.env.BASE_URL || '/'
export const asset = (p) => BASE + String(p).replace(/^\//, '')

const T = asset('/img/tpl/')
const P = asset('/img/projects/')
/** Original per-project poster art (authored SVG). */
export const poster = (slug, kind = 'cover') => `${P}${slug}-${kind}.svg`
export const img = {
  portrait1: T + '692c3bff5be0d358ad358061_90cba0ab451b72850856757a8a17ed62_Rainbow-Portrait-1.webp',
  portrait2: T + '692c3bfd0202b2d312e2c739_Ethereal-Light-Portrait-1.webp',
  portrait3: T + '692c3bfe0ae08d76762a0669_62bd3b549c5422371e0a693c6a28dd66_Dynamic-Fashion-Portrait-1.webp',
  aboutSection: T + '6927fa39f319ce7615bbb20b_vertora-about-section-image.webp',
  aboutHero: T + '692fc5ffe1bf070503a96619_vertora-about-hero-image-four.webp',
  aboutOne: T + '693151d5e5c13379bb002b30_vertora-about-image-one.webp',
  mainOne: T + '69390f3a3f44b26c414837cd_vertora-main-image-one.webp',
  homeService: T + '692b49828185d7a67e344206_vertora-home-service-image.webp',
  reviewBox: T + '6927ea6724c0bc7c7eb03127_vertora-home-review-box-image.webp',
  card: T + '692d7c3efdb00fc561e8862d_vertora-card-image.webp',
  reviewer: T + '6927e8835dbfa2b10c30e62b_vertora-reviewer-image.webp',
  profile1: T + '694a85a044921d0168148f1e_vertora-profile-image-one.webp',
  profile2: T + '694a85a0cc2c8a513fd02695_vertora-profile-image-two.webp',
  profile3: T + '694a85a02d14038185b0711b_vertora-profile-image-three.webp',
  // portrait project images
  proj1: T + '693a8f9ec144c3445fbf9d4a_vertora-portfolio-potrait-image-one.webp',
  proj2: T + '693a8ffd1c34776fe58fe717_vertora-portfolio-potrait-image-two.webp',
  proj3: T + '693a9084c54c759302a46c3d_vertora-portfolio-potrait-image-three.webp',
  proj4: T + '693a90b74776d0df57d7bde1_vertora-portfolio-potrait-image-four.webp',
  // landscape service / case images
  svc1: T + '69281ffcd7ff26646763e90a_rt-service-image-one.webp',
  svc2: T + '692821aec9bc071b59282a5d_vertora-service-image-two.webp',
  svc3: T + '692821aeb092a2a58af3add4_vertora-service-image-three.webp',
  svc4: T + '692821aeb0d35c31f1226616_vertora-service-image-four.webp',
  svc5: T + '692821ae02df9e7f4a7918f1_vertora-service-image-five.webp',
  thumbAdroven: T + '6a548e52ee7ff76236114b10_Adroven-main-thumbnail.webp',
  thumbBloomava: T + '6a548eb2668155680e1fc18c_Bloomava-main-thumbnail.webp',
  thumbCrearist: T + '6a548ed3fe09ac6b2927ae83_Crearist-main-thumbnail.webp',
  thumbCreto: T + '6a548ef6b5f61e6c9fc23aaf_Creto-main-thumbnail.avif',
  social: [
    T + '693f99f648d11b64d345ef54_vertora-social-link-one.svg',
    T + '693f99f62b79ce794e33e0ad_vertora-social-link-two.svg',
    T + '693f99f64727d093a17a4908_vertora-social-link-three.svg',
    T + '693f99f679f56fb638cfd9a7_vertora-social-link-four.svg',
  ],
}

export const brand = {
  name: 'Ten80Ten Studios',
  short: 'Ten80Ten',
  tagline: 'Creative, by design.',
  positioning: 'Creative Studio',
  oneLiner:
    'A creative studio blending brand strategy, design and motion into digital experiences that move people.',
  email: 'hello@ten80ten.studio',
  phone: '(888) 456 7890',
  location: '410 Sandtown, California 94001, USA',
  cta: { label: "Let's talk", href: '/contact' },
}

export const hero = {
  eyebrow: 'Ten80Ten Studios — Creative',
  titleTop: 'Creative',
  titleBottom: 'Studio',
  lead: 'We shape brands worth remembering — pairing sharp strategy with design and motion that turns bold ideas into digital experiences people feel.',
  primary: { label: "Let's talk", href: '/contact' },
  services: [
    ['Brand identity', '/service'],
    ['Web design', '/service'],
    ['Motion graphics', '/service'],
  ],
  location: 'Los Angeles · Working worldwide',
}

const TOOL = asset('/img/tool-logos/')
export const partners = {
  eyebrow: 'Our toolkit',
  headline: 'Using professional creative software, we bring ideas to life through exceptional design, motion, and visual storytelling.',
  // Scrolling marquee of tool cards that flip to black on hover.
  items: [
    { name: 'Adobe Express', logo: TOOL + 'Adobe-Express.png' },
    { name: 'Canva', logo: TOOL + 'Canva.png' },
    { name: 'Notion', logo: TOOL + 'Notion.png' },
    { name: 'Dropbox', logo: TOOL + 'Dropbox.png' },
    { name: 'Google Drive', logo: TOOL + 'Gdrive.png' },
    { name: 'WordPress', logo: TOOL + 'Wordpress.png' },
    { name: 'Wix', logo: TOOL + 'Wix.png' },
    { name: 'Squarespace', logo: TOOL + 'Squarespacee.png' },
    { name: 'Shopify', logo: TOOL + 'Shopify.png' },
    { name: 'Slack', logo: TOOL + 'Slack.png' },
    { name: 'Trello', logo: TOOL + 'Trello.png' },
    { name: 'Asana', logo: TOOL + 'Asana.png' },
    { name: 'Later', logo: TOOL + 'Later.png' },
    { name: 'Buffer', logo: TOOL + 'Buffer.png' },
  ],
}

export const about = {
  eyebrow: 'About us',
  quote:
    'Working with Ten80Ten Studios completely transformed our brand. Their creativity, strategy and execution exceeded expectations at every step.',
  stat: { value: 18, suffix: '', label: 'Years of creative experience' },
  body:
    'Ten80Ten Studios is a small, senior team of designers, developers and directors. No account layers, no hand-offs — you work directly with the people making the work, from first sketch to final launch.',
}

// Sticky-stacking numbered service cards (01–04)
export const services = {
  eyebrow: 'What we do',
  headline: 'Innovative ideas and bold execution that drive measurable growth',
  // sits inside the centre dashed circle
  statement: 'We turn your creative vision into powerful digital brand experiences',
  cards: [
    {
      num: '01',
      title: 'Brand identity & strategy',
      desc: 'We build strong brand foundations through research, positioning and a clear visual direction the whole team can rally behind.',
      img: img.proj1,
    },
    {
      num: '02',
      title: 'Website design & development',
      desc: 'We design and build responsive websites with striking visuals and smooth, fast performance on every device.',
      img: img.proj2,
    },
    {
      num: '03',
      title: 'Visual branding & communication',
      desc: 'We craft cohesive visual systems — type, colour, layout and art direction — that stay consistent and communicate clearly.',
      img: img.proj3,
    },
    {
      num: '04',
      title: 'Motion graphics & animation',
      desc: 'We design engaging motion that enhances storytelling, guides attention and gives your brand a sense of life.',
      img: img.proj4,
    },
  ],
}

export const feature = {
  eyebrow: 'Our promise',
  rotate: [
    'We turn your creative vision into powerful digital brand experiences',
    'We craft ideas into impactful digital moments that define your brand',
    'We elevate your vision into engaging digital experiences that last',
  ],
}

// Featured work / case studies list (name + year, like template)
export const work = {
  eyebrow: 'Featured work',
  headline:
    'We blend creativity with technical craft to build experiences that captivate audiences and carry your brand message',
  projects: [
    { name: 'Aurelia', year: '2025', tag: 'Brand identity · Packaging', img: poster('aurelia'), slug: 'aurelia' },
    { name: 'Kestrel', year: '2024', tag: 'Web design & development', img: poster('kestrel'), slug: 'kestrel' },
    { name: 'Superbloom', year: '2024', tag: 'Motion & photography', img: poster('superbloom'), slug: 'superbloom' },
    { name: 'Meridian', year: '2023', tag: 'Brand & product', img: poster('meridian'), slug: 'meridian' },
  ],
}

// Numbered services list + marquee (services-v2)
export const capabilities = {
  eyebrow: 'Full-service creative',
  headline: 'Innovative ideas and bold execution that drive measurable growth',
  list: [
    'Interactive design experiences',
    'Motion graphics production',
    'Website design & development',
    'Digital marketing solutions',
    'Packaging design innovation',
  ],
  marquee: [
    'High-quality graphic solutions', 'Motion graphics & animation', 'Full-service creative',
    'High-impact visual campaigns', 'Premium creative consulting', 'Studio video editing',
  ],
}

export const stats = {
  eyebrow: 'Measurable outcomes',
  headline: 'Driving growth with strategies tailored for success',
  items: [
    { value: 120, suffix: '+', label: 'Brands shaped across four continents' },
    { value: 4, suffix: '.9', label: 'Average client rating' },
    { value: 98, suffix: '%', label: 'On-time project delivery' },
  ],
  testimonials: [
    { quote: 'The team delivered our website ahead of schedule with clear communication and great attention to detail.', role: 'Flossie Gruz', tag: 'Product Manager' },
    { quote: 'They quickly understood our vision and turned it into a strong, distinctive digital experience.', role: 'Aggy Galkin', tag: 'Marketing Lead' },
    { quote: 'A seamless process with a polished, fast and easy-to-manage result. Exactly what we hoped for.', role: 'Davis Bergson', tag: 'Creative Director' },
  ],
  big: { value: 96, suffix: '%', label: 'Client satisfaction rate' },
}

export const pricing = {
  eyebrow: 'Pricing',
  headline: 'Customized packages perfectly suited to your project’s requirements',
  note: 'Every engagement starts with a free creative consultation.',
  tiers: [
    {
      name: 'Essentials',
      priceMonthly: '$2,400',
      priceYearly: '$2,040',
      blurb: 'A focused monthly engagement for founders who need brand and web momentum without a full in-house team.',
      features: ['One active project at a time', 'Brand or website design', 'Source files & brand guidelines', '2 revision rounds per deliverable', 'Email support'],
      featured: false,
    },
    {
      name: 'Studio',
      priceMonthly: '$4,800',
      priceYearly: '$4,080',
      blurb: 'Our most popular partnership — design, web and motion running in parallel with a dedicated creative lead.',
      features: ['Two active projects at a time', 'Brand, web & motion design', 'Dedicated creative lead', 'Unlimited revision rounds', 'Priority Slack support'],
      featured: true,
    },
    {
      name: 'Partner',
      priceMonthly: '$9,500',
      priceYearly: '$8,075',
      blurb: 'A full creative department on demand for scaling brands with always-on design needs.',
      features: ['Unlimited project queue', 'Full brand, web, motion & product', 'Embedded senior team', 'Strategy & art direction', 'Same-day Slack support'],
      featured: false,
    },
  ],
}

export const faq = {
  eyebrow: 'FAQ',
  headline: 'Frequently asked questions',
  sub: 'Find clear answers about our process, services and how we work with clients.',
  items: [
    { q: 'Do you provide revisions and updates?', a: 'Yes. We build clear revision rounds into every project so the work meets your expectations, and we handle updates smoothly to keep quality and consistency high.' },
    { q: 'Is my project information confidential?', a: 'Always. Your data, ideas and materials are handled with strict confidentiality and stay secure throughout the entire collaboration.' },
    { q: 'Do you handle full brand identity projects?', a: 'Yes. We manage complete brand identity work — strategy, visual design and guidelines — to give you a consistent, unified brand presence.' },
    { q: 'How do I get started with your team?', a: 'Reach out to tell us about your goals. We’ll walk you through our process and outline clear next steps in a short discovery call.' },
    { q: 'What services do you offer clients?', a: 'A full range of design, development, branding and motion — tailored to your business goals and the outcome you want to reach.' },
  ],
}

export const cta = {
  eyebrow: 'Ready to start?',
  headline: 'Let’s build something worth remembering',
  button: { label: 'Get a quote', href: '/contact' },
}

export const footer = {
  wordmark: 'Ten80Ten',
  blurb: 'A creative studio shaping brands, websites and motion for people with something to say.',
  columns: [
    { title: 'Pages', links: [['Home', '/'], ['About', '/about'], ['Service', '/service'], ['Portfolio', '/portfolio']] },
    { title: 'Company', links: [['Blog', '/blog'], ['Contact', '/contact'], ['Pricing', '/service'], ['Careers', '/contact']] },
    { title: 'Socials', links: [['Instagram', '#'], ['LinkedIn', '#'], ['Behance', '#'], ['Dribbble', '#']] },
  ],
  legal: '© 2026 Ten80Ten Studios. All rights reserved.',
}

export const nav = {
  links: [
    ['Home', '/'],
    ['About', '/about'],
    ['Service', '/service'],
    ['Portfolio', '/portfolio'],
    ['Blog', '/blog'],
    ['Contact', '/contact'],
  ],
  cta: { label: "Let's talk", href: '/contact' },
}

/* ============================================================
   PER-PAGE CONTENT
   ============================================================ */

export const aboutPage = {
  hero: {
    title: 'About',
    titleAccent: 'Ten80Ten',
    since: 'Since 2016',
    place: 'Los Angeles',
    intro:
      'Transforming ideas into captivating design, we blend creativity, innovation and precision to build portfolio-worthy brand experiences that communicate clearly and resonate deeply with your audience.',
  },
  stats: [
    { value: 85, suffix: '+', label: 'Successful creative projects delivered with precision, innovation and a focus on impactful brand storytelling.' },
    { value: 100, suffix: '%', label: 'Client satisfaction, earned by consistently delivering high-quality work that aligns with brand goals.' },
    { value: 25, suffix: 'k', label: 'Hours invested crafting meaningful visuals, strategic concepts and inspiring digital experiences.' },
  ],
  statement:
    'We shape bold creative solutions that highlight your unique strengths, elevate your presence and connect your brand with the right audience.',
  capabilities: [
    'Branding identity', 'UI/UX design', 'Web development', 'Visual design', 'Photography',
    'Product design', '3D visualisation', 'Art direction', 'Motion design',
  ],
  awardsTitle: 'Award-winning ideas driving impact and innovation',
  awards: [
    { year: '2019', name: 'The Webby Awards', note: 'Honoree' },
    { year: '2019', name: 'FWA', note: 'Site of the Day' },
    { year: '2017', name: 'Awwwards', note: 'Nominee' },
    { year: '2022', name: 'Red Dot Awards', note: 'Site of the Month' },
    { year: '2020', name: 'CSS Design Awards', note: 'Best Innovation' },
    { year: '2021', name: 'Awwwards', note: 'Developer Award' },
  ],
  team: [
    { name: 'Ava Reyes', role: 'Creative Director', img: img.profile1, skills: ['Art direction', 'Brand', 'Strategy'] },
    { name: 'Marcus Lang', role: 'Design Lead', img: img.profile2, skills: ['UI/UX', 'Systems', 'Type'] },
    { name: 'Noa Feldman', role: 'Motion Director', img: img.profile3, skills: ['Motion', '3D', 'Film'] },
  ],
}

export const servicePage = {
  hero: {
    title: 'Service',
    intro:
      'We provide digital solutions that grow your brand’s presence — from web design to branding and content — all tailored to your business needs.',
  },
  headline: 'Crafting unique strategies that turn visions into powerful results',
  pillars: [
    { title: 'Award-winning agency', desc: 'Our recognition is proof of the trust our clients place in us and the results we achieve together.' },
    { title: 'Vision realized', desc: 'From strategy to execution, we make sure every detail reflects your brand’s purpose and ambition.' },
    { title: 'Impactful design', desc: 'We craft designs that capture attention, inspire action and leave a lasting impression.' },
  ],
  trust: 'Join the 850+ companies trusting Ten80Ten Studios with their creative work',
  list: [
    { num: '01', title: 'Web development', img: img.svc2, desc: 'Creative direction and technical precision unite to shape digital experiences that are engaging, efficient and platform-ready.' },
    { num: '02', title: '3D design', img: img.svc3, desc: 'Clear strategy and thoughtful execution create digital experiences that feel intuitive, engaging and built to scale.' },
    { num: '03', title: '3D visualisation', img: img.svc4, desc: 'Strategic thinking paired with creative craftsmanship results in solutions that are impactful and adaptable to evolving needs.' },
    { num: '04', title: 'UI/UX design', img: img.svc5, desc: 'Strong concepts and careful execution form digital experiences that feel natural, polished and scalable.' },
  ],
}

export const portfolioPage = {
  hero: { title: 'Portfolio', ticker: 'Portfolio 2025' },
  projects: [
    {
      name: 'Aurelia', year: '2025', tag: 'Brand identity · Packaging', slug: 'aurelia', img: poster('aurelia'),
      desc: 'A warm, minimal identity and packaging system for a modern beauty label — built to feel considered on every shelf and screen.',
      client: 'Aurelia Skin', discipline: 'Brand identity', location: 'New York, US',
      services: ['Brand strategy', 'Identity design', 'Packaging', 'Art direction'],
      overview: 'Aurelia came to us with a strong product and a flat, forgettable look. We rebuilt the brand from the positioning up — a warm, minimal identity and a packaging system designed to feel considered in the hand and unmistakable on the shelf.',
      challenge: 'The category is loud and sea-of-sameness. Aurelia needed to look premium without shouting, and to hold together across bottles, boxes, web and social.',
      approach: 'We set a quiet, confident direction — a refined wordmark, a warm neutral palette, and a flexible grid that lets the product breathe. Every touchpoint was drawn from the same small, disciplined kit of parts.',
      gallery: [poster('aurelia', 'wide'), poster('aurelia', 'a'), poster('aurelia', 'b')],
      results: [
        { value: 3, suffix: '×', label: 'Lift in direct-to-consumer conversion' },
        { value: 40, suffix: '%', label: 'Faster shelf recognition in testing' },
      ],
      quote: { text: 'They gave us a brand that finally looks the way the product feels. Considered, calm and completely ours.', who: 'Founder, Aurelia Skin' },
    },
    {
      name: 'Kestrel', year: '2024', tag: 'Web design & development', slug: 'kestrel', img: poster('kestrel'),
      desc: 'A fast, confident website for a fintech challenger, pairing sharp product storytelling with smooth, responsive performance.',
      client: 'Kestrel Finance', discipline: 'Web design & development', location: 'London, UK',
      services: ['UX strategy', 'Web design', 'Front-end build', 'Motion'],
      overview: 'Kestrel is a fintech challenger with a genuinely simple product buried under a complicated site. We designed and built a fast, confident website that makes the value obvious in seconds.',
      challenge: 'Financial products are hard to explain and easy to distrust. The site had to feel credible and effortless, and load fast on every device.',
      approach: 'We led with product storytelling — clear sections, tight copy, and restrained motion that guides rather than distracts. The build is lightweight and responsive, with performance treated as a design feature.',
      gallery: [poster('kestrel', 'wide'), poster('kestrel', 'a'), poster('kestrel', 'b')],
      results: [
        { value: 62, suffix: '%', label: 'Increase in demo sign-ups' },
        { value: 98, suffix: '', label: 'Lighthouse performance score' },
      ],
      quote: { text: 'From strategy to launch everything felt seamless. The design, the speed, the experience — all exceeded our goals.', who: 'Head of Growth, Kestrel Finance' },
    },
    {
      name: 'Superbloom', year: '2024', tag: 'Motion & photography', slug: 'superbloom', img: poster('superbloom'),
      desc: 'A motion and photography language for a lifestyle brand — visual storytelling that connects deeply and moves with energy.',
      client: 'Superbloom', discipline: 'Motion & photography', location: 'Los Angeles, US',
      services: ['Art direction', 'Photography', 'Motion graphics', 'Content system'],
      overview: 'Superbloom needed a visual language that could live and move. We built a motion and photography system that turns a lifestyle brand into a feed people actually stop for.',
      challenge: 'Social moves fast and forgives nothing. Superbloom needed a look distinctive enough to own a scroll, and a system loose enough to keep producing.',
      approach: 'We defined an art-direction kit — light, framing, colour and pace — then designed motion templates the in-house team can run with. Distinctive, repeatable, and full of energy.',
      gallery: [poster('superbloom', 'wide'), poster('superbloom', 'a'), poster('superbloom', 'b')],
      results: [
        { value: 210, suffix: '%', label: 'Growth in social engagement' },
        { value: 5, suffix: '×', label: 'More content shipped per month' },
      ],
      quote: { text: 'They quickly understood our vision and turned it into a strong, distinctive visual world we could keep building on.', who: 'Marketing Lead, Superbloom' },
    },
    {
      name: 'Meridian', year: '2023', tag: 'Brand & product', slug: 'meridian', img: poster('meridian'),
      desc: 'End-to-end brand and product design for a travel startup, bringing bold ideas and crafted execution into one clear story.',
      client: 'Meridian Travel', discipline: 'Brand & product', location: 'Lisbon, PT',
      services: ['Brand identity', 'Product design', 'Design system', 'Web'],
      overview: 'Meridian is a travel startup that wanted one clear story across brand and product. We designed both together, so the identity and the app speak the same language.',
      challenge: 'Brand and product were drifting apart — one aspirational, one purely functional. We needed to bring bold ideas and crafted execution into a single system.',
      approach: 'A shared design language: one type system, one palette, one set of components spanning marketing and product. Bold where it counts, invisible where it should be.',
      gallery: [poster('meridian', 'wide'), poster('meridian', 'a'), poster('meridian', 'b')],
      results: [
        { value: 4, suffix: '.8', label: 'App store rating at launch' },
        { value: 35, suffix: '%', label: 'Drop in support tickets' },
      ],
      quote: { text: 'Brand and product finally feel like one thing. Bold, clear and genuinely easy to use.', who: 'CEO, Meridian Travel' },
    },
    {
      name: 'Halcyon', year: '2025', tag: 'Visual branding', slug: 'halcyon', img: poster('halcyon'),
      desc: 'A cohesive visual system for a hospitality group — type, colour and art direction tuned to feel calm, premium and consistent.',
      client: 'Halcyon Group', discipline: 'Visual branding', location: 'Copenhagen, DK',
      services: ['Visual identity', 'Art direction', 'Guidelines', 'Signage'],
      overview: 'Halcyon runs a growing group of hospitality spaces that all looked different. We built one cohesive visual system — calm, premium, and consistent from signage to Instagram.',
      challenge: 'Every venue had drifted into its own style. The group needed a single, flexible identity that felt high-end without feeling corporate.',
      approach: 'We tuned type, colour and art direction into a quiet, premium system, then wrote guidelines the venues can actually follow — consistent, but never rigid.',
      gallery: [poster('halcyon', 'wide'), poster('halcyon', 'a'), poster('halcyon', 'b')],
      results: [
        { value: 6, suffix: '', label: 'Venues unified under one identity' },
        { value: 100, suffix: '%', label: 'Brand-consistent across touchpoints' },
      ],
      quote: { text: 'A seamless process with a calm, premium result that finally makes every space feel like one group.', who: 'Creative Director, Halcyon Group' },
    },
  ],
}

export function getProject(slug) {
  return portfolioPage.projects.find((p) => p.slug === slug) || null
}

export const blogPage = {
  hero: { title: 'Articles' },
  posts: [
    { date: '09 Dec 2025', title: '5 brand storytelling secrets only top studios use', author: 'Zaire Aminoff', img: poster('aurelia', 'a') },
    { date: '09 Dec 2025', title: 'Design that converts: balancing art and strategy', author: 'Dean Johnson', img: poster('kestrel', 'b') },
    { date: '09 Dec 2025', title: 'How studios can elevate your brand presence', author: 'Casey Gibson', img: poster('superbloom', 'a') },
    { date: '09 Dec 2025', title: 'How great branding builds lasting businesses', author: 'Alisha C. Lee', img: poster('meridian', 'b') },
    { date: '09 Dec 2025', title: 'How creative strategy wins over algorithms and humans', author: 'Jack Beckman', img: poster('halcyon', 'a') },
    { date: '09 Dec 2025', title: 'How client reviews enhance your portfolio', author: 'William Bisbee', img: poster('kestrel', 'a') },
    { date: '07 Dec 2025', title: 'The secret sauce to high-impact visual storytelling', author: 'Sarah E. Keyes', img: poster('superbloom', 'b') },
    { date: '04 Dec 2025', title: 'Building fast, flexible sites without the bloat', author: 'Terry Stewart', img: poster('aurelia', 'b') },
    { date: '03 Dec 2025', title: 'The role of testimonials in a strong portfolio', author: 'Zaire Aminoff', img: poster('meridian', 'a') },
  ],
}

export const contactPage = {
  hero: { title: 'Contact', sub: 'Let’s connect — reach out anytime.' },
  info: [
    { label: 'Email', value: 'hello@ten80ten.studio', href: 'mailto:hello@ten80ten.studio' },
    { label: 'Phone', value: '(888) 456 7890', href: 'tel:8884567890' },
    { label: 'Location', value: '410 Sandtown, California 94001, USA', href: null },
  ],
  socials: ['Facebook', 'LinkedIn', 'Instagram'],
  budgets: ['$500 – $1,500', '$1,500 – $3,000', '$3,000 – $7,500', '$7,500 – $15,000', '$15,000+'],
}
