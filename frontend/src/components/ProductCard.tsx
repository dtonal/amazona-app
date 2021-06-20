import Rating from './Rating';
import Product from './data/interfaces/product';

function ProductCard(props: { product: Product }) {
    const product = props.product;
    return < div className="card" >
        <a href={'product/' + product._id}>
            <img className="medium" src={'images/p' + product._id + '.jpg'} alt="product" />
        </a>
        <div className="card-body">
            <a href={'product/' + product._id}>
                <h2>{product.name}</h2>
            </a>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <div className="price">
                {product.price}
            </div>
        </div>
    </div>;
}

export default ProductCard;