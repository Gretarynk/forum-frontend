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
          answers={question.answers}/>
         
        </div>
      )}
    </div>
  );
};
export default QuestionBox;
