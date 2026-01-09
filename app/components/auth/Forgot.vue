<script setup lang="ts">
const { t } = useI18n()
const email = ref('')
</script>
<template>
  <v-card max-width="414" width="100%" class="wallet-card ma-auto">
    <v-card-title>{{ t('forgot.title') }}</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="email"
        type="email"
        :label="t('forgot.email')"
        hide-details
        density="compact"
      />
    </v-card-text>
    <v-card-actions>
      <v-btn color="yellow">{{ t('forgot.reset') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
