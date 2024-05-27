import styles from "../ContentMain/content.module.css";
import Link from "next/link";

const Content = () => {
  return (
    <div className={styles.main}>
      <Link className={styles.mainLink} href={"/ask"}>
        <div className={`${styles.box} ${styles.box2}`}> Ask Question</div>
      </Link>
      <div className={`${styles.box} ${styles.box1}`}>
        <p className={styles.text}>
          This forum to share and to find new routes to explore around Lithuania{" "}
        </p>
      </div>
      <Link className={styles.mainLink} href={"/forum"}>
        <div className={`${styles.box} ${styles.box4}`}> Forum </div>
      </Link>
      <div className={`${styles.box} ${styles.box3}`}>
        {" "}
        <p className={styles.text}>
          You can ask, and find new routes, where to stay and what to see...
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
        <p className={styles.text}>...</p>
      </div>
    </div>
  );
};

export default Content;
