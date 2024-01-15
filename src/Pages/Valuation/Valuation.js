import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Valuation = () => {
  const [zoneNO, setZoneNo] = useState("");
  const [wardNo, setWardNo] = useState("");
  const [propertyNo, setPropertyNo] = useState("");
  const [partitionNo, setPartitionNo] = useState("");
  const [cityNo, setCityNo] = useState("");
  const [plotNo, setPlotNo] = useState("");
  const [builtUpArea, setBuiltUpArea] = useState("");
  const [carpetArea, setCarpetArea] = useState("");
  const [plotArea, setPlotArea] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [constructionType, setConstructionType] = useState("");

  const [oldRV, setOldRV] = useState("");
  const [oldALV, setOldALV] = useState("");
  const [oldTax, setOldTax] = useState("");
  const [newALV, setNewALV] = useState("");
  const [netRV, setNetRV] = useState("");
  const [retainRV, setRetainRV] = useState("");
  const [retainReason, setRetainReason] = useState("");
  const [hearing, setHearing] = useState("");
  const [hearingReason, setHearingReason] = useState("");
  const [AppCommit, setAppCommit] = useState("");
  const [AppCommitReason, setAppCommitReason] = useState("");
  const [remissionRV, setRemissionRV] = useState("");
  const [remissionReason, setRemissionReason] = useState("");

  const [showOwnerRenterTable, setShowOwnerRenterTable] = useState(true);

  const toggleTable = (isOwnerRenter) => {
    setShowOwnerRenterTable(isOwnerRenter);
  };

  const [isImageDisplayOpen, setIsImageDisplayOpen] = useState(false);

  const toggleImageDisplay = () => {
    setIsImageDisplayOpen(!isImageDisplayOpen);
  };



  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Basic Property Details</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="row">
                      <span className="col-md-1 p-4  bg-lg font-weight-bold h6 mt-3 ">
                        New  <span className="mx-1">
                        Old </span>
                      </span>

                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>ZoneNo.</label>
                          <input
                            className="form-control"
                            type="text"
                            // value={zoneNO}
                            value={4}
                            onChange={(e) => setZoneNo(e.target.value)}
                          />
                          <input
                            className="form-control "
                            type="text"
                            // value={zoneNO}
                            value={1}
                            onChange={(e) => setZoneNo(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>WardNo.</label>
                          <input
                            className="form-control"
                            type="text"
                            // value={wardNo}
                            value={1}
                            onChange={(e) => setWardNo(e.target.value)}
                          />
                          <input
                            className="form-control"
                            type="text"
                            // value={wardNo}
                            value={1}
                            onChange={(e) => setWardNo(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>PropertyNo.</label>
                          <input
                            className="form-control"
                            type="text"
                            // value={propertyNo}
                            value={10}
                            onChange={(e) => setPropertyNo(e.target.value)}
                          />
                          <input
                            className="form-control"
                            type="text"
                            value={propertyNo}
                            onChange={(e) => setPropertyNo(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>PartitionNo.</label>
                          <input
                            className="form-control"
                            type="text"
                            value={partitionNo}
                            onChange={(e) => setPartitionNo(e.target.value)}
                          />
                          <input
                            className="form-control"
                            type="text"
                            value={partitionNo}
                            onChange={(e) => setPartitionNo(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>City S No.</label>
                          <input
                            className="form-control"
                            type="text"
                            value={cityNo}
                            onChange={(e) => setCityNo(e.target.value)}
                          />
                          <input
                            className="form-control"
                            type="text"
                            value={cityNo}
                            onChange={(e) => setCityNo(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>PlotNo</label>
                          <input
                            className="form-control"
                            type="text"
                            value={plotNo}
                            onChange={(e) => setPlotNo(e.target.value)}
                          />
                          <input
                            className="form-control"
                            type="text"
                            value={plotNo}
                            onChange={(e) => setPlotNo(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 p-1">
                        <div className="form-group">
                          <label>
                            BuildUp Area(sqft)
                          </label>
                          <input
                            className="form-control"
                            // value={builtUpArea}
                            value={398.4}
                            onChange={(e) => setBuiltUpArea(e.target.value)}
                          ></input>
                          <input
                            className="form-control"
                            // value={builtUpArea}
                            value={0}
                            onChange={(e) => setBuiltUpArea(e.target.value)}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label >Carpet Area</label>
                          <input
                            className="form-control"
                            type="text"
                            // value={plotArSqFt}
                            value={322}
                            onChange={(e) => setCarpetArea(e.target.value)}
                          />{" "}
                          <input
                            className="form-control"
                            type="text"
                            // value={plotArSqFt}
                            value={0}
                            onChange={(e) => setCarpetArea(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label >Plot Area(SqFt)</label>
                          <input
                            className="form-control"
                            type="text"
                            // value={plotArSqMt}
                            value={1000}
                            onChange={(e) => setPlotArea(e.target.value)}
                          />
                          <input
                            className="form-control"
                            type="text"
                            // value={plotArSqMt}
                            value={0}
                            onChange={(e) => setPlotArea(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 ml-4 ">
                        <div className="form-group row">
                          <label className="mt-3 font-weight-bold ">
                            Property Description:
                          </label>
                          <div className="col p-1  ">
                            <select
                              className="form-control p-1 text-danger "
                              value={propertyDescription}
                              onChange={(e) =>
                                setPropertyDescription(e.target.value)
                              }
                            >
                              <option value="0">निवासी</option>
                              <option value="1">Property 1</option>
                              <option value="2">Property 2</option>
                              <option value="3">Property 3</option>
                              <option value="4">Property 4</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-2 ml-4 ">
                        <div className="form-group row ">
                          <label className="mt-3 font-weight-bold    ">
                            Construction Type :
                          </label>
                          <div className="col  md-2 p-1  ">
                            <select
                              className="form-control p-2  text-danger  "
                              value={constructionType}
                              onChange={(e) =>
                                setConstructionType(e.target.value)
                              }
                            >
                              <option value="0">Building</option>
                              <option value="1">Property 1</option>
                              <option value="2">Property 2</option>
                              <option value="3">Property 3</option>
                              <option value="4">Property 4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <label className="mt-3  font-weight-bold  mx-2  ">
                           Owner Id
                          </label>
                      <div className="col-md-1">

                        <div className="form-group  mt-2 ">
                        

                          <input
                            type="text"
                            className="form-control font-weight-bold text-center"
                            value={38305}
                          />
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="from-group row   ">
                    <button
                      className={`mx-3  ml-1 btn-info ${
                        showOwnerRenterTable ? "active" : ""
                      }`}
                      onClick={() => toggleTable(true)}
                    >
                      Owner & Renter Details
                    </button>
                    <button
                      className={`mx-1 btn-info  ${
                        !showOwnerRenterTable ? "active" : ""
                      }`}
                      onClick={() => toggleTable(false)}
                    >
                      Other Details
                    </button>
                    <div class="dt-responsive table-responsive " style={{maxHeight: "90px", overflow: "auto"}}>
                      {showOwnerRenterTable ? (
                        <table class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr className="text-center">
                              <th  className="font-weight-bold">मालकाचे नाव</th>
                              <th  className="font-weight-bold">पत्ता</th>
                              <th  className="font-weight-bold">भोगवट धाराचे नाव</th>
                              <th  className="font-weight-bold">दुकान/इमारतचे नाव </th>
                              <th  className="font-weight-bold">दुकान नं</th>
                              <th  className="font-weight-bold">आ.भाडे</th>
                              <th  className="font-weight-bold">वि.आ.भाडे</th>
                            </tr>
                          </thead>
                         
                          <tbody>
                          <tr className="text-center">
                              <td>इतर धारक</td>
                              <td>pune</td>
                              <td>Ganesh</td>
                              <td></td>
                              <td></td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                          </tbody>
                        </table>
                      ) : (
                        <table className="table table-striped table-bordered nowrap">
                          <thead>
                          <tr className="text-center">
                              <th  className="font-weight-bold">Contact</th>
                              <th  className="font-weight-bold">water Connections</th>
                              <th  className="font-weight-bold">Room</th>
                              <th  className="font-weight-bold">CToilet</th>
                              <th  className="font-weight-bold">RToilet</th>
                            </tr>
                          </thead>
                          <tbody>
                          <tr className="text-center">
                              <td>787589228</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>987589228</td>
                              <td>1</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>990089228</td>
                              <td>0</td>
                              <td>2</td>
                              <td>1</td>
                              <td>0</td>
                            </tr>
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
             
                {/* Property wise valueation table */}
                <h5
                  className=" font-weight-bold ml-4"
                  style={{ color: "darkBlue" }}
                >
                  Property Wise Valuation Details
                </h5>
                <div class="dt-responsive table-responsive "style={{maxHeight: "140px", overflow: "auto"}}>
                  <table class="table table-striped table-bordered nowrap ">
                    <thead>
                      <tr>
                        <th  className="font-weight-bold">Floor</th>
                        <th  className="font-weight-bold">Construction Year</th>
                        <th  className="font-weight-bold">Construction Type</th>
                        <th  className="font-weight-bold">Use </th>
                        <th  className="font-weight-bold">Carpet Area(SqFt)</th>
                        <th  className="font-weight-bold">Carpet Area(SqMtr)</th>
                        <th  className="font-weight-bold">BuitUp Area(Sqtr)</th>
                        <th  className="font-weight-bold">BuitUp Area(SqMtr)</th>
                        <th  className="font-weight-bold">Yearly Rate ₹</th>
                        <th className="font-weight-bold">Monthly Rate ₹</th>
                        <th className="font-weight-bold">Y RV₹</th>
                        <th className="font-weight-bold">Depreciation ₹</th>
                        <th className="font-weight-bold">Annual Rental Value</th>
                        <th className="font-weight-bold">Maintenance ₹</th>
                        <th className="font-weight-bold">Rv</th>
                        <th className="font-weight-bold">Property Tax ₹</th>
                        <th className="font-weight-bold">TreeCess ₹</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ textAlign: "center" }}>
                        <td>G</td>
                        <td>2011</td>
                        <td>c</td>
                        <td>R</td>
                        <td>332.00</td>
                        <td>30.85</td>
                        <td>398.40</td>
                        <td>37.02</td>
                        <td>48.00</td>
                        <td>4.00</td>
                        <td>1480.80</td>
                        <td>0.00</td>
                        <td>1480.00</td>
                        <td>148.08</td>
                        <td>1332.72</td>
                        <td>279.87</td>
                        <td>13.33</td>
                      </tr>

                      <tr style={{ textAlign: "center" }}>
                        <td>G</td>
                        <td>2011</td>
                        <td>c</td>
                        <td>V</td>
                        <td>15.00</td>
                        <td>1.39</td>
                        <td>18.00</td>
                        <td>1.67</td>
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

                {/* New Construction And old Table */}
                <div class="container">
                  <div class="row">
                    <div class="col-lg-4  mt-3">
                      <h6
                        className=" text-center font-weight-bold"
                        style={{ color: "darkBlue" }}
                      >
                        New Construction Parth Valuation
                      </h6>
                      <div class="dt-responsive table-responsive "style={{maxHeight: "140px", overflow: "auto"}}>
                        <table class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">Use</th>
                              <th className="font-weight-bold">Reason</th>
                              <th className="font-weight-bold">ALV</th>
                              <th className="font-weight-bold">Maintenance</th>
                              <th className="font-weight-bold">Rv</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ textAlign: "center" }}>
                              <td>R</td>
                              <td>New</td>
                              <td>0.00</td>
                              <td>0.00</td>
                              <td>0.00</td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                              <td>C</td>
                              <td>New</td>
                              <td>0.00</td>
                              <td>0.00</td>
                              <td>0.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="col-lg-4 mt-3 ">
                      <h6
                        className=" text-center font-weight-bold"
                        style={{ color: "darkBlue" }}
                      >
                        Old Construction Parth Valuation
                      </h6>
                      <div class="dt-responsive table-responsive " style={{maxHeight: "140px", overflow: "auto"}}>
                        <table class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">Use</th>
                              <th className="font-weight-bold">Reason</th>
                              <th className="font-weight-bold">ALV</th>
                              <th className="font-weight-bold">Maintenance</th>
                              <th className="font-weight-bold">Rv</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ textAlign: "center" }}>
                              <td>R</td>
                              <td>Old</td>
                              <td>148.0</td>
                              <td>1408</td>
                              <td>133.7</td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                              <td>C</td>
                              <td>Old</td>
                              <td>0.00</td>
                              <td>0.00</td>
                              <td>0.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="col-lg-4 mt-3">
                      <h6
                        className="font-weight-bold text-center"
                        style={{ color: "darkBlue" }}
                      >
                        Old Retaination Part Valuation
                      </h6>
                      <div class="dt-responsive table-responsive" style={{maxHeight: "140px", overflow: "auto"}}>
                        <table class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">Use</th>
                              <th className="font-weight-bold">Reason</th>
                              <th className="font-weight-bold">ALV</th>
                              <th className="font-weight-bold">Maintenance</th>
                              <th className="font-weight-bold">Rv</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ textAlign: "center" }}>
                              <td>R</td>
                              <td>Old</td>
                              <td>0.00</td>
                              <td>0.00</td>
                              <td>0.00</td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                              <td>C</td>
                              <td>Old</td>
                              <td>0.00</td>
                              <td>0.00</td>
                              <td>0.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <h6
                  className=" text-center font-weight-bold"
                  style={{ color: "darkBlue" }}
                >
                  Total Valuation for Assessment
                </h6>
                <div class="dt-responsive table-responsive "  style={{maxHeight: "140px", overflow: "auto"}}>
                  <table class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th className="font-weight-bold">Use</th>
                        <th className="font-weight-bold">ALV</th>
                        <th className="font-weight-bold">Maintance</th>
                        <th className="font-weight-bold">RV</th>
                        <th className="font-weight-bold">Property Tax</th>
                        <th className="font-weight-bold">Prop%</th>
                        <th className="font-weight-bold">Education Tax</th>
                        <th className="font-weight-bold">Edu%</th>
                        <th className="font-weight-bold">Employee Tax</th>
                        <th className="font-weight-bold">Emp%</th>
                        <th className="font-weight-bold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ textAlign: "center" }}>
                        <td>R</td>
                        <td>1480.0</td>
                        <td>1332.72</td>
                        <td>279.87</td>
                        <td>21.00</td>
                        <td>59.23</td>
                        <td>4.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>402.43</td>
                      </tr>
                      <tr style={{ textAlign: "center" }}>
                        <td>C</td>
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

                {/* last block */}
                <div className="row  ">
                  <div className="col-md-1 ml-2 text-center  ">
                    <div className="form-group">
                      <label>Old Rv.</label>
                      <input
                        className="form-control"
                        type="text"
                        value={0}
                        onChange={(e) => setOldRV(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-1 ml-2  text-center">
                    <div className="form-group">
                      <label>Old ALV.</label>
                      <input
                        className="form-control"
                        type="text"
                        value={0}
                        onChange={(e) => setOldALV(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-1  ml-2 text-center">
                    <div className="form-group">
                      <label>Old Tax</label>
                      <input
                        className="form-control"
                        type="text"
                        value={0}
                        onChange={(e) => setOldTax(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-2 ml-2  text-center">
                    <div className="form-group">
                      <label>New ALV</label>
                      <input
                        className="form-control"
                        type="text"
                        value={1480.8}
                        onChange={(e) => setNewALV(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-2  ml-2 text-center">
                    <div className="form-group">
                      <label>Net RV</label>
                      <input
                        className="form-control"
                        type="text"
                        value={1332.72}
                        onChange={(e) => setNetRV(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-2  ml-2 text-center">
                    <div className="form-group">
                      <label>Retain RV</label>
                      <input
                        className="form-control"
                        type="text"
                        value={retainRV}
                        onChange={(e) => setRetainRV(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-2 ml-2 text-center" ml-2>
                    <div className="form-group">
                      <label>Retain Reason</label>
                      <input
                        className="form-control"
                        type="text"
                        value={retainReason}
                        onChange={(e) => setRetainReason(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 ml-2 text-center" ml-2>
                    <div className="form-group">
                      <label>Hearing Rv</label>
                      <input
                        className="form-control"
                        type="text"
                        value={hearing}
                        onChange={(e) => setHearing(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-2 ml-2 text-center" ml-2>
                    <div className="form-group">
                      <label>Hearing Reason</label>
                      <input
                        className="form-control"
                        type="text"
                        value={hearingReason}
                        onChange={(e) => setHearingReason(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-2 ml-2 text-center" ml-2>
                    <div className="form-group">
                      <label>App Committee RV</label>
                      <input
                        className="form-control"
                        type="text"
                        value={AppCommit}
                        onChange={(e) => setAppCommit(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-2 ml-2 text-center" ml-2>
                    <div className="form-group">
                      <label>App Committee Reason</label>
                      <input
                        className="form-control"
                        type="text"
                        value={AppCommitReason}
                        onChange={(e) => setAppCommitReason(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-2 ml-2 text-center" ml-2>
                    <div className="form-group">
                      <label>Remission RV</label>
                      <input
                        className="form-control"
                        type="text"
                        value={remissionRV}
                        onChange={(e) => setRemissionRV(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-2 ml-2 text-center" ml-2>
                    <div className="form-group">
                      <label>Remission Reason</label>
                      <input
                        className="form-control"
                        type="text"
                        value={remissionReason}
                        onChange={(e) => setRemissionReason(e.target.value)}
                      />
                    </div>
                  </div></div>
                  {/* table */}
                  <div class="dt-responsive table-responsive ">
                    <table class="table table-striped table-bordered nowrap">
                      <thead>
                        <tr>
                          <th className="bg-secondary">Taxes</th>
                          {/* <tr style={{ textAlign: "center" }}> */}
                          <td className="font-weight-bold">Property</td>
                          <td className="font-weight-bold">Edcation</td>
                          <td className="font-weight-bold">Sp Edu.</td>
                          <td className="font-weight-bold">Employee</td>
                          <td className="font-weight-bold">Tree</td>
                          <td className="font-weight-bold">Fire</td>
                          <td className="font-weight-bold">Light</td>
                          <td className="font-weight-bold">Drain</td>
                          <td className="font-weight-bold">Road</td>
                          <td className="font-weight-bold">Sanitation</td>
                          <td className="font-weight-bold">W.Cess</td>
                          <td className="font-weight-bold">Wbenfit</td>
                          <td className="font-weight-bold">WaterFit</td>
                          <td className="font-weight-bold">WaterBil</td>
                          <td className="font-weight-bold">MajorBuild</td>
                          <td className="font-weight-bold">Sewage</td>
                          <td className="font-weight-bold">Tax1</td>
                          <td className="font-weight-bold">Total</td>    
                        </tr>
                       {/* </tr> */}
                       {/* <tr> */}
                       </thead>
    <tbody>
                    <tr>  
                       <th>Net</th>
                       <td>280</td>
                          <td>59</td>
                          <td>0</td>
                          <td>0</td>
                          <td>13</td>
                          <td>0</td>
                          <td>0</td>
                          <td>50</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>402</td> 
</tr>                      </tbody>

<tbody>
                    <tr>  
                       <th>Retain</th>
                       <td colspan="18">Application for: Does Not Set Policy</td>
</tr>

                      
                       
                      </tbody>
                     < tbody>
                    <tr>  
                       <th>Hearing</th>
                     
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
</tr>                 
                      </tbody>
                      < tbody>
                    <tr>  
                       <th>App.Commit</th>
                     
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
</tr>                 
                      </tbody>
                      < tbody>
                    <tr>  
                       <th>Remission</th>
                     
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
</tr>                 
                      </tbody>
                    </table>
                  </div> 
                  {/* photos */}
                  <div>
                  <div className="card-header">
                  <h5 onClick={toggleImageDisplay} style={{ cursor: 'pointer' }}>
          Upload Photo & Plan
        </h5>
      </div>

      {isImageDisplayOpen && (
             
                <div className="row">
                                    <div className=" col-lg-6 col-sm-6 col-md-6">
                                      <h6 className="  text-center text-info font-weight-bold  ">
                                        Upload Photo
                                      </h6>

                                      <div className="form-group row mt-2">
                                      <div class="col-lg-6 col-sm-6">
  <div class="thumbnail">
    <div class="thumb">
      <label >
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
      <input
        type="file"
        id="fileInput"
        onchange="handleAttachmentClick(this)"
      />
    </div>
  </div>
</div>
                                        <div class="col-lg-6 col-sm-6">
                                          <div class="thumbnail">
                                            <div class="thumb">
                                            <label >

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
                                              <input
        type="file"
        id="fileInput"
        onchange="handleAttachmentClick(this)"
      />
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
                                              </a></label>
                                              <input
        type="file"
        id="fileInput"
        onchange="handleAttachmentClick(this)"
      />
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
                                              </a></label>
                                              <input
        type="file"
        id="fileInput"
        onchange="handleAttachmentClick(this)"
      />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/*  */}

                                    <div className="col-lg-6 col-sm-6 col-md-6 ">
                                      <h6 className=" text-center  text-info font-weight-bold ml-3">
                                        Plan
                                      </h6>
                                      <div class=" mt-3 col-lg-12 col-sm-12">
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
                                            </a></label>
                                            <input
        type="file"
        id="fileInput"
        onchange="handleAttachmentClick(this)"
      />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>     )}  </div>
                {/*  */}
                   
             
                    </div>
{/* Footer */}
                    <div className="border " style={{backgroundColor:"whitesmoke"}} >
                                                    <div class="card-footer ">
                                                    </div>
                                                    <div class="card-block mb-6">
                                                       
                                                        {/* <h6 class="m-t-20 f-w-600">Usage:</h6> */}
                                                      
                                                             <div className="row  justify-content-center">
               <label className="col-form-label ">Reports</label>

               <div className="col-md-1 text-center">
                       <div className="form-group">
                         <select
                           type="text"
                           className="form-control text-center"
                           name="roadW"
                           id="roadW"
                         >
                          <option></option>
                             <option>119 Notice</option>
                             <option>Kar Akarani</option>
                             <option>Kar Akarani with NonTax Type</option>
                            <option>Assessment Nakal</option>
<option>Bill</option>
                             </select>
                         <span className="messages"></span>
                       </div>
                     </div>
                     <label className="col-form-label ">Policy</label>

<div className="col-md-1 text-center">
     <div className="form-group">
       <select
         type="text"
         className="form-control text-center"
         name="roadW"
         id="roadW"
       >
        <option></option>
           <option>As per Old</option>
           <option>Minimun Rv</option>
           <option>Mix Assessment</option>
          

           </select>
       <span className="messages"></span>
     </div>
   </div>
   <label className="col-form-label ">Action</label>

<div className="col-md-1 text-center">
     <div className="form-group">
       <select
         type="text"
         className="form-control text-center"
         name="roadW"
         id="roadW"
       >
        <option></option>
           <option>Apply</option>
           <option>Remove Retaintion</option>
           <option>Remove Appeal Commity</option>
          <option>Remove Remission</option>
<option>Remove All Appeals</option>
           </select>
       <span className="messages"></span>
     </div>
   </div>
   <div className="col-md-2 text-center">
                           <div
                             class="checkbox-fade fade-in-primary"
                             style={{ "margin-top": "3%" }}
                           >
                             <label>
                               <input type="checkbox" value="" />
                               <span class="cr">
                                 <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                               </span>
                               <span className="">SaveAndRow</span>
                             </label>
                           </div>
                         </div>
</div>
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
     >
       
     </input>
   </div>

   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
       12271
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

   <div className="col-5 col-sm-4 col-md-2 col-lg-1 col-xl-2">
     <button
       type="button"
       className="btn btn-grd-info btn-sm btn-block"
     >
      EditDetails
     </button>
   </div>

   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
      View
     </button>
   </div>
 </div>
                                                        
                                                       
                                                    </div>
                                                </div>
{/* Footer End */}

                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  );
};
export default Valuation;
