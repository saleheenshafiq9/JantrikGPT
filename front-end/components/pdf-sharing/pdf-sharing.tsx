'use client'
import React, { useRef, useState } from 'react';
import './pdf-sharing.css';

const PdfShare = () => {
  const fileInputRef = useRef(null);
  const textInputRef = useRef(null);
  const [textValue, setTextValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    setSelectedFile(files[0]); // Store the selected file
    console.log(files);
  };

  const handleGenerateResults = () => {
    if (selectedFile) {
      // Use the selected file here for generating results
      console.log(selectedFile);
      console.log(textValue)
    } else {
      console.log('No file selected');
    }
  };

  const handleTextChange = () => {
    setTextValue(textInputRef.current.value);
  };

  return (
    <div>
      <div className='row'>
        <input
          type="text"
          placeholder="Type here"
          className="input-custom input input-accent w-full max-w-xl"
          ref={textInputRef}
          onChange={handleTextChange}
        />
        <button className="btn btn-custom" onClick={handleButtonClick}>
          <img src="./button-image.png" className="h-6 w-6" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
      </div>
      <button className="btn btn-cust1" onClick={handleGenerateResults}>
        Generate Results
      </button>
    </div>
  );
};

export default PdfShare;
