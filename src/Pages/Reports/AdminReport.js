import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const AdminReport = () => {
  const [selectedOverlay, setSelectedOverlay] = useState(null);
  const [selectedWards, setSelectedWards] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isPrime, setIsPrime] = useState("");

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

  //exoprt
  const handleExportButtonClick = () => {
    const data1 = [["    ", " ", "AdminReport  ", "   "], []];

    const ws1 = XLSX.utils.aoa_to_sheet(data1);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, "AdminReport");

    XLSX.writeFile(wb, "exported_data.xlsx");
  };

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Admin Reports</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="sub-title font-weight-bold">
                      Choose Report
                    </div>
                    <div className="row form-group">
                      <div className="col-sm-5 ml-2 d-flex">
                        <div className="form-group row">
                          <div className="form-radio">
                            <div className="radio radio-inline mx-3">
                              <label
                                className="form-check-label"
                                htmlFor="singleProperty"
                              >
                                <input
                                  type="radio"
                                  name="propertyType"
                                  id="singleProperty"
                                  value=""
                                  onChange={handleRadioChange}
                                />
                                <i className="helper"></i> Data Entry History
                              </label>
                            </div>

                            <div className="radio radio-inline mx-3">
                              <label
                                className="form-check-label"
                                htmlFor="propertyRange"
                              >
                                <input
                                  type="radio"
                                  name="propertyType"
                                  id="propertyRange"
                                  value=""
                                  onChange={handleRadioChange}
                                />
                                <i className="helper"></i> User Login-Logout
                              </label>
                            </div>
                          </div>
                        </div>{" "}
                      </div>

                      {/*  */}
                      <div className="col-md-6 ">
                        <div className="card mt-2">
                          {selectedOverlay === "singleProperty" && (
                            <>
                              <div className="overlay-window d-flex justify-content-center">
                                <div className="col-sm-4 text-center">
                                  <label htmlFor="propertyNumber">
                                    From Date
                                  </label>

                                  <div
                                    className="form-group"
                                    style={{ marginTop: "3%" }}
                                  >
                                    <input
                                      className="form-control text-center "
                                      id="dataEntry"
                                      name="propertyNumberFrom"
                                      type="date"
                                    ></input>
                                  </div>
                                </div>
                                <div className="col-sm-4 text-center">
                                  <label htmlFor="propertyNumber">
                                    To Date
                                  </label>

                                  <div
                                    className="form-group"
                                    style={{ marginTop: "3%" }}
                                  >
                                    <input
                                      className="form-control text-center "
                                      id="dataEntryTo"
                                      type="date"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="justify-content-center mb-2">
                                <div
                                  className="d-flex justify-content-center"
                                  style={{
                                    display: "flex",
                                    marginTop: "-19px",
                                  }}
                                >
                                  <div className="col-md-2 mt-2">
                                    <button
                                      type="submit"
                                      className="btn btn-grd-primary"
                                    >
                                      Show
                                    </button>
                                    <span className="messages"></span>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {/* </div> */}
                          {/* <div className="card "> */}

                          {selectedOverlay === "propertyRange" && (
                            <>
                              <div className="overlay-window d-flex justify-content-center">
                                <div className="col-sm-4 text-center">
                                  <label htmlFor="propertyNumber ">
                                    Select User:
                                  </label>

                                  <div className="form-group">
                                    <select
                                      className="form-control text-center "
                                      id="dataEntry"
                                      name="propertyNumberFrom"
                                    >
                                      <option>Administator</option>
                                      <option>Valuation2</option>
                                      <option>Valuation1</option>
                                      <option>RO</option>
                                      <option>Sagar Pudekar</option>
                                      <option>Samruddhi samarth</option>
                                      <option>Mayur Chakrawar</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="overlay-window d-flex justify-content-center"
                                style={{ display: "flex" }}
                              >
                                <div className="col-sm-4 text-center">
                                  <label htmlFor="propertyNumber">
                                    From Date
                                  </label>

                                  <div
                                    className="form-group"
                                    style={{ marginTop: "3%" }}
                                  >
                                    <input
                                      className="form-control text-center "
                                      id="dataEntry"
                                      name="propertyNumberFrom"
                                      type="date"
                                    ></input>
                                  </div>
                                </div>
                                <div className="col-sm-4 text-center">
                                  <label htmlFor="propertyNumber">
                                    To Date
                                  </label>

                                  <div
                                    className="form-group"
                                    style={{ marginTop: "3%" }}
                                  >
                                    <input
                                      className="form-control text-center "
                                      id="dataEntryTo"
                                      type="date"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="d-flex justify-content-center "
                                style={{ display: "flex", marginTop: "-19px" }}
                              >
                                <div className="col-md-2 mt-2 mb-2">
                                  <button
                                    type="submit"
                                    className="btn btn-grd-primary"
                                  >
                                    Show
                                  </button>
                                  <span className="messages"></span>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/*  */}
                    </div>

                    {/*  */}
                    <div className="sub-title font-weight-bold">Search On:</div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <div className="form-radio">
                            
                            <div className="radio radio-inline mx-3">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="helper"></i> Ward No.
                              </label>
                            </div>
                            <div className="radio radio-inline mx-3">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="helper"></i> Property No.
                              </label>
                            </div>
                            <div className="radio radio-inline mx-3">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="helper"></i> Owner Name
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="form-radio">
                            <div className="radio radio-inline mx-3  ">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="helper"></i> User Name
                              </label>
                            </div>
                            <div className="radio radio-inline mx-3">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="helper"></i> Screen Name
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 ">
                        <div className="card">
                          <div className="form-group row d-flex justify-content-center">
                            <div className="col-md-12">
                              <div className="col-sm-9 text-center">
                                <label className="col-form-label">
                                  Enter Search Text
                                </label>
                                <input
                                  className="form-control form-control-lg text-center"
                                  name="ward"
                                  id="ward"
                                />
                                <span className="messages"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Table */}
                    <div class="dt-responsive table-responsive">
                      <table class="table table-striped table-bordered nowrap">
                        <thead>
                          <tr>
                            <th className="font-weight-bold">isPrime</th>
                            <th className="font-weight-bold">शिर्षक</th>
                            <th className="font-weight-bold">पूर्ण नाव</th>
                            <th className="font-weight-bold">पत्त</th>
                            <th className="font-weight-bold">
                              दुकान/इमारतचे नाव
                            </th>
                            <th className="font-weight-bold">दुकान/Flat नं</th>
                            <th className="font-weight-bold">Title</th>
                            <th className="font-weight-bold">Full Name</th>
                            <th className="font-weight-bold">Address</th>
                            <th className="font-weight-bold">
                              Shop/Building Name
                            </th>
                            <th className="font-weight-bold">
                              Shop/FlatNumber
                            </th>

                            <th className="font-weight-bold">Floor</th>
                            <th className="font-weight-bold">Const.Year</th>
                            <th className="font-weight-bold">Const.Type</th>
                            <th className="font-weight-bold">Group</th>
                            <th className="font-weight-bold">Type Of Use</th>
                            <th className="font-weight-bold">
                              Carpet Area(ft)
                            </th>
                            <th className="font-weight-bold">
                              Carpet Area(mtr)
                            </th>
                            <th className="font-weight-bold">Rooms</th>
                            <th className="font-weight-bold">Registration</th>
                            <th className="font-weight-bold">Renter</th>
                            {/* <th>प्रथम नाव</th> */}
                            {/* <th>मधले नाव</th> */}
                            <th className="font-weight-bold">पूर्ण नाव</th>
                            <th className="font-weight-bold">
                              Calculate Rent(Rs)
                            </th>
                            <th className="font-weight-bold">
                              Non Calculate Rent(Rs)
                            </th>
                            <th className="font-weight-bold">Full Name</th>
                            <th className="font-weight-bold">Occupier</th>
                            <th className="font-weight-bold">
                              भोगवटादार चे पूर्ण नाव
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ textAlign: "center" }}>
                            <td>
                              <label>
                                <input
                                  type="checkbox"
                                  checked={isPrime}
                                  onChange={(e) => setIsPrime(e.target.checked)}
                                />
                              </label>
                            </td>
                            <td>श्री </td>
                            <td>देविदास सुदाम पुरी</td>
                            <td>Pune</td>
                            <td></td>
                            <td></td>
                            <td>Mr</td>
                            <td>Devidas sudam puri</td>
                            <td>Pune</td>
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
                          </tr>

                          <tr style={{ textAlign: "center" }}>
                            <td>
                              <label>
                                <input
                                  type="checkbox"
                                  checked={isPrime}
                                  onChange={(e) => setIsPrime(e.target.checked)}
                                />
                              </label>
                            </td>
                            <td>श्री </td>
                            <td>देविदास सुदाम पुरी</td>
                            <td>Pune</td>
                            <td></td>
                            <td></td>
                            <td>Mr</td>
                            <td>Devidas sudam puri</td>
                            <td>Pune</td>
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
                          </tr>

                          <tr style={{ textAlign: "center" }}>
                            <td>
                              <label>
                                <input
                                  type="checkbox"
                                  checked={isPrime}
                                  onChange={(e) => setIsPrime(e.target.checked)}
                                />
                              </label>
                            </td>
                            <td>श्री </td>
                            <td>देविदास सुदाम पुरी</td>
                            <td>Pune</td>
                            <td></td>
                            <td></td>
                            <td>Mr</td>
                            <td>Devidas sudam puri</td>
                            <td>Pune</td>
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
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/*export */}
                    <div className="row  justify-content-center">
                      <div className="col-md-3 justify-content-center">
                        <button
                          type="button"
                          className="btn btn-grd-primary   "
                          onClick={handleExportButtonClick}
                        >
                          Export
                        </button>
                      </div>
                    </div>
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

export default AdminReport;
