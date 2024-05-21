import styles from "../PageTemplate/pageTemplate.module.css";
import Header from "../Header/header";
import { links } from "../../constans/links";
import { ReactNode } from "react";
import Footer from "../Footer/footer";

type PageTemplateProps = {
  children: ReactNode;
};
const PageTemplate = ({ children }: PageTemplateProps) => {
  return <div className={styles.wrapper}>
  
    <Header/>
    <div className={styles.content}>{children}</div>
   <Footer/>
  </div>;
};
export default PageTemplate;
