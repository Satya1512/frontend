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
  @media (max-width: 768px) {
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
  cursor: pointer;
  padding-top:90px;
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  /* For smaller screens */
  @media (max-width: 768px) {
    width: 100%; /* Make cards full width on mobile */
    height: auto; /* Adjust height for mobile */
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #007BFF;
  padding-bottom: 10px;

  /* For smaller screens */
  @media (max-width: 768px) {
    font-size: 1.25rem;
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
`;

const ModalContent = styled.div`
  background: white;
  color: black;
  border-radius: 8px;
  padding: 2rem;
  width: 500px;
  max-width: 100%; /* Ensure it fits mobile screens */

  @media (max-width: 768px) {
    padding: 1rem;
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
`;


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <ProjectsSection>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => handleProjectClick(project)}
          >
            <ProjectTitle>{project.name}</ProjectTitle>
          </ProjectCard>
        ))}
      </ProjectsSection>

      {selectedProject && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>
            <p>
              <strong>Technologies Used:</strong> {selectedProject.technologies}
            </p>
            <div>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  View Project
                </a>
              )}
              {selectedProject.videoLink && (
                <a
                  href={selectedProject.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "1rem" }}
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
