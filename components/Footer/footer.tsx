import styles from "../Footer/footer.module.css";
import Image from "next/image";
import bicycle from "../../public/bicycle.svg";

const Footer = () => {
  return (
    <div className={styles.main}>
      <Image alt="Bicycle logo" src={bicycle} className={styles.bicycle} />
    </div>
  );
};
export default Footer;
