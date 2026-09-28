<script setup lang="ts">
const galleryItems = [
  {
    id: 1,
    src: '/images/gallery/exterior-1.webp',
    alt: 'Porsche 911 GT3 RS Front Quarter View',
  },
  {
    id: 2,
    src: '/images/gallery/interior-1.webp',
    alt: 'Luxury Handcrafted Leather Interior Detailing',
  },
  {
    id: 3,
    src: '/images/gallery/wheel-caliper.webp',
    alt: 'Forged Alloy Wheel with Gold Ceramic Brake Caliper',
  },
  {
    id: 4,
    src: '/images/gallery/rear-lights.webp',
    alt: 'Modern Sports Car LED Taillights and Gloss Finish',
  },
  {
    id: 5,
    src: '/images/gallery/engine-bay.webp',
    alt: 'Detailed High Performance Supercar Engine Bay',
  },
  {
    id: 6,
    src: '/images/gallery/ceramic-2.webp',
    alt: 'Ceramic Coated Supercar Bodywork Reflections',
  },
];
</script>

<template>
  <section
    class="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6"
      >
        <div>
          <span
            class="text-gold text-xs sm:text-sm uppercase font-bold tracking-widest block mb-2"
          >
            OUR WORK
          </span>
          <h2
            class="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight"
          >
            CRAFTED WITH ATTENTION TO DETAIL.
          </h2>
        </div>

        <div>
          <NuxtLink
            to="/gallery"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-[#1A1A1A] text-white border border-white/20 hover:border-gold text-xs uppercase font-bold tracking-wider transition-all duration-300 group"
          >
            <span>VIEW FULL GALLERY</span>
            <span
              class="text-gold transform group-hover:translate-x-1 transition-transform duration-300"
            >
              →
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- 6 Image Responsive Grid (3 cols x 2 rows) -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <NuxtLink
          v-for="item in galleryItems"
          :key="item.id"
          to="/gallery"
          class="group relative h-56 sm:h-64 md:h-72 bg-[#111111] border border-white/10 hover:border-gold/60 overflow-hidden block transition-all duration-300"
        >
          <NuxtImg
            :src="item.src"
            :alt="item.alt"
            class="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-108 group-hover:brightness-100 transition-all duration-700 ease-out"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
