import React from 'react'
import {useSnackbar} from 'notistack'
import axios, {AxiosError} from 'axios'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {QueryCache, QueryClient, QueryClientProvider} from '@tanstack/react-query'

import {ENV} from 'config'
import {hasOwnPropertyCall} from 'utils/helpers'
import useAuthToken from 'hooks/persisted/useAuthToken'

interface ReactQueryProviderProps {
  children: React.ReactElement
}

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({children}) => {
  const {enqueueSnackbar} = useSnackbar()
  const {authToken} = useAuthToken()

  const onError = React.useCallback(
    (error: Error | AxiosError) => {
      if (axios.isAxiosError(error)) {
        // if CancelQuery error - do not show
        if (error && hasOwnPropertyCall(error, 'silent')) return

        // eslint-disable-next-line no-console
        if (ENV === 'development') console.error(error)

        enqueueSnackbar({
          message: error?.toString(),
          variant: 'error',
          preventDuplicate: true,
          persist: true,
        })
      }
    },
    [enqueueSnackbar],
  )
  const queryClient = React.useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: true,
            retry: (failureCount: number, error: Error | AxiosError) => {
              if (axios.isAxiosError(error)) {
                if (error && error.response && error.response.status < 500) return false
                return failureCount < 2
              } else {
                return false
              }
            },
          },
          mutations: {
            onError,
          },
        },
        queryCache: new QueryCache({
          onError,
        }),
      }),
    [onError],
  )

  React.useEffect(() => {
    if (!authToken) {
      queryClient.clear()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken])

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
