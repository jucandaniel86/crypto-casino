<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useAppStore } from '~/core/store/app'
import { useAuthStore } from '~/core/store/auth'

//models
const username = ref('')
const password = ref('')
const message = ref('')
const errors = ref<any>([])
const loading = ref<boolean>(false)
const showPassword = ref<boolean>(false)

//composables
const { emailRules } = useValidation()
const { setToken, setUser } = useAuthStore()
const { replace } = useRouter()
const { setSnackbar } = useAppStore()
const { t } = useI18n({ useScope: 'global' })
//emitters
const emitters = defineEmits(['changeView'])

//methids
const onChangeView = () => emitters('changeView', 'register')
const onLogin = async () => {
  loading.value = true
  const { data, success, error } = await useApiPostFetch('/player/login', {
    email: username.value,
    password: password.value,
  })

  if (!success) {
    errors.value = error.errors
    message.value = error.message
  } else {
    errors.value = []
    message.value = ''
    setToken(data.authorization.token)
    setUser(data.user)
    replace({ query: {} })
    setSnackbar(`Welcome ${data.user.username}`)
  }

  loading.value = false
}
</script>
<template>
  <v-row>
    <v-col v-if="message" cols="12" class="pb-0 pt-0">
      <v-alert class="mb-1" border="start" density="compact" color="purple" variant="tonal">
        {{ message }}
      </v-alert>
    </v-col>

    <v-col cols="12" class="pb-0 pt-0">
      <div class="text-subtitle-1 text-white">{{ t('auth.emailUsername') }}*</div>
      <v-text-field
        v-model="username"
        placeholder="Email or Username*"
        :rules="emailRules()"
        density="compact"
        color="primary"
      />
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <div class="text-subtitle-1 text-white">{{ t('auth.password') }}*</div>
      <div class="password-wrapper">
        <v-text-field
          v-model="password"
          :placeholder="`${t('auth.password')}*`"
          :type="showPassword ? 'text' : 'password'"
          density="compact"
          autocomplete="false"
        />
        <button @click.prevent="showPassword = !showPassword">
          <icon-eye v-if="!showPassword" />
          <icon-eye-off v-if="showPassword" />
        </button>
      </div>
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <v-btn color="purple" class="w-100" :disabled="loading" @click.prevent="onLogin">{{
        t('auth.login')
      }}</v-btn>
    </v-col>
    <v-col cols="12" class="pb-0">
      <p class="register-disclaimer">
        {{ t('auth.forgot') }} <br />
        <a href="#" class="purple">{{ t('auth.reset') }}</a>
      </p>
    </v-col>
    <v-col cols="12" class="pb-0">
      <p class="register-disclaimer">
        {{ t('auth.signDisclaimer') }} <br />
        <a href="#" class="purple" @click.prevent="onChangeView">{{ t('auth.create') }}</a>
      </p>
    </v-col>
  </v-row>
</template>
<style lang="css" scoped>
@import '../../assets/css/components/Auth.css';
</style>
