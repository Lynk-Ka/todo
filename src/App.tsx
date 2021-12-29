// import React, { constructor, Props } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Table from './components/Table'
import Form from './components/Form'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <div className="header">Todo List</div>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>Toggle</button>
      <div className="row">
        {show ?
          <>
            <div className="col-4">
              <Form />
            </div>
            <div className="col-8">
              <Table />
            </div>
          </>
          :<div className="col-12">
          <Table />
        </div>
        }
        
        {/* <div className="col-12">
          <Table />
        </div> */}

      </div>

    </div>
  );
}

export default App;
