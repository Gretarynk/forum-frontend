import styles from "../QuestionWrapper/questionWrapper.module.css";
import QuestionCard from "../QuestionCard/questionCard";
import { QuestionType } from "../../types/question";

type QuestionWrapperProps = {
  questions: QuestionType[];
};
const QuestionWrapper = ({ questions }: QuestionWrapperProps) => {
  console.log(questions);
  return (
    <div className={styles.main}>
      <div className={styles.filter}>
        <h2>Sort by</h2>
      </div>
      <div className={styles.questionBox}>
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            id={question.id}
            question_title={question.question_title}
            question_text={question.question_text}
            date={question.date}
            region={question.region}
            answers={question.answers}
           
          />
          
        ))}
      </div>
    </div>
  );
};
export default QuestionWrapper;
