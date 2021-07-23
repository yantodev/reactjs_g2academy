import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Login(props) {
  const username = useFormInput("");
  const password = useFormInput("");
  const [error] = useState(null);
  const [loading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    // e.preventDefault();
    // console.log(e.target.email.value);

    if (!username) {
      alert("Email salah");
    } else if (!username) {
      alert("email masih salah");
    } else if (!password) {
      alert("Password salah");
    } else if (username === "admin" && password === "admin") {
      console.log(username);
      alert("Successfully login");
      // e.target.email.value = "";
      // e.target.password.value = "";
    } else {
      alert("salah email atau password");
    }
    props.history.push("/latihan");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div>
          Login
          <br />
          <br />
          <form className="form">
            <div>
              Username
              <br />
              <input
                type="text"
                name="email"
                {...username}
                placeholder="admin"
              />
            </div>
            <div style={{ marginTop: 10 }}>
              Password
              <br />
              <input type="password" name="password" {...password} />
            </div>
            {error && (
              <>
                <small style={{ color: "red" }}>{error}</small>
                <br />
              </>
            )}
            <br />
            <input
              type="button"
              value={loading ? "Loading..." : "Login"}
              onClick={handleLogin}
              disabled={loading}
            />
            <br />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
