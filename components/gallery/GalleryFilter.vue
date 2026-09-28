<script setup lang="ts">
import { galleryCategories, type GalleryCategory } from '~/data/gallery';

interface Props {
  modelValue: GalleryCategory;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:modelValue', category: GalleryCategory): void;
}>();

const selectCategory = (cat: GalleryCategory) => {
  emit('update:modelValue', cat);
};
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-4">
    <button
      v-for="cat in galleryCategories"
      :key="cat"
      type="button"
      :class="[
        'px-4 sm:px-6 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none border focus:outline-none focus-visible:ring-1 focus-visible:ring-gold',
        props.modelValue === cat
          ? 'bg-gold text-dark-950 border-gold shadow-gold-glow font-bold'
          : 'bg-[#161616] text-white/70 border-white/10 hover:border-gold/50 hover:text-white',
      ]"
      @click="selectCategory(cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>
