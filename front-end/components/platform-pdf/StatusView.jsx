import React from 'react';
import Preview from './Preview';

const StatusView = ({ id, username, caption, file, time }) => {
  const postDate = new Date(); // Replace this with the actual date of the post

  return (
    <div>
      <div className="hero" style={{ width: '800px' }}>
        <div className="hero-content hero-post flex-col lg:flex-row-reverse">
          <Preview />
          <div>
            <h1 className="text-2xl font-bold text-custom">{username}</h1>
            <p className="py-6 text-custom">{caption}</p>
            <p className="text-custom">Posted on: {postDate.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusView;
