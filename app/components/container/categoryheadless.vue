<script setup lang="ts">
import type { ContainerType } from '~/core/types/Container'

const { options } = defineProps<{ options: ContainerType }>()
const { display } = useContainerOptions(options)

const { style } = useResolutionVars(options.data.resolutionsConfig)
</script>
<template>
  <div v-if="display">
    <div class="mb-4">
      <ul ref="scrollContent" class="game_ul_list" :style="style">
        <li v-for="(game, index) in options.data.initialState.data" :key="index">
          <div class="carousel__item">
            <GameItem :game="game" />
          </div>
        </li>
      </ul>
    </div>

    <div class="d-flex justify-center align-center mt-3">
      <v-btn class="v-btn-custom" color="purple">Load More</v-btn>
    </div>
  </div>
</template>
