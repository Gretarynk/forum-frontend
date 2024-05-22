import styles from "../AddFetch/addFetchBox.module.css";
import { QuestionType } from "../../types/question";
import QuestionTitle from "../QuestionTitle/questionTitle";

type AddFetchBoxProps = {
  questions: QuestionType[];
};
const AddFetchBox = ({ questions }: AddFetchBoxProps) => {
  return (
    <div className={styles.main}>
      {questions.map((question) => (
        <QuestionTitle
          key={question.id}
          id={question.id}
          question_title={question.question_title}
          date={question.date}
          region={question.region}
        />
      ))}
    </div>
  );
};
export default AddFetchBox;
