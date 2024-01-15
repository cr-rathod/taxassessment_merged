import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const DeleteExcessPropFromDb = () => {



  // Ward
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
 //search
 const [selectedWards, setSelectedWards] = useState([]);
 const [selectAll, setSelectAll] = useState(false);

 const handleCheckboxChange = (wards) => {
   const updatedSelectedWards = selectedWards.includes(wards)
     ? selectedWards.filter((selected) => selected !== wards)
     : [...selectedWards, wards];

   setSelectedWards(updatedSelectedWards);
 };
  

const handleCancel=()=>{
    alert("User Authentication Failed")
}
  
  const [selectedWard, setSelectedWard] = useState("all");

  const handleWardChange = (e) => {
    setSelectedWard(e.target.value);
  };
  const [selectedOverlay, setSelectedOverlay] = useState(null);
    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleRadioChange = (e) => {
    const radioId = e.target.id;
    if (radioId === "singleProperty") {
      setSelectedOverlay("singleProperty");
    } else if (radioId === "propertyRange") {
      setSelectedOverlay("propertyRange");
    } else if (radioId === "selectedPropertyFromRange") {
      setSelectedOverlay("selectedpropertyRange"); 
    } else {
      setSelectedOverlay(null);
    }
  };
  


  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Delete Excess Properties From DataBase</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 ml-2 ">
                          <div className="card p-2 ">
                            <h6 className="text-center text-primary font-weight-bold">
                              Prime Information
                            </h6>

                            <div className="row  mt-1 justify-content-center">
                              <label className="col-form-label">Ward</label>

                              <div className="col-sm-3 text-center">
                                <select
                                  className="form-control text-center"
                                  name="ward"
                                  id="ward"
                                  value={selectedWard}
                                  onChange={handleWardChange}
                                >
                                  <option value="all">Select Ward</option>
                                  {wardOptions}
                                </select>
                                <span className="messages"></span>
                              </div>

                              <div className="col-md-2 mt-2">
                                <button
                                  type="submit"
                                  className="btn btn-grd-inverse"
                                >
                                  Clear All
                                </button>
                                <span className="messages"></span>
                              </div>
                            </div>
                          </div>
                        </div>  </div></div>
                        <div className="container">
                      <div className="row">
                        <div className="col-md-5 ml-2">
                          <div className="card ">
                           

                            {selectedWard !== "all" && (
                              <>
                               <h6 className="text-center mt-1 text-primary font-weight-bold">
                              Properties Range
                            </h6>
                                <div className="col-sm-5">
                                  <div
                                    className="form-check"
                                    style={{ marginTop: "3%" }}
                                  >
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="propertyType"
                                      id="singleProperty"
                                      value=""
                                      onChange={handleRadioChange}


                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="singleProperty"
                                    >
                                      Single Property
                                    </label>
                                  </div>
                                </div>

                                  
                                <div className="col-sm-6">
                                  <div
                                    className="form-check"
                                    style={{ marginTop: "3%" }}
                                  >
                                    <input
                                      className="form-check-input "
                                      type="radio"
                                      name="propertyType"
                                      id="propertyRange"
                                      value=""
                                      onChange={handleRadioChange}

                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="propertyRange"
                                    >
                                      Property Range
                                    </label>
                                  </div>
                                </div>

                                

                                <div className="col-sm-8">
                                  <div
                                    className="form-check"
                                    style={{ marginTop: "3%" }}
                                  >
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="propertyType"
                                      id="selectedPropertyFromRange"
                                      value=""
                                      onChange={handleRadioChange}

                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="selectedPropertyFromRange"
                                    >
                                      Selected Property From Range
                                    </label>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>

{/*  */}
<div className="col-md-6 ml-2">
  {selectedOverlay === "singleProperty" && (
    <div className="card">
      <div className="overlay-window">
        <div className="col-sm-4 text-center">
          <div className="form-group" style={{ marginTop: "3%" }}>
            <label htmlFor="propertyNumber">Enter Property No.</label>
            <select
              className="form-control text-center "
              id="propertyNumber"
              name="propertyNumber"
            >
              {[...Array(100).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )}

  {selectedOverlay === "propertyRange" && (
    <div className="card">
      <div className="overlay-window" style={{ display: "flex" }}>
        <div className="col-sm-4 text-center">
          <div className="form-group">
            <label htmlFor="propertyNumber">From</label>
            <select
              className="form-control text-center "
              id="propertyNumberFrom"
              name="propertyNumberFrom"
            >
              {[...Array(10).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-sm-4 text-center">
          <div className="form-group" style={{ marginTop: "3%" }}>
            <label htmlFor="propertyNumber">Till</label>
            <select
              className="form-control text-center "
              id="propertyNumberTill"
              name="propertyNumberTill"
            >
              {[...Array(10).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )}

  {selectedOverlay === "selectedpropertyRange" && (
    <div className="card">
      <div className="overlay-window" style={{ display: "flex" }}>
        <div className="col-sm-4 mt-1 text-center">
          <div className="form-group" style={{ marginTop: "3%" }}>
            <label htmlFor="propertyNumber">From</label>
            <select
              className="form-control text-center"
              id="propertyNumberFrom"
              name="propertyNumberFrom"
            >
              {[...Array(10).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-sm-4 mt-1 text-center">
          <div className="form-group" style={{ marginTop: "3%" }}>
            <label htmlFor="propertyNumber">Till</label>
            <select
              className="form-control text-center "
              id="propertyNumberTill"
              name="propertyNumberTill"
            >
              {[...Array(10).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-sm-4 text-center">
          <label className="col-form-label mx-2">Select PropertyNo.</label>
          <div
            className="col-md-19 text-center"
            style={{
              maxHeight: "60px",
              overflowY: "auto",
              border: "2px solid #ccc",
            }}
          >
            {[...Array(20).keys()].map((number) => (
              <div key={number} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`wards${number + 1}`}
                  checked={selectAll || selectedWards.includes(`${number + 1}`)}
                  onChange={() => handleCheckboxChange(`${number + 1}`)}
                  style={{ cursor: "pointer" }}
                />
                <label htmlFor={`wards${number + 1}`} className="form-check-label">
                  {number + 1}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )}
</div>
  


                    </div></div>
                    <div className="row">
                                          <div className="col-sm-4"></div>
                                          <div className="col-sm-6">
                                            <button
                                              type="button"
                                              className="btn waves-effect waves-light btn-grd-danger m-r-20" 
                                              data-toggle="modal" data-target="#large-Modal" 
                                            >
                                             Delete Properties
                                            </button>
                                            <div
                          class="modal fade"
                          id="large-Modal"
                          tabindex="-1"
                          role="dialog"
                        >
                          <div class="modal-dialog modal-sm" role="document">
                            <div class="modal-content ">
                              <div class="modal-header">
                                <h4 class="modal-title text-danger">Delete Property</h4>

                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body ">
                                <label className="col-form-label mb-2 ">
                                  Enter Security Password
                                </label>
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                />
                              </div>
                              <div class="modal-footer justify-content-center ">
                                <button
                                  type="button"
                                  class="btn btn-grd-success btn-block waves-effect mt-2"
                                  data-dismiss="modal"
                                >
                                  Ok
                                </button>

                                <button
                                  type="button"
                                  class="btn btn-grd-inverse btn-block waves-effect"
                                  data-dismiss="modal"
                                  onClick={handleCancel}
                                >
                                  Cancel
                                </button>
                               
                              </div>
                              
                            </div>
                          </div>
                          
                        </div>
                        
                                             </div></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteExcessPropFromDb;
