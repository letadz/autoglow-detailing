export interface ServiceItem {
  id: string
  number: string
  title: string
  shortDescription: string
  description: string
  image: string
  link: string
  benefits: string[]
  duration: string
  warranty?: string
  idealFor: string
  features: string[]
}

export const services: ServiceItem[] = [
  {
    id: 'exterior-detailing',
    number: '01',
    title: 'Exterior Detailing',
    shortDescription: 'Comprehensive exterior decontamination, hand foam wash, clay bar treatment, and polymer sealant.',
    description: 'Our exterior detailing is an exacting multi-step preservation process. We remove embedded environmental contaminants, road grime, and brake dust while restoring brilliant gloss, hydrophobicity, and deep reflectivity to every curve of your vehicle’s bodywork.',
    image: '/images/services/exterior.webp',
    link: '/services#exterior-detailing',
    benefits: [
      'Multi-stage contactless snow foam pre-wash & two-bucket hand wash',
      'Full chemical iron decontamination & synthetic clay bar treatment',
      'Wheel barrels, brake calipers, and wheel arch deep-cleaning',
      'High-grade synthetic hydrophobic sealant application',
      'Streak-free exterior glass polishing & tire nourishment'
    ],
    duration: '4 – 6 Hours',
    idealFor: 'Routine rejuvenation and preservation for luxury vehicles seeking immaculate finish.',
    features: ['Foam Decontamination', 'Clay Bar Treatment', 'Wheel & Arch Detailing', 'Hydrophobic Sealant']
  },
  {
    id: 'interior-detailing',
    number: '02',
    title: 'Interior Detailing',
    shortDescription: 'Deep steam extraction, bespoke leather nourishment, matte cockpit sanitation, and allergen elimination.',
    description: 'Step into a showroom-fresh cabin. We meticulously treat delicate aniline leather, alcantara, exotic carbon trim, and fine carpets using pH-neutral conditioning agents that restore the original factory matte finish without sticky residues or artificial perfumes.',
    image: '/images/services/interior.webp',
    link: '/services#interior-detailing',
    benefits: [
      'High-temperature antimicrobial steam sterilization across all surfaces',
      'Precision pH-neutral leather cleansing & conditioning with UV barrier',
      'Alcantara gentle fiber nap restoration and spot extraction',
      'Deep hot-water extraction of deep-pile carpets and floor mats',
      'HVAC air duct ozonation & allergen neutralization'
    ],
    duration: '4 – 5 Hours',
    idealFor: 'Restoring elegance, pure scent, and tactile perfection to luxury vehicle interiors.',
    features: ['Leather Nourishment', 'Steam Sterilization', 'Alcantara Care', 'Odor & HVAC Ozonation']
  },
  {
    id: 'ceramic-coating',
    number: '03',
    title: 'Ceramic Coating',
    shortDescription: 'Professional grade 9H nano-ceramic coatings offering multi-year chemical resistance and extreme gloss.',
    description: 'The pinnacle of automotive surface protection. Our certified multi-layer ceramic formulas fuse covalently with clear coat molecules, forming a diamond-hard, glass-like sacrificial shield resistant to UV oxidation, acid rain, bird etching, and extreme heat.',
    image: '/images/services/ceramic.webp',
    link: '/services#ceramic-coating',
    benefits: [
      'Multi-layer 9H SiO2 / SiC professional nano-ceramic application',
      'Permanent candy-gloss depth and self-cleaning hydrophobic contact angle',
      'Guaranteed resistance against UV oxidation, chemical etching, and salt',
      'Wheel face & caliper high-temp ceramic protection',
      'Documented warranty & Carfax registry certification'
    ],
    duration: '1 – 2 Days',
    warranty: '5-Year Written Guarantee',
    idealFor: 'Owners seeking uncompromising gloss, effortless maintenance, and long-term asset value protection.',
    features: ['9H Hardness', 'Self-Cleaning Hydrophobicity', 'UV & Chemical Shield', 'Warranty Backed']
  },
  {
    id: 'paint-correction',
    number: '04',
    title: 'Paint Correction',
    shortDescription: 'Multi-stage machine polishing removing 85% to 99% of swirl marks, scratches, holograms, and oxidation.',
    description: 'A true art form requiring micrometric paint depth gauges and skilled hand coordination. We systematically level microscopic defects in the clear coat using compound diminishing abrasives, producing an astonishing, distortion-free liquid reflection.',
    image: '/images/services/paint-correction.webp',
    link: '/services#paint-correction',
    benefits: [
      'Digital paint depth gauge measurement and panel-by-panel assessment',
      'Multi-stage rotary and random orbital compound defect leveling',
      'Eradication of swirl marks, buffer trails, water etching, and micro-marring',
      'Jeweling polish phase to unlock deepest gloss and optic clarity',
      'Complete IPA wipe-down under high-CRI color inspection lighting'
    ],
    duration: '1 – 3 Days',
    idealFor: 'Enthusiasts and collectors demanding flawless reflection and mirror clarity.',
    features: ['Digital Depth Analysis', 'Multi-Stage Leveling', 'Swirl & Scratch Removal', 'Ultra-Jeweling Polish']
  }
]
