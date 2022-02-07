import React from 'react'
import { useState } from 'react';
import ConfirmedOrder from './ConfirmSendBtn';
import CartItems from './CartItems';
import Invoice from './Invoice.js'
import './OrderlistPopUp.css';
import AddToCartItems from './OrderlistContainer'


function OrderlistPopUp(props) {
    // Used for Popup function only. Content to be in OrderListSendBtn.
    // Trigger with props and question mark to check if its true


    // Use this variable to show the message after sending message:
    //Copy this portion from https://www.emailjs.com/docs/examples/reactjs/

    return (props.trigger) ?  (
        //A pop-up button after clicking Send Order button
        <div className="orderlist-popup">
            <div className="popup-page">
                {props.children}

                {/* Insert item list table here */}

                <button className="close" onClick={() => props.setTrigger(false)}>x</button>
                <h1 className="popupTitle">- ORDER BILL -</h1>
                <Invoice className="invoice" />
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th> Item Name</th>
                                <th> Quantity</th>
                                <th> Price</th>
                            </tr>
            
                        </thead>
                        <tbody>
                            <div>{CartItems.selectedItemList}</div>
                                {/* <tr>
                                    <td>testing item one</td>
                                    <td>01</td>
                                    <td>$0.00</td>
                                </tr>
                                <tr>
                                    <td>testing item two</td>
                                    <td>02</td>
                                    <td>$10.00</td>
                                </tr> */}
                        </tbody>
                    </table>
                </div>

                <div className='button-container'>
                    {/* Two inner button within the pop-up to 1.Amend (close the page) 2.Send the Order through */}
                    <button className="amend-btn" onClick={() => props.setTrigger(false)}>Amend Order</button>
                    <ConfirmedOrder className="confirm-send-btn"/>
                    {/* <button className="confirm-send-btn" onSubmit={sendEmail}>Confirm Send</button> */}
                </div>
            </div>                   
        </div>

    ) : "";

}

export default OrderlistPopUp



// PLanning
// To use useHistory and retrieve the orderlist information
//  CheckOut features:
//  import + path
//  A function for Checkout
//      UseEffect(() => {
//           let isMounted = true
//              axios.get(`/OrderlistContainer).then(res=>{
//                  if(is)
//})
//
//          }
//      return (
//            a form that is built within the orderlistContainer
//            )
// Structure: A table
//      {orderlist.map( (item, index) => {
//             totalCartPrice += AddToCartItems.product.selling_price * AddToCartItems.product_qty;
//             return (
//                 <tr key={index}>
//                     <td>{items.product.name}</td>
//                     <td>{items.product.selling_price}</td>
//                     <td>{items.product.qty}</td>
//                 </tr>
//             )
// })}  
//

// Need to do const totalOrderPrice at the end of the page
// e.g. totalOrderPrice += item.product.selling_price * item.product_qty;
//
//to Show the total price. insert code as such: {totalOrderPrice} within the table