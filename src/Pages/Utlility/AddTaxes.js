import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";


const AddTaxes= () => {
  const navigate = useNavigate();

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
//toProp
const toProp = [...Array(200).keys()].map((number) => (
  <option key={number + 1} value={number + 1}>
    {number + 1}
  </option>
));
toProp.push(
  <option key="all" value="all">
    All
  </option>
);

 //add tax
 const [iscreate, setcreate] = useState(false);

const handleClick = () => {
  setcreate(true);
};

const [enteredPassword, setEnteredPassword] = useState('');
const correctPassword = '123$';

const handleSaveChanges = () => {
  if (enteredPassword === correctPassword) {
    alert('Changes saved successfully');
    navigate('/addTax');
    } else {
    alert('Incorrect password. Changes not saved.');
   
  }
};

const handleCancel = () => {
  setcreate(false);
  alert("Authication Failed")
};
 
//ward
const [selectedWard, setSelectedWard] = useState([]);
const [selectAll, setSelectAll] = useState(false);

const handleCheckboxChange = (ward) => {
  const updatedSelectedWard = selectedWard.includes(ward)
    ? selectedWard.filter((selected) => selected !== ward)
    : [...selectedWard, ward];

  setSelectedWard(updatedSelectedWard);
};





    return (
        <>
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    <div className="main-body">
                        <div className="page-wrapper">
                            <div className="page-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Add Taxes</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul class="nav nav-tabs md-tabs" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" data-toggle="tab" href="#mainProperties" role="tab">Add Taxes</a>
                                                                <div class="slide"></div>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" data-toggle="tab" href="#obliqueProperties" role="tab">Add Taxes From-To properties</a>
                                                                <div class="slide"></div>
                                                            </li>
                                                        </ul>
                                                        <div class="tab-content card-block">
                                                            <div class="tab-pane active" id="mainProperties" role="tabpanel">
                                                                <div className="col-sm-12">
                                                                    <div className="card">
                                                                        <div className="card-header">
                                                                            <h5>Add Taxes To Owner Account</h5>
                                                                        </div>
                                                                        <div className="card-block">
                      <form id="main" method="post" action="/" novalidate="">
                      <div className="row">
  <div className="col-md-4">
 <div className="form-group row">
                          <label className="col-sm-5 col-form-label">Enter Finance Year</label>
                          <div className="col-sm-5">
                            <select type="text" className="form-control" name="wdName" id="wdName"
                              placeholder="Enter financeYear">
                                <option></option>
                                <option>2022-2023</option>
                                <option>2023-2024</option>

                                </select>
                            <span className="messages"></span>
                          </div>
                          </div>
                          <div className="form-group row">
      <label className="col-sm-5 col-form-label">Ward</label>
      {/* <label className="mt-2 col-md-5" >WardNo.</label> */}

<div
  className="col-md-4 mx-3  checkbox-fade fade-in-primary"
  style={{
    maxHeight: "70px",
    overflowY: "auto",
    border: "2px solid #ccc",
  }}
>
  {[...Array(20).keys()].map((number) => (
    <div key={number} className="form-check text-center">
            <label htmlFor={`ward${number + 1}`} className="form-check-label mb-2">
            {number + 1}

      <input
        type="checkbox"
        className="form-check-input"
        id={`ward${number + 1}`}
        checked={selectAll || selectedWard.includes(`${number + 1}`)}
        onChange={() => handleCheckboxChange(`${number + 1}`)}
      />
        <span class="cr">
                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                  </span>
      </label>
    </div>
  ))}
</div></div>

    <div className="card">
                    <div className="card-header">
                      <h5>Taxes Already Added For Below Years</h5>
                    </div>
                    <div className="card-block">
                      <div class="dt-responsive table-responsive" style={{maxHeight: "150px", overflow: "auto"}}>
                        <table id="order-table" class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">Year</th>
                              <th className="font-weight-bold">Properties</th>
                            </tr>
                          </thead>
                          <tbody>
                          
                           
                            <tr>
                              <td>2017</td>
                              <td>9775</td>
                            </tr>
                            <tr>
                              <td>2018</td>
                              <td>9817</td>
                            </tr>
                            <tr>
                              <td>2019</td>
                              <td>9852</td>
                            </tr>
                            <tr>
                              <td>2020</td>
                              <td>9934</td>
                            </tr>
                            <tr>
                              <td>2021</td>
                              <td>10136</td>
                            </tr>
                             <tr>
                              <td>2022</td>
                              <td>10001</td>
                            </tr>
                             <tr>
                              <td>2023</td>
                              <td>9782</td>
                            </tr>
                        
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                         

                        </div>
                        {/* 2nd */}
                        <div className="col-md-3 ">
                        {/* <div className="col-md-8 form-check">
   
    <input
      type="checkbox"
      className="form-check-input"
      name="tPropNo"
      id="tPropNo"
      value={0}
    />
     <label className="">
      With Interest
    </label>
  </div>  */}
     <div className="col-md-8 form-check">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" 
      />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>  With Interest</span>
                                </label>
                              </div>
                            </div>
  <div className="row">
  <div className="col-md-8 mb-2 mt-3">
    <button type="button" className="btn btn-block btn-grd-success"  data-toggle="modal"
                          data-target="#large-Modal" onClick={handleClick} >
      Add Tax
    </button>
                         
    <div
                          class="modal fade"
                          id="large-Modal"
                          tabindex="-1"
                          role="dialog"
                        >
                          <div class="modal-dialog modal-sm" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title">NTIS L1</h4>

                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <label className="col-form-label mb-2 text-center">
                                  Enter Security Password
                                </label>
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                />
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-grd-info waves-effect "
                                  data-dismiss="modal"
                                >
                                  Ok
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-grd-inverse waves-effect waves-light "
                                  data-dismiss="modal"

                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>


  </div></div>
  {/* <div className="row">

<div className="col-md-8 mt-4">
<a href="">
                            <img className="img-fluid" src="../files/assets/images/deposit.jpg" alt="Theme-Logo" />
                        </a>
</div>
</div> */}

  <div className="row">

  <div className="col-md-8 mt-3">
    <button type="button" className="btn btn-block btn-grd-danger" data-toggle="modal"
                          data-target="#large-Modal"  onClick={handleClick} >
      Remove Add Tax
    </button>
    <div
                          class="modal fade"
                          id="large-Modal"
                          tabindex="-1"
                          role="dialog"
                        >
                          <div class="modal-dialog modal-sm" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title">NTIS L1</h4>

                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <label className="col-form-label mb-2 text-center">
                                  Enter Security Password
                                </label>
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                />
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-grd-info waves-effect "
                                  data-dismiss="modal"
                                >
                                  Ok
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-grd-inverse waves-effect waves-light "
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
  </div>
</div>

{/*  */}


<div className="row mt-3">

<div className="col-md-8 text-center">
    <h6 className="text-info font-weight-bold italic ">Advance Deduction:</h6>
  <button type="button" className="btn btn-block btn-grd-success" data-toggle="modal"
                          data-target="#large-Modal">
  Advance Deduction
  </button>
  <div
                          class="modal fade"
                          id="large-Modal"
                          tabindex="-1"
                          role="dialog"
                        >
                          <div class="modal-dialog modal-sm" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title">NTIS L1</h4>

                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <label className="col-form-label mb-2 text-center">
                                  Enter Security Password
                                </label>
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                />
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-grd-info waves-effect "
                                  data-dismiss="modal"
                                >
                                  Ok
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-grd-inverse waves-effect waves-light "
                                  data-dismiss="modal"

                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
  
</div>
</div>
  
   </div>

  {/* 3rd */}
   <div className="col-md-5 mt-3 ">
   
<div className="row mt-3 d-flex align-items-center">
  <div className="col-md-19 mt-4">
    <a href=" /pAdvanceDedu">
      <img className="img-fluid" src="../files/assets/images/interest.webp" alt="Theme-Logo" />
      <br /> 
      <span className="d-block mt-4 text-center font-weight-bold text-hover">Check Properties For Advance Deduction For Selected Ward</span>
    </a>
  </div>
</div>

</div>


                        
                        {/*  */}
                         </div>
                         {/* {iscreate && (
  <div className="col-12 border border-primary col-md-3 d-flex flex-column align-items-center">
    <h6 className="text-info mt-2 font-weight-bold">NTIS L1</h6>
    <div className="grid-box text-center">
      <label className="col-form-label">Enter Security Password</label>
      <div className="mb-3 row">
        <div className="col-sm-11 ml-2">
          <input
            type="password" // Use type="password" for secure password input
            className="form-control"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="col-md-12">
        <button
          className="btn btn-grd-primary btn-block btn-sm mb-2"
          onClick={handleSaveChanges}
        >
          Ok
        </button>
      </div>
      <div className="col-md-12">
        <button
          className="btn btn-grd-inverse btn-block btn-sm mb-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)} */}
                      
                      </form>
                    
    
                    </div>
                  </div>
                  
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane" id="obliqueProperties" role="tabpanel">
                                                                <div className="col-sm-12">
                                                                   
                                                    
<div className="card">
                                                                        <div className="card-header">
                                                                            <h5>Add Taxes To Owners Account</h5>
                                                                        </div>
                                                                        <div className="card-block">
                     
                     <form id="main" method="post" action="/" novalidate="">
                    < h6>
                                              Search Properties:
                                              </h6>  
  <div className="row  p-2 ml-1  border-info">
      <label className="mt-3">Ward</label>
<div
  className="col-md-2 mt-2 mx-3 checkbox-fade fade-in-primary"
  style={{
    maxHeight: "70px",
    overflowY: "auto",
    border: "2px solid #ccc",
  }}
>       

  {[...Array(20).keys()].map((number) => (
    <div key={number} className="form-check text-center" >
       <label htmlFor={`ward${number + 1}`} className="form-check-label mb-2">
        {number + 1}
      <input
        type="checkbox"
        className="form-check-input checkbox-fade fade-in-primary"
        id={`ward${number + 1}`}
        checked={selectAll || selectedWard.includes(`${number + 1}`)}
        onChange={() => handleCheckboxChange(`${number + 1}`)}
      />
     
        <span class="cr">
                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                  </span>
      </label>
      
    </div>
  ))}
</div>

  {/* <div className="col-sm-6 col-md-3">
      <div className="form-group text-center">
        <label>Ward</label>
        <select className="form-control" name="ward" id="ward">
          <option value="all">Select Ward</option>
          {wardOptions}
        </select>
        <span className="messages"></span>
      </div>
    </div> */}
        <label className="mt-3">From Properties</label>

    <div className="col-sm-2 mt-2">
      <div className="form-group text-center">
        <select className="form-control" name="fromProperties" id="fromProperties">
          <option value="all">Select Property</option>
          {fromProp}

        </select>
        <span className="messages"></span>
      </div>
    </div>
    <label  className="mt-3">To Properties</label>

    <div className="col-sm-2  mt-2">
      <div className="form-group text-center">
        <select className="form-control" name="toProperties" id="toProperties">
          <option value="all">Select Property</option>
          {toProp}

        </select>
        <span className="messages"></span>
      </div>
    </div>

    <div className="col-sm-2 ">
      <div className="form-group">
        <button className="btn btn-grd-info btn-block mt-3">Show</button>
      </div>
    </div>

  </div>
    {/*  */}
                      <div className="row mt-4">
  <div className="col-md-4">
 <div className="form-group row">
                          <label className="col-sm-5 col-form-label">Enter Finance Year</label>
                          <div className="col-sm-7">
                          <select type="text" className="form-control" name="wdName" id="wdName"
                              placeholder="Enter financeYear">
                                <option></option>
                                <option>2022-2023</option>
                                <option>2023-2024</option>

                                </select>
                            <span className="messages"></span>
                          </div>
                          </div>
                          

    <div className="card">
                    <div className="card-header">
                      <h5>Taxes Already Added For Below Years</h5>
                    </div>
                    <div className="card-block">
                      <div class="dt-responsive table-responsive" style={{maxHeight: "263px", overflow: "auto"}}>
                        <table id="order-table" class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">Year</th>
                              <th className="font-weight-bold">Properties</th>
                            </tr>
                          </thead>
                          <tbody>
                          
                           
                            <tr>
                              <td>2017</td>
                              <td>9775</td>
                            </tr>
                            <tr>
                              <td>2018</td>
                              <td>9817</td>
                            </tr>
                            <tr>
                              <td>2019</td>
                              <td>9852</td>
                            </tr>
                            <tr>
                              <td>2020</td>
                              <td>9934</td>
                            </tr>
                            <tr>
                              <td>2021</td>
                              <td>10136</td>
                            </tr>
                             <tr>
                              <td>2022</td>
                              <td>10001</td>
                            </tr>
                             <tr>
                              <td>2023</td>
                              <td>9782</td>
                            </tr>
                        
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                         

                        </div>
                        {/* 2nd */}
                        <div className="col-md-3">
                        <div className="col-md-8 form-check">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" 
      />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>  With Interest</span>
                                </label>
                              </div>
                            </div>
  <div className="row mt-3">
  <div className="col-md-10 mb-2 ">
    <button type="submit" className="btn btn-block btn-grd-success" data-toggle="modal" data-target="#large-Modal"  

  >    Add Tax
    </button>
    <div
                          class="modal fade"
                          id="large-Modal"
                          tabindex="-1"
                          role="dialog"
                        >
                          <div class="modal-dialog modal-sm" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title">NTIS L1</h4>

                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <label className="col-form-label mb-2 text-center">
                                  Enter Security Password
                                </label>
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                />
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-grd-info waves-effect "
                                  data-dismiss="modal"
                                >
                                  Ok
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-grd-inverse waves-effect waves-light "
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
  </div></div>
  {/* <div className="row">

<div className="col-md-10 ">
<a href="">
                            <img className="img-fluid" src="../files/assets/images/deposit.jpg" alt="Theme-Logo" />
                        </a>
</div>

</div> */}

  <div className="row mt-3">

  <div className="col-md-10">
    <button type="submit" className="btn btn-block btn-grd-danger"   onClick={handleClick} >
      Remove Add Tax
    </button>
  </div>
</div>
<div className="row mt-3">

<div className="col-md-10 text-center">
<h6 className="text-info font-weight-bold italic ">Advance Deduction:</h6>

  <button type="submit" className="btn btn-block btn-grd-success" data-toggle="modal"
                          data-target="#large-Modal">
  Advance Deduction
  </button>
  <div
                          class="modal fade"
                          id="large-Modal"
                          tabindex="-1"
                          role="dialog"
                        >
                          <div class="modal-dialog modal-sm" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title">NTIS L1</h4>

                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <label className="col-form-label mb-2 text-center">
                                  Enter Security Password
                                </label>
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                />
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-grd-info waves-effect "
                                  data-dismiss="modal"
                                >
                                  Ok
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-grd-inverse waves-effect waves-light "
                                  data-dismiss="modal"

                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
</div></div>

{/*  */}

{/* <hr className="border-info font-weight-bold" /> */}

  {/* <div className="row mt-3">

  <div className="col-md-8">
    <h6 className="text-info font-weight-bold ">Advance Deduction:</h6>
  </div>
   </div>
   <div className="row mt-3">

<div className="col-md-8">
  <button type="submit" className="btn btn-block btn-grd-success">
  Advance Deduction
  </button>
</div>
</div> */}
   </div>

  {/* 3rd */}
   <div className="col-md-5 mt-1 ">
   
<div className="row mt-3 ml-2 ">
  <div className="card">
                    <div className="card-header">
                      <h5>Taxes Already Added For Below Years</h5>
                    </div>
                    <div className="card-block ">
                      <div class="dt-responsive table-responsive" style={{ maxHeight: "300px", overflow: "auto"}}>
                        <table id="order-table" class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold ">Ward No.</th>
                              <th className="font-weight-bold">Properties No.</th>
                              <th className="font-weight-bold">Partition No.</th>

                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td>2</td>
                              <td>1</td>
                              <td></td>
                            </tr> <tr>
                              <td>2</td>
                              <td>1</td>
                              <td></td>
                            </tr>
                           
                            <tr>
                              <td>2</td>
                              <td>1</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>2</td>
                              <td></td>
                            </tr>
                            <tr>
                            <td>3</td>
                              <td>2</td>
                              <td></td>
                            </tr>
                            <tr>
                            <td>2</td>
                              <td>1</td>
                              <td></td>
                            </tr>
                            <tr>
                            <td>2</td>
                              <td>1</td>
                              <td></td>
                            </tr>
                            
                        
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
  </div>
</div>



                        
                        {/*  */}
                         </div>
                         {/* {iscreate && (
  <div className="col-12 border border-primary col-md-3 d-flex flex-column align-items-center">
    <h6 className="text-info mt-2 font-weight-bold">NTIS L1</h6>
    <div className="grid-box text-center">
      <label className="col-form-label">Enter Security Password</label>
      <div className="mb-3 row">
        <div className="col-sm-11 ml-2">
          <input
            type="password" // Use type="password" for secure password input
            className="form-control"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="col-md-12">
        <button
          className="btn btn-grd-primary btn-block btn-sm mb-2"
          onClick={handleSaveChanges}
        >
          Ok
        </button>
      </div>
      <div className="col-md-12">
        <button
          className="btn btn-grd-inverse btn-block btn-sm mb-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)} */}
                      
                      </form>
                    
    
                    </div>
                  </div>
                  
                                                            
                                                        </div>
                                                    </div></div>
                                                            </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
    

export default AddTaxes;
