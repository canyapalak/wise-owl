import Categories from "@/app/components/Categories";
import Info from "@/app/components/Info";
import WelcomeButtons from "@/app/components/WelcomeButtons";
import { useState } from "react";

export default function Home() {
  const [isInfo, setIsInfo] = useState(false);
  const [isCategories, setIsCategories] = useState(false);

  const openInfo = (): void => {
    setIsInfo(true);
  };

  const closeInfo = (): void => {
    setIsInfo(false);
  };

  const openCategories = (): void => {
    setIsCategories(true);
  };

  const closeCategories = (): void => {
    setIsCategories(false);
  };

  return (
    <div>
      {isInfo && !isCategories && <Info closeInfo={closeInfo} />}
      {!isInfo && isCategories && (
        <Categories closeCategories={closeCategories} />
      )}
      {!isInfo && !isCategories && (
        <WelcomeButtons openCategories={openCategories} openInfo={openInfo} />
      )}
    </div>
  );
}
