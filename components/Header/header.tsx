import styles from "../Header/header.module.css"
import Image from "next/image"
import logo from "../../public/bicyleLeft.svg"
import line from "../../public/Vector 1.svg"
import Button from "../Button/button"
import NavBar from "../NavBar/navBar"
import { links } from "../../constans/links"
import Link from "next/link"


const Header=()=>{
    return(
        <div className={styles.main}>
            <div className={styles.logoBox}>
            <Image className={styles.logo} src={logo} alt="bicycle logo "/>
            <Image className={styles.line} src={line} alt="line "/>
            </div>
            <div className={styles.menu}>
            <NavBar links={links}/>
            </div>
            <div className={styles.btnBox}>
                <Link href="/login" passHref>
                <Button className={styles.btnLogin} onClick={() => {}} text="Log In" /></Link>
                <Button className={styles.btnSign} onClick={() => {}} text="Sign Up" />
            </div>
        </div>
    )
}
export default Header