import Image from "next/image";
import logo from "@/public/assets/wise_owl_logo.png";

export default function Header() {
  console.log("Enjoy and good luck!");

  return (
    <div className="ml-auto mr-auto mt-2 mb-10">
      <Image src={logo} alt="Logo" className="w-80 h-40" />
      <p className="text-center text-neutral-700 ">Are you better than AI?</p>
    </div>
  );
}
