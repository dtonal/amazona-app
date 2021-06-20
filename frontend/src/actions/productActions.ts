import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../constants/productConstants"
import Axios from "axios";
import { ProductDispatchType, ProductListDispatchType } from '../components/data/interfaces/product';

export const getProductList = () =>
    async (dispatch: ProductListDispatchType) => {
        dispatch({
            type: PRODUCT_LIST_REQUEST
        });
        try {
            const { data } = await Axios.get(`/api/products`);
            dispatch({
                type: PRODUCT_LIST_SUCCESS,
                data: data
            });
        } catch (error) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                error: error.message
            });
        }
    }


export const getProduct = (id: number) =>
    async (dispatch: ProductDispatchType) => {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        });
        try {
            const { data } = await Axios.get(`/api/product/${id}`);
            dispatch({
                type: PRODUCT_DETAILS_SUCESS,
                data: data
            });
        } catch (error) {
            dispatch({
                type: PRODUCT_DETAILS_FAIL,
                error: error.message
            });
        }
    }