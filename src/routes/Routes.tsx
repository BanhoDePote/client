import { Suspense } from 'react'
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from 'react-router-dom'
import { Home, GenericNotFound, Auth } from './paths'

export const Routes = () => {
  return (
    <Suspense fallback={<p>carregando</p>}>
      <RoutesReactRouterDom>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<GenericNotFound />} />
      </RoutesReactRouterDom>
    </Suspense>
  )
}
