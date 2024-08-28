import {capitalize} from 'utils/helpers'

export default class ApiError extends Error {
  status?: number
  errorsObject: unknown[] | object | string

  constructor(error: unknown[] | object | string, status?: number) {
    let message = ''

    if (Array.isArray(error)) {
      message = error.join('. ')
    } else if (typeof error === 'object' && error !== null) {
      message = Object.entries(error)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(([_, v]) => {
          if (Array.isArray(v)) {
            return v.map(msgErr => capitalize(msgErr)).join('; ')
          }
          return capitalize(v)
        })
        .join('. ')
    } else if (typeof error === 'string') {
      message = error
    }
    message = capitalize(message)
    super(message)
    this.message = message
    this.name = 'ApiError'
    this.status = status
    this.errorsObject = error
  }

  toString() {
    return this.message.toString()
  }
}

export type ErrorFields = {
  [key: string]: string[]
}

export type ApiErrorType<Tdata = ErrorFields> = {
  status?: number
  errorsObject: Tdata
  message: string
  name: string
}
