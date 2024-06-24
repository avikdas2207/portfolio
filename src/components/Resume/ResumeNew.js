import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/newcv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToNextPage = () => {
    console.log(pageNumber);
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
  };

  const goToPreviousPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h4>
            My <span className="purple">Resume</span>
          </h4>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div style={{ margin: "10px" }}>
            <Button
              onClick={goToPreviousPage}
              disabled={pageNumber <= 1}
              style={{ margin: "0 5px" }}
            >
              Previous
            </Button>
            <span>
              Page {pageNumber} of {numPages}
            </span>
            <Button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              style={{ margin: "0 5px" }}
            >
              Next
            </Button>
          </div>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
