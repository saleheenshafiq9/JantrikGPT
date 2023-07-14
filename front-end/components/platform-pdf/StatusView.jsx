import React, { useState, useRef, useEffect } from 'react';
import Preview from './Preview';

const StatusView = () => {
  const [showFullContent, setShowFullContent] = useState(false);
  const time = Date.now()

  const modalRef = useRef(null);
  const buttonRef= useRef(null);

  useEffect(() => {
    buttonRef.current?.addEventListener('click', () => {
        modalRef.current?.showModal()
    })
})

  const bookData = {
    bookContent:
      'Title: "The Haunted Mansion"\n\nSection 1: Introduction\nIn this section, the book introduces the readers to the main characters and sets the stage for the ghost story. The readers get to know the protagonist, a young boy named Jack, who moves into a mysterious mansion known for its haunted past. The author builds suspense and curiosity, piquing the interest of young readers.\n\nSection 2: Jack\'s Discovery\nIn this section, the readers follow Jack as he explores the eerie mansion. He discovers hidden rooms, secret passageways, and strange noises that add to the spooky atmosphere. Jack\'s curiosity and bravery drive the plot forward, as he uncovers more and more about the mansion\'s haunted history.\n\nSection 3: Encounter with the Ghost\nIn this section, Jack has his first encounter with a ghost. The readers get to experience the spine-chilling moment when Jack comes face to face with a translucent figure dressed in old-fashioned clothes. The ghost\'s appearance, combined with its unsettling behavior, creates a sense of fear and mystery.\n\nSection 4: Unraveling the Mystery\nIn this section, Jack delves deeper into the history of the mansion and tries to unravel the mystery behind the ghost\'s presence. He visits the local library, speaks with townspeople, and uncovers clues that lead him closer to the truth. The readers are engaged as they join Jack on his quest for answers.\n\nSection 5: Confronting the Ghost\nIn this section, Jack must summon all his courage to confront the ghost and put an end to the haunting. The readers hold their breath as Jack devises a plan and faces the ghost head-on. The climax of the story occurs in this section, creating a sense of excitement and anticipation.\n\nSection 6: Resolution\nIn this section, the book provides a satisfying resolution to the ghost story. Jack\'s bravery and determination pay off as he discovers the reason behind the ghost\'s presence and helps free it from its restless state. The readers learn valuable lessons about empathy, friendship, and the power of facing one\'s fears.\n\nSection 7: Conclusion\nIn this section, the book concludes with a reflection on the events that took place in the haunted mansion. Jack\'s journey and the ghost story come to a close, leaving the readers with a sense of closure and satisfaction. The conclusion may also include a final message or moral, reinforcing the themes explored throughout the book.',
    imageURLs: [
      'https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/a34d0ac2-d5d0-4bdd-bd7f-257d86959011-0.png',
      'https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/aa3c5b88-a3b7-43a4-b1e1-225d99165cf6-0.png',
      'https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/9ce9fc0b-308e-4174-b300-72ead53b0517-0.png',
    ],
    pdf: 'http://res.cloudinary.com/dklm81t6j/image/upload/v1689291168/azjx8bvn1i523lixugyu.pdf',
  };

  // Function to handle the "See More" click
  const handleSeeMoreClick = () => {
    setShowFullContent(true);
  };

  // Truncate the content to display only 50 words
  const truncatedContent = bookData.bookContent.split(' ').slice(0, 40).join(' ');

  // Format the time in hh:mm mm dd, yy format
  const formattedTime = new Date(time).toLocaleString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    month: 'short',
    day: 'numeric',
    year: '2-digit',
  });



  return (
    <div className="hero hero-custom">
      <div className="hero-content hero-post flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-2/3 flex justify-center">
          <img src={bookData.imageURLs[0]} alt="Image 1" width="200px" />
          <img src={bookData.imageURLs[1]} alt="Image 2" width="200px" />
        </div>
        <div className="w-full lg:w-1/3">
          <div>
            <h1 className="text-2xl text-accent font-bold">saleheen9</h1>
            <p className="py-6">{showFullContent ? bookData.bookContent : `${truncatedContent}...`}</p>
            {!showFullContent && (
                <div className="join join-vertical lg:join-horizontal">
                <button className="btn join-item btn-sm btn-accent mx-2" ref={buttonRef}>See More..</button>
                <button className="btn join-item btn-sm btn-accent mx-2">View PDF</button>
                <dialog ref={modalRef} id="my_modal_4" className="modal">
                    <form method="dialog" className="modal-box modal-custom w-11/12 max-w-5xl">
                    <p className="text-2xl leading-12 my-10">
                      <b>saleheen9</b>
                    </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <br />
                    <p>{bookData.bookContent}</p>
                  </div>
                  <div className='col-span-1'>
                  <div className="w-full lg:w-2/3 flex justify-center" style={{
                    marginLeft: "80px"
                  }}>
                        <img src={bookData.imageURLs[0]} alt="Image 1" width="200px" />
                        <img src={bookData.imageURLs[1]} alt="Image 2" width="200px" />
                    </div>
                    <p className="m-8">Posted on: {formattedTime}</p>

                    <button className="btn btn-cust1 btn-accent m-8" >
                      Share
                    </button>
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
    </div>
  );
};

export default StatusView;
