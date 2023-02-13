import * as React from "react";
import { useState } from "react";
import "../styles/global.css";
import Layout from "../components/Layout";
import WhereWorked from "../components/WhereWorked";
import NotableProjects from "../components/NotableProjects";
import OtherProjects from "../components/OtherProjects";
import MainPage from "../components/MainPage";

export default function Home() {
  const [canScroll, setCanScroll] = useState(false);

  return (
    <Layout>
      <MainPage setCanScroll={setCanScroll} />
      <div
        className={
          "max-w-screen md:max-w-[550px] lg:max-w-[800px] xl:max-w-[1750px] min-h-screen h-auto mx-auto mt-24" +
          (canScroll ? "" : "hidden")
        }
      >
        <div className="" id="experience">
          {/* <WhereWorked /> */}
          {/* <NotableProjects /> */}
        </div>

        {/* <OtherProjects /> */}
      </div>
    </Layout>
  );
}
