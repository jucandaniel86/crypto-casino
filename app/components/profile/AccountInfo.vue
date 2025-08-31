<script setup lang="ts">
const userInfo = reactive({
  username: '',
  email: '',
})

const personalInfo = reactive({
  firstName: '',
  lastName: '',
  birthday: '',
  country: '',
  postalCode: '',
  address: '',
  city: '',
  phoneNumber: '',
})
</script>
<template>
  <v-row>
    <v-col cols="4" class="pb-0">
      <v-row no-gutters>
        <v-col cols="12">
          <div class="text-subtitle-1 text-white">Email</div>
          <v-text-field
            v-model="userInfo.email"
            placeholder="Email"
            density="compact"
            color="primary"
          />
        </v-col>
        <v-col cols="12">
          <div class="text-subtitle-1 text-white">Username</div>
          <v-text-field
            v-model="userInfo.username"
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
            v-model="personalInfo.firstName"
            placeholder="Username"
            density="compact"
            color="primary"
          />
        </v-col>
        <v-col cols="6" class="pb-0">
          <div class="text-subtitle-1 text-white">Last Name</div>
          <v-text-field
            v-model="personalInfo.lastName"
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
          />
        </v-col>
        <v-col cols="6" class="pb-0">
          <div class="text-subtitle-1 text-white">Postal Code</div>
          <v-text-field
            v-model="personalInfo.postalCode"
            placeholder="Postal Code"
            density="compact"
            color="primary"
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
            v-model="personalInfo.phoneNumber"
            placeholder="Phone Number"
            density="compact"
            color="primary"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6">
      <v-btn color="purple" class="w-100" max-width="200">Save</v-btn>
    </v-col>
  </v-row>
</template>
