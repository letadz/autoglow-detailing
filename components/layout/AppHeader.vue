<script setup lang="ts">
const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 20;
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (typeof document !== 'undefined') {
    isMobileMenuOpen.value
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }
};

// Close mobile menu on route change
watch(
  () => route.path,
  () => {
    closeMobileMenu();
  },
);

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('keydown', handleKeyDown);
  handleScroll();
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = '';
  }
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
        : 'bg-[#0A0A0A]/60 backdrop-blur-sm border-b border-white/5 py-5',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center gap-2.5 group focus:outline-none"
          aria-label="AutoGlow Detailing Home"
        >
          <!-- Stylized Sparkle Icon -->
          <div class="text-gold flex items-center justify-center">
            <svg
              class="w-6 h-6 text-gold"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
              />
              <path
                d="M19 15L19.9 18.1L23 19L19.9 19.9L19 23L18.1 19.9L15 19L18.1 18.1L19 15Z"
                opacity="0.8"
              />
            </svg>
          </div>
          <div class="flex flex-col">
            <span
              class="font-extrabold tracking-[0.18em] text-white text-base sm:text-lg uppercase leading-tight"
            >
              AUTOGLOW
            </span>
            <span
              class="text-[9px] uppercase tracking-[0.35em] text-gold font-semibold leading-none"
            >
              DETAILING
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav
          class="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            :class="[
              'text-xs tracking-wider uppercase font-medium transition-all duration-300 py-1 relative group focus:outline-none',
              route.path === link.path
                ? 'text-white font-semibold'
                : 'text-white/70 hover:text-white',
            ]"
          >
            {{ link.name }}
            <span
              :class="[
                'absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300',
                route.path === link.path ? 'w-full' : 'w-0 group-hover:w-full',
              ]"
            />
          </NuxtLink>
        </nav>

        <!-- Desktop Action Button (Gold outlined box) -->
        <div class="hidden md:flex items-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-5 py-2 text-xs uppercase font-bold tracking-widest text-gold border border-gold hover:bg-gold hover:text-black transition-all duration-300 focus:outline-none"
          >
            BOOK NOW
          </NuxtLink>
        </div>

        <!-- Mobile Menu Trigger -->
        <div class="flex items-center gap-3 md:hidden">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-3 py-1.5 text-[11px] uppercase font-bold tracking-wider text-gold border border-gold hover:bg-gold hover:text-black transition-all"
          >
            BOOK NOW
          </NuxtLink>
          <button
            type="button"
            class="w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-gold bg-[#161616] border border-white/10"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle Navigation Menu"
            @click="toggleMobileMenu"
          >
            <span
              :class="[
                'w-5 h-0.5 bg-white transition-all duration-300',
                isMobileMenuOpen ? 'rotate-45 translate-y-2 !bg-gold' : '',
              ]"
            />
            <span
              :class="[
                'w-5 h-0.5 bg-white transition-all duration-300',
                isMobileMenuOpen ? 'opacity-0' : '',
              ]"
            />
            <span
              :class="[
                'w-5 h-0.5 bg-white transition-all duration-300',
                isMobileMenuOpen ? '-rotate-45 -translate-y-2 !bg-gold' : '',
              ]"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Slide-Down Drawer Navigation -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-[#0A0A0A]/98 backdrop-blur-xl border-t border-white/10 z-40 overflow-y-auto flex flex-col justify-between p-6"
        >
          <div class="flex flex-col space-y-6 pt-4">
            <NuxtLink
              v-for="(link, idx) in navLinks"
              :key="link.path"
              :to="link.path"
              :class="[
                'text-lg uppercase tracking-widest font-semibold flex items-center justify-between py-3 border-b border-white/5 transition-colors',
                route.path === link.path
                  ? 'text-gold'
                  : 'text-white/80 hover:text-white',
              ]"
              @click="closeMobileMenu"
            >
              <span>{{ link.name }}</span>
              <span class="text-xs text-white/30 font-mono">
                0{{ idx + 1 }}
              </span>
            </NuxtLink>
          </div>

          <div class="pt-8 pb-4 flex flex-col gap-4">
            <UiBaseButton
              to="/contact"
              variant="primary"
              size="lg"
              block
              @click="closeMobileMenu"
            >
              Book An Appointment
            </UiBaseButton>
            <div
              class="flex justify-center items-center gap-6 pt-4 text-xs text-white/50 tracking-wider"
            >
              <span>+63 912 345 6789</span>
              <span>•</span>
              <span>STUDIO MON–SAT</span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>
