import styles from "../AddQuestionForm/addQuestion.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import cookies from "js-cookie";
import Button from "../Button/button";

type AddQuestionProps = {
  fetchQuestions: () => void;
};

const AddQuestion = ({ fetchQuestions }: AddQuestionProps) => {
  const router = useRouter();
  const [question_title, setQuestion_title] = useState("");
  const [question_text, setQuestion_text] = useState("");
  const [region, setRegion] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
        setSuccessMessage("Question submitted successfully!");
        fetchQuestions();
        setQuestion_title("");
        setQuestion_text("");
        setRegion("");
        setErrorMessage("");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          router.push("/login");
        }
        setErrorMessage(
          "Please,check if you choose region and provided correct information  "
        );
      }
      console.log("err", err);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.inputsWrapper}>
        <input
          value={question_title}
          onChange={(e) => setQuestion_title(e.target.value)}
          className={styles.inputTitle}
          placeholder="Title"
        />
        <textarea
          value={question_text}
          onChange={(e) => setQuestion_text(e.target.value)}
          className={styles.inputText}
          placeholder="Type your question, min 30 characters..."
        />
        <div className={styles.region}>
          <h3>Choose region *</h3>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className={styles.selection}
          >
            <option value="">---------</option>
            <option value="Vilnius and around">Vilnius and around</option>
            <option value="Dzukija">Dzukija</option>
            <option value="Suvalkija"> Suvalkija</option>
            <option value="Aukstaitija">Aukstaitija</option>
            <option value="LithuaniaMinor"> Lithuania Minor</option>
            <option value="Zemaitija">Zemaitija</option>
          </select>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <Button
          className={styles.questionBtn}
          onClick={addQuestion}
          text="Submit"
          type="VALID"
        />
      </div>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};
export default AddQuestion;
