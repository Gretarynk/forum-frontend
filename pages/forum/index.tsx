import PageTemplate from "../../components/PageTemplate/pageTemplate"
import QuestionWrapper from "@/components/QuestionWrapper/questionWrapper";
import { QuestionType } from "../../types/question";
import {useRouter} from "next/router"
import axios from "axios"
import {useEffect,useState} from "react";
import cookies from "js-cookie"
import FilterOptions from "@/components/Filter/filter";
import Button from "@/components/Button/button";

const Forum=()=>{
  const router = useRouter();
  const [questions, setQuestions] = useState<QuestionType[] | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [sortByReplies, setSortByReplies] = useState<string>("");
  const [filteredQuestions, setFilteredQuestions] = useState<QuestionType[] | null>(null);

  const fetchQuestions = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };
      const response = await axios.get(`${process.env.SERVER_URL}/questions`, { headers });
      setQuestions(response.data.questions);
      setFilteredQuestions(response.data.questions);
      
    } catch (err) {
      if (err.response.status === 401) {
        router.push("/login");
      }
      console.log('err', err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortByReplies(value);
  };

  const handleFilter = () => {
    let updatedQuestions = questions;

    if (selectedRegion) {
      updatedQuestions = updatedQuestions?.filter((question) => question.region === selectedRegion) || null;
    }

    if (sortByReplies === "replies") {
      updatedQuestions=updatedQuestions?.filter((question)=>question.answers>0)|| null;
      // updatedQuestions = updatedQuestions?.sort((a, b) => b.answers - a.answers) || null;
    } else{
      updatedQuestions=updatedQuestions?.filter((question)=>question.answers===0)|| null;
    }

    setFilteredQuestions(updatedQuestions);
  };

  const questionsToDisplay = filteredQuestions 



    return(
       <PageTemplate>
       <div> 
       <FilterOptions selectedRegion={selectedRegion} onSelectRegion={handleRegionChange} onSortChange={handleSortChange} onApplyFilter={handleFilter} />

      
        {questionsToDisplay && <QuestionWrapper questions={questionsToDisplay}/>}
       </div>
       </PageTemplate>
    )
}
export default Forum;