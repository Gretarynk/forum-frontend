import styles from "../QuestionWrapper/questionWrapper.module.css";
import QuestionCard from "../QuestionCard/questionCard";
import { QuestionType } from "../../types/question";

type QuestionWrapperProps = {
  questions: QuestionType[];
  onDeleteQuestion:(deletedQuestionId: string)=>void;
};
const QuestionWrapper = ({ questions,onDeleteQuestion}: QuestionWrapperProps) => {
  console.log(questions);
  return (
    <div className={styles.main}>
     
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
            userId={question.user_id}
            onDeleteQuestion={onDeleteQuestion}
           
          />
          
        ))}
      </div>
    </div>
  );
};
export default QuestionWrapper;
