import styles from "../AddFetch/addFetchBox.module.css";
import { QuestionType } from "../../types/question";
import QuestionTitle from "../QuestionTitle/questionTitle";
import QuestionCard from "../QuestionCard/questionCard";


type AddFetchBoxProps = {
  questions: QuestionType[];
};
const AddFetchBox = ({ questions }: AddFetchBoxProps) => {
  return (
    <div className={styles.main}>
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          id={question.id}
          question_title={question.question_title}
          date={question.date}
          region={question.region}
          answers={question.answers}
         
        />
      ))}
    </div>
  );
};
export default AddFetchBox;
