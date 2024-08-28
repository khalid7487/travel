import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'

import 'i18n'
import ThemeProvider from 'Themes'
import SnackbarProvider from 'Providers/SnackbarProvider'
import ReactQueryProvider from 'Providers/ReactQueryProvider'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <SnackbarProvider>
          <ReactQueryProvider>
            <App />
          </ReactQueryProvider>
        </SnackbarProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
