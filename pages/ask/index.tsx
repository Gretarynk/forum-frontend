import PageTemplate from "../../components/PageTemplate/pageTemplate";
import AddFetchBox from "@/components/AddedFetchedQuestions/addFetchBox";
import { QuestionType } from "../../types/question";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import cookies from "js-cookie";
import AddQuestion from "@/components/AddQuestionForm/addQuestion";

const AskQuestion = () => {
  const router = useRouter();

const [questions, setQuestions] = useState<QuestionType[] | null>(null);

  const fetchQuestions = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };
      console.log("header token", headers);
      const response = await axios.get(`${process.env.SERVER_URL}/questions`, {
        headers,
      });
      console.log(response);
      setQuestions(response.data.questions);
    } catch (err) {
      if (err.response.status === 401) {
        router.push("/login");
      }
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleDeleteQuestion = (deletedQuestionId: string) => {
    setQuestions(prevQuestions => 
      prevQuestions.filter(question => question.id !== deletedQuestionId)
    );
  };
  return (
    <PageTemplate>
      <div>
        <AddQuestion fetchQuestions={fetchQuestions} />
      
      <div>{questions && <AddFetchBox questions={questions} onDeleteQuestion={handleDeleteQuestion}/>}</div>
      </div>
    </PageTemplate>
  );
};
export default AskQuestion;
