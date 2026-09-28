<template>
  <section
    class="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        <!-- Left Content Column (5 cols) -->
        <div class="lg:col-span-5 flex flex-col items-start">
          <span
            class="text-gold text-xs sm:text-sm uppercase font-bold tracking-widest block mb-3"
          >
            ABOUT AUTOGLOW
          </span>

          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-[1.08]"
          >
            DETAILING BEYOND
            <br />
            THE SURFACE.
          </h2>

          <p
            class="mt-6 text-sm sm:text-base text-white/70 font-light leading-relaxed"
          >
            Your vehicle deserves more than a basic car wash. We combine
            professional techniques, premium products, and attention to every
            detail to deliver a showroom finish every time.
          </p>

          <div class="mt-8">
            <NuxtLink
              to="/about"
              class="inline-flex items-center gap-3 px-6 py-3 bg-[#111111] hover:bg-[#1A1A1A] text-white border border-white/20 hover:border-gold text-xs sm:text-sm uppercase font-bold tracking-wider transition-all duration-300 group"
            >
              <span>LEARN MORE</span>
              <span
                class="text-gold transform group-hover:translate-x-1 transition-transform duration-300"
              >
                →
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Image Column (7 cols) -->
        <div class="lg:col-span-7 relative">
          <div
            class="relative bg-[#111111] border border-white/10 overflow-hidden shadow-2xl group"
          >
            <NuxtImg
              src="/images/about/about-wash.webp"
              alt="AutoGlow Detailing Professional Foam & Water Cleansing"
              class="w-full h-[360px] sm:h-[440px] md:h-[480px] object-cover filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent opacity-60 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
