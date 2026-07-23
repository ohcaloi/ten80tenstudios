/* ============================================================
   TEN80TEN content deck — source: marketing bible
   (ten80tenmarketingbible.oneapp.dev). All copy original.
   ============================================================ */

export const brand = {
  name: 'Ten80Ten',
  tagline: 'Empower Your Core, Delegate The Chore.',
  positioning: 'Systems + Specialists',
  oneLiner:
    'We install the system that does your repetitive work automatically — and give you a trained specialist to run it.',
  email: 'hello@ten80ten.com',
  cta: { label: 'Book your free audit', href: '#contact' },
}

export const hero = {
  eyebrow: 'Systems + Specialists',
  // two-word stacked display headline (mirrors template "Design / Studio")
  titleTop: 'Delegate',
  titleBottom: 'The Chore',
  lead: 'Ten80Ten installs the automation system and supplies the trained specialist to run it — so you get your time back and your team keeps its focus.',
  primary: { label: "Let's talk", href: '#contact' },
  location: 'Remote-first · Built for founders',
}

export const partners = {
  eyebrow: 'Your stack, run for you',
  headline: 'We plug into the tools your business already runs on',
  // uses tool-logos already in the project
  logos: [
    'ActiveCampaign', 'Airtable', 'Asana', 'Slack', 'HubSpot',
    'Zapier', 'Notion', 'Make', 'Google', 'Monday',
  ],
}

export const about = {
  eyebrow: 'About us',
  quote:
    'We don’t rent you a virtual assistant and wish you luck. We install the system that does the repetitive work — and hand you the specialist trained to run it.',
  stat: { value: 80, suffix: '%', label: 'of daily busywork carried by systems + specialists' },
  body:
    'Ten80Ten is built on one method: the 10/80/10. Map the work, let systems and specialists carry the load, and keep a human on review. Founders stay in their zone of genius; the chore runs itself.',
}

// Sticky-stacking numbered service cards (01–04)
export const services = {
  eyebrow: 'What we install',
  headline: 'Innovative systems and trained specialists that drive measurable growth',
  cards: [
    {
      num: '01',
      title: 'Dedicated virtual assistants',
      desc: 'A trained specialist — part-time or full-time — who runs your inbox, calendar, CRM, listings and follow-up. Not a temp: a driver for your system.',
      img: '/img/tpl/693a8f9ec144c3445fbf9d4a_vertora-portfolio-potrait-image-one.webp',
    },
    {
      num: '02',
      title: 'Automation systems',
      desc: 'Call-center platforms, social posting engines, data portals and reminder flows — custom-built to do the repetitive work automatically, every day.',
      img: '/img/tpl/693a8ffd1c34776fe58fe717_vertora-portfolio-potrait-image-two.webp',
    },
    {
      num: '03',
      title: 'Operations buildout',
      desc: 'We map your repetitive work, document the process, and wire the tools you already use into one system your specialist owns end to end.',
      img: '/img/tpl/693a9084c54c759302a46c3d_vertora-portfolio-potrait-image-three.webp',
    },
    {
      num: '04',
      title: 'The 10/80/10 method',
      desc: '10% to map and build, 80% carried by system + specialist, 10% monthly human review and optimization. The chore runs; you keep judgment.',
      img: '/img/tpl/693a90b74776d0df57d7bde1_vertora-portfolio-potrait-image-four.webp',
    },
  ],
}

export const feature = {
  eyebrow: 'Why founders switch',
  // rotating value statements (template rotates the middle word/line)
  rotate: [
    'We turn your repetitive work into systems that run without you',
    'We hand you a specialist trained to drive the whole engine',
    'We give founders their time back and their focus for good',
  ],
}

// Featured work / case studies list (name + year, like template)
export const work = {
  eyebrow: 'Featured work',
  headline:
    'We pair custom systems with trained specialists to build operations founders can finally step away from',
  projects: [
    { name: 'Real-Estate Data Portal', year: '2025', tag: 'Comp engine · 1-click PDF/Excel', img: '/img/tpl/69281ffcd7ff26646763e90a_rt-service-image-one.webp' },
    { name: 'Healthcare Clinic Automation', year: '2025', tag: '20–40% fewer no-shows', img: '/img/tpl/692821aec9bc071b59282a5d_vertora-service-image-two.webp' },
    { name: 'Call-Center Platform', year: '2024', tag: 'Routing · scripts · reporting', img: '/img/tpl/692821aeb092a2a58af3add4_vertora-service-image-three.webp' },
    { name: 'Social Posting Engine', year: '2024', tag: '~70% of posting automated', img: '/img/tpl/692821aeb0d35c31f1226616_vertora-service-image-four.webp' },
  ],
}

