import { useState } from "react";
import { atomState } from "../Atoms/Atom";
import { useRecoilState } from "recoil";
import "./Login.css";
import Register from "./Register";

function Login() {
  const [create, setCreate] = useRecoilState(atomState);
  const [emailInput, setEmailInput] = useState(" ");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailAlert, setEmailAlert] = useState(" ");
  const [storageAlert, setStorageAlert] = useState(" ");
  const [passwordAlert, setPasswordAlert] = useState(" ");

  function AddItemToRecoil() {
    for (let i = 0; i < create.length; i++)
      if (
        create[i].Email !== emailInput &&
        create[i].Password !== passwordInput
      ) {
        return setStorageAlert(`Invalid Email or Password`);
      } else {
        function emailValidation() {
          const regExpression =
            /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

          if (!regExpression.test(emailInput)) {
            return setEmailAlert("Email is Invalid");
          }
          return window.alert("Log-inned Successfully ");
        }
        emailValidation();

        function passwordValidation() {
          const passwordRegExpression =
            /^(?=(.[a-z]))(?=(.[A-Z]))(?=(.[0-9]))(?=(.[!@#$%^&*()\-__+.])).{8,}$/;

          if (passwordRegExpression.test(passwordInput)) {
            return setPasswordAlert("Not a Valid Password");
          } else {
            //return setPasswordAlert('Successful')
          }
        }
        passwordValidation();
      }
    setEmailInput("");
    setPasswordInput("");
  }

  return (
    <div>
      <from className="formTag">
        <h1 className="LogInHeadline"> LogIn page here</h1>
        <input
          className="userInput"
          onChange={(e) => setEmailInput(e.target.value)}
          type="email"
          placeholder="Email"
          value={emailInput}
        />
        <input
          className="pwInput"
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button className="LogInButton" onClick={AddItemToRecoil}>
          {" "}
          Log in
        </button>
        <p>
          {emailAlert} {passwordAlert}
        </p>
        <p>
          {storageAlert} <br /> New User ? <br />
          Create Account{Register}
        </p>
        {console.log(create)}
      </from>
    </div>
  );
}
export default Login;
