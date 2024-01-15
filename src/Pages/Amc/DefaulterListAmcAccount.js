import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AmcAmount = () => {
  const [wardNo, setWardNo] = useState("");
  const [fromProperty, setFromProperty] = useState("");
  const [toProperty, setToProperty] = useState("");
  const [financeYear, setFinanceYear] = useState("");
  const [current, setCurrent] = useState("");
  const [pending, setPending] = useState("");
  const [penalityDate, setPenalityDate] = useState("");

  const [date, setDate] = useState("");
  const [topProperty, setTopProperty] = useState("");
  const [taxTotalGreater, settaxTotalGreater] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [alsoInclude, setAlsoInclude] = useState("");
  const [getProperty, setGetProperty] = useState("");

  const [selectedWard, setSelectedWard] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (ward) => {
    const updatedSelectedWard = selectedWard.includes(ward)
      ? selectedWard.filter((selected) => selected !== ward)
      : [...selectedWard, ward];

    setSelectedWard(updatedSelectedWard);
  };
  
  // Also include property
  const [selectedInclude, setSelectedInclude] = useState([]);
  const [selectAllInclude, setSelectAllInclude] = useState(false);

  const handleCheckboxChangeInclude = (includeItem) => {
    const updatedSelectedInclude = selectedInclude.includes(includeItem)
      ? selectedInclude.filter((selected) => selected !== includeItem)
      : [...selectedInclude, includeItem];

    setSelectedInclude(updatedSelectedInclude);
  };

  const handleAllWardsChangeOld = (e) => {
    const isChecked = e.target.checked;
    setSelectAllInclude(isChecked);

    if (isChecked) {
      setSelectedInclude([...Array(20).keys()].map((number) => `${number + 1}`));
    } else {
      setSelectedInclude([]);
    }
  };

  
  

                

  return (
    <>
        <div className="pcoded-content">
            <div className="pcoded-inner-content">
                <div className="main-body">
                    <div className="page-wrapper">
                        <div className="page-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Defaulter List</h5>
                                        </div>
                                        <div className="card-block">
                                            <form>
                             
<div className="row">

<div className="col-md-6">
<div className="sub-title">Properties Details</div>

  <div className="form-group text-center row ml-2">
  <label className="mt-2 " >WardNo.</label>

    <div
      className="col-md-2 mx-1"
      style={{
        maxHeight: "70px",
        overflowY: "auto",
        border: "2px solid #ccc",
      }}
    >
      {[...Array(20).keys()].map((number) => (
        <div key={number} className="form-check">
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
    <label className="mx-3 mt-2" >
        From Property
      </label>
    <div className="col-md-2 ">
      
      <select
        className="form-control"
        name="tPropNo"
        id="tPropNo"
        value={fromProperty}
        onChange={(e) => setFromProperty(e.target.value)}
      >
        <option></option>
        {[...Array(2200).keys()].map((number) => (
          <option key={number + 1} value={number + 1}>
            {number + 1}
          </option>
        ))}
      </select>
    </div>
    <label className="mx-3 mt-2" >
        To Property
      </label>
    <div className="col-md-2 ">
      
      <select
        className="form-control"
        name="tPropNo"
        id="tPropNo"
        value={toProperty}
        onChange={(e) => setToProperty(e.target.value)}
      >
        <option></option>
        {[...Array(2200).keys()].map((number) => (
          <option key={number + 1} value={number + 1}>
            {number + 1}
          </option>
        ))}
      </select>
    </div>
  </div>
</div>

<div className="col-md-3">
<div className="sub-title">Finance Year</div>

<div className="form-group text-center row ml-2">
<label className="mt-2 ">
                        Finance Year
                      </label>
                      <div className="col-md-7 ">
                     
                        <select
                          className="form-control"
                          name="wdName"
                          type="checkbox"
                          id="wdName"
                          value={financeYear}
                          onChange={(e) => setFinanceYear(e.target.value)}

                       >
                          <option>2020-2021</option>
                          <option>2021-2022</option>
                          <option>2022-2023</option>
                        </select>
                      </div></div>

</div>

<div className="col-md-3 card">
<div className="sub-title">Penality</div>
<div className="form-group text-center row ">

<div className="col-md-5 ">
<div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Current</span>
                                </label>
                              </div></div>

                      <div className="col-md-6 r">
                      <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Pending</span>
                                </label>
                              </div></div>
                              <label className=" ml-3 mt-2 ">Penality Date:</label>

                              <div className="col-md-6 ">

                        <input
                           type="text" className="form-control" id="txtFDate"
                          placeholder="Enter From Date"
                          value={penalityDate}
                          onChange={(e) => setPenalityDate(e.target.value)}
                        />
                      </div>
                             
                   
</div>
</div>
{/* 1st row */}
</div>
{/* 2nd */}
<div className="row">
<div className="col-md-6">
<div className="sub-title">Condition</div>
<div className="row form-group">
<label className=" ml-2  col-form-label ">
                        Top Property
                      </label>

                      <div className="col-sm-4   ">
                        <input
                          className="form-control"
                          name="wdName"
                          type="text"
                          id="wdName"
                          value={topProperty}
                          onChange={(e) => setTopProperty(e.target.value)}
                        ></input>
                      </div>          

                      <label className="  ml-2 col-form-label">
                        Tax Total Greater
                      </label>
                      <div className="col-sm-4   ">
                        <input
                          className="form-control text-right"
                          name="tPropNo"
                          
                          id="tPropNo"
                          value={taxTotalGreater}
                          onChange={(e) => settaxTotalGreater(e.target.value)}
                        ></input>
                      </div>
</div>
</div>

<div className="col-md-3 ">
<div className="sub-title">Ignore Existance</div>
<div className="form-group text-center row ">

<div className="col-md-6 ml-3">
<div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox"   value={mobileNo}
                          onChange={(e) => setMobileNo(e.target.value)}
                        />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Mobile No.</span>
                                </label>
                              </div></div>

                      <div className="col-md-5  ">
                      <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Email Id</span>
                                </label>
                              </div></div>
                              
                             
                   
</div>
</div>


<div className="col-md-3 card">
      <div className="sub-title">Also Include</div>
      <div className="form-group text-center row">
        <div className="col-md-12">
          <div
            class="checkbox-fade fade-in-primary"
            style={{
              maxHeight: "80px",
              overflowY: "auto",
              border: "2px solid #ccc",
            }}
          >
            {[
              "Owner Name(English)",
              "Owner Name(Marathi)",
              "Henter Name(English)",
              "Henter Name(Marathi)",
              "Property Description",
              "Address(English)",
              "Address(Marathi)",
              "Shop Name(English)",
              "Shop Name(Marathi)",
              "Shop No(English)",
              "Shop No(Marathi)",
              "All Taxes(Head Wise)C",
              "All Taxes(Head Wise)P",
            ].map((label, index) => (
              <div key={index} className="form-check">
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    className="checkbox-fade fade-in-primary"
                    id={`includeItem${index + 1}`}
                    checked={selectAllInclude || selectedInclude.includes(`${index + 1}`)}
                    onChange={() => handleCheckboxChangeInclude(`${index + 1}`)}
                  />
                  <span class="cr">
                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                  </span>
                  {label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

</div>
{/* button */}
<div className="row form-group justify-content-center">
<div className="col-md-10 col-12 p-2 mt-2 d-flex justify-content-center align-items-center flex-wrap">
    <div className="col-md-2 col-12 mb-3">
      <button type="submit" className="btn btn-sm   btn-grd-success  btn-block" style={{ fontSize: '15px'}}>
        Get Properties
      </button>
    </div>
    <div className="col-md-2 col-12 mb-3">
      <button type="submit" className="btn btn-sm  btn-grd-info  btn-block"  style={{ fontSize: '15px'}}>
        Send To All
      </button>
    </div>
    <div className="col-md-2 col-12 mb-3">
      <button type="submit" className="btn btn-sm  btn-grd-info  btn-block"  style={{ fontSize: '15px'}}>
        Send To Selected
      </button>
    </div>
    <div className="col-md-2 col-12 mb-3">
      <button type="submit" className="btn btn-sm btn-grd-success  btn-block "  style={{ fontSize: '15px'}}>
        Import From Excel
      </button>
    </div>
    <div className="col-md-2 col-12 mb-3">
      <button type="submit" className="btn btn-sm  btn-grd-primary waves-effect waves-light  btn-block "  style={{ fontSize: '15px'}}>
        Export To Excel
      </button>
    </div>
    <div className="col-md-2 col-12 mb-3">
      <button type="submit" className="btn  btn-sm  btn-grd-inverse waves-effect waves-light  btn-block"  style={{ fontSize: '15px'}}>
        Clear All
      </button>
    </div>
  </div>
  </div>

{/* table */}
<div className="row ">
    <div className="col-md-12  ">
      {/* <div className="form-group">
        <input
          className="form-control"
          type="text"
          style={{ width: '30cm', height: '8cm' }} 
        />

      </div> */}
<div class="dt-responsive table-responsive " style={{maxHeight: "250px", overflow: "auto"}}>
                                      <table
                                        id="newcons-table"
                                        class="table table-striped table-bordered nowrap"
                                      >
                                        <thead>
                                          <tr>
                                            <th className="font-weight-bold">OwnerId</th>
                                            <th className="font-weight-bold">NewWardNo.</th>
                                            <th className="font-weight-bold">NewPropertyNo.</th>
                                            <th className="font-weight-bold">NewPartitionNo</th>
                                            <th className="font-weight-bold">OwnerName</th>
                                            <th className="font-weight-bold">RenterName</th>
                                            <th className="font-weight-bold">OccupierName</th>
                                            <th className="font-weight-bold">MarathiOwnerName</th>
                                            <th className="font-weight-bold">MarathiRenterName</th>
                                            <th className="font-weight-bold">MarathiOccupierName</th>
                                           
                                            <th className="font-weight-bold">PendingBalance</th>
                                            <th className="font-weight-bold">CurrentBalance</th>
                                            <th className="font-weight-bold">TotalBalance</th>
                                            <th className="font-weight-bold">CurrentInterest</th>
                                            <th className="font-weight-bold">PendingInterest</th>
                                            <th className="font-weight-bold">PreviousPendingPending</th>
                                            <th className="font-weight-bold">TotalPendingPending</th>
<th className="font-weight-bold" >NetBalance</th>
<th className="font-weight-bold">MobileNo</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>7501</td>
                                            <td>1</td>

                                            <td>1</td>
                                            <td></td>
                                            <td >Devidas Sudas Puri</td>

                                            <td>Dinesh Dadarao Ghodake</td>
                                            <td></td>
                                            <td>देविदास सुदास  पुरी </td>
                                            <td>दिनेश  दादाराव  घोडके </td>
                                            <td>
                                            </td>
                                            <td>
                                             495958
                                            </td>
                                            <td>15097</td>
                                            <td>62055</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>
                                              0
                                            </td>
                                            <td>0</td>
                                            <td>62055</td>
                                            <td>9420749113</td>
                                          </tr>

                                        <tr style={{ textAlign: "center" }}>
                                            <td>7502</td>
                                            <td>1</td>

                                            <td>2</td>
                                            <td></td>
                                            <td >Lalaji Urf Prashant Rankhamb</td>

                                            <td></td>
                                            <td></td>
                                            <td>लालाजी   उर्फ  प्रशांत  रणखांब</td>
                                            <td> </td>
                                            <td>
                                            </td>
                                            <td>
                                             435958
                                            </td>
                                            <td>7660</td>
                                            <td>51640</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>
                                              0
                                            </td>
                                            <td>0</td>
                                            <td>51640</td>
                                            <td></td>
                                          </tr> 
                                         
                                          <tr style={{ textAlign: "center" }}>
                                            <td>7503</td>
                                            <td>1</td>

                                            <td>1</td>
                                            <td></td>
                                            <td >Devidas Vithal Puri</td>

                                            <td></td>
                                            <td></td>
                                            <td>देविदास   पुरी </td>
                                            <td></td>
                                            <td>
                                            </td>
                                            <td>
                                             495958
                                            </td>
                                            <td>15097</td>
                                            <td>62055</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>
                                              0
                                            </td>
                                            <td>0</td>
                                            <td>62058</td>
                                            <td>8220749113</td>
                                          </tr>
                                        
                                          <tr style={{ textAlign: "center" }}>
                                            <td>7504</td>
                                            <td>1</td>

                                            <td>1</td>
                                            <td></td>
                                            <td ></td>

                                            <td>Dinesh Dadarao Ghodake</td>
                                            <td></td>
                                            <td></td>
                                            <td>दिनेश  दादाराव  घोडके </td>
                                            <td>
                                            </td>
                                            <td>
                                             495958
                                            </td>
                                            <td>15097</td>
                                            <td>62055</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>
                                              0
                                            </td>
                                            <td>0</td>
                                            <td>62055</td>
                                            <td>9420749113</td>
                                          </tr>

                                          <tr style={{ textAlign: "center" }}>
                                            <td>7504</td>
                                            <td>1</td>

                                            <td>1</td>
                                            <td></td>
                                            <td ></td>

                                            <td>Dinesh Dadarao Ghodake</td>
                                            <td></td>
                                            <td></td>
                                            <td>दिनेश  दादाराव  घोडके </td>
                                            <td>
                                            </td>
                                            <td>
                                             495958
                                            </td>
                                            <td>15097</td>
                                            <td>62055</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>
                                              0
                                            </td>
                                            <td>0</td>
                                            <td>62055</td>
                                            <td>9420749113</td>
                                          </tr>

                                          <tr style={{ textAlign: "center" }}>
                                            <td>7504</td>
                                            <td>1</td>

                                            <td>1</td>
                                            <td></td>
                                            <td ></td>

                                            <td>Dinesh Dadarao Ghodake</td>
                                            <td></td>
                                            <td></td>
                                            <td>दिनेश  दादाराव  घोडके </td>
                                            <td>
                                            </td>
                                            <td>
                                             495958
                                            </td>
                                            <td>15097</td>
                                            <td>62055</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>
                                              0
                                            </td>
                                            <td>0</td>
                                            <td>62055</td>
                                            <td>9420749113</td>
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
            </div>
        </div>
    </>
)
}
export default AmcAmount;
