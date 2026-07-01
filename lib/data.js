// Palette system — mirrors the portfolio's per-project accent-shift mechanic.
// index 0 is the default/idle palette.
export const palettes = [
  { p1: '#A06070', p2: '#2D4A3E', p3: '#F5F0EB', glow: 'rgba(160,96,112,0.15)', glow2: 'rgba(160,96,112,0.06)' }, // 926 Snacks
  { p1: '#C8909F', p2: '#6B7C4B', p3: '#F2E8EB', glow: 'rgba(200,144,159,0.13)', glow2: 'rgba(200,144,159,0.05)' }, // 926 Snacks CRM
  { p1: '#42cafd', p2: '#1b2d4f', p3: '#eef2f8', glow: 'rgba(66,202,253,0.12)', glow2: 'rgba(66,202,253,0.05)' }, // NZFA Hub
  { p1: '#2563eb', p2: '#10b981', p3: '#f8fafc', glow: 'rgba(37,99,235,0.13)', glow2: 'rgba(37,99,235,0.05)' }, // EMS Pro
  { p1: '#C9784B', p2: '#1A1A2E', p3: '#E8D5C4', glow: 'rgba(201,120,75,0.14)', glow2: 'rgba(201,120,75,0.05)' }, // Wirely
];

export const projects = [
  {
    idx: 0,
    num: '01',
    url: '926snacks.ph',
    type: 'E-Commerce',
    title: '926 Snacks',
    desc: 'Customer-facing storefront for a Philippines-based packaged snacks brand. Product browsing, reveal animations, and a Playfair/Jakarta Sans editorial feel.',
    tags: ['Next.js', 'Stripe', 'Cloudinary'],
    image: '/images/project-926snacks.png',
  },
  {
    idx: 1,
    num: '02',
    url: 'crm.926snacks.ph',
    type: 'CRM · Admin',
    title: '926 Snacks CRM',
    desc: 'Internal product manager with bulk actions, CSV export, drag-to-reorder, analytics dashboard, and low-stock alerts on the same brand palette.',
    tags: ['React', 'Prisma', 'PostgreSQL'],
    image: '/images/project-926snacks-crm.png',
  },
  {
    idx: 2,
    num: '03',
    url: 'nzfa-hub.blanket.co.nz',
    type: 'Knowledge Base',
    title: 'NZFA Hub',
    desc: 'Internal knowledge base for a NZ insurance org — SOP management, FAQ system, role-based access, article versioning, notification centre, and recycle bin.',
    tags: ['Next.js 14', 'Supabase', 'NextAuth'],
    image: '/images/project-nzfa-hub.png',
  },
  {
    idx: 3,
    num: '04',
    url: 'ems-pro.internal',
    type: 'HR · Payroll',
    title: 'EMS Pro',
    desc: 'Full employee management system with Philippine statutory payroll deductions, NextAuth role-based access, leave management, and department analytics.',
    tags: ['Next.js', 'Prisma', 'NextAuth'],
    image: '/images/project-ems-pro.png',
  },
  {
    idx: 4,
    num: '05',
    url: 'wirely.ph',
    type: 'E-Commerce · Craft',
    title: 'Wirely',
    desc: 'Full e-commerce for a fuzzy wire crafts & stationery brand. Stripe payments, Cloudinary image management, admin panel, order tracking, and smooth animations.',
    tags: ['Next.js', 'Stripe', 'Cloudinary'],
    image: '/images/project-wirely.png',
  },
];

export const skillsGroups = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js 14', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'shadcn/ui'],
  },
  {
    label: 'Backend & Database',
    skills: ['Node.js', 'Prisma ORM', 'PostgreSQL', 'Supabase', 'NextAuth.js', 'REST APIs'],
  },
  {
    label: 'Integrations & Cloud',
    skills: ['Stripe', 'Cloudinary', 'Cloudflare R2', 'Vercel', 'Git / GitHub'],
  },
  {
    label: 'Operations & QA',
    skills: ['Test case design', 'SOP authoring', 'Insurance quoting', 'Process mapping', 'Excel / Power Query'],
  },
];

export const aboutDetails = [
  { icon: '📍', text: 'Philippines — supporting NZ insurance ops' },
  { icon: '💼', text: 'Systems Lead — blanket.co.nz / hicactus.com' },
  { icon: '🏪', text: 'Founder — 926 Snacks' },
  { icon: '🔧', text: 'Available for freelance projects' },
];

export const currencyRates = {
  USD: { rate: 1, sym: '$' },
  NZD: { rate: 1.65, sym: 'NZ$' },
  PHP: { rate: 56, sym: '₱' },
};
