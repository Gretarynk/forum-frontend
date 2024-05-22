import styles from "../QuestionWrapper/questionWrapper.module.css"
import QuestionCard from "../QuestionCard/questionCard"
import { QuestionType } from "../../types/question"

type QuestionWrapperProps={
    questions:QuestionType[];
}
const QuestionWrapper=({questions}:QuestionWrapperProps)=>{
    return(
        <div className={styles.main}>
            <div className={styles.filter}>
                <h2>Sort by</h2>

            </div>
            {questions.map((question)=>(<QuestionCard key={question.id}  question_title={question.question_title} question_text={question.question_text} date={question.date} region={question.region} />))}

        </div>
    )
}
export default QuestionWrapper