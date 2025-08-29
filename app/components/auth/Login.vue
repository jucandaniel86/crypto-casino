<script setup lang="ts">
import { useAuthStore } from '~/core/store/auth'

//models
const username = ref('')
const password = ref('')

//composables
const { emailRules } = useValidation()
const { login } = useAuthStore()
const { replace } = useRouter()
//emitters
const emitters = defineEmits(['changeView'])

//methids
const onChangeView = () => emitters('changeView', 'register')
const onLogin = () => {
  login()
  replace({ query: {} })
}
</script>
<template>
  <v-row>
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
      <v-btn color="purple" class="w-100" @click.prevent="onLogin">Login</v-btn>
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
        <a href="#" @click.prevent="onChangeView" class="purple">Create one</a>
      </p>
    </v-col>
  </v-row>
</template>
