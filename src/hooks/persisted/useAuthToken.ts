import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type State = {
  authToken?: string
  role?: string
  expirationTime?: number
  refreshToken?: string
}

type Action = {
  setAuthToken: (token: string) => void
  setRefreshToken: (token: string) => void
  removeAuthToken: () => void
}

const initialState: State = {
  authToken: undefined,
  role: undefined,
  expirationTime: undefined,
  refreshToken: undefined,
}
const useAuthToken = create<State & Action>()(
  persist(
    set => ({
      ...initialState,
      setAuthToken: token => {
        set({authToken: `Bearer ${token}`})
      },
      setRefreshToken: token => {
        set({refreshToken: token})
      },
      removeAuthToken: () => {
        set(initialState)
      },
    }),
    {
      name: 'nms-app-auth-token',
      partialize: ({authToken, refreshToken}) => ({authToken, refreshToken}),
    },
  ),
)

export default useAuthToken
