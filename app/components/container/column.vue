<script setup lang="ts">
import type { ContainerType } from '~/core/types/Container'

const { options } = defineProps<{ options: ContainerType }>()
const { display } = useContainerOptions(options)
</script>
<template>
  <v-row v-if="display" :id="options.id">
    <v-col v-for="(column, i) in options.children" :key="`ColumnContainer${i}`" cols="4">
      <v-card class="offer-card pt-0">
        <v-img :src="`/imgs/home/${column.data.thumbnail}`" />
        <v-card-subtitle
          ><p>{{ column.data.content }}</p></v-card-subtitle
        >
        <v-card-actions v-if="column.data.button" class="pl-5 pr-5">
          <v-btn :color="column.data.button.color" variant="flat" class="w-100">{{
            column.data.button.label
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
