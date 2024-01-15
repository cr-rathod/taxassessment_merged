import React, { useState, useEffect } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";

const UpdateReturnTaxes = () => {
 
  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
            <div className="card border  border-primary " style={{ borderWidth: "7px", backgroundColor:"whitesmoke", color:"black" }}>
                <div className="card-header">
                  <h5>Update Retain Taxes</h5>
                </div>
                <div className="card-block">
                <form id="main" method="post" action="/" novalidate="">
                    <div className="row">
                      <div className=" form-group row ">
                        <label className="col-md-2 col-form-label">RV</label>

                        <div className="col-md-1 ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-2 col-form-label">
                          Property
                        </label>

                        <div className="col-md-1 ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">
                          Education
                        </label>
                        <div className="col-md-1 ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">
                          Sp.Edu
                        </label>
                        <div className="col-md-1   ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">Emp</label>
                        <div className="col-md-1 mt-1 ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">Tree</label>
                        <div className="col-md-1 mt-1 ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">Fire</label>
                        <div className="col-md-1  mt-1 ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">Light</label>
                        <div className="col-md-1 mt-1  ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">Drain</label>
                        <div className="col-md-1  mt-1">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        {/* </div>
                    <div className="form-group ml-2 row"> */}
                        <label className="mt-1 col-md-2 col-form-label">
                          Road
                        </label>
                        <div className="col-md-1 mt-1 ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">
                          Sanitation
                        </label>
                        <div className="col-md-1 mt-1  ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">
                          W.Cess
                        </label>
                        <div className="col-md-1  mt-1">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">W.Ben</label>
                        <div className="col-md-1 mt-1 ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">
                          W.Bill
                        </label>

                        <div className="col-md-1 mt-1  ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">
                          M.Bulid
                        </label>
                        <div className="col-md-1 mt-1 ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">
                          Sewage
                        </label>
                        <div className="col-md-1 mt-1  ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">Tax1</label>
                        <div className="col-md-1 mt-1">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-2 col-form-label">
                          Total Tax
                        </label>

                        <div className="col-md-1  mt-1 ">
                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 text-center mx-auto">
                        <div className="col-md-9 col-12">
                          <button
                            className="btn btn-sm btn-grd-success"
                            type="button"
                            value={0}
                          >
                            Save
                          </button>
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
export default UpdateReturnTaxes;
