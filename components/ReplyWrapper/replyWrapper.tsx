import styles from "../ReplyWrapper/replyWrapper.module.css"
import ReplyCard from "../ReplyCard/replyCard"
import { AnswerType } from "@/types/answer"

type ReplyWrapperProps={
    answers:AnswerType [];
}

const ReplyWrapper=({answers}:ReplyWrapperProps)=>{
    console.log( 'replywrapper',answers)
    return(
        <div className={styles.main}>
           {answers.map((answer) => (
        <ReplyCard
          key={answer.id}
          id={answer.id}
          answer_text={answer.answer_text}
          date={answer.date}
         
        />
      ))}
           
        </div>
    )
}
export default ReplyWrapper