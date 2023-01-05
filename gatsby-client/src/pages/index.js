import * as React from "react";
import "../styles/global.css";
import Layout from "../components/Layout";
import WhereWorked from "../components/WhereWorked";

export default function Home() {
  return (
    <Layout>
      <div className="px-96">
        <WhereWorked />
      </div>
    </Layout>
  );
}
