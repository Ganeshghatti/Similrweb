// import React from "react";
// import { app } from "./Firebase";
// import { useState } from "react";
// import {
//   getAuth,
//   signInWithRedirect,
//   getRedirectResult,
//   GoogleAuthProvider,
//   signInWithPopup,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export default function Signuppage() {
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [number, setnumber] = useState("");

//   const createUserWithEmailAndPasswordf = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//         const user = userCredential.user;
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       });
//     console.log("otp is");
//     let min = 1000;
//     let max = 9999;
//     let originalotp = Math.floor(Math.random() * (max - min) + min);
//     console.log(originalotp);
//     localStorage.setItem("otp", originalotp);
    
//   };

//   const Signupwithgoogle = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // console.log(result)
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const user = result.user;
//         const username = result.user.displayName;
//         // console.log(credential,token,user)
//         // console.log(username)
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.customData.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//       });
//   };
//   return (
//     <div>
//       <div className="emailandpassworddiv">
//         <input
//           required
//           type="email"
//           placeholder="enter your email"
//           value={email}
//           onChange={(e) => setemail(e.target.value)}
//         />
//         <input
//           required
//           type="password"
//           placeholder="enter password"
//           value={password}
//           onChange={(e) => setpassword(e.target.value)}
//         />
//       </div>
//       <div className="signupwithgooglediv">
//         <button onClick={Signupwithgoogle} type="button">
//           Sign-up with google
//         </button>
//       </div>
//       <div className="phonenumberdiv">
//         <input
//           required
//           type="number"
//           placeholder="enter phone number"
//           value={number}
//           onChange={(e) => setnumber(e.target.value)}
//         />
//       </div>
//       <div className="submitbuttondiv">
//         <button onClick={createUserWithEmailAndPasswordf} type="submit">
//           <Link to="/Otpverification">Signup</Link>
//         </button>
//       </div>
//     </div>
//   );
// }
