<script setup lang="ts">
import { useAppStore } from '~/core/store/app'
import { useAuthStore } from '~/core/store/auth'
import type { GameType } from '~/core/types/Game'

//props
const props = defineProps<{ game: GameType }>()

//composables
const router = useRouter()
const { isLogged } = storeToRefs(useAuthStore())
const { setSnackbar } = useAppStore()

//models
const reveal = ref(false)
const favLoadingResponse = ref(false)

//emitters
const emits = defineEmits(['onFavoriteAction'])

//computed
const image = computed(() => `${props.game.imageUrl}`)

//methods
const playRealMoney = () => {
  router.push({
    name: 'game-slug',
    params: { slug: props.game.realPlayUrl },
    query: { demo: 0 },
  })
}

const playForFun = () => {
  router.push({
    name: 'game-slug',
    params: { slug: props.game.realPlayUrl },
    query: { demo: 1 },
  })
}

const toggleFavorite = async (): Promise<void> => {
  favLoadingResponse.value = true

  const data = await useApiPostFetch('/player/favorite', {
    gameID: props.game.id,
  })
  if (data.success) {
    // eslint-disable-next-line vue/no-mutating-props
    props.game.favorite = !props.game.favorite

    if (props.game.favorite) {
      setSnackbar(`You add the game ${props.game.name} to favourites successfuly`)
    } else {
      setSnackbar(`You remove the game ${props.game.name} from favourites successfuly`)
    }
    emits('onFavoriteAction', props.game.favorite)
  }
  favLoadingResponse.value = false
}
</script>
<template>
  <div class="game__item" @mouseout="reveal = false" @mouseover="reveal = true">
    <div class="wrapper">
      <img class="mx-auto" width="100%" :src="image" />
      <h2 v-show="reveal" class="game__title">{{ props.game.name }}</h2>
      <div class="real-play" @click="playRealMoney">
        <button class="">
          <IconPlay />
        </button>
      </div>
      <div v-if="props.game.hasDemo" v-show="reveal" class="demo-play" @click="playForFun">
        Play for fun
      </div>
      <button
        v-if="isLogged"
        v-show="reveal"
        class="game-favorite-btn"
        @click.prevent="toggleFavorite"
        :disabled="favLoadingResponse"
      >
        <IconFav
          :style="{
            fill: game.favorite ? '#ff4242' : '#fff',
            color: game.favorite ? '#ff4242' : '#fff',
          }"
        />
      </button>
    </div>
  </div>
</template>
<style scoped>
.game-favorite-btn {
  cursor: pointer;
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: #fff;
  font-size: 1rem;
  border: none;
}
.game-favorite-btn svg {
  width: 1rem;
  height: 1rem;
}
</style>
