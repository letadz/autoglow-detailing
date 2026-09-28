<script setup lang="ts">
interface Props {
  eyebrow?: string;
  title?: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  size?: 'md' | 'lg' | 'xl';
}

const props = withDefaults(defineProps<Props>(), {
  align: 'left',
  size: 'lg',
});
</script>

<template>
  <div
    :class="[
      'flex flex-col',
      align === 'center'
        ? 'items-center text-center mx-auto'
        : 'items-start text-left',
    ]"
  >
    <!-- Eyebrow -->
    <div
      v-if="eyebrow"
      class="flex items-center gap-2 mb-3"
    >
      <span class="w-5 h-[1.5px] bg-gold" />
      <span
        class="text-gold uppercase text-xs tracking-ultra-wide font-semibold"
      >
        {{ eyebrow }}
      </span>
      <span
        v-if="align === 'center'"
        class="w-5 h-[1.5px] bg-gold"
      />
    </div>

    <!-- Title -->
    <h2
      :class="[
        'uppercase font-black text-white leading-[1.08] tracking-tight',
        size === 'xl' ? 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl' : '',
        size === 'lg' ? 'text-3xl sm:text-4xl md:text-5xl' : '',
        size === 'md' ? 'text-2xl sm:text-3xl md:text-4xl' : '',
      ]"
    >
      <slot name="title">
        <template v-if="title">
          {{ title }}
          <span
            v-if="highlight"
            class="text-gold inline-block"
          >
            {{ highlight }}
          </span>
        </template>
      </slot>
    </h2>

    <!-- Description -->
    <p
      v-if="description || $slots.description"
      :class="[
        'mt-4 text-white/65 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light',
        align === 'center' ? 'mx-auto' : '',
      ]"
    >
      <slot name="description">
        {{ description }}
      </slot>
    </p>
  </div>
</template>
