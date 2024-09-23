import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {

    let navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: ""
    });

    const { name, description, price } = product;

    const onInputChange = (e) => {
        setProduct({ ...product, [e.target.name]:e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/product", product)
        navigate("/");
    }

    return (
        <div classNameName='container'>
            <br></br>
            <br></br>

            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <br></br>
                <h1>Crear producto</h1>
                <br></br>

                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type={"text"} name='name' value={name} onChange={(e) => onInputChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Description</label>
                        <input type={"text"} name='description' value={description} onChange={(e) => onInputChange(e)} className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Price</label>
                        <input type={"number"} name='price' value={price} onChange={(e) => onInputChange(e)} className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
