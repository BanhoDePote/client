import { Suspense, lazy } from 'react'
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from 'react-router-dom'
import { Home, GenericNotFound, Auth } from './paths'
import { Loading } from './components/ErrorBoundary/Loading'
import { Waiter } from 'src/pages/Home/Waiter/Waiter'


export const Routes = () => {
  return (
    <Suspense fallback={<><Loading/></>}>
      <RoutesReactRouterDom>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/waiter" element={<Waiter/>} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<GenericNotFound />} />
      </RoutesReactRouterDom>
    </Suspense>
  )
}
