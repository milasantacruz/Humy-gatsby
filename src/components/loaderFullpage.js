import React, {useState, useEffect} from 'react';
import "./home.scss"
import {useSpring, animated, config, easings} from 'react-spring'
import {StaticImage} from 'gatsby-plugin-image';
import Loader from "./loader"
//import lottie from "lottie-web"
//import planet from "../../content/planet.json"
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
  const anim1 = useSpring({
    to: {opacity:1}, 
    from:{ opacity: 0},
    config:{duration : 3000,easing: easings.easeInOutQuart,},
    loop:{reverse: true}
  })

  // useEffect(()=>{
  //   lottie.loadAnimation({
  //     container:document.querySelector("#lottieFile"),
  //     animationData: planet,
  //     renderer: "svg", // "canvas", "html"
  //     loop: true, // boolean
  //     autoplay: true, // boolean
  //   })
  // },[])


    return (
        <div className="home">
          <animated.div style={anim1}>
          <StaticImage 
                   src= "../images/humy.svg" 
                   alt="Logo "
                   layout="constrained"
                   className="imghumy"
                />
          </animated.div>
         <div className="loaderContainer">
         <Loader completed={80} bgcolor={"red"}/>
         <div id="lottieFile" />
         </div>
        </div>
    );
}

export default Home;
