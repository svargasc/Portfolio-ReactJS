import React from "react";
import { Header } from "../Header/Header";
import imgProfile from "/public/images/profile.jpeg";
import reactjs from "/public/images/react.png";
import nodejs from "/public/images/nodejs.png";
import html from "/public/images/html-5.png";
import css from "/public/images/css-3.png";
import java from "/public/images/java.png";
import git from "/public/images/git.png";
import js from "/public/images/js.png";
import gitHub from "/public/images/github.png";
import gmail from "/public/images/correo-electronico.png";
import instagram from "/public/images/instagram.png";
import linkedin from "/public/images/social.png";
import cv from "../../../public/cv/cv.pdf";

export const Home = () => {
  const handleDescargarPDF = () => {
    const urlPDF = cv; // Ajusta la ruta según tu ubicación y nombre del archivo

    // Crea un enlace temporal y haz clic en él para descargar el PDF
    const link = document.getElementById("btn");
    link.href = urlPDF;
    link.download = "cv-svargasc.pdf"; // Nombre que tendrá el archivo descargado
    link.click();
  };
  return (
    <>
      <Header></Header>
      <div className="w-screen flex flex-col justify-center items-center p-8 gap-16">
        <div className="information w-8/12 flex items-center border-solid border-2 border-violet-950 rounded-md">
          <div className="textInformation flex flex-col justify-center text-start text-white px-2 h-64 bg-[#7b139e2b]">
            <h2 className="text-2xl text-purple-400 font-bold">
              Sergio Vargas Castañeda
            </h2>
            <h4 className="text-xl text-purple-400 font-semibold">Software developer</h4>
            <p className="text-sm">
              Estudiante de desarrollo de software en el Sena, apasionado por la
              tecnología y temas afines a la programación o el desarrollo.
              Facilidad de comunicación para el trabajo en equipo, interesado en
              aprender de los demás con mayor conocimiento, desarrollar propias
              habilidades afines. Formado con valores importantes como lo es el
              respeto, responsabilidad y puntualidad. Me considero una persona
              proactiva y que busca soluciones ante las necesidades.
            </p>
            <ul className="flex justify-center p-4">
              <li className="p-2">
                <a href="https://github.com/svargasc" target="_blank">
                  <img className="" src={gitHub} alt="" />
                </a>
              </li>
              <li className="p-2">
                <a href="mailto:svc.vargas03@gmail.com?subject=Hello!!" target="_blank">
                  <img src={gmail} alt="" />
                </a>
              </li>
              <li className="p-2">
                <a href="https://www.instagram.com/svargasc2/?next=%2F" target="_blank">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li className="p-2">
                <a href="https://www.linkedin.com/in/sergio-vargas-53a865259/" target="_blank">
                  <img src={linkedin} alt="" />
                </a>
              </li>
            </ul>
            <button className="bg-[#904da790] w-36 rounded-lg font-semibold text-md py-2">
              <a id="btn" onClick={handleDescargarPDF}>
                Download C.V
              </a>
            </button>
          </div>
          <img className="w-60 h-64 rounded-md" src={imgProfile} alt="Profile" />
        </div>
        <div className="skills flex flex-col justify-center items-center border-solid border-2 border-violet-950 rounded-md bg-[#7b139e2b]">
          <h2 className="p-4 text-3xl font-semibold text-purple-400">Technologies</h2>
          <ul className="flex text-white">
            <li className="m-3">
              <img src={js} alt="" />
              <h3>JavaScript</h3>
            </li>
            <li className="m-3">
              <img src={html} alt="" />
              <h3>HTML5</h3>
            </li>
            <li className="m-3">
              <img src={css} alt="" />
              <h3>CSS3</h3>
            </li>
            <li className="m-3">
              <img src={git} alt="" />
              <h3>Git</h3>
            </li>
            <li className="m-3">
              <img src={nodejs} alt="" />
              <h3>NodeJS</h3>
            </li>
            <li className="m-3">
              <img src={java} alt="" />
              <h3>Java</h3>
            </li>
            <li className="m-3">
              <img src={reactjs} alt="" />
              <h3>ReactJS</h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
