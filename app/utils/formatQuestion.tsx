import { formattedQuestion } from "../types";

export function formatQuestion(generatedQuestion: string): formattedQuestion {
  const questionIndex = generatedQuestion.indexOf("Question: ");
  const option1Index = generatedQuestion.indexOf("Option 1: ");
  const option2Index = generatedQuestion.indexOf("Option 2: ");
  const option3Index = generatedQuestion.indexOf("Option 3: ");
  const option4Index = generatedQuestion.indexOf("Option 4: ");
  const correctAnswerIndex = generatedQuestion.indexOf("Correct Answer: ");

  const question = generatedQuestion
    .slice(questionIndex + 10, option1Index)
    .trim();
  const optionA =
    option1Index !== -1
      ? generatedQuestion.slice(option1Index + 10, option2Index).trim()
      : "";
  const optionB =
    option2Index !== -1
      ? generatedQuestion.slice(option2Index + 10, option3Index).trim()
      : "";
  const optionC =
    option3Index !== -1
      ? generatedQuestion.slice(option3Index + 10, option4Index).trim()
      : "";
  const optionD =
    option4Index !== -1
      ? generatedQuestion.slice(option4Index + 10, correctAnswerIndex).trim()
      : "";
  const correctOption =
    correctAnswerIndex !== -1
      ? generatedQuestion.slice(correctAnswerIndex + 15).trim()
      : "";

  console.log("question", question);
  console.log("optionA :>> ", optionA);
  console.log("correctOption", correctOption);

  const options = [optionA, optionB, optionC, optionD];

  return {
    question,
    options,
    correctOption,
  };
}
