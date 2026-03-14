import React from 'react'
import './AccountDetails.css'
const AccountDetails = ({customer,updatedBalance}) => {
    console.log(customer)
  return (
    <div className='account-container'>
      <div className='image-account-container'></div>
      <div className='text-account-container'>
        <h1>SB BANK</h1>
        <h2>Account Details</h2>
      <p>Username:  {customer.username}</p>
      <p>Account Number:  {customer.accountNumber} </p>
      <p>Branch:  {customer.branch}</p>
      <p>Phone Number:  {customer.phoneNumber} </p>
      {/* <p>Available Balance:{customer.branch}</p>  */}
      <p>Available Balance:
        <span style={{color:'green',fontSize:'24px',fontWeight:'20px'}}>{updatedBalance===0?customer.balance:updatedBalance}</span> Rupees</p>
      </div>
    </div>
  )
}

export default AccountDetails
