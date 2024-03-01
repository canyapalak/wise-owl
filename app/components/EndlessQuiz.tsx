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

  useEffect(() => {
    const fetchData = async () => {
      if (pickedCategory) {
        await generateQuestion(pickedCategory);
        console.log("generatedQuestion :>> ", generatedQuestion);
        console.log("pickedCategory", pickedCategory);
      }
    };

    fetchData();
  }, [pickedCategory]);

  console.log("pickedCategory", pickedCategory);

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
    console.log("Request options:", requestOptions);
    console.log("Request URL:", apiUrl);
    console.log("Request Options:", requestOptions);

    try {
      const response = await fetch(apiUrl, requestOptions);
      console.log("Response status:", response.status);

      const responseData = await response.json();
      console.log("responseData :>> ", responseData);
      const generatedMessage = responseData.choices[0]?.message?.content;
      const formattedQuestion = formatQuestion(
        responseData.choices[0].message.content
      );

      console.log("generatedMessage :>> ", generatedMessage);

      setGeneratedQuestion(formattedQuestion);
      console.log("generatedQuestion :>> ", generatedMessage);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  console.log("generatedQuestion :>> ", generatedQuestion);

  return (
    <div className="flex flex-col gap-8 items-center">
      <div>
        {generatedQuestion ? (
          <div>
            <span>{generatedQuestion.question}</span>
            <div className="flex flex-wrap gap-4 justify-center">
              {Object.entries(generatedQuestion.options).map(
                ([optKey, optValue]) => (
                  <div
                    key={optKey}
                    className="button-prm bg-brick-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-brick-light w-40 text-center"
                  >{`${optKey}: ${optValue}`}</div>
                )
              )}
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
        className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center"
        onClick={closeEndlessQuiz}
      >
        Home
      </div>
    </div>
  );
}
