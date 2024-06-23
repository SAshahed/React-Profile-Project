import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function CasesError() {
    const error =useRouteError()
    return (
        <div className='Cases-Error'>
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Back to Homepage</Link>

        </div>
    )
}


