import React from 'react'
import ReactPDF, { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import DocuPDF from '../components/pdf/docuPDF';
import { Button } from '@nextui-org/react';


const PdfView = () => {
  return (
    <>
          <div style={{ width: "100vw", maxWidth: "600px", margin: "auto" }}>
              <PDFViewer style={{width: "100%", height:"80vh"}}>
                  <DocuPDF style={{width: "100%"}}/>
              </PDFViewer>
              <PDFDownloadLink document={<DocuPDF />}>
                  <Button
                      className="my-5"
                      size="lg"
                      color="primary"
                  >
                    Descargar
                </Button>
              </PDFDownloadLink>
    </div>
      
      
      </>
  )
}

export default PdfView