import styles from "../ReplyCard/replyCard.module.css"
import { format } from "date-fns";
import LikeButton from "../LikeButton/likeButton";
import DislikeButton from "../DislikeButton/dislikeButton";
import { AnswerType } from "@/types/answer";

const formatDate = (dateString: string): string => {
  return format(new Date(dateString), 'yyyy-MM-dd HH:mm:ss');
};

type ReplyCardProps={
    answer:AnswerType;
    fetchAnswers:()=> void;
    updateLikes: (answerId: string, newLikes: string[]) => void;
    updateDislikes: (answerId: string, newDislikes: string[]) => void;
  
    // likes_number:string[];
    // dislikes:string[];

}

const ReplyCard=({answer, updateDislikes,updateLikes, fetchAnswers}:ReplyCardProps)=>{
    console.log( 'replycard', answer)
    return(
        <div className={styles.main}>
            <p>{answer.answer_text}</p>
            <h5>{formatDate(answer.date)}</h5>
            {/* <h3>person</h3> */}
  <LikeButton answerId={answer.id} likesCount={answer.likes_number.length} updateLikes={updateLikes}
        updateDislikes={updateDislikes}/>
  <DislikeButton answerId={answer.id} dislikesCount={answer.dislikes.length} updateLikes={updateLikes}
        updateDislikes={updateDislikes}  />
        </div>
    )
}
export default ReplyCard