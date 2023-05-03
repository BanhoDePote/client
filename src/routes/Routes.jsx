import { Suspense, lazy } from 'react'
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from 'react-router-dom'
import { Home, GenericNotFound } from './paths'
import { Loading } from '../components/Loading'
import { Waiter } from '../pages/Home/Waiter'
import { Auth } from '../pages/Auth'
import {ScreenTable} from '../pages/Home/Waiter/AddTable/screenTable'

export const Routes = () => {
  return (
    <Suspense fallback={<><Loading/></>}>
      <RoutesReactRouterDom>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/waiter" element={<Waiter/>} />
        <Route path="/waiter/:tableId" element={<ScreenTable/>} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<GenericNotFound />} />
      </RoutesReactRouterDom>
    </Suspense>
  )
}
