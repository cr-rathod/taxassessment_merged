import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BillBookEntry = () => {
  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Bill Book Entry</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="container ">
                      <div className="row justify-content-center">
                        <label className="col-form-label col-1-md-1 mt-3">
                          Available Finance Year(Filter):
                        </label>

                        <div className="col-md-4  text-center">
                          <div className=" ">
                            <select
                              type="text"
                              className="form-control  text-center"
                              name="roadW"
                              id="roadW"
                              value={0}
                            >
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                              <option>2022</option>
                              <option>2023</option>
                            </select>
                            <span className="messages"></span>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      <div className="row  justify-content-center">
                        <label className="col-form-label col-md-2  mt-3">
                          Issued By:
                        </label>

                        <div className="col-md-4  text-center">
                          <div className=" ">
                            <select
                              type="text"
                              className="form-control  text-center"
                              name="roadW"
                              id="roadW"
                              value={0}
                            >
                              <option>Vaidyanasath Dabade</option>
                              <option>Dnyanesh Saundarmal</option>
                              <option>Nana Katarmare</option>
                              <option>Lakshman Saundarmal</option>
                              <option>Santosh Mote</option>
                              <option>Shekh Rais Ahemad</option>
                              <option>Nalavade S</option>
                              <option>Santosh Saundarmal</option>
                              <option>Dilip Nikam</option>
                              <option>Dipak Naik</option>

                            </select>
                            <span className="messages"></span>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      <div className="row justify-content-center">
                        <label className="col-form-label col-md-2 mt-3">
                          Bill Book No:
                        </label>

                        <div className="col-md-4  text-center">
                          <div className="  ">
                            <input
                              type="text"
                              className="form-control  text-center"
                              name="Bbook"
                              id="Bbook"
                            >
                            </input>
                            <span className="messages"></span>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      <div className="row justify-content-center">
                        <label className="col-form-label col-md-2">
                          Receipt No
                        </label>

                        <div className="col-md-2  text-center">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control  text-center"
                            />
                          </div>
                        </div>
                        <label className="mt-2 font-weight-bold">-</label>
                        <div className="col-md-2  text-center">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control  text-center"
                            />
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      <div className="row justify-content-center">
                        <label className="col-form-label col-md-3">
                          Date
                        </label>

                        <div className="col-md-2  text-center">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control  text-center"
                              id="txtDate"
                              placeholder="Enter Date"
                            />
                          </div>
                        </div>
                        <label className="mt-2 ">Financial Year</label>
                        <div className="col-md-2 text-center">
                          <div className="form-group">
                            <input
                              type="text"
                              style={{width:"70px"}}
                              className="form-control  text-center"
                            />
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      <div className="row justify-content-center">
                        <label className="col-form-label col-md-2">
                          Remark:
                        </label>

                        <div className="col-md-4  text-center">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control  text-center"
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" form-group row justify-content-center">
                      <button className="btn btn-primary ">
      <Link to="/employeeMaster" className="text-white ">
        Add Tax Inspector Name
      </Link>
    </button>
                      </div>
                      {/*table  */}
                      <div
                        class="mb-4  dt-responsive table-responsive "
                        style={{
                          maxHeight: "300px",
                          overflowY: "auto",
                        }}
                      >
                        <table class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr className="text-center">
                              <td className="font-weight-bold">Employee</td>
                              <td className="font-weight-bold">BillBookNo.</td>
                              <td className="font-weight-bold">From Receipt</td>
                              <td className="font-weight-bold">ToReceipt</td>
                              <td className="font-weight-bold">Date</td>
                              <td className="font-weight-bold">Year</td>
                              <td className="font-weight-bold">Remark</td>
                            </tr>
                          </thead>

                          <tr className="text-center">
                            <td>Santosh Mote</td>
                            <td>14</td>
                            <td>1</td>
                            <td>100</td>
                            <td>6/7/2023 4:32 PM</td>
                            <td>2023</td>
                            <td>2023</td>
                          </tr>
                          <tr className="text-center">
                            <td>Vaidhyanath Dabade</td>
                            <td>8</td>
                            <td>1</td>
                            <td>100</td>
                            <td>6/7/2023 4:32 PM</td>
                            <td>2023</td>
                            <td>2023-24</td>
                          </tr>
                          <tr className="text-center">
                            <td>Lakshman Sundarmal</td>

                            <td>9</td>
                            <td>1</td>
                            <td>100</td>
                            <td>6/7/2023 4:32 PM</td>
                            <td>2023</td>
                            <td>2023-24</td>
                          </tr>
                          <tr className="text-center">
                            <td>Prakash Mane</td>
                            <td>13</td>
                            <td>1</td>
                            <td>100</td>
                            <td>6/7/2023 4:32 PM</td>
                            <td>2023</td>
                            <td>2023-24</td>
                          </tr>
                          <tr className="text-center">
                            <td>Dnyaneshwar Saundarmal</td>
                            <td>11</td>
                            <td>1</td>
                            <td>100</td>
                            <td>6/7/2023 4:32 PM</td>
                            <td>2023</td>
                            <td>2023-24</td>
                          </tr>
                          <tr className="text-center">
                            <td>Shekh Rais Ahemad</td>
                            <td>16</td>
                            <td>1</td>
                            <td>100</td>
                            <td>6/7/2023 4:32 PM</td>
                            <td>2023</td>
                            <td>2023-24</td>
                          </tr>
                          <tr className="text-center">
                            <td>Dilip Nikam</td>
                            <td>7</td>
                            <td>1</td>
                            <td>100</td>
                            <td>6/7/2023 4:32 PM</td>
                            <td>2023</td>
                            <td>2023-24</td>
                          </tr>
                          <tr className="text-center">
                            <td>Ram Saundarmal</td>
                            <td>10</td>
                            <td>1</td>
                            <td>100</td>
                            <td>6/7/2023 4:32 PM</td>
                            <td>2023</td>
                            <td>2023-24</td>
                          </tr>
                          <tr className="text-center">
                            <td>Dilip Naik</td>
                            <td>13</td>
                            <td>1</td>
                            <td>100</td>
                            <td>6/7/2023 4:32 PM</td>
                            <td>2023</td>
                            <td>2023-24</td>
                          </tr>
                        </table>
                      </div>
                      {/*  */}
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
    / >
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
   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
       Add
     </button>
   </div>
   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
       Save
     </button>
   </div>
   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-info btn-sm btn-block"
     >
      Edit
     </button>
   </div>
   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-inverse btn-sm btn-block"
     >
      Cancel
     </button>
   </div>
   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-danger btn-sm btn-block"
     >
      Delete
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
export default BillBookEntry;
