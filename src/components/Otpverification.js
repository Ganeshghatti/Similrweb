// import React from "react";
// import { useState } from "react";
// import { app } from "./Firebase";
// import { Link, Routes, Route } from "react-router-dom";

// export default function Otpverification() {
//   const [otp, setotp] = useState("");
//   let originalotp = localStorage.getItem("otp");

//   function submitotpf() {
//     console.log(originalotp);
//     if (otp == originalotp) {
//       console.log("verification successful");
//     } else {
//       console.log("chutiya user enter correct otp");
//     }
//   }
//   return (
//     <div>
//       <input
//         type="password"
//         required
//         placeholder="enter otp sent to phone"
//         value={otp}
//         onChange={(e) => setotp(e.target.value)}
//       />
//       <div className="submitbuttondiv">
//         <button onClick={submitotpf} type="submit">
//           <Link to="/Username">submit</Link>
//         </button>
//       </div>
//     </div>
//   );
// }
