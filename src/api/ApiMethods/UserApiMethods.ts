import {API_BASE_URL} from 'config'
import type {LoginProps, RefreshTokenProps, RegisterProps} from 'api/Request'
import type {LoginResponse, RefreshTokenResponse, RegisterResponse, User} from 'api/Response'
import useAuthToken from 'hooks/persisted/useAuthToken'

import ApiBase from '../ApiBase'

export type Meta = {
  total: number
  limit: number
  offset: number
  page: number
}

type ReferralAccount = {
  data: object[]
  meta: Meta
}

class ApiMethods extends ApiBase {
  async register(props: RegisterProps): Promise<RegisterResponse> {
    return await this.post('/api/register', props)
  }

  async login(props: LoginProps): Promise<LoginResponse> {
    return await this.post<LoginResponse>('/api/login', props)
  }
  async check(): Promise<string> {
    return await this.get<string>('/v1/api/users/status')
  }
  async refreshToken(props: RefreshTokenProps): Promise<RefreshTokenResponse> {
    return await this.post<RefreshTokenResponse>('/v1/api/admin/refresh-token', props)
  }

  async getProfile(): Promise<User> {
    return await this.get('/v1/api/users/profile')
  }

  async getReferralStats({id, ...params}: {id: number}): Promise<ReferralAccount> {
    // return await this.get<ReferralAccount>(`/users/${id}/referrals_stats`, {
    //   page: 1,
    //   limit: 100,
    // })

    // eslint-disable-next-line no-console
    console.log(id, params, 'this id and params')

    const test = {
      data: [
        {
          total_amount: '0.005',
          referral_id: 51,
          referral_account_type: 'affiliate',
          referral_status: 'deleted',
          referral_joined_at: '2023-07-14T08:03:50.123Z',
          referral_total_invites: 1,
          referral_total_regulars: 0,
          referral_total_affiliates: 1,
          referral_full_name: 'F. Ahammed',
          referral_email: 'faysalduet@gmail.com',
        },
        {
          total_amount: '0.0',
          referral_id: 151,
          referral_account_type: 'regular',
          referral_status: 'active',
          referral_joined_at: '2023-10-12T07:07:11.783Z',
          referral_total_invites: 0,
          referral_total_regulars: 0,
          referral_total_affiliates: 0,
          referral_full_name: 'Account Deleted',
          referral_email: 'mdnasimhossain094@gmail.com',
        },
        {
          total_amount: '0.0',
          referral_id: 155,
          referral_account_type: 'affiliate',
          referral_status: 'inactive',
          referral_joined_at: '2023-11-20T13:04:20.440Z',
          referral_total_invites: 0,
          referral_total_regulars: 0,
          referral_total_affiliates: 0,
          referral_full_name: 'Account Deleted',
          referral_email: 'test7@gmail.com',
        },
        {
          total_amount: '0.0',
          referral_id: 159,
          referral_account_type: 'regular',
          referral_status: 'active',
          referral_joined_at: '2023-12-18T06:11:17.797Z',
          referral_total_invites: 0,
          referral_total_regulars: 0,
          referral_total_affiliates: 0,
          referral_full_name: 'Account Deleted',
          referral_email: 'fa@gmail.com',
        },
        {
          total_amount: '0.0',
          referral_id: 160,
          referral_account_type: 'affiliate',
          referral_status: 'inactive',
          referral_joined_at: '2023-12-18T06:31:01.783Z',
          referral_total_invites: 0,
          referral_total_regulars: 0,
          referral_total_affiliates: 0,
          referral_full_name: 'Account Deleted',
          referral_email: 'fa-afi@gmail.com',
        },
        {
          total_amount: '0.0',
          referral_id: 161,
          referral_account_type: 'regular',
          referral_status: 'active',
          referral_joined_at: '2023-12-18T15:03:13.416Z',
          referral_total_invites: 0,
          referral_total_regulars: 0,
          referral_total_affiliates: 0,
          referral_full_name: 'F. Haack',
          referral_email: 'runnrtv@gmail.com',
        },
        {
          total_amount: '0.0',
          referral_id: 162,
          referral_account_type: 'affiliate',
          referral_status: 'inactive',
          referral_joined_at: '2023-12-18T15:10:24.914Z',
          referral_total_invites: 0,
          referral_total_regulars: 0,
          referral_total_affiliates: 0,
          referral_full_name: 'F. Haack',
          referral_email: 'florian.haa@web.de',
        },
        {
          total_amount: '0.0',
          referral_id: 173,
          referral_account_type: 'affiliate',
          referral_status: 'inactive',
          referral_joined_at: '2024-01-29T12:45:37.948Z',
          referral_total_invites: 0,
          referral_total_regulars: 0,
          referral_total_affiliates: 0,
          referral_full_name: 'Account Deleted',
          referral_email: 'abc@test.com',
        },
        {
          total_amount: '0.0',
          referral_id: 175,
          referral_account_type: 'affiliate',
          referral_status: 'deleted',
          referral_joined_at: '2024-01-29T13:03:04.199Z',
          referral_total_invites: 0,
          referral_total_regulars: 0,
          referral_total_affiliates: 0,
          referral_full_name: 'Account Deleted',
          referral_email: 'userid175@removed.users',
        },
        {
          total_amount: '0.0',
          referral_id: 176,
          referral_account_type: 'regular',
          referral_status: 'active',
          referral_joined_at: '2024-01-29T13:06:02.477Z',
          referral_total_invites: 0,
          referral_total_regulars: 0,
          referral_total_affiliates: 0,
          referral_full_name: 'Account Deleted',
          referral_email: 'a3@gmail.com',
        },
      ],
      meta: {
        total: 11,
        offset: 0,
        limit: 10,
        page: 2,
      },
    }

    return await test
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
