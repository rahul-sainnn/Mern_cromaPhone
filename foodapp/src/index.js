import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
// import Appsec from './Appsec';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OgnxfSEdKKNMZJfZdcNpTxoNV7eGpjBsMhAAkPpRCJxTEB7G4RuAsE8I06PRedm5PYdMwaKEovP8UR7firO3deV00xU7oDtSt"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
