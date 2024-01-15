import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SetRemarkForInvoice = () => {
    const billOptions = Array.from({ length: 100 }, (_, index) => index + 1);

    return (
        <div className="pcoded-content">
          <div className="pcoded-inner-content">
            <div className="main-body">
              <div className="page-wrapper">
                <div className="page-body">
                  <div className="card">
                    <div className="card-header">
                      <h5>Set Remark For Invoice</h5>
                    </div>
                    <div className="card-block">
                      <form>
        
{/*  */}
<div className="container border col-md-6 text-center">

<div className="row mt-2 ml-3 text-center justify-content-center mx-auto">
                        <div className=" col-11 row  form-group mt-4">
                          <label className="col-1-md-1 mt-4 col-form-label">
                            Finance Year:
                          </label>
                          <div className="col-md-8 mt-3">
                            <select
                              className="form-control"
                              name="wdName"
                              type="checkbox"
                              id="wdName"
                            >
                              <option>2017-2018</option>
                              <option>2018-2019</option>
                              <option>2019-2020</option>
                              <option>2020-2021</option>
                              <option>2021-2022</option>
                              <option>2022-2023</option>
                              <option>2023-2024</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className=" col-11 form-group row ">
                          <label className="col-1-md-1 col-form-label">
                            Bill Book No.
                          </label>
                          <div className="col-md-8  ">
                            <input
                              className="form-control"
                              name="invoice"
                              type="text"
                              id="invoice"
                            />
                          </div>
                        </div>

                        <div className=" col-11 form-group row ">
                          <label className="col-1-md-1 ml-3 col-form-label">
                          Invoice No
                          </label>
                          <div className="col-md-8 ">
                            <input
                              className="form-control"
                              name="Bbook"
                              type="text"
                              id="Bbook"
                            />
                          </div></div>


                                                <div className=" col-10 form-group row ">
                                                <label  className="text-danger font-weight-bold col-1-md-1 " >
                            Reason For Cancel Invoice
                          </label>
                          <div className="col-md-6 ">
                          
                            <input
                              className="form-control"
                              name="invoice"
                              type="text"
                              id="invoice"
                            />
                          </div>
                        </div>

                        

                        <div className=" col-11 form-group row ">
                          <label className="col-1-md-1 ml-4 mt-1 col-form-label">
                          Remark
                          </label>
                          <div className="col-md-4 ml-2 ">
                            <select
                              className="form-control"
                              name="Bbook"
                              type="text"
                              id="Bbook"
                            >
                                <option>Active</option>
                                <option>Cancel</option>
                                </select>
                          </div>
                          <div className="d-flex align-items-center text-center">
  <span className="mt-1">Previous Invoice Status:<br/>  <span className="text-danger ml-2 mt-1">Active</span>
</span> 
</div>
                        </div></div>
                        {/*  */}
                     
     
      {/*  */}
      <div className="row mt-3 justify-content-center ">
  <div className="col-md-2 col-sm-12 mb-2">
  <button type="submit" className="btn btn-sm  font-weight-bold btn-grd-info  waves-effect waves-light w-100"
      >Set
    </button>
  </div>
  <div className="col-md-2 col-sm-12 mb-2">
          <button type="submit" className="btn btn-sm  font-weight-bold btn-grd-inverse waves-effect waves-light w-100 "
           >Clear
          </button>
        </div></div>

      </div>
                          </form></div></div></div></div></div></div></div>
    )}
    export default SetRemarkForInvoice;