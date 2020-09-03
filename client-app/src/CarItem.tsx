import React from 'react'
import { ICar } from './demo'

interface Iprops {
    car : ICar
}

export const CarItem: React.FC<Iprops> = ({car}) => {
    return (
        <div>
            <h1>{car.color}</h1>
        </div>
    )
}
