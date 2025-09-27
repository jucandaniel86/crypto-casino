<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import moment from 'moment'
import { useAppStore } from '~/core/store/app'
import { useAuthStore } from '~/core/store/auth'

//props
const props = defineProps({
  profile: {
    required: true,
    type: Object,
  },
})

//models
const minBirthday = '1950-01-01'
const personalInfo = ref({
  first_name: '',
  last_name: '',
  birthday: '',
  country: '',
  postal_code: '',
  address: '',
  city: '',
  phone: '',
})
const loading = ref<boolean>(false)
const errors = ref<any>([])
const message = ref<string>('')
const accountInfoForm = useTemplateRef<HTMLElement>('accountInfoForm')

//composables
const { user } = storeToRefs(useAuthStore())
const { setSnackbar } = useAppStore()
const { isset } = useUtils()

//methods
const save = async (): Promise<void> => {
  loading.value = true
  const { data, success, error } = await useApiPostFetch('player/save-profile', {
    ...personalInfo.value,
    birthday: personalInfo.value.birthday
      ? moment(personalInfo.value.birthday).format('YYYY-MM-DD')
      : '',
  })

  if (!success) {
    errors.value = error.errors || []
    message.value = error.message
  } else {
    errors.value = []
    message.value = ''
    setSnackbar(data.message)
  }
  loading.value = false
}

onMounted(() => {
  console.log('props', props.profile)
  if (props.profile) {
    personalInfo.value = {
      ...personalInfo.value,
      ...props.profile.profile,
    }
  }
})
</script>
<template>
  <div ref="accountInfoForm">
    <v-row>
      <v-col cols="4" class="pb-0">
        <v-row v-if="user" no-gutters>
          <v-col cols="12">
            <div class="text-subtitle-1 text-white">Email</div>
            <v-text-field
              :value="user.email"
              placeholder="Email"
              density="compact"
              color="primary"
            />
          </v-col>
          <v-col cols="12">
            <div class="text-subtitle-1 text-white">Username</div>
            <v-text-field
              :value="user.username"
              placeholder="Username"
              density="compact"
              color="primary"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="pb-0 pt-0">
        <v-row no-gutters>
          <v-col cols="8">
            <hr class="desp" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="6" class="pb-0">
            <div class="text-subtitle-1 text-white">First Name</div>
            <v-text-field
              v-model="personalInfo.first_name"
              :error="isset(errors.first_name)"
              :error-messages="isset(errors.first_name) ? errors.first_name[0] : null"
              placeholder="Username"
              density="compact"
              color="primary"
            />
          </v-col>
          <v-col cols="6" class="pb-0">
            <div class="text-subtitle-1 text-white">Last Name</div>
            <v-text-field
              v-model="personalInfo.last_name"
              :error="isset(errors.last_name)"
              :error-messages="isset(errors.last_name) ? errors.last_name[0] : null"
              placeholder="Username"
              density="compact"
              color="primary"
            />
          </v-col>
          <v-col cols="6" class="pt-0 pb-0">
            <div class="text-subtitle-1 text-white">Birthday</div>

            <v-date-input
              v-model="personalInfo.birthday"
              density="compact"
              color="primary"
              append-inner-icon="mdi-calendar"
              prepend-icon=""
              view-mode="year"
              :min="minBirthday"
              :input-format="'YYYY-MM-DD'"
              :error="isset(errors.birthday)"
              :error-messages="isset(errors.birthday) ? errors.birthday[0] : null"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="pb-0 pt-0">
        <v-row no-gutters>
          <v-col cols="8">
            <hr class="desp" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="6" class="pb-0">
            <div class="text-subtitle-1 text-white">Country</div>
            <v-text-field
              v-model="personalInfo.country"
              placeholder="Country"
              density="compact"
              color="primary"
              :error="isset(errors.country)"
              :error-messages="isset(errors.country) ? errors.country[0] : null"
            />
          </v-col>
          <v-col cols="6" class="pb-0">
            <div class="text-subtitle-1 text-white">Postal Code</div>
            <v-text-field
              v-model="personalInfo.postal_code"
              placeholder="Postal Code"
              density="compact"
              color="primary"
              :error="isset(errors.postal_code)"
              :error-messages="isset(errors.postal_code) ? errors.postal_code[0] : null"
            />
          </v-col>
          <v-col cols="6" class="pb-0">
            <div class="text-subtitle-1 text-white">Address</div>
            <v-text-field
              v-model="personalInfo.address"
              placeholder="Address"
              density="compact"
              color="primary"
            />
          </v-col>
          <v-col cols="6" class="pb-0">
            <div class="text-subtitle-1 text-white">City</div>
            <v-text-field
              v-model="personalInfo.city"
              placeholder="City"
              density="compact"
              color="primary"
              :error="isset(errors.city)"
              :error-messages="isset(errors.city) ? errors.city[0] : null"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="pb-0 pt-0">
        <v-row no-gutters>
          <v-col cols="8">
            <hr class="desp" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col cols="4" class="pb-0 pt-0">
            <div class="text-subtitle-1 text-white">Phone Number</div>
            <v-text-field
              v-model="personalInfo.phone"
              placeholder="Phone Number"
              density="compact"
              color="primary"
              :error="isset(errors.phone)"
              :error-messages="isset(errors.phone) ? errors.phone[0] : null"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="message" cols="12" class="pb-0 pt-0">
        <v-alert class="mb-1 mt-0" border="start" density="compact" color="purple" variant="tonal">
          {{ message }}
        </v-alert>
      </v-col>
      <v-col cols="6">
        <v-btn
          color="purple"
          class="w-100"
          max-width="200"
          :disabled="loading"
          @click.prevent="save"
          >Save</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>
