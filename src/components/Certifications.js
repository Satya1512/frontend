import React, { useState } from 'react';
import styled from 'styled-components';
import certificationsData from '../data/certificationsData'; // Ensure this points to your correct data file

// Section styling
const CertificationsSection = styled.section`
  padding: 30px;
  background-color: #f4f4f4;
  color: #333;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  justify-items: center;

  @media (max-width: 430px) {
    grid-template-columns: 1fr; // Stack the cards on smaller screens
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// Card styling
const CertificationCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background: linear-gradient(140deg, black, gray);
  color: white;
  text-align: left;
  width: 270px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center; // Center content vertically
  position: relative;
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 430px) {
    width: 100%; // Make cards full width on mobile
    height: auto; 
  }
`;

const CertificationTitle = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
  color: #007BFF;

  @media (max-width: 430px) {
    font-size: 1.75rem; // Adjust size for smaller screens
  }
`;

// Modal styling
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  font-size: 18px;

  @media (max-width: 430px) {
    padding: 1rem;
    font-size: 16px;
  }
`;

const ModalContent = styled.div`
  background: white;
  color: black;
  border-radius: 8px;
  padding: 2rem;
  width: 500px;
  max-width: 100%;
  overflow: auto; // Allow scrolling if content is too large

  @media (max-width: 430px) {
    padding: 1rem;
  }
`;

const StyledH3 = styled.h3`
  font-size: 24px; // Default size
  padding: 5px 0px;
  font-weight: bold;

  @media (max-width: 430px) {
    font-size: 20px; // Adjust size for smaller screens
  }
`;

const CloseButton = styled.button`
  background: #007BFF;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  margin-right: 1rem; // Space between buttons
`;
const ViewButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #007BFF;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleViewClick = (certPdfUrl) => {
    setSelectedImage(certPdfUrl); // Corrected to use certPdfUrl
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop(); // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <CertificationsSection>
        {certificationsData.map((cert) => (
          <CertificationCard key={cert.id}>
            <CertificationTitle>{cert.title}</CertificationTitle>
            <ViewButton onClick={() => handleViewClick(cert.pdfUrl)}>View</ViewButton>
          </CertificationCard>
        ))}
      </CertificationsSection>

      {selectedImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <StyledH3>Image Preview</StyledH3>
            <img src={selectedImage} alt="Preview" style={{ width: '100%', height: 'auto' }} />
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default Certifications;
