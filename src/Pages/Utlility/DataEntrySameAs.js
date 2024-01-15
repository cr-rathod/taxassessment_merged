import React, { useState, useEffect,useRef } from "react";
import { Link,useNavigate } from "react-router-dom";



const DataEntrySameAs= () => {

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

  //ward
const propOptions = [...Array(2000).keys()].map((number) => (
    <option key={number + 1} value={number + 1}>
      {number + 1}
    </option>
  ));
  
  propOptions.push(
    <option key="all" value="all">
      All
    </option>
  );

  // //search
  const [selectedWards, setSelectedWards] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const handleSelectAll = () => {
  const newSelectAllValue = !selectAll;

  // Update the state to toggle the selectAll value
  setSelectAll(newSelectAllValue);

  // Update the selectedWards based on the newSelectAllValue
  const updatedSelectedWards = newSelectAllValue
    ? [...Array(100).keys()].map((number) => `${number + 1}`)
    : [];

  // Update the selectedWards state
  setSelectedWards(updatedSelectedWards);
};

  


  const [selectedProperties, setSelectedProperties] = useState([]);
  
    const handleSelectChange = (property, value) => {
      if (property === "fromProperties") {
        setSelectedFromProperty(value);
      } else if (property === "toProperties") {
        setSelectedToProperty(value);
      }
    };
    const selectAllCheckboxRef = useRef(null);
    

    //Function to handle individual checkbox change
    const handleCheckboxChange = (property, value) => {
      if (property === "property" && value === "all") {
        // If "All" property checkbox is clicked, update selectAll and selectedProperties
        const newSelectAllValue = !selectAll;
        setSelectAll(newSelectAllValue);
    
        const allPropertyNumbers = selectedFromProperty !== "all" && selectedToProperty !== "all"
          ? [...Array(parseInt(selectedToProperty, 10) - parseInt(selectedFromProperty, 10) + 1).keys()]
              .map((number) => parseInt(selectedFromProperty, 10) + number)
          : [];
        setSelectedProperties(newSelectAllValue ? ["all", ...allPropertyNumbers] : []);
      } else {
        // If an individual property checkbox is clicked, update selectedProperties
        const updatedSelectedProperties = selectedProperties.includes(value)
          ? selectedProperties.filter((selected) => selected !== value)
          : [...selectedProperties, value];
        setSelectedProperties(updatedSelectedProperties);
      }
    };
    
      const [selectedFromProperty, setSelectedFromProperty] = useState("all");
      const [selectedToProperty, setSelectedToProperty] = useState("all");
    
      const renderCheckboxOptions = () => {
        if (selectedFromProperty !== "all" && selectedToProperty !== "all") {
          const from = parseInt(selectedFromProperty, 10);
          const to = parseInt(selectedToProperty, 10);
      
          const options = [
            <div key="all" className="form-check ">
              <input
                type="checkbox"
                className="form-check-input property-checkbox"
                id="propertyAll"
                value="all"
                checked={selectedProperties.includes("all")}
                onChange={() => handleCheckboxChange("property", "all")}
              />
              <label htmlFor="propertyAll" className="form-check-label text-info  ">
              All 
              </label>
            </div>,
            ...[...Array(to - from + 1).keys()].map((number) => {
              const propertyNumber = from + number;
              return (
                <div key={propertyNumber} className="form-check  r">
                  <input
                    type="checkbox"
                    className="form-check-input property-checkbox "
                    id={`property${propertyNumber}`}
                    value={propertyNumber}
                    checked={selectedProperties.includes(propertyNumber)}
                    onChange={() => handleCheckboxChange("property", propertyNumber)}
                  />
                  <label
                    htmlFor={`property${propertyNumber}`}
                    className="form-check-label"
                  >
                    {propertyNumber}
                  </label>
                </div>
              );
            }),
          ];
          return (
            <div className="d-flex border border-info  flex-column align-items-center justify-content-center">
              {options}
            </div>
          );
        }
      
        return null;
      };
      
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

//copyca ward
const [selectedWardOption, setSelectedWardOption] = useState('all');
const handlesame = (event) => {
  const selectedValue = event.target.value;
  setSelectedWardOption(selectedValue);
};

    return (
        <div className="pcoded-content">
          <div className="pcoded-inner-content">
            <div className="main-body">
              <div className="page-wrapper">
                <div className="page-body">
                  <div className="card">
                    <div className="card-header">
                      <h5>Submission Same As</h5>
                    </div>
                    <div className="card-block">
                      <form>
<div className="row">
<div className=" card p-2">
<h6 className="text-center text-primary  font-weight-bold">Copy Entry On</h6>

<div className="col-md-10">
  <div className="form-group row text-center">
    <div className="col-md-4 " >
      <label className="col-form-label mt-3">Ward</label>
      <select className="form-control text-center" name="ward" id="ward"    value={selectedWardOption}        onChange={handlesame}

        >
        <option value="all" >Select Ward</option>
        {wardOptions}
      </select>
      <span className="messages"></span>
    </div>

    <div className="col-md-4">
      <label className="col-form-label mt-3">From Properties</label>
      <select
        className="form-control text-center"
        name="fromProperties"
        id="fromProperties"
        value={selectedFromProperty}
        onChange={(e) => handleSelectChange("fromProperties", e.target.value)}
      >
        <option value="all">Select From Property</option>
        {fromProp}
      </select>
      <span className="messages"></span>
    </div>

    <div className="col-md-4">
      <label className="col-form-label mt-3">To Properties</label>
      <select
        className="form-control text-center"
        name="toProperties"
        id="toProperties"
        value={selectedToProperty}
        onChange={(e) => handleSelectChange("toProperties", e.target.value)}
      >
        <option value="all">Select To Property</option>
        {toProp}
      </select>
      <span className="messages"></span>
    </div>
  </div>

 


    {/* 2nd selected */}
    <div className="  text-center" style={{ maxHeight: "130px", overflowY: "auto" }}>
    
    {renderCheckboxOptions()}
  </div>
  <div className=" row justify-content-center ">
    <div className="col-sm-6 col-md-4 mt-2 ">
    <button
      type="button"
      className="btn btn-grd-info btn-block " data-toggle="modal"
      data-target="#default-Modal"
    >
    Show Data
    </button> 
</div></div>
    
</div>
  
        
{/*  */}
</div>

{/* <div className="col-md-5 border-left"> */}

<div className="col-md-6 ">
    <div className="card p-2">
<h6 className="text-center text-primary font-weight-bold">Data Entry Like</h6>
<div className=" row justify-content-center ">
    <div className="col-sm-3 text-center">
    <label className="col-form-label ">Ward</label>

      <select className="form-control  text-center" name="ward"                 value={selectedWardOption}
          onChange={handlesame}

>
        <option value="all">Select</option>
        {wardOptions}
      </select>
      <span className="messages"></span>
    </div>

    <div className="col-sm-3 text-center mx-3">
    <label className="col-form-label ">Property No.</label>

      <select className="form-control text-center" name="ward" id="ward">
        <option value="all">Select</option>
        {propOptions}
      </select>
      <span className="messages"></span>
    </div></div>
    <div className=" row justify-content-center ">

    <div className="col-md-3">
                              <div
                                class="checkbox-fade fade-in-primary mt-4"
                                style={{ "margin-top": "3%" }}
                              >
                                <label  >
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>With Renter</span>
                                </label>
                              </div></div>
                              <div className="col-sm-4">
                              <div
                                class="checkbox-fade fade-in-primary mt-4"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>With Occupier</span>
                                </label>
                              </div></div>
    {/*  */}
    </div>
    <div className=" row justify-content-center ">
    <div className="col-sm-6 col-md-3 mt-2 ">
    <button
      type="button"
      className="btn btn-grd-success btn-block " data-toggle="modal"
      data-target="#default-Modal"
    >
     Apply
    </button> 
    <div
                          class="modal fade"
                          id="default-Modal"
                          tabindex="-1"
                          role="dialog"
                        >
                            <div class="modal-dialog modal-sm" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title">L4 Level</h4>

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
                                  Enter the Password
                                </label>
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                />
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-grd-success waves-effect "
                                  data-dismiss="modal"
                                >
                                  Submit
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
    <span className="messages"></span>
  </div>
  <div className="col-sm-12 col-md-3 mt-2 ">
    <button
      type="submit"
      className="btn btn-grd-inverse btn-block"
    >
     Clear
    </button>
    <span className="messages"></span>
  </div>
    </div>
    </div>
</div>
</div>
<div className="card">
<div class="dt-responsive table-responsive text-center" style={{maxHeight: "320px", overflow: "auto"}}>
                        <table id="order-table" class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">Owner Id</th>
                              <th className="font-weight-bold">Ward No.</th>
                              <th className="font-weight-bold">Properties No.</th>
                              <th className="font-weight-bold">Partition No.</th>

                            </tr>
                          </thead>
                          <tbody>
                          
                           
                            <tr>
                              <td>8086</td>
                              <td>2</td>
                              <td>2</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>8088</td>
                              <td>0</td>
                              <td>1</td>
                              <td></td>
                            </tr>
                           
                            <tr>
                              <td>9000</td>
                              <td>7</td>
                              <td>12</td>
                              <td></td>
                            </tr>
                        
                          </tbody>
                        </table>
                      </div> 
</div>
  </form>
</div></div></div></div></div></div></div>
)}
export default DataEntrySameAs;