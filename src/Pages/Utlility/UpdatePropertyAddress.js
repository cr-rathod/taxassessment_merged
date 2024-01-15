import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const UpdatePropertyAddress = () => {
  const [showRemark, setShowRemark] = useState(false);
  const [showProp, setShowProp] = useState(false);
  const [showComm, setShowComm] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showRoad, setShowRoad] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  const [WadhGhatRemarkOne, setWadhGhatRemarkOne] = useState("");
  const [WadhGhatRemarkTwo, setWadhGhatRemarkTwo] = useState("");

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

  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (option) => {
    setSelectedOption(option);
    if (option === "updateWadhGhatRemark") {
      setShowRemark(true);
      setShowProp(false);
      setShowComm(false);
      setShowShop(false);
    } else {
      setShowRemark(false);
    }
  };

  // Update property
  const [propOption, setPropOption] = useState("");

  const handleRadioProp = (prop) => {
    setPropOption(prop);
    if (prop === "updatePropertyType") {
      setShowProp(true);
      setShowRemark(false);
      setShowComm(false);
      setShowShop(false);
    } else {
      setShowProp(false);
    }
  };

  // Update Common remark
  const [commOption, setCommOption] = useState("");

  const handleRadioComm = (comm) => {
    setCommOption(comm);
    if (comm === "updateCommonRemarkType") {
      setShowComm(true);
      setShowRemark(false);
      setShowRoad(false);
      setShowProp(false);
      setShowShop(false);
    } else {
      setShowComm(false);
    }
  };
  // Update Shop Name
  const [shopOption, setShopOption] = useState("");

  const handleRadioShop = (shop) => {
    setShopOption(shop);
    if (shop === "updateShopName") {
      setShowShop(true);
      setShowComm(false);

      setShowRoad(false);
      setShowRemark(false);
      setShowProp(false);
    } else {
      setShowShop(false);
    }
  };

  // Update Road Width
  const [shopRoad, setRoadOption] = useState("");

  const handleRadioRoad = (Road) => {
    setRoadOption(Road);
    if (Road === "updateRoadWidth") {
      setShowRoad(true);
      setShowComm(false);
      setShowShop(false);
      setShowRemark(false);
      setShowRemark(false);
      setShowProp(false);
      setShowAddress(false);
    } else {
      setShowShop(false);
    }
  };

  // Update Address
  const [shopAddress, setAddressOption] = useState("");

  const handleRadioAddress = (Address) => {
    setAddressOption(Address);
    if (Address === "updateAddress") {
      setShowAddress(true);
      setShowRoad(false);

      setShowComm(false);
      setShowShop(false);
      setShowRemark(false);
      setShowRemark(false);
      setShowProp(false);
    } else {
      setShowShop(false);
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
                  <h5>Update Property Address</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="col-md-12">
                      <div className="sub-title">Update Properties</div>
                      <div class="form-radio">
                        <div class="radio radio-inline">
                          <label>
                            <input
                              type="radio"
                              name="radio"
                              onChange={() =>
                                handleRadioAddress("updateAddress")
                              }
                            />
                            <i class="helper"></i>
                            Update Address
                          </label>
                        </div>
                        <div class="radio radio-inline">
                          <label>
                            <input
                              type="radio"
                              name="radio"
                              onChange={() =>
                                handleRadioRoad("updateRoadWidth")
                              }
                            />
                            <i class="helper"></i>
                            Update Road Width
                          </label>
                        </div>
                        <div class="radio radio-inline">
                          <label>
                            <input
                              type="radio"
                              name="radio"
                              onChange={() => handleRadioShop("updateShopName")}
                            />
                            <i class="helper"></i>
                            Update Shop Name
                          </label>
                        </div>
                        <div class="radio radio-inline">
                          <label>
                            <input
                              type="radio"
                              name="radio"
                              onChange={() =>
                                handleRadioComm("updateCommonRemarkType")
                              }
                            />
                            <i class="helper"></i>
                            Update Common Remark 
                          </label>
                        </div>
                        <div class="radio radio-inline">
                          <label>
                            <input
                              type="radio"
                              name="radio"
                              onChange={() =>
                                handleRadioProp("updatePropertyType")
                              }
                            />
                            <i class="helper"></i>
                            Update property Type
                          </label>
                        </div>
                        <div class="radio radio-inline">
                          <label>
                            <input
                              type="radio"
                              name="radio"
                              onChange={() =>
                                handleRadioChange("updateWadhGhatRemark")
                              }
                            />
                            <i class="helper"></i>
                            Update Wadh Ghat Remark
                          </label>
                        </div>
                      </div>
                    </div>

                    {showRemark && (
                      <>
                        <div className="mt-2 form-group row ml-2 text-center">
                          <h6 className="font-weight-bold mt-2 ml-2">
                            Select Property Type:
                          </h6>
                          <div className="row col-md-12">
                            <div className=" col-md-6 ">
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  Ward No.
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Ward</option>
                                    {wardOptions}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  From Property
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control  text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Property</option>
                                    {fromProp}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  To Property
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control  text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Property</option>
                                    {toProp}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form text-center">
                                <div className="col-sm-3 mx-auto">
                                  <button
                                    type="button"
                                    className="btn btn-grd-primary  text-center"
                                  >
                                    Show
                                  </button>
                                  <span className="messages"></span>
                                </div>
                              </div>
                            </div>
                            <div className=" col-md-6 ">
                              <div className="card p-2 ">
                                <div className="form-group row justify-content-center">
                                  <div className="col-md-8 mb-2 text-center">
                                    <label className="col-form-label text-center">
                                      WadhGhatRemark One
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-sm text-center"
                                      name="sName"
                                      id="sName"
                                      value={WadhGhatRemarkOne}
                                      onChange={(e) =>
                                        setWadhGhatRemarkOne(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="form-group row justify-content-center">
                                  <div className="col-md-8 mb-2">
                                    <label className="col-form-label text-center">
                                      WadhGhatRemark Two
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-sm text-center"
                                      name="sName"
                                      id="sName"
                                      value={WadhGhatRemarkTwo}
                                      onChange={(e) =>
                                        setWadhGhatRemarkTwo(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card ">
                          <div className="card-header ">
                            <h5>Update WadhGhat Remark</h5>
                          </div>
                          <div className="card-block">
                            <div
                              class="dt-responsive table-responsive"
                              style={{ maxHeight: "320px", overflow: "auto" }}
                            >
                              <table
                                id="order-table"
                                class="table table-striped table-bordered nowrap"
                              >
                                <thead>
                                  <tr className="text-center">
                                    <th className="font-weight-bold">
                                      OwnerId
                                    </th>
                                    <th className="font-weight-bold">
                                      WardNo.
                                    </th>
                                    <th className="font-weight-bold">
                                      From property
                                    </th>
                                    <th className="font-weight-bold">
                                      To property
                                    </th>
                                    <th className="font-weight-bold">
                                      WadhGhatRemarkOne
                                    </th>
                                    <th className="font-weight-bold">
                                      WadhGhatRemarkTwo
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="text-center">
                                    <td>B608</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
                                    <td>B603</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
                                    <td>B609</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
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
                          </div>
                        </div>
                      </>
                    )}

                    {showProp && (
                      <>
                        <div className="mt-2 form-group row ml-2 text-center">
                          <h6 className="font-weight-bold mt-2 ml-2">
                            Select Property Type:
                          </h6>
                          <div className="row col-md-12">
                            <div className=" col-md-6 ">
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  Ward No.
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Ward</option>
                                    {wardOptions}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  From Property
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control  text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Property</option>
                                    {fromProp}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  To Property
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control  text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Property</option>
                                    {toProp}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form text-center">
                                <div className="col-sm-3 mx-auto">
                                  <button
                                    type="button"
                                    className="btn btn-grd-success  text-center"
                                  >
                                    Show
                                  </button>
                                  <span className="messages"></span>
                                </div>
                              </div>
                            </div>
                            <div className=" col-md-6 ">
                              <div className="card p-2">
                                <div className="form-group row justify-content-center">
                                  <div className="col-md-8 mb-2 ">
                                    <label className="col-form-label text-center">
                                      Select Property Description
                                    </label>
                                    <select
                                      type="text"
                                      className="form-control form-control-sm text-center"
                                      name="sName"
                                      id="sName"
                                    >
                                      <option value="0">निवासी</option>
                                      <option value="1">खाजगी शाळा</option>
                                      <option value="2">न. प. शाळा</option>
                                      <option value="3">शासकीय शाळा</option>
                                      <option value="5">डिस्पेन्सरी</option>
                                      <option value="6">खाजगी रुग्णालय</option>
                                      <option value="7">शासकीय रुग्णालय</option>
                                      <option value="8">
                                        प्राथमिक आरोग्य केंद्र
                                      </option>
                                      <option value="9">
                                        न. प चे रुग्णालय
                                      </option>
                                      <option value="10">
                                        मंगल कार्यालय/टॉकीज
                                      </option>
                                      <option value="11">
                                        बँक वित्तीय संस्था
                                      </option>
                                      <option value="12">धार्मिक स्थळ </option>
                                      <option value="13">दुकान </option>
                                      <option value="14">
                                        रेस्टॉरंट आणि बार{" "}
                                      </option>
                                      <option value="15">औद्योगिक</option>
                                      <option value="16">
                                        न. प. चे कार्यालय
                                      </option>
                                      <option value="17">खाजगी कार्यालय</option>
                                      <option value="18">नर्सिंग होम </option>
                                      <option value="19">रेस्टॉरंट</option>
                                      <option value="20">
                                        न.प. इतर मालमत्ता{" "}
                                      </option>
                                      <option value="21">प्लॉट</option>
                                      <option value="22">
                                        {" "}
                                        निवासी व दुकान
                                      </option>
                                      <option value="23">अतिक्रमण </option>
                                      <option value="24">
                                        मा शासकीय मालमत्ता करमुक्त{" "}
                                      </option>
                                      <option value="25">मोबाईल टॉवर</option>
                                      <option value="26">पेट्रोल पंप </option>
                                      <option value="27">हॉटेल </option>
                                      <option value="28">लॉज</option>
                                      <option value="30"> निवास व हॉटेल</option>
                                      <option value="31"></option>
                                      <option value="32">चालू बांधकाम</option>
                                      <option value="33">मोठा </option>
                                      <option value="34">
                                        न. प. दुकान माळे
                                      </option>
                                      <option value="35">वस्तीगृह </option>
                                      <option value="36">व्यायाम शाळा</option>
                                      <option value="37">घरकुल</option>
                                      <option value="38"> पार्किंग</option>
                                      <option value="39">
                                        निवासी व कार्यालय
                                      </option>
                                      <option value="40">गोडाऊन </option>
                                      <option value="41">वाचनालय </option>
                                      <option value="42">
                                        केंद्र शासकीय मालमत्ता खाजगी रुग्णालय व
                                        निवासी
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group row justify-content-center">
                                  <div className="col-md-4 row ">
                                    <button
                                      type="button"
                                      className="btn btn-grd-info mx-auto"
                                      data-toggle="modal"
                                      data-target="#large-Modal"
                                    >
                                      Update
                                    </button>
                                    <div
                                      class="modal fade"
                                      id="large-Modal"
                                      tabindex="-1"
                                      role="dialog"
                                    >
                                      <div
                                        class="modal-dialog modal-sm"
                                        role="document"
                                      >
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h4 class="modal-title">
                                              Update Property Type
                                            </h4>

                                            <button
                                              type="button"
                                              class="close"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              <span aria-hidden="true">
                                                &times;
                                              </span>
                                            </button>
                                          </div>
                                          <div class="modal-body">
                                            <label className="col-form-label mb-2 text-center">
                                              Do You Want To Update Property
                                              Description ?
                                            </label>
                                          </div>
                                          <div class="modal-footer">
                                            <button
                                              type="button"
                                              class="btn btn-grd-success waves-effect "
                                              data-dismiss="modal"
                                            >
                                              Yes
                                            </button>
                                            <button
                                              type="button"
                                              class="btn btn-grd-inverse waves-effect waves-light "
                                              data-dismiss="modal"
                                            >
                                              No
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-grd-inverse mx-auto "
                                    >
                                      Clear
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card ">
                          <div className="card-header ">
                            <h5>Update Property Type</h5>
                          </div>
                          <div className="card-block">
                            <div
                              class="dt-responsive table-responsive"
                              style={{ maxHeight: "320px", overflow: "auto" }}
                            >
                              <table
                                id="order-table"
                                class="table table-striped table-bordered nowrap"
                              >
                                <thead>
                                  <tr className="text-center">
                                    <th className="font-weight-bold">
                                      OwnerId
                                    </th>
                                    <th className="font-weight-bold">
                                      WardNo.
                                    </th>
                                    <th className="font-weight-bold">
                                      Property No.
                                    </th>
                                    <th className="font-weight-bold">
                                      Parition No.
                                    </th>
                                    <th className="font-weight-bold">
                                      Property Description
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="text-center">
                                    <td>B608</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>4</td>

                                    <td>खाजगी शाळा</td>
                                  </tr>
                                  <tr className="text-center">
                                    <td>B603</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>4</td>

                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
                                    <td>B609</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>5</td>

                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {showComm && (
                      <>
                        <div className="mt-2 form-group row ml-2 text-center">
                          <h6 className="font-weight-bold mt-2 ml-2">
                            Select Property Type:{" "}
                          </h6>
                          <div className="row col-md-12">
                            <div className=" col-md-6 ">
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  Ward No.
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Ward</option>
                                    {wardOptions}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  From Property
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control  text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Property</option>
                                    {fromProp}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  To Property
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control  text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Property</option>
                                    {toProp}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form text-center">
                                <div className="col-sm-3 mx-auto">
                                  <button
                                    type="button"
                                    className="btn btn-grd-success  text-center"
                                  >
                                    Show
                                  </button>
                                  <span className="messages"></span>
                                </div>
                              </div>
                            </div>
                            <div className=" col-md-6 ">
                              <div className="card p-2">
                                <div className="form-group row justify-content-center">
                                  <div className="col-md-5 mb-2 text-center">
                                    <label className="col-form-label text-center">
                                      East
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-sm text-center"
                                      name="sName"
                                      id="sName"
                                      placeholder="Enter Remark"
                                    />
                                  </div>
                                  <div className="col-md-5 mb-2 text-center">
                                    <label className="col-form-label text-center">
                                      West
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-sm text-center"
                                      name="sName"
                                      id="sName"
                                      placeholder="Enter Remark"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row justify-content-center">
                                  <div className="col-md-5 mb-2 text-center">
                                    <label className="col-form-label text-center">
                                      North
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-sm text-center"
                                      name="sName"
                                      id="sName"
                                      placeholder="Enter Remark"
                                    />
                                  </div>
                                  <div className="col-md-5 mb-2 text-center">
                                    <label className="col-form-label text-center">
                                   South
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-sm text-center"
                                      name="sName"
                                      id="sName"
                                      placeholder="Enter Remark"
                                    />
                                  </div>
                                </div>
                                <div className=" row justify-content-center">
                                  <div className="col-md-4 row ">
                                    <button
                                      type="button"
                                      className="btn btn-grd-info mx-auto"
                                      data-toggle="modal"
                                      data-target="#large-Modal"
                                    >
                                      Update
                                    </button>
                                    <div
                                      class="modal fade"
                                      id="large-Modal"
                                      tabindex="-1"
                                      role="dialog"
                                    >
                                      <div
                                        class="modal-dialog modal-sm"
                                        role="document"
                                      >
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h4 class="modal-title">
                                              Update Common Remark
                                            </h4>

                                            <button
                                              type="button"
                                              class="close"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              <span aria-hidden="true">
                                                &times;
                                              </span>
                                            </button>
                                          </div>
                                          <div class="modal-body">
                                            <label className="col-form-label mb-2 text-center">
                                              Do You Want To Update Common{" "}
                                              <br />
                                              Remark ?
                                            </label>
                                          </div>
                                          <div class="modal-footer">
                                            <button
                                              type="button"
                                              class="btn btn-grd-success waves-effect "
                                              data-dismiss="modal"
                                            >
                                              Yes
                                            </button>
                                            <button
                                              type="button"
                                              class="btn btn-grd-inverse waves-effect waves-light "
                                              data-dismiss="modal"
                                            >
                                              No
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-grd-inverse mx-auto  "
                                    >
                                      Clear
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card ">
                          <div className="card-header ">
                            <h5>Update Common Remark Type</h5>
                          </div>
                          <div className="card-block">
                            <div
                              class="dt-responsive table-responsive"
                              style={{ maxHeight: "320px", overflow: "auto" }}
                            >
                              <table
                                id="order-table"
                                class="table table-striped table-bordered nowrap"
                              >
                                <thead>
                                  <tr className="text-center">
                                    <th className="font-weight-bold">
                                      OwnerId
                                    </th>
                                    <th className="font-weight-bold">
                                      WardNo.
                                    </th>
                                    <th className="font-weight-bold">
                                      Property No.
                                    </th>
                                    <th className="font-weight-bold">
                                      Parition No.
                                    </th>
                                    <th className="font-weight-bold">
                                      Property Description
                                    </th>
                                    <th className="font-weight-bold">पुर्व </th>
                                    <th className="font-weight-bold">पश्चिम</th>
                                    <th className="font-weight-bold"> उत्तर</th>
                                    <th className="font-weight-bold">
                                      {" "}
                                      दक्षिण
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="text-center">
                                    <td>B608</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
                                    <td>B603</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
                                    <td>B609</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
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
                          </div>
                        </div>
                      </>
                    )}

                    {showShop && (
                      <>
                        <div className="mt-2 form-group row ml-2 text-center">
                          <h6 className="font-weight-bold mt-2 ml-2">
                            Select Property Type:
                          </h6>
                          <div className="row col-md-12">
                            <div className=" col-md-6 ">
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  Ward No.
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Ward</option>
                                    {wardOptions}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  From Property
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control  text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Property</option>
                                    {fromProp}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  To Property
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control  text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Property</option>
                                    {toProp}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form text-center">
                                <div className="col-sm-3 mx-auto">
                                  <button
                                    type="button"
                                    className="btn btn-grd-success  text-center"
                                  >
                                    Show
                                  </button>
                                  <span className="messages"></span>
                                </div>
                              </div>
                            </div>
                            <div className=" col-md-6 ">
                              <div className="card p-2 ">
                                <div className="form-group row justify-content-center">
                                  <div className="col-md-8 mb-2 text-center">
                                    <label className="col-form-label text-center">
                                      Enter Shop Name In English
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-sm text-center"
                                      name="sName"
                                      id="sName"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row justify-content-center">
                                  <div className="col-md-8 mb-2">
                                    <label className="col-form-label text-center">
                                      Enter Shop Name In Marathi
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-sm text-center"
                                      name="sName"
                                      id="sName"
                                    />
                                  </div>
                                </div>
                                <div className="row justify-content-center">
                                  <div className="col-md-4 row ">
                                    <button
                                      type="button"
                                      className="btn btn-grd-info mx-auto"
                                      data-toggle="modal"
                                      data-target="#large-Modal"
                                    >
                                      Update
                                    </button>
                                    <div
                                      class="modal fade"
                                      id="large-Modal"
                                      tabindex="-1"
                                      role="dialog"
                                    >
                                      <div
                                        class="modal-dialog modal-sm"
                                        role="document"
                                      >
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h4 class="modal-title">
                                              Update Shop Name
                                            </h4>

                                            <button
                                              type="button"
                                              class="close"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              <span aria-hidden="true">
                                                &times;
                                              </span>
                                            </button>
                                          </div>
                                          <div class="modal-body">
                                            <label className="col-form-label mb-2 text-center">
                                              Do You Want To Update Shop Name ?
                                            </label>
                                          </div>
                                          <div class="modal-footer">
                                            <button
                                              type="button"
                                              class="btn btn-grd-success waves-effect "
                                              data-dismiss="modal"
                                            >
                                              Yes
                                            </button>
                                            <button
                                              type="button"
                                              class="btn btn-grd-inverse waves-effect waves-light "
                                              data-dismiss="modal"
                                            >
                                              No
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      className="btn btn-grd-inverse mx-auto  "
                                    >
                                      Clear
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card ">
                          <div className="card-header ">
                            <h5>Update Shop Name</h5>
                          </div>
                          <div className="card-block">
                            <div
                              class="dt-responsive table-responsive"
                              style={{ maxHeight: "320px", overflow: "auto" }}
                            >
                              <table
                                id="order-table"
                                class="table table-striped table-bordered nowrap"
                              >
                                <thead>
                                  <tr className="text-center">
                                    <th className="font-weight-bold">
                                      OwnerId
                                    </th>
                                    <th className="font-weight-bold">
                                      WardNo.
                                    </th>
                                    <th className="font-weight-bold">
                                      From property
                                    </th>
                                    <th className="font-weight-bold">
                                      To property
                                    </th>
                                    <th className="font-weight-bold">
                                      Partition No.
                                    </th>

                                    <th className="font-weight-bold">
                                      Shop Name
                                    </th>
                                    <th className="font-weight-bold">
                                      दुकान इमारतीचे नाव{" "}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="text-center">
                                    <td>B608</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td></td>
                                    <td></td>
                                    <td>बजाज गॅरेज</td>
                                  </tr>
                                  <tr className="text-center">
                                    <td>B603</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
                                    <td>B609</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
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
                          </div>
                        </div>
                      </>
                    )}

                    {showRoad && (
                      <>
                        <div className="mt-2 form-group row ml-2 text-center">
                          <h6 className="font-weight-bold mt-2 ml-2">
                            Select Property Type:
                          </h6>
                          <div className="row col-md-12">
                            <div className=" col-md-6 ">
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  Ward No.
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Ward</option>
                                    {wardOptions}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  From Property
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control  text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Property</option>
                                    {fromProp}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  To Property
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control  text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Property</option>
                                    {toProp}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form text-center">
                                <div className="col-sm-3 mx-auto">
                                  <button
                                    type="button"
                                    className="btn btn-grd-success  text-center"
                                  >
                                    Show
                                  </button>
                                  <span className="messages"></span>
                                </div>
                              </div>
                            </div>
                            <div className=" col-md-6 ">
                              <div className="card p-2 ">
                                <div className="form-group row justify-content-center">
                                  <div className="col-md-8 mb-2 text-center">
                                    <label className="col-form-label text-center">
                                      Enter Road Width
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-sm text-center"
                                      name="sName"
                                      id="sName"
                                    />
                                  </div>
                                </div>

                                <div className="row justify-content-center">
                                  <div className="col-md-4 row ">
                                    <button
                                      type="button"
                                      className="btn btn-grd-info mx-auto"
                                      data-toggle="modal"
                                      data-target="#large-Modal"
                                    >
                                      Update
                                    </button>
                                    <div
                                      class="modal fade"
                                      id="large-Modal"
                                      tabindex="-1"
                                      role="dialog"
                                    >
                                      <div
                                        class="modal-dialog modal-sm"
                                        role="document"
                                      >
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h4 class="modal-title">
                                              Update Road Width
                                            </h4>

                                            <button
                                              type="button"
                                              class="close"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              <span aria-hidden="true">
                                                &times;
                                              </span>
                                            </button>
                                          </div>
                                          <div class="modal-body">
                                            <label className="col-form-label mb-2 text-center">
                                              Do You Want To Update Road Width ?
                                            </label>
                                          </div>
                                          <div class="modal-footer">
                                            <button
                                              type="button"
                                              class="btn btn-grd-success waves-effect "
                                              data-dismiss="modal"
                                            >
                                              Yes
                                            </button>
                                            <button
                                              type="button"
                                              class="btn btn-grd-inverse waves-effect waves-light "
                                              data-dismiss="modal"
                                            >
                                              No
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-grd-inverse mx-auto  "
                                    >
                                      Clear
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card ">
                          <div className="card-header ">
                            <h5>Update Road Width</h5>
                          </div>
                          <div className="card-block">
                            <div
                              class="dt-responsive table-responsive"
                              style={{ maxHeight: "320px", overflow: "auto" }}
                            >
                              <table
                                id="order-table"
                                class="table table-striped table-bordered nowrap"
                              >
                                <thead>
                                  <tr className="text-center">
                                    <th className="font-weight-bold">
                                      OwnerId
                                    </th>
                                    <th className="font-weight-bold">
                                      WardNo.
                                    </th>
                                    <th className="font-weight-bold">
                                      From property
                                    </th>
                                    <th className="font-weight-bold">
                                      To property
                                    </th>
                                    <th className="font-weight-bold">
                                      Partition No.
                                    </th>

                                    <th className="font-weight-bold">
                                      Road Width
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="text-center">
                                    <td>B608</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td></td>
                                    <td>4</td>
                                    <td>0</td>
                                  </tr>
                                  <tr className="text-center">
                                    <td>B603</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td></td>
                                    <td>4</td>
                                    <td>0</td>
                                  </tr>
                                  <tr className="text-center">
                                    <td>B609</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td></td>
                                    <td>5</td>
                                    <td>0</td>
                                  </tr>
                                  <tr className="text-center">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {showAddress && (
                      <>
                        <div className="mt-2 form-group row ml-2 text-center">
                          <h6 className="font-weight-bold mt-2 ml-2">
                            Select Property Type:
                          </h6>
                          <div className="row col-md-12">
                            <div className=" col-md-6 ">
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  Ward No.
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Ward</option>
                                    {wardOptions}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  From Property
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control  text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Property</option>
                                    {fromProp}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-5 col-form-label">
                                  To Property
                                </label>
                                <div className="col-sm-4">
                                  <select
                                    className="form-control  text-center"
                                    name="ward"
                                    id="ward"
                                  >
                                    <option value="all">Select Property</option>
                                    {toProp}
                                  </select>
                                  <span className="messages"></span>
                                </div>
                              </div>
                              <div className="form text-center">
                                <div className="col-sm-3 mx-auto">
                                  <button
                                    type="button"
                                    className="btn btn-grd-success  text-center"
                                  >
                                    Show
                                  </button>
                                  <span className="messages"></span>
                                </div>
                              </div>
                            </div>
                            <div className=" col-md-6 ">
                              <div className="card p-2 ">
                                <div className="form-group row justify-content-center">
                                  <div className="col-md-8 mb-2 text-center">
                                    <label className="col-form-label text-center">
                                      Enter Address In English
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-sm text-center"
                                      name="sName"
                                      id="sName"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row justify-content-center">
                                  <div className="col-md-8 mb-2">
                                    <label className="col-form-label text-center">
                                      Enter Address In Marathi
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-sm text-center"
                                      name="sName"
                                      id="sName"
                                    />
                                  </div>
                                </div>
                                <div className="row justify-content-center">
                                  <div className="col-md-4 row ">
                                    <button
                                      type="button"
                                      className="btn btn-grd-info mx-auto"
                                      data-toggle="modal"
                                      data-target="#large-Modal"
                                    >
                                      Update
                                    </button>
                                    <div
                                      class="modal fade"
                                      id="large-Modal"
                                      tabindex="-1"
                                      role="dialog"
                                    >
                                      <div
                                        class="modal-dialog modal-sm"
                                        role="document"
                                      >
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h4 class="modal-title">
                                              Update Address
                                            </h4>

                                            <button
                                              type="button"
                                              class="close"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              <span aria-hidden="true">
                                                &times;
                                              </span>
                                            </button>
                                          </div>
                                          <div class="modal-body">
                                            <label className="col-form-label mb-2 text-center">
                                              Do You Want To Update Address ?
                                            </label>
                                          </div>
                                          <div class="modal-footer">
                                            <button
                                              type="button"
                                              class="btn btn-grd-success waves-effect "
                                              data-dismiss="modal"
                                            >
                                              Yes
                                            </button>
                                            <button
                                              type="button"
                                              class="btn btn-grd-inverse waves-effect waves-light "
                                              data-dismiss="modal"
                                            >
                                              No
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      className="btn btn-grd-inverse mx-auto  "
                                    >
                                      Clear
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card ">
                          <div className="card-header ">
                            <h5>Update Shop Name</h5>
                          </div>
                          <div className="card-block">
                            <div
                              class="dt-responsive table-responsive"
                              style={{ maxHeight: "320px", overflow: "auto" }}
                            >
                              <table
                                id="order-table"
                                class="table table-striped table-bordered nowrap"
                              >
                                <thead>
                                  <tr className="text-center">
                                    <th className="font-weight-bold">
                                      OwnerId
                                    </th>
                                    <th className="font-weight-bold">
                                      WardNo.
                                    </th>
                                    <th className="font-weight-bold">
                                      From property
                                    </th>
                                    <th className="font-weight-bold">
                                      To property
                                    </th>
                                    <th className="font-weight-bold">
                                      Partition No.
                                    </th>
                                    <th className="font-weight-bold">
                                      Address{" "}
                                    </th>
                                    <th className="font-weight-bold">पत्ता </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="text-center">
                                    <td>7608</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td></td>
                                    <td>Bid Jalna Road</td>
                                    <td> बीड जालना रोड</td>
                                  </tr>
                                  <tr className="text-center">
                                    <td>7603</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
                                    <td>B609</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
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
                          </div>
                        </div>
                      </>
                    )}
                  </form>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default UpdatePropertyAddress;
