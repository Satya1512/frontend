import React, { useState } from 'react';
import styled from 'styled-components';
import projectsData from '../data/projectsData';

// Section styling
const ProjectsSection = styled.section`
  padding: 30px;
  background-color: #f4f4f4;
  color: #333;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  justify-items: center;

  /* For smaller screens */
  @media (max-width: 430px) {
    grid-template-columns: 1fr; /* Stack the cards on smaller screens */
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// Card styling
const ProjectCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background: linear-gradient(140deg, black, gray);
  color: white;
  text-align: left;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  /* For smaller screens */
  @media (max-width: 430px) {
    width: 100%; /* Make cards full width on mobile */
    height: auto; 
  }
`;

// Button styling inside the card
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

const ProjectTitle = styled.h3`
  padding-top: 60px;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #007BFF;

  /* For smaller screens */
  @media (max-width: 430px) {
    font-size: 1.75rem;
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

  @media (max-width: 430px) {
    padding: 1rem;
  }
`;

const StyledH3 = styled.h3`
  font-size: 24px;
  padding: 5px 0px;
  font-weight: bold;

  @media (max-width: 430px) {
    font-size: 20px;
    padding: 10px 0px;
  }
`;

const Styledp = styled.p`
  font-size: 17px;
  padding: 5px 0px;

  @media (max-width: 430px) {
    font-size: 15px;
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

  &:hover {
    background: #0056b3;
  }
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <ProjectsSection>
        {projectsData.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ViewButton onClick={() => handleViewClick(project)}>View</ViewButton>
          </ProjectCard>
        ))}
      </ProjectsSection>

      {selectedProject && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <StyledH3>{selectedProject.name}</StyledH3>
            <Styledp>{selectedProject.description}</Styledp>
            <Styledp>
              <strong>Technologies Used:</strong> {selectedProject.technologies}
            </Styledp>
            <div>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
              {selectedProject.videoLink && (
                <a
                  href={selectedProject.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '1rem' }}
                >
                  Watch Video
                </a>
              )}
            </div>
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default Projects;
