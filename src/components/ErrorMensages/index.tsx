import React from 'react'
import Template from './template'
import './error-mensages.scss'
const ErrorMensages: React.FC<{ type: string }> = pops => {
    return <Template type={pops.type} />
}

export default ErrorMensages
