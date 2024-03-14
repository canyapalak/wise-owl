import Image from "next/image";
import owl from "@/public/assets/01_owl.png";
import crow from "@/public/assets/02_crow.png";
import chicken from "@/public/assets/03_chicken.png";
import cat from "@/public/assets/04_cat.png";
import fox from "@/public/assets/05_fox.png";

export default function Spinner() {
  const animals = [owl, crow, chicken, cat, fox];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

  return (
    <div className="mb-10 mt-10 spinning">
      <Image src={randomAnimal} alt="Loading" className="w-28 h-28" />
    </div>
  );
}
