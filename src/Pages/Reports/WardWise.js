import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WardWise = () => {
  const [selectDemand, setSelectDemand] = useState("");

  const [financeYear, setFinanceYear] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [todate, setToDate] = useState("");
  const [AllWard, setAllWard] = useState("");
  const [selectField, setSelectField] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const [selectedWard, setSelectedWard] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (ward) => {
    const updatedSelectedWard = selectedWard.includes(ward)
      ? selectedWard.filter((selected) => selected !== ward)
      : [...selectedWard, ward];

    setSelectedWard(updatedSelectedWard);
  };

  const handleAllWardsChange = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);

    if (isChecked) {
      // If "All Wards" is checked, select all wards
      setSelectedWard([...Array(20).keys()].map((number) => `${number + 1}`));
    } else {
      // If "All Wards" is unchecked, deselect all wards
      setSelectedWard([]);
    }
  };
  
  //show 
  const [showField, setShowField] = useState(false);
  const toggleField = () => {
    setShowField(!showField);
  };
  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Ward Wise</h5>
                </div>
                <div className="card-block">
                  <form>
                    {/* <div>
                      <Link to="/propertyWise">
                        <span>Property Wise</span>
                      </Link>
                      <Link to="/wardWise">
                        <span className="mx-4 ">Ward Wise</span>
                      </Link>
                      <Link to="/smsWise">
                        <span>SMS to Defaulter</span>
                      </Link>
                    </div> */}
                    {/* <div className="d-flex flex-row mt-4">

                    <h6 className=" text-info">Property Deatils</h6>
</div> */}
                    <div className="form-group row mt-4 ml-2">
                      <label className="col-1-md-1  ml-2 mt-2">
                        Select Demand Type
                      </label>
                      <div className="col-md-3">
                        <select
                          className="form-control "
                          name="wdName"
                          type="checkbox"
                          id="wdName"
                          value={selectDemand}
                          onChange={(e) => setSelectDemand(e.target.value)}
                        >
                          <option>Select</option>
                          <option>Current Demand</option>
                          <option>Pending Demand</option>
                          <option>Total Demand</option>
                          <option>Current Collection</option>
                          <option>Pending Collection</option>
                          <option>Total Collection</option>
                          <option>Out Standing Current Balance</option>
                          <option>Out Standing Pending Balance</option>
                          <option>Out Standing Total Balance</option>
                          <option>Ghosehwara</option>
                          <option>Advance Collection</option>
                          <option>Miscellaneouse Fee</option>


                        </select>
                      </div>

                      <label className="col-md-2 col-form-label mt-2">
                        Finance Year
                      </label>
                      <div className="col-md-3">
                        <select
                          className="form-control "
                          name="wdName"
                          id="wdName"
                          value={financeYear}
                          onChange={(e) => setFinanceYear(e.target.value)}
                        >
                          <option>2017-2018</option>
                          <option>2018-2019</option>
                          <option>2019-2020</option>
                          <option>2020-2021</option>
                          <option>2021-2022</option>
                          <option>2022-2023</option>
                          <option>2023-2024</option>

                        </select>
                      </div>
                    </div>
                    {/*  */}

                    <div className="ml-2 form-group row ml-1 align-items-center">
  <h6 className="mt-2 ml-2 text-info ">Data:</h6>
  
 
    <div className="ml-2">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" 
      onChange={(e) => setSelectDate(e.target.value)}/>
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>      Select Data</span>
                                </label>
                              </div>
                            </div>

                      <label className="col-md-1 mt-2">From Date</label>
                      <div className="col-md-2">
                        <input
                          className="form-control"
                          type="text"
                          id="txtFDate"
                          placeholder="Enter Date"
                          name="fromDate"
                         
                          onChange={(e) => setFromDate(e.target.value)}
                        />
                      </div>
                     

                      <label className="col-md-1 mt-2">To Date</label>
                      <div className="col-md-2">
                        <input
                          className="form-control"
                          type="text"
                          name="ToDate"
                          id="txtTDate"
                          value={todate}
                          placeholder="Enter Date"

                          onChange={(e) => setToDate(e.target.value)}
                        />
                      </div>
                    <h6 className="mx-2 mt-2 text-info">Select Ward:</h6>

     
  <div className="">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" 
      checked={selectAll}
      onChange={handleAllWardsChange}/>
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>    All Wards
</span>
                                </label>
                              </div>
                            </div>

      <div
        className=" col-md-1 "
        style={{
          maxHeight: "60px",
          overflowY: "auto",
          border: "2px solid #ccc",
        }}
      >
        {[...Array(20).keys()].map((number) => (
          <div key={number} className="form-check mt-2">
            <input
              type="checkbox"
              className="form-check-input"
              id={`ward${number + 1}`}
              checked={selectAll || selectedWard.includes(`${number + 1}`)}
              onChange={() => handleCheckboxChange(`${number + 1}`)}
            />
            <label htmlFor={`ward${number + 1}`} className="form-check-label">
              {number + 1}
            </label>
          </div>
        ))}
      </div>
    </div>
{/*  */}
<div className="card">
                          <div
                           className="card-header"
                           onClick={toggleField}
                           style={{ cursor: "pointer" }}
                         >                            <h5>Select Field:</h5>
                         </div>

    {/* <label className="ml-3  font-weight-bold text-info">Select Field :</label> */}
    {showField && (
<div className=" row ml-3 ">


  <div className="from-group row d-flex mt-2  align-items-center ">
  <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Sr.No.</span>
                                </label>
                              </div>
                            </div>  <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Ward No.</span>
                                </label>
                              </div>
                            </div>  <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Property Tax</span>
                                </label>
                              </div>
                            </div>  <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Water Bill</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>No Of Properties</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Employee Tax</span>
                                </label>
                              </div>
                            </div>

                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Water Benefits</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Year</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Major Building</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Fire</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Sewage Disp</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Notice Fee</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Old RV</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Tree</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Warrent Fee</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Old Prop. Tax</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Light</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Old Tax</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Road</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Tax 1</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Tax 2</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Tax 3</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Tax 4</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Tax 5</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Sanitationx</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>SP.Water</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>SP.Eduaction Tax</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Discount</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Interest</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Drain</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>  New RV</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>New Tax</span>
                                </label>
                              </div>
                            </div> <div className="col-sm-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Net Total</span>
                                </label>
                              </div>
                            </div> 
</div>
<div className="col-md-12 ml-2 d-flex justify-content-center">
  <div className="row ">
    <div className="col-md-5 col-sm-12 mb-2">
      <button type="submit" className="btn text-center  btn-block btn-grd-info waves-effect waves-light w-100">
        Show
      </button>
    </div>
    <div className="col-md-7 col-sm-12 mb-2">
      <button type="submit" className="btn  btn-grd-primary btn-block waves-effect waves-light w-100">
        Export To Excel
      </button>
    </div>
  </div>
</div>


</div>

    )}
