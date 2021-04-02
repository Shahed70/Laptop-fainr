import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../App/App";
import "./CheckOut.css";
const CheckOut = ({orderInfo}) => {
  const { id } = useParams();
  const [checkOut, setCheckOut] = useState({});
  const history = useHistory()
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    axios
      .get(`https://strawberry-cobbler-77507.herokuapp.com/getSingleProduct/${id}`)
      .then((res) => {
        setCheckOut(res.data)
      })
      .catch((err) => console.log(err));
  }, [id]);

const handleOrder = ()=>{
    const newData = {...loggedInUser, checkOut}
    setLoggedInUser(newData)
    // axios.post('http://localhost5000/orderInfo', (orderInfo))
    //     .then(res => console.log('data sent success fully', res))
    //     .catch(err => console.log(err))

        fetch('https://strawberry-cobbler-77507.herokuapp.com/orderinfo', {
          method:'POST',
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify(orderInfo)
        })
        
}

  return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <h1 className="py-3">Checkout</h1>
              {
                checkOut != null ? <div className="col-md-12 col-sm-12">
                <div className="d-flex justify-content-between">
                  <h5>Description</h5>
                  <h5>Quantity</h5>
                  <h5>Price</h5>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                  <h5>{checkOut.name}</h5>
                  <h5>1</h5>
                  <h5>$ {checkOut.price}</h5>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                    <h5>Total</h5>
                    <h5>$ {checkOut.price}</h5>
                </div>
                <button onClick={handleOrder} className="btn btn-success float-right mt-5 p-3">Checkout</button>
              </div>
              :
              <div className=" d-flex mt-5 pt-5 justify-content-center">
                  <div class="spinner-border text-success" role="status">
                    </div>
               </div>
              }
          </div>
        </div>
      </div>
  );
};

export default CheckOut;
