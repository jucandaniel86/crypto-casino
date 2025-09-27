<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useAppStore } from '~/core/store/app'

//props
const props = defineProps({
  profile: {
    required: true,
    type: Object,
  },
})

//composables
const { setSnackbar } = useAppStore()
const { isset } = useUtils()

//models
const settings = ref({
  display_fiat_currency: '',
  language: '',
  marketing_emails: 1,
  hide_username: 1,
})

const password = ref({
  old_password: '',
  password: '',
  password_confirmation: '',
})

const passInfo = ref(0)
const loading = ref<boolean>(false)
const loadingPass = ref<boolean>(false)
const errors = ref<any>([])
const message = ref<string>('')

//methods
const save = async (): Promise<void> => {
  loading.value = true
  const { data, success, error } = await useApiPostFetch('player/save-settings', settings.value)

  if (!success) {
    setSnackbar(error.message)
  } else {
    setSnackbar(data.message)
  }
  loading.value = false
}

const savePassword = async (): Promise<void> => {
  loadingPass.value = true
  const { data, success, error } = await useApiPostFetch('player/change-password', password.value)

  if (!success) {
    errors.value = error.errors || []
    message.value = error.message
  } else {
    errors.value = []
    message.value = ''
    setSnackbar(data.message)
  }
  loadingPass.value = false
}

onMounted(() => {
  if (props.profile) {
    settings.value = {
      ...settings.value,
      ...props.profile.profile,
    }
  }
})
</script>
<template>
  <div>
    <v-row>
      <v-col cols="4">
        <form-languages v-model="settings.language" label="Language" />
      </v-col>
      <v-col cols="4">
        <form-currencies
          v-model="settings.display_fiat_currency"
          label="Preferred Fiat Display Currency"
        />
      </v-col>
    </v-row>

    <h3 class="settings-title mt-5">Communication</h3>

    <v-row>
      <v-col cols="4">
        <v-checkbox
          v-model="settings.marketing_emails"
          :true-value="1"
          :false-value="0"
          label="Receive marketing emails"
          hide-details
        />
      </v-col>
    </v-row>

    <h3 class="settings-title mt-5">Privacy</h3>
    <v-row>
      <v-col cols="4">
        <v-checkbox
          v-model="settings.hide_username"
          :true-value="1"
          :false-value="0"
          label="Hide my Username"
          hide-details
          class="custom-select"
        />
      </v-col>
      <v-col cols="12" class="pt-0">
        <v-btn
          color="purple"
          class="w-100"
          max-width="200"
          :disabled="loading"
          @click.prevent="save"
          >Save changes</v-btn
        >
      </v-col>
    </v-row>

    <h3 class="settings-title mt-5 mb-5">Security</h3>

    <v-row>
      <v-col cols="4" class="pb-0">
        <v-expansion-panels v-model="passInfo" :class="{ 'mb-6': passInfo !== 0 }">
          <v-expansion-panel>
            <v-expansion-panel-title>Change your password</v-expansion-panel-title>
            <v-expansion-panel-text class="password-wrapper pr-0">
              <v-row>
                <v-col cols="12" class="pb-0">
                  <div class="text-subtitle-1 text-white">Old password*</div>
                  <v-text-field
                    v-model="password.old_password"
                    placeholder="Old Password"
                    density="compact"
                    color="primary"
                    :error="isset(errors.old_password)"
                    :error-messages="isset(errors.old_password) ? errors.old_password[0] : null"
                  />
                </v-col>
                <v-col cols="12" class="pb-0">
                  <div class="text-subtitle-1 text-white">New password*</div>
                  <v-text-field
                    v-model="password.password"
                    placeholder="New Password"
                    density="compact"
                    color="primary"
                    :error="isset(errors.password)"
                    :error-messages="isset(errors.password) ? errors.password[0] : null"
                  />
                </v-col>
                <v-col cols="12" class="pb-0">
                  <div class="text-subtitle-1 text-white">Confirm password*</div>
                  <v-text-field
                    v-model="password.password_confirmation"
                    placeholder="Confirm Password"
                    density="compact"
                    color="primary"
                    :error="isset(errors.password_confirmation)"
                    :error-messages="
                      isset(errors.password_confirmation) ? errors.password_confirmation[0] : null
                    "
                  />
                </v-col>
                <v-col v-if="message" cols="12" class="pt-0">
                  <v-alert
                    class="mb-1 mt-0"
                    border="start"
                    density="compact"
                    color="purple"
                    variant="tonal"
                  >
                    {{ message }}
                  </v-alert>
                </v-col>

                <v-col cols="12" class="pt-0">
                  <v-btn
                    color="purple"
                    class="w-100"
                    max-width="200"
                    :disabled="loadingPass"
                    @click.prevent="savePassword"
                    >Change password</v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>
