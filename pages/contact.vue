<script setup lang="ts">
const route = useRoute();

useSeoMeta({
  title: 'Contact & Private Bookings — AutoGlow Detailing',
  description:
    'Book an appointment or request a custom quote for luxury detailing, paint correction, and ceramic coatings.',
  ogTitle: "Let's Make Your Car Glow — AutoGlow Detailing",
  ogDescription:
    'Contact our Beverly Hills studio for private bookings and vehicle consultations.',
});

const serviceOptions = [
  'Exterior Detailing',
  'Interior Detailing',
  'Ceramic Coating',
  'Paint Correction',
];

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
});

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
});

const isSubmitting = ref(false);
const isSuccess = ref(false);

// Pre-fill service from query param if available
onMounted(() => {
  const queryService = route.query.service as string;
  if (queryService && serviceOptions.includes(queryService)) {
    form.service = queryService;
  }
});

const validate = () => {
  let valid = true;
  errors.name = '';
  errors.email = '';
  errors.phone = '';
  errors.service = '';
  errors.message = '';

  if (!form.name.trim()) {
    errors.name = 'Please enter your full name.';
    valid = false;
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.';
    valid = false;
  }

  if (!form.phone.trim()) {
    errors.phone = 'Please enter your contact phone number.';
    valid = false;
  }

  if (!form.service) {
    errors.service = 'Please select a service of interest.';
    valid = false;
  }

  return valid;
};

const handleSubmit = async () => {
  if (!validate()) return;

  isSubmitting.value = true;

  try {
    // Simulated API call - structured for easy backend integration later
    await new Promise((resolve) => setTimeout(resolve, 1400));

    // Form submission success
    isSuccess.value = true;
    form.name = '';
    form.email = '';
    form.phone = '';
    form.service = '';
    form.message = '';
  } catch (err) {
    console.error('Submission error:', err);
  } finally {
    isSubmitting.value = false;
  }
};

const resetForm = () => {
  isSuccess.value = false;
};
</script>

