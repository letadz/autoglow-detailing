<script setup lang="ts">
import { services } from '~/data/services';
import SectionHeading from '~/components/ui/SectionHeading.vue';
import BaseButton from '~/components/ui/BaseButton.vue';
import CTASection from '~/components/home/CTASection.vue';

useSeoMeta({
  title: 'Services & Packages — AutoGlow Detailing',
  description:
    'Detailed service catalog: Exterior Decontamination, Interior Restoration, 9H Ceramic Coatings, and Multi-Stage Paint Correction.',
  ogTitle: 'Premium Care For Every Detail — AutoGlow Services',
  ogDescription:
    'Explore our bespoke detailing packages and laboratory-grade ceramic coatings.',
  ogImage: '/images/services/ceramic.webp',
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
          eyebrow="BESPOKE TREATMENT PACKAGES"
          title="PREMIUM CARE FOR"
          highlight="EVERY DETAIL."
          align="center"
          size="xl"
          description="Every vehicle undergoes a personalized surface assessment before any polishing or coating begins. We specify our treatments according to your vehicle's paint hardness, usage, and aesthetic goals."
        />
      </div>
    </section>

    <!-- Alternating Detailed Service Sections -->
    <div>
      <section
        v-for="(service, index) in services"
        :id="service.id"
        :key="service.id"
        :class="[
          'py-20 md:py-28 border-b border-white/10 relative scroll-mt-24',
          index % 2 === 0 ? 'bg-[#111111]' : 'bg-[#0A0A0A]',
        ]"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            <!-- Text Content Column -->
            <div
              :class="[
                'lg:col-span-6 flex flex-col items-start',
                index % 2 === 1 ? 'lg:order-2' : 'lg:order-1',
              ]"
            >
              <!-- Number & Category Tag -->
              <div class="flex items-center gap-3 mb-4">
                <span
                  class="font-mono text-sm font-bold text-gold px-2.5 py-1 bg-[#161616] border border-gold/40"
                >
                  {{ service.number }}
                </span>
                <span
                  class="text-xs uppercase tracking-ultra-wide text-white/50 font-semibold"
                >
                  Comprehensive Treatment
                </span>
              </div>

              <!-- Title -->
              <h2
                class="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight"
              >
                {{ service.title }}
              </h2>

              <!-- Description -->
              <p
                class="mt-4 text-white/70 text-sm sm:text-base font-light leading-relaxed"
              >
                {{ service.description }}
              </p>

              <!-- Specifications Badges -->
              <div class="mt-6 flex flex-wrap gap-4 text-xs font-mono">
                <div
                  class="px-3 py-1.5 bg-[#161616] border border-white/10 text-white/80"
                >
                  <span class="text-gold mr-1">Time:</span>
                  {{ service.duration }}
                </div>
                <div
                  v-if="service.warranty"
                  class="px-3 py-1.5 bg-[#161616] border border-gold/40 text-gold font-bold"
                >
                  <span class="mr-1">Warranty:</span>
                  {{ service.warranty }}
                </div>
              </div>

              <!-- Benefits List -->
              <div class="mt-8 w-full">
                <h3
                  class="text-xs uppercase tracking-ultra-wide text-gold font-bold mb-4 flex items-center gap-2"
                >
                  <span class="w-3 h-[1px] bg-gold" />
                  Key Treatment Inclusions:
                </h3>
                <ul class="space-y-3">
                  <li
                    v-for="(benefit, bIdx) in service.benefits"
                    :key="bIdx"
                    class="flex items-start gap-3 text-xs sm:text-sm text-white/80 font-light"
                  >
                    <span
                      class="w-5 h-5 bg-gold/10 border border-gold/40 flex-shrink-0 flex items-center justify-center text-gold text-xs font-mono"
                    >
                      ✓
                    </span>
                    <span>{{ benefit }}</span>
                  </li>
                </ul>
              </div>

              <!-- Book Button -->
              <div class="mt-10">
                <BaseButton
                  :to="`/contact?service=${encodeURIComponent(service.title)}`"
                  variant="primary"
                  size="md"
                >
                  Book This Service
                </BaseButton>
              </div>
            </div>

            <!-- Image Column -->
            <div
              :class="[
                'lg:col-span-6 relative',
                index % 2 === 1 ? 'lg:order-1' : 'lg:order-2',
              ]"
            >
              <div
                class="relative bg-[#161616] border border-white/10 overflow-hidden shadow-2xl group"
              >
                <NuxtImg
                  :src="service.image"
                  :alt="service.title"
                  class="w-full h-[360px] sm:h-[460px] object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-60"
                />

                <!-- Badge on Image -->
                <div
                  class="absolute bottom-4 left-4 right-4 p-4 bg-[#0A0A0A]/90 border border-white/10 backdrop-blur-md"
                >
                  <span
                    class="text-gold text-[10px] uppercase font-bold tracking-ultra-wide block"
                  >
                    RECOMMENDED FOR
                  </span>
                  <p class="text-white text-xs mt-1 font-light">
                    {{ service.idealFor }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>
