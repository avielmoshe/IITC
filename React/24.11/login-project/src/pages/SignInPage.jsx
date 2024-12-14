import { useState, useRef } from "react";
import { useNavigate } from "react-router";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState(false);
  const [btnText, setBtnText] = useState("Submit");
  const navigate = useNavigate();
  const passwordRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(passwordRef.current.value);
    setBtnText("Loading...");
    setTimeout(() => {
      alert("signIn");
      setEmail("");
      passwordRef.current.value = "";
      setBtnText("Submit");
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <div>SignIn Page</div>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "A9A9A9",
          padding: "1.5rem",
          gap: "8px",
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          ref={passwordRef}
          type={!passwordType ? "password" : "text"}
          id="password"
          name="password"
        />
        <label htmlFor="showPassword">Show Password</label>
        <input
          value={email}
          type="checkbox"
          id="showPassword"
          name="showPassword"
          onClick={() => setPasswordType((currentState) => !currentState)}
        />
        <button type="submit">{btnText}</button>
      </form>
    </>
  );
};
export default SignInPage;
