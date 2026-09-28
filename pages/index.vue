<script setup lang="ts">
import HeroSection from '~/components/home/HeroSection.vue';
import TrustBar from '~/components/home/TrustBar.vue';
import AboutSection from '~/components/home/AboutSection.vue';
import ServicesSection from '~/components/home/ServicesSection.vue';
import WhyChooseUs from '~/components/home/WhyChooseUs.vue';
import HowItWorks from '~/components/home/HowItWorks.vue';
import BeforeAfterSection from '~/components/home/BeforeAfterSection.vue';
import GalleryPreview from '~/components/home/GalleryPreview.vue';
import TestimonialsSection from '~/components/home/TestimonialsSection.vue';
import CTASection from '~/components/home/CTASection.vue';

useSeoMeta({
  title: 'AutoGlow Detailing — Premium Auto Detailing & Showroom Shine',
  description:
    'Professional detailing and paint protection services designed to restore and protect your vehicle. Bring back your car’s showroom shine.',
  ogTitle: 'AutoGlow Detailing — Bring Back Your Car’s Showroom Shine',
  ogDescription:
    'Professional detailing, ceramic coating, and paint protection in Quezon City.',
  ogImage: '/images/hero/hero-car.webp',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div class="overflow-hidden bg-[#0A0A0A]">
    <HeroSection />
    <TrustBar />
    <AboutSection />
    <ServicesSection />
    <WhyChooseUs />
    <HowItWorks />
    <BeforeAfterSection />
    <GalleryPreview />
    <TestimonialsSection />
    <CTASection />
  </div>
</template>
