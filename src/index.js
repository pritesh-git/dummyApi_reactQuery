import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App'
import './index.css'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
)
