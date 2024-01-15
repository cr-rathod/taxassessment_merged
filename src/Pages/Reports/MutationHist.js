import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";


const MutationHistory = () => {
  const [wardNo, setWardNo] = useState("");
  const [fromProperty, setFromProperty] = useState("");

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
//exoprt
const handleExportButtonClick = () => {
    const data1 = [
      ["    ", " ", "Mutation History  ", "   "],
      [
        "SellerName",
        "BuyerName",
        "PurchaseDate",
        "SellerDate",
        "ReasonOnSale",
        "CreatedBy",
        "CreatedDate",
        "UpdatedBy",
        "UpadtedDate",
      ],
      [
        "Jyoti",
      "Davidas",
        "11/09/2023",
       
      ],
    ];

    

    const ws1 = XLSX.utils.aoa_to_sheet(data1);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, "MutationHis");

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
                  <h5>Mutation History</h5>
                </div>
                <div className="card-block">
                  <form>
        <div className="card p-3"  >        
<div className="row form-group justify-content-center  ">
<label className="col-form-label mt-2">Ward</label>

<div className="col-sm-2">
        <select className="form-control" name="ward" id="ward"           type="number"
>
          <option value="all"></option>
          {wardOptions}
        </select>
        <span className="messages"></span>
      </div>

      <label className="col-form-label mt-2"> Property No.</label>
      <div className="col-sm-2">
        <select
          className="form-control"
          name="Properties"
          id="Properties"
          type="number"
        >
          <option value="all"></option>
          {fromProp}
        </select>
        <span className="messages"></span>
      </div>


                      <label className=" col-form-label mt-2">
                       Partition No.
                      </label>
                      <div className="col-md-2 mt-2 ">
                        <input
                          className="form-control text-center"
                          name="ParNo"
                          id="ParNo"
                          type="number"
                          >
                         
                        </input>
                      </div>

                      {/*  */}
                    

                      </div>
                      <div className="row  justify-content-center  ">
                      <div className="col-md-3 mx-auto">
  <button type="button" className="btn btn-grd-primary text-center" >
    Show
  </button>
  <span className="messages"></span>
  <button type="button" className="mx-2 btn btn-grd-inverse text-center">
   Clear
  </button>
  <span className="messages"></span></div>
                      </div>

                      </div> 
{/* table */}
<div className="row form-group   ">
                       <span className="ml-2"> Record Count : 0</span>
                       <div class="dt-responsive table-responsive mt-2" style={{maxHeight: "320px", overflow: "auto"}}>
                        <table id="order-table" class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">Seller Name</th>
                              <th className="font-weight-bold">Buyer Name</th>
                              <th className="font-weight-bold">Purchase Date</th>
                              <th className="font-weight-bold">Selling Date</th>
                              <th className="font-weight-bold">Reason For Sale</th>
                              <th className="font-weight-bold">Created By</th>
                              <th className="font-weight-bold">Creation Date</th>
                              <th className="font-weight-bold">Updated By</th>
                              <th className="font-weight-bold">Updated Date</th>




                            </tr>
                          </thead>
                          <tbody>
                          
                           
                            <tr>
                              <td>Jyoti</td>
                              <td>Davidas</td>
                              <td>11/09/2023</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>  <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>Jyoti</td>
                              <td>Davidas</td>
                              <td>11/09/2023</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>  <td></td>
                              <td></td>
                            </tr>
                           
                          </tbody>
                        </table>
                      </div> 
</div>

<div className="row  justify-content-center">
                                                <div className="col-md-3 justify-content-center">
                                                  <button
                                                    type="button"
                                                    className="btn btn-grd-primary   "
                                                    onClick={
                                                      handleExportButtonClick
                                                    }
                                                  >
                                                    Export
                                                  </button>
                                                  <button
                                                    type="button"
                                                    className="btn btn-grd-inverse mx-4  "
                                                   
                                                  >
                                                    Clear
                                                  </button>
                                                </div>
                                              </div>

                      </form></div></div></div></div></div></div></div>
  )}
  export default MutationHistory; 