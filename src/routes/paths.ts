import { lazy } from 'react'

export const Home = lazy(() =>
  import('src/pages/Home/Home').then(module => ({
    default: module.Home,
  })),
)

export const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

export const Auth = lazy(() =>
  import('src/pages/Auth/Auth').then(module => ({
    default: module.Auth,
  })),
)
