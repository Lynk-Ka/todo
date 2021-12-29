import { Component } from 'react'

class Form extends Component {

    render() {
        return <div>
            <form className="form-add">
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="email" className="form-control" />                        
                </div>
                <div className="mb-3">
                    <label  className="form-label">Address</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Phone</label>
                    <input type="text" className="form-control" />
                </div>
                                
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    }
}
export default Form