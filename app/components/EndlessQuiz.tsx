import "@/app/globals.css";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { EndlessQuizProps, formattedQuestion } from "../types";
import Image from "next/image";
import confused from "@/public/assets/confused.png";
import { formatQuestion } from "../utils/formatQuestion";
import Spinner from "./Spinner";
import CountdownBar from "./CountdownBar";

export default function EndlessQuiz({ closeEndlessQuiz }: EndlessQuizProps) {
  const pickedCategoryKeyword = useContext(CategoryContext);
  const pickedCategoryTitle = useContext(CategoryContext);
  const { isChillMode } = useContext(CategoryContext);
  const [generatedQuestion, setGeneratedQuestion] =
    useState<formattedQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [isTimeOut, setIsTimeOut] = useState<boolean>(false);
  let timeout: NodeJS.Timeout;

  useEffect(() => {
    setIsCorrect(null);
    setQuestionCount(0);
    const fetchData = async () => {
      if (pickedCategoryKeyword) {
        setLoading(true);
        try {
          await generateQuestion(pickedCategoryKeyword);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isChillMode) {
      timeout = setTimeout(() => {
        setIsTimeOut(true);
        setIsCorrect(false);
        console.log("Time is out!");
      }, 10000);
    }

    return () => clearTimeout(timeout);
  }, [generatedQuestion?.question]);

  console.log("loading :>> ", loading);
  console.log("selectedOption :>> ", selectedOption);

  const handleOptionClick = (optValue: string) => {
    if (selectedOption === null && !isTimeOut) {
      setSelectedOption(optValue);
      setIsCorrect(optValue === String(generatedQuestion?.correctOption));
      clearTimeout(timeout);
    }
  };

  const handleNewQuestion = async () => {
    setLoading(true);
    setSelectedOption(null);
    setIsTimeOut(false);
    await generateQuestion(pickedCategoryKeyword);
    if (
      generatedQuestion &&
      generatedQuestion?.question !== "AI is confused :/"
    ) {
      setQuestionCount(questionCount + 1);
    }
    setLoading(false);
  };

  console.log(
    "pickedCategoryKeyword",
    pickedCategoryKeyword.pickedCategoryKeyword
  );
  console.log("pickedCategoryTitle", pickedCategoryTitle.pickedCategoryTitle);
  console.log("isChillMode", isChillMode);
  console.log("isTimeOut", isTimeOut);

  const generateQuestion = async (pickedCategoryObject: {
    pickedCategoryKeyword: string;
  }) => {
    const pickedCategoryKeyword = pickedCategoryObject.pickedCategoryKeyword;
    const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    const promptText = `You are an AI assistant that creates creative and interesting trivia questions according to certain rules and the sample given below.
    You will generate a trivia question for each prompt about ${pickedCategoryKeyword} and give four options, and the correct answer after them.
    One of the options should be the correct answer.The difficulty of the questions should be middle level, suitable for average adult knowledge.
    
    You will strictly follow these rules:
    
    1 - The question sentence should not include the whole or any part of the correct answer or any other option in the options.

    Example:

      Question: Who is the protagonist in Super Mario games?
    
    Option 1: Luigi
    Option 2: Sonic
    Option 3: Mario
    Option 4: Pikachu
    
    Correct Answer: Mario

    This question is wrong since the correct answer "Mario" is already included in the question sentence. Do not generate questions like this.


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
        temperature: 0.8,
        max_tokens: 200,
      }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      console.log("Response status:", response.status);

      const responseData = await response.json();
      console.log("responseData :>> ", responseData);
      const questionContent = responseData.choices[0]?.message.content;
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
    <div className="flex flex-col gap-2 items-center">
      <div className="text-lg mt-0 mb-1 items-center flex flex-row justify-center">
        <span
          className="bg-navy-default text-neutral-50 text-lg px-2 py-1
          text-center items-center category-tag"
        >
          {pickedCategoryTitle.pickedCategoryTitle}
        </span>
      </div>
      <div className="text-center flex flex-col">
        {!loading && generatedQuestion?.question !== "AI is confused :/" && (
          <div
            className="text-lg px-2 py-1 mb-2
       text-center items-center fade-in text-mustard-default"
          >
            Question {questionCount + 1}
          </div>
        )}

        {!isChillMode &&
        !loading &&
        !selectedOption &&
        !isTimeOut &&
        generatedQuestion?.question !== "AI is confused :/" ? (
          <div className="w-full sm:min-w-[300px] md:min-w-[395px] lg:min-w-[545px] xl:min-w-[700px] mx-auto mb-4">
            <CountdownBar />
          </div>
        ) : null}

        {loading ? (
          <Spinner />
        ) : (
          generatedQuestion && (
            <div className="flex flex-wrap flex-col items-center fade-in px-2">
              <span className="">{generatedQuestion.question}</span>
              {selectedOption !== null || isTimeOut ? (
                <div>
                  {isCorrect ? (
                    <div className="text-xl mt-4 text-green-default">
                      You nailed it! Congratulations!
                    </div>
                  ) : (
                    <div className="text-xl mt-4 text-red-default">
                      Oops! Correct answer was{" "}
                      {generatedQuestion?.correctOption}.
                    </div>
                  )}
                </div>
              ) : null}
              <div
                className={`flex flex-wrap gap-4 justify-center flex-col items-center mb-6 ${
                  generatedQuestion?.question === "AI is confused :/"
                    ? "mt-2"
                    : "mt-6"
                }`}
              >
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
                      selectedOption === null && !isTimeOut
                        ? "hover:bg-mustard-light"
                        : selectedOption === optValue
                        ? isCorrect
                          ? "hover:bg-green-default"
                          : "hover:bg-red-default"
                        : ""
                    } text-neutral-50 text-2xl rounded-md p-3 ${
                      selectedOption === null && !isTimeOut && "cursor-pointer"
                    } w-56 sm:w-64 text-center shadow-lg shadow-zinc-400`}
                    onClick={() => handleOptionClick(optValue)}
                  >
                    {`${optValue}`}
                  </div>
                ))}
              </div>
              {selectedOption !== null || isTimeOut ? (
                <button
                  className="button-prm bg-purple-default hover:bg-purple-light text-neutral-50 text-2xl rounded-md p-3 cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 mt-6"
                  onClick={handleNewQuestion}
                >
                  Next
                </button>
              ) : null}
            </div>
          )
        )}
      </div>
      {!loading && generatedQuestion?.question === "AI is confused :/" && (
        <div className="items-center flex flex-col justify-normal">
          <Image src={confused} alt="confused" className="w-24 mb-12 fade-in" />
          <button
            className="button-prm bg-purple-default hover:bg-purple-light text-neutral-50 text-2xl rounded-md p-3 cursor-pointer w-48 text-center shadow-lg shadow-zinc-400"
            onClick={handleNewQuestion}
          >
            Retry
          </button>
        </div>
      )}
      <div
        className="button-prm bg-gray-default hover:bg-gray-light  text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 mt-1"
        onClick={closeEndlessQuiz}
      >
        Home
      </div>
    </div>
  );
}
