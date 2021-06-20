import Product from '../data/interfaces/product';

export default function ProductActionCard(props: { product: Product }) {
    const product = props.product;
    return (
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
    )
}
