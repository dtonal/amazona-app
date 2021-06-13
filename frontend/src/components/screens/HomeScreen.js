import React from 'react'
import { products } from '../../data'
import Product from '../Product'

export default function HomeScreen() {
    return (
        <div className="row center">
            {products.map(product => <Product key={product._id} product={product} />)}
        </div>
    )
}
