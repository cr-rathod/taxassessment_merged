import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AppealA = () => {
  const [zoneNo, setZoneNo] = useState("");
  const [wardNo, setWardNo] = useState("");

  const [propertyNo, setPropertyNo] = useState("");
  const [PartitionNo, setPartitionNo] = useState("");
  const [OwnerName, setOwnerName] = useState("");
  const [renterName, setRenterName] = useState("");
  const [year, setYear] = useState("");

  const [Functionality, setFunctionality] = useState("");
  const [setAs, setSetAs] = useState("");
  const [incre, setIncre] = useState("");
  const [des, setDes] = useState("");
  const [RV, setRV] = useState("");
  const [date, setDate] = useState("");

  const [attachedFilesCount, setAttachedFilesCount] = useState(0);

  const [reason, setReason] = useState("");
  const [reasonManuallySelected, setReasonManuallySelected] = useState(false); 
  const handleFunctionalityChange = (selectedFunctionality) => {
    setFunctionality(selectedFunctionality);

    if (!reasonManuallySelected) {
      setReason(selectedFunctionality);
    }
  };

  // Function to handle changes in Reason
  const handleReasonChange = (selectedReason) => {
    setReasonManuallySelected(true);
    setReason(selectedReason);
  };

  //attached
  const fileInputRef = useRef(null);

  const handleAttachmentClick = () => {
    fileInputRef.current.click();
    setAttachedFilesCount(attachedFilesCount + 1);
  };

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Appeal</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="container">
                      <div className="row">
                        <div
                          className="col-md-6 "
                          style={{ marginLeft: "-30px" }}
                        >
                          <h6 className="text-info">Prime Information</h6>
                          <div className="d-flex ">
                            <div className="form-group row ml-1">
                              <div className="col-1-md-1 p-1">
                                <div className="form-group text-center">
                                  <label>Year</label>
                                  <select
                                    className="form-control   p-1"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    style={{ height: "34px" }}
                                  >
                                    <option>2022-2023</option>
                                    <option>2023-2024</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-2 p-1 ">
                                <div className="form-group text-center ">
                                  <label>ZoneNo.</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={4}
                                    onChange={(e) => setZoneNo(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-2 p-1">
                                <div className="form-group text-center">
                                  <label>WardNo.</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={1}
                                    onChange={(e) => setWardNo(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-2 p-1">
                                <div className="form-group text-center">
                                  <label>PropertyNo.</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={1}
                                    onChange={(e) =>
                                      setPropertyNo(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-md-2 p-1">
                                <div className="form-group text-center">
                                  <label>PartitionNo.</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={PartitionNo}
                                    onChange={(e) =>
                                      setPartitionNo(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" form-group row  ml-1">
                            <label className="col-1-md-2 mt-2">
                              Owner Name :
                            </label>
                            <div className="col-md-7">
                              <input
                                type="text"
                                className="form-control"
                                name="wdName"
                                id="wdName"
                                value={"देविदास सुदाम पुरी"}
                                onChange={(e) => setOwnerName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className=" form-group row ml-1">
                            <label className="col-1-md-2  mt-2">
                              Renter Name :
                            </label>
                            <div className="col-md-7">
                              <input
                                type="text"
                                className="form-control"
                                name="wdName"
                                id="wdName"
                                value={"दिनेश. घोडके"}
                                onChange={(e) => setRenterName(e.target.value)}
                              />
                            </div>
                          </div>
                          <h6 className="text-info mt-2 ">Appeal Status: </h6>

                          <div className="from-group row ml-2  ">
                            <div className="col-md-4">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span> Retain(Appeal)</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4 ">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span> Hearing</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span> Court Result</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-4 ">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span> Remission</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-5  ">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span> Appeal Committee</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*2nd heading  */}
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group mb-1">
                                <label className="text-info mb-0">
                                  Functionality Appeal Process:
                                </label>
                                <select
                                  className="bg-info form-control mb-1"
                                  name="functionality"
                                  value={Functionality}
                                  onChange={(e) =>
                                    handleFunctionalityChange(e.target.value)
                                  }
                                >
                                  <option>Rentention</option>
                                  <option>Hearing</option>
                                  <option>AppealCommittee</option>
                                  <option>Remission</option>
                                </select>
                              </div>
                              <div className="form-group mb-1">
                                <label className="mb-0">SetAs</label>
                                <div className="d-flex align-items-center">
                                  <select
                                    className="form-control mr-1 mb-0"
                                    name="functionality"
                                    value={setAs}
                                    onChange={(e) => setSetAs(e.target.value)}
                                    style={{ height: "40px", width: "150%" }}

                                  >
                                    <option></option>
                                    <option>1.2</option>
                                  </select>
                                 
                                  <button
                                    className="btn text-center btn-sm btn-grd-info waves-effect waves-light"
                                    style={{ height: "40px" , width: "22%"}}
                                  >
                                    Set
                                  </button>
                                </div>

                                {/* </div>
          <div className="row"> */}
                                <div className="row ml-1 mt-1">
                                  <div className="form-check mr-2">
                                    <input
                                      type="radio"
                                      className="form-check-input "
                                      name="increment"
                                      value="increment"
                                      onChange={(e) => setIncre(e.target.value)}
                                    />
                                    <label className="form-check-label">
                                      Increment
                                    </label>
                                  </div>

                                  <div className="form-check mx-1">
                                    <input
                                      type="radio"
                                      className="form-check-input"
                                      name="increment"
                                      value="des"
                                      onChange={(e) => setIncre(e.target.value)}
                                    />
                                    <label className="form-check-label">
                                      Decrement
                                    </label>
                                  </div>

                                  <select
                                    className="form-control ml-1 mt-1"
                                    name="decrementOptions"
                                    value={des}
                                    onChange={(e) => setDes(e.target.value)}
                                    style={{ height: "40px", width: "77%" }}
                                  >
                                    <option></option>
                                    <option>5%</option>
                                    <option>6%</option>

                                  </select>

                                  <button
                                    className="btn text-center btn-sm btn-grd-info waves-effect waves-light"
                                    style={{ height: "40px" , width: "17%"}}
                                  >
                                    Set
                                  </button>
                                </div>
                              </div>
                              <div className=" form-group row mt-1">
                                <div className=" col-md-5">
                                  {/* <div className="form-check  "> */}
                                    <input
                                      type="text"
                                      className="form-check-input  ml-4 text-center mx-2"

                                      name="RV"
                                      value={"6708"}
                                      onChange={(e) => setRV(e.target.value)}
                                    >
                                     </input>
                                    <label className="mt-2    ">RV:</label>
                                  {/* </div> */}
                                </div>

                                {/* <div className="col-md-1"></div> */}

                                <button
                                    className="btn text-center btn-sm btn-grd-info waves-effect waves-light"
                                    style={{
                                    height: "40px",
                                    marginLeft: "110px",
                                    width: "16%"
                                  }}
                                >
                                  Set
                                </button>
                              </div>
                            </div>
                            {/*  */}
                            <div className="col-md-6 ">
                              <div className="row ml-1">
                                <label className="mt-3 ml-3">Issued By:</label>
                                <div className="col-md-7">
                                  <input
                                    type="text"
                                    className="form-control form-control-sm mt-3 text-center"
                                    name="issuedBy"
                                    value={"7501"}
                                    onChange={(e) =>
                                      handleFunctionalityChange(e.target.value)
                                    }
                                  />
                                </div>

                                <label className="mt-3 ml-3">Reason:</label>
                                <div className="col-md-8">
                                  <select
                                    className="form-control mt-1"
                                    name="reason"
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                  >
                                    <option>Rentention</option>
                                    <option>Hearing</option>
                                    <option>AppealCommittee</option>
                                    <option>Remission</option>
                                  </select>
                                </div>
                              </div>

                              <div className=" form-group row mt-3 ml-2">
                                <label className="col-1-md-1 mx-1 ml-3 mt-2">
                                  Date:
                                </label>
                                <div className="col-md-8 ml-2">
                                  <input
                                    className="form-control "
                                    type="text"
                                    name="Date"
                                    id="txtDate"
                                    value={date}
                                    placeholder="Enter Date"

                                    onChange={(e) => setDate(e.target.value)}
                                  />
                                </div>
                              </div>
                              {/*  */}
                              <div className=" form-group mt-4 row  ml-2">
                                <div className="  d-flex justify-content-center align-items-center   ">
                                  <div className="col d-flex justify-content-end align-items-start ">
                                    <button
                                      type="submit"
                                      className=" btn btn-sm btn-grd-success waves-effect waves-light"
                                    >
                                      Apply Policy
                                    </button>
                                  </div>

                                  <div className="col d-flex justify-content-end align-items-start ">
                                    <button
                                      type="submit"
                                      className="  btn btn-sm btn-grd-danger waves-effect waves-light"
                                    >
                                      Delete Policy
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 3rd */}

                        {/* <div className="from-group row  d-flex align-items-center ">
                          <h6 className="text-info mt-2 ">Appeal Status: </h6>

                        
 <div className="col-md-3 ">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" 
      />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>                             Retain(Appeal)
</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-3 ">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" 
      />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>                           Hearing
</span>
                                </label>
                              </div>
                            </div>
                          
                            <div className="col-md-3  ">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" 
      />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>                           Appeal Committee
</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" 
      />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>                           Court Result
</span>
                                </label>
                              </div>
                            </div>
                         
                            <div className="col-md-3 ">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" 
      />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>                           Remission
</span>
                                </label>
                              </div>
                            </div>
                         
                        </div> */}
                      </div>
                    </div>
                    {/* Assesment Year Slab */}
                    <hr />
                    <div className=" form-group row ml-4">
                      <h6 className="text-info ml-2 ">Assessment Year Slab</h6>

                      <div className="d-flex flex-wrap ">
                        <div className="col-md-1 col-4 mx-3 p-1">
                          <div className="form-group text-center">
                            <label className="font-weight-bold">OldRV</label>
                            <input
                              className="form-control text-center"
                              type="text"
                              value={0}
                            />
                          </div>
                        </div>
                        <div className="col-md-1 col-4 mx-3 p-1">
                          <div className="form-group text-center">
                            <label
                              className="font-weight-bold"
                              style={{ color: "orange" }}
                            >
                              NetRv
                            </label>
                            <input
                              className="form-control text-center"
                              type="text"
                              value={30887.0}
                            />
                          </div>
                        </div>
                        <div className="col-md-1 col-4 mx-3 p-1">
                          <div className="form-group  text-center">
                            <label
                              className="font-weight-bold  "
                              style={{ color: "skyblue" }}
                            >
                              RetainRV
                            </label>
                            <input
                              className="form-control text-center"
                              type="text"
                              value={1}
                            />
                          </div>
                        </div>
                        <div className="col-md-1 col-4 mx-3 p-1">
                          <div className="form-group text-center">
                            <label
                              className="font-weight-bold  "
                              style={{ color: "#32CD32" }}
                            >
                              HearingRV
                            </label>
                            <input
                              className="form-control text-center"
                              type="text"
                              value={PartitionNo}
                            />
                          </div>
                        </div>
                        <div className="col-md-1 col-4 mx-3 p-1">
                          <div className="form-group bg-pink text-center">
                            <label
                              className="font-weight-bold  "
                              style={{ color: "red" }}
                            >
                              AppealCommitteeRV
                            </label>
                            <input
                              className="form-control text-center"
                              type="text"
                              value={6177}
                            />
                          </div>
                        </div>
                        <div className="col-md-1   col-4 mx-3 p-1">
                          <div className="form-group text-center">
                            <label
                              className="font-weight-bold  "
                              style={{ color: "darkviolet" }}
                            >
                              CourtRv
                            </label>
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>
                        {/*  */}
                        <div className="col-md-2 col-4 mx-3 p-1 ml-4  mx-4">
                          <div className="form-group text-center">
                            <div>
                              <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={() =>
                                  setAttachedFilesCount(attachedFilesCount + 1)
                                }
                              />
                              <Link
                                className="text-primary font-weight-bold mt-3   "
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                }}
                                onClick={handleAttachmentClick}
                              >
                                Attach Document
                              </Link>
                              {attachedFilesCount >= 0 && (
                                <span className="ml-2  badge badge-danger col-md-4">
                                  {attachedFilesCount}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* table */}
                    <div class="dt-responsive table-responsive">
                      <table class="table table-striped table-bordered nowrap">
                        <thead>
                          <tr>
                            <th className="font-weight-bold">Property</th>
                            <th className="font-weight-bold">Edcation</th>
                            <th className="font-weight-bold">Sp Edu.</th>
                            <th className="font-weight-bold">Empl.</th>
                            <th className="font-weight-bold">Tree</th>
                            <th className="font-weight-bold">Fire</th>
                            <th className="font-weight-bold">Light</th>
                            <th className="font-weight-bold">Drain</th>
                            <th className="font-weight-bold">Road</th>
                            <th className="font-weight-bold">Sanitation</th>
                            <th className="font-weight-bold">W.Cess</th>
                            <th className="font-weight-bold">W.benfit</th>
                            <th className="font-weight-bold">W.Bill</th>
                            <th className="font-weight-bold">M.Building</th>
                            <th className="font-weight-bold">Sewage</th>
                            <th className="font-weight-bold">Health</th>
                            <th className="font-weight-bold">Total Tax</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td colSpan="7">
                              <span
                                className="font-weight-bold"
                                style={{ color: "orange" }}
                              >
                                Net Taxes:
                              </span>
                            </td>

                            {/* <td colSpan="10">
                              <label className="mx-2  ">RV: </label>
                              <input
                                type="text"
                                className="  form-control-sm-1 col-md-2  "
                                value={30887.0}
                                style={{ color: "orange" }}
                              />
                            </td> */}
                            <td colSpan="10">
                              <label className="mx-1 ">RV: </label>
                              <input
                                type="number"
                                className=" text-center form-control-sm-1 col-md-2 "
                                value="30887.0"
                                style={{ color: "orange" }}
                              />
                              <label className="mx-1 ">Date: </label>
                              <input
                                type="text"
                                className=" text-center form-control-sm-1 col-md-2 "
                                value=""
                                placeholder="Enter Date"

                                id="txtNDate"
                              />
                              <label className="mx-1 ">Remark: </label>
                              <input
                                type="text"
                                className=" text-center form-control-sm-1 col-md-5"
                                value=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>7413.00</td>
                            <td>4118.00</td>
                            <td>0.00</td>
                            <td>1030.00</td>
                            <td>309.00</td>
                            <td>154.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>13744.00</td>
                          </tr>
                        </tbody>
                        {/*  */}
                        <tbody>
                          <tr>
                            <td colSpan="7">
                              <span
                                className="font-weight-bold"
                                style={{ color: "skyblue" }}
                              >
                                Retain Rv:{" "}
                              </span>
                            </td>
                            <td colSpan="10">
                              <label className="mx-1 ">RV: </label>
                              <input
                                type="number"
                                className=" text-center form-control-sm-1 col-md-2 "
                                value="5600"
                                style={{ color: "skyblue" }}
                              />
                              <label className="mx-1 ">Date: </label>
                              <input
                                type="text"
                                className=" text-center form-control-sm-1 col-md-2 "
                                value=""
                                placeholder="Enter Date"

                                id="txtRDate"
                              />
                              <label className="mx-1 ">Remark: </label>
                              <input
                                type="text"
                                className=" text-center form-control-sm-1 col-md-5"
                                value=""
                              />
                            </td>
                          </tr>
                          <tr>
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
                          </tr>
                        </tbody>
                        {/*  */}
                        <tbody>
                          <tr>
                            <td colSpan="7">
                              <span
                                style={{
                                  color: "#32CD32",
                                }}
                                className="font-weight-bold"
                              >
                                Hearing Taxes:
                              </span>
                            </td>
                            <td colSpan="10">
                              <label className="mx-1 ">RV: </label>
                              <input
                                type="number"
                                className=" text-center form-control-sm-1 col-md-2 "
                                value="7899"
                                style={{
                                  color: "#32CD32",
                                }}
                              />
                              <label className="mx-1 ">Date: </label>
                              <input
                                type="text"
                                className=" text-center form-control-sm-1 col-md-2 "
                                value=""
                                id="txtHDate"
                                placeholder="Enter Date"

                                style={{
                                  color: "#32CD32",
                                }}
                              />
                              <label className="mx-1 ">Remark: </label>
                              <input
                                type="text"
                                className="text-center  form-control-sm-1 col-md-5"
                                value=""
                                style={{
                                  color: "#32CD32",
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
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
                          </tr>
                        </tbody>
                        {/*  */}
                        <tbody>
                          <tr>
                            <td colSpan="7">
                              <span
                                style={{
                                  color: "red",
                                }}
                                className="font-weight-bold"
                              >
                                Appeal Taxes:
                              </span>
                            </td>
                            <td colSpan="10">
                              <label className="mx-1 ">RV: </label>
                              <input
                                type="number"
                                className=" text-center form-control-sm-1 col-md-2 "
                                value="9958"
                                style={{ color: "red" }}
                              />
                              <label className="mx-1 ">Date: </label>
                              <input
                                type="text"
                                className="text-center  form-control-sm-1 col-md-2 "
                                value=""
                                id="txtADate"
                                placeholder="Enter Date"

                                style={{ color: "red" }}
                              />
                              <label className="mx-1 ">Remark: </label>
                              <input
                                type="text"
                                className=" text-center form-control-sm-1 col-md-5"
                                value=""
                                style={{ color: "red" }}
                              />
                            </td>
                          </tr>
                          <tr>
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
                          </tr>
                        </tbody>
                        {/*  */}
                        <tbody>
                          <tr>
                            <td colSpan="7">
                              <span
                                style={{
                                  color: "darkviolet",
                                }}
                                className="font-weight-bold"
                              >
                                Court RV:
                              </span>
                            </td>
                            <td colSpan="10">
                              <label className="mx-1 ">RV: </label>
                              <input
                                type="number"
                                className=" text-center form-control-sm-1 col-md-2 "
                                value="5889"
                                style={{ color: "darkviolet" }}
                              />
                              <label className="mx-1 ">Date: </label>
                              <input
                                type="text"
                                id="txtCDate"
                                className=" text-center form-control-sm-1 col-md-2 "
                                value=""
                                placeholder="Enter Date"
                                style={{ color: "darkviolet" }}
                              />
                              <label className="mx-1 ">Remark: </label>
                              <input
                                type="text"
                                className=" text-center form-control-sm-1 col-md-5"
                                value=""
                                style={{ color: "darkviolet" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                        {/* Footer */}
      <div className="border " style={{backgroundColor:"whitesmoke"}} >
                                                    <div class="card-footer ">
                                                    </div>
                                                    <div class="card-block mb-6">
                                                       
                                                        {/* <h6 class="m-t-20 f-w-600">Usage:</h6> */}
                                                      

                                                        <div className="row  justify-content-center">
                                                        <div className="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
       First
     </button>
   </div>
   
   <div className="col-5 col-sm-4 col-md-2 col-lg-2 col-xl-2">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
       &lt;&lt; Previous
     </button>
   </div>

   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <input
       type="number"
       className="btn btn-grd-success btn-sm btn-block"
       value={"1"}
     /></div>
   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
      10590
     </button>
   </div>

   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
       Next &gt;&gt;
     </button>
   </div>

   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
       Last
     </button>
   </div>
   
  

  
   
   
 </div>
                                                        
                                                       
                                                    </div>
                                                </div>
{/* Footer End */}
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
export default AppealA;
