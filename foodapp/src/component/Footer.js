import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaAngleDoubleRight,FaAmazonPay  } from "react-icons/fa";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CssFile/Buynew.css"
// import { Link } from "react-router-dom";

const Confirm = () => {
  const { itemIds } = useParams();
  const selectedItemIds = itemIds
    ? itemIds.split(",").map((id) => parseInt(id))
    : [];
  const itemsInCart = useSelector((state) => state.cart);
  const selectedItems = itemsInCart.filter((item) =>
    selectedItemIds.includes(item.id)
  );

  const [paymentMethod, setPaymentMethod] = useState("phonepe");
  const [totalPrice, setTotalPrice] = useState(0);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const calculatedTotalPrice = itemsInCart.reduce(
      (total, item) => total + item.price,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [itemsInCart]);

  const handleBuy = async () => {
    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      console.log("PaymentMethod ID:", paymentMethod.id);

      const response = await fetch("http://localhost:5000/process-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: totalPrice * 100, // Stripe works in cents
          itemId: selectedItems.map((item) => item.id),
        }),
      });

      const result = await response.json();
      if (result.success) {
        console.log("Payment successful");
        alert("Payment successful");
      } else {
        console.error("Payment unsuccessful:", result.error);
        alert("Payment unsuccessful. Please try again.");
      }
    } catch (error) {
      console.error("Payment processing error:", error);
      alert("Payment unsuccessful. Please try again.");
    }
  };

  return (
    <div className="containerbuy">
      {selectedItems.map((selectedItem) => (
        <div className="boxbuy">
          <div className="buynew">
            <div className="rowbuy">
              <div className="imgbox">
                <div className="buyimg">
                  <img src={selectedItem.image} alt="Phone" />
                </div>
              </div>
              <div>
                <h3>{selectedItem.name}</h3>
                <p>
                  Price: ₹{selectedItem.price} <br />
                  (58% off)
                </p>
                <p>Rating: {selectedItem.rating}</p>
                <div className="highlight">
                  <div className="flexbox">
                    <p>Highlights:</p>
                    <ul>
                      <li>8 GB RAM | 128 GB ROM</li>
                      <li>16.26 cm (6.4 inch) Full HD+ Display</li>
                      <li>12MP + 12MP + 8MP (OIS) | 32MP Front Camera</li>
                      <li>4500 mAh Lithium-ion Battery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="buybtn">
        <div className="boxbtnn">
          <div className="payment-form">
            <h4>Select Payment Method:</h4>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="phonepe">Stripe Pay</option>
              <option value="amazonpay">Amazon Pay</option>
              <option value="paytm">Paytm</option>
              <option value="razorpay">Razorpay</option>
            </select>

            <p className="pricetatal">Total Price: ₹{totalPrice}</p>

            {/* CardElement ka istemal card input ke liye */}
            <CardElement />

            <span className="right">
              <FaAngleDoubleRight />
            </span>

            <button className="makepay" onClick={handleBuy}>
            <FaAmazonPay id="paypol" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