// Numbered services list + marquee (services-v2)
export const capabilities = {
  eyebrow: 'Full-service delegation',
  headline: 'Innovative ideas and bold execution that drive measurable growth',
  list: [
    'Virtual assistant staffing',
    'Custom automation systems',
    'CRM & pipeline operations',
    'Data portals & reporting',
    'Appointment & reminder flows',
  ],
  marquee: [
    'Real estate operations', 'Automation systems', 'Full-service delegation',
    'Trained specialists', 'The 10/80/10 method', 'Time-back audits',
  ],
}

export const stats = {
  eyebrow: 'Measurable outcomes',
  headline: 'Driving growth with systems tailored for how you actually work',
  items: [
    { value: 80, suffix: '%', label: 'Of daily busywork moved off the founder’s plate' },
    { value: 4, suffix: '.9', label: 'Average specialist quality rating' },
    { value: 40, suffix: '%', label: 'Fewer no-shows with automated reminders' },
  ],
  // Honest, role-attributed illustrative statements (NOT fabricated named clients).
  testimonials: [
    { quote: 'The system took the follow-up off my plate entirely — my specialist just runs it now.', role: 'Real estate broker', tag: 'Representative outcome' },
    { quote: 'Onboarding was fast and the process was documented, so nothing lived only in my head anymore.', role: 'Clinic operations lead', tag: 'Representative outcome' },
    { quote: 'One monthly review keeps everything tuned. The 80% in the middle just happens.', role: 'Agency founder', tag: 'Representative outcome' },
  ],
  big: { value: 80, suffix: '%', label: 'of the daily load carried by systems + specialists' },
}

export const pricing = {
  eyebrow: 'Simple, outcome-based pricing',
  headline: 'Packages built around the work you want off your plate',
  note: 'Every engagement starts with a free Time-Back Audit.',
  tiers: [
    {
      name: 'Starter',
      priceMonthly: '$795',
      priceYearly: '$675',
      blurb: 'A part-time trained specialist to run your day-to-day, with a light system to back them up.',
      features: ['Part-time dedicated VA', 'Core inbox & calendar ops', 'Light automation setup', 'Documented workflows', 'Email support'],
      featured: false,
    },
    {
      name: 'Engine',
      priceMonthly: '$1,495',
      priceYearly: '$1,270',
      blurb: 'The flagship: a specialist plus a custom-built system that carries the repetitive work automatically.',
      features: ['Full-time dedicated VA', 'Custom automation system', 'CRM & pipeline operations', 'Monthly review & optimization', 'Priority support'],
      featured: true,
    },
    {
      name: 'Department',
      priceMonthly: '$4,500',
      priceYearly: '$3,825',
      blurb: 'Multiple specialists and an expanding automation stack that scales as your operation grows.',
      features: ['Multiple specialists', 'Expanding automation stack', 'Dedicated ops manager', 'Custom portals & reporting', 'Support via WhatsApp'],
      featured: false,
    },
  ],
}

export const faq = {
  eyebrow: 'Questions',
  headline: 'Frequently asked questions',
  sub: 'Clear answers on how we work, what we install, and what you get.',
  items: [
    { q: 'Is this just a virtual assistant?', a: 'No. You get a trained specialist AND the system they run. We sell the car with the driver included — the complete outcome, not one part.' },
    { q: 'What is the 10/80/10 method?', a: 'We spend 10% mapping and building the system, 80% is carried automatically by the system and specialist, and 10% is monthly human review and optimization.' },
    { q: 'Which industries do you focus on?', a: 'Real estate first, healthcare clinics as a fast follow, and service businesses — founders, agencies and contractors drowning in repetitive work.' },
    { q: 'How fast can we get started?', a: 'It starts with a free Time-Back Audit. From there we map the work, build the system and onboard your specialist — typically live within a couple of weeks.' },
    { q: 'Is my business information confidential?', a: 'Yes. Your data, processes and materials are handled with strict confidentiality throughout the entire engagement.' },
  ],
}

export const cta = {
  eyebrow: 'Get your time back',
  headline: 'Install the system, meet your specialist, and delegate the chore',
  button: { label: 'Book your free audit', href: '#contact' },
}

export const footer = {
  wordmark: 'Ten80Ten',
  blurb: 'Systems + Specialists. We install the system that does your repetitive work — and give you the specialist to run it.',
  columns: [
    { title: 'Company', links: [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Work', '#work'], ['Pricing', '#pricing']] },
    { title: 'Services', links: [['Virtual assistants', '#services'], ['Automation systems', '#services'], ['Operations buildout', '#services'], ['The 10/80/10 method', '#services']] },
    { title: 'Connect', links: [['Book an audit', '#contact'], ['hello@ten80ten.com', 'mailto:hello@ten80ten.com'], ['LinkedIn', '#'], ['Instagram', '#']] },
  ],
  legal: '© 2026 Ten80Ten. Systems + Specialists.',
}

export const nav = {
  links: [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Work', '#work'], ['Pricing', '#pricing'], ['FAQ', '#faq']],
  cta: { label: "Let's talk", href: '#contact' },
}
