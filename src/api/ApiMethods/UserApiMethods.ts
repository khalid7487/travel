import {API_BASE_URL} from 'config'
import type {LoginProps, RegisterProps} from 'api/Request'
import type {LoginResponse, RegisterResponse} from 'api/Response'
import useAuthToken from 'hooks/persisted/useAuthToken'

import ApiBase from '../ApiBase'

export type Meta = {
  total: number
  limit: number
  offset: number
  page: number
}

class ApiMethods extends ApiBase {
  async register(props: RegisterProps): Promise<RegisterResponse> {
    return await this.post('/api/register', props)
  }

  async login(props: LoginProps): Promise<LoginResponse> {
    return await this.post<LoginResponse>('/api/login', props)
  }
}

const UserApiMethods = new ApiMethods({
  baseUrl: API_BASE_URL,
  timeout: 2000,
  commonHeaders: {
    Authorization: useAuthToken.getState().authToken,
  },
})

export default UserApiMethods
