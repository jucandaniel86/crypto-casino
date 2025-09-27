<script setup lang="ts">
import { useAuthStore } from '~/core/store/auth'
import { OverlaysTypes } from '~/core/types/Overlays'

const overlayView = ref()
const dialog = ref<boolean>(false)
const route = useRoute()
const { replace } = useRouter()
const { isLogged } = storeToRefs(useAuthStore())

const onClose = () => replace({ query: {} })

const toggleBodyScroll = (dialogDisplayed: boolean) => {
  document.body.style.overflowY = dialogDisplayed ? 'hidden' : 'visible'
  document.getElementsByTagName('html')[0]!.style.overflowY = dialogDisplayed ? 'hidden' : 'visible'
}

const wait = async (duration: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(() => resolve(), duration))
}

const changeView = (_view: string) => {
  overlayView.value = _view
}

watch(
  route,
  async () => {
    const overlay = route.query.overlay as string
    const allowedValues: string[] = [
      OverlaysTypes.LOGIN,
      OverlaysTypes.REGISTER,
      OverlaysTypes.WALLET,
    ]
    overlayView.value = overlay
    if (overlay && allowedValues.indexOf(overlay) !== -1) {
      await wait(1)
      dialog.value = true
    } else {
      dialog.value = false
    }
  },
  { deep: true, immediate: true },
)

watch(dialog, () => {
  if (!dialog.value) onClose()
  toggleBodyScroll(dialog.value)
})
</script>
<template>
  <v-navigation-drawer
    v-if="[OverlaysTypes.LOGIN, OverlaysTypes.REGISTER].indexOf(overlayView) !== -1"
    v-model="dialog"
    absolute
    temporary
    :width="368"
    close-delay="300"
    class="overlay-bg"
  >
    <overlay-header v-if="!isLogged" @on-close="onClose" />
    <auth-register v-if="overlayView === 'register' && !isLogged" @change-view="changeView" />
    <auth-login v-if="overlayView === 'login'" @change-view="changeView" />
  </v-navigation-drawer>

  <v-dialog
    v-if="[OverlaysTypes.WALLET].indexOf(overlayView) !== -1 && isLogged"
    v-model="dialog"
    persistent
    transition="dialog-bottom-transition"
  >
    <wallet />
  </v-dialog>
</template>
