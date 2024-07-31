"use client";

import React from 'react';
import { downloadPdf } from '../Utils/DownloadPdf';
import ShinyButton from '@/components/magicui/shiny-button';

const ButtonCV = () => {
  const handleDownload = () => {
    const pdfUrl = '/CV.pdf'; // Reemplaza con la URL real del PDF
    const filename = 'CV_Jose_Miguel_Martin.pdf'; // Reemplaza con el nombre que quieres darle al archivo descargado
    downloadPdf(pdfUrl, filename);
  };

  return (
    <ShinyButton text="Descargar CV" onClick={handleDownload} />
  );
};

export default ButtonCV;
