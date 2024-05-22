import PageTemplate from "../../components/PageTemplate/pageTemplate"
import QuestionWrapper from "@/components/QuestionWrapper/questionWrapper";
import { QuestionType } from "../../types/question";
import {useRouter} from "next/router"
import axios from "axios"
import {useEffect,useState} from "react";
import cookies from "js-cookie"

const Forum=()=>{
    const router=useRouter();

  const [questions,setQuestions]=useState<QuestionType[] | null>(null)
const fetchQuestions= async()=>{
  try{
    const headers={
      authorization:cookies.get("jwt_token")
    } 
    console.log('header token', headers)
    const response= await axios.get(`${process.env.SERVER_URL}/questions`, {headers,})
 console.log(response);
 setQuestions(response.data.questions)
 }
 catch(err){
  if(err.response.status === 401){
    router.push("/login")
  }
  console.log('err',err)
 }
}
  useEffect(()=>{
 fetchQuestions()
  },[])
    return(
       <PageTemplate>
       <div> 
        {questions && <QuestionWrapper questions={questions}/>}
       </div>
       </PageTemplate>
    )
}
export default Forum;