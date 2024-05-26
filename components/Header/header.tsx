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
import BurgerMenu from "../BurgerMenu/burgerMenu";

const Header = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [isMobileOpen, setMobileOpen]=useState(false)
  return (
    <div className={styles.main}>
      <div className={styles.logoBox}>
        <Image className={styles.logo} src={logo} alt="bicycle logo " />
       
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
       <BurgerMenu onClick={()=>{console.log('onclick');setMobileOpen((prevState)=>!prevState)}}/>
       <div className={`${styles.mobileMenu} ${isMobileOpen && styles.mobileMenuOpen }`}>
       <nav className={styles.mobileNav}>
                <ul className={styles.links}>
                {links.map((link)=>{
                    return <a href={link.href} key={link.id}>{link.title}</a>

                })}
                </ul>
            </nav>
            
       </div>
       
    </div>
  );
};
export default Header;
