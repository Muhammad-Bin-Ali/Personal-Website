import * as React from "react";
import { useState } from "react";
import "../styles/global.css";
import Layout from "../components/Layout";
import WhereWorked from "../components/WhereWorked";
import NotableProjects from "../components/NotableProjects";
import OtherProjects from "../components/OtherProjects";
import MainPage from "../components/MainPage";
// import Loader from "../components/Loader";
import { motion } from "framer-motion";

export function Head() {
  return <title>Muhammad Bin Ali</title>;
}

export default function Home() {
  const [canScroll, setCanScroll] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    // {loading ? (
    //   <></>
    // ) : (
    <div className="overflow-x-hidden">
      {/* can't see main page anymore once ur able to scroll */}
      {canScroll ? (
        <Layout>
          <div
            className={
              "mainPageContent max-w-screen min-h-screen h-auto md:mt-24 animate-fadeIn opacity-0 md:mx-32 lg:mx-0" +
              (canScroll ? "" : " hidden")
            }
          >
            <div className="" id="experience">
              <WhereWorked />
              <NotableProjects />
            </div>

            <OtherProjects />
          </div>
        </Layout>
      ) : (
        <MainPage key="mainPage" setCanScroll={setCanScroll} />
      )}
    </div>
    // )}
  );
}