</div>
  
{/*  */}
 

      {/* <div className="form-group">
        <input
          className="form-control"
          type="text"
          style={{ width: '25cm', height: '10cm' }}  // Adjust the width and height as needed
        />
      </div> */}
<div className="row ">
    <div className="col-md-12  ">
     
    <div class="dt-responsive table-responsive "style={{maxHeight: "270px", overflow: "auto"}}>
                    <table class="table table-striped table-bordered nowrap">
                      <thead>
                        <tr className="text-center">
                          <th  className="font-weight-bold"  >Sr.No</th>
                          {/* <tr style={{ textAlign: "center" }}> */}
                          <td  className="font-weight-bold" >WardNo.</td>
                          <td  className="font-weight-bold" >TotalProperty</td>  
                          <td  className="font-weight-bold">Year</td>
                          <td  className="font-weight-bold">Property</td>
                          <td  className="font-weight-bold">Education</td>
                          <td  className="font-weight-bold">Employment</td>
                          <td  className="font-weight-bold">TreeCess</td>
                          <td  className="font-weight-bold">SpEducation</td>
                          <td  className="font-weight-bold">Sanitation</td>
                          <td  className="font-weight-bold">DrainCess</td>
                          <td  className="font-weight-bold" >SpWaterCess</td>
                          <td  className="font-weight-bold">RoadCess</td>
                          <td  className="font-weight-bold">FireCess</td>
                          <td  className="font-weight-bold">LightCess</td>
                          <td  className="font-weight-bold">WaterBenfits</td>
                          <td  className="font-weight-bold">MajorBuilding</td>
                          <td  className="font-weight-bold">SewageDispCess</td>
                          <td  className="font-weight-bold">WaterBill</td>
                          <td  className="font-weight-bold">Tax1</td>
                          <td  className="font-weight-bold">Tax2</td>
                          <td  className="font-weight-bold">Tax3</td>
                          <td  className="font-weight-bold">Tax4</td>
                          <td  className="font-weight-bold">Tax5</td>
                          <td  className="font-weight-bold">Total</td>
                          <td  className="font-weight-bold">MacellaneousFee</td>
                          <td  className="font-weight-bold">Interest</td>
                          <td  className="font-weight-bold">Discount</td>
                          <td  className="font-weight-bold">NoticeFee</td>
                          <td  className="font-weight-bold">WarrentFee</td>
                          <td  className="font-weight-bold">NetTotal</td>
                          
                        </tr>
                      
                       </thead>
    <tbody>
    <tr className="text-center">  
                       <th>Current Demand</th>
                       <td>1</td>
                          <td>1238</td>
                          <td>2017</td>
                          <td>1289255</td>
                          <td>482548</td>
                          <td>88053</td>
                          <td>53870</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>21660</td>

                          <td>26523</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td> 
                          <td>1961909</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>1961909</td> 

