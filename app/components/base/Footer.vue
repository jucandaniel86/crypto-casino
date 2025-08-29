<script setup lang="ts">
const { name } = useDisplay()
const layoutClass = computed(() => `footer-layout-${name.value}`)
const lang = ref('English')
watch(name, () => {
  console.log(name.value)
})
</script>
<template>
  <v-footer class="w-100 flex-column">
    <v-container>
      <div :class="layoutClass">
        <div class="links">
          <h2 class="f-title">About</h2>
          <a href="#" class="f-link">Terms & Conditions</a>
          <a href="#" class="f-link">AML Policy</a>
          <a href="#" class="f-link">Privacy Policy</a>
          <a href="#" class="f-link">Responsible Gambling</a>
          <a href="#" class="f-link">Affiliates</a>
        </div>
        <div class="links">
          <h2 class="f-title">Casino</h2>
          <a href="#" class="f-link">Casino</a>
          <a href="#" class="f-link">Promotions</a>
          <a href="#" class="f-link">Bonus Terms & Conditions</a>
        </div>
        <div class="links">
          <h2 class="f-title">Sports</h2>
          <a href="#" class="f-link">Casino</a>
          <a href="#" class="f-link">Promotions</a>
          <a href="#" class="f-link">Bonus Terms & Conditions</a>
        </div>
        <div>
          <v-select
            v-model="lang"
            :items="['English', 'Spanish', 'Italiano']"
            max-width="120"
            height="35"
            hide-details
            density="compact"
          />
        </div>
      </div>
      <div class="footer-contact mt-4 pt-4 pb-4 pl-5 pr-5">
        <div class="d-flex justify-space-between align-center mb-10">
          <h3>Get in touch</h3>
          <div class="d-flex ga-2">
            <icon-x class="social-icons" />
            <icon-telegram class="social-icons" />
            <icon-discord class="social-icons" />
          </div>
        </div>
        <v-row no-gutters>
          <v-col>
            <div class="contact-details">
              <p>Support</p>
              <p>support@coincasino.com</p>
            </div>
          </v-col>
          <v-col>
            <div class="contact-details">
              <p>Affiliates</p>
              <p>affiliates@coincasino.com</p>
            </div>
          </v-col>
          <v-col>
            <div class="contact-details">
              <p>Complaints</p>
              <p>complaints@coincasino.com</p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <div class="footer-disclaimer mt-3">
      <v-container>
        <div class="d-flex justify-space-between align-center">
          <p class="copyright">
            © {{ new Date().getFullYear() }} coincasino.com | All Rights Reserved.
          </p>
          <div class="d-flex ga-2 align-center">
            <icon18-plus />
            <icon-responsible />
          </div>
        </div>
        <p class="disclaimer mt-4">
          Coincasino.com is owned and operated by Igloo Ventures SRL. Registration number:
          3-102-880024, registered address: San Jose, Cedula Juridica, Costa Rica. Coincasino.com is
          licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of
          Comoros and operates under License No. ALSI-142311005-FI2. Coincasino.com has passed all
          regulatory compliance and is legally authorized to conduct gaming operations for any and
          all games of chance and wagering.
        </p>
      </v-container>
    </div>
  </v-footer>
</template>
