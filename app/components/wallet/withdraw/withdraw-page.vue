<script setup lang="ts">
import type { WalletT } from '~/core/types/Wallet'

//props
const props = defineProps<{ currency: WalletT; backLabel: string }>()

//models
const network = ref()
const receiveAddress = ref<string>('')
const amount = ref()
const eur = ref()
const loading = ref(false)
const errorMessage = ref('')

//composables
const { t } = useI18n()
const { convertCurrency } = useUtils()

//emitters
const emitters = defineEmits(['onBack'])

//computed
const networkData = computed(() => {
  if (!props.currency.networkData) return []

  return Object.entries(props.currency.networkData).map((network: any) => network[1].name)
})

//methods
const makeWithdrawRequest = async () => {
  loading.value = true
  const payload = {
    wallet_id: props.currency.wallet_id,
    to_address: receiveAddress.value,
    amount: String(amount.value),
    meta: {
      eur: eur.value,
    },
  }

  const { data, error } = await useApiPostFetch('/player/withdraw-requests', payload)
  console.log('data', data)
  errorMessage.value = ''
  if (error) {
    errorMessage.value = error.message
  }
  loading.value = false
}

const getRate = async (): Promise<void> => {
  const { data } = await useAPIFetch('/fx/rate', {
    currency: props.currency.code,
    fiat: 'EUR',
  })

  console.log(data)
}

//onMounted
onMounted(() => {
  getRate()
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
        <v-col cols="12" md="10" class="flex-start">
          <v-tooltip :text="t('wallets.withdraw_amount')" location="top" max-width="250">
            <template #activator="{ props }">
              <span v-bind="props">{{ t('wallets.withdraw_balance') }}</span>
              <v-icon v-bind="props" icon="mdi-help" size="sm" />
            </template>
          </v-tooltip>
          <span class="currency-page-amount">
            {{ convertCurrency(props.currency.available, props.currency.precision) }}
            {{ props.currency.code }}
          </span>
        </v-col>
        <v-col cols="12" md="2">
          <SharedIcon
            :icon="`currency-ico-${props.currency.code.toLowerCase()}`"
            :style="{ width: '50px', height: '50px' }"
          />
        </v-col>
      </v-row>
    </div>
    <div class="currency-page">
      <v-row>
        <v-col v-if="networkData.length" cols="12">
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
          <span>{{
            t('wallets.minAmount', {
              amount: `${convertCurrency(
                props.currency.minAmount,
                props.currency.precision,
              )} ${props.currency.code}`,
            })
          }}</span>
        </v-col>
        <v-col cols="12">
          <span class="disclaimer-txt">{{ t('wallets.withdraw_disclaimer') }}</span>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="receiveAddress"
            hide-details
            :label="t('wallets.address', { currency: props.currency.code })"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <SharedBalanceConvertor
            :max-amount="currency.available"
            :currency="currency.code"
            :exchange-rate="1.02"
            :precision="currency.precision"
            :label="t('wallets.amount')"
            @update:amount="amount = $event"
            @update:eur="eur = $event"
          />
        </v-col>
        <v-col cols="12">
          <span v-if="errorMessage" class="err-message">{{ errorMessage }}</span>
          <v-btn
            color="purple"
            class="w-100"
            :disabled="loading"
            max-width="200"
            @click.prevent="makeWithdrawRequest"
            >{{ t('wallets.requestWithdraw') }}</v-btn
          >
        </v-col>
        <v-col cols="12">
          <span class="disclaimer-txt" v-html="t('wallets.withdraw_disclaimer2')" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<style scoped>
.disclaimer-txt {
  font-size: 14px;
}
.err-message {
  color: #ff0000;
  font-size: 12px;
  display: block;
  padding: 0.2rem 0;
}
</style>
