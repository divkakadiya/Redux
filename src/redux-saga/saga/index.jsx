import { all } from "redux-saga/effects";
import { deleteProductSaga, getProductSaga, postProductSaga, updateProductSaga } from "./root/rootProductsaga";

export function* rootSaga() {
    yield all([getProductSaga(), postProductSaga(), updateProductSaga(), deleteProductSaga()])
}