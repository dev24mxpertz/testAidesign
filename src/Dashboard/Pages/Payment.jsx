import React from 'react'

function Payment() {
    return (
        <>
            <div>
                <div style={{marginBottom:'40px'}}>
                    <div className='payment-heading'>
                        <h3>My Subscriptions</h3>
                    </div>
                    <div className='payment-uper'>
                        <table className="table" style={{margin:'0'}}>
                            <tbody>
                                <tr>
                                    <td>Your current balance is:</td>
                                    <td>10548.54₹</td>
                                </tr>
                                <tr>
                                    <td>Next Payment Due:</td>
                                    <td>December 25,2023 (abc Service)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div >
                    <div className='payment-heading'>
                        <h3>Email Service</h3>
                    </div>
                    <div className="subscription-info d-flex justify-content-between" >
                        <div style={{color: "black"}}>
                            <p>Price plan:</p>
                            <h5>Primium Subscription 2500 (324.6₹)</h5>
                            <p>Maximum subscribers: 2500</p>
                            <p>Change my plan</p>
                            <p>Cancel subscription</p>
                        </div>
                        <div className='payment-lower'>
                            <table className="table " style={{margin:'0'}}>
                                <tbody>
                                    <tr>
                                        <td>Status:</td>
                                        <td>Active</td>
                                    </tr>
                                    <tr>
                                        <td>Valid until:</td>
                                        <td>December 25, 2023</td>
                                    </tr>
                                    <tr>
                                        <td>Subscription activated on:</td>
                                        <td>November 25, 2023</td>
                                    </tr>
                                    <tr>
                                        <td>Monthly payment:</td>
                                        <td>₹325.70</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment
