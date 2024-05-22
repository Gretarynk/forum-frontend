import styles from "../Main/mainWrapper.module.css";
import Content from "../ContentMain/content";

const MainWrapper = () => {
  return (
    <div className={styles.main}>
      <Content />
    </div>
  );
};
export default MainWrapper;
