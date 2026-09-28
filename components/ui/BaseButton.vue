<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  block: false,
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-xs tracking-wider';
    case 'lg':
      return 'px-8 py-4 text-sm md:text-base tracking-widest';
    case 'md':
    default:
      return 'px-6 py-3 text-xs md:text-sm tracking-wider';
  }
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-[#161616] text-white border border-white/15 hover:border-gold/60 hover:bg-[#1f1f1f] hover:text-gold transition-all duration-300';
    case 'outline':
      return 'bg-transparent text-gold border border-gold/70 hover:bg-gold hover:text-dark-950 transition-all duration-300 shadow-sm hover:shadow-gold-glow';
    case 'ghost':
      return 'bg-transparent text-white/80 hover:text-gold hover:bg-white/5 transition-all duration-300';
    case 'primary':
    default:
      return 'bg-gold text-dark-950 font-bold hover:bg-gold-light transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg active:scale-[0.98]';
  }
});
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="[
      'inline-flex items-center justify-center font-medium uppercase transition-all duration-300 select-none rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950',
      sizeClasses,
      variantClasses,
      block ? 'w-full' : '',
      disabled || loading ? 'opacity-50 pointer-events-none' : '',
    ]"
  >
    <span
      v-if="loading"
      class="mr-2 inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
    />
    <slot />
  </NuxtLink>

  <a
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="[
      'inline-flex items-center justify-center font-medium uppercase transition-all duration-300 select-none rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950',
      sizeClasses,
      variantClasses,
      block ? 'w-full' : '',
      disabled || loading ? 'opacity-50 pointer-events-none' : '',
    ]"
  >
    <span
      v-if="loading"
      class="mr-2 inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
    />
    <slot />
  </a>

  <button
    v-else
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center font-medium uppercase transition-all duration-300 select-none rounded-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950',
      sizeClasses,
      variantClasses,
      block ? 'w-full' : '',
      disabled || loading ? 'opacity-50 cursor-not-allowed' : '',
    ]"
  >
    <span
      v-if="loading"
      class="mr-2 inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
    />
    <slot />
  </button>
</template>
