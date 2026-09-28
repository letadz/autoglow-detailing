<template>
  <footer
    class="bg-[#0A0A0A] border-t border-white/10 text-white/70 pt-16 pb-10"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 4 Columns Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-white/10"
      >
        <!-- Col 1: Brand & Socials -->
        <div class="space-y-4">
          <!-- Logo -->
          <NuxtLink
            to="/"
            class="flex items-center gap-2.5 w-fit focus:outline-none"
            aria-label="AutoGlow Detailing Home"
          >
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
                class="font-extrabold tracking-[0.18em] text-white text-base uppercase leading-tight"
              >
                AUTOGLOW
              </span>
              <span
                class="text-[8px] uppercase tracking-[0.35em] text-gold font-semibold leading-none"
              >
                DETAILING
              </span>
            </div>
          </NuxtLink>

          <p class="text-xs text-white/60 font-light pt-1">
            Premium care. Exceptional shine.
          </p>

          <!-- Social Icons -->
          <div class="flex items-center gap-3 pt-2">
            <!-- Instagram -->
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors"
              aria-label="Instagram"
            >
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line
                  x1="17.5"
                  y1="6.5"
                  x2="17.51"
                  y2="6.5"
                />
              </svg>
            </a>

            <!-- Facebook -->
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors"
              aria-label="Facebook"
            >
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                />
              </svg>
            </a>

            <!-- YouTube -->
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors"
              aria-label="YouTube"
            >
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                />
                <polygon
                  points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Col 2: Services -->
        <div>
          <h3
            class="text-xs uppercase tracking-wider font-bold text-white mb-4"
          >
            SERVICES
          </h3>
          <ul class="space-y-2 text-xs text-white/60 font-light">
            <li>
              <NuxtLink
                to="/services#exterior-detailing"
                class="hover:text-gold transition-colors"
              >
                Exterior Detailing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services#interior-detailing"
                class="hover:text-gold transition-colors"
              >
                Interior Detailing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services#ceramic-coating"
                class="hover:text-gold transition-colors"
              >
                Ceramic Coating
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services#paint-correction"
                class="hover:text-gold transition-colors"
              >
                Paint Correction
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services"
                class="hover:text-gold transition-colors"
              >
                Maintenance Wash
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Contact -->
        <div>
          <h3
            class="text-xs uppercase tracking-wider font-bold text-white mb-4"
          >
            CONTACT
          </h3>
          <ul class="space-y-2.5 text-xs text-white/60 font-light">
            <li class="flex items-center gap-2">
              <svg
                class="w-4 h-4 text-gold flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <a
                href="phone:09123456789"
                class="hover:text-gold transition-colors"
              >
                0912 345 6789
              </a>
            </li>
            <li class="flex items-center gap-2">
              <svg
                class="w-4 h-4 text-gold flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a
                href="mailto:hello@autoglow.com"
                class="hover:text-gold transition-colors"
              >
                hello@autoglow.com
              </a>
            </li>
            <li class="flex items-start gap-2">
              <svg
                class="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                />
              </svg>
              <span>123 Detailing Street, Quezon City, Philippines</span>
            </li>
          </ul>
        </div>

        <!-- Col 4: Hours -->
        <div>
          <h3
            class="text-xs uppercase tracking-wider font-bold text-white mb-4"
          >
            HOURS
          </h3>
          <div class="space-y-3 text-xs text-white/60 font-light">
            <div>
              <span class="block text-white font-medium">
                Monday - Saturday
              </span>
              <span>8:00 AM - 6:00 PM</span>
            </div>
            <div>
              <span class="block text-white font-medium">Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40"
      >
        <p>&copy; 2024 AutoGlow Detailing. All rights reserved.</p>

        <div class="flex items-center gap-6">
          <NuxtLink
            to="/privacy"
            class="hover:text-white transition-colors"
          >
            Privacy Policy
          </NuxtLink>
          <NuxtLink
            to="/terms"
            class="hover:text-white transition-colors"
          >
            Terms of Service
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
