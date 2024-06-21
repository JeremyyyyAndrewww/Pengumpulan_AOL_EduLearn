import React from "react";

function PaymentCreditCard(){
    return(
        <>
            <div className="paymentContainer">
                <div className="paymentHeading">
                    <h2>Payment</h2>
                    <h3>Select Payment Method</h3>
                </div>
                

                <div className="paymentNav">
                    <ul>
                        <li className="navActive">Credit Card</li>
                        <li>Mobile Banking</li>
                        <li>E-Wallet</li>
                        <li>Others</li>
                    </ul>
                </div>


                <form className="paymentForm">
                    <div className="creditCardSelection">
                        <img></img>
                        <img></img>
                        <img></img>
                    </div>
                    
                    <div className="paymentInput">
                        <input type="" placeholder=""/>
                        <input type="" placeholder=""/>
                        <input type="" placeholder=""/>
                    </div>

                </form>
                
            </div>

        </>

    );

}

export default PaymentCreditCard