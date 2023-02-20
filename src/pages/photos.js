import React from "react";
import Layout from "../components/Layout";
import { ImageList, ImageListItem } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Photos = () => {
  const photos = useStaticQuery(graphql`
    query allFile {
      allFile(
        sort: { base: DESC }
        filter: {
          extension: { regex: "/(jpg)|(jpeq)|(png)/" }
          sourceInstanceName: { eq: "photographs" }
        }
      ) {
        edges {
          node {
            id
            base

            childImageSharp {
              gatsbyImageData(width: 800, formats: [AUTO])
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <ImageList
        className="px-2 md:px-0"
        variant="masonry"
        sx={{
          columnCount: {
            xs: "1 !important",
            sm: "2 !important",
            md: "3 !important",
            lg: "4 !important",
            xl: "4 !important",
          },
          p: 2,
        }}
        className="max-w-[1200px] px-10 lg:px-0 min-h-screen h-auto mx-auto my-32"
        gap={15}
      >
        {photos.allFile.edges.map((node) => (
          <ImageListItem key={node.id}>
            <Image data={node} />
          </ImageListItem>
        ))}
      </ImageList>
    </Layout>
  );
};

const Image = ({ data }) => {
  const image = getImage(data.node.childImageSharp);

  return (
    <div className="overflow-hidden hover:scale-[97%] duration-700 rounded-md ease-in-out animate-fadeIn">
      <GatsbyImage
        className="rounded-md hover:scale-[115%] duration-700 ease-in-out"
        image={image}
        alt={data.id}
      />
    </div>
  );
};

export default Photos;
