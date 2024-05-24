import styles from "../LikeButton/likeButton.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import cookies from "js-cookie";
import Image from "next/image";
import redHeart from "../../public/red-heart.svg"

type LikeButtonProps = {
  answerId: string;
  likesCount: number;
  updateLikes: (answerId: string, newLikes: string[]) => void;
  updateDislikes: (answerId: string, newDislikes: string[]) => void;
};

const LikeButton = ({
  answerId,
  likesCount,
  updateLikes, updateDislikes,
}: LikeButtonProps) => {
//   const [localLikesCount, setLocalLikesCount] = useState(likesCount);
  const [hasLiked, setHasLiked] = useState(false);
 

  const addLike = async () => {
    try {
      const headers = { authorization: cookies.get("jwt_token") };
 
    // setLocalLikesCount(prevCount => hasLiked ? prevCount - 1 : prevCount + 1);
      const response = await axios.post(
        `${process.env.SERVER_URL}/answer/${answerId}/like`,
        {},
        { headers }
      );
      if (response.status === 200) {
        setHasLiked(!hasLiked);
        updateLikes(answerId, response.data.answer.likes_number);
        updateDislikes(answerId, response.data.answer.dislikes);
      }
    } catch (err) {
      console.error(err);
   
    // setLocalLikesCount(prevCount => hasLiked ? prevCount - 1 : prevCount + 1);
    }
  };

//

  return (
    <div>
        
      <Image
        className={styles.likeBtn}
        onClick={addLike}
        alt="heart like"
        src={redHeart}
       
      /> 
      Like {likesCount}
      
    </div>
  );
};

export default LikeButton;
