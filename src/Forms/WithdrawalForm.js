import React, { useState } from 'react'
import axios from 'axios'
const WithdrawalForm = ({customer}) => {
    const [withdrawalData,setwithdrawaldata]=useState({
        username:customer.username,
        accountNumber:customer.accountNumber,
        withdrawalAmount:'',
        withdrawalType:'',
    })
    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(withdrawalData);
        try{
            await axios.post('http://localhoat:3001/api/withdraw',withdrawalData)
        }
        catch{}
    }
    const handleClear=()=>{
        setwithdrawaldata({
            withdrawalAmount:'',
        withdrawalType:'',
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Withdrawal Form</h2>
        <p>Username:{customer.username}</p>
        <p>Account Number:{customer.accountNumber}</p>
        <label>Withdrawal Amount:</label>
        <input
        type='number' placeholder='withdrawal Amount'
        value={withdrawalData.withdrawalAmount}
        onChange={(e)=>setwithdrawaldata({...withdrawalData,withdrawalAmount:e.target.value,})}
        required
        />
         <label>Withdrawal Type:</label>
        <input
        type='text' placeholder='withdrawal Type'
        value={withdrawalData.withdrawalType}
        onChange={(e)=>setwithdrawaldata({...withdrawalData,withdrawalType:e.target.value,})}
        required
        />
        <button type='submit'>Withdraw</button>
        <button type='submit' onClick={handleClear}>Clear</button>
      </form>
    </div>
  )
}

export default WithdrawalForm
