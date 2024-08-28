import {useMutation, type UseMutateFunction} from '@tanstack/react-query'

import {UserApiMethods} from 'api'
import type {ApiErrorType} from 'api/ApiError'
import type {RefreshTokenProps} from 'api/Request'
import type {RefreshTokenResponse} from 'api/Response'
import useAuthToken from 'hooks/persisted/useAuthToken'

type RefreshTokenFunction = UseMutateFunction<RefreshTokenResponse, ApiErrorType, RefreshTokenProps>

const useRefreshToken = (): {triggerRefreshToken: RefreshTokenFunction} => {
  const {setAuthToken, setRefreshToken} = useAuthToken()
  const {mutate} = useMutation<RefreshTokenResponse, ApiErrorType, RefreshTokenProps>({
    mutationFn: UserApiMethods.refreshToken,
    onSuccess: ({accessToken, refreshToken}: RefreshTokenResponse) => {
      setAuthToken(accessToken)
      setRefreshToken(refreshToken)
    },
  })

  return {triggerRefreshToken: mutate}
}

export default useRefreshToken
