import styles from "../Header/header.module.css";
import { useState } from "react";
import SignUp from "../SignModal/sign";
import Image from "next/image";
import logo from "../../public/bicyleLeft.svg";
import line from "../../public/Vector 1.svg";
import Button from "../Button/button";
import NavBar from "../NavBar/navBar";
import { links } from "../../constans/links";
import Link from "next/link";

const Header = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.logoBox}>
        <Image className={styles.logo} src={logo} alt="bicycle logo " />
        <Image className={styles.line} src={line} alt="line " />
      </div>
      <div className={styles.menu}>
        <NavBar links={links} />
      </div>
      <div className={styles.btnBox}>
        <Link href="/login" passHref>
          <Button
            className={styles.btnLogin}
            onClick={() => {}}
            text="Log In"
          />
        </Link>
        <Button className={styles.btnSign} onClick={() => setShowSignUp(true)} text="Sign Up" />
        {showSignUp && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <SignUp onClose={() => setShowSignUp(false)} />
          </div>
        </div>
      )} 
      </div>
       
    </div>
  );
};
export default Header;
