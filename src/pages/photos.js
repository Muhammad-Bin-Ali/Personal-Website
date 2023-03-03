import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function Head() {
  return <title>Photos</title>;
}

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
              gatsbyImageData(width: 1200, formats: [AUTO])
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="px-5 md:px-10 z-0 max-w-[1300px] lg:px-0 min-h-screen h-auto mx-auto my-32">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 760: 2, 1400: 3, 1500: 4 }}
        >
          <Masonry gutter="12px">
            {photos.allFile.edges.map((node, index) => (
              <Image data={node} key={index} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Layout>
  );
};

const Image = ({ data, index }) => {
  const image = getImage(data.node.childImageSharp);

  return (
    <div className="overflow-hidden hover:scale-[97%] duration-700 rounded-md ease-in-out animate-fadeIn z-0">
      <GatsbyImage
        className="rounded-md hover:scale-[115%] duration-700 ease-in-out"
        image={image}
        alt={data.id}
        key={index}
      />
    </div>
  );
};

export default Photos;
