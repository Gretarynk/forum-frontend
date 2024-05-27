import styles from "../QuestionBox/questionBox.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import { QuestionType } from "../../types/question";
import { format } from "date-fns";
import QuestionCard from "../QuestionCard/questionCard";

const formatDate = (dateString: string): string => {
  return format(new Date(dateString), 'yyyy-MM-dd HH:mm:ss');
};


type QuestionBoxProps = {
  question: QuestionType;
};
const QuestionBox = ({ question }: QuestionBoxProps) => {
  console.log("questionBox",question.answers)

  const answersCount = question.answers ? question.answers.length : 0;
  console.log("boxAnswer",answersCount)
  return (
    <div className={styles.main}>
      {question && (
        <div className={styles.questionBox}>
          <QuestionCard className={styles.questionCard}
          key={question.id}
          id={question.id}
          question_title={question.question_title}
          question_text={question.question_text}
          date={question.date}
          region={question.region}
          userId={question.user_id}
          answers={answersCount}/>
         
        </div>
      )}
    </div>
  );
};
export default QuestionBox;
