import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import axios from "axios";
import cookies from "js-cookie";
import Button from "../Button/button";
import styles from "../ReplyForm/reply.module.css"
// import {TextBox} from 'devextreme-react/text-box'

type ReplyProps={
  fetchAnswers:()=>void;
}

const Reply=({fetchAnswers}:ReplyProps)=>{
    const router=useRouter();
const [answer_text,setAnswer_text]=useState('')



    const addReply= async()=>{
        try{
            const newAnswer = {               
                answer_text: answer_text,
               
              };
              const headers = {
                authorization: cookies.get("jwt_token"),
              };


     const response= await axios.post(`${process.env.SERVER_URL}/question/${router.query.id}/answer`, newAnswer, {headers})
     console.log("answer",response.data)
     if(response.status === 200){
      fetchAnswers();
      setAnswer_text('');
     }
        }catch (err) {
            if (err.response.status === 401) {
              router.push("/login");
            }
            console.log("err", err);
          }
    }

    
    return(
        <>

        <div className={styles.replyBox}>
            <textarea className={styles.replyInput} placeholder="Your reply..." value={answer_text} onChange={(e) => setAnswer_text(e.target.value)} />
        <Button className={styles.replyBtn} onClick={addReply} text="Submit" type="VALID" />
        </div>
        </>
    )
}
export default Reply