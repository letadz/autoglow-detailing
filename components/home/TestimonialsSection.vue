<script setup lang="ts">
const testimonials = [
  {
    id: 1,
    quote:
      'My car looks better than the day I bought it! Amazing attention to detail and outstanding service.',
    author: 'Michael R.',
    avatar: '/images/testimonials/avatar-1.webp',
  },
  {
    id: 2,
    quote:
      'Professional, friendly, and highly skilled. They really know how to treat your car like their own.',
    author: 'John D.',
    avatar: '/images/testimonials/avatar-2.webp',
  },
  {
    id: 3,
    quote:
      'Highly recommended! The ceramic coating results are incredible and long-lasting.',
    author: 'Kevin L.',
    avatar: '/images/testimonials/avatar-3.webp',
  },
] as const;

const activeIndex = ref(0);

const activeTestimonial = computed(
  () => testimonials[activeIndex.value] ?? testimonials[0],
);

const prevTestimonial = () => {
  activeIndex.value =
    activeIndex.value === 0 ? testimonials.length - 1 : activeIndex.value - 1;
};

const nextTestimonial = () => {
  activeIndex.value =
    activeIndex.value === testimonials.length - 1 ? 0 : activeIndex.value + 1;
};
</script>

<template>
  <section
    class="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12 sm:mb-16">
        <span
          class="text-gold text-xs sm:text-sm uppercase font-bold tracking-widest block mb-2"
        >
          CLIENT EXPERIENCE
        </span>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight"
        >
          WHAT OUR CUSTOMERS SAY.
        </h2>
      </div>

      <!-- Carousel Container with Side Arrows -->
      <div class="relative px-2 sm:px-10">
        <!-- Prev Button (Left) -->
        <button
          type="button"
          class="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-white/50 hover:text-gold transition-colors focus:outline-none"
          aria-label="Previous testimonial"
          @click="prevTestimonial"
        >
          <span class="text-2xl font-light">‹</span>
        </button>

        <!-- 3 Cards Grid (Desktop shows all 3, mobile shows active slide) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(item, idx) in testimonials"
            :key="item.id"
            :class="[
              'bg-[#111111] border border-white/10 p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-300',
              idx === activeIndex ? 'ring-1 ring-gold/40 border-gold/40' : '',
              'hidden md:flex',
            ]"
          >
            <!-- Gold Quotation Mark Top Right -->
            <div
              class="absolute top-6 right-6 text-gold font-serif text-3xl font-bold select-none leading-none"
            >
              ”
            </div>

            <!-- Quote Text -->
            <p
              class="text-xs sm:text-sm text-white/80 font-light leading-relaxed pr-6 mb-8"
            >
              "{{ item.quote }}"
            </p>

            <!-- Author & Avatar -->
            <div class="flex items-center gap-3 pt-4 border-t border-white/5">
              <NuxtImg
                :src="item.avatar"
                :alt="item.author"
                class="w-9 h-9 rounded-full object-cover border border-white/20"
                loading="lazy"
              />
              <span
                class="text-xs sm:text-sm font-bold uppercase text-white tracking-wider"
              >
                {{ item.author }}
              </span>
            </div>
          </div>

          <!-- Mobile Active Card (visible on mobile only) -->
          <div
            class="md:hidden bg-[#111111] border border-gold/40 p-7 flex flex-col justify-between relative shadow-xl"
          >
            <div
              class="absolute top-6 right-6 text-gold font-serif text-3xl font-bold select-none leading-none"
            >
              ”
            </div>

            <p
              class="text-sm text-white/80 font-light leading-relaxed pr-6 mb-8"
            >
              "{{ activeTestimonial.quote }}"
            </p>

            <div class="flex items-center gap-3 pt-4 border-t border-white/5">
              <NuxtImg
                :src="activeTestimonial.avatar"
                :alt="activeTestimonial.author"
                class="w-9 h-9 rounded-full object-cover border border-white/20"
                loading="lazy"
              />
              <span
                class="text-xs sm:text-sm font-bold uppercase text-white tracking-wider"
              >
                {{ activeTestimonial.author }}
              </span>
            </div>
          </div>
        </div>

        <!-- Next Button (Right) -->
        <button
          type="button"
          class="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-white/50 hover:text-gold transition-colors focus:outline-none"
          aria-label="Next testimonial"
          @click="nextTestimonial"
        >
          <span class="text-2xl font-light">›</span>
        </button>
      </div>

      <!-- Pagination Dots -->
      <div class="flex items-center justify-center gap-2 mt-8">
        <button
          v-for="(_, idx) in testimonials"
          :key="idx"
          type="button"
          :class="[
            'transition-all duration-300 rounded-full focus:outline-none',
            idx === activeIndex
              ? 'w-6 h-1.5 bg-gold'
              : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50',
          ]"
          :aria-label="`Go to testimonial ${idx + 1}`"
          @click="activeIndex = idx"
        />
      </div>
    </div>
  </section>
</template>
