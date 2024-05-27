import styles from "../AddedFetchedQuestions/addFetchBox.module.css";
import { QuestionType } from "../../types/question";

import QuestionCard from "../QuestionCard/questionCard";

type AddFetchBoxProps = {
  questions: QuestionType[];
  onDeleteQuestion?: (deletedQuestionId: string) => void;
};
const AddFetchBox = ({ questions, onDeleteQuestion }: AddFetchBoxProps) => {
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
          userId={question.user_id}
          onDeleteQuestion={onDeleteQuestion}
        />
      ))}
    </div>
  );
};
export default AddFetchBox;
