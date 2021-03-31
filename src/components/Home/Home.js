import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/getProduct')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <Product products={products} />
        </div>
    );
};

export default Home;