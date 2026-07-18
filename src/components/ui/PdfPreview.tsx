import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PdfPreviewProps {
  pdf: string;
}

const PdfPreview = ({ pdf }: PdfPreviewProps) => {
  return (
    <Document
      file={pdf}
      loading={<p>Carregando PDF...</p>}
      onLoadSuccess={(pdf) => {
        console.log("PDF carregado!", pdf);
      }}
      onLoadError={(error) => {
        console.error("Erro ao carregar PDF:", error);
      }}
    >
      <Page
        pageNumber={1}
        width={350}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />
    </Document>
  );
};

export default PdfPreview;