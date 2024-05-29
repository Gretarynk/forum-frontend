import PageTemplate from "../../components/PageTemplate/pageTemplate";
import QuestionWrapper from "@/components/QuestionWrapper/questionWrapper";
import { QuestionType } from "../../types/question";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import cookies from "js-cookie";
import FilterOptions from "@/components/Filter/filter";

const Forum = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [sortByReplies, setSortByReplies] = useState<string>("");
  const [filteredQuestions, setFilteredQuestions] = useState<QuestionType[]>(
    []
  );
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const headers = {
          authorization: cookies.get("jwt_token"),
        };
        const response = await axios.get(
          `${process.env.SERVER_URL}/questions`,
          { headers }
        );
        setQuestions(response.data.questions);
        setFilteredQuestions(response.data.questions); // Initially display all questions
      } catch (err) {if (axios.isAxiosError(err))
        {if (err.response?.status === 401) {
          router.push("/login");
        }}
        console.log("err", err);
      }
    };
    fetchQuestions();
  }, [router]);

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component mounts
  }, []);

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortByReplies(value);
  };

  const handleFilter = () => {
    let updatedQuestions = [...questions];

    if (selectedRegion) {
      updatedQuestions = updatedQuestions.filter(
        (question) => question.region === selectedRegion
      );
    }
    if (updatedQuestions.length === 0) {
      setMessage("No questions available for the selected region.");
    } else {
      setMessage("");
    }

    if (sortByReplies === "replies") {
      updatedQuestions = updatedQuestions.filter(
        (question) => question.answers > 0
      );
    } else if (sortByReplies === "noReplies") {
      updatedQuestions = updatedQuestions.filter(
        (question) => question.answers === 0
      );
    }

    setFilteredQuestions(updatedQuestions);
  };

  const handleDeleteQuestion = (deletedQuestionId: string) => {
    // Update the questions state to remove the deleted question
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== deletedQuestionId)
    );

    // Update the filteredQuestions state to remove the deleted question
    setFilteredQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== deletedQuestionId)
    );
  };
  if (!mounted) {
    return null; // Prevent rendering on the server-side
  }

  return (
    <PageTemplate>
      <div>
        <FilterOptions
          selectedRegion={selectedRegion}
          onSelectRegion={handleRegionChange}
          onSortChange={handleSortChange}
          onApplyFilter={handleFilter}
        />

        {message && (
          <div
            style={{
              color: "green",
              backgroundColor: "white",
              width: "90%",
              textAlign: "center",
              margin: "auto",
            }}
          >
            {message}
          </div>
        )}
        {filteredQuestions && (
          <QuestionWrapper
            questions={filteredQuestions}
            onDeleteQuestion={handleDeleteQuestion}
          />
        )}
      </div>
    </PageTemplate>
  );
};
export default Forum;
