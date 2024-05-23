import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import axios from "axios";
import cookies from "js-cookie";
import Button from "../Button/button";
import ReplyWrapper from "../ReplyWrapper/replyWrapper";
import styles from "../ReplyForm/reply.module.css"



const Reply=()=>{
    const router=useRouter();
const [answer_text,setAnswer_text]=useState('')
//to do 


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
      console.log('posted')
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
            <input className={styles.replyInput} placeholder="Your reply..." value={answer_text} onChange={(e) => setAnswer_text(e.target.value)} />
        </div><Button onClick={addReply} text="Submit" type="VALID" />
        </>
    )
}
export default Reply