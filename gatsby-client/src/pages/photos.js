import React from "react";
import Layout from "../components/Layout";

const Photos = () => {
  const photos = [
    { id: 1, src: "../../DSC_6140.jpg" },
    { id: 2, src: "../../DSC_6298.jpg" },
    { id: 3, src: "../../DSC_7688.jpg" },
    { id: 4, src: "../../DSC_7786.jpg" },
    { id: 5, src: "../../DSC_7761.jpg" },
    { id: 6, src: "../../DSC_7787.jpg" },
    { id: 7, src: "../../DSC_9149.jpg" },
  ];

  return (
    <Layout>
      <div>Photos</div>
    </Layout>
  );
};

export default Photos;
