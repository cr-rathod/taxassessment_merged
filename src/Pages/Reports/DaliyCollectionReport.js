import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

const DailyCollectionReport = () => {

 //export
const handleExportButtonClick = () => {
    const data1 = [
        ["    ", " ", "  DailyCollectionReport  ", "   "],
        ["Year", "PaymentStatus", "CurrentYear", "PendingYear", "OwnerName", "WardNo.", "PropertyNo.", "PartitionNo.", "BillBookNo","TransactionId","TransactionDate","Property","Eduction","Employment","Tree","SpWaterCess","Saniation","Drain","Road","FireTax","Light","WaterRelief","MajourBuilding","Sew.Disposal","SpEducation","WaterBill","Tax1","Tax2","Tax3","Tax4","Tax5","PropertyInterestBefore1-Jan","EducationTaxNoticeFee","Penality","Total","PaymentID","TrackID"],
        ["2023-2024"," 5", "1", "1", "0.0000", "0.0000", "0.0000", "0.0000", "0.000"],
      ];
  
     
   

    const ws1 = XLSX.utils.aoa_to_sheet(data1);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, "DailyCollectionReport");

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
                      <h5>Daily Collection Report</h5>
                    </div>
                    <div className="card-block">
                      <form>
<div className="row justify-content-center">
                      <div className=' col-md-10 '>
    
                                                                    <div className='form-group row'>
                                                                        <label className="col-sm-4 col-form-label">From Date</label>
                                                                        <div className="col-sm-2">
                                                                        <input className="form-control  text-center"  type="text"
                          id="txtFDate"
                          placeholder="Enter Date">
         
        </input>
                                                                            <span className="messages"></span>
                                                                        </div>


{/* </div>
<div className='form-group row'> */}
                                                                        <label className=" col-form-label">To Date</label>
                                                                        <div className="col-sm-2">
                                                                        <input className="form-control  text-center"   type="text"
                          id="txtTDate"
                          placeholder="Enter Date">
        </input>
                                                                            <span className="messages"></span>
                                                                        </div></div>


                                                                        <div className='form text-center'>

 <div className="col-sm-6 mx-auto">
    <button type="button" className="btn btn-grd-info  text-center">Show</button>
    <span className="messages"></span>

    <button type="button" className="btn btn-grd-primary mx-2 text-center"  onClick={handleExportButtonClick}
>Export To Excel</button>
    <span className="messages"></span>
</div>

</div>

    </div></div>

    <div class="dt-responsive mt-2 table-responsive text-center" style={{maxHeight: "320px", overflow: "auto"}}>
                        <table id="order-table" class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">Year</th>
                              <th className="font-weight-bold">Payment Status</th>
                              <th className="font-weight-bold">Current Year</th>
                              <th className="font-weight-bold">Pending Year</th>
                              <th className="font-weight-bold">Owner Name</th>
                              <th className="font-weight-bold">Ward No.</th>
                              <th className="font-weight-bold">Property No.</th>
                              <th className="font-weight-bold">Partition No</th>
                              <th className="font-weight-bold">BillBookNo</th>
                              <th className="font-weight-bold">Transaction Id</th>
                              <th className="font-weight-bold">Transaction Date</th>
                              <th className="font-weight-bold">Property</th>
                              <th className="font-weight-bold">Education</th>
                              <th className="font-weight-bold">Employment</th>
                              <th className="font-weight-bold">Tree</th>
                              <th className="font-weight-bold">SpWaterCess</th>
                              <th className="font-weight-bold">Saniation</th>
                              <th className="font-weight-bold">Drain</th>
                              <th className="font-weight-bold">Road</th>
                              <th className="font-weight-bold">Fire Tax</th>
                              <th className="font-weight-bold">Light</th>
                              <th className="font-weight-bold">WaterRelief</th>
                              <th className="font-weight-bold">MajourBuilding</th>
                              <th className="font-weight-bold">Sew.Disposal</th>
                              <th className="font-weight-bold">SpEduction</th>
                              <th className="font-weight-bold">WaterBill</th>
                              <th className="font-weight-bold">Tax1</th>
                              <th className="font-weight-bold">Tax2</th>
                              <th className="font-weight-bold">Tax3</th>
                              <th className="font-weight-bold">Tax4</th>
                              <th className="font-weight-bold">Tax5</th>
                              <th className="font-weight-bold">Property Tax Notice Fee</th>
                              <th className="font-weight-bold">Warrent Fee</th>
                              <th className="font-weight-bold">Pending Interest Before 1-Jan-2014</th>
                              <th className="font-weight-bold">Education Tax Notice Fee</th>
                              <th className="font-weight-bold">Penality</th>
                              <th className="font-weight-bold">Total</th>
                              <th className="font-weight-bold">PaymentID</th>
                              <th className="font-weight-bold">TrackID</th>



                            </tr>
                          </thead>
                          <tbody>
                          
                           
                            <tr>
                              <td>2023-2024</td>
                              <td>Current</td>
                              <td>2023</td>
                              <td>2023</td>
                              <td>The Holder</td>
                              <td>1</td>
                              <td>8</td>
                              <td></td>
                              <td>10</td>
                              <td>04/12/2023</td>
                              <td>399.0000</td>
                              <td>74.0000</td>
                              <td>0.0000</td>
                              <td>17.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>180.0000</td>
                              <td>0.0000</td>
                              <td>8.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>678.0000</td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>2023-2024</td>
                              <td>Current</td>
                              <td>2023</td>
                              <td>2023</td>
                              <td>The Holder</td>
                              <td>1</td>
                              <td>8</td>
                              <td></td>
                              <td>10</td>
                              <td>04/12/2023</td>
                              <td>399.0000</td>
                              <td>74.0000</td>
                              <td>0.0000</td>
                              <td>17.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>180.0000</td>
                              <td>0.0000</td>
                              <td>8.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0.0000</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>678.0000</td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div> 

                        </form>
                        </div>  </div> </div> </div> </div> </div> </div>
    )}
export default DailyCollectionReport;