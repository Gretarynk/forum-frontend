import PageTemplate from "../../components/PageTemplate/pageTemplate";
import axios from "axios";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import { useState, useEffect } from "react";
import QuestionBox from "../../components/QuestionBox/questionBox";
import Reply from "../../components/ReplyForm/reply";
import ReplyWrapper from "../../components/ReplyWrapper/replyWrapper";
import { AnswerType } from "../../types/answer";

const Question = () => {
  const router = useRouter();
  const [answers, setAnswers] = useState<AnswerType[] | null>(null);
  const [question, setQuestion] = useState();
  const fetchQuestion = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };
      console.log("header token", headers);
      const response = await axios.get(
        `${process.env.SERVER_URL}/question/${router.query.id}`,
        { headers }
      );
      console.log(response);
      setQuestion(response.data.question);
    } catch (err) {
      if (err.response.status === 401) {
        router.push("/login");
      }
      console.log("err", err);
    }
  };
  useEffect(() => {
    router.query.id && fetchQuestion();
  }, [router.query.id]);

  const fetchAnswers = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(
        `${process.env.SERVER_URL}/question/${router.query.id}/answers`,
        { headers }
      );
      console.log("answer", response.data);
      if (response.status === 200) {
        console.log("all replies", response.data);
        setAnswers(response.data.answers);
        console.log("reply");
      }
    } catch (err) {
      if (err.response.status === 401) {
        router.push("/login");
      }
      console.log("err", err);
    }
  };
  useEffect(() => {
    if (router.query.id) {
      fetchAnswers();
    }
  }, [router.query.id]);

  return (
    <PageTemplate>
      {question && <QuestionBox question={question} />}

      {answers && (
        <ReplyWrapper fetchAnswers={fetchAnswers} answers={answers} />
      )}

      <Reply fetchAnswers={fetchAnswers} />
    </PageTemplate>
  );
};
export default Question;
