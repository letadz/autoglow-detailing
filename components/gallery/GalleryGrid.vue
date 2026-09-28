<script setup lang="ts">
import type { GalleryItem } from '~/data/gallery';

interface Props {
  items: GalleryItem[];
}

const props = defineProps<Props>();

let lightbox: any = null;

const initPhotoSwipe = async () => {
  if (import.meta.server) return;

  if (lightbox) {
    try {
      lightbox.destroy();
    } catch {
      // ignore
    }
    lightbox = null;
  }

  try {
    const PhotoSwipeLightbox = (await import('photoswipe/lightbox')).default;
    await import('photoswipe/style.css');

    lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery-grid',
      children: 'a.gallery-card',
      pswpModule: () => import('photoswipe'),
      showHideAnimationType: 'zoom',
      bgOpacity: 0.95,
      padding: { top: 20, bottom: 20, left: 20, right: 20 },
    });

    lightbox.init();
  } catch (error) {
    console.error('Failed to initialize PhotoSwipe:', error);
  }
};

onMounted(() => {
  nextTick(() => {
    initPhotoSwipe();
  });
});

// Reinitialize when items change (e.g. after filter change)
watch(
  () => props.items,
  () => {
    nextTick(() => {
      initPhotoSwipe();
    });
  },
);

onUnmounted(() => {
  if (lightbox) {
    try {
      lightbox.destroy();
    } catch {
      // ignore
    }
    lightbox = null;
  }
});
</script>

<template>
  <div>
    <!-- Grid -->
    <div
      id="gallery-grid"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      <a
        v-for="(item, index) in props.items"
        :key="item.id"
        :href="item.src"
        :data-pswp-src="item.src"
        :data-pswp-width="item.width"
        :data-pswp-height="item.height"
        target="_blank"
        rel="noopener noreferrer"
        class="gallery-card group relative aspect-[4/3] bg-[#161616] border border-white/10 hover:border-gold/50 overflow-hidden block transition-all duration-300 shadow-lg cursor-pointer"
        :aria-label="`View image ${item.title}`"
      >
        <!-- Background Image -->
        <NuxtImg
          :src="item.thumbnail || item.src"
          :alt="item.alt"
          class="w-full h-full object-cover filter brightness-[0.8] group-hover:scale-105 group-hover:brightness-95 transition-all duration-700 ease-out"
          loading="lazy"
        />

        <!-- Gradient Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"
        />

        <!-- Top Row Badges -->
        <div
          class="absolute top-4 left-4 right-4 flex items-center justify-between z-10"
        >
          <span
            class="text-[10px] uppercase font-mono font-bold tracking-widest text-gold px-2.5 py-1 bg-[#0A0A0A]/85 border border-gold/40 backdrop-blur-sm"
          >
            {{ item.category }}
          </span>
          <span
            class="font-mono text-xs text-white/50 bg-[#0A0A0A]/85 px-2 py-0.5 border border-white/10"
          >
            #{{ String(index + 1).padStart(2, '0') }}
          </span>
        </div>

        <!-- Bottom Details & View Interaction -->
        <div
          class="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end"
        >
          <h3
            class="text-base font-bold uppercase text-white group-hover:text-gold transition-colors leading-snug line-clamp-1"
          >
            {{ item.title }}
          </h3>
          <p class="text-xs text-white/60 font-light mt-1 line-clamp-2">
            {{ item.description }}
          </p>

          <div
            class="mt-3 flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity"
          >
            <svg
              class="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
            <span>View Full Image</span>
          </div>
        </div>
      </a>
    </div>

    <!-- Empty State Fallback -->
    <div
      v-if="props.items.length === 0"
      class="text-center py-20 bg-[#161616] border border-white/10 p-8"
    >
      <p class="text-white/60 text-sm">No vehicles found in this category.</p>
    </div>
  </div>
</template>
