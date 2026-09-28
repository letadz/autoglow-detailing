<script setup lang="ts">
const services = [
  {
    id: 'exterior-detailing',
    title: 'EXTERIOR DETAILING',
    description:
      "Deep clean and protect your vehicle's exterior for a brilliant, long-lasting shine.",
    link: '/services#exterior-detailing',
  },
  {
    id: 'interior-detailing',
    title: 'INTERIOR DETAILING',
    description:
      'Thorough cleaning and conditioning for a fresh, comfortable, and like-new interior.',
    link: '/services#interior-detailing',
  },
  {
    id: 'ceramic-coating',
    title: 'CERAMIC COATING',
    description:
      'Advanced protection for your paint, providing long-lasting shine and superior durability.',
    link: '/services#ceramic-coating',
  },
] as const
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
            OUR SERVICES
          </span>
          <h2
            class="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight"
          >
            PREMIUM CARE FOR EVERY DETAIL.
          </h2>
        </div>

        <div>
          <NuxtLink
            to="/services"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-[#1A1A1A] text-white border border-white/20 hover:border-gold text-xs uppercase font-bold tracking-wider transition-all duration-300 group"
          >
            <span>VIEW ALL SERVICES</span>
            <span
              class="text-gold transform group-hover:translate-x-1 transition-transform duration-300"
            >
              →
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- 3 Service Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <!-- 1. Exterior Detailing -->
        <div
          class="bg-[#111111] border border-white/10 hover:border-gold/50 p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 group relative"
        >
          <div>
            <!-- Car Wash Icon -->
            <div
              class="w-12 h-12 text-gold mb-6 flex items-center justify-center"
            >
              <svg
                class="w-10 h-10 text-gold"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V14.25m-17.25 0l1.875-5.625A2.25 2.25 0 017.5 7.125h9a2.25 2.25 0 012.133 1.5L20.625 14.25m-18.375 0h18.375"
                />
                <circle
                  cx="12"
                  cy="4"
                  r="1.5"
                  fill="currentColor"
                />
                <circle
                  cx="7"
                  cy="3"
                  r="1"
                  fill="currentColor"
                />
                <circle
                  cx="17"
                  cy="3"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </div>

            <h3
              class="text-base sm:text-lg font-extrabold uppercase text-white tracking-wide group-hover:text-gold transition-colors"
            >
              {{ services[0].title }}
            </h3>

            <p
              class="mt-3 text-xs sm:text-sm text-white/60 font-light leading-relaxed"
            >
              {{ services[0].description }}
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-white/5">
            <NuxtLink
              :to="services[0].link"
              class="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-gold hover:text-white transition-colors group-hover:gap-3 duration-300"
            >
              <span>LEARN MORE</span>
              <span>→</span>
            </NuxtLink>
          </div>
        </div>

        <!-- 2. Interior Detailing -->
        <div
          class="bg-[#111111] border border-white/10 hover:border-gold/50 p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 group relative"
        >
          <div>
            <!-- Car Seat Icon -->
            <div
              class="w-12 h-12 text-gold mb-6 flex items-center justify-center"
            >
              <svg
                class="w-10 h-10 text-gold"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 4a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2h-4a2 2 0 01-2-2V4z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 14h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 20v2m10-2v2"
                />
              </svg>
            </div>

            <h3
              class="text-base sm:text-lg font-extrabold uppercase text-white tracking-wide group-hover:text-gold transition-colors"
            >
              {{ services[1].title }}
            </h3>

            <p
              class="mt-3 text-xs sm:text-sm text-white/60 font-light leading-relaxed"
            >
              {{ services[1].description }}
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-white/5">
            <NuxtLink
              :to="services[1].link"
              class="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-gold hover:text-white transition-colors group-hover:gap-3 duration-300"
            >
              <span>LEARN MORE</span>
              <span>→</span>
            </NuxtLink>
          </div>
        </div>

        <!-- 3. Ceramic Coating -->
        <div
          class="bg-[#111111] border border-white/10 hover:border-gold/50 p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 group relative"
        >
          <div>
            <!-- Shield Check Icon -->
            <div
              class="w-12 h-12 text-gold mb-6 flex items-center justify-center"
            >
              <svg
                class="w-10 h-10 text-gold"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>

            <h3
              class="text-base sm:text-lg font-extrabold uppercase text-white tracking-wide group-hover:text-gold transition-colors"
            >
              {{ services[2].title }}
            </h3>

            <p
              class="mt-3 text-xs sm:text-sm text-white/60 font-light leading-relaxed"
            >
              {{ services[2].description }}
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-white/5">
            <NuxtLink
              :to="services[2].link"
              class="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-gold hover:text-white transition-colors group-hover:gap-3 duration-300"
            >
              <span>LEARN MORE</span>
              <span>→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
