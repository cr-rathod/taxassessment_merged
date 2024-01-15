import React, { useState, useEffect,useRef } from "react";
import { Link,useNavigate } from "react-router-dom";



const ImageDownloader = () => {
//image
const [attachedFilesCount, setAttachedFilesCount] = useState(0);
  const [selectedFilePath, setSelectedFilePath] = useState("");
  const fileInputRef = React.createRef();


  const handleAttachmentClick = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
      setAttachedFilesCount(attachedFilesCount + 1);
    }
  };
  //canceal
  const handleCancelClick = () => {
    setSelectedFilePath("");
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleFileInputChange = (e) => {
    const fileInput = e.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      setSelectedFilePath(selectedFile.name);
    }
  };



//ward
const wardOptions = [...Array(20).keys()].map((number) => (
    <option key={number + 1} value={number + 1}>
      {number + 1}
    </option>
  ));
  
  wardOptions.push(
    <option key="all" value="all">
      All
    </option>
  );
  //fromProp
const fromProp = [...Array(200).keys()].map((number) => (
    <option key={number + 1} value={number + 1}>
      {number + 1}
    </option>
  ));
  fromProp.push(
    <option key="all" value="all">
      All
    </option>
  );
  //toProp
  const toProp = [...Array(200).keys()].map((number) => (
    <option key={number + 1} value={number + 1}>
      {number + 1}
    </option>
  ));
  toProp.push(
    <option key="all" value="all">
      All
    </option>
  );

    return (
        <div className="pcoded-content">
          <div className="pcoded-inner-content">
            <div className="main-body">
              <div className="page-wrapper">
                <div className="page-body">
                  <div className="card">
                    <div className="card-header">
                      <h5>Image Downloader</h5>
                    </div>
                    <div className="card-block">
                      <form>
                      <div className="container">
  <div className="row form-group">
  <label className="col-form-label mt-2">Ward :</label>

    <div className="col-md-3 col-sm-12">
        
      <div className="form-group text-center">
        <select className="form-control" name="ward" id="ward">
          <option value="all">Select</option>
          {wardOptions}
        </select>
        <span className="messages"></span>
      </div>
    </div>
    <label className="col-form-label mt-2">From Properties :</label>

    <div className="col-md-3 col-sm-12">
      <div className="form-group text-center">
        <select
          className="form-control"
          name="fromProperties"
          id="fromProperties"
        >
          <option value="all">Select From Property</option>
          {fromProp}
        </select>
        <span className="messages"></span>
      </div>
    </div>
    <label className="col-form-label mt-2">To Properties :</label>

    <div className="col-md-3 col-sm-12">
      <div className="form-group text-center">
        <select
          className="form-control"
          name="toProperties"
          id="toProperties"
        >
          <option value="all">Select To Property</option>
          {toProp}
        </select>
        <span className="messages"></span>
      </div>
    </div>
  </div>
  <div className="row">
  <label className="col-form-label mt-2 ">Locate Folder :</label>

  <div className="col-md-5 mt-2 col-sm-12">
    <div className="form-group text-center">
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Enter folder location"
        name="folderLocation"
        id="folderLocation"
        value={selectedFilePath}
        readOnly
        onClick={handleAttachmentClick}
      />
    </div>
  </div>
  <div className="card p-2" >

  <div className="col-md-12 col-sm-12">
    <div className="form-group text-center">
      <button
        type="button"
        className="btn btn-grd-primary "
        onClick={handleAttachmentClick}
      >
        Locate Folder
      </button>
      <button
        type="button"
        className="btn btn-grd-inverse  ml-2"
        onClick={handleCancelClick}
      >
        Cancel
      </button>
      <button
        type="button"
        className="btn btn-grd-info  ml-2"
      >
        All Image
      </button> 
      <button
        type="button"
        className="btn btn-grd-success  ml-2"
      >
       Download Image
      </button>
    </div>
  </div>
</div></div>
    </div>        </form>

                      </div>  </div>  </div>  </div>  </div>  </div>  </div>
    )}
    export default ImageDownloader;