/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useLog } from './useLog'

const { log, logError } = useLog()

export type useAPIFetchType = {
  success: boolean
  error: any
  data: any
}

export const useAPIFetch = async (path: any, _payload: any = {}): Promise<any> => {
  const config = useRuntimeConfig()
  const options: any = {}

  options.baseURL = config.public.baseURL
  options.query = _payload

  options.onRequest = ({ request, options }: any) => {
    options.headers.set('content-type', 'application/json')
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
    log(data, false)
    return data
  } catch (err) {
    logError(err)
  }
}
