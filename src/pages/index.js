import * as React from "react"
/* import styled from "styled-components" */
import { Helmet } from "react-helmet"
import { motion } from 'framer-motion';


import Layout from "../components/layout"
// import img from '../images/example.png';
import Principal from "../components/principal";
import Proyectos from "../components/proyectos";
import Server from "../components/servers";
import Loader from "../components/loader";

import img from '../images/logo.png'
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"



// const Div = styled.div`
//   background-color: blue;
//   height: 1000px;
//   width: 100px;
// `


const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Ronny Minda V.</title>
        <meta charset="UTF-8"></meta>
        <meta name="description" content="Soy desrrolador de Software Frontend y Backend full rest, responsive design, diseño moderno, trabajo en equipo con git y por ultimo validaciones del lado del servidor."></meta>
        <meta name="author" content="Ronny Minda V."></meta>
        <meta name="keywords" content="website, development, software, design"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>


        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ronny Minda .V" />
        <meta property="og:description" content="Soy desrrolador de Software Frontend y Backend full rest, responsive design, diseño moderno, trabajo en equipo con git y por ultimo validaciones del lado del servidor." />
        <meta property="og:url" content={ img } />
        <meta property="og:site_name" content="Mi Web" />

        {/* Facebook */}

        <meta property="og:title" content="Mi Web"></meta>
        <meta property="og:site_name" content="Ronny Minda .V"></meta>
        <meta property="og:url" content="https://ronny-minda.github.io/myweb/"></meta>
        <meta property="og:description" content="Soy desrrolador de Software Frontend y Backend full rest, responsive design, diseño moderno, trabajo en equipo con git y por ultimo validaciones del lado del servidor."></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content={ img }></meta>

        {/* twitter */}

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Ronny Minda V."></meta>
        <meta name="twitter:site" content="@MichaelMinda7"></meta>
        <meta name="twitter:description" content="Soy desrrolador de Software Frontend y Backend full rest, responsive design, diseño moderno, trabajo en equipo con git y por ultimo validaciones del lado del servidor."></meta>
        <meta name="twitter:image" content={ img }></meta>
        <meta name="twitter:image:alt" content="texto img"></meta>

        {/* whatsapp */}





        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;1,900&display=swap" rel="stylesheet"></link>

        {/* <link rel="icon" type="ico" href={img}></link> */}
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Loader />

        <Layout>
          <Principal />
          <Proyectos />
          <Server />
          {/* <Div /> */}
        </Layout>

      </motion.div>

      {
        console.log("%cHola! ¿Interesado en ofrecerme un puesto en su empresa? Envíeme un correo electrónico a: %cronny.michael.minda.vera@gmail.com", "font-size: 18px;", "font-size: 18px; color: red; text-decoration: underline;")
      }
    </>
  )
}

export default IndexPage
