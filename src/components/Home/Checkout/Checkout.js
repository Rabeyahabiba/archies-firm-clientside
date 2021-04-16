import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
const Checkout = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState (null);
    
    const { _id } = useParams();
    const [order, setOrders] = useState([]);
    console.log(order)
    
    useEffect(() => {
        fetch('http://localhost:6030/services')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const newOrder = order.find(sd => sd?._id === _id)
    console.log(newOrder)
    // const handleCheckout = (_id) => {
    //     history.push(`/orders/${_id}`);
    //   }

    // const onSubmit = data => {         
    //     const orderDetails = {...loggedInUser, shipment: data, orderTime: new Date()};
    const onSubmit = data => {
      setShippingData(data);
    };
    const handlePaymentSuccess = paymentId => {
          // const savedCart = getDatabaseCart();
          const orderDetails = {
            ...loggedInUser, 
            // products:savedCart, 
            shipment: shippingData, 
            paymentId,
            orderTime: new Date()
          };
        fetch('http://localhost:6030/addOrder',{
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(orderDetails)
           })
           .then(res => res.json())
           .then(data => {
             if(data){
            //    processOrder();
               alert('Order placed successfully')
             }
           })
          };
        
    return (
        <div className="row" style={{ textAlign: 'center' }}>
          <div className="col-md-4">
        <h1> CheckOut</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Description </th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{newOrder?.name}</td>
                    <td>1</td>
                    <td>{newOrder?.price}</td>
                </tr>
                <tr>
                    <td colSpan="2">Total</td>
                    <td>{newOrder?.price}</td>
                   
                </tr>
            </tbody>
            {/* <Button onClick={() => handleCheckout(_id)}>Checkout </Button> */}
           
        </Table>
        </div>
        <div className="col-md-4">
        <h1> Shipping </h1>
        <form className ="ship-form" onSubmit={handleSubmit(onSubmit)}>    
       <br/>
        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder ="Your Name" />        
        {errors.name && <span className ="error">Name is required</span>}
        <br/>
        <input name="email" defaultValue={loggedInUser.email}ref={register({ required: true })} placeholder ="Your Email"/>        
        {errors.email && <span className ="error">Email is required</span>}
        <br/>
        <input name="address" ref={register({ required: true })} placeholder ="Your Address"/>        
        {errors.address && <span className ="error">address is required</span>}
        <br/>
        <input name="phone" ref={register({ required: true })} placeholder ="Your Phone Number" />        
        {errors.address && <span className ="error">phone number is required</span>}
        <br/>
        <input type="submit" />
      </form>
      </div>
      <div  className="col-md-6">
          <h2>Pay for me</h2>
          <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
        </div>
    </div>
    );
};

export default Checkout;