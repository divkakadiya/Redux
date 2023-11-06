import axios from "axios"
import { API, BASE_URL, DELETE_API, UPDATE_API } from "../../constant"

// get api
export const getApi = () => {
    return axios.get(BASE_URL + API).then(res => {
        const data = res.data
        const status = res.status

        return {
            data, status
        }
    })
}

// post api
export const postApi = (action) => {
    return axios.post(BASE_URL + API, action.payload).then(res => {
        const data = res.data
        const status = res.status

        return {
            data, status
        }
    })
}

// update api
export const updateApi = (action) => {
    return axios.put(BASE_URL + UPDATE_API + action.payload.id, action.payload).then(res => {
        const edit_data = action.payload
        const status = res.status

        return {
            edit_data, status
        }
    })
}

// delete action
export const deleteApi = (action) => {
    return axios.delete(BASE_URL + DELETE_API + action.payload).then(res => {
        const delete_data = action.payload
        const status = res.status

        return {
            delete_data, status
        }
    })
}