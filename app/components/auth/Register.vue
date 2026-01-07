<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { IconEye, IconEyeOff } from '#components'
import { useAppStore } from '~/core/store/app'
import { useAuthStore } from '~/core/store/auth'
import { useI18n } from 'vue-i18n'

//models
const email = ref('')
const username = ref('')
const password = ref('')
const legalAge = ref(0)
const agree = ref(1)
const errors = ref<any>([])
const loading = ref<boolean>(false)
const showPassword = ref<boolean>(false)

const validatePassword = (value: string): string[] => {
  const rules = [
    { regex: /[A-Z]/, message: 'Password must contain at least one uppercase letter' },
    { regex: /[a-z]/, message: 'Password must contain at least one lowercase letter' },
    { regex: /\d/, message: 'Password must contain at least one number' },
    {
      regex: /[^A-Za-z0-9]/,
      message: 'Password must contain at least one special character',
    },
  ]

  return rules.filter(({ regex }) => !regex.test(value)).map(({ message }) => message)
}

//composables
const { isset } = useUtils()
const { setToken, setUser } = useAuthStore()
const { replace } = useRouter()
const { setSnackbar } = useAppStore()
const { connectedWallet } = storeToRefs(useAuthStore())
const { t } = useI18n()
const router = useRouter()

//emitters
const emitters = defineEmits(['changeView'])

//methids
const onChangeView = () => emitters('changeView', 'login')

const handleRegistrationAction = async () => {
  loading.value = true

  const passwordValidationErrors = validatePassword(password.value)
  if (passwordValidationErrors.length) {
    errors.value = {
      ...errors.value,
      password: passwordValidationErrors,
    }
    loading.value = false
    return
  }

  const { data, success, error } = await useApiPostFetch('/registration', {
    username: username.value,
    password: password.value,
    email: email.value,
    legalAge: legalAge.value,
    agree: agree.value,
    wallet: connectedWallet.value,
  })

  if (!success) {
    errors.value = error.errors
  } else {
    errors.value = []
    if (data.authorization) {
      setToken(data.authorization.token)
      setUser(data.user)
      replace({})
      setSnackbar(`Welcome ${data.user.username}`)
    }
  }

  loading.value = false
}

const goTo = (link: string) => {
  router.push(link)
}

watch(password, () => {
  const passwordValidationErrors = validatePassword(password.value)
  if (passwordValidationErrors.length) {
    errors.value = {
      ...errors.value,
      password: passwordValidationErrors,
    }
    return
  }
})
</script>
<template>
  <v-row>
    <v-col v-if="connectedWallet" cols="12" class="pb-0 pt-0">
      <span class="text-purple d-flex font-weight-bold mb-2">{{
        t('auth.walletConnectDisclaimer')
      }}</span>
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <div class="text-subtitle-1 text-white">{{ t('auth.email') }}*</div>
      <v-text-field
        v-model="email"
        :placeholder="`${t('auth.email')}*`"
        density="compact"
        color="primary"
        :error="isset(errors.email)"
        :error-messages="isset(errors.email) ? errors.email[0] : null"
      />
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <div class="text-subtitle-1 text-white">{{ t('auth.username') }}*</div>
      <v-text-field
        v-model="username"
        :placeholder="`${t('auth.username')}*`"
        density="compact"
        :error="isset(errors.username)"
        :error-messages="isset(errors.username) ? errors.username[0] : null"
      />
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <div class="text-subtitle-1 text-white">{{ t('auth.password') }}*</div>
      <div class="password-wrapper">
        <v-text-field
          v-model="password"
          placeholder="Password*"
          :type="showPassword ? 'text' : 'password'"
          density="compact"
          :error="isset(errors.password)"
          :error-messages="isset(errors.password) ? errors.password[0] : null"
        />
        <button @click.prevent="showPassword = !showPassword">
          <icon-eye v-if="!showPassword" />
          <icon-eye-off v-if="showPassword" />
        </button>
      </div>
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <v-checkbox
        v-model="legalAge"
        :true-value="1"
        :false-value="0"
        :error="isset(errors.legalAge)"
        :error-messages="isset(errors.legalAge) ? errors.legalAge[0] : null"
      >
        <template #label>
          <p>
            {{ t('auth.18years') }}
            <a href="#" class="purple" @click.prevent="goTo('terms-and-conditions')">{{
              t('auth.terms')
            }}</a>
          </p>
        </template>
      </v-checkbox>
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <v-checkbox v-model="agree" :true-value="1" :false-value="0">
        <template #label>
          <p>{{ t('auth.agree') }}</p>
        </template>
      </v-checkbox>
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <v-btn color="purple" class="w-100" @click.prevent="handleRegistrationAction">{{
        t('auth.signPlay')
      }}</v-btn>
    </v-col>
    <v-col cols="12" class="pb-0">
      <p class="register-disclaimer">
        {{ t('auth.loginDisclaimer') }}
        <a href="#" class="purple" @click.prevent="onChangeView">{{ t('auth.signIn') }}</a>
      </p>
    </v-col>
  </v-row>
</template>
<style lang="css" scoped>
@import '../../assets/css/components/Auth.css';
</style>
