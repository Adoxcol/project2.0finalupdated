import React from 'react';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import { CSVLink } from 'react-csv';

interface DownloadButtonsProps {
  data: any[];
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ data }) => {
  
  const PdfReport = () => (
    <Document>
      <Page>
        {data.map((item, index) => (
          <Text key={index}>{`${item.title}: ${item.numericValue}`}</Text>
        ))}
      </Page>
    </Document>
  );

  
  const csvData = data.map((item) => ({
    ID: item.id,
    Title: item.title,
    Content: item.content,
    NumericValue: item.numericValue,
    Author: item.author.email,
  }));

  return (
    <div>
      {/* Download as PDF */}
      <PDFDownloadLink document={<PdfReport />} fileName="report.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading...' : 'Download as PDF')}
      </PDFDownloadLink>

      {/* Download as CSV */}
      <CSVLink data={csvData} filename="report.csv" style={{ marginLeft: '10px' }}>
        Download as CSV
      </CSVLink>
    </div>
  );
};

export default DownloadButtons;