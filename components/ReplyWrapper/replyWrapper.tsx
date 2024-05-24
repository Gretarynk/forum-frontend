import styles from "../ReplyWrapper/replyWrapper.module.css";
import ReplyCard from "../ReplyCard/replyCard";
import { AnswerType } from "@/types/answer";
import { useState, useEffect } from "react";

type ReplyWrapperProps = {
  answers: AnswerType[];
  fetchAnswers: () => void;
};

const ReplyWrapper = ({ answers, fetchAnswers }: ReplyWrapperProps) => {
  console.log("replywrapper", answers);

  const [answerList, setAnswerList] = useState(answers);
  useEffect(() => {
    setAnswerList(answers);
  }, [answers]);

  const handleUpdateLikes = (answerId: string, newLikes: string[]) => {
    setAnswerList((prevAnswers) =>
      prevAnswers.map((answer) =>
        answer.id === answerId ? { ...answer, likes_number: newLikes } : answer
      )
    );
  };

  const handleUpdateDislikes = (answerId: string, newDislikes: string[]) => {
    setAnswerList((prevAnswers) =>
      prevAnswers.map((answer) =>
        answer.id === answerId ? { ...answer, dislikes: newDislikes } : answer
      )
    );
  };

  return (
    <div className={styles.main}>
      {answerList.map((answer) => (
        <ReplyCard
          key={answer.id}
          answer={answer}
          updateLikes={handleUpdateLikes}
          updateDislikes={handleUpdateDislikes}
          fetchAnswers={fetchAnswers}
        />
      ))}
    </div>
  );
};
export default ReplyWrapper;
