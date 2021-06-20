import Product, { ProductAction, ProductListAction } from "../components/data/interfaces/product";

const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCESS, PRODUCT_DETAILS_FAIL } = require('../constants/productConstants');

interface ProductListResult {
    loading: boolean,
    error?: any,
    products?: Product[]
}

interface ProductDetailResult {
    loading: boolean,
    error?: any,
    product?
    : Product
}


export const productListReducer = (state: ProductListResult = {
    loading: false,
    products: []
}, action: ProductListAction): ProductListResult => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true };
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.data
            }
        case PRODUCT_LIST_FAIL:
            return {
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const productDetailsReducer = (state: ProductDetailResult = {
    loading: false
}, action: ProductAction): ProductDetailResult => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case PRODUCT_DETAILS_SUCESS:
            return {
                loading: false,
                product: action.data
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.data
            }
        default:
            return state;
    }
}