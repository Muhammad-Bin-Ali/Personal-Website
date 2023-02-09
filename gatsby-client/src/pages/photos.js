import React from "react";
import Layout from "../components/Layout";
import { ImageList, ImageListItem } from "@material-ui/core";

const Photos = () => {
  const photos = [
    { id: 8, src: "../../DSC_8423.jpg" },
    { id: 9, src: "../../DSC_8529.jpg" },
    { id: 1, src: "../../DSC_6140.jpg" },
    { id: 2, src: "../../DSC_6298.jpg" },
    { id: 3, src: "../../DSC_7688.jpg" },
    { id: 4, src: "../../DSC_7786.jpg" },
    { id: 5, src: "../../DSC_7761.jpg" },
    { id: 6, src: "../../DSC_7787.jpg" },
    { id: 7, src: "../../DSC_9149.jpg" },
    { id: 8, src: "../../DSC_8423.jpg" },
    { id: 9, src: "../../DSC_8529.jpg" },
    { id: 8, src: "../../DSC_8423.jpg" },
    { id: 9, src: "../../DSC_8529.jpg" },
    { id: 1, src: "../../DSC_6140.jpg" },
    { id: 2, src: "../../DSC_6298.jpg" },
    { id: 3, src: "../../DSC_7688.jpg" },
    { id: 4, src: "../../DSC_7786.jpg" },
    { id: 5, src: "../../DSC_7761.jpg" },
    { id: 1, src: "../../DSC_6140.jpg" },
    { id: 2, src: "../../DSC_6298.jpg" },
    { id: 3, src: "../../DSC_7688.jpg" },
    { id: 4, src: "../../DSC_7786.jpg" },
    { id: 5, src: "../../DSC_7761.jpg" },
  ];

  return (
    <Layout>
      <ImageList
        variant="masonry"
        sx={{
          columnCount: {
            xs: "1 !important",
            sm: "2 !important",
            md: "3 !important",
            lg: "4 !important",
            xl: "4 !important",
          },
        }}
        className="max-w-[1200px] min-h-screen h-auto mx-auto my-32"
        gap={15}
      >
        {photos.map((item) => (
          <ImageListItem cols={2} key={item.id}>
            <div className="overflow-hidden hover:scale-[97%] duration-700 rounded-md ease-in-out animate-fadeIn">
              <img
                className="rounded-md hover:scale-[115%] duration-700 ease-in-out"
                src={item.src}
              />
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </Layout>
  );
};

export default Photos;
