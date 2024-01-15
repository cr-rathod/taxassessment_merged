import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AutoAppeal = () => {

    const [showPolicy, setShowPolicy] = useState(false);
    const navigate = useNavigate();
//redirect
  const handleRedirect = () => {
    navigate('/autoAppealRetain');
  };
//save
const handleSave = () => {
    alert(' Data Updated Successfully')
}
    const togglePolicy = () => {
        setShowPolicy(!showPolicy);
      };
//propertyRange
const [showRange, setShowRange] = useState(false);

const toggleRange = () => {
    setShowRange(!showRange);
  };
  //Appeal
const [showAppeal, setShowAppeal] = useState(false);

const toggleAppeal = () => {
    setShowAppeal(!showAppeal);
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

  //save&proceed
  
//process button
const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
const [isFormVisible, setIsFormVisible] = useState(false);
const [isSubmitDisabled, setIsSubmitDisabled] = useState("");
const [password, setPassword] = useState("");

const handleCancel= () => {
alert("Authebtication Falied")
};


const handleConfirmation = () => {
  setIsConfirmationOpen(true);
};

const handleYes = () => {
  setIsConfirmationOpen(false);
  setIsFormVisible(true);
};

const handleNo = () => {
  setIsConfirmationOpen(false);
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  if (password === "12345") {
    alert(`Processing password: ${password}`);
    navigate("/");
  
  } else {
    alert("Please enter a valid password.");
  }
};

const handlePasswordChange = (e) => {
  const enteredPassword = e.target.value;
  setPassword(enteredPassword);

  setIsSubmitDisabled(enteredPassword === "12345");
};


  
  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Auto Appeal</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="row ">
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-header">
                            <h5>Select Base Type</h5>
                          </div>
                          <div className="row form-group ml-2">
                            <label className="col-form-label mt-3">
                              Calculation Base Type
                            </label>

                            <div className="col-md-8 mt-2 text-center ">
                              <select
                                className="form-control text-center"
                                name="fYear"
                                id="fYear"
                              >
                                <option>Select Base Type</option>
                                <option>Rateable Value</option>
                                <option>Captial Value</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div
                           className="card-header"
                           onClick={togglePolicy}
                           style={{ cursor: "pointer" }}
                         >
                            <h5>Select Polices</h5>
                          </div>
                          {showPolicy && (

                          <div className="row ml-2 ">
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
                                  <span>As Per Old</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>New Property As Per Old</span>
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
                                  <span>Minimum RV</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Minimum RV For Old Rv Zero</span>
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
                                  <span>Mix Assessment</span>
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
                                  <span>Retention</span> 
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-6">
  <div class="radio-fade fade-in-primary" style={{ "margin-top": "3%" }}>
    <label>
      <input type="radio" value="" checked disabled />
      <span class="cr ml-2">
        <i class="cr-icon icofont txt-info"></i>
      </span>
      <span>Rentain Factor Case Wise</span>
    </label>
  </div>
</div>

                          </div>
                           )}
                        </div>
                        {/*  */}
                        <div className="card">
  <div className="card-header"
   onClick={toggleRange}
   style={{ cursor: "pointer" }}>
    <h5>Select Property Range</h5>
  </div>
  {showRange && (
    <>
    <div className="form-group row text-center">
      <div className="col-sm-4">
        <label className="col-form-label mt-2">Ward</label>
        <select className="form-control" name="ward" id="ward">
          <option value="all">Select Ward</option>
          {wardOptions}
        </select>
        <span className="messages"></span>
      </div>

      <div className="col-sm-4">
        <label className="col-form-label mt-3">From Properties</label>
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

      <div className="col-sm-4">
        <label className="col-form-label mt-3">To Properties</label>
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
    <div className="form-group row justify-content-center">
      <div className="col-sm-3">
        <button type="submit" className="btn btn-grd-success"     onClick={handleConfirmation}

>
          Save & Proceed
        </button>
        <span className="messages"></span>
      </div>
    </div>
  
  </>
  )}
</div>
{isConfirmationOpen && (
  <div className="confirmation-dialog">
    <div className=" row justify-content-center">

      <div className="col-md-10  col-sm-12 border border-info p-2 " style={{ maxWidth: "320px",}}>
      <h6 className="text-center text-primary font-weight-bold">Customize Tax</h6>

        <label className="col-md-11 text-center col-sm-12">
          Do you want to proceed Save?
        </label>

        <div className="col-sm-12 mt-2 text-center">
          <button
            className="btn btn-sm mx-2 justify-content-center"
            onClick={handleYes}
          >
            Yes
          </button>
          <button className="btn btn-sm" onClick={handleNo}>
            No
          </button>
        </div>
      </div>
    </div>
  </div>
)}


{isFormVisible && (
  <div className="col-md-6 col-sm-12" style={{ marginTop: "-42px", marginLeft: "-9px" }}>
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3 row justify-content-center">
        <div className="col-md-7 ml-2 text-center col-sm-12 border border-info p-1">
          <h6 className="text-primary font-weight-bold text-center">L1 Level</h6>
          <label className="col-form-label mb-2 text-center">
            Enter the Password
          </label>
          <input type="text" className="form-control mb-2" 
                onChange={handlePasswordChange}
                />
          <div className="row justify-content-center mt-2 ">
            <div className="col-6 col-md-5 mb-2">
              <button type="submit" className={`btn btn-grd-primary btn-sm w-10 ${isSubmitDisabled ? 'disabled' : ''}`}
                    disabled={isSubmitDisabled}>
                Okay
              </button>
            </div>
            <div className="col-3 col-md-6 mb-2">
              <button type="submit" className="btn btn-grd-inverse btn-sm w-10 " onClick={handleCancel}>
                Cancel
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
)}
{/*  */}
<div className="card">
  <div className="card-header"
                           onClick={toggleAppeal}
                           style={{ cursor: "pointer" }}
                         >
    <h5>Set Appeal Parameters</h5>
  </div>
  {showAppeal && (
  <div className=" form-group row text-center ml-2">

  <label className=" col-form-label mt-2 ">Min RV</label>

    <div className="col-sm-3  ">

      <input className="form-control mt-2" name="ward" id="ward">
      </input>
      <span className="messages"></span>
    </div>

    <label className="col-form-label mt-1">Max Year</label>

    <div className="col-sm-3 mt-2">
      <input className="form-control" name="fromProperties" id="fromProperties">
      </input>
      <span className="messages"></span>
    </div>

   
  
    <div className="col-md-3 mt-2">
      <button type="button" className="btn btn-grd-success" onClick={handleSave}>
        Save
      </button>
      <span className="messages"></span>
    </div>
  </div>
  )}
</div>
{/*  */}

                      

                      </div>
                      {/* 2nd */}
                      <div className="col-md-6">
                       <h6> Rentaintion Factor Wise</h6>
                       <div class="dt-responsive table-responsive" style={{maxHeight: "320px", overflow: "auto"}}>
                        <table id="order-table" class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">From Factor</th>
                              <th className="font-weight-bold">To Factor</th>
                              <th className="font-weight-bold">Factor Value</th>

                            </tr>
                          </thead>
                          <tbody>
                          
                           
                            <tr>
                              <td>0</td>
                              <td>0</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>0</td>
                              <td>0</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>0</td>
                              <td>0</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>0</td>
                              <td>0</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>0</td>
                              <td>0</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>0</td>
                              <td>0</td>
                              <td>1.2</td>
                            </tr>
                            <tr>
                              <td>0</td>
                              <td>0</td>
                              <td>1.2</td>
                            </tr>
                        
                          </tbody>
                        </table>
                      </div> 
                        
                      <div className="col-md-4 mt-1 mx-auto">
      <button type="button" className="btn btn-grd-success" onClick={handleRedirect}>
        Change Factor
      </button>
      <span className="messages"></span>
    </div>




                        </div>

                      {/*  */}
                    </div>
                  </form>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default AutoAppeal;
