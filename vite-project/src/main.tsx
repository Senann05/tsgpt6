import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserList from './UserList'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserList />
  </StrictMode>,
)
