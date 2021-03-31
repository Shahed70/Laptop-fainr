import React from 'react';
import './Product.css'
const Product = ({products}) => {
    console.log(products);
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
                                         <button>Buy Now</button>
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