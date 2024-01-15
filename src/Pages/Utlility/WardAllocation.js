import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const WardAlloaction = () => {
  const [selectedWard, setSelectedWard] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const handleCheckboxChange = (ward) => {
    const updatedSelectedWard = selectedWard.includes(ward)
      ? selectedWard.filter((selected) => selected !== ward)
      : [...selectedWard, ward];

    setSelectedWard(updatedSelectedWard);
  };

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Ward Allocation</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="container ">
                      <div className="row form-group      justify-content-center">
                        <label className="col-form-label col-md-1">
                          Issued By
                        </label>

                        <div className="col-md-2 text-center">
                          <div className="form-group">
                            <select
                              type="text"
                              className="form-control text-center"
                              name="roadW"
                              id="roadW"
                            >
                              <option>Administrator</option>
                              <option>VALUATION 2</option>
                              <option>VALUATION 1</option>
                              <option>AMC 1</option>
                              <option>AMC 2</option>
                              <option>RO</option>
                              <option>Vaibhav darokar</option>
                              <option>Narendra karade</option>
                              <option>Mayur Chakrawar</option>
                              <option>Dipali Zarkar</option>
                              <option>Sachin Chavan</option>
                            </select>
                            <span className="messages"></span>
                          </div>
                        </div>
                        <label className="col-form-label  ">Ward No.</label>
                        <div
                          className=" col-md-1 mx-2 "
                          style={{
                            maxHeight: "44px",
                            overflowY: "auto",
                            border: "2px solid #ccc",
                          }}
                        >
                          {[...Array(20).keys()].map((number) => (
                            <div key={number} className="form-check ">
                              <input
                                type="checkbox"
                                className="form-check-input "
                                id={`ward${number + 1}`}
                                checked={
                                  selectAll ||
                                  selectedWard.includes(`${number + 1}`)
                                }
                                onChange={() =>
                                  handleCheckboxChange(`${number + 1}`)
                                }
                              />
                              <label
                                htmlFor={`ward${number + 1}`}
                                className="form-check-label"
                              >
                                {number + 1}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="row      justify-content-center">
                        <div className="card ">
                          <div className="card-block ">
                            <div
                              class="dt-responsive table-responsive"
                              style={{ maxHeight: "200px", overflow: "auto" }}
                            >
                              <table
                                id="order-table"
                                class="table table-striped table-bordered nowrap"
                              >
                                <thead>
                                  <tr className="text-center">
                                    <th className="font-weight-bold">
                                      User Id
                                    </th>
                                    <th className="font-weight-bold">
                                      User Full Name
                                    </th>
                                    <th className="font-weight-bold">
                                      Allocated Ward
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="text-center">
                                    <td>27</td>
                                    <td>Vaibhav darokar</td>
                                    <td>1</td>
                                  </tr>
                                  <tr className="text-center">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                  <tr className="text-center">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>{" "}
                                  <tr className="text-center">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
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
                                                       
  

  
  
   
                                                        <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     > Add
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
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default WardAlloaction;
