import styles from "../ReplyCard/replyCard.module.css"
import { format } from "date-fns";
import LikeButton from "../LikeButton/likeButton";
import DislikeButton from "../DislikeButton/dislikeButton";

const formatDate = (dateString: string): string => {
  return format(new Date(dateString), 'yyyy-MM-dd HH:mm:ss');
};

type ReplyCardProps={
    id:string;
    answer_text:string;
    date:string;
    likes_number:string[];
    dislikes:string[];
    fetchAnswers:()=> void;

}

const ReplyCard=({id,answer_text,date, likes_number,dislikes,fetchAnswers}:ReplyCardProps)=>{
    console.log( 'replycard', id)
    return(
        <div className={styles.main}>
            <p>{answer_text}</p>
            <h5>{formatDate(date)}</h5>
            {/* <h3>person</h3> */}
  <LikeButton answerId={id} likesCount={likes_number.length} fetchAnswers={fetchAnswers}/>
  <DislikeButton answerId={id} dislikesCount={dislikes.length} fetchAnswers={fetchAnswers}   />
        </div>
    )
}
export default ReplyCard