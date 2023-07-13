'use client'
import React, { useState, useRef } from 'react';
import Preview from './Preview';
import StatusView from './StatusView';
import './PlatformPdf.css';

const PlatformPdf = () => {
  const fileInputRef = useRef(null);
  const textInputRef = useRef(null);
  const [textValue, setTextValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    event.preventDefault();
    const files = event.target.files;
    setSelectedFile(files[0]);
    console.log(files);
    event.target.value = '';
    window.my_modal_4.showModal();
  };

  const handleGenerateResults = () => {
    if (selectedFile) {
      console.log(selectedFile);
      console.log(textValue);
    } else {
      console.log('No file selected');
    }
  };

  const handleTextChange = () => {
    setTextValue(textInputRef.current.value);
  };

  return (
    <div>
      <div className="hero hero-custom w-96" style={{ backgroundImage: 'url(./kids.png)' }}>
        <div className="hero-overlay bg-opacity-60">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="hero-content text-center text-neutral-content hero-cust">
          <div className="max-w-md">
            <button className="btn btn-cust2" onClick={() => window.my_modal_4.showModal()}>
              Create New Story
            </button>
            <dialog id="my_modal_4" className="modal">
              <form method="dialog" className="modal-box modal-custom w-11/12 max-w-5xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <p className="text-3xl leading-12 my-10">
                      <b>Share your Story</b>
                    </p>
                    <br />
                    <br />
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input-custom input input-accent w-64 h-24 max-w-xl"
                      ref={textInputRef}
                      onChange={handleTextChange}
                    />
                    <button className="btn btn-custom" onClick={handleButtonClick}>
                      <img src="./button-image.png" className="h-6 w-6" alt="Button" />
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleFileInputChange}
                    />
                    <button className="btn btn-cust1 btn-accent mx-4" onClick={handleGenerateResults}>
                      Share
                    </button>
                  </div>
                  <div className="col-span-1">
                    <Preview file={selectedFile} />
                  </div>
                </div>
                <div className="modal-action">
                  <button className="btn btn-accent">Close</button>
                </div>
              </form>
            </dialog>
          </div>
        </div>
      </div>
      <br />
      <StatusView
        username="saleheenshafiq9"
        caption="GGMU"
        file={selectedFile}
        time={Date.now()}
      />
    </div>
  );
};

export default PlatformPdf;
