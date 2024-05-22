import styles from "../QuestionBox/questionBox.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import { QuestionType } from "../../types/question";

type QuestionBoxProps = {
  question: QuestionType;
};
const QuestionBox = ({ question }: QuestionBoxProps) => {
  return (
    <div className={styles.main}>
      {question && (
        <div className={styles.wrapper}>
          <h1>{question.question_title}</h1>
        </div>
      )}
    </div>
  );
};
export default QuestionBox;
