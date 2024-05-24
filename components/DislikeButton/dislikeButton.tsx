import styles from "../DislikeButton/dislikeButton.module.css"

import { useState, useEffect } from "react";
import axios from "axios";
import cookies from "js-cookie";
import Image from "next/image";
import Dislike from "../../public/dislike-svgrepo-com.svg"


type LikeButtonProps = {
  answerId: string;
  dislikesCount: number;
  fetchAnswers: () => void;
};

const DislikeButton = ({
  answerId,
  dislikesCount,
  fetchAnswers,
}: LikeButtonProps) => {
  const [localDislikesCount, setLocalDislikesCount] = useState(dislikesCount);
  const [hasDisliked, setHasDisliked] = useState(false);
 

  const addLike = async () => {
    try {
      const headers = { authorization: cookies.get("jwt_token") };
 
    setLocalDislikesCount(prevCount => hasDisliked ? prevCount - 1 : prevCount + 1);
      const response = await axios.post(
        `${process.env.SERVER_URL}/answer/${answerId}/dislike`,
        {},
        { headers }
      );
      if (response.status === 200) {
        setHasDisliked(!hasDisliked);
        localStorage.setItem(`disliked_${answerId}`, !hasDisliked ? "true" : "");
        fetchAnswers();
      }
    } catch (err) {
      console.error(err);
   
    setLocalDislikesCount(prevCount => hasDisliked ? prevCount - 1 : prevCount + 1);
    }
  };
  useEffect(() => {
    const userDisliked = localStorage.getItem(`disliked_${answerId}`);
    if (userDisliked) {
      setHasDisliked(true);
    }
  }, [answerId]);

  return (
    <div>
        
      <Image
        className={styles.dislikeBtn}
        onClick={addLike}
        alt="heart like"
        src={Dislike}
       
      /> 
      {localDislikesCount}
      
    </div>
  );
};

export default DislikeButton;
