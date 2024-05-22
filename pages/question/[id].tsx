import PageTemplate from "../../components/PageTemplate/pageTemplate";
import axios from "axios";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import { useState, useEffect } from "react";
import QuestionBox from "@/components/QuestionBox/questionBox";

const Question = () => {
  const router = useRouter();

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

  return (
    <PageTemplate>
      {question && <QuestionBox question={question} />}
    </PageTemplate>
  );
};
export default Question;
