import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaChartBar,
  FaBriefcase,
  FaShareAlt,
  FaSuitcase,
  FaEnvelope,
} from "react-icons/fa";
import "./css/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
          alt="Imagem do perfil"
          className="profile-image"
        />
        <h2>Matheus Pires</h2>
      </div>
      <ul className="menu">
        <li>
          <FaHome /> Home
        </li>
        <li>
          <FaInfoCircle /> Sobre
        </li>
        <li>
          <FaChartBar /> Habilidades
        </li>
        <li>
          <FaBriefcase /> Experiência
        </li>
        <li>
          <FaShareAlt /> Social
        </li>
        <li>
          <FaSuitcase /> Portfolio
        </li>
        <li>
          <FaEnvelope /> Contato
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
