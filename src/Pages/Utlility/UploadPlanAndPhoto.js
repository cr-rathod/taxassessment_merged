import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

const UploadPlanAndPhoto = () => {
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
  //exoprt
  const handleExportButtonClick = () => {
    const data1 = [
      ["    ", " ", "UploadRecords  ", "   "],
      [
        "NewZoneNo",
        "NewWardNo",
        "NewPropertyNo",
        "NewPartitionNo",
        "PlanPhoto",
        "PropertyPhotoA",
        "PropertyPhotoB",
        "PropertyPhotoC",
        "PropertyPhotoD",
      ],
      [
        1,
        5,
        1,
        "1-5-1-A.jpg",
        "Plan Not Found",
        "PhotoA Not Found",
        "PhotoB Not Found",
        "PhotoC Not Found",
        "PhotoD Not Found",
      ],
    ];

    const data2 = [
      ["    ", " ", " ErrorRecords  ", "   "],
      ["WardNo", "PropertyNo", "PartitionNo", "Image Name", "Description"],
      [1, 5, 1, "1-5-1-A.jpg", "Property Not Found"],
    ];

    const ws1 = XLSX.utils.aoa_to_sheet(data1);
    const ws2 = XLSX.utils.aoa_to_sheet(data2);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, "Sheet1");
    XLSX.utils.book_append_sheet(wb, ws2, "Sheet2");

    XLSX.writeFile(wb, "exported_data.xlsx");
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

  // UpdateProp Name
  const [shopProp, setProp] = useState("");

  const handleRadioProp = (Prop) => {
    setProp(Prop);
    if (Prop === "updatePropName") {
      setShowProp(true);

      setShowFrom(false);
      setSelectOption(false);
    } else {
      setShowProp(false);
    }
  };

  // Update From
  const [showProp, setShowProp] = useState(false);
  const [showFrom, setShowFrom] = useState(false);
  const [showSelected, setShowSelect] = useState(false);
  const [shopFrom, setFromOption] = useState("");

  const handleRadioFrom = (From) => {
    setFromOption(From);
    if (From === "updateFrom") {
      setShowFrom(true);
      setShowProp(false);
      setSelectOption(false);
    } else {
      setShowFrom(false);
    }
  };

  // Update Select
  const [showSelect, setSelectOption] = useState("");

  const handleRadioSelect = (Select) => {
    setSelectOption(Select);
    if (Select === "updateSelected") {
      setShowSelect(true);
      setShowFrom(false);

      setShowProp(false);
    } else {
      setShowSelect(false);
    }
  };
  //select ward
  // const [selectedWard, setSelectedWard] = useState([]);
  // const [selectAll, setSelectAll] = useState(false);
  // const handleCheckboxChange = (ward) => {
  //     const updatedSelectedWard = selectedWard.includes(ward)
  //       ? selectedWard.filter((selected) => selected !== ward)
  //       : [...selectedWard, ward];

  //     setSelectedWard(updatedSelectedWard);
  //   };

  const [selectedWards, setSelectedWards] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const handleSelectAll = () => {
    const newSelectAllValue = !selectAll;

    // Update the state to toggle the selectAll value
    setSelectAll(newSelectAllValue);

    // Update the selectedWards based on the newSelectAllValue
    const updatedSelectedWards = newSelectAllValue
      ? [...Array(100).keys()].map((number) => `${number + 1}`)
      : [];

    // Update the selectedWards state
    setSelectedWards(updatedSelectedWards);
  };

  const [selectedProperties, setSelectedProperties] = useState([]);

  const handleSelectChange = (property, value) => {
    if (property === "fromProperties") {
      setSelectedFromProperty(value);
    } else if (property === "toProperties") {
      setSelectedToProperty(value);
    }
  };
  const selectAllCheckboxRef = useRef(null);
  //s

  // Function to handle individual checkbox change
const handleCheckboxChange = (property, value) => {
  if (property === "property" && value === "all") {
    // If "All" property checkbox is clicked, update selectAll and selectedProperties
    const newSelectAllValue = !selectAll;
    setSelectAll(newSelectAllValue);

    const allPropertyNumbers = selectedFromProperty !== "all" && selectedToProperty !== "all"
      ? [...Array(parseInt(selectedToProperty, 10) - parseInt(selectedFromProperty, 10) + 1).keys()]
          .map((number) => parseInt(selectedFromProperty, 10) + number)
      : [];
    setSelectedProperties(newSelectAllValue ? ["all", ...allPropertyNumbers] : []);
  } else {
    // If an individual property checkbox is clicked, update selectedProperties
    const updatedSelectedProperties = selectedProperties.includes(value)
      ? selectedProperties.filter((selected) => selected !== value)
      : [...selectedProperties, value];
    setSelectedProperties(updatedSelectedProperties);
  }
};

  const [selectedFromProperty, setSelectedFromProperty] = useState("all");
  const [selectedToProperty, setSelectedToProperty] = useState("all");

  const renderCheckboxOptions = () => {
    if (selectedFromProperty !== "all" && selectedToProperty !== "all") {
      const from = parseInt(selectedFromProperty, 10);
      const to = parseInt(selectedToProperty, 10);
  
      const options = [
        <div key="all" className="form-check">
          <input
            type="checkbox"
            className="form-check-input property-checkbox "
            id="propertyAll"
            value="all"
            checked={selectedProperties.includes("all")}
            onChange={() => handleCheckboxChange("property", "all")}
          />
          <label htmlFor="propertyAll" className="form-check-label text-info  ">
          All 
          </label>
        </div>,
        ...[...Array(to - from + 1).keys()].map((number) => {
          const propertyNumber = from + number;
          return (
            <div key={propertyNumber} className="form-check">
              <input
                type="checkbox"
                className="form-check-input property-checkbox"
                id={`property${propertyNumber}`}
                value={propertyNumber}
                checked={selectedProperties.includes(propertyNumber)}
                onChange={() => handleCheckboxChange("property", propertyNumber)}
                style={{ cursor: "pointer" }}   
              />
              <label
                htmlFor={`property${propertyNumber}`}
                className="form-check-label"
              >
                {propertyNumber}
              </label>
            </div>
          );
        }),
      ];return (
        <div className="d-flex flex-column border border-primary align-items-center justify-content-center">
          {options}
        </div>
      );
    }
  
    return null;
  };



  //checkbox all
  const [allChecked, setAllChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    photoA: false,
    photoB: false,
    photoC: false,
    photoD: false,
    plan: false,
  });

  const handleCheckboxClick = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const handleAllCheckboxClick = () => {
    setAllChecked(!allChecked);

    setCheckboxes({
      photoA: !allChecked,
      photoB: !allChecked,
      photoC: !allChecked,
      photoD: !allChecked,
      plan: !allChecked,
    });
  };
  //show img
  const [showPolicy, setShowPolicy] = useState(false);

  //save

  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
  };

  const planImages = [
    "../files/assets/images/gallery-grid/1.png",
    // '../files/assets/images/gallery-grid/2.png',
  ];

  return (
    <>
      <div className="pcoded-content">
        <div className="pcoded-inner-content">
          <div className="main-body">
            <div className="page-wrapper">
              <div className="page-body">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-header">
                        <h5>Upload Photo & Plan</h5>
                      </div>
                      <div className="card-block">
                        <div className="row">
                          <div className="col-md-12">
                            <ul class="nav nav-tabs md-tabs" role="tablist">
                              <li class="nav-item">
                                <a
                                  class="nav-link active"
                                  data-toggle="tab"
                                  href="#mainProperties"
                                  role="tab"
                                >
                                  Property Plan And Image Upload
                                </a>
                                <div class="slide"></div>
                              </li>
                              <li class="nav-item">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#obliqueProperties"
                                  role="tab"
                                >
                                  Property Plan And Image Clear
                                </a>
                                <div class="slide"></div>
                              </li>
                            </ul>
                            <div class="tab-content card-block">
                              <div
                                class="tab-pane active"
                                id="mainProperties"
                                role="tabpanel"
                              >
                                <div className="col-sm-12">
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>Property Plan And Image Upload</h5>
                                    </div>
                                    <div className="card-block">
                                      <form
                                        id="main"
                                        method="post"
                                        action="/"
                                        novalidate=""
                                      >
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="form-group row">
                                              <label className="col-form-label mt-2  col-md-4">
                                                Select Image Folder:
                                              </label>

                                              <div className="col-md-8 mt-2 col-sm-12">
                                                <div className="form-group text-center">
                                                  <input
                                                    type="file"
                                                    id="fileInput"
                                                    style={{ display: "none" }}
                                                    onChange={
                                                      handleFileInputChange
                                                    }
                                                  />
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter folder location"
                                                    name="folderLocation"
                                                    id="folderLocation"
                                                    value={selectedFilePath}
                                                    readOnly
                                                    onClick={
                                                      handleAttachmentClick
                                                    }
                                                  />
                                                </div>
                                              </div>

                                              {/* <div className="col-md-1 mt-2 ">
          <button
            type="button"
            className="btn btn-grd-info "
            onClick={handleAttachmentClick}
          >
            Browser
          </button>
        </div> */}
                                            </div>
                                          </div>
                                          {/* 2nd */}
                                          <div className="col-md-6 ">
                                            {/* <div className="card p-2" > */}

                                            <div className="col-md-12 col-sm-12">
                                              <div className="form-group text-center">
                                                <button
                                                  type="button"
                                                  className="btn btn-grd-info "
                                                  onClick={
                                                    handleAttachmentClick
                                                  }
                                                >
                                                  Browser
                                                </button>
                                                <button
                                                  type="button"
                                                  className="btn btn-grd-success  ml-2"
                                                >
                                                  Save Images
                                                </button>
                                                <button
                                                  type="button"
                                                  className="btn btn-grd-inverse  ml-2"
                                                  onClick={handleCancelClick}
                                                >
                                                  Cancel
                                                </button>
                                              </div>
                                            </div>
                                            {/* </div> */}

                                            {/*  */}
                                          </div>

                                          {/* 3rd */}

                                          {/*  */}
                                        </div>

                                        {/* 2nd row */}
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="card p-2">
                                              <h6 className="text-info">
                                                Upload Image:{" "}
                                              </h6>

                                              <div
                                                class="dt-responsive table-responsive"
                                                style={{
                                                  maxHeight: "200px",
                                                  overflow: "auto",
                                                }}
                                              >
                                                <table
                                                  id="order-table"
                                                  class="table table-striped table-bordered nowrap"
                                                >
                                                  <thead>
                                                    <tr>
                                                      <th className="font-weight-bold">
                                                        NewZoneNo
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        NewWardNo
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        NewPropertyNo
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        NewPartitionNo
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PropertyPhotoA
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PropertyPhotoB
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PropertyPhotoC
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PropertyPhotoD
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr className="text-center">
                                                      <td>2</td>
                                                      <td>1</td>
                                                      <td>9</td>
                                                      <td></td>
                                                      <td>Yes</td>
                                                      <td>Yes</td>
                                                      <td>No</td>
                                                      <td>No</td>
                                                    </tr>
                                                    <tr className="text-center">
                                                      <td>2</td>
                                                      <td>1</td>
                                                      <td>9</td>
                                                      <td></td>
                                                      <td>Yes</td>
                                                      <td>Yes</td>
                                                      <td>No</td>
                                                      <td>No</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                          </div>
                                          {/* 2nd */}
                                          <div className="col-md-6  ">
                                            <div className="card p-2 ">
                                              <h6 className="text-danger">
                                                Error Record :
                                              </h6>
                                              <div
                                                class="dt-responsive table-responsive "
                                                style={{
                                                  maxHeight: "150px",
                                                  overflow: "auto",
                                                }}
                                              >
                                                <table
                                                  id="order-table"
                                                  class="table table-striped table-bordered nowrap"
                                                >
                                                  <thead>
                                                    <tr>
                                                      <th className="font-weight-bold">
                                                        WardNo
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PropertyNo
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PartitionNo
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        Image Name
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        Description
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr className="text-center">
                                                      <td>1</td>
                                                      <td>5</td>
                                                      <td>1</td>
                                                      <td>1-5-1-A.jpg</td>
                                                      <td>
                                                        Property Not Found
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                              <div className="row  justify-content-center">
                                                <div className="col-md-1 justify-content-center">
                                                  <button
                                                    type="button"
                                                    className="btn btn-grd-primary   "
                                                    onClick={
                                                      handleExportButtonClick
                                                    }
                                                  >
                                                    Export
                                                  </button>
                                                </div>
                                              </div>
                                            </div>

                                            {/*  */}
                                          </div>{" "}
                                        </div>

                                        {/* 3rd */}
                                        <div className="card p-4">
                                          <div className="row ">
                                            <div className="col-md-6">
                                              <h6 className="text-info ">
                                                Upload Image:{" "}
                                              </h6>
                                              <div className=" col-lg-11 col-sm-11 col-md-11">
                                                {/* <h6 className="  text-center text-info font-weight-bold">
                                        Upload Photo
                                      </h6> */}

                                                <div className="form-group row mt-2 ">
                                                  <div class="col-lg-6 col-sm-6">
                                                    <div class="thumbnail">
                                                      <div class="thumb">
                                                        <label>
                                                          <a
                                                            href="../files/assets/images/gallery-grid/1.png"
                                                            data-lightbox="1"
                                                          >
                                                            <img
                                                              src="../files/assets/images/gallery-grid/1.png"
                                                              alt=""
                                                              class="img-fluid img-thumbnail"
                                                            />
                                                          </a>
                                                        </label>
                                                        {/* <input
        // type="file"
        // id="fileInput"
        onchange="handleAttachmentClick(this)"
      /> */}
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="col-lg-6 col-sm-6">
                                                    <div class="thumbnail">
                                                      <div class="thumb">
                                                        <label>
                                                          <a
                                                            href="../files/assets/images/gallery-grid/1.png"
                                                            data-lightbox="2"
                                                            data-title="My caption 2"
                                                          >
                                                            <img
                                                              src="../files/assets/images/gallery-grid/1.png"
                                                              alt=""
                                                              class="img-fluid img-thumbnail"
                                                            />
                                                          </a>
                                                        </label>
                                                        {/* <input
        type="file"
        id="fileInput"
        onchange="handleAttachmentClick(this)"
      /> */}
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="col-lg-6 col-sm-6">
                                                    <div class="thumbnail">
                                                      <div class="thumb">
                                                        <label>
                                                          <a
                                                            href="../files/assets/images/gallery-grid/1.png"
                                                            data-lightbox="3"
                                                            data-title="My caption 3"
                                                          >
                                                            <img
                                                              src="../files/assets/images/gallery-grid/1.png"
                                                              alt=""
                                                              class="img-fluid img-thumbnail"
                                                            />
                                                          </a>
                                                        </label>
                                                        {/* <input
        type="file"
        id="fileInput"
        onchange="handleAttachmentClick(this)"
      /> */}
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div class="col-lg-6 col-sm-6">
                                                    <div class="thumbnail">
                                                      <div class="thumb">
                                                        <label>
                                                          <a
                                                            href="../files/assets/images/gallery-grid/1.png"
                                                            data-lightbox="4"
                                                            data-title="My caption 4"
                                                          >
                                                            <img
                                                              src="../files/assets/images/gallery-grid/1.png"
                                                              alt=""
                                                              class="img-fluid img-thumbnail"
                                                            />
                                                          </a>
                                                        </label>
                                                        {/* <input
        type="file"
        id="fileInput"
        onchange="handleAttachmentClick(this)"
      /> */}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            {/* 2nd */}
                                            <div className="col-md-6 ">
                                              <h6 className="text-info ">
                                                Plan:{" "}
                                              </h6>

                                              <div>
                                                {/* <h6 className=" text-center  text-info font-weight-bold ml-3">
                                        Plan
                                      </h6> */}
                                                <div class=" mt-3 col-lg-11 col-sm-11">
                                                  <div class="thumbnail">
                                                    <div class="thumb">
                                                      <label className="text-center">
                                                        <a
                                                          href="../files/assets/images/gallery-grid/1.png"
                                                          data-lightbox="1"
                                                          data-title="My caption 1"
                                                        >
                                                          <img
                                                            src="../files/assets/images/gallery-grid/1.png"
                                                            alt=""
                                                            class="img-fluid img-thumbnail"
                                                          />
                                                        </a>
                                                      </label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              {/*  */}
                                            </div>{" "}
                                          </div>
                                        </div>

                                        {/*  */}
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* 2nd page                                           */}

                              <div
                                class="tab-pane"
                                id="obliqueProperties"
                                role="tabpanel"
                              >
                                <div className="col-sm-12">
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>Property Plan And Image Clear</h5>
                                    </div>
                                    <div className="card-block">
                                      <form
                                        id="main"
                                        method="post"
                                        action="/"
                                        novalidate=""
                                      >
                                        <div className="row ">
                                          <div className=" col-md-3 ">
                                            <div className="sub-title  font-weight-bold">
                                              Select Ward No:
                                            </div>

                                            <div className="form-group row">
                                              <label className="col-sm-4 col-form-label">
                                                Ward No.
                                              </label>
                                              <div className="col-sm-7">
                                                <select
                                                  className="form-control text-center"
                                                  name="ward"
                                                  id="ward"
                                                >
                                                  <option value="all">
                                                    Select Ward
                                                  </option>
                                                  {wardOptions}
                                                </select>
                                                <span className="messages"></span>
                                              </div>
                                            </div>
                                          </div>

                                          <div className=" col-md-4 ">
                                            <div className="form-group row">
                                              <div className="sub-title  font-weight-bold">
                                                Update Properties:
                                              </div>
                                              <div class="form-radio">
                                                <div class="radio radio-inline">
                                                  <label>
                                                    <input
                                                      type="radio"
                                                      name="radio"
                                                      onChange={() =>
                                                        handleRadioProp(
                                                          "updatePropName"
                                                        )
                                                      }
                                                    />
                                                    <i class="helper"></i>
                                                    Single Property
                                                  </label>
                                                </div>
                                                <div class="radio radio-inline">
                                                  <label>
                                                    <input
                                                      type="radio"
                                                      name="radio"
                                                      onChange={() =>
                                                        handleRadioFrom(
                                                          "updateFrom"
                                                        )
                                                      }
                                                    />
                                                    <i class="helper"></i>
                                                    Property Range
                                                  </label>
                                                </div>
                                                {/* <div class="radio radio-inline">
                                                  <label>
                                                    <input
                                                      type="radio"
                                                      name="radio"
                                                      onChange={() =>
                                                        handleRadioSelect(
                                                          "updateSelected"
                                                        )
                                                      }
                                                    />{" "}
                                                    <i class="helper"></i>
                                                    Selected Property From Range
                                                  </label>
                                                </div> */}
                                              </div>
                                            </div>
                                          </div>

                                          <div className=" col-md-5 ">
                                            {showProp && (
                                              <>
                                                <div className="mt-2 form-group row ml-2 text-center">
                                                  <h6 className="font-weight-bold mt-2 ml-2">
                                                    Single Property No:
                                                  </h6>
                                                  <div className="row col-md-12">
                                                    <div className="card p-2 ">
                                                      <div className="form-group row justify-content-center">
                                                        <label className="col-form-label text-center">
                                                          Enter Property No.
                                                        </label>
                                                        <div className="col-md-12  text-center">
                                                          <input
                                                            type="text"
                                                            className="form-control form-control-sm text-center"
                                                            name="sName"
                                                            id="sName"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </>
                                            )}

                                            {showFrom && (
                                              <div className="mt-2 form-group row ml-2 text-center">
                                                <h6 className="font-weight-bold ">
                                                  Select Property Type & Range:
                                                </h6>
                                                <div className="row col-md-12">
                                                  <div className=" col-md-12  ">
                                                    <div className=" form-group row">
                                                      <label className=" col-form-label">
                                                        From Property
                                                      </label>
                                                      <div className="col-sm-4">
                                                        <select
                                                          className="form-control  text-center"
                                                          name="ward"
                                                          id="ward"
                                                          onChange={(e) =>
                                                            handleSelectChange(
                                                              "fromProperties",
                                                              e.target.value
                                                            )
                                                          }
                                                        >
                                                          <option value="all"></option>
                                                          {fromProp}
                                                        </select>
                                                        <span className="messages"></span>
                                                      </div>

                                                      {/* </div>
<div className='form-group row'> */}
                                                      <label className=" col-form-label">
                                                        Till
                                                      </label>
                                                      <div className="col-sm-4">
                                                        <select
                                                          className="form-control  text-center"
                                                          name="ward"
                                                          id="ward"
                                                          onChange={(e) =>
                                                            handleSelectChange(
                                                              "toProperties",
                                                              e.target.value
                                                            )
                                                          }
                                                        >
                                                          <option value="all"></option>
                                                          {toProp}
                                                        </select>
                                                        <span className="messages"></span>
                                                      </div>
                                                      </div>
                                                      <div className="form-group row">
  <div className="mx-auto col-md-6" style={{ maxHeight: "150px", overflowY: "auto" }}>
    {renderCheckboxOptions()}
  </div>
</div>

                                                  </div>
                                                </div>
                                              </div>
                                            )}

