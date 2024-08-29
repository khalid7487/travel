export type LoginResponse = {
  id: number
  token: string
}

export type RegisterResponse = {
  id: number
  token: string
}

type UserStatus = 'active' | 'inactive' | 'banned' | 'deleted'

export type User = {
  id: number
  email: string
  firstName: string
  lastName: string
  birthDate?: Date
  phone: string
  address?: string
  city?: string
  state?: string
  zip?: string
  company?: string
  companyId?: number
  countryId: number
  referenceNo?: string
  emailVerified: boolean
  emailVerifiedAt?: Date
  status?: string
  lockedAt?: Date
  passwordUpdatedAt?: Date
  createdAt?: Date
  updatedAt?: Date
  mfaActivated: boolean
  failedAttempts: number
  accountNonLocked: boolean
}

export type TableResponse = {
  data: object[]
  meta: {
    total: number
    offset: number
    limit: number
    page: number
  }
}
