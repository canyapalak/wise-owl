import "tailwindcss/tailwind.css";
import "@/app/globals.css";
import Head from "next/head";
import Header from "@/app/components/Header";
import localFont from "next/font/local";
import { CategoryProvider } from "@/app/context/CategoryContext";

const righteous = localFont({
  src: "../public/fonts/Righteous-Regular.otf",
});

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
        <title>Wise Owl</title>
      </Head>
      <p className={`text-sm m-2 ${righteous.className}`}>Version: 1.0</p>
      <main
        className={`flex flex-col min-h-screen w-10/12 md:w-3/4 mx-auto ${righteous.className}`}
      >
        <Header />
        <div
          className="ml-auto mr-auto border-dashed 
      border-spacing-20 border-4 border-neutral-600 rounded-xl py-8 px-6 w-10/12 md:w-3/4 bg-white"
        >
          <CategoryProvider>
            <Component {...pageProps} />
          </CategoryProvider>
        </div>
      </main>
    </>
  );
}
