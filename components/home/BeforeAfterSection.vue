<script setup lang="ts">
const sliderPosition = ref(50);
const isDragging = ref(false);
const containerRef = ref<HTMLElement | null>(null);

const updatePosition = (clientX: number) => {
  if (!containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  const offsetX = clientX - rect.left;
  const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
  sliderPosition.value = Math.round(percentage);
};

const onPointerDown = (event: PointerEvent) => {
  isDragging.value = true;
  (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  updatePosition(event.clientX);
};

const onPointerMove = (event: PointerEvent) => {
  if (!isDragging.value) return;
  updatePosition(event.clientX);
};

const onPointerUp = (event: PointerEvent) => {
  if (isDragging.value) {
    isDragging.value = false;
    try {
      (event.currentTarget as HTMLElement).releasePointerCapture(
        event.pointerId,
      );
    } catch {
      // ignore
    }
  }
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
          REAL RESULTS
        </span>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight"
        >
          SEE THE DIFFERENCE.
        </h2>
      </div>

      <!-- Before / After Slider Box -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Container -->
        <div
          ref="containerRef"
          class="relative h-[300px] sm:h-[440px] md:h-[500px] w-full select-none overflow-hidden bg-[#111111] border border-white/15 cursor-ew-resize touch-none shadow-2xl"
          role="region"
          aria-label="Before and after car detailing comparison slider"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
        >
          <!-- AFTER IMAGE (Background - Full) -->
          <NuxtImg
            src="/images/before-after/after.webp"
            alt="After Detailing - Flawless Gloss Finish"
            class="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            loading="lazy"
          />

          <!-- BEFORE IMAGE (Foreground - Clipped) -->
          <div
            class="absolute inset-0 overflow-hidden pointer-events-none select-none"
            :style="{ width: `${sliderPosition}%` }"
          >
            <div
              class="absolute inset-0 h-full pointer-events-none"
              :style="{
                width: containerRef ? `${containerRef.clientWidth}px` : '100vw',
              }"
            >
              <NuxtImg
                src="/images/before-after/before.webp"
                alt="Before Detailing - Scratches, Swirls & Oxidation"
                class="w-full h-full object-cover pointer-events-none select-none"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Vertical Divider Bar -->
          <div
            class="absolute top-0 bottom-0 w-[2px] bg-gold z-20 pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.8)]"
            :style="{ left: `${sliderPosition}%` }"
          >
            <!-- Center Circular Grab Handle with < > -->
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gold flex items-center justify-center text-black font-bold text-xs shadow-gold-glow pointer-events-none"
            >
              <div class="flex items-center gap-0.5">
                <span>‹</span>
                <span>›</span>
              </div>
            </div>
          </div>

          <!-- Badges -->
          <div class="absolute top-4 left-4 z-10 pointer-events-none">
            <span
              class="px-3.5 py-1 text-[11px] font-bold tracking-widest uppercase bg-black/70 text-white/90 border border-white/20 backdrop-blur-sm"
            >
              BEFORE
            </span>
          </div>
          <div class="absolute top-4 right-4 z-10 pointer-events-none">
            <span
              class="px-3.5 py-1 text-[11px] font-bold tracking-widest uppercase bg-black/70 text-white/90 border border-white/20 backdrop-blur-sm"
            >
              AFTER
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
