import React, { useState } from 'react';
import Header from './Header';
import "./CssFile/Header.css";

function Payment() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiration: '',
    cvv: '',
    name: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add payment processing logic here using a payment gateway or API
    console.log('Form submitted with data:', formData);
  };

  return (
    <>
      <Header />
    <div  className='xyzxyz'>
         
      <h5>Payment</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expiration">Expiration Date:</label>
          <input
            type="text"
            name="expiration"
            placeholder="MM/YY"
            value={formData.expiration}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            name="cvv"
            placeholder="123"
            value={formData.cvv}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name on Card:</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount ($):</label>
          <input
            type="number"
            name="amount"
            placeholder="100.00"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className='xxyyzz' type="submit">Submit Payment</button>
      </form>
    </div>
    </>
  );
}


export default Payment; 
