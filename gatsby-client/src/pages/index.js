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
          "max-w-[1750px] min-h-screen h-auto mx-auto " +
          (canScroll ? "" : "hidden")
        }
      >
        <WhereWorked />
        <NotableProjects />
        <OtherProjects />
      </div>
    </Layout>
  );
}
