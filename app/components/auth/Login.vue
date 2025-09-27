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
//composables
const { emailRules } = useValidation()
const { setToken, setUser } = useAuthStore()
const { replace } = useRouter()
const { setSnackbar } = useAppStore()
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
      <div class="text-subtitle-1 text-white">Email or Username*</div>
      <v-text-field
        v-model="username"
        placeholder="Email or Username*"
        :rules="emailRules()"
        density="compact"
        color="primary"
      />
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <div class="text-subtitle-1 text-white">Password*</div>
      <v-text-field v-model="password" placeholder="Password*" type="password" density="compact" />
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <v-btn color="purple" class="w-100" :disabled="loading" @click.prevent="onLogin">Login</v-btn>
    </v-col>
    <v-col cols="12" class="pb-0">
      <p class="register-disclaimer">
        Forgot password? <br />
        <a href="#" class="purple">Click here to reset</a>
      </p>
    </v-col>
    <v-col cols="12" class="pb-0">
      <p class="register-disclaimer">
        Do not have an account? Click here to? <br />
        <a href="#" class="purple" @click.prevent="onChangeView">Create one</a>
      </p>
    </v-col>
  </v-row>
</template>
