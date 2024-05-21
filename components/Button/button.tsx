
import styles from "../Button/button.module.css"

type ButtonProps={
    onClick:()=>void;
    text:string;
    type?:"WARNING" |"VALID";
    className?:string;
}
const Button=({onClick, text, type, className}:ButtonProps)=>{
    return(
        <button onClick={onClick} className={`${styles.main} ${type === "WARNING" && styles.warning} ${className && className}`} >{text}</button>
    )
}

export default Button 