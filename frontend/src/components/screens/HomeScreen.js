import { React, useEffect, useState } from 'react'
import Product from '../Product'
import axios from 'axios';
import LoadingBox from '../LoadingBox';
import ErrorBox from '../ErrorBox';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function HomeScreen() {
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const sendGetRequest = async () => {
            try {
                setLoading(true);
                const resp = await axios.get(`/apin/products`)
                console.log(resp.data);
                const products = resp.data;
                setProducts(products);
                setLoading(false);
            } catch (err) {
                // Handle Error Here
                console.error(err);
                setLoading(false);
                setError(err);
            }
        };
        sendGetRequest();
    }, [])

    if (error) {
        return <ErrorBox variant="danger">{error.message}</ErrorBox>;
    } else if (isLoading) {
        return <LoadingBox></LoadingBox>;
    } else {
        return (
            <div className="row center">
                {products.map(product => <Product key={product._id} product={product} />)}
            </div>
        );
    }
}