<template>
  <div>
    <!-- Hero Header -->
    <section
      class="py-20 md:py-28 bg-[#0A0A0A] border-b border-white/10 relative"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <UiSectionHeading
          eyebrow="RESERVATIONS & INQUIRIES"
          title="LET'S MAKE YOUR"
          highlight="CAR GLOW."
          align="center"
          size="xl"
          description="Schedule a private studio consultation or reserve your detailing date. We accommodate exotic sports cars, high-end sedans, and collector classics."
        />
      </div>
    </section>

    <!-- Content: Info & Form Grid -->
    <section class="py-20 md:py-28 bg-[#111111] border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <!-- Left Column: Contact Details (5 cols) -->
          <div class="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <span
                class="text-xs font-mono font-bold text-gold uppercase tracking-ultra-wide block mb-3"
              >
                DIRECT CONCIERGE
              </span>
              <h2
                class="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight"
              >
                STUDIO INFORMATION.
              </h2>
              <p class="mt-4 text-white/60 text-sm font-light leading-relaxed">
                Our atelier is located in Beverly Hills, equipped with
                state-of-the-art climate-controlled detailing bays, high-CRI
                inspection lights, and enclosed transport pickup.
              </p>

              <!-- Info Cards -->
              <div class="mt-8 space-y-5">
                <!-- Phone -->
                <div
                  class="p-5 bg-[#161616] border border-white/10 flex items-start gap-4"
                >
                  <div
                    class="w-10 h-10 bg-gold/10 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.8"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span
                      class="text-[10px] uppercase tracking-wider text-white/40 block font-mono"
                    >
                      Mobile Phone:
                    </span>
                    <a
                      href="phone:+639123456789"
                      class="text-white hover:text-gold transition-colors font-medium text-sm"
                    >
                      +63 912 345 6789
                    </a>
                  </div>
                </div>

                <!-- Email -->
                <div
                  class="p-5 bg-[#161616] border border-white/10 flex items-start gap-4"
                >
                  <div
                    class="w-10 h-10 bg-gold/10 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.8"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span
                      class="text-[10px] uppercase tracking-wider text-white/40 block font-mono"
                    >
                      Direct Email:
                    </span>
                    <a
                      href="mailto:concierge@autoglowdetailing.com"
                      class="text-white hover:text-gold transition-colors font-medium text-sm"
                    >
                      concierge@autoglowdetailing.com
                    </a>
                  </div>
                </div>

                <!-- Location -->
                <div
                  class="p-5 bg-[#161616] border border-white/10 flex items-start gap-4"
                >
                  <div
                    class="w-10 h-10 bg-gold/10 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.8"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.8"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span
                      class="text-[10px] uppercase tracking-wider text-white/40 block font-mono"
                    >
                      Atelier Address:
                    </span>
                    <p class="text-white text-sm font-medium">
                      1088 Automotive Way, Suite 400
                      <br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>

                <!-- Business Hours -->
                <div
                  class="p-5 bg-[#161616] border border-white/10 flex items-start gap-4"
                >
                  <div
                    class="w-10 h-10 bg-gold/10 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.8"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span
                      class="text-[10px] uppercase tracking-wider text-white/40 block font-mono"
                    >
                      Operating Hours:
                    </span>
                    <p class="text-white text-sm">
                      Monday – Saturday: 8:00 AM – 6:30 PM
                      <br />
                      <span class="text-gold text-xs">
                        Sunday: Private VIP Consultations Only
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Assurance -->
            <div class="p-4 bg-dark-950 border border-gold/30">
              <span
                class="text-xs uppercase tracking-wider font-bold text-gold block"
              >
                Enclosed Transporter Available
              </span>
              <p class="text-xs text-white/60 mt-1">
                Complimentary white-glove enclosed vehicle pickup and delivery
                within the greater metropolitan area.
              </p>
            </div>
          </div>

          <!-- Right Column: Interactive Booking Form (7 cols) -->
          <div class="lg:col-span-7">
            <div
              class="bg-[#161616] border border-white/10 p-8 sm:p-10 relative shadow-2xl"
            >
              <!-- Success State View -->
              <div
                v-if="isSuccess"
                class="py-12 text-center"
              >
                <div
                  class="w-16 h-16 bg-gold/20 border-2 border-gold mx-auto flex items-center justify-center text-gold mb-6"
                >
                  <svg
                    class="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3
                  class="text-2xl font-black uppercase text-white tracking-tight"
                >
                  APPOINTMENT INQUIRY RECEIVED
                </h3>
                <p
                  class="mt-3 text-sm text-white/70 max-w-md mx-auto leading-relaxed"
                >
                  Thank you for entrusting AutoGlow. A concierge specialist will
                  review your vehicle requirements and contact you within 2
                  business hours.
                </p>
                <div class="mt-8">
                  <UiBaseButton
                    variant="outline"
                    size="sm"
                    @click="resetForm"
                  >
                    SEND ANOTHER INQUIRY
                  </UiBaseButton>
                </div>
              </div>

              <!-- Form State View -->
              <form
                v-else
                @submit.prevent="handleSubmit"
                novalidate
                class="space-y-6"
              >
                <div>
                  <h3
                    class="text-xl font-bold uppercase text-white tracking-tight"
                  >
                    REQUEST AN APPOINTMENT
                  </h3>
                  <p class="text-xs text-white/50 mt-1">
                    Fill out the specifications below and our concierge will
                    verify bay availability.
                  </p>
                </div>

                <!-- Name Field -->
                <div>
                  <label
                    for="name"
                    class="block text-xs uppercase tracking-wider text-white/80 font-medium mb-2"
                  >
                    Full Name
                    <span class="text-gold">*</span>
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    autocomplete="name"
                    placeholder="Marcus Vance"
                    :class="[
                      'w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors rounded-none',
                      errors.name
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-white/15 focus:border-gold',
                    ]"
                  />
                  <p
                    v-if="errors.name"
                    class="mt-1.5 text-xs text-red-400"
                  >
                    {{ errors.name }}
                  </p>
                </div>

                <!-- Email & Phone Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <!-- Email Field -->
                  <div>
                    <label
                      for="email"
                      class="block text-xs uppercase tracking-wider text-white/80 font-medium mb-2"
                    >
                      Email Address
                      <span class="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      autocomplete="email"
                      placeholder="marcus@example.com"
                      :class="[
                        'w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors rounded-none',
                        errors.email
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-white/15 focus:border-gold',
                      ]"
                    />
                    <p
                      v-if="errors.email"
                      class="mt-1.5 text-xs text-red-400"
                    >
                      {{ errors.email }}
                    </p>
                  </div>

                  <!-- Phone Field -->
                  <div>
                    <label
                      for="phone"
                      class="block text-xs uppercase tracking-wider text-white/80 font-medium mb-2"
                    >
                      Phone Number
                      <span class="text-gold">*</span>
                    </label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      autocomplete="tel"
                      placeholder="+63 912 345 6789"
                      :class="[
                        'w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors rounded-none',
                        errors.phone
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-white/15 focus:border-gold',
                      ]"
                    />
                    <p
                      v-if="errors.phone"
                      class="mt-1.5 text-xs text-red-400"
                    >
                      {{ errors.phone }}
                    </p>
                  </div>
                </div>

                <!-- Service Select -->
                <div>
                  <label
                    for="service"
                    class="block text-xs uppercase tracking-wider text-white/80 font-medium mb-2"
                  >
                    Service of Interest
                    <span class="text-gold">*</span>
                  </label>
                  <select
                    id="service"
                    v-model="form.service"
                    :class="[
                      'w-full bg-[#0A0A0A] border px-4 py-3 text-sm text-white focus:outline-none transition-colors rounded-none appearance-none cursor-pointer',
                      errors.service
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-white/15 focus:border-gold',
                    ]"
                  >
                    <option
                      value=""
                      disabled
                      class="bg-[#0A0A0A] text-white/40"
                    >
                      Select treatment package...
                    </option>
                    <option
                      v-for="opt in serviceOptions"
                      :key="opt"
                      :value="opt"
                      class="bg-[#161616] text-white py-2"
                    >
                      {{ opt }}
                    </option>
                  </select>
                  <p
                    v-if="errors.service"
                    class="mt-1.5 text-xs text-red-400"
                  >
                    {{ errors.service }}
                  </p>
                </div>

                <!-- Message Field -->
                <div>
                  <label
                    for="message"
                    class="block text-xs uppercase tracking-wider text-white/80 font-medium mb-2"
                  >
                    Vehicle Year, Make, Model & Requirements
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="4"
                    placeholder="e.g. 2024 Porsche 911 GT3 in Shark Blue. Interested in 5-Year Ceramic Coating and single-stage swirl correction..."
                    class="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors rounded-none"
                  />
                </div>

                <!-- Submit Button -->
                <div>
                  <UiBaseButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    block
                    :loading="isSubmitting"
                  >
                    {{
                      isSubmitting
                        ? 'TRANSMITTING RESERVATION...'
                        : 'SUBMIT APPOINTMENT REQUEST'
                    }}
                  </UiBaseButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
