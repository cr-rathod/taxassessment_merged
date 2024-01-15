import React, { useState, useEffect,useRef } from "react";
import { Link,useNavigate } from "react-router-dom";


const ReportsE = () => {
  //show filter
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false);

  const handleShowFilterClick = () => {
    setShowFilter(true);
    setShowCheckbox(true);
  };

  const handleSaveClick = () => {
    navigate("/ReportE");

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
// Function to handle select all change
const handleSelectAllChange = () => {
  const newSelectAllValue = !selectAll;
  setSelectAll(newSelectAllValue);

  const updatedSelectedWards = newSelectAllValue
    ? [...Array(20).keys()].map((number) => `${number + 1}`)
    : [];

  setSelectedWards(updatedSelectedWards);

  // If you want the "All" checkbox to also affect property checkboxes,
  // update selectedProperties accordingly.
  const allPropertyNumbers = selectedFromProperty !== "all" && selectedToProperty !== "all"
    ? [...Array(parseInt(selectedToProperty, 10) - parseInt(selectedFromProperty, 10) + 1).keys()]
        .map((number) => parseInt(selectedFromProperty, 10) + number)
    : [];
  setSelectedProperties(newSelectAllValue ? ["all", ...allPropertyNumbers] : []);
};

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
style={{ cursor: "pointer" }}              />
              <label
                htmlFor={`property${propertyNumber}`}
                className="form-check-label"
              >
                {propertyNumber}
              </label>
            </div>
          );
        }),
      ];
      return (
        <div className="d-flex  border border-info flex-column align-items-center justify-content-center">
          {options}
        </div>
      );
    }
  
    return null;
  };



  

  //radio
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  const togglePolicy = () => {
    console.log("Selected Radio Value:", selectedOption);
  };

 
    return (
        <div className="pcoded-content">
          <div className="pcoded-inner-content">
            <div className="main-body">
              <div className="page-wrapper">
                <div className="page-body">
                  <div className="card">
                    <div className="card-header">
                      <h5>Generate Report</h5>
                    </div>
                    <div className="card-block">
                      <form>
                      <div className="card-block">
                                      <form
                                        id="main"
                                        method="post"
                                        action="/"
                                        novalidate=""
                                      >
                                        <div className="row ">
                                          <div className=" col-md-4 ">
                                            <div className="sub-title  font-weight-bold">
                                              Select Ward No:
                                            </div>
                                            <div className="form-group row">
                                              <label className=" col-form-label">
                                                Year
                                              </label>
                                              <div className="col-sm-4">
                                                <select
                                                  className="form-control text-center"
                                                  name="ward"
                                                  id="ward"
                                                >
                                                  <option></option>
                                                  <option value="all">
                                                    2021-2022
                                                  </option>
                                                  <option value="all">
                                                    2022-2023
                                                  </option>
                                                  <option value="all">
                                                    2023-2024
                                                  </option>
                                                </select>
                                                <span className="messages"></span>
                                              </div>
                                            {/* </div>
                                            <div className="form-group row"> */}
                                              
                                              <label className="col-form-label">
                                                Ward No.
                                              </label>
                                              <div className="col-sm-4">
                                                <select
                                                  className="form-control text-center"
                                                  name="ward"
                                                  id="ward"
                                                >
                                                                                                    <option></option>

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
                                              <div className="sub-title ml-2 font-weight-bold">
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
                                                <div class="radio radio-inline">
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
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className=" col-md-4 ">
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
                                                <h6 className="font-weight-bold mt-2 ml-2">
                                                  Select Property Type:
                                                </h6>
                                                <div className="row col-md-12">
                                                  <div className=" col-md-12  ">
                                                    <div className="form-group row">
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
                                                  </div>
                                                </div>
                                              </div>
                                            )}

