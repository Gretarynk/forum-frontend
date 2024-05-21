import styles from "../Modal/modal.module.css";
import Button from "../Button/button";

type ModalProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};
const Modal = ({ message }: ModalProps) => {
  return (
    <>
      <div className={styles.main}>
        <h4>{message}</h4>
        <div className={styles.btnBox}>
          <Button
          
            title="Sign UP"
            onClick={() => ()}
          />
        </div>
      </div>
      <div className={styles.background}></div>
    </>
  );
};
export default Modal;
