import styles from "../BurgerMenu/burgerMenu.module.css"
import burger from "../../public/burger.svg"
import Image from "next/image";


type BurgerMenuProps={
    onClick:()=>void;

}

const BurgerMenu=({onClick}:BurgerMenuProps)=>{
    return (
      
        <button className={styles.burgerMenu

        } onClick={onClick}>
            <Image alt="burger menu" className={styles.burger} src={burger}/>
        </button>
        
      

    )
}
export default BurgerMenu