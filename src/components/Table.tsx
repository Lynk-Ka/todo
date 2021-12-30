import axios from 'axios'
// import Form from './Form'
import { memo, useState, useEffect } from 'react'

function Table() {
    const [items, setItems] = useState([{
        id: 0,
        name: '',
        address: '',
        phone: 0
    }])
    // const[itemAdd,setItemAdd] = useState({
    //     nameAdd: '',
    //     addressAdd: '',
    //     phoneAdd: 0
    // })
    const [show, setShow] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const [idModal, setIdModal] = useState()
    const [nameModal, setNameModal] = useState('')
    const [addressModal, setAddressModal] = useState('')
    const [phoneModal, setPhoneModal] = useState()

    const [nameAdd, setNameAdd] = useState('')
    const [addressAdd, setAddressAdd] = useState('')
    const [phoneAdd, setPhoneAdd] = useState(0)

    useEffect(() => (getdata()), [])

    const getdata = () => {
        axios.get('https://61bf4956b25c3a00173f4d95.mockapi.io/todo')
            .then(res => {
                setItems(res.data);
            })
            .catch(error => console.log(error));
    }
    const deleteItem = (id: number, event: any) => {
        event.stopPropagation()
        axios.delete(`https://61bf4956b25c3a00173f4d95.mockapi.io/todo/${id}`)
            .then(() => {
                getdata()
            })
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const obj = { name: nameAdd, address: addressAdd, phone: phoneAdd }
        console.log(obj);

        axios.post(`https://61bf4956b25c3a00173f4d95.mockapi.io/todo`, obj)
            .then((res) => {
                getdata()
            })
        setShowForm(false)
    }
    
    const editItem = (item: any,e: any) => {
        e.stopPropagation()
        setShowForm(true)
        console.log(item);
        
       setNameAdd(item.name)
       setAddressAdd(item.address)
       
       setPhoneAdd(item.phone)
        
        // axios.put(`https://61bf4956b25c3a00173f4d95.mockapi.io/todo/${item.id}`,item)
        //     .then((res) => {
        //         console.log(res.data);
                
        //     })
    }
    
    
    const showModal = (id: number, item: any) => {
        setShow(true)
        setIdModal(item.id)
        setNameModal(item.name)
        setAddressModal(item.address)
        setPhoneModal(item.phone)
    }
    const closeModal = () => setShow(false)
    const hideModal = () => setShow(false)
    const closeForm = () => setShowForm(false)
    
    
    
    return (<div>
        <button className="btn btn-primary btn-add" onClick={() => setShowForm(!showForm)}>Add Member</button>

        {showForm &&
            <form className="form-add">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" required className="form-control" value={nameAdd} onChange={(e) => setNameAdd(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" required className="form-control" value={addressAdd} onChange={(e) => setAddressAdd(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="number" required className="form-control"  value={phoneAdd} onChange={(e) => setPhoneAdd(Number(e.target.value))} />
                </div>

                <button className="btn btn-danger me-3" onClick={closeForm}>Close</button>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button>

            </form>}

        <table className="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody >
                {items.map(item => (
                    <tr key={item.id} onClick={() => showModal(item.id, item)}>
                        <td >{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td>
                            <button className='btn btn-warning me-3' onClick={(event) => editItem(item, event)}>Edit</button>
                            <button className='btn btn-danger' onClick={(event) => deleteItem(item.id, event)}>Delete</button>
                        </td>
                    </tr>
                ))}


            </tbody>
        </table>
        {show &&
            <div className="modal" id="modal" onClick={hideModal}>
                <div className="modal-dialog">
                    <div className="modal-content" onClick={(event) => (event.stopPropagation())}>
                        <div className="modal-header">
                            <h5 className="modal-title">Item information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">

                            <span><strong>Id:</strong>  {idModal}</span>

                            <span><strong>Name:</strong>  {nameModal}</span>

                            <span><strong>Address:</strong>  {addressModal}</span>

                            <span><strong>Phone:</strong>  {phoneModal}</span>

                        </div>

                    </div>
                </div>
            </div>
        }

    </div>)

}
export default memo(Table)