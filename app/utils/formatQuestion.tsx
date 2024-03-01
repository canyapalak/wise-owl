import { formattedQuestion } from "../types";

export function formatQuestion(generatedQuestion: string): formattedQuestion {
  const regex =
    /Question: (.+?)\n(?:Option 1: (.+?)\n)?(?:Option 2: (.+?)\n)?(?:Option 3: (.+?)\n)?(?:Option 4: (.+?)\n)?(?:Correct Answer: \((.)\) (.+?)\n)?/;
  const match = generatedQuestion.match(regex);

  console.log("Match:", match);

  if (!match) {
    console.error("Failed to match:", generatedQuestion);
    return {
      question: "Invalid Question",
      options: {},
      correctAnswer: { answer: "" },
    };
  }

  const [
    ,
    question,
    optionA = "",
    optionB = "",
    optionC = "",
    optionD = "",
    correctOptionLetter = "",
    correctOption = "",
  ] = match;

  console.log("question", question);
  console.log("optionA :>> ", optionA);
  console.log("correctOption", correctOption);

  const options = {
    A: optionA.trim(),
    B: optionB.trim(),
    C: optionC.trim(),
    D: optionD.trim(),
  };

  return {
    question,
    options,
    correctAnswer: { answer: correctOption.trim() },
  };
}
