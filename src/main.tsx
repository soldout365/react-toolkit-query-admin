import '@ant-design/v5-patch-for-react-19'
import './index.css'

import App from './App.tsx'
import { AuthProvider } from './contexts/auth-context.tsx'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </StrictMode>
)
