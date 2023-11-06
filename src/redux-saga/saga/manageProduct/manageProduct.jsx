import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_SUCCESS } from "../../product/action/action";
import { deleteApi, getApi, postApi, updateApi } from "../../product/api/api";
import { call, put } from 'redux-saga/effects'

// get product
export function* handleGetProduct(action) {
    try {
        const res = yield call(getApi, action)
        const data = res.data
        const status = res.status

        if (status == 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data })
        } else {
            yield put({ type: GET_PRODUCT_ERROR, data })
        }
    } catch (err) {
        yield put({ type: GET_PRODUCT_ERROR, err })
    }
}

// post product
export function* handlePostProduct(action) {
    try {
        const res = yield call(postApi, action)
        const data = res.data
        const status = res.status

        if (status == 201) {
            yield put({ type: POST_PRODUCT_SUCCESS, data })
        } else {
            yield put({ type: POST_PRODUCT_ERROR, data })
        }
    } catch (err) {
        yield put({ type: POST_PRODUCT_ERROR, err })
    }
}

// update product
export function* handleUpdateProduct(action) {
    try {
        const res = yield call(updateApi, action)
        const data = res.edit_data
        const status = res.status

        if (status == 200) yield put({ type: UPDATE_PRODUCT_SUCCESS, data })
        else yield put({ type: UPDATE_PRODUCT_ERROR, data })
    } catch (err) {
        yield put({ type: UPDATE_PRODUCT_ERROR, err })
    }
}

// delete product
export function* handleDeleteProduct(action) {
    try {
        const res = yield call(deleteApi, action)
        const data = res.delete_data
        const status = res.status

        if (status == 200) yield put({ type: DELETE_PRODUCT_SUCCESS, data })
        else yield put({ type: DELETE_PRODUCT_ERROR, data })
    } catch (err) {
        yield put({ type: DELETE_PRODUCT_ERROR, err })
    }
}