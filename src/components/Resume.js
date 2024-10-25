import React from 'react';
import './index.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Download My Resume</h1>
      <p>
        Click the button below to download my resume in PDF format.
      </p>
      <a href="/Resume.pdf" download className="resume-download-btn">
        Download Resume
      </a>

    </div>
  );
};

export default Resume;
