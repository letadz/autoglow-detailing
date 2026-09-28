<script setup lang="ts">
const points = [
  {
    title: 'ATTENTION TO DETAIL',
    description: 'Every vehicle is treated with the utmost care and precision.',
  },
  {
    title: 'PREMIUM PRODUCTS',
    description: 'We use industry-leading products for the best results.',
  },
  {
    title: 'PROFESSIONAL TECHNIQUES',
    description: 'Skilled professionals using advanced detailing methods.',
  },
  {
    title: 'QUALITY RESULTS',
    description: 'Consistent, high-quality results that exceed expectations.',
  },
];
</script>

<template>
  <section
    class="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        <!-- Left Image Column (6 cols) -->
        <div class="lg:col-span-6 relative">
          <div
            class="relative bg-[#111111] border border-white/10 overflow-hidden shadow-2xl"
          >
            <NuxtImg
              src="/images/about/why-autoglow.webp"
              alt="AutoGlow Detailing Professional Precision"
              class="w-full h-[380px] sm:h-[460px] md:h-[500px] object-cover filter brightness-[0.9] contrast-[1.08]"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A0A0A]/40"
            />
          </div>
        </div>

        <!-- Right Content & Checklist (6 cols) -->
        <div class="lg:col-span-6 flex flex-col justify-center">
          <span
            class="text-gold text-xs sm:text-sm uppercase font-bold tracking-widest block mb-2"
          >
            WHY CHOOSE AUTOGLOW?
          </span>

          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-[1.08] mb-8"
          >
            PROFESSIONAL CARE.
            <br />
            EVERY DETAIL.
          </h2>

          <!-- 4 Checklist Items -->
          <div class="space-y-6">
            <div
              v-for="point in points"
              :key="point.title"
              class="flex items-start gap-4"
            >
              <!-- Circular Gold Check Icon -->
              <div
                class="w-6 h-6 rounded-full border border-gold flex items-center justify-center flex-shrink-0 mt-0.5 text-gold"
              >
                <svg
                  class="w-3.5 h-3.5 text-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <div>
                <h3
                  class="text-xs sm:text-sm font-bold uppercase tracking-wider text-white"
                >
                  {{ point.title }}
                </h3>
                <p
                  class="text-xs sm:text-sm text-white/60 font-light mt-1 leading-relaxed"
                >
                  {{ point.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
