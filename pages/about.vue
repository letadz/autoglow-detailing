<script setup lang="ts">
import CTASection from '~/components/home/CTASection.vue';

useSeoMeta({
  title: 'About Us — Passion For Perfection — AutoGlow Detailing',
  description:
    'Learn about our philosophy, history, and obsessive attention to detail at AutoGlow Detailing.',
  ogTitle: 'Passion For Perfection — AutoGlow Detailing Atelier',
  ogDescription:
    'Founded by connoisseurs for collectors. Master automotive detailing and paint preservation.',
  ogImage: '/images/about/about-studio.webp',
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <UiSectionHeading
          eyebrow="ABOUT OUR ATELIER"
          title="PASSION FOR"
          highlight="PERFECTION."
          align="center"
          size="xl"
          description="AutoGlow was born out of a relentless dissatisfaction with conveyor-belt car washes and hasty high-volume detailing shops. We believe true automotive beauty requires patience, chemistry, and obsessive focus."
        />
      </div>
    </section>

    <!-- Section 1: Our Story -->
    <section class="py-20 md:py-28 bg-[#111111] border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          <div class="lg:col-span-6">
            <span
              class="text-xs font-mono font-bold text-gold uppercase tracking-ultra-wide block mb-3"
            >
              CHAPTER I
            </span>
            <h2
              class="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight"
            >
              OUR STORY.
            </h2>
            <div
              class="mt-6 space-y-4 text-white/70 text-sm sm:text-base font-light leading-relaxed"
            >
              <p>
                Founded over a decade ago by master detailer Marcus Vance,
                AutoGlow began in a modest garage with a solitary rotary buffer
                and an unyielding commitment: never let a vehicle leave until
                the paint reflects like liquid glass.
              </p>
              <p>
                As exotic car collections expanded and factory clear coats
                became progressively softer and more delicate, the industry
                responded with cheap quick-wax fillers that masked damage
                temporarily. Marcus took the opposite path—mastering paint
                leveling physics, measuring microscopic microns, and testing
                European ceramic formulas.
              </p>
              <p>
                Today, AutoGlow stands as an elite studio servicing
                international collectors, exotic rallies, and discerning owners
                who demand absolute perfection for their prized machinery.
              </p>
            </div>
          </div>

          <div class="lg:col-span-6 relative">
            <div
              class="relative bg-[#161616] border border-white/10 overflow-hidden shadow-2xl"
            >
              <NuxtImg
                src="/images/about/about-professional.webp"
                alt="Master Detailer Marcus Vance at AutoGlow"
                class="w-full h-[400px] sm:h-[480px] object-cover filter brightness-[0.85]"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"
              />
              <div
                class="absolute bottom-6 left-6 right-6 p-4 bg-[#0A0A0A]/80 border border-white/10 backdrop-blur-md"
              >
                <span
                  class="text-gold text-[11px] font-mono uppercase tracking-widest block"
                >
                  MARCUS VANCE
                </span>
                <span class="text-white/60 text-xs">
                  Founder & Master Detailing Director
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Our Mission -->
    <section class="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          <div class="lg:col-span-6 order-2 lg:order-1 relative">
            <div
              class="relative bg-[#161616] border border-white/10 overflow-hidden shadow-2xl"
            >
              <NuxtImg
                src="/images/about/about-studio.webp"
                alt="AutoGlow Detailing Climate Controlled Studio"
                class="w-full h-[400px] sm:h-[480px] object-cover filter brightness-[0.85]"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"
              />
              <div
                class="absolute bottom-6 left-6 right-6 p-4 bg-[#0A0A0A]/80 border border-white/10 backdrop-blur-md"
              >
                <span
                  class="text-gold text-[11px] font-mono uppercase tracking-widest block"
                >
                  THE BEVERLY HILLS ATELIER
                </span>
                <span class="text-white/60 text-xs">
                  HEPA-Filtered, Dust-Controlled Environment
                </span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 order-1 lg:order-2">
            <span
              class="text-xs font-mono font-bold text-gold uppercase tracking-ultra-wide block mb-3"
            >
              CHAPTER II
            </span>
            <h2
              class="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight"
            >
              OUR MISSION.
            </h2>
            <div
              class="mt-6 space-y-4 text-white/70 text-sm sm:text-base font-light leading-relaxed"
            >
              <p>
                Our mission is simple: to restore, elevate, and preserve the
                original intent of automotive designers and engineers.
              </p>
              <p>
                When a supercar leaves Maranello, Stuttgart, or Goodwood, its
                sculpted lines represent hundreds of hours of aerodynamic and
                aesthetic styling. Our purpose is to remove every haze, swirl,
                and road mark that obscures those lines, locking in a permanent,
                diamond-hard shield that resists the elements for years to come.
              </p>
            </div>

            <!-- Core Values -->
            <div class="mt-8 space-y-4">
              <div
                class="p-4 bg-[#161616] border border-white/5 flex items-start gap-4"
              >
                <span class="text-gold font-mono font-bold text-sm">01</span>
                <div>
                  <h4
                    class="text-white text-xs uppercase tracking-wider font-semibold"
                  >
                    Integrity Over Volume
                  </h4>
                  <p class="text-white/60 text-xs mt-1">
                    We book only two vehicles concurrently to ensure every
                    detail receives undivided craftsmanship.
                  </p>
                </div>
              </div>
              <div
                class="p-4 bg-[#161616] border border-white/5 flex items-start gap-4"
              >
                <span class="text-gold font-mono font-bold text-sm">02</span>
                <div>
                  <h4
                    class="text-white text-xs uppercase tracking-wider font-semibold"
                  >
                    Scientific Rigor
                  </h4>
                  <p class="text-white/60 text-xs mt-1">
                    Digital paint depth gauges, humidity-controlled curing
                    rooms, and certified chemical compounds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Why We Care About Details -->
    <section class="py-20 md:py-28 bg-[#111111] border-b border-white/10">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          class="text-xs font-mono font-bold text-gold uppercase tracking-ultra-wide block mb-3"
        >
          CHAPTER III
        </span>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight"
        >
          WHY WE CARE ABOUT DETAILS.
        </h2>
        <p
          class="mt-6 text-base sm:text-lg text-white/70 font-light leading-relaxed"
        >
          Because in automotive preservation, the difference between "clean" and
          "breathtaking" lies in the fraction of a millimeter. It is the
          contrast between clean wheels and wheel barrels ceramic coated to
          repel hot brake dust. It is the distinction between synthetic silicone
          dressing and pure pH-neutral matte leather nourishment.
        </p>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div class="p-6 bg-[#161616] border border-white/5">
            <span class="text-gold text-2xl font-mono block mb-2">99%</span>
            <h3 class="text-white text-sm uppercase font-bold tracking-wider">
              Defect Removal
            </h3>
            <p class="text-white/60 text-xs mt-2 leading-relaxed">
              Microscopic scratch leveling that produces flawless depth without
              compromising paint longevity.
            </p>
          </div>
          <div class="p-6 bg-[#161616] border border-white/5">
            <span class="text-gold text-2xl font-mono block mb-2">1,200+</span>
            <h3 class="text-white text-sm uppercase font-bold tracking-wider">
              Hours of Training
            </h3>
            <p class="text-white/60 text-xs mt-2 leading-relaxed">
              All specialists are IDA certified and retrained annually on
              emerging exotic paint technologies.
            </p>
          </div>
          <div class="p-6 bg-[#161616] border border-white/5">
            <span class="text-gold text-2xl font-mono block mb-2">5-Year</span>
            <h3 class="text-white text-sm uppercase font-bold tracking-wider">
              Written Warranty
            </h3>
            <p class="text-white/60 text-xs mt-2 leading-relaxed">
              Guaranteed ceramic gloss retention and hydrophobic durability
              registered with Carfax.
            </p>
          </div>
        </div>

        <div class="mt-14">
          <UiBaseButton
            to="/contact"
            variant="primary"
            size="lg"
          >
            SCHEDULE A STUDIO CONSULTATION
          </UiBaseButton>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <CTASection />
  </div>
</template>
