import styles from "../QuestionCard/questionCard.module.css"

type QuestionProps={
    question_title:string;
    question_text:string;
    region:string;
    date:string;

}
const QuestionCard=({question_title,question_text,date, region}:QuestionProps)=>{
    return(
        <div className={styles.main}>
            <h1>{question_title}</h1>
            <h4>{region}</h4>
            <h3>{question_text}</h3>
            <h4>{date}</h4>
        </div>
    )
}
export default QuestionCard