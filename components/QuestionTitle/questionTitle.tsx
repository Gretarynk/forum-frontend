import styles from "../QuestionTitle/questionTitle.module.css";
import Link from "next/link";

type QuestionProps = {
  question_title: string;
  region: string;
  date: string;
  id: string;
};
const QuestionTitle = ({ id, question_title, date, region }: QuestionProps) => {
  return (
    <div className={styles.main}>
      <Link href={`/question/${id}`}>
        <h1>{question_title}</h1>
      </Link>
      <h4>{region}</h4>
      <h4>{date}</h4>
    </div>
  );
};
export default QuestionTitle;
