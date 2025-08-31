<script setup lang="ts">
const settings = reactive({
  currency: '',
  language: '',
  marketingEmails: 1,
  marketingSMS: 1,
  hideUsername: 1,
})

const password = reactive({
  old: '',
  new: '',
  confirm: '',
})

const passInfo = ref(0)
</script>
<template>
  <div>
    <v-row>
      <v-col cols="4">
        <form-languages v-model="settings.language" label="Language" />
      </v-col>
      <v-col cols="4">
        <form-currencies v-model="settings.currency" label="Preferred Fiat Display Currency" />
      </v-col>
    </v-row>

    <h3 class="settings-title mt-5">Communication</h3>

    <v-row>
      <v-col cols="4">
        <v-checkbox
          v-model="settings.marketingEmails"
          :true-value="1"
          :false-value="0"
          label="Receive marketing emails"
          hide-details
        />
      </v-col>
      <v-col cols="4">
        <v-checkbox
          v-model="settings.marketingSMS"
          :true-value="1"
          :false-value="0"
          label="Receive marketing SMS"
          hide-details
          class="custom-select"
        />
      </v-col>
    </v-row>

    <h3 class="settings-title mt-5">Privacy</h3>
    <v-row>
      <v-col cols="4">
        <v-checkbox
          v-model="settings.hideUsername"
          :true-value="1"
          :false-value="0"
          label="Hide my Username"
          hide-details
          class="custom-select"
        />
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
                    v-model="password.old"
                    placeholder="Old Password"
                    density="compact"
                    color="primary"
                  />
                </v-col>
                <v-col cols="12" class="pb-0">
                  <div class="text-subtitle-1 text-white">New password*</div>
                  <v-text-field
                    v-model="password.new"
                    placeholder="New Password"
                    density="compact"
                    color="primary"
                  />
                </v-col>
                <v-col cols="12" class="pb-0">
                  <div class="text-subtitle-1 text-white">Confirm password*</div>
                  <v-text-field
                    v-model="password.confirm"
                    placeholder="Confirm Password"
                    density="compact"
                    color="primary"
                  />
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="12" class="pt-0">
        <v-btn color="purple" class="w-100" max-width="200">Save changes</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
