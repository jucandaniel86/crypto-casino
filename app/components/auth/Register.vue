<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useAppStore } from '~/core/store/app'
import { useAuthStore } from '~/core/store/auth'

//models
const email = ref('')
const username = ref('')
const password = ref('')
const legalAge = ref(0)
const agree = ref(1)
const errors = ref<any>([])
const loading = ref<boolean>(false)

//composables
const { isset } = useUtils()
const { setToken, setUser } = useAuthStore()
const { replace } = useRouter()
const { setSnackbar } = useAppStore()
const { connectedWallet } = storeToRefs(useAuthStore())

//emitters
const emitters = defineEmits(['changeView'])

//methids
const onChangeView = () => emitters('changeView', 'login')

const handleRegistrationAction = async () => {
  loading.value = true
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
</script>
<template>
  <v-row>
    <v-col cols="12" class="pb-0 pt-0">
      <div class="text-subtitle-1 text-white">Email*</div>
      <v-text-field
        v-model="email"
        placeholder="Email*"
        density="compact"
        color="primary"
        :error="isset(errors.email)"
        :error-messages="isset(errors.email) ? errors.email[0] : null"
      />
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <div class="text-subtitle-1 text-white">Username*</div>
      <v-text-field
        v-model="username"
        placeholder="Username*"
        density="compact"
        :error="isset(errors.username)"
        :error-messages="isset(errors.username) ? errors.username[0] : null"
      />
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <div class="text-subtitle-1 text-white">Password*</div>
      <v-text-field
        v-model="password"
        placeholder="Password*"
        type="password"
        density="compact"
        :error="isset(errors.password)"
        :error-messages="isset(errors.password) ? errors.password[0] : null"
      />
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
            By signing up I attest that I am at least 18 years old and have read the
            <a href="#" class="purple">Terms of Service</a>
          </p>
        </template>
      </v-checkbox>
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <v-checkbox v-model="agree" :true-value="1" :false-value="0">
        <template #label>
          <p>By signing up I agree to receive marketing offers</p>
        </template>
      </v-checkbox>
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <v-btn color="purple" class="w-100" @click.prevent="handleRegistrationAction"
        >Sign Up & Play</v-btn
      >
    </v-col>
    <v-col cols="12" class="pb-0">
      <p class="register-disclaimer">
        Do you already have an account? Click here to
        <a href="#" class="purple" @click.prevent="onChangeView">Sign In</a>
      </p>
    </v-col>
  </v-row>
</template>
