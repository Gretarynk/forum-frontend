import styles from "../DislikeButton/dislikeButton.module.css";

import { useState, useEffect } from "react";
import axios from "axios";
import cookies from "js-cookie";
import Image from "next/image";
import Dislike from "../../public/dislike-svgrepo-com.svg";

type LikeButtonProps = {
  answerId: string;
  dislikesCount: number;
  updateLikes: (answerId: string, newLikes: string[]) => void;
  updateDislikes: (answerId: string, newDislikes: string[]) => void;
};

const DislikeButton = ({
  answerId,
  dislikesCount,
  updateDislikes,
  updateLikes,
}: LikeButtonProps) => {
  //   const [localDislikesCount, setLocalDislikesCount] = useState(dislikesCount);
  const [hasDisliked, setHasDisliked] = useState(false);

  const addLike = async () => {
    try {
      const headers = { authorization: cookies.get("jwt_token") };

      // setLocalDislikesCount(prevCount => hasDisliked ? prevCount - 1 : prevCount + 1);
      const response = await axios.post(
        `${process.env.SERVER_URL}/answer/${answerId}/dislike`,
        {},
        { headers }
      );
      if (response.status === 200) {
        setHasDisliked(!hasDisliked);
        updateDislikes(answerId, response.data.answer.dislikes);
        updateLikes(answerId, response.data.answer.likes_number);
      }
    } catch (err) {
      console.error(err);

      // setLocalDislikesCount(prevCount => hasDisliked ? prevCount - 1 : prevCount + 1);
    }
  };

  return (
    <div>
      <Image
        className={styles.dislikeBtn}
        onClick={addLike}
        alt="heart like"
        src={Dislike}
      />
      {dislikesCount}
    </div>
  );
};

export default DislikeButton;
