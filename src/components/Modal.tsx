import React, { Component } from 'react'
import { useState } from 'react'
interface props {

}
interface state {
    isShow: boolean;
}
function Modal() {
    const [show, setShow] = useState(true)

    const close = () => {
        setShow(false)
    }
    const hide = () => {
        setShow(false)
    }
    return (<div>
        {show ?? <div className="modal" id="modal" onClick={hide}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Item information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>
                    </div>
                    <div className="modal-body">
                        <label htmlFor="">Id</label>
                        <input type="text" className="modal-input" />

                        <label htmlFor="">Name</label>
                        <input type="text" className="modal-input" />
                        <label htmlFor="">Address</label>
                        <input type="text" className="modal-input" />
                        <label htmlFor="">Phone</label>
                        <input type="text" className="modal-input" />
                    </div>

                </div>
            </div>
        </div>}
    </div>)

}
export default Modal