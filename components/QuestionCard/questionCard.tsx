import styles from "../QuestionCard/questionCard.module.css";
import Link from "next/link";
import { format } from "date-fns";

import axios from "axios";
import cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const formatDate = (dateString: string): string => {
  return format(new Date(dateString), "yyyy-MM-dd HH:mm:ss");
};

type QuestionProps = {
  question_title: string;
  question_text?: string;
  region: string;
  date: string;
  id: string;
  answers?: number;
  userId: string;
  className?: string;
  onDeleteQuestion?: (deletedQuestionId: string) => void;
};

const QuestionCard = ({
  id,
  question_title,
  question_text,
  date,
  region,
  answers,
  userId,
  className,
  onDeleteQuestion = () => {},
}: QuestionProps) => {
  console.log("card", answers);

  const getCurrentUserId = () => {
    const token = cookies.get("jwt_token");
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.userId; // Adjust based on your JWT payload structure
    }
    return null;
  };
  const currentUserId = getCurrentUserId();
  console.log(currentUserId);

  const handleDelete = async () => {
    try {
      const headers = { authorization: cookies.get("jwt_token") };
      console.log(headers);
      const response = await axios.delete(
        `${process.env.SERVER_URL}/question/${id}`,
        { headers }
      );
      if (response.status === 200) {
        onDeleteQuestion(id);
        console.log("deleted success");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`${styles.main} ${className || ""}`}>
      <div className={styles.titleBox}>
        <Link className={styles.link} href={`/question/${id}`}>
          <h1>{question_title}</h1>
        </Link>

        <h4>{region}</h4>
      </div>
      <h3>{question_text}</h3>
      <div className={styles.dateReplyBox}>
        <h5 className={styles.date}>{formatDate(date)}</h5>
        <h5>replies:{answers}</h5>
      </div>
      {currentUserId === userId && (
        <button className={styles.deleteBtn} onClick={handleDelete}>
          {" "}
          Delete
        </button>
      )}
    </div>
  );
};
export default QuestionCard;
