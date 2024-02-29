import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { EndlessQuizProps } from "../types";

export default function EndlessQuiz({
  openEndlessQuiz,
  closeEndlessQuiz,
}: EndlessQuizProps) {
  const pickedCategory = useContext(CategoryContext);
  const [generatedQuestion, setGeneratedQuestion] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      if (pickedCategory.length > 0) {
        generateQuestion(pickedCategory);
      }
    };

    fetchData();
    console.log("generatedQuestion :>> ", generatedQuestion);
    console.log("pickedCategory", pickedCategory);
  }, []);

  const generateQuestion = async (pickedCategory: string) => {
    const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    const promptText = `You are an AI assistant that creates creative and interesting trivia questions according to certain rules and a sample.
    You will generate a trivia question for each prompt about ${pickedCategory} and give four options, each represented with a letter and the correct answer with the correct letter.
    One of the options should be the correct answer.The difficulty of the questions should be middle level, suitable for average adult knowledge.
    
    You will strictly follow these rules:
    
    1 - The question sentence should not include the correct answer or any answer in the options.
    2 - You should not ask the same question until 30 new prompts.
    3 - The question should not exceed 200 characters.
    4 - Each option should not exceed 50 characters.
    5 - Generate questions according to this sample:
    
    Question: What is the longest river in the world?
    
    Option 1: (A) Mississippi River;
    Option 2: (B) The Nile;
    Option 3: (C) Congo River;
    Option 4: (D) Amazon River;
    
    Correct Answer: (B) The Nile`;

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

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("responseData :>> ", responseData);
      const generatedMessage = responseData.choices[0]?.message?.content;

      console.log("generatedMessage :>> ", generatedMessage);

      setGeneratedQuestion(generatedMessage);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <div>{generatedQuestion ? generatedQuestion : <div>No result</div>}</div>
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
