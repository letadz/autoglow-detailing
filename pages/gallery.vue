<script setup lang="ts">
import { galleryItems, type GalleryCategory } from '~/data/gallery';
import GalleryFilter from '~/components/gallery/GalleryFilter.vue';
import GalleryGrid from '~/components/gallery/GalleryGrid.vue';
import SectionHeading from '~/components/ui/SectionHeading.vue';
import CTASection from '~/components/home/CTASection.vue';

useSeoMeta({
  title: 'Portfolio & Gallery — AutoGlow Detailing',
  description:
    'Explore our portfolio of exotic, luxury, and vintage motorcars detailed, corrected, and ceramic coated inside the AutoGlow studio.',
  ogTitle: 'Crafted With Attention To Detail — AutoGlow Gallery',
  ogDescription:
    'High-resolution showcase of automotive detailing transformations.',
  ogImage: '/images/gallery/exterior-1.webp',
});

const selectedCategory = ref<GalleryCategory>('All Work');

const filteredItems = computed(() => {
  if (selectedCategory.value === 'All Work') {
    return galleryItems;
  }
  return galleryItems.filter(
    (item) => item.category === selectedCategory.value,
  );
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          eyebrow="OUR WORK"
          title="CRAFTED WITH"
          highlight="ATTENTION TO DETAIL."
          align="center"
          size="xl"
          description="Browse our portfolio of completed commissions. Each vehicle reflects dozens of hours of meticulous surface decontamination, microscopic defect removal, and glass-like ceramic sealing."
        />

        <!-- Category Filters -->
        <div class="mt-12">
          <GalleryFilter v-model="selectedCategory" />
        </div>
      </div>
    </section>

    <!-- Main Gallery Grid Section -->
    <section class="py-16 md:py-24 bg-[#111111] border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Count Display -->
        <div
          class="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs text-white/50 uppercase tracking-wider"
        >
          <span>Showing {{ filteredItems.length }} Commissions</span>
          <span class="font-mono text-gold">{{ selectedCategory }}</span>
        </div>

        <GalleryGrid :items="filteredItems" />
      </div>
    </section>

    <!-- Bottom CTA -->
    <CTASection />
  </div>
</template>
