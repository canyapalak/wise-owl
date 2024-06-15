import { useContext } from "react";
import { ContestResultProps } from "../types";
import { ScoreContext } from "../context/ScoreContext";
import Image from "next/image";
import owl from "@/public/assets/01_owl.png";
import crow from "@/public/assets/02_crow.png";
import chicken from "@/public/assets/03_chicken.png";
import cat from "@/public/assets/04_cat.png";
import fox from "@/public/assets/05_fox.png";

export default function ContestResult({
  closeContestResult,
}: ContestResultProps) {
  const { score } = useContext(ScoreContext);

  const getAnimalImage = (score: number) => {
    if (score >= 0 && score <= 2) {
      return crow;
    } else if (score > 2 && score <= 4) {
      return cat;
    } else if (score > 4 && score <= 6) {
      return chicken;
    } else if (score > 6 && score <= 8) {
      return fox;
    } else {
      return owl;
    }
  };

  const getResultText = (score: number) => {
    if (score >= 0 && score <= 2) {
      return (
        <p className="text-justify px-3">
          You have scored <span className="text-brick-default">{score}</span>{" "}
          out of <span className="text-brick-default">10</span> and become the{" "}
          <span className="text-brick-default">Baby Crow</span>.
          Caw-gratulations, if you will! You're just starting your journey into
          the vast realm of knowledge, much like a baby crow taking its first
          awkward hops across a branch. Right now, you're a bit of a
          featherbrain, but don't worry! Even the most majestic birds were once
          clumsy chicks.
        </p>
      );
    } else if (score > 2 && score <= 4) {
      return (
        <p className="text-justify px-3">
          You are the <span className="text-brick-default">Curious Cat</span>{" "}
          with <span className="text-brick-default">{score}</span> correct
          answers out of <span className="text-brick-default">10</span>! Well,
          maybe you're not purrfect yet, but you're definitely more than just a
          ball of yarn rolling around. Your curiosity is as boundless as a cat
          exploring a room full of mysterious shadows and fascinating objects.
          And just like a playful cat chasing after a laser pointer, you're
          catching on to this quiz game with agility and charm.
        </p>
      );
    } else if (score > 4 && score <= 6) {
      return (
        <p className="text-justify px-3">
          You've become the{" "}
          <span className="text-brick-default">Average Chicken</span>.{" "}
          <span className="text-brick-default">{score}</span> out of{" "}
          <span className="text-brick-default">10</span>! You're right in the
          middle, strutting around with the confidence of a chicken who knows
          how to navigate the barnyard without causing too much commotion. You
          might not be laying the golden eggs of knowledge just yet, but your
          feathers are looking quite average and that's egg-sactly where you
          need to be.
        </p>
      );
    } else if (score > 6 && score <= 8) {
      return (
        <p className="text-justify px-3">
          You are the <span className="text-brick-default">Canny Fox</span>, as
          you have answered <span className="text-brick-default">{score}</span>{" "}
          questions out of <span className="text-brick-default">10</span>. With
          your quick wit and smart maneuvers, you're not just any fox; you're
          the quiz master's elusive enigma. Much like a fox weaving through the
          forest, you navigate the questions with a dash of strategy and a
          twinkle in your eye. Embrace your canny nature, and continue to
          outsmart the challenges that come your way.
        </p>
      );
    } else {
      return (
        <p className="text-justify px-3">
          Congratulations for earning the esteemed title of the{" "}
          <span className="text-brick-default">Wise Owl</span>, with{" "}
          <span className="text-brick-default">{score}</span> correct answers
          out of <span className="text-brick-default">10</span>. Your intellect
          shines like moonlight through the forest! Your knowledge is a vast,
          ancient library, and you've emerged as the luminary guardian of the
          quiz realm. Continue to spread your wings of wisdom, and illuminate
          the minds of those who seek knowledge, while you are soaring ever
          higher into the realm of enlightenment.
        </p>
      );
    }
  };

  const animalImage = getAnimalImage(score);
  const resultText = getResultText(score);

  return (
    <div className="gap-8 items-center flex flex-col fade-in-long">
      <div className="flex-col flex items-center">
        <Image
          src={animalImage}
          alt="animal"
          className="w-36 h-36 float-left items-center"
        />
        <p className="text-center">{resultText}</p>
      </div>
      <div
        className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center shadow-lg shadow-zinc-400"
        onClick={closeContestResult}
      >
        Home
      </div>
    </div>
  );
}
