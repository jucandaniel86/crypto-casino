<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import type { WalletT } from '~/core/types/Wallet'

const props = defineProps<{ currency: WalletT; backLabel: string }>()
const emitters = defineEmits(['onBack'])
const { convertCurrency } = useUtils()

const networkData = computed(() => {
  if (!props.currency.networkData) return []

  return Object.entries(props.currency.networkData).map((network: any) => network[1].name)
})

const network = ref('')

onMounted(() => {
  if (networkData.value.length) {
    network.value = networkData.value[0]
  }
})
</script>
<template>
  <div class="d-flex ga-2 flex-column">
    <div class="currency-page-back" @click="emitters('onBack')">
      <IconRightArrow class="svg-icon" />
      <span>{{ props.backLabel }}</span>
    </div>
    <div class="currency-page">
      <v-row class="w-100">
        <v-col v-if="networkData.length" cols="6">
          <div class="text-subtitle-1 text-white">Choose network*</div>
          <v-select
            v-model="network"
            :items="networkData"
            hide-details
            density="compact"
            single-line
          />
        </v-col>
        <v-col cols="12">
          <div class="currency-page-details">
            <div>
              <div class="fw-600">
                Minimum Deposit:
                {{ convertCurrency(props.currency.minAmount, 4) }}
                {{ props.currency.code }}
              </div>
              <ul>
                <li>
                  <p>
                    Please ensure that you enter the correct address corresponding to your chosen
                    network in the third party wallet.
                  </p>
                </li>
                <li>
                  <p>Values sent below the minimum deposit value will be lost.</p>
                </li>
              </ul>

              <div class="currency-page-wallet mt-2">
                0x4Ddb182191E9633DCdd8f3d2f72AbB415140219e
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="currency-page mt-2">
      <p class="w-100 text-left">Exchange Rate</p>
      <v-row no-gutters class="w-100">
        <v-col cols="5">
          <v-text-field density="compact" color="primary" value="3861,90" hide-details>
            <template #prepend-inner>
              <SharedIcon icon="currency-ico-eur" class="svg-icon" />
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="2" class="d-flex justify-center align-center">
          <p>=</p>
        </v-col>
        <v-col cols="5">
          <v-text-field density="compact" color="primary" value="1" hide-details>
            <template #prepend-inner>
              <SharedIcon
                :icon="`currency-ico-${props.currency.code.toLowerCase()}`"
                class="svg-icon"
              />
            </template>
          </v-text-field>
        </v-col>
      </v-row>

      <p>The value of ETH may change between now and the time we receive your payment.</p>
      <p>Average processing time 1 hour.</p>
    </div>
  </div>
</template>
