export interface GalleryItem {
  id: number
  src: string
  thumbnail: string
  width: number
  height: number
  category: string
  title: string
  description: string
  alt: string
  featured?: boolean
}

export const galleryCategories = [
  'All Work',
  'Exterior',
  'Interior',
  'Ceramic Coating',
  'Paint Correction'
] as const

export type GalleryCategory = (typeof galleryCategories)[number]

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/images/gallery/exterior-1.webp',
    thumbnail: '/images/gallery/exterior-1.webp',
    width: 1600,
    height: 1200,
    category: 'Exterior',
    title: 'Porsche 911 GT3 RS Deep Gloss Decontamination',
    description: 'Precision snow foam treatment, paint decontamination, and gloss sealant application on Shark Blue paint.',
    alt: 'Porsche 911 GT3 RS exterior detailing showing pristine gloss reflections',
    featured: true
  },
  {
    id: 2,
    src: '/images/gallery/ceramic-1.webp',
    thumbnail: '/images/gallery/ceramic-1.webp',
    width: 1600,
    height: 1200,
    category: 'Ceramic Coating',
    title: 'Ferrari 488 Pista 9H Multi-Layer Shield',
    description: 'Bespoke 5-year ceramic application producing extreme candy-gloss depth and hydrophobic water beading.',
    alt: 'Ferrari 488 Pista Rosso Corsa protected by 9H ceramic coating',
    featured: true
  },
  {
    id: 3,
    src: '/images/gallery/interior-1.webp',
    thumbnail: '/images/gallery/interior-1.webp',
    width: 1600,
    height: 1200,
    category: 'Interior',
    title: 'Bentley Continental GT Saddle Leather Restoration',
    description: 'Deep steam cleansing and Swissvax leather nourishment restoring OEM matte touch and aroma.',
    alt: 'Bentley Continental GT handcrafted luxury leather cockpit detailed to perfection',
    featured: true
  },
  {
    id: 4,
    src: '/images/gallery/paint-correction-1.webp',
    thumbnail: '/images/gallery/paint-correction-1.webp',
    width: 1600,
    height: 1200,
    category: 'Paint Correction',
    title: 'Mercedes-AMG GT Black Series Mirror Leveling',
    description: 'Multi-stage compound defect removal eliminating 95% of micro-scratches and holograms.',
    alt: 'Mercedes-AMG GT Black Series mirror-finish paint correction',
    featured: true
  },
  {
    id: 5,
    src: '/images/gallery/exterior-2.webp',
    thumbnail: '/images/gallery/exterior-2.webp',
    width: 1600,
    height: 1200,
    category: 'Exterior',
    title: 'Aston Martin DBS Superleggera Hydrophobic Bath',
    description: 'Exacting wheel barrel decontamination, carbon diffuser cleanse, and high-gloss sealant.',
    alt: 'Aston Martin DBS Superleggera undergoing exterior luxury detailing',
    featured: true
  },
  {
    id: 6,
    src: '/images/gallery/ceramic-2.webp',
    thumbnail: '/images/gallery/ceramic-2.webp',
    width: 1600,
    height: 1200,
    category: 'Ceramic Coating',
    title: 'McLaren 720S Liquid Glass Reflection',
    description: 'Dual layer ceramic coating cured with infrared lamps for maximum surface tensile hardness.',
    alt: 'McLaren 720S in dark studio with reflective ceramic glass coat',
    featured: true
  },
  {
    id: 7,
    src: '/images/gallery/interior-2.webp',
    thumbnail: '/images/gallery/interior-2.webp',
    width: 1600,
    height: 1200,
    category: 'Interior',
    title: 'Rolls-Royce Ghost Bespoke Cabin Spa',
    description: 'Starlight headliner dust extraction, lambswool rug cleansing, and piano black trim polishing.',
    alt: 'Rolls-Royce Ghost interior detailing with flawless wood and leather craftsmanship',
    featured: false
  },
  {
    id: 8,
    src: '/images/gallery/paint-correction-2.webp',
    thumbnail: '/images/gallery/paint-correction-2.webp',
    width: 1600,
    height: 1200,
    category: 'Paint Correction',
    title: 'BMW M3 Competition Obsidian Polish',
    description: 'Precision jewel polish eliminating factory orange peel and buffer trails.',
    alt: 'BMW M3 Competition black sapphire metallic after intensive paint correction',
    featured: false
  },
  {
    id: 9,
    src: '/images/gallery/exterior-3.webp',
    thumbnail: '/images/gallery/exterior-3.webp',
    width: 1600,
    height: 1200,
    category: 'Exterior',
    title: 'Lamborghini Huracán STO Aero Detailing',
    description: 'Detailed care of complex aerodynamics, carbon fins, and center-lock magnesium wheels.',
    alt: 'Lamborghini Huracán STO aerodynamic surfaces cleaned and sealed',
    featured: false
  },
  {
    id: 10,
    src: '/images/gallery/interior-3.webp',
    thumbnail: '/images/gallery/interior-3.webp',
    width: 1600,
    height: 1200,
    category: 'Interior',
    title: 'Audi RS6 Avant Alcantara & Carbon Refinement',
    description: 'Alcantara nap rejuvenation and electrostatic dust-free carbon trim sealant.',
    alt: 'Audi RS6 cockpit with deep cleaned sport seats and carbon center console',
    featured: false
  },
  {
    id: 11,
    src: '/images/gallery/ceramic-3.webp',
    thumbnail: '/images/gallery/ceramic-3.webp',
    width: 1600,
    height: 1200,
    category: 'Ceramic Coating',
    title: 'Corvette Z06 Water Beading Demonstration',
    description: 'Demonstrating 115-degree water contact angle and effortless self-cleaning capability.',
    alt: 'Tight hydrophobic water beads rolling off ceramic coated vehicle hood',
    featured: false
  },
  {
    id: 12,
    src: '/images/gallery/paint-correction-3.webp',
    thumbnail: '/images/gallery/paint-correction-3.webp',
    width: 1600,
    height: 1200,
    category: 'Paint Correction',
    title: 'Vintage Jaguar E-Type Single-Stage Revival',
    description: 'Delicate non-clearcoat paint restoration bringing back 1960s British Racing Green lustre.',
    alt: 'Classic British Racing Green paint undergoing sensitive restorative polish',
    featured: false
  }
]