{showSelect && (
  <div className=" text-center" style={{ maxHeight: "150px", overflowY: "auto" }}>
    {/* "All" checkbox for properties */}
    {/* <div className="form-check"> */}
    {/* <input
      type="checkbox"
      className="form-check-input"
      id="propertyAll"
      checked={selectAll}
      onChange={() => handleSelectAllChange()}
    /> */}
    
    {/* </div */}
    
    {renderCheckboxOptions()}
  </div>
)}

                                          </div>
                                        </div>
                                        {/*2nd  */}
                                        <div className="row form-group  ">
                                          <div className="col-md-6">
                                          <div className="sub-title font-weight-bold">
                                            Format :
                                          </div>

                                          <div className="row from-group ">
      <div className="col-sm-2">
        <div className="radio-fade fade-in-primary" style={{ marginTop: "3%" }}>
          <label>
            <input
              type="radio"
              name="radioOption"
              value="RPT"
              checked={selectedOption === "RPT"}
              onChange={() => handleRadioChange("RPT")}
            />
            <span className="cr ml-2">
              <i className="cr-icon icofont txt-info"></i>
            </span>
            <span>RPT</span>
          </label>
        </div>
      </div>

      <div className="col-sm-2">
        <div className="radio-fade fade-in-primary" style={{ marginTop: "3%" }}>
          <label>
            <input
              type="radio"
              name="radioOption"
              value="PDF"
              checked={selectedOption === "PDF"}
              onChange={() => handleRadioChange("PDF")}
            />
            <span className="cr ml-2">
              <i className="cr-icon icofont txt-info"></i>
            </span>
            <span>PDF</span>
          </label>
        </div>
      </div>

      <div className="col-sm-2">
        <div className="radio-fade fade-in-primary" style={{ marginTop: "3%" }}>
          <label>
            <input
              type="radio"
              name="radioOption"
              value="Word"
              checked={selectedOption === "Word"}
              onChange={() => handleRadioChange("Word")}
            />
            <span className="cr ml-2">
              <i className="cr-icon icofont txt-info"></i>
            </span>
            <span>Word</span>
          </label>
        </div>
      </div>

      <div className="col-sm-2">
        <div className="radio-fade fade-in-primary" style={{ marginTop: "3%" }}>
          <label>
            <input
              type="radio"
              name="radioOption"
              value="Excel"
              checked={selectedOption === "Excel"}
              onChange={() => handleRadioChange("Excel")}
            />
            <span className="cr ml-2">
              <i className="cr-icon icofont txt-info"></i>
            </span>
            <span>Excel</span>
          </label>
        </div>
      </div>

     
    </div>
  
    </div>

{/*  */}
                                          <div className="col-md-6 card">
                                          <div className="sub-title font-weight-bold">
                                           Group By:
                                          </div>
                                          <div className="row form-group justify-content-center">
                                          <div className="col-md-4">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>All in Combine</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Single Per Page</span>
                                </label>
                              </div>
                            </div>
                            </div>

</div>

{/*  */}
                                        </div>
<hr className="border-info"></hr>
                                        {/* search */} 
                                        <div className="row">
                                          <div className="col-md-8">
                                            <div className="form-group row  ">
                                              <label className=" col-form-label">
                                                Search Report :
                                              </label>
                                              <div className="col-sm-6">
                                                <select
                                                  className="form-control text-center"
                                                  name="ward"
                                                  id="ward"
                                                >
                                                  <option value="all">
                                                    Assessment Prime Report
                                                  </option>
                                                  <option value="all">
                                                  Assessment Final Report
                                                  </option>
                                                  <option value="all">
                                                    119 Notice
                                                  </option>
                                                  <option value="all">
                                                    Kae Akarani
                                                  </option>
                                                  <option value="all">
                                                    Kae Akarani With Non Tax Type
                                                  </option>
                                                  <option value="all">
                                                   Assessment Nakkal
                                                  </option>
                                                  <option value="all">
                                                    Bill
                                                  </option>
                                                </select>
                                                <span className="messages"></span>
                                              </div>

                      <div className="mt-1 ">
  <button type="button" className="btn btn-grd-primary text-center"          onClick={handleShowFilterClick}
 >
    Show Filter
  </button>
  <span className="messages"></span>
  <button type="button" className="mx-2 btn btn-grd-primary text-center">
Show
  </button>
  <span className="messages"></span></div>


</div></div>
{showCheckbox && (

<div className="col-md-4">
  <div className="card p-1">
  <div className="row form-group">
  <div className="col-sm-7 mt-2">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Is Zero Tax Property</span>
                                </label>
                              </div>
                            </div>

                            <div className="col-md-1 mt-2 ">
  <button type="button" className="btn btn-grd-primary text-center"                   onClick={handleSaveClick}
 >
    Save
  </button>
  <span className="messages"></span></div>

  </div>


  </div>
  </div>
)}

                                       {/*  */}
                                       </div>
                                      </form>
                                    </div>

                        </form>
                        </div> </div> </div> </div> </div> </div> </div>
    )}
    export default ReportsE;