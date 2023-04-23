import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './routes/components/ErrorBoundary'
import { Routes } from './routes/Routes'
import GlobalStyle from './styles/global'
import './styles/colors.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export const App = () => {
  return (

   
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        rtl={false}
      />
      <ErrorBoundary>
          <Routes />
      </ErrorBoundary>
    </BrowserRouter>

  )
}
