import React, { useEffect } from 'react'
import Rating from '../Rating';
import LoadingBox from '../LoadingBox';
import ErrorBox from '../ErrorBox';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { getProduct } from '../../actions/productActions';


export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(getProduct(props.match.params.id));
    }, [dispatch, productId]
    );

    if (error) {
        return <ErrorBox variant="danger">{error}</ErrorBox>;
    } else if (loading) {
        return <LoadingBox></LoadingBox>;
    } else {
        return (
            <div>
                <div className="row top">
                    <Link to={"/"}>Back to result</Link>
                    <div className="col-2">
                        <img className="large" src={product.image} alt={product.name}></img>
                    </div>
                    <div className="col-1">
                        <ul>
                            <li>
                                <h1> {product.name} </h1>
                            </li>
                            <li>
                                <Rating
                                    rating={product.rating}
                                    numReviews={product.numReviews}
                                />
                            </li>
                            <li>
                                Price: {product.price} €
                            </li>
                            <li>
                                Description:
                                <p>{product.description}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div className="price">
                                            {product.price} €
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        <div>
                                            {product.countInStock > 0 ?
                                                <span className="success">In Stock</span> :
                                                <span className="error">Unavaible</span>}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button className="primary block">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
