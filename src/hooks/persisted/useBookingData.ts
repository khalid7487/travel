import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type BookingData = {
  username: string
  email: string
  phone: string
  birthDate?: string
}

type State = {
  bookingData?: BookingData
}

type Action = {
  setBookingData: (data: BookingData) => void
  removeBookingData: () => void
}

const initialState: State = {
  bookingData: undefined,
}
const useBookingData = create<State & Action>()(
  persist(
    set => ({
      ...initialState,
      setBookingData: data => {
        set({bookingData: data})
      },
      removeBookingData: () => {
        set(initialState)
      },
    }),
    {
      name: 'booking-data',
      partialize: ({bookingData}) => ({bookingData}),
    },
  ),
)

export default useBookingData
