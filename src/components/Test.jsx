import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, UPDATE_PRODUCT_PROGRESS } from '../redux-saga/product/action/action'

const Test = () => {
    const [fdata, setFdata] = useState(
        {
            userName: '',
            userEmail: ''
        }
    )
    const [signal, setSignal] = useState(false)

    const dispatch = useDispatch()
    const data = useSelector(state => state.productReducer)
    console.log("🚀 ~ file: Test.jsx:9 ~ Test ~ data:", data);

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROGRESS })
    }, [])

    const fetchInput = (e) => {
        setFdata({ ...fdata, [e.target.name]: e.target.value })
    }


    const postData = () => {
        if (fdata.userName == null || fdata.userEmail == null) {
            alert('Both userName and userEmail must be provided');
        } else {
            dispatch({ type: POST_PRODUCT_PROGRESS, payload: fdata });

            setFdata({
                userName: '',
                userEmail: ''
            });
        }
    }


    const edit = (id) => {
        const ed = data.product[id]
        setFdata(ed)
        setSignal(true)
    }


    const updateData = () => {

        dispatch({ type: UPDATE_PRODUCT_PROGRESS, payload: fdata })
        setSignal(false)

        setFdata({
            userName: '',
            userEmail: ''
        })

    }

    const removeData = (id) => {
        dispatch({ type: DELETE_PRODUCT_PROGRESS, payload: id })
    }

    return (
        <>
            <div className="registration-form">
                <div className='form'>
                    <div className="form-icon">
                        <span><i className="icon icon-user" /></span>
                    </div>
                    <div className="form-group">
                        <input type="text" id='uname' name='userName' value={fdata.userName} onChange={fetchInput} className="form-control item" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" id='uemail' name='userEmail' value={fdata.userEmail} onChange={fetchInput} className="form-control item" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <button onClick={signal ? updateData : postData} className="btn btn-block create-account"> {signal ? 'Update' : 'Submit'}</button>
                    </div>
                </div>
            </div>

            <table className="table table-hover">
                <thead className="mdb-color darken-3">
                    <tr className="text-white">
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.product.map((v, i) =>
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.userName}</td>
                                <td>{v.userEmail}</td>
                                <td>
                                    <button style={{ marginRight: '1vw' }} onClick={() => edit(i)}>Edit</button>
                                    <button onClick={() => removeData(v.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Test