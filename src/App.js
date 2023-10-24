// // import { CLIENT_ID } from '../Config/Config'
// import React, { useState, useEffect } from "react" ;
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";

// export const CLIENT_ID = process.env.CLIENT_ID || "AQOVCFVKRixOjZDMtu5hEgeadZebuS4alB1uU0Uht-ysjrwiqDFeKX5hpzdjRjFBFR3b5rvWONM5mFeb"
// export const APP_SECRET = process.env.APP_SECRET || "EG40EP0Vhm1s6liFIyevhpi78i4E9BDwxYb5WZZk1IFGUj-xydTt7P3O-AAsXqY-rkBmm21qY-cTkX8v"

// const Checkout = () => {
//     const [show, setShow] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [ErrorMessage, setErrorMessage] = useState("");
//     const [orderID, setOrderID] = useState(false);

//     const onClickButton = () => {
//       axios.get("http://localhost:5000/api/business/subscription/cancel", {
//         headers: { "content-type": "application/json" }
//       })
//         .then(res => {
//           console.log(res);
//         })
//         .catch(err => {
//           console.log(err);
//         })
//     }

//     // creates a paypal order
//     const createOrder = (data, actions) => {
//       console.log("data", data)
//       console.log("actions", actions)
//         return actions.order.create({
//             purchase_units: [
//                 {
//                     description: "Sunflower",
//                     amount: {
//                         currency_code: "USD",
//                         value: 20,
//                     },
//                 },
//             ],
//         }).then((orderID) => {
//                 setOrderID(orderID);
//                 return orderID;
//             });
//     };

//     // check Approval
//     const onApprove = (data, actions) => {
//       console.log("onApprove data", data)
//       console.log("onApprove actions", actions)
//         return actions.order.capture().then(function (details) {
//             const { payer } = details;
//             setSuccess(true);
//         });
//     };

//     //capture likely error
//     const onError = (data, actions) => {
//         setErrorMessage("An Error occured with your payment ");
//     };

//     useEffect(() => {
//         if (success) {
//             alert("Payment successful!!");
//             console.log('Order successful . Your order id is--', orderID);
//         }
//     },[success]);

//     return (
//         // <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>

//         //             <PayPalButtons
//         //                 style={{ layout: "vertical" }}
//         //                 createOrder={createOrder}
//         //                 onApprove={onApprove}
//         //                 onError={onError}
//         //             />
//         // </PayPalScriptProvider>
//         <button onClick={onClickButton}>I am button for axis test</button>
//     );
// }

// export default Checkout



import React, { useState } from 'react';
import FilePicker from "./file-picker"
// import FilePicker from "../src/index";

// APP_KEY is defined in webpack.config.js
const Token ='sl.BojMzidpTlaOP8tMJ5p0CcdfiiS5MlPMogSQY9FZh8eWambTJvxY3Zi7lHWULKdhzUzZvqSPRXTpek5O2Xsyt_pxhQmD6joJtkl6l-42eyOLCwbDjtMeu12MvE_MQhBQLBrSr9Swfegf'

const APP_KEY = "xb5lw3h1fxjwtmi"
// if (!APP_KEY) {
//   throw new Error("APP_KEY must be defined for the example to work.");
// }
const App = () => {
  const [accessToken, setAccessToken] = useState(Token);
  const [filepath, setFilepath] = useState(null);

  const handleLogin = (token) => {
    setAccessToken(token);
  };

  const handleLogout = () => {
    setAccessToken(null);
    setFilepath(null);
  };

  const handleFilePick = (path) => {
    setFilepath(path);
  };

  const handleError = (error) => {
    console.error(error.message);
  };

  return (
    <FilePicker
      appKey={APP_KEY}
      accessToken={accessToken}
      filepath={filepath}
      onLogin={handleLogin}
      onLogout={handleLogout}
      onFilePick={handleFilePick}
      onError={handleError}
    />
  );
};

export default App;