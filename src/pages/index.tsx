import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../ui/Banner";
import { Blog } from "../ui/Blog";
import { Contacts } from "../ui/Contacts";
import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";
import { Points } from "../ui/Points";
import { Services } from "../ui/Services";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SunnyByte Front-End Developer Test</title>
        <meta name="description" content="SunnyByte challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Header />
        <main>
          <Banner />
          <div className="py-10 max-w-7xl mx-auto">
            <div className="mb-20">
              <Services />
            </div>
            <div className="flex flex-col gap-20 lg:flex-row items-center justify-between px-2 md:px-8">
              <Points />
              <Points />
              <Points />
            </div>

            <div className="my-28">
              <Blog />
            </div>
          </div>

          <div className="">
            <Contacts />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
