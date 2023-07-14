'use client'
import './PlatformPdf.css';
import Modal from './Modal'
import StatusView from './StatusView';

const PlatformPdf = () => {

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
            <Modal />
          </div>
        </div>
      </div>
      <br></br>
      {/* <StatusView /> */}
    </div>
  );
};

export default PlatformPdf;
