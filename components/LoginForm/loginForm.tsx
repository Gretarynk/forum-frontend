import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../LoginForm/loginForm.module.css";
import { useRouter } from "next/router";
import Button from "../Button/button";
import cookies from "js-cookie";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isBadLogin, setBadLogin] = useState(false);
  
  const onLogin = async () => {
    const loginData = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/users/login`,
        loginData
      );
      // console.log("response", response);
      // console.log("loginData", loginData);
      if (response.status === 200) {
        cookies.set("jwt_token", response.data.jwt_token);
        router.push("/");
      }
    } catch (err) {
      if (err) {
        setBadLogin(true);
      }
      console.log("err", err);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.loginText}>
          <h2>Login </h2>
          <h3>Please enter your email and password</h3>
        </div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          placeholder="password"
        />
        <Button className={styles.btnLogin} onClick={onLogin} text="Login" />

        {isError && (
          <div className={styles.textError}>
            Please, fill all info correctly!
          </div>
        )}
        {isBadLogin && (
          <div className={styles.textError}>
            Please fill correct info to sign in{" "}
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
