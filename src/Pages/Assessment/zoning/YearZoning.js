import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const YearZoning = () => {
  const [zoneNO, setZoneNO] = useState("");
  const [wardNo, setWardNo] = useState("");
  const[year, setYear] =useState("");
  const[toYear, setToYear]= useState("");



  return(
    <div className="pcoded-content">
    <div className="pcoded-inner-content">
      <div className="main-body">
        <div className="page-wrapper">
          <div className="page-body">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5> Year Zoning</h5>
                  </div>
                  <div className="card-block">
                    <form id="main" method="post" action="/" novalidate="">
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Zone No.</label>
                        <div className="col-sm-3">
                          <input type="text" className="form-control" name="wdName" id="wdName"
                            value={zoneNO} onChange={(e) => setZoneNO(e.target.value)} placeholder="Enter Zone No" />
                          <span className="messages"></span>
                        </div>
                        
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Ward No.</label>
                        <div className="col-sm-3">
                          <input type="text" className="form-control" name="wdName" id="wdName"
                            value={wardNo} onChange={(e) => setWardNo(e.target.value)} placeholder="Enter Ward No" />
                          <span className="messages"></span>
                        </div>   
                </div>
                        
                      

                      <div className="form-group row">
                      <label className="col-sm-2 col-form-label">From Year Wise</label>
                        <div className="col-sm-3">
                          <input type="text" className="form-control" name="fPropNo" id="fPropNo"
                            value={year} onChange={(e) => setYear(e.target.value)} placeholder="Enter From Year Wise" />
                          <span className="messages"></span>
                          
                        </div>
                        <label className="col-sm-2 col-form-label">To </label>
                        <div className="col-sm-3">
                          <input type="text" className="form-control" name="tPropNo" id="tPropNo"
                            value={toYear} onChange={(e) => setToYear(e.target.value)} placeholder="Enter year" />
                          <span className="messages"></span>
                        </div>
                      </div>

                       
                      <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-6">
                          <button type="submit" className="btn waves-effect waves-light btn-grd-success m-r-20"
                            // onClick={createAssignment}
                            >Update</button>
                          <button className="btn waves-effect waves-light btn-grd-primary"
                            // onClick={clear}
                            >Clear</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                </div>
                </div>
                </div>                </div>
                </div>
                </div>
                </div>
            

  )}
  export default YearZoning;