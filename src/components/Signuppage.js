import React from "react";
import { app } from "./Firebase";
import { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function Signuppage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState("");

  const createUserWithEmailAndPasswordf = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    console.log("otp is");
    let min = 1000;
    let max = 9999;
    let originalotp = Math.floor(Math.random() * (max - min) + min);
    localStorage.setItem("otp", originalotp);
    const apiKey =
      "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";
    const url = "https://api.sendinblue.com/v3/smtp/email";

    const data = {
      sender: {
        name: "Ganesh",
        email: "ganeshghatti6@gmail.com",
      },
      to: [
        {
          email: `${email}`,
          name: "John Doe",
        },
      ],
      subject: `${originalotp}`,
      htmlContent:
        '<html><head></head><body><p>Hello,</p>Your otp for withdrawl of amount 1lakh is </p></body></html>',
    };
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key":
            "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",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response.status);
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
  };

  const Signupwithgoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const username = result.user.displayName;
        console.log(credential,token,user)
        console.log(username)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div>
      <div className="emailandpassworddiv">
        <input
          required
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div className="signupwithgooglediv">
        <button onClick={Signupwithgoogle} type="button">
          Sign-up with google
        </button>
      </div>
      <div className="phonenumberdiv">
        <input
          required
          type="number"
          placeholder="enter phone number"
          value={number}
          onChange={(e) => setnumber(e.target.value)}
        />
      </div>
      <div className="submitbuttondiv">
        <button onClick={createUserWithEmailAndPasswordf} type="submit">
          <Link to="/Otpverification">Signup</Link>
        </button>
      </div>
    </div>
  );
}
