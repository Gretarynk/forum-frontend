import styles from "../SignModal/sign.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/button";
import cookies from "js-cookie";

type SignUpProps={
  onClose:()=>void;
}

const SignUp = ({onClose}:SignUpProps) => {
  const router = useRouter();
  const [name,setName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigned, setSigned]=useState(false)
  const [isError, setError] = useState(false);
  const [isBadLogin, setBadLogin] = useState(false);
  //   const [isLoading,setLoading]=useState(false)
  const signUp = async () => {
    const signData = {
      name:name,
      email: email,
      password: password,
    };
    if (!email || !password ||!name ) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/users`,
        signData
      );
      console.log("response", response);
      console.log("loginData", signData);
      if (response.status === 200) {
        cookies.set("jwt_token", response.data.jwt_token);
       setTimeout(()=>{router.push("/")},2000) ;
        setSigned(true)
      }
    } catch (err) {
      if (err) {
        setBadLogin(true);
      }
      console.log("err", err);
    }
  };
  return (
    <>
    <div className={styles.mainBox}>
    <div className={styles.wrapper}>
        <Button className={styles.btnClose} onClick={onClose} text="X" />
      <div className={styles.main}>
        <div className={styles.signText}>
        <h2>Create Account</h2>
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          placeholder="Name" />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="email" />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          placeholder="password" />
        <Button className={styles.btnLogin} onClick={signUp} text="Sign UP" />
        <div className={styles.linkWrapper}>
          <Link className={styles.link} href={'/login'}>
        <h4>If you already have account, Login</h4>
        </Link>
        </div>
        {isSigned && (
          <div className={styles.textSigned}>
            Your account was created Successfully!
          </div>
        )}
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
    </div>
    </>
  );
};
export default SignUp;
