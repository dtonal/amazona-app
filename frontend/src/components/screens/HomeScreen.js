import { React, useEffect } from 'react'
import Product from '../Product'
import LoadingBox from '../LoadingBox';
import ErrorBox from '../ErrorBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    if (error) {
        return <ErrorBox variant="danger">{error.message}</ErrorBox>;
    } else if (loading) {
        return <LoadingBox></LoadingBox>;
    } else {
        return (
            <div className="row center">
                {products.map(product => <Product key={product._id} product={product} />)}
            </div>
        );
    }
}
