<script setup lang="ts">
//models
const email = ref('')
const username = ref('')
const password = ref('')
const legalAge = ref(0)
const agree = ref(1)

//composables
const { emailRules, userNameRules } = useValidation()

//emitters
const emitters = defineEmits(['changeView'])

//methids
const onChangeView = () => emitters('changeView', 'login')
</script>
<template>
  <v-row>
    <v-col cols="12" class="pb-0 pt-0">
      <div class="text-subtitle-1 text-white">Email*</div>
      <v-text-field
        v-model="email"
        placeholder="Email*"
        :rules="emailRules()"
        density="compact"
        color="primary"
      />
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <div class="text-subtitle-1 text-white">Username*</div>
      <v-text-field
        v-model="username"
        placeholder="Username*"
        :rules="userNameRules()"
        density="compact"
      />
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <div class="text-subtitle-1 text-white">Password*</div>
      <v-text-field v-model="password" placeholder="Password*" type="password" density="compact" />
    </v-col>
    <v-col cols="12" class="pb-0 pt-0">
      <v-checkbox v-model="legalAge" :true-value="1" :false-value="0">
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
      <v-btn color="purple" class="w-100">Sign Up & Play</v-btn>
    </v-col>
    <v-col cols="12" class="pb-0">
      <p class="register-disclaimer">
        Do you already have an account? Click here to
        <a href="#" class="purple" @click.prevent="onChangeView">Sign In</a>
      </p>
    </v-col>
  </v-row>
</template>
