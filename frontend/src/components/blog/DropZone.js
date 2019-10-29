import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./DropZone.css";
import axios from 'axios';

const DropZone = () => {
  const maxSize = 5242880;

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const {
    isDragActive,
    getRootProps,
    getInputProps,
    acceptedFiles,
    rejectedFiles
  } = useDropzone({
    onDrop,
    minSize: 0,
    maxSize,
    accept: ["image/jpeg", "application/pdf"]
  });

  useEffect(() => {
    if (rejectedFiles.length > 0) alert("Upload Failed");
  }, [rejectedFiles]);
  return (
    <div className="Dropcontainer">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="DropArea">
          <img
            className="AddFileImg"
            src="https://img.icons8.com/metro/52/000000/add-file.png"
          />
          {!isDragActive && <h3>Drop file here or click to add file!</h3>}
          {isDragActive && <h3>Release!</h3>}
        </div>
      </div>
    </div>
  );
};

export default DropZone;