import { Component } from 'react'
import axios from 'axios'
import Modal from './Modal'
import {memo} from 'react'

interface item {
    id: number
    name: string,
    address: string,
    phone: number
}
interface state {
    id: number
    name: string,
    address: string,
    phone: number,
    listItem: item[],
    isShow: boolean
}
interface props {

}
class Table extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            id: 0,
            name: '',
            address: '',
            phone: 0,
            listItem: [],
            isShow: false,
        }
    }
    componentDidMount() {
        this.getdata()
    }
    getdata() {
        axios.get('https://61bf4956b25c3a00173f4d95.mockapi.io/todo')
            .then(res => {
                this.setState({ listItem: res.data });
            })
            .catch(error => console.log(error));
    }
    deleteItem(id: number, event: any) {
        event.stopPropagation()
        axios.delete(`https://61bf4956b25c3a00173f4d95.mockapi.io/todo/${id}`)
            .then(() => {
                this.getdata()
            })
    }
    show = (id: number, item: any) => {
        console.log(item);
        this.setState({
            isShow:true,
            id: item.id,
            name: item.name,
            address: item.address,
            phone: item.phone,
        })

    }
    close = () => {
        this.setState({ isShow: false })
    }
    render() {
        return <div>
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
                    {this.state.listItem.map(item => (
                        <tr key={item.id} onClick={() => this.show(item.id, item)}>
                            <td >{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>
                                <button className='btn btn-warning me-3'>Edit</button>
                                <button className='btn btn-danger' onClick={(event) => this.deleteItem(item.id, event)}>Delete</button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
            {this.state.isShow &&
                <div className="modal" id="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Item information</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.close}></button>
                            </div>
                            <div className="modal-body">
                                {/* <label htmlFor="">Id</label> */}
                                {/* <input type="text" className="modal-input" defaultValue={this.state.id} /> */}
                                <span><strong>Id:</strong>  {this.state.id}</span>

                                {/* <label htmlFor="">Name</label> */}
                                {/* <input type="text" className="modal-input" defaultValue={this.state.name}/> */}
                                <span><strong>Name:</strong>  {this.state.name}</span>

                                {/* <label htmlFor="">Address</label> */}
                                {/* <input type="text" className="modal-input" defaultValue={this.state.address}/> */}
                                <span><strong>Address:</strong>  {this.state.address}</span>

                                {/* <label htmlFor="">Phone</label> */}
                                {/* <input type="text" className="modal-input" defaultValue={this.state.phone}/> */}
                                <span><strong>Phone:</strong>  {this.state.phone}</span>

                            </div>

                        </div>
                    </div>
                </div>
            }

        </div>
    }
}
export default memo(Table)