import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import root from './routes/route'
import {  RouterProvider } from "react-router";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={root} />
  </StrictMode>,
)
