import styles from "../QuestionCard/questionCard.module.css";
import Link from "next/link";
import { format } from "date-fns";

const formatDate = (dateString: string): string => {
  return format(new Date(dateString), 'yyyy-MM-dd HH:mm:ss');
};

type QuestionProps = {
  question_title: string;
  question_text: string;
  region: string;
  date: string;
  id:string;
  answers:number;
};


const QuestionCard = ({id,
  question_title,
  question_text,
  date,
  region, answers,
}: QuestionProps) => {
 console.log(answers, region)
  return (
    <div className={styles.main}>
      <Link className={styles.link} href={`/question/${id}`}>
      <h1>{question_title}</h1></Link>
      <h4>{region}</h4>
      <h3>{question_text}</h3>
      <div className={styles.dateReplyBox}>
      <h5 className={styles.date}>{formatDate(date)}</h5>
      <h4>replies:{answers}</h4></div>
    </div>
  );
};
export default QuestionCard;
