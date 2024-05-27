import styles from "../ContentMain/content.module.css";
import axios from "axios";
import Link from "next/link";

type ContentProps = {
  text: string;
  onClick: () => void;
};

const Content = () => {
  return (
    <div className={styles.main}>
       <Link className={styles.mainLink} href={"/ask"}>
        <div className={`${styles.box} ${styles.box2}`}> Ask Question</div>
      </Link>
      <div className={`${styles.box} ${styles.box1}`}>
        <p className={styles.text}>
          This forum for enthuasist who like ride but looking for new routes to
          explore around Lithuania{" "}
        </p>
      </div>
      <Link className={styles.mainLink} href={"/forum"}>
        <div className={`${styles.box} ${styles.box4}`}> Forum </div>
      </Link>
      <div className={`${styles.box} ${styles.box3}`}>
        {" "}
        <p className={styles.text}>
          You can ask aboutnot popular places villages where you can spend nice
          time riding bike or plan your route on experiences of other people
        </p>{" "}
      </div>
    
      <div className={`${styles.box} ${styles.box5}`}>
        {" "}
        <p className={styles.text}>
          Share your routes and experience, dont keep only for yourself{" "}
        </p>{" "}
      </div>
      <div className={`${styles.box} ${styles.box6}`}>
        {" "}
        <p className={styles.text}>....</p>
      </div>
    </div>
  );
};

export default Content;
