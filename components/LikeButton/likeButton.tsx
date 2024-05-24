import styles from "../LikeButton/likeButton.module.css";
import { useState } from "react";
import axios from "axios";
import cookies from "js-cookie";
import Image from "next/image";
import redHeart from "../../public/red-heart.svg"

type LikeButtonProps = {
  answerId: string;
  likesCount: number;
  fetchAnswers: () => void;
};

const LikeButton = ({
  answerId,
  likesCount,
  fetchAnswers,
}: LikeButtonProps) => {
  const [localLikesCount, setLocalLikesCount] = useState(likesCount);
  const [hasLiked, setHasLiked] = useState(false);
 

  const addLike = async () => {
    try {
      const headers = { authorization: cookies.get("jwt_token") };
 
    setLocalLikesCount(prevCount => hasLiked ? prevCount - 1 : prevCount + 1);
      const response = await axios.post(
        `${process.env.SERVER_URL}/answer/${answerId}/like`,
        {},
        { headers }
      );
      if (response.status === 200) {
        setHasLiked(!hasLiked);
        fetchAnswers();
      }
    } catch (err) {
      console.error(err);
   
    setLocalLikesCount(prevCount => hasLiked ? prevCount - 1 : prevCount + 1);
    }
  };

  return (
    <div>
        
      <Image
        className={styles.likeBtn}
        onClick={addLike}
        alt="heart like"
        src={redHeart}
       
      /> 
      Like {localLikesCount}
      
    </div>
  );
};

export default LikeButton;
