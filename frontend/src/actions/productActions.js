import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../constants/productConstants"
import Axios from "axios";

const fetchData = (requestType, successType, failType, url) =>
    async (dispatch) => {
        dispatch({
            type: requestType
        });
        try {
            const { data } = await Axios.get(url);
            dispatch({
                type: successType,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: failType,
                payload: error.message
            });
        }

    };

export const listProducts = () =>
    fetchData(PRODUCT_LIST_REQUEST,
        PRODUCT_LIST_SUCCESS,
        PRODUCT_LIST_FAIL,
        `/api/products`);

export const getProduct = (id) =>
    fetchData(PRODUCT_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCESS,
        PRODUCT_DETAILS_FAIL,
        `/api/product/${id}`);
