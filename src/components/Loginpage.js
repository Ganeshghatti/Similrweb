// import React from "react";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { app } from "./Firebase";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import '../style/Loginpage.css'

// const auth = getAuth(app);

// export default function Loginpage() {
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");

//   const signInWithEmailAndPasswordf=()=>{
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       let buttondisable=document.getElementsByClassName("buttondisable")[0]
//       buttondisable.removeAttribute("disabled");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
//   }
//   return (
//     <div>
//       <input
//         required
//         type="email"
//         placeholder="enter your email"
//         value={email}
//         onChange={(e) => setemail(e.target.value)}
//       />
//       <input
//         required
//         type="password"
//         placeholder="enter password"
//         value={password}
//         onChange={(e) => setpassword(e.target.value)}
//       />
//       <div className="submitbuttondiv">
//         <button className="buttondisable" onClick={signInWithEmailAndPasswordf} type="submit">
//           <Link to="/Home">Submit</Link>
//         </button>
//       </div>
//     </div>
//   );
// }
