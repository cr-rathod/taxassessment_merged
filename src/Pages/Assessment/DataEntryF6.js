import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const DataEntryF6 = () => {
  const [oldRV, setOldRV] = useState("");
  const [oldALV, setOldALV] = useState("");
  const [oldTax, setOldTax] = useState("");
  const [newALV, setNewALV] = useState("");
  const [netRV, setNetRV] = useState("");
  const [retainRV, setRetainRV] = useState("");
  const [retainReason, setRetainReason] = useState("");
  const [hearing, setHearing] = useState("");
  const [hearingReason, setHearingReason] = useState("");
  const [AppCommit, setAppCommit] = useState("");
  const [AppCommitReason, setAppCommitReason] = useState("");
  const [remissionRV, setRemissionRV] = useState("");
  const [remissionReason, setRemissionReason] = useState("");

    return (
        <div className="pcoded-content">
          <div className="pcoded-inner-content">
            <div className="main-body">
              <div className="page-wrapper">
                <div className="page-body">
                <div className="card border  border-primary " style={{ borderWidth: "7px", backgroundColor:"whitesmoke",color:"black" }}>
                    <div className="card-header">
                      <h5>Basic Property Details</h5>
                    </div>
                    <div className="card-block">
                      <form>
                      <div className="row">
  <div className="col-md-1 text-center">
    <div className="form-group">
      <label>OldRv.</label>
      <input
        className="form-control"
        type="text"
        value={0}
        onChange={(e) => setOldRV(e.target.value)}
      />
    </div>
  </div>

  <div className="col-md-1 text-center">
    <div className="form-group">
      <label>OldALV.</label>
      <input
        className="form-control"
        type="text"
        value={0}
        onChange={(e) => setOldALV(e.target.value)}
      />
    </div>
  </div>

  <div className="col-md-1 text-center">
    <div className="form-group">
      <label>OldTax</label>
      <input
        className="form-control"
        type="text"
        value={0}
        onChange={(e) => setOldTax(e.target.value)}
      />
    </div>
  </div>

  <div className="col-md-2 text-center">
    <div className="form-group">
      <label>NewALV</label>
      <input
        className="form-control"
        type="text"
        value={1480.8}
        onChange={(e) => setNewALV(e.target.value)}
      />
    </div>
  </div>

  <div className="col-md-2 text-center">
    <div className="form-group">
      <label>NetRV</label>
      <input
        className="form-control"
        type="text"
        value={1332.72}
        onChange={(e) => setNetRV(e.target.value)}
      />
    </div>
  </div>

  <div className="col-md-2 text-center">
    <div className="form-group">
      <label>RetainRV</label>
      <input
        className="form-control"
        type="text"
        value={retainRV}
        onChange={(e) => setRetainRV(e.target.value)}
      />
    </div>
  </div>
{/*  */}
  <div className="col-md-2 text-center">
    <div className="form-group">
      <label>RetainReason</label>
      <input
        className="form-control"
        type="text"
        value={retainReason}
        onChange={(e) => setRetainReason(e.target.value)}
      />
    </div>
  </div>

  <div className="col-md-2 text-center">
    <div className="form-group">
      <label>HearingRv</label>
      <input
        className="form-control"
        type="text"
        value={hearing}
        onChange={(e) => setHearing(e.target.value)}
      />
    </div>
  </div>

  <div className="col-md-2 text-center">
    <div className="form-group">
      <label>HearingReason</label>
      <input
        className="form-control"
        type="text"
        value={hearingReason}
        onChange={(e) => setHearingReason(e.target.value)}
      />
    </div>
  </div>

  <div className="col-md-2 text-center">
    <div className="form-group">
      <label>AppCommitRV</label>
      <input
        className="form-control"
        type="text"
        value={AppCommit}
        onChange={(e) => setAppCommit(e.target.value)}
      />
    </div>
  </div>

  <div className="col-md-2 text-center">
    <div className="form-group">
      <label>AppCommitReason</label>
      <input
        className="form-control"
        type="text"
        value={AppCommitReason}
        onChange={(e) => setAppCommitReason(e.target.value)}
      />
    </div>
  </div>

  <div className="col-md-2 text-center">
    <div className="form-group">
      <label>RemissionRV</label>
      <input
        className="form-control"
        type="text"
        value={remissionRV}
        onChange={(e) => setRemissionRV(e.target.value)}
      />
    </div>
  </div>

  <div className="col-md-2 text-center">
    <div className="form-group">
      <label>RemissionReason</label>
      <input
        className="form-control"
        type="text"
        value={remissionReason}
        onChange={(e) => setRemissionReason(e.target.value)}
      />
    </div>
  </div>
</div>

                  <div className="row">
                  {/* table */}
                  <div class="dt-responsive table-responsive ">
                    <table class="table table-striped table-bordered nowrap">
                      <thead>
                        <tr>
                          <th className="bg-secondary">Taxes</th>
                          {/* <tr style={{ textAlign: "center" }}> */}
                          <td className="font-weight-bold">Property</td>
                          <td className="font-weight-bold">Edcation</td>
                          <td className="font-weight-bold">Sp Edu.</td>
                          <td className="font-weight-bold">Employee</td>
                          <td className="font-weight-bold">Tree</td>
                          <td className="font-weight-bold">Fire</td>
                          <td className="font-weight-bold">Light</td>
                          <td className="font-weight-bold">Drain</td>
                          <td className="font-weight-bold">Road</td>
                          <td className="font-weight-bold">Sanitation</td>
                          <td className="font-weight-bold">W.Cess</td>
                          <td className="font-weight-bold">Wbenfit</td>
                          <td className="font-weight-bold">WaterFit</td>
                          <td className="font-weight-bold">WaterBil</td>
                          <td className="font-weight-bold">MajorBuild</td>
                          <td className="font-weight-bold">Sewage</td>
                          <td className="font-weight-bold">Tax1</td>
                          <td className="font-weight-bold">Total</td>    
                        </tr>
                       {/* </tr> */}
                       {/* <tr> */}
                       </thead>
    <tbody>
                    <tr>  
                       <th>Net</th>
                       <td>280</td>
                          <td>59</td>
                          <td>0</td>
                          <td>0</td>
                          <td>13</td>
                          <td>0</td>
                          <td>0</td>
                          <td>50</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>402</td> 
</tr>                      </tbody>

<tbody>
                    <tr>  
                       <th>Retain</th>
                       <td colspan="18">Application for: Minimum RV at Old RV Zero</td>
</tr>

                      
                       
                      </tbody>
                     < tbody>
                    <tr>  
                       <th>Hearing</th>
                     
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
</tr>                 
                      </tbody>
                      < tbody>
                    <tr>  
                       <th>App.Commit</th>
                     
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
</tr>                 
                      </tbody>
                      < tbody>
                    <tr>  
                       <th>Remission</th>
                     
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
                       <td ></td>
</tr>                 
                      </tbody>
                    </table>
                  </div> 
                            </div>


                            </form>
                            </div></div></div></div></div></div></div>
    )}
                            export default DataEntryF6;