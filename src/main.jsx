import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/quest-1/App.jsx'
import Button from './components/quest-2/Button.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Quest - React Básico</h1>
    <App />
    <Button label='A Label desse botão é uma dica - Sempre dê o seu melhor!'/>
  </React.StrictMode>,
)
