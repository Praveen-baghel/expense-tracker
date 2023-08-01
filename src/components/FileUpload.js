import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const onDrop = (acceptedFiles) => {
    // Handle the uploaded files here
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={{ border: '1px dashed #ccc', padding: '20px', textAlign: 'center' }}>
      <input {...getInputProps()} />
      <p>Drag and drop files here, or click to select files</p>
    </div>
  );
};

export default FileUpload;
