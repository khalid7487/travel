import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type State = {
  authToken?: string
  role?: string
  expirationTime?: number
}

type Action = {
  setAuthToken: (token: string) => void
  removeAuthToken: () => void
}

const initialState: State = {
  authToken: undefined,
  role: undefined,
  expirationTime: undefined,
}
const useAuthToken = create<State & Action>()(
  persist(
    set => ({
      ...initialState,
      setAuthToken: token => {
        set({authToken: `Bearer ${token}`})
      },
      removeAuthToken: () => {
        set(initialState)
      },
    }),
    {
      name: 'nms-app-auth-token',
      partialize: ({authToken}) => ({authToken}),
    },
  ),
)

export default useAuthToken
