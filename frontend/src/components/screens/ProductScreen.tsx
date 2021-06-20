import React, { useEffect } from 'react'
import LoadingBox from '../LoadingBox';
import ErrorBox from '../ErrorBox';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductImage from '../product/ProductImage';
import ProductInfos from '../product/ProductInfos';
import ProductActionCard from '../product/ProductActionCard';
import { getProduct } from '../../actions/productActions';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../data/store';

type TParams = { id: string };

export default function ProductScreen({ match }: RouteComponentProps<TParams>) {
    const dispatch = useDispatch();
    const productId = match.params.id;
    const productDetails = useSelector((state: RootState) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(getProduct(parseInt(match.params.id)));
    }, [dispatch, productId]
    );

    if (error) {
        return <ErrorBox variant="danger">{error}</ErrorBox>;
    } else if (loading || product == null) {
        return <LoadingBox></LoadingBox>;
    } else {
        return (
            <div>
                <div className="row top">
                    <Link to={"/"}>Back to result</Link>
                    <ProductImage image={product.image} name={product.name} />
                    <ProductInfos product={product} />
                    <ProductActionCard product={product} />
                </div>
            </div>
        )
    }
}
