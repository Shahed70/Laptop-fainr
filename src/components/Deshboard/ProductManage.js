import axios from "axios";
import React, { useEffect, useState } from "react";
import './ProductManage.css'
const ProductManage = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://strawberry-cobbler-77507.herokuapp.com/getProduct')
            .then(res => setProducts(res.data))
            .then(err => console.log(err))
    }, [])

    const deleteProductHandler = (id)=>{
        axios.post(`https://strawberry-cobbler-77507.herokuapp.com/deleteProduct/${id}`)
          .then(res => {
              console.log(res);
              setProducts()
          })
       
        console.log(id);
    }
  return (
       <div className="manage-product">
           <table className="table">
                <thead>
                    <tr>
                        <th>Porduct Name</th>
                        <th>Price</th>
                        <th>Product Description</th>
                        <th className="pl-5">Action</th>
                    </tr>
                </thead>
              
                <tbody>
                    {
                        products.length > 0 ? 
                        products.map(product => (
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td className="btn btn-success">Edit</td>
                                <td onClick={()=> deleteProductHandler(product._id)} className="btn btn-danger ml-2">Delete</td>
                            </tr>
                           ))
                           : <tr><td><h1>Loading.....</h1></td></tr>
                        }
                   
                </tbody>
           </table>
       </div>

  );
};

export default ProductManage;
