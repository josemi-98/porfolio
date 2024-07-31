import axios from 'axios';
import { saveAs } from 'file-saver';

export const downloadPdf = async (url, filename) => {
  try {
    const response = await axios.get(url, {
      responseType: 'blob', // Indica que el tipo de respuesta es un blob
    });
    const blob = new Blob([response.data], { type: 'application/pdf' });
    saveAs(blob, filename);
  } catch (error) {
    console.error('Error al descargar el PDF:', error);
  }
};
