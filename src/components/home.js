import React from 'react';
import "./home.scss"
import {StaticImage} from 'gatsby-plugin-image';
//import { useStaticQuery, graphql } from "gatsby"

const Home = () => {
  /*  const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativePath: {eq: "humy.svg"}}) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  `)

  console.log(data.allFile.edges[0].node)*/
    return (
        <div className="home">
          <StaticImage 
                   src= "../images/humy.svg" 
                   alt="Logo "
                   layout="constrained"
                   className="imghumy"
                />
        </div>
    );
}

export default Home;
