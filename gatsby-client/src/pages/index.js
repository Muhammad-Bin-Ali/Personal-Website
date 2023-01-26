import * as React from "react";
import "../styles/global.css";
import Layout from "../components/Layout";
import WhereWorked from "../components/WhereWorked";
import NotableProjects from "../components/NotableProjects";
import OtherProjects from "../components/OtherProjects";

export default function Home() {
  return (
    <Layout>
      <div className="max-w-[1750px] min-h-screen">
        <WhereWorked />
        <NotableProjects />
        <OtherProjects />
      </div>
    </Layout>
  );
}
