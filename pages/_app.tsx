import { useState } from "react";
import "tailwindcss/tailwind.css";
import "@/app/globals.css";
import Head from "next/head";
import Header from "@/app/components/Header";
import { CategoryProvider } from "@/app/context/CategoryContext";
import { ScoreProvider } from "@/app/context/ScoreContext";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CreditsModal from "@/app/components/CreditsModal";

export default function MyApp({ Component, pageProps }: any) {
  const [open, setOpen] = useState(false);

  const handleOpenModal: any = () => {
    setOpen(true);
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
        <title>Wise Owl</title>
      </Head>
      <div className="flex flex-row gap-2">
        <p className="text-sm m-2">Version: 1.0</p>
        <HelpOutlineOutlinedIcon
          className="w-5 mt-1.5 cursor-pointer hover:text-gray-default"
          onClick={handleOpenModal}
        />
        {open ? <CreditsModal open={open} setOpen={setOpen} /> : null}
      </div>
      <main className={"flex flex-col min-h-screen w-11/12 md:w-3/4 mx-auto"}>
        <Header />
        <div
          className="ml-auto mr-auto border-dashed
      border-spacing-20 border-4 border-neutral-600 rounded-xl py-6 px-6 w-10/12 md:w-3/4 mb-6 container-dash"
        >
          <CategoryProvider>
            <ScoreProvider>
              <Component {...pageProps} />
            </ScoreProvider>
          </CategoryProvider>
        </div>
      </main>
    </>
  );
}
