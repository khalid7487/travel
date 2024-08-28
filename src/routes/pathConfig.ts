interface BasePathConfig {
  path: string
  to: string
}

type Navigation = 'register' | 'login' | 'home' | 'notFound' | 'about' | 'details'

type ChildNavigation = 'emailConfirm' | 'resetPassword' | 'newPassword' | 'changePassword'

type NestedProps = {children?: Partial<Record<ChildNavigation, BasePathConfig>>}

export type PathConfig = {
  path: string
  to: string
} & NestedProps

const pathConfig: Record<Navigation, PathConfig> = {
  register: {
    path: '/register',
    to: '/register',
    children: {
      emailConfirm: {
        path: '/register',
        to: '/register',
      },
    },
  },
  login: {
    path: '/login',
    to: '/login',
    children: {
      resetPassword: {
        path: 'reset-password',
        to: '/login/reset-password',
      },
      newPassword: {
        path: 'new-password',
        to: '/login/new-password',
      },
    },
  },
  home: {
    path: '/',
    to: '/',
  },
  details: {
    path: '/details/:id',
    to: '/details/',
  },
  about: {
    path: '/about-us',
    to: '/about-us',
  },
  notFound: {
    path: '/not-found',
    to: '/not-found',
  },
}

export default pathConfig
