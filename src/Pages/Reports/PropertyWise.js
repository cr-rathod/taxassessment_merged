import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PropertyWise = () => {
  const [wardNo, setWardNo] = useState("");
  const [fromProperty, setFromProperty] = useState("");
  const [toProperty, setToProperty] = useState("");
  const [financeYear, setFinanceYear] = useState("");
  const [current, setCurrent] = useState("");
  const [pending, setPending] = useState("");
  const [date, setDate] = useState("");
  const [topProperty, setTopProperty] = useState("");
  const [taxTotalGreater, settaxTotalGreater] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [alsoInclude, setAlsoInclude] = useState("");
  const [getProperty, setGetProperty] = useState("");
  const [patitionNo, setPatitionNo] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [todate, setToDate] = useState("");
  const [compareStatement, setCompareStatement] = useState("");
  const [transMast, SetTransMast] = useState("");
  const [TaxPending, setTaxPending] = useState("");
  const [billEntry, setBillEntry] = useState("");
  const [totalDemand, setTotalDemand] = useState("");
  const [currentOutstanding, setCurrentOutstanding] = useState("");
  const [pendingOutstanding, setPendingOutstanding] = useState("");
  const [totalOutstanding, setTotalOutstanding] = useState("");
  const [equalTo, setEqualTo] = useState("");
  const [NotEqualTo, setNotEqualTo] = useState("");
  const [lessThan, setLessThan] = useState("");
  const [greaterThan, setGreaterThan] = useState("");
  const [lessThanOrEqual, setLessThanOrEqual] = useState("");
  const [greaterThanOrEqual, setGreaterThanOrEqual] = useState("");
  const [between, setBetween] = useState("");
  const [selectDemand, setSelectDemand] = useState("");
  const [sortOnField, setSortOnField] = useState("");
  const [order, setOrder] = useState("");
  const checkboxCount = 100; 

  const handleCheckboxChanges = (index) => {
    if (index === 0) {
      const allChecked = !selectAll;
      setSelectAll(allChecked);
      const updatedSelectedWard = allChecked
        ? Array.from({ length: checkboxCount }).map((_, i) => `${i + 1}`)
        : [];
      setSelectedWard(updatedSelectedWard);
    } else {
      const updatedSelectedWard = [...selectedWard];
      const currentIndex = updatedSelectedWard.indexOf(`${index}`);
      if (currentIndex === -1) {
        updatedSelectedWard.push(`${index}`);
      } else {
        updatedSelectedWard.splice(currentIndex, 1);
      }
      setSelectedWard(updatedSelectedWard);
      setSelectAll(updatedSelectedWard.length === checkboxCount);
    }
  };
   // New property
   const [selectedNew, setSelectedNew] = useState([]);
   const [selectAllNew, setSelectAllNew] = useState(false);
  
  const handleCheckboxChangesNew = (Newindex) => {
    if (Newindex === 0) {
      const allCheckedNew = !selectAllNew;
      setSelectAllNew(allCheckedNew);
      const updatedSelectedWardNew = allCheckedNew
        ? Array.from({ length: checkboxCount }).map((_, i) => `${i + 1}`)
        : [];
      setSelectedNew(updatedSelectedWardNew);
    } else {
      const updatedSelectedWardNew = [...selectedNew];
      const currentIndex = updatedSelectedWardNew.indexOf(`${Newindex}`);
      if (currentIndex === -1) {
        updatedSelectedWardNew.push(`${Newindex}`);
      } else {
        updatedSelectedWardNew.splice(currentIndex, 1);
      }
      setSelectedNew(updatedSelectedWardNew);
      setSelectAllNew(updatedSelectedWardNew.length === checkboxCount);
    }
  };
  //
  const handleCompareChange = () => {
    setCompareStatement(!compareStatement);
  };

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
 

  

  // old property
  const [selectedOld, setSelectedOld] = useState([]);
  const [selectAllOld, setSelectAllOld] = useState(false);

  const handleCheckboxChangeOld = (oldindex) => {
    if (oldindex === 0) {
      const allCheckedOld = !selectAllOld;
      setSelectAllOld(allCheckedOld);
      const updatedSelectedWardOld = allCheckedOld
        ? Array.from({ length: checkboxCount }).map((_, i) => `${i + 1}`)
        : [];
      setSelectedOld(updatedSelectedWardOld);
    }else {
      const updatedSelectedWardOld = [...selectedOld];
      const currentIndex = updatedSelectedWardOld.indexOf(`${oldindex}`);
      if (currentIndex === -1) {
        updatedSelectedWardOld.push(`${oldindex}`);
      } else {
        updatedSelectedWardOld.splice(currentIndex, 1);
      }
      setSelectedOld(updatedSelectedWardOld);
      setSelectAllOld(updatedSelectedWardOld.length === checkboxCount);
    }
  };
  // Tax property
  const [selectedTax, setSelectedTax] = useState([]);
  const [selectAllTax, setSelectAllTax] = useState(false);

  const handleCheckboxChangeTax = (taxindex) => {
    if (taxindex === 0) {
      const allCheckedTax = !selectAllTax;
      setSelectAllTax(allCheckedTax);
      const updatedSelectedWardTax = allCheckedTax
        ? Array.from({ length: checkboxCount }).map((_, i) => `${i + 1}`)
        : [];
        setSelectedTax(updatedSelectedWardTax);
    }else {
      const updatedSelectedWardTax = [...selectedTax];
      const currentIndex = updatedSelectedWardTax.indexOf(`${taxindex}`);
      if (currentIndex === -1) {
        updatedSelectedWardTax.push(`${taxindex}`);
      } else {
        updatedSelectedWardTax.splice(currentIndex, 1);
      }
      setSelectedTax(updatedSelectedWardTax);
      setSelectAllTax(updatedSelectedWardTax.length === checkboxCount);
    }
  };
  // Trans property
  const [selectedTran, setSelectedTran] = useState([]);
  const [selectAllTran, setSelectAllTran] = useState(false);

  const handleCheckboxChangesTran = (tranindex) => {
    if (tranindex === 0) {
      const allCheckedTran = !selectAllTran;
      setSelectAllTran(allCheckedTran);
      const updatedSelectedWardTran = allCheckedTran
        ? Array.from({ length: checkboxCount }).map((_, i) => `${i + 1}`)
        : [];
        setSelectedTran(updatedSelectedWardTran);
    }else {
      const updatedSelectedWardTran = [...selectedTran];
      const currentIndex = updatedSelectedWardTran.indexOf(`${tranindex}`);
      if (currentIndex === -1) {
        updatedSelectedWardTran.push(`${tranindex}`);
      } else {
        updatedSelectedWardTran.splice(currentIndex, 1);
      }
      setSelectedTran(updatedSelectedWardTran);
      setSelectAllTran(updatedSelectedWardTran.length === checkboxCount);
    }
  };
  // Appeal property
  const [selectedAppeal, setSelectedAppeal] = useState([]);
  const [selectAllAppeal, setSelectAllAppeal] = useState(false);

  const handleCheckboxChangesAppeal = (appealindex) => {
    if (appealindex === 0) {
      const allCheckedAppeal = !selectAllAppeal;
      setSelectAllAppeal(allCheckedAppeal);
      const updatedSelectedWardAppeal = allCheckedAppeal
        ? Array.from({ length: checkboxCount }).map((_, i) => `${i + 1}`)
        : [];
      setSelectedAppeal(updatedSelectedWardAppeal);
    }else {
      const updatedSelectedWardAppeal = [...selectedAppeal];
      const currentIndex = updatedSelectedWardAppeal.indexOf(`${appealindex}`);
      if (currentIndex === -1) {
        updatedSelectedWardAppeal.push(`${appealindex}` );
      } else {
        updatedSelectedWardAppeal.splice(currentIndex, 1);
      }
      setSelectedAppeal(updatedSelectedWardAppeal);
      setSelectAllAppeal(updatedSelectedWardAppeal.length === checkboxCount);
    }
  };

  // Bill property
  const [selectedBill, setSelectedBill] = useState([]);
  const [selectAllBill, setSelectAllBill] = useState(false);
  const [selectMultiple, setSelectMultiple] = useState(false);
  const [selectSingle, setSelectSingle] = useState(false);

  const handleCheckboxChangesBill = (Billindex) => {
    if (Billindex === 0) {
      const allCheckedBill = !selectAllBill;
      setSelectAllBill(allCheckedBill);
      const updatedSelectedWardBill = allCheckedBill
        ? Array.from({ length: checkboxCount }).map((_, i) => `${i + 1}`)
        : [];
      setSelectedBill(updatedSelectedWardBill);
    }else {
      const updatedSelectedWardBill = [...selectedBill];
      const currentIndex = updatedSelectedWardBill.indexOf(`${Billindex}`);
      if (currentIndex === -1) {
        updatedSelectedWardBill.push(`${Billindex}`);
      } else {
        updatedSelectedWardBill.splice(currentIndex, 1);
      }
      setSelectedBill(updatedSelectedWardBill);
      setSelectAllBill(updatedSelectedWardBill.length === checkboxCount);
    }
  };

  const handleAllWardsChangeBill = (e) => {
    const isChecked = e.target.checked;
    setSelectAllBill(isChecked);
    setSelectMultiple(false);
    setSelectSingle(false);

    if (isChecked) {
      setSelectedBill([...Array(20).keys()].map((number) => `${number + 1}`));
    } else {
      setSelectedBill([]);
    }
  };

  const handleMultipleCheckboxChange = () => {
    setSelectMultiple(!selectMultiple);
    setSelectAllBill(false);
    setSelectSingle(false);

    if (selectMultiple) {
      setSelectedBill(["BillBookNo"]);
    } else {
      setSelectedBill([...Array(27).keys()].map((number) => `${number + 1}`));
    }
  };

  // useEffect(() => {
  //   if (selectMultiple) {
  //     setSelectedBill(["BillBookNo "]);
  //   } else {
  //     setSelectedBill([]);
  //   }
  // }, [selectMultiple]);

  const handleSingleCheckboxChange = () => {
    setSelectSingle(!selectSingle);
    setSelectAllBill(false);
    setSelectMultiple(false);

    if (selectSingle) {
      setSelectedBill(["BillBookNo"]);
    } else {
      setSelectedBill([...Array(27).keys()].map((number) => `${number + 1}`));
    }
  };

  // useEffect(() => {
  //   if (selectSingle) {
  //     setSelectedBill(["BillBookNo "]);
  //   } else {
  //     setSelectedBill([]);
  //   }
  // }, [selectMultiple]);

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Property Wise</h5>
                </div>
                <div className="card-block">
                  <form>
                   

                    <div className=" col-10 form-group row mt-4 ml-1">
                      <h6 className=" mt-2 text-info">Property Details :</h6>
                      <label className="col-1-md-1  mt-3  col-form-label">
                        Ward No
                      </label>
                      <div className="col-sm-1  mt-3 ">
                        <select
                          className="form-control text-right"
                          name="tPropNo"
                          id="tPropNo"
                          value={wardNo}
                          onChange={(e) => setWardNo(e.target.value)}
                        >
                          <option></option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>All</option>
                        </select>
                      </div>

                      <label className="col-1-md-1  mt-3  col-form-label">
                        From Property
                      </label>
                      <div className="col-sm-1 mx-2 mt-3 ">
                        <select
                          className="form-control text-right"
                          name="tPropNo"
                          id="tPropNo"
                          value={fromProperty}
                          onChange={(e) => setFromProperty(e.target.value)}
                        >
                          <option></option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                        </select>
                      </div>

                      <label className="col-1-md-1 mx-2 mt-3  col-form-label">
                        To Property
                      </label>
                      <div className="col-sm-1  mt-3 ">
                        <select
                          className="form-control text-right"
                          name="tPropNo"
                          id="tPropNo"
                          value={toProperty}
                          onChange={(e) => setToProperty(e.target.value)}
                        >
                          <option></option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                        </select>
                      </div>

                      {/*  */}
                      <label className="col-1-md-1 mx-2 mt-3 ml-2 col-form-label">
                        Partiton No
                      </label>
                      <div className="col-sm-1  mt-3 ">
                        <select
                          className="form-control text-right"
                          name="tPropNo"
                          id="tPropNo"
                          value={patitionNo}
                          onChange={(e) => setPatitionNo(e.target.value)}
                        >
                          <option></option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                        </select>
                      </div>

                      <label className="col-1-md-1   mx-2 mt-3 col-form-label">
                        Finance Year
                      </label>
                      <div className="col-1-sm-1 mt-3">
                        <select
                          className="form-control"
                          name="wdName"
                          type="checkbox"
                          id="wdName"
                          value={financeYear}
                          onChange={(e) => setFinanceYear(e.target.value)}
                        >
                          <option>2021-2022</option>
                          <option>2022-2023</option>
                          <option>2023-2024</option>
                        </select>
                      </div>
                    </div>

                    <div className=" form-group row mt-4 ml-3">
                      <div className="md-3">
                        <h6 className="text-info ">
                          Transaction Dates For Bill Entry Details :
                        </h6>
                      </div>

                      <label className="col-md-1 mt-2">From Date</label>
                      <div className="col-1-md-1">
                        <input
                          className="form-control"
                          type="text"
                          name="fromDate"
                          id="txtFDate"
                          value={fromDate}
                          placeholder="Enter Date"
                          onChange={(e) => setFromDate(e.target.value)}
                        />
                      </div>

                      <label className="col-md-1  mt-2">To Date</label>
                      <div className="col-1-md-1">
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
                    </div>
                    {/*  */}
                    <div className="col-19  form-group row ">
                      <h6 style={{marginLeft:"35px"}} className="  text-info">Property Mast:</h6>

                     
                      <div
                        className=" col-1-md-1 checkbox-fade fade-in-primary "
                        style={{
                          maxHeight: "130px",
                          overflowY: "auto",
                          border: "2px solid #ccc",
                          marginLeft:"-30px",
                           marginTop:"30px"
                        }}
                      >
                        {[
                         "All",
                          "OwnerId",
                          "ZoneNo",
                          "WardNo",
                          "PropertyNo",
                          "PartitionNo",
                          "CSNo",
                          "PlotNo",
                          "Old ZoneNo",
                          "Old WardNo",
                          "Old PropertyNo",
                          "Old PartitionNo",
                          "OldCSNo",
                          "OldPlotNo",
                          "Open Plot",
                          "Plot Area",
                          "Description",
                          "Owner Gender",
                          "Owner Name",
                          "Address",
                          "Ele.CardNo",
                          "PinCode",
                          "PanCardNo",
                          "AdharCardNo",
                          "PhoneNo",
                          "MobileNo",
                          "EmailId",
                          "Old RentalValue",
                          "OldRv",
                          "Old PropertyTax",
                          "Old TotalTax",
                          "Old PlotArea",
                          "Old ConstArea",
                          "Old ToiletNo",
                          "Toilet No",
                          "ShopName",
                          "ShopNumber",
                          "Plot Taxable Area(SqFt)",
                          "OpenPlotType",
                          "Wat Connecion",
                          "OP Renter Name",
                          "मालकाचे नाव",
                          "पत्ता",
                          "दुकान/इमारत नं",
                          "दुकान/Flat नं",
                          "CombinedPropRenter",
                          "Property Remark",
                          "AssessmentNo",
                        ].map((label, index) => (
    <div key={index} className={`form-check ${index === 0 && selectAll ? 'text-danger font-weight-bold' : ''}`}>
                           <label
                              htmlFor={`ward${index}`}
                              className="form-check-label mb-1"
                            >
                            <input
                              type="checkbox"
                              className="form-check-input checkbox-fade fade-in-primary"
                              id={`ward${index}`}
                              checked={
                                index === 0 ? selectAll : selectedWard.includes(`${index}`)
                              }
                              onChange={() => handleCheckboxChanges(index)}
                            />
                           
                               <span class="cr">
                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                  </span>
                              {label}
                            </label>
                          </div>
                        ))}
                      </div>
                
                      {/*  */}
                      <h6 className="text-info  ml-4  ">New Property Details:</h6>

                     
                     <div
                        className="  checkbox-fade fade-in-primary "
                        style={{
      maxHeight: "130px",
      overflowY: "auto",
      border: "2px solid #ccc",
      marginLeft: "-30px",
      marginTop: "30px",
    }}
  >
    {[
      "All",
      "Floor",
      "Const.Year",
      "Construction Type",
      "Type Of Use",
      "CarpetArea(SqFt)",
      "CarpetArea(SqMtr)",
      "Rooms",
      "Registration",
      "Renter Name",
      "भो.नाव",
      "Rent",
    ].map((label, Newindex) => (
      <div key={Newindex} className={`  form-check ${Newindex === 0 && selectAllNew ? 'text-danger font-weight-bold' : ''}`} >
        <label
          htmlFor={`New${Newindex}`}
          className="form-check-label mb-1"
        >
        <input
          type="checkbox"
          className="form-check-input checkbox-fade fade-in-primary"
          id={`New${Newindex }`}
          checked={
            Newindex === 0 ? selectAllNew : selectedNew.includes(`${Newindex}`)
          }
          onChange={() => handleCheckboxChangesNew(Newindex)}
        />
       <span class="cr">
                    <i class="cr-icon icofont icofont-ui-check txt-primary "></i>
                  </span>
          {label}
        </label>
      </div>
    ))}</div>

                      {/*  */}
                      <h6 className=" ml-4 mx-1  text-info">Bill Entry:</h6>
                      
                      <div style={{marginTop:"-7px"}} className="col-1-md-1 mx-2 col-form-label">
                        <input
                          type="checkbox"
                          className="form-control mt-1"
                          name="selectMultiple"
                          id="selectMultiple"
                          checked={selectMultiple}
                          onChange={handleMultipleCheckboxChange}
                        />
                      </div>
                      <label style={{marginTop:"-7px"}} className="col-1-md-1  text-danger col-form-label">
                        Multiple{" "}
                      </label>
                      <div style={{marginTop:"-7px"}} className="col-1-md-1 mx-2 col-form-label">
                        <input
                          type="checkbox"
                          className="form-control mt-1"
                          name="selectSingle"
                          id="selectSingle"
                          checked={selectSingle}
                          onChange={handleSingleCheckboxChange}
                        />
                      </div>
                      <label style={{marginTop:"-7px"}} className="col-1-md-1 text-danger col-form-label">
                        Single
                      </label>
                      <div
                        className="mt-4  col-1-md-1 checkbox-fade fade-in-primary "
                        style={{
                          maxHeight: "130px",
                          overflowY: "auto",
                          border: "2px solid #ccc",
                         marginLeft:"-130px"
                          
                        }}
                        
                      >
                        {[
                          "All",
                          "BillPropertyTax",
                          "BillTax1",
                          "BillEducation Tax",
                          "BillEmploymentTax",
                          "BillTreeCessTax",
                          "BillSpWaterCess1",
                          "BillSanitationTax",
                          "BillDrainCessTax",
                          "BillRoadCessTax",
                          "BillFireCessTax",
                          "BillLightCessTax",
                          "BillWaterBenfitsTax",
                          "BillMajorBuildingTax",
                          "BillSewDispCessTax",
                          "BillSPEduTax",
                          "BillWaterBillTax",
                          "BillTaxTotal",
                          "BillInterest",
                          "BillDiscount",
                          "BillNoticeFee",
                          "BillWarrentFee",
                          "BillMiscFee",
                          "BillNetTotal",
                          "BillTax2",
                          "BillTax3",
                          "BillTax4",
                          "BillTax5",
                          "BillBookNo.",
                          "Invoice No.",
                          "Bill No",
                          "Bill Transaction Date",
                          "Bill Date",
                          "EmpId",
                          "BillPaymentMode",
                          "DD/Cheque Date",
                          "Expire Date",
                          "IFSC No.",
                          "Amount",
                          "BillFinaceYear",
                          "Pending Year",
                          "Remark",
                          "Payment Type",
                          "TransactionId",
                          "Payment Resource",
                        ].map((label, Billindex) => (
                          <div key={Billindex} className={`form-check ${Billindex === 0 && selectAllBill ? 'text-danger font-weight-bold' : ''}`}>
                           <label
                              htmlFor={`billItem${Billindex}`}
                              className="form-check-label mb-1"
                            >
                          <input
                              type="checkbox"
                              className="form-check-input"
                              id={`billItem${Billindex }`}
                              checked={
                                Billindex === 0 ? selectAllBill : selectedBill.includes(`${Billindex}`)
                              }
                              onChange={() =>
                                handleCheckboxChangesBill(Billindex)
                              }
                            />
                            <span class="cr">
                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                  </span>
                              {label}
                            </label>
                          </div>
                        ))}
                      </div>
                                          {/*  */}
                                          </div>
                    <div className="col-19   form-group row ">
                    <h6 className="mx-4 text-info">Appeal:</h6>

                      
                      <div
                        className="mt-4  col-1-md-1 checkbox-fade fade-in-primary "
                        style={{
                          maxHeight: "130px",
                          overflowY: "auto",
                          border: "2px solid #ccc",
                          
                        }}
                      >
                        {[
                          "All",
                          "AppealDate",
                          "EmpId",
                          "AppealYear",
                          "AppealReason",
                          "AppealRentalValue",
                          "AppealPropertyTax",
                          "AppealTreeCess",
                          "AppealEduTax",
                          "AppealEmpTax",
                          "AppealSpEduTax",
                          "AppealSanitation",
                          "AppealDrainTax",
                          "AppealSpWatCess",
                          "AppealRoadCess",
                          "AppealFireCess",
                          "AppealLightCess",
                          "AppealWaterBenfits",
                          "AppealMajorBuilding",
                          "AppealSewageDisp",
                          "AppealTax1",
                          "AppealTax2",
                          "AppealTax3",
                          "AppealTax4",
                          "AppealTax5",
                          "Appeal Interest",
                          "HearingDate",
                          "HearingYear",
                          "HearingReason",
                          "HearingRentalValue",
                          "HearingPropertyTax",
                          "HearingTreeCess",
                          "HearingEduTax",
                          "HearingSpEduTax",
                          "HearingSanitation",
                          "HearingDrainCess",
                          "HearingSpWaterCess",
                          "HearingRoadCess",
                          "HearingFireCess",
                          "HearingLightCess",
                          "HearingWaterBenfits",
                          "HearingMajorBuliding",
                          "HearingSewageDisp",
                          "HearingTax1",
                          "HearingTax2",
                          "HearingTax3",
                          "HearingTax4",
                          "HearingTax5",
                          "App.CommDate",
                          "App.CommYear",
                          "App.CommReason",
                          "App.CommRental",
                          "App.CommProperty",
                          "App.CommTreeCess",
                          "App.CommEduTax",
                          "App.CommEmpTax",
                          "App.CommSpEdu",
                          "AppCommSanitation",
                          "App.CommDrainCess",
                          "App.CommSpWater",
                          "App.CommRoadCess",
                          "App.CommLightCess",
                          "App.CommWaterBill",
                          "App.CommMajorBill",
                          "App.CommSewage",
                          "App.CommTax1",
                          "App.CommTax2",
                          "App.CommTax3",
                          "App.CommTax4",
                          "App.CommTax5",
                          "Remi.Date",
                        ].map((label, appealindex) => (
                          <div key={appealindex} className={`form-check ${appealindex === 0 && selectAllAppeal ? 'text-danger font-weight-bold' : ''}`}>
                           <label
                              htmlFor={`appealindex${appealindex}`}
                              className="form-check-label mb-1 "
                            >
                          <input
                              type="checkbox"
                              className="form-check-input checkbox-fade fade-in-primary "
                              id={`appealindex${appealindex }`}
                              checked={
                                appealindex === 0 ? selectAllAppeal : selectedAppeal.includes(`${appealindex}`)
                              }
                              onChange={() =>
                                handleCheckboxChangesAppeal(appealindex)}
                              
                            />
                          
                          <span class="cr">
                    <i class="cr-icon   icofont icofont-ui-check txt-primary "></i>
                  </span>
                              {label}
                            </label>
                          </div>
                        ))}
                      </div>
                      {/*  */}
                      <h6 className=" text-info">Old Property</h6>

<div
  className="mt-4 col-1-md-1  checkbox-fade fade-in-primary  "
  style={{
    maxHeight: "130px",
    overflowY: "auto",
    border: "2px solid #ccc",
  }}
>
  {[
    "All",
    "OldFloor",
    "OldConstr.Year",
    "OldConstType",
    "OldTypeOfUse",
    "OldCarpetArea(SqFt)",
    "OldCarpetArea(SqMtr)",
    "OldRegistration",
  ].map((label, oldindex) => (
    <div key={oldindex} className={`form-check ${oldindex === 0 && selectAllOld ? 'text-danger font-weight-bold' : ''}`}>
      <label
        htmlFor={`Old${oldindex}`}
        className="form-check-label mb-1"
      >
      <input
        type="checkbox"
        className="form-check-input checkbox-fade fade-in-primary"
        id={`Old${oldindex}`}
        checked={
          oldindex === 0 ? selectAllOld : selectedOld.includes(`${oldindex}`)
        }
        onChange={() => handleCheckboxChangeOld(oldindex)}
      />
       <span class="cr">
<i class="cr-icon icofont icofont-ui-check txt-primary"></i>
</span>
        {label}
      </label>
    </div>
  ))}
</div>

                     {/*  */}
                      <h6 className=" ml-3 text-info">Trans Mast:</h6>

                     
                     
                      <div
                        className="mt-4 col-1-md-1  checkbox-fade fade-in-primary  "
                        style={{
                          maxHeight: "130px",
                          overflowY: "auto",
                          border: "2px solid #ccc",
                        }}
                      >
                        {[
                          "All",
                          "AssementId",
                          "FinanceYear",
                          "RateableValue",
                          "PropertyTax",
                          "EducationTax",
                          "EmploymentTax",
                          "TreeCess",
                          "SpEducation",
                          "Sanitation",
                          "DrainCess",
                          "SpWaterCess",
                          "RoadCess",
                          "FireCess",
                          "LightCess",
                          "WaterBenefit",
                          "MajorBuilding",
                          "SewageDisposal",
                          "WaterBill",
                          "Tax1",
                          "Tax2",
                          "Tax3",
                          "Tax4",
                          "Tax5",
                          "TaxTotal",
                          "LettingValue",
                          "YearlyRentedArea",
                          "AnnualRent",
                          "Maintaince",
                          "Interest",
                          "RRateableValue",
                          "CRateableValue",
                          "RLettingValue",
                          "CLettingValue",
                          "REducationTax",
                          "CEductaionTax",
                          "REmploymentTax",
                          "CEmployementTax",
                          "Trans.Remark",
                        ].map((label, tranindex) => (
                          <div key={tranindex} className="form-check">
                            <label
                              htmlFor={`tranindex${tranindex}`}
                              className="form-check-label mb-1"
                            >
                          <input
                              type="checkbox"
                              className="form-check-input checkbox-fade fade-in-primary"
                              id={`tranindex${tranindex + 1}`}
                              checked={
                                tranindex === 0 ? selectAllTran : selectedTran.includes(`${tranindex}`)
                              }
                              onChange={() =>
                                handleCheckboxChangesTran(tranindex)
                              }
                            />
                           <span class="cr">
                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                  </span>
                              {label}
                            </label>
                          </div>
                        ))}
                      </div>
                      {/*  */}
                      {/* </div>
                    <div className="col-19   form-group row "> */}
                      <h6 className=" text-info mx-2">Tax Pending:</h6>

                     
                      <div
                        className="mt-4 col-1-md-1 checkbox-fade fade-in-primary "
                        style={{
                          maxHeight: "130px",
                          overflowY: "auto",
                          border: "2px solid #ccc",
                        }}
                      >
                        {[
                          "All",
                          "PenPendingYear",
                          "Ped.PropertyTax",
                          "Ped.EducationTax",
                          "Ped.TreeCess",
                          "Ped.EmploymentIT",
                          "Ped.FireCess",
                          "Ped.SpEducationTax",
                          "Ped.MajorBuilding",
                          "Ped.LightCess",
                          "Ped.RoadCess",
                          "Ped.DrainCess",
                          "Ped.SewageDisposal",
                          "Ped.SpWaterCess",
                          "Ped.WaterBenfits",
                          "Ped.Tax1",
                          "Ped.Tax2",
                          "Ped.Tax3",
                          "Ped.Tax4",
                          "Ped.Tax5",
                          "Ped.TaxTotal",
                          "Ped.Interest",
                          "Ped.NetTotal",
                          "Ped.Remark",
                        ].map((label, taxindex) => (
                          <div key={taxindex} className={`form-check ${taxindex === 0 && selectAllTax ? 'text-danger font-weight-bold' : ''}`}>
                          <label
                              htmlFor={`taxindex${taxindex}`}
                              className="form-check-label mb-1"
                            >
                          <input
                              type="checkbox"
                              className="form-check-input checkbox-fade fade-in-primary"
                              id={`taxindex${taxindex }`}
                              checked={
                                taxindex === 0 ? selectAllTax : selectedTax.includes(`${taxindex}`)
                              }
                              onChange={() =>
                                handleCheckboxChangeTax(taxindex)
                              }
                            />
                            
                            <span class="cr">
                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                  </span>
                              {label}
                            </label>
                          </div>
                        ))}
                      </div>
                      {/*  */}
                      </div>

                    {/*  */}
                    <div className="row ml-1">
  <label className="col-1-md-1 ml-3 font-weight-bold text-info">
    Compare Statement:
  </label>
  <div className="col-1-md-1 mt-1 mx-2">
    <input
      type="checkbox"
      className="form-control"
      name="compareStatement"
      id="compareStatement"
      checked={compareStatement}
      onChange={handleCompareChange}
    />
  </div>
</div>

                    <div className="  form-group row ml-1 ">
                      <div className="col-1-md-1 ml-3  mt-2 ">
                        <input
                          type="radio"
                          className="form-control mt-1  "
                          name="tPropNo"
                          id="tPropNo"
                          value={equalTo}
                          onChange={(e) => setEqualTo(e.target.value)}
                          disabled={!compareStatement}
                        />
                      </div>
                      <label
                        className="col-1-md-1 mt-2 "
                        disabled={!compareStatement}
                      >
                        EqualTo
                      </label>
                      <div className="col-md-1  mt-2">
                        <input
                          type="text"
                          className="form-control mr-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={equalTo}
                          onChange={(e) => setEqualTo(e.target.value)}
                          disabled={!compareStatement}
                        />
                      </div>
                      <div className="col-1-md-1 mt-2  ">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={NotEqualTo}
                          onChange={(e) => setNotEqualTo(e.target.value)}
                          disabled={!compareStatement}
                        />
                      </div>
                      <label
                        className="col-1-md-1 mt-2  "
                        disabled={!compareStatement}
                      >
                        Not
                        <br />
                        EqualTo
                      </label>
                      <div className="col-md-1 mt-2">
                        <input
                          type="text"
                          className="form-control mr-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={NotEqualTo}
                          onChange={(e) => setNotEqualTo(e.target.value)}
                          disabled={!compareStatement}
                        />
                      </div>
                      <div className="col-1-md-1 mt-2 ">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={lessThan}
                          onChange={(e) => setLessThan(e.target.value)}
                          disabled={!compareStatement}
                        />
                      </div>
                      <label
                        className="col-1-md-1 mt-2 "
                        disabled={!compareStatement}
                      >
                        Less
                        <br />
                        Than
                      </label>
                      <div className="col-md-1 mt-2">
                        <input
                          type="text"
                          className="form-control mr-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={lessThan}
                          onChange={(e) => setLessThan(e.target.value)}
                          disabled={!compareStatement}
                        />
                      </div>
                      <div className="col-1-md-1  mt-2 ">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={greaterThan}
                          onChange={(e) => setGreaterThan(e.target.value)}
                          disabled={!compareStatement}
                        />
                      </div>
                      <label
                        className="col-1-md-1 mt-2 "
                        disabled={!compareStatement}
                      >
                        Greater
                        <br />
                        Than
                      </label>
                      <div className="col-md-1 mt-2">
                        <input
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          value={greaterThan}
                          onChange={(e) => setGreaterThan(e.target.value)}
                          disabled={!compareStatement}
                        />
                      </div>
                      <div className="col-1-md-1 mt-1  ">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={lessThanOrEqual}
                          onChange={(e) => setLessThanOrEqual(e.target.value)}
                          disabled={!compareStatement}
                        />
                      </div>
                      <label
                        className="col-1-md-1 mt-1 "
                        disabled={!compareStatement}
                      >
                        LessThan
                        <br />
                        orEqualTo
                      </label>
                      <div className="col-md-1 ">
                        <input
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          value={lessThanOrEqual}
                          onChange={(e) => setLessThanOrEqual(e.target.value)}
                          disabled={!compareStatement}
                        />
                      </div>
                      <div className="col-1-md-1 mt-1  ">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={greaterThanOrEqual}
                          onChange={(e) =>
                            setGreaterThanOrEqual(e.target.value)
                          }
                          disabled={!compareStatement}
                        />
                      </div>
                      <label
                        className="col-1-md-1 mt-1 "
                        disabled={!compareStatement}
                      >
                        GreaterThan
                        <br />
                        or EqualTo
                      </label>
                      <div className="col-md-1 ">
                        <input
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          value={greaterThanOrEqual}
                          onChange={(e) =>
                            setGreaterThanOrEqual(e.target.value)
                          }
                          disabled={!compareStatement}
                        />
                      </div>
                      <div className="col-1-md-1 mt-1  ">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={between}
                          onChange={(e) => setBetween(e.target.value)}
                          disabled={!compareStatement}
                        />
                      </div>
                      <label
                        className="col-1-md-1 mt-1  "
                        disabled={!compareStatement}
                      >
                        Between
                        <br />
                        And
                      </label>
                      <div className="col-md-1">
                        <input
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          value={between}
                          onChange={(e) => setBetween(e.target.value)}
                          disabled={!compareStatement}
                        />
                      </div>
                    </div>
                    {/*  */}
                    <h6 className=" ml-3">
                      <span className="bg-info ml-1 ">
                        Select TaxTotal Field of a Following Table To Compare
                      </span>
                    </h6>
                    <div className="form-group row ml-1 ">
                      <div className="col-1-md-1 mt-1 mx-2 ml-3  ">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={transMast}
                          onChange={(e) => SetTransMast(e.target.value)}
                        />
                      </div>
                      <label className="col-1-md-1 mt-1  ">Trans.Mast</label>

                      <div className="col-1-md-1 mt-1 mx-2 ml-3 ">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={TaxPending}
                          onChange={(e) => setTaxPending(e.target.value)}
                        />
                      </div>
                      <label className="col-1-md-1 mt-1  ">Tax Pending</label>

                      <div className="col-1-md-1 mt-1 mx-2 ml-3 ">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={billEntry}
                          onChange={(e) => setBillEntry(e.target.value)}
                        />
                      </div>
                      <label className="col-1-md-1 mt-1  ">Bill Entry</label>

                      <div className="col-1-md-1 mt-1 mx-2 ml-3">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={totalDemand}
                          onChange={(e) => setTotalDemand(e.target.value)}
                        />
                      </div>
                      <label className="col-1-md-1 mt-1  ">Total Demand</label>

                      <div className="col-1-md-1 mt-1 mx-2 ml-3 ">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={currentOutstanding}
                          onChange={(e) =>
                            setCurrentOutstanding(e.target.value)
                          }
                        />
                      </div>
                      <label className="col-1-md-1 mt-1  ">
                        Current Outstanding
                      </label>

                      <div className="col-1-md-1 mt-1 mx-3 ml-3 ">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={pendingOutstanding}
                          onChange={(e) =>
                            setPendingOutstanding(e.target.value)
                          }
                        />
                      </div>
                      <label className="col-1-md-1 mt-1  ">
                        Pending Outstanding
                      </label>

                      <div className="col-1-md-1 mt-1 mx-2 ">
                        <input
                          type="radio"
                          className="form-control mt-1"
                          name="tPropNo"
                          id="tPropNo"
                          value={totalOutstanding}
                          onChange={(e) => setTotalOutstanding(e.target.value)}
                        />
                      </div>
                      <label className="col-1-md-1 mt-1  ">
                        Total Outstanding
                      </label>
                    </div>
                    {/*  */}
  <div className=" form-group ml-1 row">
  <label className="form-label ml-3 mt-2 text-info">
        Select Demand Type:
      </label>
    <div className="col-md-2  col-sm-6">
      
      <select
        className="form-control "
        name="selectDemand"
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
    
    <label className="form-label mt-2 text-info">Top Property</label>

    <div className="col-md-1 col-sm-6">
      <input
        className="form-control"
        name="topProperty"
        type="text"
        value={topProperty}
        onChange={(e) => setTopProperty(e.target.value)}
      />
    </div>

    <label className="form-label mt-2 text-info">Sort On Field</label>

    <div className="col-md-2 col-sm-6">
      <select
        className="form-control"
        name="sortOnField"
        value={sortOnField}
        onChange={(e) => setSortOnField(e.target.value)}
      >
          <option>---Please Select One---</option>
                          <option>Owner Id</option>
                          <option>WardNo PropNo PartiNo</option>
                          <option>TaxTotal</option>
                          <option>NetTaxTotal</option>
      </select>
    </div>

    <label className="form-label mt-2 text-info">Order By</label>

    <div className="col-md-2 col-sm-6">
      <select
        className="form-control"
        name="order"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      >
        <option>---Please Select One---</option>
                          <option>Ascending</option>
                          <option>Desending</option>
      </select>
    </div>

    <div className="row mt-2">
        <div className="col text-danger">RecordCount: 11</div>
      </div>
    <div className="col-md-4">
      
    <div className="row mt-3 justify-content-center text-center">
  <div className="col-md-4 col-sm-12 mb-2 ">
    <button type="submit" className="btn btn-sm btn-grd-primary waves-effect waves-light w-100">
      Show
    </button>
  </div>
  <div className="col-md-4 col-sm-12 mb-2">
    <button type="submit" className="btn btn-sm w-100 btn-grd-primary waves-effect waves-light">
      Export To Excel
    </button>
  </div>
  <div className="col-md-4 col-sm-12 mb-2">
    <button type="submit" className="btn btn-sm w-100 btn-grd-inverse waves-effect waves-light">
      Clear All
    </button>
  </div>
</div>


    </div>
  </div>


                                      
                                      {/*  */}
                                      <div className="row ">
    <div className="col-md-12  ">
     
<div class="dt-responsive table-responsive " style={{maxHeight: "250px", overflow: "auto"}}>
                                      <table
                                        id="newcons-table"
                                        class="table table-striped table-bordered nowrap"
                                      >
                                        <thead>
                                          <tr>
                                            <th  className="font-weight-bold">OwnerId</th>
                                            <th  className="font-weight-bold">NewZoneNo.</th>
                                            <th  className="font-weight-bold">NewWardNo.</th>
                                            <th  className="font-weight-bold">NewPropertyNo.</th>
                                            <th className="font-weight-bold">NewPartitionNo</th>
                                            <th  className="font-weight-bold">NewCityServeyNo.</th>
                                            <th  className="font-weight-bold">NewPlotNo</th>
                                            <th  className="font-weight-bold">OldZoneNo</th>
                                            <th  className="font-weight-bold">OldWardNo</th>
                                            <th  className="font-weight-bold">OldPropertyNo</th>
                                            <th  className="font-weight-bold">OldPartitionNo</th>
                                           <th  className="font-weight-bold">OldPlotNo</th>
                                            <th  className="font-weight-bold">OpenPlot</th>
                                            <th  className="font-weight-bold">PlotArea</th>
                                            <th  className="font-weight-bold">PropertyDescription</th>
                                            <th  className="font-weight-bold">OwnerGender</th>
                                            <th  className="font-weight-bold">OwnerName</th>
                                            <th  className="font-weight-bold">Address</th>
                                            <th  className="font-weight-bold">ElectionCardNo.</th>
                                            <th  className="font-weight-bold">PanCardNo.</th>
                                            <th  className="font-weight-bold">AdharCardNo.</th>
                                            <th  className="font-weight-bold">PhoneNo.</th>
                                            <th  className="font-weight-bold">MobileNo.</th>
                                            <th  className="font-weight-bold">EmailId</th>
                                            <th  className="font-weight-bold">OldRentalValue</th>
                                            <th  className="font-weight-bold">OldRv</th>
                                            <th  className="font-weight-bold">OldPropertyTax</th>
                                            <th  className="font-weight-bold">OldTotalTax</th>
                                            <th  className="font-weight-bold">OldPlotArea</th>
                                            <th  className="font-weight-bold">OldConstArea</th>
                                            <th  className="font-weight-bold">OldToiletNo.</th>
                                            <th  className="font-weight-bold">OldTotalRooms</th>
                                            <th  className="font-weight-bold">NewToiletNo</th>
                                            <th  className="font-weight-bold">ShopName</th>
                                            <th  className="font-weight-bold">ShopNumber</th>
                                            <th  className="font-weight-bold">PlotTaxableAreaSqFt</th>
                                            <th  className="font-weight-bold">OpenPlotType</th>
                                            <th  className="font-weight-bold">NoOfWaterConnection</th>
                                            <th  className="font-weight-bold">RenterName</th>
                                            <th  className="font-weight-bold">MarathiOwnerName</th>
                                            <th  className="font-weight-bold">MarathiOwnerPatta</th>
                                            <th  className="font-weight-bold">MarathiOwnerDukanlmarateNav</th>
                                            <th  className="font-weight-bold">MarathiOwnerDukanFlatNo.</th>
                                            <th  className="font-weight-bold">CombPropRemark</th>
                                            <th  className="font-weight-bold">Remark</th>
                                            <th  className="font-weight-bold">AssessmentNo.</th>
                                           
                                            
                                    
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>14641</td>
                                            <td>3</td>

                                            <td>8</td>
                                            <td>7</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>4</td>
                                            <td>P4000465</td>
                                            <td></td>
                                              <td>145121</td>
                                            <td></td>
                                            <td>
                                <label>
                                  <input type="checkbox" />
                                </label>
                              </td>
                                            <td>322</td>
                                            <td>दुकान </td>
                                            <td></td>
                                            <td>Shoba Indarchand Kuchereya</td>
                                            <td>
                                              Bhawati Tokji
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                             <td></td>
                                            <td></td>
                                            <td></td> 
                                            <td></td>
                                            <td>3645.56</td>
                                            <td>3281</td> 
                                            <td>722</td>
                                            <td>722</td>
                                            <td>322</td>
                                             <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                             <td>0</td>
                                            <td>Sai egency</td>
                                             <td>0</td>
                                            <td>R</td>
                                            <td>0</td> 
                                            <td></td>
                                            <td>शोभा इंद्रचंद्रा कुचेलिया </td>
                                            <td>जालना बीड रोड,स्टेट बँक ऑफ इंडिया </td> 
                                            <td>साई एजन्सी</td>
                                            <td></td>
                                            <td>No</td> <td></td>
                                            <td>Ge050090130014641</td>
                                            
                                          </tr>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>14642</td>
                                            <td>3</td>

                                            <td>8</td>
                                            <td>7</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>4</td>
                                            <td>P4000463</td>
                                            <td></td>
                                              <td>145119</td>
                                            <td></td>
                                            <td>
                                <label>
                                  <input type="checkbox" />
                                </label>
                              </td>
                                            <td>322</td>
                                            <td>दुकान </td>
                                            <td></td>
                                            <td>Kanchanbai Ramial Tathed</td>
                                            <td>
                                              Bhawati Tokji
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                             <td>6115953822551</td>
                                            <td></td>
                                            <td>78896147547</td> 
                                            <td></td>
                                            <td>3520</td>
                                            <td>3168</td> 
                                            <td>697</td>
                                            <td>697</td>
                                            <td>322</td>
                                             <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                             <td>0</td>
                                            <td>Mahavir Kirana</td>
                                             <td>0</td>
                                            <td>R</td>
                                            <td>0</td> 
                                            <td></td>
                                            <td>कांचनबाई रामिल तथंङ </td>
                                            <td>जालना बीड  रोड  स्टेट बँक ऑफ इंडिया </td> 
                                            <td></td>
                                            <td></td>
                                            <td></td> <td></td>
                                            <td>Ge050090130014642</td>
                                           
                                          </tr>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>14643</td>
                                            <td>3</td>

                                            <td>8</td>
                                            <td>7</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>4</td>
                                            <td>P4000465</td>
                                            <td></td>
                                              <td>145121</td>
                                            <td></td>
                                            <td>
                                <label>
                                  <input type="checkbox" />
                                </label>
                              </td>
                                            <td>322</td>
                                            <td>दुकान </td>
                                            <td></td>
                                            <td>Shoba Indarchand Kuchereya</td>
                                            <td>
                                              Bhawati Tokji
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                             <td></td>
                                            <td></td>
                                            <td></td> 
                                            <td></td>
                                            <td>3645.56</td>
                                            <td>3281</td> 
                                            <td>722</td>
                                            <td>722</td>
                                            <td>322</td>
                                             <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                             <td>0</td>
                                            <td>Sai egency</td>
                                             <td>0</td>
                                            <td>R</td>
                                            <td>0</td> 
                                            <td></td>
                                            <td>शोभा इंद्रचंद्रा कुचेलिया </td>
                                            <td>जालना बीड  रोड  स्टेट बँक ऑफ इंडिया </td> 
                                            <td></td>
                                            <td></td>
                                            <td></td> <td></td>
                                            <td>Ge050090130014641</td>

                                          </tr>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>14644</td>
                                            <td>3</td>

                                            <td>8</td>
                                            <td>7</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>4</td>
                                            <td>P4000465</td>
                                            <td></td>
                                              <td>145121</td>
                                            <td></td>
                                            <td>
                                <label>
                                  <input type="checkbox" />
                                </label>
                              </td>
                                            <td>322</td>
                                            <td>दुकान </td>
                                            <td></td>
                                            <td>Shoba Indarchand Kuchereya</td>
                                            <td>
                                              Bhawati Tokji
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                             <td></td>
                                            <td></td>
                                            <td></td> 
                                            <td></td>
                                            <td>3645.56</td>
                                            <td>3281</td> 
                                            <td>722</td>
                                            <td>722</td>
                                            <td>322</td>
                                             <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                             <td>0</td>
                                            <td>Sai egency</td>
                                             <td>0</td>
                                            <td>R</td>
                                            <td>0</td> 
                                            <td></td>
                                            <td>शोभा इंद्रचंद्रा कुचेलिया </td>
                                            <td>जालना बीड  रोड  स्टेट बँक ऑफ इंडिया </td> 
                                            <td></td>
                                            <td></td>
                                            <td></td> <td></td>
                                            <td>Ge050090130014641</td>

                                          </tr>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>14645</td>
                                            <td>3</td>

                                            <td>8</td>
                                            <td>7</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>4</td>
                                            <td>P4000465</td>
                                            <td></td>
                                              <td>145121</td>
                                            <td></td>
                                            <td>
                                <label>
                                  <input type="checkbox" />
                                </label>
                              </td>
                                            <td>322</td>
                                            <td>दुकान </td>
                                            <td></td>
                                            <td>Shoba Indarchand Kuchereya</td>
                                            <td>
                                              Bhawati Tokji
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                             <td></td>
                                            <td></td>
                                            <td></td> 
                                            <td></td>
                                            <td>3645.56</td>
                                            <td>3281</td> 
                                            <td>722</td>
                                            <td>722</td>
                                            <td>322</td>
                                             <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                             <td>0</td>
                                            <td>Sai egency</td>
                                             <td>0</td>
                                            <td>R</td>
                                            <td>0</td> 
                                            <td></td>
                                            <td>शोभा इंद्रचंद्रा कुचेलिया </td>
                                            <td>जालना बीड  रोड  स्टेट बँक ऑफ इंडिया </td> 
                                            <td></td>
                                            <td></td>
                                            <td></td> <td></td>
                                            <td>Ge050090130014641</td>

                                          </tr>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>14646</td>
                                            <td>3</td>

                                            <td>8</td>
                                            <td>7</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>4</td>
                                            <td>P4000465</td>
                                            <td></td>
                                              <td>145121</td>
                                            <td></td>
                                            <td>
                                <label>
                                  <input type="checkbox" />
                                </label>
                              </td>
                                            <td>322</td>
                                            <td>दुकान </td>
                                            <td></td>
                                            <td>Shoba Indarchand Kuchereya</td>
                                            <td>
                                              Bhawati Tokji
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                             <td></td>
                                            <td></td>
                                            <td></td> 
                                            <td></td>
                                            <td>3645.56</td>
                                            <td>3281</td> 
                                            <td>722</td>
                                            <td>722</td>
                                            <td>322</td>
                                             <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                             <td>0</td>
                                            <td>Sai egency</td>
                                             <td>0</td>
                                            <td>R</td>
                                            <td>0</td> 
                                            <td></td>
                                            <td>शोभा इंद्रचंद्रा कुचेलिया </td>
                                            <td>जालना बीड  रोड  स्टेट बँक ऑफ इंडिया </td> 
                                            <td></td>
                                            <td></td>
                                            <td></td> <td></td>
                                            <td>Ge050090130014641</td>

                                          </tr>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>14647</td>
                                            <td>3</td>

                                            <td>8</td>
                                            <td>7</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>4</td>
                                            <td>P4000465</td>
                                            <td></td>
                                              <td>145121</td>
                                            <td></td>
                                            <td>
                                <label>
                                  <input type="checkbox" />
                                </label>
                              </td>
                                            <td>322</td>
                                            <td>दुकान </td>
                                            <td></td>
                                            <td>Shoba Indarchand Kuchereya</td>
                                            <td>
                                              Bhawati Tokji
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                             <td></td>
                                            <td></td>
                                            <td></td> 
                                            <td></td>
                                            <td>3645.56</td>
                                            <td>3281</td> 
                                            <td>722</td>
                                            <td>722</td>
                                            <td>322</td>
                                             <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                             <td>0</td>
                                            <td>Sai egency</td>
                                             <td>0</td>
                                            <td>R</td>
                                            <td>0</td> 
                                            <td></td>
                                            <td>शोभा इंद्रचंद्रा कुचेलिया </td>
                                            <td>जालना बीड  रोड  स्टेट बँक ऑफ इंडिया </td> 
                                            <td></td>
                                            <td></td>
                                            <td></td> <td></td>
                                            <td>Ge050090130014641</td>

                                          </tr>
                                        </tbody>
                                      </table>
                                    </div> 

  
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
export default PropertyWise;
