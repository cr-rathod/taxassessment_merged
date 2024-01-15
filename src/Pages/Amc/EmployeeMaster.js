import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EmployeeMaster = () => {
  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Employee Master</h5>
                </div>
                <div className="card-block">
                  <form>
                  <div className="container">
  <div className="row form-group justify-content-center">
    <label className="col-form-label col-md-2">Employee Name</label>
    <div className="col-md-4 text-center">
      <div className="">
        <input
          type="text"
          className="form-control text-center"
          name="empN"
          id="empN"
        />
        <span className="messages"></span>
      </div>
    </div>
  </div>

  <div className="row form-group justify-content-center">
    <label className="col-form-label col-md-2">City</label>
    <div className="col-md-4 text-center">
      <div className="">
        <input
          type="text"
          className="form-control text-center"
          name="roadW"
          id="roadW"
        />
        <span className="messages"></span>
      </div>
    </div>
  </div>

  <div className="row form-group justify-content-center">
    <label className="col-form-label col-md-2">Address</label>
    <div className="col-md-4 text-center">
      <div className="">
        <input
          type="text"
          className="form-control text-center"
          name="add"
          id="add"
        />
        <span className="messages"></span>
      </div>
    </div>
  </div>

  <div className="row form-group justify-content-center ">
      <div
        class="dt-responsive table-responsive "
        style={{ maxHeight: "200px", overflow: "auto", maxWidth:"70%" }}
      >
        <table
          id="order-table"
          class="table table-striped table-bordered nowrap"
        >
          <thead>
            <tr className="text-center">
              <th className="font-weight-bold">EmpName</th>
              <th className="font-weight-bold">City</th>
              <th className="font-weight-bold">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>Shri. Vilas Shendre</td>
              <td>Chandrapur</td>
              <td></td>
            </tr>
            <tr className="text-center">
              <td>Shri. Bharat Rajput</td>
              <td>Chandrapur</td>
              <td></td>
            </tr>
            <tr className="text-center">
              <td>Shri. Sudharkar Patil</td>
              <td>Chandrapur</td>
              <td></td>
            </tr>
            <tr className="text-center">
              <td>Shri. R. Patil</td>
              <td>Chandrapur</td>
              <td></td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
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
     />
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
       style={{fontSize:"20px"}}
     >
       +
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
</div></div>
</div>
</div>
</div>
</div>
</div>
  )}
  export default EmployeeMaster;




