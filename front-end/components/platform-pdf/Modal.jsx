import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import Preview from './Preview';
import StatusView from './StatusView'

const Modal = () => {
    const fileInputRef = useRef(null);
    const textInputRef = useRef(null);
    const modalRef = useRef(null);
    const buttonRef= useRef(null);

    const [textValue, setTextValue] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
  
    useEffect(() => {
      // Fetch book data from the API
      fetch('http://localhost:3001/api/v1/pdf')
        .then(response => response.json())
        .then(data => setBookData(data))
        .catch(error => console.log(error));
        console.log(bookData)
    }, []);
    
    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileInputChange = (event) => {
      event.preventDefault(); // Prevent default behavior of file input
      const files = event.target.files;
      setSelectedFile(files[0]); // Store the selected file
      console.log(files);
  
      // Reset the file input value to allow selecting the same file again
      event.target.value = '';
      modalRef.current?.showModal()
    };
  
    const handleGenerateResults = () => {
      if (selectedFile) {
        // Use the selected file here for generating results
        console.log(selectedFile);
        console.log(textValue);
      } else {
        console.log('No file selected');
      }
    };

    useEffect(() => {
        buttonRef.current?.addEventListener('click', () => {
            modalRef.current?.showModal()
        })
    })
  
    const handleTextChange = () => {
      setTextValue(textInputRef.current.value);
    };

  return (
    <div>
      <button ref={buttonRef}  className="btn btn-cust2">
              Create New Story
        </button>
            <dialog ref={modalRef} id="my_modal_4" className="modal">
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
                      <img src="./button-image.png" className="h-6 w-6" />
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleFileInputChange}
                    />
                    <button className="btn btn-cust1 btn-accent mx-4" onClick={handleGenerateResults}>Share</button>
                  </div>
                  <div className="col-span-1">
                    <Preview file={selectedFile} />
                  </div>
                </div>
                <div className="modal-action">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn btn-accent">Close</button>
                </div>
              </form>
            </dialog>
    </div>
  )
}

export default Modal
