<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue';
import AppFooter from '~/components/layout/AppFooter.vue';

useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>

<template>
  <div
    class="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-gold selection:text-dark-950 font-sans antialiased"
  >
    <AppHeader />
    <main class="flex-grow pt-[68px] sm:pt-[76px]">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
