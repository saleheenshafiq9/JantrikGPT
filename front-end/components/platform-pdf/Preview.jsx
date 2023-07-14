const Preview = ({ file }) => {
    return (
      <div>
        <p className="text-3xl leading-12 my-10">
        </p>
        {file ? (
          <embed src={URL.createObjectURL(file)} type="application/pdf" width="100%" height="600px" />
        ) : (
          <p className="text-xl leading-8 my-10"></p>
        )}
      </div>
    );
  };
  
  export default Preview;
  