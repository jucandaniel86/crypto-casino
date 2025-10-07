<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { useAppStore } from '~/core/store/app'
import { useAuthStore } from '~/core/store/auth'
import { useGameStore } from '~/core/store/game'
import { OverlaysTypes } from '~/core/types/Overlays'

//models
const el = useTemplateRef('gameIframe')
const loadingPlayerSesson = ref<boolean>(false)
const startGame = ref<boolean>(false)
const gameLoading = ref<boolean>(false)
const game = ref<any>()
const favLoadingResponse = ref<boolean>(false)
const favorites = ref<any>()

//composables
const { setPageLoading, setSidebar } = useAppStore()
const route = useRoute()
const router = useRouter()
const { isLogged } = storeToRefs(useAuthStore())
const { toggle } = useFullscreen(el)
const { openOverlay } = useUtils()
const { name } = useDisplay()
const { setActivePlaySession } = useGameStore()

//methods
const startGameSession = async (demo: boolean): Promise<void> => {
  if (!isLogged.value) {
    openOverlay(OverlaysTypes.LOGIN)
    return
  }

  startGame.value = true
  loadingPlayerSesson.value = true

  const { data } = await useApiPostFetch('/player/play', {
    game_id: game.value.gameID,
    demo,
  })
  if (!demo && data && data.session_id) {
    setActivePlaySession(data.session_id)
  }

  loadingPlayerSesson.value = false
  startGame.value = true
}

const back = () => router.back()

const toggleFavorite = async (): Promise<void> => {
  favLoadingResponse.value = true
  const data = await useApiPostFetch('/player/favorite', {
    gameID: game.value.gameID,
  })
  if (data.success) {
    game.value.favorite = !game.value.favorite
  }
  favLoadingResponse.value = false
}

const getGamePage = async (): Promise<void> => {
  const slug = route.params.slug
  gameLoading.value = true
  setPageLoading(true)

  const gameData = await useAPIFetch(`/game/${slug}`)

  if (gameData.status && gameData.status === 404) {
    setPageLoading(false)
    if (import.meta.client) {
      throw showError({
        statusCode: 404,
        statusMessage: 'Uh oh, Page not Found',
        message: "Sorry the page you were looking for doesn't exist or has been moved.",
        fatal: true,
      })
    } else {
      throw createError({
        statusCode: 404,
        statusMessage: 'Uh oh, Page not Found',
        message: "Sorry the page you were looking for doesn't exist or has been moved.",
        fatal: true,
      })
    }
  }
  if (gameData.children.main) {
    game.value = gameData.children.main.find(
      (item: any) => item.container === 'GamePlayContainer',
    )?.data
    favorites.value = gameData.children.main.find(
      (item: any) => item.container === 'FavouriteGamesContainer',
    )
    useSeoMeta({
      title: game.value.name,
    })
  }

  if (gameData.children.leftSidebar) {
    setSidebar(gameData.children.leftSidebar)
  }
  setPageLoading(false)

  gameLoading.value = false
}

const mobile = computed(() => ['sm', 'xs'].indexOf(name.value) !== -1)

//mounted
onMounted(async () => {
  await getGamePage()
})

//onmounted
onUnmounted(() => {
  setActivePlaySession('')
})

//watchers
watch(isLogged, () => {
  getGamePage()
})
</script>
<template>
  <div>
    <div class="gameplay-wrapper mb-10">
      <div
        v-if="!gameLoading"
        class="gameplay-content"
        :style="{
          aspectRatio: mobile ? 'unset' : '16 / 9',
        }"
      >
        <div class="gameplay-overlay">
          <div class="game-wrapper" :class="{ 'game-blur': !startGame }">
            <iframe ref="gameIframe" class="game-iframe" allow="fullscreen" />
          </div>
          <div v-if="!startGame" class="gameplay-currencymessage">
            <p>The in-game balance will be displayed in EUR.</p>
            <p class="w-100 text-center d-flex ga-1 justify-center">
              <v-btn
                :disabled="loadingPlayerSesson"
                color="purple"
                class="w-100"
                max-width="200"
                @click.prevent="startGameSession(false)"
                >Play Real Money</v-btn
              >
              <v-btn
                :disabled="loadingPlayerSesson"
                color="purple"
                class="w-100"
                max-width="200"
                @click.prevent="startGameSession(true)"
                >Play DEMO</v-btn
              >
            </p>
          </div>
        </div>
      </div>
      <div v-if="!mobile" class="gameplay-toolbar d-flex ga-2 flex-column">
        <button class="game-tool-btn" @click.prevent="back"><IconClose /></button>
        <button class="game-tool-btn" @click.prevent="toggle"><IconFullscreen /></button>
        <button
          v-if="isLogged && game"
          :disabled="favLoadingResponse"
          class="game-tool-btn"
          @click.prevent="toggleFavorite"
        >
          <IconFav
            :style="{
              fill: game.favorite ? '#ff4242' : 'currentColor',
              color: game.favorite ? '#ff4242' : 'currentColor',
            }"
          />
        </button>
      </div>
    </div>

    <ContainerFavorites
      v-if="isLogged && !gameLoading && favorites && favorites.data.length"
      :id="favorites.id"
      :options="favorites"
      :games="favorites.data"
      title="Favorites"
    />
  </div>
</template>
