<template>
  <section
    class="relative py-14 sm:py-16 bg-[#0A0A0A] overflow-hidden border-b border-white/10"
  >
    <!-- Cinematic Background Image with Dark Overlays -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="/images/cta/cta-car.webp"
        alt="AutoGlow Detailing Luxury Supercar"
        class="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.1]"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]"
      />
    </div>

    <!-- Content Container (Horizontal Strip matching mockup) -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12"
      >
        <!-- Left: Headline -->
        <div class="flex-shrink-0">
          <span
            class="text-gold text-xs sm:text-sm uppercase font-bold tracking-widest block leading-tight"
          >
            YOUR CAR DESERVES
          </span>
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white tracking-tight leading-none mt-1"
          >
            THE BEST.
          </h2>
        </div>

        <!-- Center: Subtitle -->
        <div class="max-w-md">
          <p
            class="text-xs sm:text-sm text-white/70 font-light leading-relaxed"
          >
            Experience professional detailing and exceptional care today.
          </p>
        </div>

        <!-- Right: CTA Button -->
        <div class="flex-shrink-0">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-gold hover:bg-gold-light text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-gold-glow group"
          >
            <span>BOOK AN APPOINTMENT</span>
            <span
              class="transform group-hover:translate-x-1 transition-transform duration-300 font-bold"
            >
              →
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
