<script setup lang="ts">
const steps = [
  {
    step: '01',
    title: 'CHOOSE SERVICE',
    description: 'Select the service that best fits your needs.',
    icon: 'list',
  },
  {
    step: '02',
    title: 'BOOK APPOINTMENT',
    description: 'Pick a date and time that works for you.',
    icon: 'calendar',
  },
  {
    step: '03',
    title: 'WE DETAIL YOUR CAR',
    description: 'Our experts bring out the best in your car.',
    icon: 'car',
  },
  {
    step: '04',
    title: 'ENJOY THE GLOW',
    description: 'Drive away with a car that looks brand new.',
    icon: 'sparkles',
  },
]
</script>

<template>
  <section
    class="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-14 sm:mb-20">
        <span
          class="text-gold text-xs sm:text-sm uppercase font-bold tracking-widest block mb-2"
        >
          HOW IT WORKS
        </span>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight"
        >
          BOOK. DETAIL. GLOW.
        </h2>
      </div>

      <!-- 4 Steps Row with Connecting Dashed Line -->
      <div class="relative">
        <!-- Connecting Dashed Line (Visible on Desktop) -->
        <div
          class="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[1px] border-t border-dashed border-white/20 z-0 pointer-events-none"
        />

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10"
        >
          <div
            v-for="item in steps"
            :key="item.step"
            class="flex items-start gap-4"
          >
            <!-- Step Icon -->
            <div
              class="w-14 h-14 rounded-none bg-[#0A0A0A] border border-white/15 flex items-center justify-center text-gold flex-shrink-0 relative"
            >
              <!-- Calendar / List Icon -->
              <svg
                v-if="item.icon === 'list'"
                class="w-7 h-7 text-gold"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                />
                <line
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="6"
                />
                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="6"
                />
                <line
                  x1="3"
                  y1="10"
                  x2="21"
                  y2="10"
                />
                <path d="M8 14h2M8 17h5" />
              </svg>

              <!-- Calendar / Clock Icon -->
              <svg
                v-else-if="item.icon === 'calendar'"
                class="w-7 h-7 text-gold"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                />
                <line
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="6"
                />
                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="6"
                />
                <line
                  x1="3"
                  y1="10"
                  x2="21"
                  y2="10"
                />
                <circle
                  cx="12"
                  cy="15"
                  r="3"
                />
                <polyline points="12 14 12 15 13.5 15" />
              </svg>

              <!-- Car Icon -->
              <svg
                v-else-if="item.icon === 'car'"
                class="w-7 h-7 text-gold"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V14.25m-17.25 0l1.875-5.625A2.25 2.25 0 017.5 7.125h9a2.25 2.25 0 012.133 1.5L20.625 14.25m-18.375 0h18.375"
                />
              </svg>

              <!-- Sparkles Icon -->
              <svg
                v-else
                class="w-7 h-7 text-gold"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
                <circle
                  cx="18"
                  cy="6"
                  r="2"
                  fill="currentColor"
                />
                <circle
                  cx="17"
                  cy="18"
                  r="1.5"
                  fill="currentColor"
                />
              </svg>
            </div>

            <!-- Content -->
            <div>
              <span
                class="font-mono text-xs font-bold text-gold tracking-widest block mb-1"
              >
                {{ item.step }}
              </span>
              <h3
                class="text-xs sm:text-sm font-extrabold uppercase text-white tracking-wider"
              >
                {{ item.title }}
              </h3>
              <p
                class="text-xs text-white/60 font-light mt-1.5 leading-relaxed"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
