import React, { useState, useEffect,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const OwnerNameSameAs = () => {
   
   

    //name Like 
    const [nameLikeChecked, setNameLikeChecked] = useState(false);

  const handleCheckboxChanges = () => {
    
    setNameLikeChecked(!nameLikeChecked);
  };
//wardLike
const [nameLikeWardChecked, setNameLikeWardChecked] = useState(false);

const handleCheckboxChangesWard = () => {
  setNameLikeWardChecked(!nameLikeWardChecked);
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
    //s

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
      
      

    const [selectedWard, setSelectedWard] = useState("all");
    const [selectedFromProperty, setSelectedFromProperty] = useState("all");
    const [selectedToProperty, setSelectedToProperty] = useState("all");
  
   
  
   
     const [englishName, setEnglishName] = useState(false);
    const [marathiName, setMarathiName] = useState(false);
  
    const handleEnglishCheckboxChange = () => {
        setEnglishName(!englishName);
      };
    
      const handleMarathiCheckboxChange = () => {
        setMarathiName(!marathiName);
      };



      
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
//search
const [selectedWards, setSelectedWards] = useState([]);
const [selectAll, setSelectAll] = useState(false);

// const handleCheckboxChange = (wards) => {
//   const updatedSelectedWards = selectedWards.includes(wards)
//     ? selectedWards.filter((selected) => selected !== wards)
//     : [...selectedWards, wards];

//   setSelectedWards(updatedSelectedWards);
// };
 
//save
const [showPolicy, setShowPolicy] = useState(false);

const handleSave = () => {
    alert(' Data Updated Successfully')
}
    const togglePolicy = () => {
        setShowPolicy(!showPolicy);
      };
      //table
      const [isPrime, setIsPrime] = useState(true);

//table
const [showTable,setShowTable] =useState(false);
const handleShowNamesClick=()=>{
    setShowTable(!showTable);
}
//
const [showExitingTable,setShowExitingTable] =useState(false);
const handleShowNamesExistingClick=()=>{
    setShowExitingTable(!showTable);
}


      return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Name Same As</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className=" row">
                    <div className="col-md-8">
                  <div className="form-group row text-center">
      <div className="col-sm-4">
        <label className="col-form-label mt-3">Ward</label>
        <select className="form-control text-center" name="ward" id="ward">
          <option value="all">Select Ward</option>
          {wardOptions}
        </select>
        <span className="messages"></span>
      </div>

      <div className="col-sm-4">
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

      <div className="col-sm-4">
        <label className="col-form-label mt-3 ">To Properties</label>
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
    <div className="text-center">
    <div className="row ml-2 justify-content-center">
  <div className="col-sm-3">
    <div className="checkbox-fade fade-in-primary text-center" style={{ marginTop: "3%" }}>
      <label>
        <input type="checkbox" value=""    onChange={handleEnglishCheckboxChange}
/>
        <span className="cr">
          <i className="cr-icon icofont icofont-ui-check txt-primary"></i>
        </span>
        <span>English Name</span>
      </label>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="checkbox-fade fade-in-primary text-center" style={{ marginTop: "3%" }}>
      <label>
        <input type="checkbox" value=""                 onChange={handleMarathiCheckboxChange}
/>
        <span className="cr">
          <i className="cr-icon icofont icofont-ui-check txt-primary"></i>
        </span>
        <span>Marathi Name</span>
      </label>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="checkbox-fade fade-in-primary text-center" style={{ marginTop: "3%" , marginLeft:"-29px"}}>
      <label>
        <input type="checkbox" value=""  ref={selectAllCheckboxRef}/>
        <span className="cr">
          <i className="cr-icon icofont icofont-ui-check txt-primary"></i>
        </span>
        <span>Select All</span>
      </label>
    </div>
  </div>
</div>
</div>

                            </div>
    {/* 2nd selected */}
    <div className="col-md-4">
    <div className="col-sm-8 text-center">
    <div
      className="col-md-19 mt-3 text-center"
      // style={{
      //   maxHeight: "100px",
      //   overflowY: "auto",
      //   border: "2px solid skyblue",
      // }}
    >
    <div className="  text-center" style={{ maxHeight: "130px", overflowY: "auto" }}>
    
    {renderCheckboxOptions()}
  </div>
    </div>
  </div>
  
        </div>
        
{/*  */}
</div>

{/* button */}
<div className="justify-content-center mt-3">
<div className="col-md-10 col-sm-12">
    <div className="form-group text-center">
      <button
        type="button"
        className="btn btn-grd-info "
        onClick={handleShowNamesExistingClick}
      >
        Show Existing Names
      </button> 
 
 </div></div></div>
<div className=" row">
<div className="col-md-6 ">
 <div className="card">
                          <div
                           className="card-header"
                           onClick={togglePolicy}
                           style={{ cursor: "pointer" }}
                         >
                            <h5>Name Like</h5>
                          </div>
                          {showPolicy && (
                         
                         <div className="row ">
                          <div className="col-md-8">
                          <div className="col-sm-8">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value=""checked={nameLikeChecked}
                onChange={handleCheckboxChanges}
               />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Name Like</span>

                                </label>
                              </div>
                            </div>
                            </div>
                           <div className="col-md-5 mt-2  ">
 <div className="form-group row text-center">
                          <div className="col-sm-12 ml-2  ">
                          <label className=" mt-1 col-form-label">प्रथम नाव </label>

                            <input type="text" className={`form-control text-center ${
                !nameLikeChecked ? "disabled" : ""
              }`} 
                             name="wdName" id="wdName"
                             onChange={handleMarathiCheckboxChange}
                              disabled={!nameLikeChecked}
                              />
                            <span className="messages"></span>
                          </div>
                          </div>
                          <div className="form-group row text-center">
                          <div className="col-sm-12 ml-2  ">
                          <label className=" mt-2 col-form-label">मधले नाव </label>

                            <input type="text"className={`form-control text-center ${
                !nameLikeChecked ? "disabled" : ""
              }`}  name="wdName" id="wdName"
              onChange={handleMarathiCheckboxChange}

                              disabled={!nameLikeChecked}
                              />
                            <span className="messages"></span>
                          </div>
                          </div><div className="form-group row text-center">
                          <div className="col-sm-12 ml-2  ">
                          <label className="  col-form-label mt-2">

आडनाव</label>

                            <input type="text" className={`form-control text-center ${
                !nameLikeChecked ? "disabled" : ""
              }`} 
              name="wdName" id="wdName"
              onChange={handleMarathiCheckboxChange}

                              
                              disabled={!nameLikeChecked}
                              />
                            <span className="messages"></span>
                          </div>
                          </div>
                        

                          </div>
                          <div className="col-md-5 mt-2">
 <div className="form-group row text-center">
                          <div className="col-sm-12 ml-2  ">
                          <label className=" mt-1 col-form-label">First Name</label>

                            <input type="text" className={`  form-control text-center ${
                !nameLikeChecked ? "disabled" : ""
              }`} 
               name="wdName" 
               id="wdName"
               onChange={handleEnglishCheckboxChange}
                              disabled={!nameLikeChecked}
                              />
                            <span className="messages"></span>
                          </div>
                          </div>
                          <div className="form-group row text-center ">
                          <div className="col-sm-12 ml-2  ">
                          <label className="  col-form-label mt-2">Middle Name</label>

                            <input type="text" className={`form-control text-center ${
                !nameLikeChecked ? "disabled" : ""
              }`} 
               name="wdName" id="wdName"    

                              disabled={!nameLikeChecked}
                              />
                            <span className="messages"></span>
                          </div>
                          </div><div className="form-group row text-center">
                          <div className="col-sm-12 ml-2  ">
                          <label className="  col-form-label mt-2">Last Name</label>

                            <input type="text" className={`form-control text-center ${
                !nameLikeChecked ? "disabled" : ""
              }`} 
              name="wdName" id="wdName"
                              disabled={!nameLikeChecked}

                               />
                            <span className="messages"></span>
                          </div>
                          </div>
                           
                          
                        
                            
                           
      

                          </div>
                           </div>
                           )}
                        </div>
                        </div>
{/*  */}
<div className="col-md-1 d-flex align-items-center justify-content-center ">
    <h2 className="text-danger font-italic font-weight-bold" style={{ textDecoration: 'underline' }}>OR</h2>
</div>

{/*  */}
                        <div className="col-md-5">
                        <div className="card">
                          <div
                           className="card-header"
                           onClick={togglePolicy}
                           style={{ cursor: "pointer" }}
                         >
                            <h5>Name Like</h5>
                          </div>
                          {showPolicy && (

                          <div className="row">
                              <div className="col-md-8">
                          <div className="col-sm-8">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" checked={nameLikeWardChecked}
                onChange={handleCheckboxChangesWard}
               />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span>Name Like</span>

                                </label>
                              </div>
                            </div>
                            </div>
                            
                            <div className="col-md-10 mx-auto">
  <div className="row">
    <div className="col-sm-6 text-center">
      <label className="col-form-label col-md-6">Ward</label>
      <select
        className="form-control text-center"
        name="ward"
        id="ward"
        disabled={!nameLikeWardChecked}
      >
        <option value="all"></option>
        {wardOptions}
      </select>
      <span className="messages"></span>
    </div>

    <div className="col-sm-6 text-center">
      <label className="col-form-label col-md-7">PropertyNo.</label>
      <select
        className="form-control text-center"
        name="ward"
        id="ward"
        disabled={!nameLikeWardChecked}
      >
        <option value="all"></option>
        {wardOptions}
      </select>
      <span className="messages"></span>
    </div>

</div>


<div className="col-md-6  mt-2 text-center mx-auto">
  <div className="col-md-12 col-sm-12">
      <button type="button" className="btn btn-grd-info"   onClick={handleShowNamesClick}
>
        Show Names
      </button>
  </div>
</div>

{showTable && (
        <div className=" mt-2 dt-responsive table-responsive" style={{ maxHeight: "150px", overflow: "auto" }}>
          <table id="order-table" className="table table-striped table-bordered nowrap">
          <thead>
                            <tr>
                              <th className="font-weight-bold">Owner Id</th>
                              <th className="font-weight-bold">MarathiOwnerPrathamNav</th>
                              <th className="font-weight-bold">MarathiOwnerMadhleNav</th>
                              <th className="font-weight-bold">MarathiOwnerAadNav</th>
                              <th className="font-weight-bold">OwnerFirstName</th>
                              <th className="font-weight-bold">OwnerMiddleName</th>
                              <th className="font-weight-bold">OwnerLastName</th><th className="font-weight-bold">IsPrime</th>


                              


                            </tr>
                          </thead>
                          <tbody>
                          
                           
                            <tr className="text-center">
                              <td>  B640</td> 
                              <td>देविदास</td>
                              <td> विठ्ठल</td>
                              <td>पाटील </td>
                              <td>Devidas</td>
                              <td>Vithal</td>
                              <td>Patil</td>
                              <td>{isPrime ? 'True' : 'False'}</td>

                              

                            </tr>
                            <tr className="text-center">
                              <td>  B680</td> 
                              <td></td>
                              <td> </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>{isPrime ? 'True' : 'False'}</td>

                              

                            </tr>
                            
                            
                        
                          </tbody>
          </table>
        </div>
      )}
                           

                          </div></div>
                           )}
                        </div>
                        </div> 
                        {/*  */}
                       </div>

                       {showExitingTable && (
        <div className=" mt-2 dt-responsive table-responsive" style={{ maxHeight: "200px", overflow: "auto" }}>
          <table id="order-table" className="table table-striped table-bordered nowrap">
          <thead>
                            <tr>
                              <th className="font-weight-bold">NewWardNo.</th>
                              <th className="font-weight-bold">PropertydNo.</th>
                             
                              {marathiName && <th className="font-weight-bold">MarathiOwnerPrathamNav</th>}

                              {marathiName && <th className="font-weight-bold">MarathiOwnerMadhleNav</th>}
                              {marathiName &&<th className="font-weight-bold">MarathiOwnerAadNav</th>}
                              {englishName && <th className="font-weight-bold">OwnerFirstName</th>}
                              {englishName && <th className="font-weight-bold">OwnerMiddleName</th>}
                              {englishName &&  <th className="font-weight-bold">OwnerLastName</th>}
                              
                              <th className="font-weight-bold">IsPrime</th>


                              


                            </tr>
                          </thead>
                          <tbody>
                          
                           
                            <tr className="text-center">
                              <td> 1</td> 
                              <td>4</td>
                              {marathiName && <td>देविदास</td>}
                              {marathiName && <td> विठ्ठल</td>}
                              {marathiName && <td>पाटील </td>}
                              {englishName && <td>Devidas</td>}
                              {englishName && <td>Vithal</td>}
                              {englishName && <td>Patil</td>}
                              <td>{isPrime ? 'True' : 'False'}</td>

                              

                            </tr>
                            <tr className="text-center">
                            <td> 1</td> 
                              <td>5</td>
                              {marathiName && <td></td>}
                              {marathiName && <td></td>}
                              {marathiName && <td></td>}
                              {englishName && <td></td>} 
                              {englishName && <td></td>}                           
                              {englishName && <td></td>}                           
            
                              <td>{isPrime ? 'True' : 'False'}</td>

                              

                            </tr>
                            <tr className="text-center">
                            <td> 1</td> 
                              <td>6</td>
                              {marathiName && <td></td>}
                              {marathiName && <td></td>}
                              {marathiName && <td></td>}
                              {englishName && <td></td>} 
                              {englishName && <td></td>}                           
                              {englishName && <td></td>}    
                              <td>{isPrime ? 'True' : 'False'}</td>

                              

                            </tr>
                            
                        
                          </tbody>
          </table>
        </div>
      )}
                    </form>


                    </div> </div> </div> </div> </div> </div> </div>
  )};
  export default OwnerNameSameAs;