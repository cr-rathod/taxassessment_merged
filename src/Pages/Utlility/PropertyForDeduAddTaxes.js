import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";



const PropertyForDeduAddTaxes = () => {



    return (
        <div className="pcoded-content">
          <div className="pcoded-inner-content">
            <div className="main-body">
              <div className="page-wrapper">
                <div className="page-body">
                  <div className="card">
                    <div className="card-header">
                      <h5>Properties For Advance Deduction</h5>
                    </div>
                    <div className="card-block">
                      <form>
                      <span>No. of Properties Having Advance Amount:0 </span>
                      <div className="card-block">

                      <div class="dt-responsive table-responsive"style={{maxHeight: "304px", overflow: "auto"}}>
                        <table id="order-table" class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">NewWardNo</th>
                              <th className="font-weight-bold">NewPropertyNo</th>
                              <th className="font-weight-bold">NewPartitionNo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tiger Nixon</td>
                              <td>System Architect</td>
                              <td>Edinburgh</td>
                            </tr>
                            <tr>
                              <td>Garrett Winters</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                            </tr>
                            <tr>
                              <td>Ashton Cox</td>
                              <td>Junior Technical Author</td>
                              <td>San Francisco</td>
                            </tr>
                            <tr>
                              <td>Cedric Kelly</td>
                              <td>Senior Javascript Developer</td>
                              <td>Edinburgh</td>
                            </tr>
                            <tr>
                              <td>Airi Satou</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                            </tr>
                            <tr>
                              <td>Brielle Williamson</td>
                              <td>Integration Specialist</td>
                              <td>New York</td>
                            </tr>
                          
                          </tbody>
                        </table>
                      </div>

                      <div className="row justify-content-center">
                      <div className="col-md-2 mb-2 mt-3 d-flex justify-content-center">
    <button type="submit" className="btn  btn-grd-info"     

        
>
     Export
    </button>
  </div></div>
</div>


{/*  */}
<span>No. of Properties Having MisCellaneous Amount:0 </span>
                      <div className="card-block">

                      <div class="dt-responsive table-responsive"style={{maxHeight: "304px", overflow: "auto"}}>
                        <table id="order-table" class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">NewWardNo</th>
                              <th className="font-weight-bold">NewPropertyNo</th>
                              <th className="font-weight-bold">NewPartitionNo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tiger Nixon</td>
                              <td>System Architect</td>
                              <td>Edinburgh</td>
                            </tr>
                            <tr>
                              <td>Garrett Winters</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                            </tr>
                            <tr>
                              <td>Ashton Cox</td>
                              <td>Junior Technical Author</td>
                              <td>San Francisco</td>
                            </tr>
                            <tr>
                              <td>Cedric Kelly</td>
                              <td>Senior Javascript Developer</td>
                              <td>Edinburgh</td>
                            </tr>
                            <tr>
                              <td>Airi Satou</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                            </tr>
                            <tr>
                              <td>Brielle Williamson</td>
                              <td>Integration Specialist</td>
                              <td>New York</td>
                            </tr>
                          
                          </tbody>
                        </table>
                      </div>
                      <div className="row justify-content-center">
  <div className="col-md-7 mb-2 mt-3 d-flex justify-content-center">
    <button type="submit" className="btn btn-grd-info">
      Export
    </button>
    
    <a href="/addTax" className="btn btn-grd-inverse ml-2">
    okay
    </a>
  </div>
</div>


                      </div>
                      

                        </form>
                        </div> </div> </div> </div> </div> </div> </div> 
    )}
    export default PropertyForDeduAddTaxes;