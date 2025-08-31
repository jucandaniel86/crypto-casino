<template>
  <v-layout class="rounded rounded-md border">
    <icons />
    <currencies />
    <base-overlays />
    <base-sidebar />
    <base-header />
    <v-main>
      <v-container>
        <slot />
      </v-container>
      <base-footer />
    </v-main>
  </v-layout>
</template>
