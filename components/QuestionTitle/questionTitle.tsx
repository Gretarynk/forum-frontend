import styles from "../QuestionTitle/questionTitle.module.css";
import Link from "next/link";
import { format } from "date-fns";

const formatDate = (dateString: string): string => {
  return format(new Date(dateString), 'yyyy-MM-dd HH:mm:ss');
};

type QuestionProps = {
  question_title: string;
  region: string;
  date: string;
  id: string;
};


const QuestionTitle = ({ id, question_title, date, region }: QuestionProps) => {
  return (
    <div className={styles.main}>
      <Link className={styles.links} href={`/question/${id}`}>
        <h1>{question_title}</h1>
      </Link>
      <h4>{region}</h4>
      <h4>{formatDate(date)}</h4>
    </div>
  );
};
export default QuestionTitle;
