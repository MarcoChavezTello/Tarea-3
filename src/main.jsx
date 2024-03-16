import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import { ProviderContext } from './context/ContextCart.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
<ProviderContext>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
</ProviderContext>
  

  
)
