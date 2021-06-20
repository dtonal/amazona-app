import Rating from '../Rating';
import Product from '../data/interfaces/product';

export default function ProductInfos(props: { product: Product }) {
    const product = props.product;
    return (
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
    )
}
