import * as React from "react"
import { motion } from 'framer-motion';


import Layout from "../components/layout"
import Seo from "../components/seo";
import Principal from "../components/principal";
import Proyectos from "../components/proyectos";
import Server from "../components/servers";


const IndexPage = () => {
  return (
    <>

      <Seo titulo='Ronny Minda V.' />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <Loader /> */}

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
