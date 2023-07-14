import React, { useState, useRef, useEffect } from 'react';
import Preview from './Preview';

const StatusView = () => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [bookData, setBookData] = useState(null);
  const time = Date.now();

  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Fetch book data from the API
    fetch('http://localhost:3001/api/v1/pdf')
      .then(response => response.json())
      .then(data => setBookData(data))
      .catch(error => console.log(error));
      console.log(bookData)
  }, []);

  useEffect(() => {
    buttonRef.current?.addEventListener('click', () => {
      modalRef.current?.showModal();
    });
  });

  // Function to handle the "See More" click
  const handleSeeMoreClick = () => {
    setShowFullContent(true);
  };

  if (!bookData) {
    return <div>Loading...</div>;
  }

  // Format the time in hh:mm mm dd, yy format
  const formattedTime = new Date(time).toLocaleString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    month: 'short',
    day: 'numeric',
    year: '2-digit',
  });

  // Function to open PDF in a new tab
  const openPDF = () => {
    window.open(bookData[0].pdf, '_blank');
  };

  const downloadPDF = (pdf) => {
    console.log(bookData)
    const link = document.createElement('a');
    link.href = bookData[0].pdf;
    link.download = 'book.pdf';
    link.click();
  };

  return (
    <div className="hero hero-custom">
      {bookData.map((book, index) => (
        <div className="hero-content hero-post flex-col lg:flex-row-reverse" key={index}>
          <div className="w-full lg:w-2/3 flex justify-center">
            <img src={book.imageURLs[0]} alt="Image 1" width="200px" />
            <img src={book.imageURLs[1]} alt="Image 2" width="200px" />
          </div>
          <div className="w-full lg:w-1/3">
            <div>
              <h1 className="text-2xl text-accent font-bold">{book.fullName}</h1>
              <p className="py-6">
                {showFullContent ? book.bookContent : `${book.bookContent.slice(0, 40)}...`}
              </p>
              {!showFullContent && (
                <div className="join join-vertical lg:join-horizontal">
                  <button className="btn join-item btn-sm btn-accent mx-2" ref={buttonRef}>
                    See More..
                  </button>
                  <button className="btn join-item btn-sm btn-accent mx-2" onClick={openPDF}>
                    View PDF
                  </button>
                  <button className="btn join-item btn-sm btn-accent mx-3" onClick={() => downloadPDF(book.pdf)}>
                    Download PDF
                  </button>
                  <dialog ref={modalRef} id={`my_modal_${index}`} className="modal">
                    <form method="dialog" className="modal-box modal-custom w-11/12 max-w-5xl">
                      <p className="text-2xl leading-12 my-10">
                        <b>saleheen9</b>
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                          <br />
                          <p>{book.bookContent}</p>
                        </div>
                        <div className="col-span-1">
                          <div
                            className="w-full lg:w-2/3 flex justify-center"
                            style={{
                              marginLeft: '80px',
                            }}
                          >
                            <img src={book.imageURLs[0]} alt="Image 1" width="200px" />
                            <img src={book.imageURLs[1]} alt="Image 2" width="200px" />
                          </div>
                          <p className="m-8">Posted on: {formattedTime}</p>

                          <button className="btn btn-cust1 btn-accent m-8">Share</button>
                        </div>
                      </div>
                      <div className="modal-action">
                        <button className="btn btn-accent">Close</button>
                      </div>
                    </form>
                  </dialog>
                </div>
              )}
              <p className="mt-2">Posted on: {formattedTime}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusView;
