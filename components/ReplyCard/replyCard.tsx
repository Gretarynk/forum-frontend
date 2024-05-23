import styles from "../ReplyCard/replyCard.module.css"


type ReplyCardProps={
    id:string;
    answer_text:string;
    date:string;

}

const ReplyCard=({id,answer_text,date}:ReplyCardProps)=>{
    console.log( 'replycard', id)
    return(
        <div className={styles.main}>
            <h4>{date}</h4>
            <p>{answer_text}</p>
        </div>
    )
}
export default ReplyCard