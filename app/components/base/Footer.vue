<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '~/core/store/app'

const { name } = useDisplay()
const appStore = useAppStore()
const { t } = useI18n()
const router = useRouter()

const { currentLanguage } = storeToRefs(appStore)
const langOptions = [
  { title: 'English', value: 'en' },
  { title: 'Română', value: 'ro' },
]

const isDesktop = computed(() => ['lg', 'md', 'xl'].indexOf(name.value) !== -1)

//methods
const goTo = (link: string) => {
  router.push(link)
}
</script>
<template>
  <v-footer class="w-100 flex-column" :class="{ desktop: isDesktop }">
    <v-container>
      <v-row>
        <v-col md="4" cols="6">
          <div class="links">
            <h2 class="f-title">{{ t('footer.about') }}</h2>
            <a href="#" class="f-link" @click.prevent="goTo('terms-and-conditions')">{{
              t('footer.terms')
            }}</a>
            <a href="#" class="f-link" @click.prevent="goTo('privacy-policy')">{{
              t('footer.privacy')
            }}</a>
            <a href="#" class="f-link" @click.prevent="goTo('responsible-gambling')">{{
              t('footer.responsible')
            }}</a>
          </div>
        </v-col>
        <v-col md="4" cols="6">
          <div class="links">
            <h2 class="f-title">{{ t('footer.casino') }}</h2>
            <a href="#" class="f-link" @click.prevent="goTo('casino')">{{ t('footer.casino') }}</a>
            <a href="#" class="f-link" @click.prevent="goTo('promotions')">{{
              t('footer.promo')
            }}</a>
            <a href="#" class="f-link" @click.prevent="goTo('bonus-terms-conditions')">{{
              t('footer.bonus')
            }}</a>
          </div>
        </v-col>
        <v-col md="4" cols="12">
          <v-select
            v-model="currentLanguage"
            :items="langOptions"
            max-width="120"
            height="35"
            hide-details
            density="compact"
            item-title="title"
            item-value="value"
            @update:model-value="appStore.setCurrentLanguage"
          />
        </v-col>
      </v-row>

      <div class="footer-contact mt-4 pt-4 pb-4 pl-5 pr-5">
        <div class="d-flex justify-space-between align-center mb-10">
          <h3>{{ t('footer.get') }}</h3>
          <div class="d-flex ga-2">
            <icon-x class="social-icons" />
            <icon-telegram class="social-icons" />
            <icon-discord class="social-icons" />
          </div>
        </div>
        <v-row no-gutters>
          <v-col>
            <div class="contact-details">
              <p>{{ t('footer.support') }}</p>
              <p>support@coincasino.com</p>
            </div>
          </v-col>
          <v-col>
            <div class="contact-details">
              <p>{{ t('footer.affiliates') }}</p>
              <p>affiliates@coincasino.com</p>
            </div>
          </v-col>
          <v-col>
            <div class="contact-details">
              <p>{{ t('footer.complaints') }}</p>
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
            © {{ new Date().getFullYear() }} joci.ro | {{ t('footer.allRights') }}
          </p>
          <div class="d-flex ga-2 align-center">
            <icon18-plus />
            <icon-responsible />
          </div>
        </div>
        <p class="disclaimer mt-4">
          {{ t('footer.disclaimer') }}
        </p>
      </v-container>
    </div>
  </v-footer>
</template>
