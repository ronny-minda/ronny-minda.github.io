import * as React from "react"
import styled from "styled-components"

const Svg = styled.svg`
    /* background-color: #1f2433;
    border-radius: 50%;

    padding: 10px;
    height: 50px;
    width: 50px;
    stroke: #bebcbe;
    transition: .3s;
    box-shadow: -3px -3px 5px 2px #4A5578, 3px 3px 5px 6px #131827;
    cursor: pointer;

    &:hover {
      background-color: #20232c;
      box-shadow: -3px -3px 5px 2px #4A5578, 3px 3px 5px 6px #131827, 0px 0px 5px 6px #131827;
      stroke: #FF4343;

    } */
`;

const Correo = (props) => (
  <svg
    className="github"
    viewBox="0 0 20.1 13"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      style={{
        fillRule: "evenodd",
        strokeWidth: 0,
        fillOpacity: 1,
      }}
      d="M.134.954v11.323l6.792-5.67ZM19.096.13H.888l9.14 7.565ZM19.89.954v11.293l-6.78-5.634Z"
    />
    <path
      style={{
        fillRule: "evenodd",
        strokeWidth: 0,
        fillOpacity: 1,
      }}
      d="M19.413 13.336H.578l7.207-5.97L10.012 9.2l2.193-1.85Z"
    />
  </svg>
)

export default Correo;
