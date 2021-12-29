import React,{ Component } from 'react'
interface props{
    
}
interface state {
    isShow:boolean;
}
class Modal extends Component<props,state> {
    constructor(props:props){
        super(props)
        this.state = {
            isShow: false
        }
        
    }
   
    close=()=> {
        const modal:any=document.getElementById('modal')
        modal.style.display="none"        
    }
    render() {
        return <div>
            <div className="modal" id="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Item information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.close}></button>
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
            </div>
        </div>
    }
}
export default Modal