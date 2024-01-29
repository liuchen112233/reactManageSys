import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './router'

export default function Index() {
    const element = useRoutes(routes)
    return (
        <div>{element}</div>
    )
}