{/* {showSelect && (
  <div className=" text-center" style={{ maxHeight: "150px", overflowY: "auto" }}>
   
    
    {renderCheckboxOptions()}
  </div>
)} */}
                                          </div>
                                        </div>
                                        {/*2nd  */}
                                        <div className="row form-group ">
                                          <div className="sub-title font-weight-bold">
                                            Select Photo Or/And Plan To Set
                                            Clear:
                                          </div>

                                          <div className="row from-group ml-2 ">
                                            <div className="col-sm-2">
                                              <div
                                                className="checkbox-fade fade-in-primary"
                                                style={{ marginTop: "3%" }}
                                              >
                                                <label>
                                                  <input
                                                    type="checkbox"
                                                    value=""
                                                    checked={checkboxes.photoA}
                                                    onChange={() =>
                                                      handleCheckboxClick(
                                                        "photoA"
                                                      )
                                                    }
                                                  />
                                                  <span className="cr">
                                                    <i className="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                  </span>
                                                  <span>Property Photo A</span>
                                                </label>
                                              </div>
                                            </div>
                                            <div className="col-sm-2">
                                              <div
                                                className="checkbox-fade fade-in-primary"
                                                style={{ marginTop: "3%" }}
                                              >
                                                <label>
                                                  <input
                                                    type="checkbox"
                                                    value=""
                                                    checked={checkboxes.photoB}
                                                    onChange={() =>
                                                      handleCheckboxClick(
                                                        "photoB"
                                                      )
                                                    }
                                                  />
                                                  <span className="cr">
                                                    <i className="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                  </span>
                                                  <span>Property Photo B</span>
                                                </label>
                                              </div>
                                            </div>
                                            <div className="col-sm-2">
                                              <div
                                                className="checkbox-fade fade-in-primary"
                                                style={{ marginTop: "3%" }}
                                              >
                                                <label>
                                                  <input
                                                    type="checkbox"
                                                    value=""
                                                    checked={checkboxes.photoC}
                                                    onChange={() =>
                                                      handleCheckboxClick(
                                                        "photoC"
                                                      )
                                                    }
                                                  />
                                                  <span className="cr">
                                                    <i className="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                  </span>
                                                  <span>Property Photo C</span>
                                                </label>
                                              </div>
                                            </div>
                                            <div className="col-sm-2">
                                              <div
                                                className="checkbox-fade fade-in-primary"
                                                style={{ marginTop: "3%" }}
                                              >
                                                <label>
                                                  <input
                                                    type="checkbox"
                                                    value=""
                                                    checked={checkboxes.photoD}
                                                    onChange={() =>
                                                      handleCheckboxClick(
                                                        "photoD"
                                                      )
                                                    }
                                                  />
                                                  <span className="cr">
                                                    <i className="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                  </span>
                                                  <span>Property Photo D</span>
                                                </label>
                                              </div>
                                            </div>
                                            <div className="col-sm-2">
                                              <div
                                                className="checkbox-fade fade-in-primary"
                                                style={{ marginTop: "3%" }}
                                              >
                                                <label>
                                                  <input
                                                    type="checkbox"
                                                    value=""
                                                    checked={checkboxes.plan}
                                                    onChange={() =>
                                                      handleCheckboxClick(
                                                        "plan"
                                                      )
                                                    }
                                                  />
                                                  <span className="cr">
                                                    <i className="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                  </span>
                                                  <span>Plan</span>
                                                </label>
                                              </div>
                                            </div>
                                            <div className="col-sm-2">
                                              <div
                                                className="checkbox-fade fade-in-primary"
                                                style={{ marginTop: "3%" }}
                                              >
                                                <label>
                                                  <input
                                                    type="checkbox"
                                                    value=""
                                                    checked={allChecked}
                                                    onChange={
                                                      handleAllCheckboxClick
                                                    }
                                                  />
                                                  <span className="cr">
                                                    <i className="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                  </span>
                                                  <span>All</span>
                                                </label>
                                              </div>
                                            </div>
                                            <div className="col-md-5 mx-auto">
                                              <button
                                                type="button"
                                                className="btn btn-grd-primary text-center"
                                                onClick={togglePolicy}
                                                style={{ cursor: "pointer" }}
                                              >
                                                Show
                                              </button>
                                              <span className="messages"></span>
                                              <button
                                                type="button"
                                                className="mx-2 btn btn-grd-info text-center"
                                              >
                                                Proceed
                                              </button>
                                              <span className="messages"></span>
                                              <button
                                                type="button"
                                                className="mx-1 btn btn-grd-inverse text-center"
                                              >
                                                Cancel
                                              </button>
                                              <span className="messages"></span>
                                            </div>
                                          </div>
                                        </div>
                                        {showPolicy && (
                                          <>
                                            <div className="sub-title  font-weight-bold">
                                              Properties Photo And Plan Details:
                                            </div>
                                            <div className="row mt-2">
                                              <div
                                                class="dt-responsive table-responsive"
                                                style={{
                                                  maxHeight: "200px",
                                                  overflow: "auto",
                                                }}
                                              >
                                                <table
                                                  id="order-table"
                                                  class="table table-striped table-bordered nowrap"
                                                >
                                                  <thead>
                                                    <tr className="text-center">
                                                      <th className="font-weight-bold">
                                                        WardNo.
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PropertyNo.
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PartitionNo.
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PropertyPhotoA
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PropertyPhotoB
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PropertyPhotoC
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PropertyPhotoD
                                                      </th>
                                                      <th className="font-weight-bold">
                                                        PlanPhoto
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr className="text-center">
                                                      <td>27</td>
                                                      <td>3</td>
                                                      <td>7</td>
                                                      <td>
                                                        <div class="col-lg-6 col-sm-6 text-center">
                                                          <div class="thumbnail">
                                                            <div class="thumb">
                                                              <label>
                                                                <a
                                                                  href="../files/assets/images/gallery-grid/1.png"
                                                                  data-lightbox="1"
                                                                  data-title="My caption 1"
                                                                >
                                                                  <img
                                                                    src="../files/assets/images/gallery-grid/1.png"
                                                                    class="img-fluid img-thumbnail"
                                                                    alt=""
                                                                  />
                                                                </a>
                                                              </label>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </td>

                                                      <td>
                                                        <div class="col-lg-6 col-sm-6 text-center">
                                                          <div class="thumbnail">
                                                            <div class="thumb">
                                                              <label>
                                                                <a
                                                                  href="../files/assets/images/gallery-grid/1.png"
                                                                  data-lightbox="1"
                                                                  data-title="My caption 1"
                                                                >
                                                                  <img
                                                                    src="../files/assets/images/gallery-grid/1.png"
                                                                    class="img-fluid img-thumbnail"
                                                                    alt=""
                                                                  />
                                                                </a>
                                                              </label>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </td>
                                                      <td>
                                                        <div class="col-lg-6 col-sm-6 text-center">
                                                          <div class="thumbnail">
                                                            <div class="thumb">
                                                              <label>
                                                                <a
                                                                  href="../files/assets/images/gallery-grid/1.png"
                                                                  data-lightbox="1"
                                                                  data-title="My caption 1"
                                                                >
                                                                  <img
                                                                    src="../files/assets/images/gallery-grid/1.png"
                                                                    class="img-fluid img-thumbnail"
                                                                    alt=""
                                                                  />
                                                                </a>
                                                              </label>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </td>
                                                      <td>
                                                        <div class="col-lg-6 col-sm-6 text-center">
                                                          <div class="thumbnail">
                                                            <div class="thumb">
                                                              <label>
                                                                <a
                                                                  href="../files/assets/images/gallery-grid/1.png"
                                                                  data-lightbox="1"
                                                                  data-title="My caption 1"
                                                                >
                                                                  <img
                                                                    src="../files/assets/images/gallery-grid/1.png"
                                                                    class="img-fluid img-thumbnail"
                                                                    alt=""
                                                                  />
                                                                </a>
                                                              </label>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </td>

                                                      {planImages.map(
                                                        (image, index) => (
                                                          <td key={index}>
                                                            <div class="col-lg-8 col-sm-8 text-center">
                                                              <div className="thumbnail">
                                                                <div class="thumb">
                                                                  <label>
                                                                    <a
                                                                      href={
                                                                        image
                                                                      }
                                                                      data-lightbox={`image-${
                                                                        index +
                                                                        1
                                                                      }`}
                                                                      data-title={`My caption ${
                                                                        index +
                                                                        1
                                                                      }`}
                                                                    >
                                                                      <img
                                                                        src={
                                                                          image
                                                                        }
                                                                        className="img-fluid img-thumbnail"
                                                                        alt=""
                                                                      />
                                                                    </a>
                                                                  </label>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </td>
                                                        )
                                                      )}
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>

                                            <div className="card p-4">
                                              <div className="row ">
                                                <div className="col-md-6">
                                                  <h6 className="text-info ">
                                                    Upload Property Image:{" "}
                                                  </h6>
                                                  <div className=" col-lg-11 col-sm-11 col-md-11">
                                                    {/* <h6 className="  text-center text-info font-weight-bold">
                                      Upload Photo
                                    </h6> */}

                                                    <div className="form-group row mt-2 ">
                                                      <div class="col-lg-6 col-sm-6">
                                                        <div class="thumbnail">
                                                          <div class="thumb">
                                                            <label>
                                                              <a
                                                                href="../files/assets/images/gallery-grid/1.png"
                                                                data-lightbox="1"
                                                              >
                                                                <img
                                                                  src="../files/assets/images/gallery-grid/1.png"
                                                                  alt=""
                                                                  class="img-fluid img-thumbnail"
                                                                />
                                                              </a>
                                                            </label>
                                                            {/* <input
      // type="file"
      // id="fileInput"
      onchange="handleAttachmentClick(this)"
    /> */}
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div class="col-lg-6 col-sm-6">
                                                        <div class="thumbnail">
                                                          <div class="thumb">
                                                            <label>
                                                              <a
                                                                href="../files/assets/images/gallery-grid/1.png"
                                                                data-lightbox="2"
                                                                data-title="My caption 2"
                                                              >
                                                                <img
                                                                  src="../files/assets/images/gallery-grid/1.png"
                                                                  alt=""
                                                                  class="img-fluid img-thumbnail"
                                                                />
                                                              </a>
                                                            </label>
                                                            {/* <input
      type="file"
      id="fileInput"
      onchange="handleAttachmentClick(this)"
    /> */}
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div class="col-lg-6 col-sm-6">
                                                        <div class="thumbnail">
                                                          <div class="thumb">
                                                            <label>
                                                              <a
                                                                href="../files/assets/images/gallery-grid/1.png"
                                                                data-lightbox="3"
                                                                data-title="My caption 3"
                                                              >
                                                                <img
                                                                  src="../files/assets/images/gallery-grid/1.png"
                                                                  alt=""
                                                                  class="img-fluid img-thumbnail"
                                                                />
                                                              </a>
                                                            </label>
                                                            {/* <input
      type="file"
      id="fileInput"
      onchange="handleAttachmentClick(this)"
    /> */}
                                                          </div>
                                                        </div>
                                                      </div>

                                                      <div class="col-lg-6 col-sm-6">
                                                        <div class="thumbnail">
                                                          <div class="thumb">
                                                            <label>
                                                              <a
                                                                href="../files/assets/images/gallery-grid/1.png"
                                                                data-lightbox="4"
                                                                data-title="My caption 4"
                                                              >
                                                                <img
                                                                  src="../files/assets/images/gallery-grid/1.png"
                                                                  alt=""
                                                                  class="img-fluid img-thumbnail"
                                                                />
                                                              </a>
                                                            </label>
                                                            {/* <input
      type="file"
      id="fileInput"
      onchange="handleAttachmentClick(this)"
    /> */}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                {/* 2nd */}
                                                <div className="col-md-6 ">
                                                  <h6 className="text-info ">
                                                    Plan Photo:{" "}
                                                  </h6>

                                                  <div>
                                                    {/* <h6 className=" text-center  text-info font-weight-bold ml-3">
                                      Plan
                                    </h6> */}
                                                    <div class=" mt-3 col-lg-11 col-sm-11">
                                                      {planImages.map(
                                                        (image, index) => (
                                                          <div
                                                            key={index}
                                                            className="thumbnail"
                                                          >
                                                            <label className="text-center">
                                                              <a
                                                                href={image}
                                                                data-lightbox={`image-${
                                                                  index + 1
                                                                }`}
                                                                data-title={`My caption ${
                                                                  index + 1
                                                                }`}
                                                              >
                                                                <img
                                                                  src={image}
                                                                  alt=""
                                                                  className="img-fluid img-thumbnail"
                                                                />
                                                              </a>
                                                            </label>
                                                          </div>
                                                        )
                                                      )}
                                                    </div>
                                                  </div>

                                                  {/*  */}
                                                </div>{" "}
                                              </div>
                                            </div>
                                          </>
                                        )}
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadPlanAndPhoto;
