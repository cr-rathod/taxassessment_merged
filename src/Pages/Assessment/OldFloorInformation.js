import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OldFloorInformation = () => {
  const [zoneNo, setZoneNo] = useState("");
  const [wardNo, setWardNo] = useState("");
  const [propetyNo, setPropertyNo] = useState("");
  const [partiNo, setPartiNo] = useState("");
  const [CSNo, setCSNo] = useState("");
  const [plotNo, setPlotNo] = useState("");
  const [RV, setRV] = useState("");
  const [ALV, setALV] = useState("");
  const [propTax, setPropTax] = useState("");
  const [TotTax, setTotTax] = useState("");
  const [constAreaSqFt, setConstAreaSqFt] = useState("");
  const [PlotArea, setPlotArea] = useState("");
  const [tolietNo, setToliet] = useState("");
  const [rooms, setRooms] = useState("");
  const [floor, setFloor] = useState("");
  const [year, setYear] = useState("");
  const [constructionType, setConstructionType] = useState("");
  const [typeOfUse, setTypeOfUse] = useState("");
  const [carpetSqFt, setCarpetSqFt] = useState("");
  const [carpetSqMtr, setCarpetSqMtr] = useState("");
  const [registration, setRegistration] = useState("");

  const [prop, setProp] = useState("");
  const [Edu, setEdu] = useState("");
  const [spEdu, setSpEdu] = useState("");
  const [Tree, setTree] = useState("");
  const [Fire, setFire] = useState("");
  const [Light, setLight] = useState("");
  const [Drain, setDrain] = useState("");
  const [Road, setRoad] = useState("");
  const [Sanitation, setSanitation] = useState("");
  const [WCess, setWCess] = useState("");
  const [WBil, setWBill] = useState("");
  const [mBuild, setMBuild] = useState("");
  const [Sewage, setSewage] = useState("");
  const [tax1, setTax1] = useState("");
  const [interest, setInterest] = useState("");
  const [total, setTotal] = useState("");
  const [remark, setRemark] = useState("");
  const [wBen, setWBen] = useState("");
  const [taxTotal, setTaxTotal] = useState("");
  const [wBil, setWBil] = useState("");

  const [emp, setEmp] = useState("");

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
            <div className="card border  border-primary " style={{ borderWidth: "7px", backgroundColor:"whitesmoke", color:"black" }}>
                <div className="card-header">
                  <h5>Old Floor Information</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="form-group row text-center">
                     
                      <div className="col-sm-2 ">
                      <label className="col-1-md-1 col-form-label">
                        Zone No.
                      </label>
                        <input
                          type="text"
                          className="form-control text-center"
                          name="wdName"
                          id="wdName"
                          value={1}
                          onChange={(e) => setZoneNo(e.target.value)}
                        />
                        <span className="messages"></span>
                      </div>
                      
                      <div className="col-sm-2">
                      <label className="col-1-md-1 col-form-label ">
                        Ward No.
                      </label>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={1}
                          onChange={(e) => setWardNo(e.target.value)}
                        />
                      </div>
                     
                      <div className="col-sm-2">
                      <label className="col-1-md-1 col-form-label">
                        Property No.
                      </label>
                        <input
                          type="text"
                          className="form-control text-center"
                          name="tPropNo"
                          id="tPropNo"
                          value={propetyNo}
                          onChange={(e) => setPropertyNo(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-2">
                     
                      <label className="col-1-md-1 col-form-label">
                        Parti No.
                      </label>
                        <input
                          type="text"
                          className="form-control text-center"
                          name="tPropNo"
                          id="tPropNo"
                          value={partiNo}
                          onChange={(e) => setPartiNo(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-2">
                      <label className="col-1-md-1 col-form-label">CSNo.</label>

                        <input
                          type="text"
                          className="form-control text-center"
                          name="tPropNo"
                          id="tPropNo"
                          value={CSNo}
                          onChange={(e) => setCSNo(e.target.value)}
                        />
                      </div>
                      
                      <div className="col-sm-2">
                      <label className="col-1-md-1 col-form-label">
                        Plot No.
                      </label>
                        <input
                          type="text"
                          className="form-control text-center"
                          name="tPropNo"
                          id="tPropNo"
                          value={plotNo}
                          onChange={(e) => setPlotNo(e.target.value)}
                        />
                      </div>
                      
                    </div>
                    <h6 className="font-weight-bold mt-3  text-info">
                      Old Taxation Details{" "}
                    </h6>
                    <div className="form-group row">
  <div className="col-md-1 text-center">
    <label htmlFor="rv">Rv</label>
    <input
      type="text"
      className="form-control text-center"
      name="rv"
      id="rv"
      value={0}
      onChange={(e) => setRV(e.target.value)}
    />
  </div>
  <div className="col-md-1 text-center">
    <label htmlFor="alv">ALV</label>
    <input
      type="text"
      className="form-control text-center"
      name="alv"
      id="alv"
      value={0}
      onChange={(e) => setALV(e.target.value)}
    />
  </div>
  <div className="col-md-1 text-center">
    <label htmlFor="propTax">PropTax</label>
    <input
      type="text"
      className="form-control text-center"
      name="propTax"
      id="propTax"
      value={0}
      onChange={(e) => setPropTax(e.target.value)}
    />
  </div>
  <div className="col-md-1 text-center">
    <label htmlFor="totTax">TotTax</label>
    <input
      type="text"
      className="form-control text-center"
      name="totTax"
      id="totTax"
      value={0}
      onChange={(e) => setTotTax(e.target.value)}
    />
  </div>
  <div className="col-md-2 text-center">
    <label htmlFor="constAreaSqFt">Const. Area Sq Ft</label>
    <input
      type="text"
      className="form-control text-center"
      name="constAreaSqFt"
      id="constAreaSqFt"
      value={0}
      onChange={(e) => setConstAreaSqFt(e.target.value)}
    />
  </div>
  <div className="col-md-2 text-center">
    <label htmlFor="plotArea">Plot Area Sq Ft</label>
    <input
      type="text"
      className="form-control text-center"
      name="plotArea"
      id="plotArea"
      value={0}
      onChange={(e) => setPlotArea(e.target.value)}
    />
  </div>
  <div className="col-md-2 text-center">
    <label htmlFor="toliet">Toliet No.</label>
    <input
      type="text"
      className="form-control text-center"
      name="toliet"
      id="toliet"
      value={0}
      onChange={(e) => setToliet(e.target.value)}
    />
  </div>
  <div className="col-md-2 text-center">
    <label htmlFor="rooms">Rooms</label>
    <input
      type="text"
      className="form-control text-center"
      name="rooms"
      id="rooms"
      value={0}
      onChange={(e) => setRooms(e.target.value)}
    />
  </div>
</div>


                    {/*  */}
                    <div class="form-group row ">
                      <div className="col-1-md-1 mt-2 ml-3  ">
                        <label>*Floor</label>
                        <select
                          className="form-control  bg-info text-white"
                          value={floor}
                          onChange={(e) => setFloor(e.target.value)}
                          style={{ height: 35 }}
                        >
                          <option value="0"></option>
                          <option value="1">G</option>
                          <option value="2">1</option>
                          <option value="3">2</option>
                          <option value="4">3</option>
                          <option value="5">4</option>
                          <option value="6">5</option>
                          <option value="7">6</option>
                          <option value="8">7</option>
                          <option value="9">8</option>
                          <option value="10">9</option>
                          <option value="11">10</option>
                        </select>
                      </div>
                      <div className="col-md-2 mt-2 ml-2 ">
                        <div className="form-group text-center">
                          <label>*Year</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 mt-1 ml-2">
                        <div className="form-group ">
                          <label>*Construction Type</label>
                          <select
                            className="form-control text-center"
                            value={constructionType}
                            onChange={(e) =>
                              setConstructionType(e.target.value)
                            }
                            style={{ height: 40 }}
                          >
                            <option value="0"></option>
                            <option value="1">सिमेंट काँक्रेट संरचना </option>
                            <option value="2">
                              सिमेंट/चुना/ दगड/विठाची/ भिंत व स्लॅप
                            </option>
                            <option value="3">
                              सिमेंट/चुना/ दगड/विठाची/ भिंत व टिनाचे छत
                            </option>
                            <option value="4">
                              कुडाचे लाकडी फाट्याचे कच्चे घर{" "}
                            </option>
                            <option value="5">
                              कुडाचे लाकडी फाट्याचे कच्चे घर{" "}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2  ml-2">
                        <div className="form-group">
                          <label>*Type of Use</label>
                          <select
                            className="form-control text-center"
                            value={typeOfUse}
                            onChange={(e) => setTypeOfUse(e.target.value)}
                          >
                            <option value="0"></option>
                            <option value="1">निवास</option>
                            <option value="2">दुकान </option>
                            <option value="3">अनिवासी</option>
                            <option value="4">व्हरांडा टॉयलेट बाथ</option>
                            <option value="5">दवाखाना</option>
                            <option value="6">धार्मिक स्थळ</option>
                            <option value="7">बँक/ वित्तीय संस्था </option>
                            <option value="8">कार्यालय</option>
                            <option value="9">मंगल कार्यालय/टॉकीज</option>
                            <option value="10">हॉटेल</option>
                            <option value="11">शैक्षणिक</option>
                            <option value="12">शासकीय</option>
                            <option value="13">कारखाना </option>
                            <option value="14">न. प. मालमत्ता</option>
                            <option value="15">खुला भूखंड</option>
                            <option value="16">बांधकाम चालू केंद्र</option>
                            <option value="17">केंद्र शासकीय मालमत्ता</option>
                            <option value="18">शासकीय वाणिज्य मालमत्ता </option>
                            <option value="19">खाजगी शैक्षणिक मालमत्ता</option>
                            <option value="20">शासकीय शाळा </option>
                            <option value="21">शासकीय निवासी</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2 ml-2">
                        <div className="form-group">
                          <label>Registration</label>
                          <select
                            className="form-control text-center"
                            value={registration}
                            onChange={(e) => setRegistration(e.target.value)}
                            style={{ height: 40 }}
                          >
                              <option value="0">Select</option>

                            <option value="1">Yes</option>
                            <option value="2">No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-1 p-1 ml-2 mx-2">
                        <div className="form-group">
                          <label>*CarpetSq.Ft</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            // value={carpetSqFt}
                            value={0}
                            onChange={(e) => setCarpetSqFt(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1 ml-2 mx-2  ">
                        <div className="form-group">
                          <label>*CarpetSq.Mtr</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            // value={carpetSqMtr}
                            value={0}
                            onChange={(e) => setCarpetSqMtr(e.target.value)}
                          />
                        </div>
                      </div>
                    

                      <div className="col d-flex justify-content-center align-items-center mt-4 mb-1">
  <button
    type="submit"
    className="btn btn-sm btn-grd-success waves-effect waves-light"
    style={{ width: "55px" }}
  >
    Ok
  </button>
  <button
    type="submit"
    className="btn btn-sm btn-grd-success waves-effect waves-light ml-2"
  >
    Add
  </button>
</div>

                      {/* table */}
                      <div class="mt-1 dt-responsive table-responsive">
                        <table class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr style={{ textAlign: "center" }}>
                              <th  className="font-weight-bold">Sr No.</th>
                              <th  className="font-weight-bold">Floor</th>
                              <th  className="font-weight-bold">Const.Year</th>

                              <th  className="font-weight-bold">Const.Type</th>
                              <th  className="font-weight-bold">Type Of Use</th>
                              <th  className="font-weight-bold">Carpet Area(ft)</th>
                              <th  className="font-weight-bold">Carpet Area(mtr)</th>
                              <th  className="font-weight-bold">Registration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ textAlign: "center" }}>
                              <td>1</td>
                              <td>B</td>

                              <td>2009</td>
                              <td>B</td>
                              <td></td>

                              <td>220</td>
                              <td>20.438</td>
                              <td>
                                <label>
                                  <input
                                    type="checkbox"
                                    checked={registration}
                                    onChange={(e) =>
                                      setRegistration(e.target.checked)
                                    }
                                  />
                                </label>
                              </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                              <td>2</td>
                              <td>G</td>
                              <td>2009</td>
                              <td>C</td>
                              <td></td>
                              <td>H</td>
                              <td>1716</td>
                              <td>
                                <label>
                                  <input
                                    type="checkbox"
                                    checked={registration}
                                    onChange={(e) =>
                                      setRegistration(e.target.checked)
                                    }
                                  />
                                </label>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/*  */}
                      <h6 className="font-weight-bold  ml-2 text-info">
                        Old Taxes
                      </h6>
                      <div class="dt-responsive table-responsive">
                        <table class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th  className="font-weight-bold">Prop</th>
                              <th  className="font-weight-bold">Edu</th>
                              <th  className="font-weight-bold">sp.Edu</th>
                              <th  className="font-weight-bold">Emp</th>
                              <th  className="font-weight-bold">Tree</th>
                              <th  className="font-weight-bold">Fire</th>
                              <th  className="font-weight-bold">Light</th>
                              <th  className="font-weight-bold">Drain</th>
                              <th  className="font-weight-bold">Road</th>
                              <th  className="font-weight-bold">Sanitation</th>
                              <th  className="font-weight-bold">W.Cess</th>

                              <th  className="font-weight-bold">W.Ben</th>
                              <th  className="font-weight-bold">W.Bill</th>
                              <th  className="font-weight-bold">M.Build</th>
                              <th  className="font-weight-bold">Sewage</th>
                              <th  className="font-weight-bold">Tax1</th>
                              <th  className="font-weight-bold" >Interest</th>
                              <th  className="font-weight-bold">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ textAlign: "center" }}>
                              <td>1</td>
                              <td>B</td>

                              <td>2009</td>
                              <td>B</td>
                              <td></td>

                              <td>H</td>
                              <td>220</td>
                              <td>20.438</td>
                              <td>1</td>
                              <td>H</td>
                              <td>220</td>
                              <td>20.438</td>
                              <td>1</td>
                              <td>H</td>
                              <td>220</td>
                              <td>20.438</td>
                              <td>1</td>
                              <td></td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                              <td>2</td>
                              <td>c</td>

                              <td>2009</td>
                              <td>B</td>
                              <td></td>

                              <td>H</td>
                              <td>220</td>
                              <td>20.438</td>
                              <td>1</td>
                              <td>H</td>
                              <td>220</td>
                              <td>20.438</td>
                              <td>1</td>
                              <td>H</td>
                              <td>220</td>
                              <td>20.438</td>
                              <td>1</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>{" "}
                    </div>
                    {/*  */}
                    <h6 className="font-weight-bold mt-3 text-info">
                      Pending Taxes{" "}
                    </h6>
                    <div className="form-group row">
                      <div className="form-group">
                        <div className="col-1-md-1  ml-3">
                          <label>Year</label>
                          <select
                            className="form-control bg-info text-white text-center"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            style={{ height: 35 }}
                          >
                            <option value="0">2019-2020</option>
                            <option value="1">2020-2021</option>
                            <option value="2">2021-2022</option>
                          </select>
                        </div>{" "}
                      </div>
                      <div className="col-md-1">
                        <div className="form-group">
                          <label>Prop</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            // value={carpetSqMtr}
                            value={0}
                            onChange={(e) => setProp(e.target.value)}
                          />
                        </div>{" "}
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Edu</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setEdu(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Sp.Edu</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setSpEdu(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Emp</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setEmp(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Tree</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setTree(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Fire</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setFire(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Light</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setLight(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Drain</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setDrain(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Road</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setRoad(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Sanitation</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setSanitation(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>W.Cess</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setWCess(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>W.Ben</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setWBen(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>W.Bill</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setWBil(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>M.Bulid</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setMBuild(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Sewage</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setSewage(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Tax1</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setTax1(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>TaxTotal</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setTaxTotal(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Interest</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setInterest(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Total</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setTotal(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1  ">
                        <div className="form-group">
                          <label>Remark</label>
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                            onChange={(e) => setRemark(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col d-flex justify-content-start align-items-start ml-4 mt-4">
                        <button
                          type="submit"
                          className="btn btn-sm mb-2  btn-grd-success waves-effect waves-light"
                        >
                          Add
                        </button>
                      </div>

                      {/* table pending */}
                      <div class="  dt-responsive table-responsive">
                        <table class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th  className="font-weight-bold">Year</th>
                              <th  className="font-weight-bold">Prop</th>
                              <th  className="font-weight-bold">Edu</th>
                              <th  className="font-weight-bold">Sp.Edu</th>
                              <th  className="font-weight-bold">Emp</th>
                              <th  className="font-weight-bold">Tree</th>
                              <th  className="font-weight-bold">Fire</th>
                              <th  className="font-weight-bold">Light</th>
                              <th  className="font-weight-bold">Drain</th>
                              <th  className="font-weight-bold">Road</th>
                              <th  className="font-weight-bold">Sanitation</th>
                              <th  className="font-weight-bold">W.Cess</th>
                              <th  className="font-weight-bold">W.Ben.</th>
                              <th  className="font-weight-bold">W.Bill</th>
                              <th  className="font-weight-bold">Sewage</th>
                              <th  className="font-weight-bold">Tax1</th>
                              <th  className="font-weight-bold">Interest</th>
                              <th  className="font-weight-bold">Total</th>
                              <th  className="font-weight-bold"  >TotPending</th>
                              <th  className="font-weight-bold">Remark</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ textAlign: "center" }}>
                              <td>2019</td>
                              <td>143</td>
                              <td>30</td>
                              <td>0</td>
                              <td>0</td>
                              <td>7</td>
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
                              <td>37</td>
                              <td>230</td>
                              <td>267</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
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
export default OldFloorInformation;