</tr>                      </tbody>

<tbody>
                    <tr className="text-center">  
                       <th>Pending Demand</th>
                       <td>1</td>
                          <td>0</td>
                          <td>2017</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>

                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 

</tr>                      </tbody>

<tbody>
    <tr className="text-center">  
                       <th>Total</th>
                       <td>1</td>
                          <td>1238</td>
                          <td>2017</td>
                          <td>1289255</td>
                          <td>482548</td>
                          <td>88053</td>
                          <td>53870</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>21660</td>

                          <td>26523</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td> 
                          <td>1961909</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>1961909</td> 

</tr>                      </tbody>
                   





                   



                   
<tbody>
    <tr className="text-center">  
                       <th></th>
                       <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>

                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td> 
                          <td></td> 
                          <td></td> 
                          <td></td> 
                          <td></td> 
                          <td></td> 
                          <td></td> 
                          <td></td> 

</tr>                      </tbody>


<tbody>
    <tr className="text-center">  
                       <th>Current Demand</th>
                       <td>2</td>
                          <td>1640</td>
                          <td>2017</td>
                          <td>2664167</td>
                          <td>848515</td>
                          <td>76074</td>
                          <td>11621</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>21660</td>

                          <td>26523</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td> 
                          <td>1961909</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>1961909</td> 

</tr>                      </tbody>

<tbody>
                    <tr className="text-center">  
                       <th>Pending Demand</th>
                       <td>2</td>
                          <td>0</td>
                          <td>2017</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>

                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 

</tr>                      </tbody>

<tbody>
    <tr className="text-center">  
                       <th>Total</th>
                       <td>2</td>
                          <td>0</td>
                          <td>2017</td>
                          <td>2664167</td>
                          <td>848515</td>
                          <td>76074</td>
                          <td>116421</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>21660</td>

                          <td>26523</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td> 
                          <td>1961909</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>1961909</td> 

</tr>                      </tbody>
                   
<tbody>
    <tr className="text-center">  
                       <th></th>
                       <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>

                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td> 
                          <td></td> 
                          <td></td> 
                          <td></td> 
                          <td></td> 
                          <td></td> 
                          <td></td> 
                          <td></td> 

</tr>                      </tbody>

<tbody>
    <tr className="text-center">  
                       <th>Current Demand</th>
                       <td>3</td>
                          <td>1640</td>
                          <td>2017</td>
                          <td>2664167</td>
                          <td>848515</td>
                          <td>76074</td>
                          <td>11621</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>21660</td>

                          <td>26523</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td> 
                          <td>1961909</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>1961909</td> 

</tr>                      </tbody>

<tbody>
                    <tr className="text-center">  
                       <th>Pending Demand</th>
                       <td>3</td>
                          <td>0</td>
                          <td>2017</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>

                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 

</tr>                      </tbody>

<tbody>
    <tr className="text-center">  
                       <th>Total</th>
                       <td>3</td>
                          <td>0</td>
                          <td>2017</td>
                          <td>2664167</td>
                          <td>848515</td>
                          <td>76074</td>
                          <td>116421</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>21660</td>

                          <td>26523</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td> 
                          <td>1961909</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>0</td> 
                          <td>1961909</td> 

</tr>                      </tbody>
                     
                    </table>
                  </div>



    </div></div>


    {/*  */}

  
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
export default WardWise;
