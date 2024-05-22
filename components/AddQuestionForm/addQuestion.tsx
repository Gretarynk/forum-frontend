import styles from "../AddQuestionForm/addQuestion.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import cookies from "js-cookie";
import Button from "../Button/button";

const AddQuestion = () => {
  const router = useRouter();
  const [question_title, setQuestion_title] = useState("");
  const [question_text, setQuestion_text] = useState("");

  const [region, setRegion] = useState("");

  const addQuestion = async () => {
    try {
      const newQuestion = {
        question_title: question_title,
        question_text: question_text,
        region: region,
      };
      const headers = {
        authorization: cookies.get("jwt_token"),
      };
      const response = await axios.post(
        `${process.env.SERVER_URL}/questions`,
        newQuestion,
        { headers }
      );
      if (response.status === 200) {
        router.push("/ask");
      }
    } catch (err) {
      if (err.response.status === 401) {
        router.push("/login");
      }
      console.log("err", err);
    }
  };

  return (
    <div className={styles.main}>
      <input
        value={question_title}
        onChange={(e) => setQuestion_title(e.target.value)}
        className={styles.input}
        placeholder="Title"
      />
      <input
        value={question_text}
        onChange={(e) => setQuestion_text(e.target.value)}
        className={styles.input}
        placeholder="Type your question"
      />
      <div className={styles.region}>
        <h3>Choose region</h3>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className={styles.selection}
        >
          <option value="Vilnius and around">Vilnius and around</option>
          <option value="Dzukija">Dzukija</option>
          <option value="Suvalkija"> Suvalkija</option>
          <option value="Aukstaitija">Aukstaitija</option>
          <option value="LithuaniaMinor"> Lithuania Minor</option>
          <option value="Zemaitija">Zemaitija</option>
        </select>
      </div>
      <div className={styles.btnWrapper}>
        <Button onClick={addQuestion} text="Submit" type="VALID" />
      </div>
    </div>
  );
};
export default AddQuestion;
