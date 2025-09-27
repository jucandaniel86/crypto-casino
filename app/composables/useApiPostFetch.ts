/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuthStore } from '~/core/store/auth'
import { useLog } from './useLog'

const { log, logError } = useLog()

export const useApiPostFetch = async (path: any, _payload: any = {}): Promise<any> => {
  const config = useRuntimeConfig()
  const { token } = storeToRefs(useAuthStore())
  const options: any = {}
  const _return: useAPIFetchType = {
    success: true,
    data: null,
    error: null,
  }

  options.baseURL = config.public.baseURL
  options.body = _payload
  options.method = 'post'
  options.watch = false
  options.server = false

  // //@ts-ignore
  options.onRequest = ({ request, options }: any) => {
    options.headers.set('Authorization', `Bearer ${token.value}`)
    options.headers.set('Accept', 'application/json')
  }
  log(
    {
      path: options.baseURL + path,
      params: _payload,
    },
    true,
  )

  try {
    const data = await $fetch(path, options)

    _return.data = data
    log(data, false)
    return _return
  } catch (error) {
    _return.success = false
    //@ts-ignore
    _return.error = error?.data

    logError(_return)
    return _return
  }
}
