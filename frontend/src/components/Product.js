import Rating from './Rating.js';

function Product(props) {
    const product = props.product;
    return < div className="card" >
        <a href={'products/' + product._id + '.html'}>
            <img className="medium" src={'images/p' + product._id + '.jpg'} alt="product" />
        </a>
        <div className="card-body">
            <a href={'products/' + product._id + '.html'}>
                <h2>{product.name}</h2>
            </a>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <div className="price">
                {product.price}
            </div>
        </div>
    </div>;
}

export default Product;