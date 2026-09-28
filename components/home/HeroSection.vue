<template>
  <section
    class="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] border-b border-white/10"
  >
    <!-- Background Image with Cinematic Gradient Overlays -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="/images/hero/hero-car.webp"
        alt="AutoGlow Detailing Luxury Supercar"
        class="w-full h-full object-cover object-center lg:object-right filter brightness-[0.7] contrast-[1.1]"
        loading="eager"
        fetchpriority="high"
      />
      <!-- Dark Vignettes and Gradients -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent lg:w-2/3"
      />
    </div>

    <!-- Main Content Container -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full"
    >
      <div class="max-w-2xl">
        <!-- Eyebrow -->
        <span
          class="text-gold text-xs sm:text-sm uppercase font-bold tracking-widest block mb-4"
        >
          PREMIUM AUTO DETAILING
        </span>

        <!-- Heading -->
        <h1
          class="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-extrabold text-white uppercase tracking-tight leading-[1.04]"
        >
          BRING BACK
          <br />
          YOUR CAR'S
          <br />
          SHOWROOM
          <br />
          <span class="text-gold">SHINE.</span>
        </h1>

        <!-- Description -->
        <p
          class="mt-6 text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-lg"
        >
          Professional detailing and paint protection services designed to
          restore and protect your vehicle.
        </p>

        <!-- CTAs -->
        <div
          class="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
        >
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
          <NuxtLink
            to="/services"
            class="inline-flex items-center justify-center px-7 py-3.5 bg-black/40 hover:bg-white/10 text-white border border-white/25 hover:border-white/60 font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-300"
          >
            VIEW SERVICES
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Scroll To Explore Indicator -->
    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
    >
      <!-- Mouse Icon -->
      <div
        class="w-5 h-8 rounded-full border-2 border-gold/70 flex justify-center pt-1.5"
      >
        <div class="w-1 h-2 bg-gold rounded-full animate-bounce" />
      </div>
      <span
        class="text-[9px] uppercase tracking-[0.25em] text-white/60 font-medium"
      >
        SCROLL TO EXPLORE
      </span>
    </div>
  </section>
</template>
