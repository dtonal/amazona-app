interface Product {
    _id: number,
    name: string,
    rating: number,
    numReviews: number,
    price: number,
    description: string,
    countInStock: number,
    image: string
}

export default Product;

export type ProductAction = {
    type: string,
    data?: Product
    error?: any
}

export type ProductListAction = {
    type: string,
    data?: Product[]
    error?: any
}

export type ProductDispatchType = (args: ProductAction) => ProductAction

export type ProductListDispatchType = (args: ProductListAction) => ProductListAction