import autoBind from 'auto-bind'
import axios, {AxiosHeaders, AxiosInstance, AxiosRequestConfig} from 'axios'

import useAuthToken from 'hooks/persisted/useAuthToken'

import ApiError from './ApiError'
export type ApiBaseProps = {
  baseUrl: string
  commonHeaders?: {
    Authorization?: string
  } & Partial<Omit<AxiosHeaders, 'Accept' | 'Content-Type | Api-Key | Api-Secret'>>
  timeout?: number
}

type OtherProps = Omit<AxiosRequestConfig, 'url' | 'method'>
type GetOrDeleteOtherProps = Omit<OtherProps, 'params'>
type PostOrPutOtherProps = Omit<OtherProps, 'data'>

export default class ApiBase {
  private axiosClient: AxiosInstance

  constructor({baseUrl, commonHeaders, timeout = 4000}: ApiBaseProps) {
    this.axiosClient = axios.create({
      baseURL: baseUrl,
      timeout,
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        ...commonHeaders,
      },
      responseType: 'json',
    })

    this.axiosClient.interceptors.response.use(
      response => response,
      error => {
        if (error.response) {
          const {status, statusText} = error.response
          const errData = error.response.data
          let errMsg = `${statusText} (${status})`
          if (errData && errData.message) errMsg = errData.message
          else if (errData && errData.error) errMsg = errData.error
          else if (errData && errData.errors) errMsg = errData.errors

          const errObj = new ApiError(errMsg, status)
          if (
            // status === 401 ||
            // status === 403 ||
            [401, 403].includes(status)
          ) {
            useAuthToken.getState().removeAuthToken()
          }
          throw errObj
        } else if (error.message) {
          throw new ApiError(error.message)
        } else {
          throw new ApiError('Unhandled error happened...')
        }
      },
    )

    autoBind(this)
  }

  private async request(options: AxiosRequestConfig) {
    const response = await this.axiosClient.request(options)
    return response.data
  }

  async get<Tdata>(url: string, params?: object, others?: GetOrDeleteOtherProps): Promise<Tdata> {
    return this.request({url, method: 'get', params, ...others})
  }

  async post<Tdata>(url: string, data?: object, others?: PostOrPutOtherProps): Promise<Tdata> {
    return this.request({url, method: 'post', data, ...others})
  }

  async put<Tdata>(url: string, data?: object, others?: PostOrPutOtherProps): Promise<Tdata> {
    return this.request({url, method: 'put', data, ...others})
  }

  async delete<Tdata>(
    url: string,
    params?: object,
    others?: GetOrDeleteOtherProps,
  ): Promise<Tdata> {
    return this.request({url, method: 'delete', params, ...others})
  }
}
