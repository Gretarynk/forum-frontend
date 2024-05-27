import PageTemplate from "../../components/PageTemplate/pageTemplate";
import { useEffect, useState } from "react";
import {useRouter} from "next/router"
import QuestionWrapper from "@/components/QuestionWrapper/questionWrapper";
import axios from "axios"
import cookies from "js-cookie"
import { QuestionType } from "../../types/question";
import { jwtDecode } from "jwt-decode";
import styles from "../account/account.module.css"


const Account = () => {
  const router=useRouter();
  const [questions, setQuestions] = useState<QuestionType[] >([]);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    

    const getAllQuestions = async () => {
      try {
        const headers = {
          authorization: cookies.get("jwt_token"),
        };
        const response = await axios.get(`${process.env.SERVER_URL}/questions`, { headers });
        setQuestions(response.data.questions);
      } catch (err) {
        if (err.response?.status === 401) {
          router.push("/login");
        }
        console.log('err', err);
      }
    };
    getAllQuestions();
  }, [router]);
  const getCurrentUserId = () => {
    const token = cookies.get("jwt_token");
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.userId; // Adjust based on your JWT payload structure
    }
    return null;
  };
  const userId=getCurrentUserId()
  const handleDeleteQuestion = (deletedQuestionId: string) => {
    setQuestions(prevQuestions => 
      prevQuestions.filter(question => question.id !== deletedQuestionId)
    );
  };
  

 const filteredQuestions = questions.filter(question => question.user_id === userId);
 return(
    <PageTemplate>
      <div className={styles.main}>
        <div className={styles.textBox}>
        <h2> Your questions:</h2></div>
        {filteredQuestions.length>0 &&<div><QuestionWrapper questions={filteredQuestions} onDeleteQuestion={handleDeleteQuestion}/> </div>}
        </div>
    </PageTemplate>
  );
};
export default Account;