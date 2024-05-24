import styles from "../ReplyWrapper/replyWrapper.module.css"
import ReplyCard from "../ReplyCard/replyCard"
import { AnswerType } from "@/types/answer"

type ReplyWrapperProps={
    answers:AnswerType [];
    fetchAnswers:()=>void;
}

const ReplyWrapper=({answers, fetchAnswers}:ReplyWrapperProps)=>{
    console.log( 'replywrapper',answers)

 



    return(
        <div className={styles.main}>
           {answers.map((answer) => (
        <ReplyCard
          key={answer.id}
          id={answer.id}
          answer_text={answer.answer_text}
          date={answer.date}
          likes_number={answer.likes_number}
          dislikes={answer.dislikes}
          fetchAnswers={fetchAnswers}
          
         
        />
      ))}
           
        </div>
    )
}
export default ReplyWrapper