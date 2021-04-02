import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://strawberry-cobbler-77507.herokuapp.com/getProduct')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="pb-5">
           {
               products.length > 0 ?  <Product products={products} /> : 
               <div className=" d-flex mt-5 pt-5 justify-content-center">
                  <div class="spinner-border text-success" role="status">
                    </div>
               </div>

           }
        </div>
    );
};

export default Home;