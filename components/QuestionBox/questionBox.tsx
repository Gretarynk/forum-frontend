import styles from "../QuestionBox/questionBox.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import { QuestionType } from "../../types/question";
import { format } from "date-fns";

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
          <h1>{question.question_title}</h1>
          <h4>{question.region}</h4>
          <h3>{question.question_text}</h3>
          <h5>{formatDate(question.date)}</h5>
        </div>
      )}
    </div>
  );
};
export default QuestionBox;
