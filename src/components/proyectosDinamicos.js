
import React from "react";
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image';
import { Helmet } from "react-helmet"

import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

import Layout from "./layout";




export const query = graphql`
query($pro: String!) {
    allDatoCmsProyecto(filter: {nombre: {eq: $pro}}) {
      nodes {
        nombre,
        descripcion,
        tecnologias,
        imgproyecto{
            gatsbyImageData
        }
      }
    }
  }
`


const Div = styled.div`
  display: flex;
  justify-content: flex-end;

  .contenedor {
    margin: 80px 0;
    width: 85%;

    @media (max-width: 600px) {
      & {
        width: 100%;
      }
    }

    a {
        // background-color: red;
        margin: 20px;
        text-decoration: none;
        padding: 5px 15px;
        transition: .2s text-shadow, .2s color, .5s box-shadow;
        
        .claro & {
            box-shadow: 4px 4px 5px 0 #0002, -4px -4px 5px #fff;
            color: #000;
        }
        .oscuro & {
            box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636;
            color: #fff;
        }
        
    }
    a:active {
        
        .claro & {
            box-shadow: 3px 3px 5px 0 #0002 inset, -2px -2px 5px #fff inset;
        }
        .oscuro & {
            box-shadow: 3px 3px 5px 0 #040404 inset, -2px -2px 5px #363636 inset;
        }
    }
    a:hover {
        // background-color: red;
        color: red;
        text-shadow: 0px 0px 15px red;
        
        .claro & {
            color: red;
            text-shadow: 0px 0px 15px red;
        }
        .oscuro & {
            color: #FF9797;
            text-shadow: 0px 0px 15px red;
        }

    }
    
    h1 {
      margin: 20px;
      transition: .2s color;
        
        .claro & {
            color: #000;
        }
        .oscuro & {
            color: #fff;
        }
    }
    p {
      margin: 20px;
      transition: .2s color;
        
        .claro & {
            color: #000;
        }
        .oscuro & {
            color: #fff;
        }
    }

    h3 {
      margin: 10px 20px;
      .claro & {
            color: #000;
        }
        .oscuro & {
            color: #fff;
        }
    }

    li {
      margin: 5px 40px;
      .claro & {
            color: #000;
        }
        .oscuro & {
            color: #fff;
        }
    }

    .img {
      margin: 20px;
    }

  }
  
`;


const ProyectosDinamicos = ({data}) =>{

    const dato = data.allDatoCmsProyecto.nodes[0];


    const { descripcion, imgproyecto, nombre, tecnologias } = dato;

    const tec = tecnologias.split(',');


    return (
        <>

      <Helmet>
        <title>{nombre}</title>
        <meta charset="UTF-8"></meta>
        <meta name="description" content="Soy desrrolador de Software Frontend y Backend full rest, responsive design, diseño moderno, trabajo en equipo con git y por ultimo validaciones del lado del servidor."></meta>
        <meta name="author" content="Ronny Minda V."></meta>
        <meta name="keywords" content="website, development, software, design"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>



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
          <Layout>

              <Div>

                <div className="contenedor">
                  <Link to='/' >ATRAS</Link>
                  <h1>{ nombre }</h1>
                  <p>{ descripcion }</p>

                  <h3>Tecnologias</h3>

                  {
                    tec.map( (i) => {
                      return <li key={uuidv4()}>{ i }</li>
                    })
                  }
                  

                  <GatsbyImage
                      className="img"
                      image={imgproyecto.gatsbyImageData}
                      alt={ nombre }
                  />
                </div>
              </Div>


          </Layout>
        </motion.div>
        </>
    )

}


export default ProyectosDinamicos;