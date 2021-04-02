import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Home.css";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://strawberry-cobbler-77507.herokuapp.com/getProduct")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="">
        {products.length > 0 ? (
          <Product products={products} />
        ) : (
          <div className=" d-flex mt-5 pt-5 justify-content-center">
            <div className="spinner-border text-success" role="status"></div>
          </div>
        )}
      </div>
      <div className="footer">
        <footer>
          <p>All Right Reserved by @SHAHED</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
