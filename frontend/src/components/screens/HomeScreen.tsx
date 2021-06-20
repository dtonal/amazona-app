import { useEffect } from 'react'
import ProductCard from '../ProductCard'
import LoadingBox from '../LoadingBox';
import ErrorBox from '../ErrorBox';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../../actions/productActions';
import { RootState } from '../data/store';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { RouteComponentProps } from 'react-router-dom';

type TParams = {};

export default function HomeScreen({ match }: RouteComponentProps<TParams>) {
    const dispatch = useDispatch();
    const productList = useSelector((state: RootState) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    if (error) {
        return <ErrorBox variant="danger">{error.message}</ErrorBox>;
    } else if (loading || products == null) {
        return <LoadingBox></LoadingBox>;
    } else {
        return (
            <div className="row center">
                {products.map(product => <ProductCard key={product._id} product={product} />)}
            </div>
        );
    }
}
