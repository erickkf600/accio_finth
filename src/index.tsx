import React from 'react'
import ReactDOM from 'react-dom'
import { Providers } from './app.provider.module'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import Routing from './routing'
import './utils/prototypes'
import './utils/attributes'

ReactDOM.render(
    <Providers>
        <div className="flex-page">
            <Routing />
        </div>
    </Providers>,
    document.getElementById('root'),
)

reportWebVitals()
