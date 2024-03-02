import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { EndlessQuizProps, formattedQuestion } from "../types";
import "@/app/globals.css";
import { formatQuestion } from "../utils/formatQuestion";

export default function EndlessQuiz({
  openEndlessQuiz,
  closeEndlessQuiz,
}: EndlessQuizProps) {
  const pickedCategory = useContext(CategoryContext);
  const [generatedQuestion, setGeneratedQuestion] =
    useState<formattedQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    setIsCorrect(null);
    const fetchData = async () => {
      if (pickedCategory) {
        await generateQuestion(pickedCategory);
      }
    };

    fetchData();
  }, [pickedCategory]);

  const handleOptionClick = (optValue: string) => {
    setSelectedOption(optValue);
    setIsCorrect(optValue === String(generatedQuestion?.correctOption));
  };

  console.log("pickedCategory", pickedCategory.pickedCategory);

  const generateQuestion = async (pickedCategoryObject: {
    pickedCategory: string;
  }) => {
    const pickedCategory = pickedCategoryObject.pickedCategory;
    const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    const promptText = `You are an AI assistant that creates creative and interesting trivia questions according to certain rules and a sample.
    You will generate a trivia question for each prompt about ${pickedCategory} and give four options, and the correct answer after them.
    One of the options should be the correct answer.The difficulty of the questions should be middle level, suitable for average adult knowledge.
    
    You will strictly follow these rules:
    
    1 - The question sentence should not include the correct answer or any answer in the options.
    2 - You should not ask the same question until 30 new prompts.
    3 - The question should not exceed 200 characters.
    4 - Each option should not exceed 50 characters.
    5 - Generate questions according to this sample:
    
    Question: What is the longest river in the world?
    
    Option 1: Mississippi River
    Option 2: The Nile
    Option 3: Congo River
    Option 4: Amazon River
    
    Correct Answer: The Nile`;

    console.log("promptText :>> ", promptText);

    const apiUrl = "https://api.openai.com/v1/chat/completions";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "assistant", content: promptText }],
        temperature: 1.5,
        max_tokens: 200,
      }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      console.log("Response status:", response.status);

      const responseData = await response.json();
      const questionContent = responseData.choices[0].message.content;
      console.log("questionContent :>> ", questionContent);
      const formattedQuestion = formatQuestion(questionContent);

      setGeneratedQuestion(formattedQuestion);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  console.log("generatedQuestion :>> ", generatedQuestion);
  console.log("isCorrect", isCorrect);
  console.log("selectedOption :>> ", selectedOption);

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="text-center">
        {generatedQuestion ? (
          <div className="flex flex-wrap flex-col items-center">
            <span>{generatedQuestion.question}</span>
            <div className="flex flex-wrap gap-4 justify-center flex-col items-center mt-8">
              {generatedQuestion.options.map((optValue, index) => (
                <div
                  key={index}
                  className={`${
                    selectedOption === null && isCorrect === null
                      ? "bg-mustard-default"
                      : selectedOption === optValue
                      ? isCorrect
                        ? "bg-green-default"
                        : "bg-red-default"
                      : "bg-mustard-default"
                  } ${
                    selectedOption === null && isCorrect === null
                      ? "hover:bg-mustard-light"
                      : selectedOption === optValue
                      ? isCorrect
                        ? "hover:bg-green-default"
                        : "hover:bg-red-default"
                      : "hover:bg-mustard-light"
                  } text-neutral-50 text-2xl rounded-md p-3 cursor-pointer w-64 text-center shadow-lg shadow-zinc-400`}
                  onClick={() => handleOptionClick(optValue)}
                >
                  {`${optValue}`}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="loading">
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
          </div>
        )}
      </div>
      <div
        className="button-prm bg-gray-default hover:bg-gray-light  text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer w-48 text-center shadow-lg shadow-zinc-400"
        onClick={closeEndlessQuiz}
      >
        Home
      </div>
    </div>
  );
}
