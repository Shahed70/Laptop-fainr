import React from 'react';
import { useHistory } from 'react-router';
import './Product.css'
const Product = ({products}) => {
    //console.log(products);
    const history = useHistory()
    const handleProductDetaile = (id)=>{
            history.push(`/checkout/${id}`)
      
    }
    return (
        <div className="container-fluid">
            <div className="container my-5">
                <div className="product-container py-5">
                    {
                        products.map((product, i) => (
                            <div className="product"  key={i}>
                              <div className="card">
                                <div className="card-body">
                                    <img src={product.image} alt="Laptop"/>
                                     <h1>{product.name}</h1>
                                     <div className="d-flex justify-content-around">
                                        <p>$<span>{product.price}</span></p>
                                         <button onClick={()=>handleProductDetaile(product._id)}>Buy Now</button>
                                     </div>
                               </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;