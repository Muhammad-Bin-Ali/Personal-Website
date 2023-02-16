import * as React from "react";
import { useState } from "react";
import "../styles/global.css";
import Layout from "../components/Layout";
import WhereWorked from "../components/WhereWorked";
import NotableProjects from "../components/NotableProjects";
import OtherProjects from "../components/OtherProjects";
import MainPage from "../components/MainPage";
import Loader from "../components/Loader";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [canScroll, setCanScroll] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Layout>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <div className="overflow-x-hidden">
            {/* can't see main page anymore once ur able to scroll */}
            {canScroll ? (
              <></>
            ) : (
              <MainPage key="mainPage" setCanScroll={setCanScroll} />
            )}
            <motion.div
              variants={container}
              initial="hidden"
              animate={canScroll ? "show" : "hidden"}
              className={
                "max-w-screen md:max-w-[550px] lg:max-w-[800px] xl:max-w-[1750px] min-h-screen h-auto mx-auto md:mt-24 " +
                (canScroll ? "" : "hidden")
              }
            >
              <div className="" id="experience">
                <WhereWorked />
                <NotableProjects />
              </div>

              <OtherProjects />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

const container = {
  show: {
    transition: {
      duration: 1,
    },
  },
};
