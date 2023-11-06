import { take, takeEvery } from "redux-saga/effects";
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, UPDATE_PRODUCT_PROGRESS } from "../../product/action/action";
import { handleDeleteProduct, handleGetProduct, handlePostProduct, handleUpdateProduct } from "../manageProduct/manageProduct";

export function* getProductSaga() {
    yield takeEvery(GET_PRODUCT_PROGRESS, handleGetProduct)
}

export function* postProductSaga() {
    yield takeEvery(POST_PRODUCT_PROGRESS, handlePostProduct)
}

export function* updateProductSaga() {
    yield takeEvery(UPDATE_PRODUCT_PROGRESS, handleUpdateProduct)
}

export function* deleteProductSaga() {
    yield takeEvery(DELETE_PRODUCT_PROGRESS, handleDeleteProduct)
}