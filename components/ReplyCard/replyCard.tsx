import styles from "../ReplyCard/replyCard.module.css"
import { format } from "date-fns";

const formatDate = (dateString: string): string => {
  return format(new Date(dateString), 'yyyy-MM-dd HH:mm:ss');
};

type ReplyCardProps={
    id:string;
    answer_text:string;
    date:string;

}

const ReplyCard=({id,answer_text,date}:ReplyCardProps)=>{
    console.log( 'replycard', id)
    return(
        <div className={styles.main}>
            <p>{answer_text}</p>
            <h5>{formatDate(date)}</h5>
        </div>
    )
}
export default ReplyCard