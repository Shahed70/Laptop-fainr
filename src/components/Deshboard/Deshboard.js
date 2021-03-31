import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Deshboard.css'
const Deshboard = () => {
    const [products, setProducts] = useState({
        name:'',
        price:'',
        weight:'',
        description:'',
    })

    const imgUploadHandler = (e)=>{
        const imgFile = e.target.files[0]
        const imgData = new FormData()
        imgData.set('key', '5f8254e577ededae90aac2e97f10d502')
        imgData.append('image', imgFile)

        axios.post('https://api.imgbb.com/1/upload', imgData)
           .then(res => {
               const productImg = {...products}
               productImg.image = res.data.data.display_url;
               setProducts(productImg)
           })
           .catch(err => console.log(err))
  }

  const addProductHandler = (e)=>{
      e.preventDefault()
      axios.post('http://localhost:5000/addProduct', products)
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }
    //console.log(product);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-sm-12 admin-nav pt-5">
                     <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="#">Manage Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light"  to="#">Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="#">Edit Product</Link>
                            </li>
                     </ul>
                </div>
                <div className="col-md-10 col-sm-12 py-5">
                    <h1 className="display-4 mb-5">Mange Product</h1>
                <form onSubmit={addProductHandler}>
                  <div className="d-flex">
                    <div className="d-flex flex-column w-100">
                        <div className="form-group">
                            <label >Product Name</label>
                            <input type="text" className="form-control" name="name" onBlur={(e)=> setProducts({...products, [e.target.name] : e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>

                        <div className="form-group">
                            <label >Product Price</label>
                            <input type="text" className="form-control" name="price" onBlur={(e)=> setProducts({...products, [e.target.name] : e.target.value})} id="exampleInputPassword1"/>
                        </div>
                        
                        <div className="form-group">
                            <label >Product Weight</label>
                            <input type="text" className="form-control" name="weight" onBlur={(e)=> setProducts({...products, [e.target.name] : e.target.value})} id="exampleInputPassword1"/>
                        </div>
                    </div>

                    <div className="d-flex flex-column w-100 ml-4">
                        <div className="form-group">
                            <label >Product Descriptin</label>
                            <input type="text" className="form-control" name="description" onBlur={(e)=> setProducts({...products, [e.target.name] : e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        
                        <div className="form-group">
                            <label >Product Image</label>
                            <input type="file" className="form-control" onChange={imgUploadHandler} id="exampleInputPassword1"/>
                        </div>
                 </div>
            </div>
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Deshboard;