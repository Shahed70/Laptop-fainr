import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import './Order.css'
const Order = () => {
  const [orders, setOrders] = useState([]);
  const total = orders.reduce( (total, prd) => total + parseInt(prd.checkOut.price) , 0 )
  const [err, setError] = useState();
  const history = useHistory()
  useEffect(() => {
    axios
      .get("https://strawberry-cobbler-77507.herokuapp.com/getOrderInfo")
      .then((res) => setOrders(res.data))
      .catch((err) => setError(err));
  }, []);

  const removeOrderHandler = (id)=>{
       axios.post(`https://strawberry-cobbler-77507.herokuapp.com/deleteOrderInfo/${id}`)
       .then(res => {
         console.log(res);
  
       })
       .catch(err => console.log(err))
  }

  let shipping = 0;
  if(total > 400){
      shipping = 0;
  }
  else {
      shipping = 50;
  }

  const tax = (total*.10).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);


  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-sm-12">
              {
                orders.length === 0 ? 
                <h1 className="text-danger mt-t pt-5">You haven't made any order yet</h1>
                :
                <div className="flex-box border-right">
                <div className="orders">
                  <h4>Product Image</h4>
                  <h4>Product Name</h4>
                  <h4>Product Price</h4>
                  <h4>Order Date</h4>
                  <h4>Action</h4>
                </div>
                <hr/>
              {orders.map((order) => (
               <div className="orders text-center"  key={order._id}>
                 <img className="mb-3" src={order.checkOut.image} alt=""/>
                 <p>{order.checkOut.name}</p>
                 <p>$ {order.checkOut.price}</p>
                 <p>{order.lastSignInTime}</p>
                 <button onClick={() => removeOrderHandler(order._id)} className="btn btn-danger">Remove</button>
               </div>
             ))}
              </div>
              }
          </div>
          <div className="col-md-2 col-sm-12">
                <h5 className="mb-4 pb-1">Order Summery</h5>
                <hr/>
                <div className="d-flex justify-content-between">
                    <p>Items</p>
                    <p>{orders.length}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Subtotal</p>
                  <p>$ {total}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Tax</p>
                  <p>$ {tax}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Shipping cost</p>
                  <p>$ {shipping}</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                  <p>Total</p>
                  <p>$ {grandTotal}</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
