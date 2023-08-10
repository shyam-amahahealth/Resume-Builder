import React from "react";
import { CloseButton, ModalContent, ModalOverlay } from "../styles/ModalStyle";
import { useSelector } from "react-redux";
import Button from "../styles/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Modal = ({ isOpen, onClose }) => {
  const personalDetail = useSelector((state) => state.PersonalDetails);

  const generatePDF = () => {
    const divToPrint = document.getElementById("resume");

    html2canvas(divToPrint).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const width = pdf.internal.pageSize.getWidth();
      const height = (imgProps.height * width) / imgProps.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("resume.pdf");
    });
  };

  if (!isOpen) return null;
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <div id="resume">
          <h1>{personalDetail.name}</h1>
        </div>
        <Button onClick={generatePDF}>Download</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
