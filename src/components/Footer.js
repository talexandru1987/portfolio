import { Link } from "@mui/material";

import cvFile from "../files/Alexandru-Tanase-CV.pdf";

import { FaRegEnvelopeOpen, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <a href={"mailto:t_alexandru87@yahoo.com"}>
          <FaRegEnvelopeOpen size={30} style={{ color: "#ffff", marginRight: "2rem" }} />
        </a>

        <a href="https://linkedin.com/in/alexandru--tanase" target="_blank">
          <FaLinkedin size={30} style={{ color: "#ffff", marginRight: "2rem" }} />
        </a>
        <a href="https://github.com/talexandru1987" target="_blank">
          <FaGithub size={30} style={{ color: "#ffff", marginRight: "2rem" }} />
        </a>

        <a href={cvFile} download="Alexandru-Tanase-CV.pdf">
          <FaFileDownload size={30} style={{ color: "#ffff", marginRight: "2rem" }} />
        </a>
      </div>
    </div>
  );
};
