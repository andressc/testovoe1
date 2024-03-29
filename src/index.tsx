import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app/App'

import './app/firebase/firebase'
import { Provider } from 'react-redux'
import { store } from 'app/model/store'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    // </React.StrictMode>
)
