import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";

const RenterMutation = () => {
  const [wardNumber, setWardNumber] = useState("");

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState(""); 
  const [attachedFilesCount, setAttachedFilesCount] = useState(0);

  const [showUpdateField, setShowUpdateField] = useState(false);

  const handleUpdateButtonClick = () => {
    setShowUpdateField(true);
  };


  //attached
  const fileInputRef = useRef(null);

  const handleAttachmentClick = () => {
    fileInputRef.current.click();
    setAttachedFilesCount(attachedFilesCount + 1);

  };

  const staticOwnerNamesWard1 = [
    "Pankaj Masharvrao Pawar",
    "Rohit Rajabhau Pandit",
    "Shivajrao Ankurshrao Pandit",
    "Trimbakrao Masdhavrao Pawar",
    "Laxmanrao Pawar",
    "Ashok Pankhade",
  ];
  const staticOwnerNamesWard2 = [
    "Pankaj ",
    "Rohit",
    "Shivajrao ",
    "Trimbakrao ",
    "Laxmanrao ",
    "Ashok ",
  ];
  
  const staticPropertyNumbers1 = Array.from({ length: 1528 }, (_, index) =>
    (index + 1).toString()
  );
  const staticPropertyNumbers2 = Array.from({ length: 15 }, (_, index) =>
    (index + 1).toString()
  );

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchText(query);

    if (searchType === "owner") {
      const ownerNames =
        wardNumber === "2" ? staticOwnerNamesWard2 : staticOwnerNamesWard1;
      const filteredResults = ownerNames.filter((ownerName) =>
        ownerName.toLowerCase().includes(query.toLowerCase())
      );
      // wardNumber === "1" ? staticOwnerNamesWard2 : staticOwnerNamesWard1;
      // const filteredResults = ownerNames.filter((ownerName) =>
      //   ownerName.toLowerCase().includes(query.toLowerCase())
      // );
      setSearchResults(filteredResults);
    } else if (searchType === "property") {
      // Use the appropriate property numbers based on the selected ward number
      const propertyNumbers =
        wardNumber === "1" ? staticPropertyNumbers2 : staticPropertyNumbers1;
      const filteredResults = propertyNumbers.filter((propertyNo) =>
        propertyNo.includes(query)
      );
    //      wardNumber === "2" ? staticPropertyNumbers1 : staticPropertyNumbers2;
    //   const filteredResults = propertyNumbers.filter((propertyNo) =>
    //     propertyNo.includes(query)
    //   );
      setSearchResults(filteredResults);
    }
  };
  const handleSelect = (selectedItem) => {
    console.log("Selected Item:", selectedItem);
  };

  const handleRadioChange = (type) => {
    setSearchType(type);
    setSearchResults([]);
    setSearchText("");
  };

  // 
    const wardOptions = Array.from({ length: 16 }, (_, index) => index + 1);

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5> Renter Mutation</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="container">
                      <div className="row">
                      <div className="col-md-6">
                          <h6 className="text-info ">Search By</h6>
                          <div className="form-group row ml-2 mt-3">
      <label htmlFor="wardNo" className="col-1-md-1 col-form-label">
        Ward No.
      </label>
      <div className="col-md-2">
        <select
          id="wardNo"
          className="form-control text-right"
          value={wardNumber}
          onChange={(e) => setWardNumber(e.target.value)}
        >
          {wardOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
                            <div className="col-1-md-1 mx-3 mt-1">
                              <div className="form-check ">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  id="ownerRadio"
                                  name="searchType"
                                  value="owner"
                                  checked={searchType === "owner"}
                                  onChange={() => handleRadioChange("owner")}
                                />
                                <label
                                  htmlFor="ownerRadio"
                                  className="form-check-label"
                                >
                                  Owner Name
                                </label>
                              </div>
                            </div>
                            <div className="col-1-md-1 mt-1 mx-3 ">
                              <div className="form-check">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  id="propertyRadio"
                                  name="searchType"
                                  value="property"
                                  checked={searchType === "property"}
                                  onChange={() => handleRadioChange("property")}
                                />
                                <label
                                  htmlFor="propertyRadio"
                                  className="form-check-label"
                                >
                                  Property No.
                                </label>
                              </div>
                            </div>
                          </div>

                          <h6 className="text-info"> Property Detalis</h6>
                          <div className="  form-group row ml-2">
                            <label
                              htmlFor="propertyNo"
                              className="col-1-md-1 col-form-label"
                            >
                              Property No.
                            </label>
                            <div className="col-1-md-2 mx-1">
                              <input
                                type="text"
                                id="propertyNo"
                                className="form-control text-right"
                              />
                            </div>
                            <label
                              htmlFor="wardNo"
                              className="col-1-md-1 col-form-label"
                            >
                              Partition No.
                            </label>
                            <div className="col-1-md-2 mx-1">
                              <input
                                type="text"
                                id="partitionNo"
                                className="form-control text-right"
                              />
                            </div>
                          </div>
                          {/*  */}
                          <div className="form-group row ">
                            <label
                              htmlFor="owner"
                              className="text-info col-md-3 text-md-left "
                            >
                              Owner Details:
                            </label>
                            <div class="dt-responsive table-responsive ml-3">
                                    <table class="table table-striped table-bordered nowrap">
                                      <thead>
                                      <tr class="text-center">
                                          <th  className="font-weight-bold">IsPrime</th>
                                          <th  className="font-weight-bold">M.Title</th>
                                          <th  className="font-weight-bold">पूर्ण नाव </th>
                                          <th  className="font-weight-bold">Title</th>
                                          <th  className="font-weight-bold">Full Name</th>
                                         
                                          
                                        </tr>
                                      </thead>
                                      <tbody>
                                      <tr class="text-center">
                                        <td>
                                            <label>
                                              <input
                                                type="checkbox"
                                               
                                              />
                                            </label>
                                          </td>
                                          <td>श्री </td>
                                          <td>देविदास सुदाम पुरी</td>

                                          <td>Mr.</td>
                                          <td>Devidas Shundas Puri</td>
                                          </tr>
                                         
                                        </tbody>
                                      </table>
                                    </div>
                                      </div></div>

                        {/*  */}
                        <div className="col-md-3 mt-3">
                          <h6 className="text-info">Property Information</h6>
                          <label>Search By Owner Name And PropertyNo.</label>

                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search..."
                              aria-label="Search"
                              aria-describedby="searchButton"
                              value={searchText}
                              onChange={handleChange}
                            />
                            {searchText && (
                              <div className="input-group-append">
                                <button
                                  className="btn btn-grd-inverse ml-2"
                                  type="button"
                                  onClick={() => {
                                    setSearchText("");
                                    setSearchResults([]);
                                  }}
                                >
                                  Clear
                                </button>
                              </div>
                            )}
                          </div>
                          {(searchType === "owner" ||
                            searchType === "property") && (
                            <div
                              style={{
                                maxHeight: "200px",
                                overflowY: "auto",
                                border: "1px solid #ddd",
                                marginTop: "4px",
                              }}
                            >
                              <label className="font-weight-bold ml-2">
                                Search By{" "}
                                {searchType === "owner"
                                  ? "Owner Name"
                                  : "Property No."}
                                :
                              </label>
                              {searchResults.length > 0 && (
                                <ul className="list-group mt-2">
                                  {searchResults.map((result, index) => (
                                    <li
                                      key={index}
                                      className="list-group-item"
                                      onClick={() => handleSelect(result)}
                                      style={{ cursor: "pointer" }}
                                    >
                                      {result}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </div>

                        {/*  */}
                        <div className="col-md-3 mt-3">
                        <div className="form-group row ">
                           <h6 className="text-info">Property Transfer Details</h6>
                            <div class="dt-responsive table-responsive">
                                    <table class="table table-striped table-bordered nowrap">
                                      <thead>
                                      <tr class="text-center">

                                          <th  className="font-weight-bold">Transaction Date</th>
                                          <th  className="font-weight-bold">Seller Name</th>
                                          <th  className="font-weight-bold">Buyer Name</th>
                                          <th  className="font-weight-bold">Remark</th>
                                          <th  className="font-weight-bold">OrderNo.</th>
                                          <th  className="font-weight-bold">Order Transfer Date</th>
                                         
                                          
                                        </tr>
                                      </thead>
                                      <tbody>
                                      <tr class="text-center">
                                        <td>
                                          24/11/2023
                                          </td>
                                          <td>The Holder </td>
                                          <td>Devidas Shundas Puri</td>
                                          <td>test</td>
                                         <td>0</td>
                                         <td>
                                          24/11/2023
                                          </td>
                                          </tr>
                                         
                                        </tbody>
                                      </table>
                                    </div>
                                      </div></div>
                        {/*  */}
                     
                    {/* </div>
<div className="row">  */}
                    <h6 className="text-info">Floor And Renter Details</h6> 
                    <div class="dt-responsive table-responsive mt-2" style={{maxHeight: "150px", overflow: "auto"}}>
                                      <table
                                        id="newcons-table"
                                        class="table table-striped table-bordered nowrap"
                                      >
                                        <thead>
                                          <tr>
                                            <th  className="font-weight-bold">Floor</th>
                                            <th  className="font-weight-bold">Const.Year</th>
                                            <th  className="font-weight-bold">Const.Type</th>
                                            <th  className="font-weight-bold">Group</th>
                                            <th  className="font-weight-bold">Type Of Use</th>
                                            <th  className="font-weight-bold">Carpet Area(ft)</th>
                                            <th  className="font-weight-bold">Carpet Area(mtr)</th>
                                            <th  className="font-weight-bold">Rooms</th>
                                            <th  className="font-weight-bold">Registration</th>
                                            <th  className="font-weight-bold">Renter</th>
                                            {/* <th>प्रथम नाव</th> */}
                                            {/* <th>मधले नाव</th> */}
                                            <th  className="font-weight-bold">पूर्ण नाव</th>
                                            <th  className="font-weight-bold">Calculate Rent(Rs)</th>
                                            <th  className="font-weight-bold">Non Calculate Rent(Rs)</th>
                                            <th  className="font-weight-bold">Full Name</th>
                                            <th  className="font-weight-bold">Occupier</th>
                                            <th  className="font-weight-bold">भोगवटादार चे पूर्ण नाव</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>B</td>

                                            <td>2009</td>
                                            <td>B</td>
                                            <td></td>

                                            <td>H</td>
                                            <td>220</td>
                                            <td>20.438</td>
                                            <td>1</td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td>मारोती G. गवळी</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>Dinesh Dadarrao Ghodake</td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td></td>
                                          </tr>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>G</td>
                                            <td>2009</td>
                                            <td>C</td>
                                            <td></td>
                                            <td>H</td>
                                            <td>1716</td>
                                            <td>159.42</td>
                                            <td>9</td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                 
                                                />
                                              </label>
                                            </td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td>मारोती G. गवळी</td>
                                            <td>0</td>
                                            <td>50</td>
                                            <td>Dinesh Dadarrao Ghodake</td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td></td>
                                          </tr>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>G</td>
                                            <td>2009</td>
                                            <td>B</td>
                                            <td></td>
                                            <td>H</td>
                                            <td>160</td>
                                            <td>14.438</td>
                                            <td>1</td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  
                                                 
                                                />
                                              </label>
                                            </td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                 
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td>मारोती G. गवळी</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>Dinesh Dadarrao Ghodake</td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div> 
                                    {/*  */}
<h6 className="text-info mt-3">Edit Data Here</h6>

{/*  */}
<div className=" form-group row ml-2">
<div className="col-1-md-1 text-center ">
                                      <label>Floor</label>
                                      <select
                                        className="form-control bg-info text-white"
                                        
                                        style={{ height: 35 }}
                                      >
                                        <option value="0"></option>
                                        <option value="1">G</option>
                                        <option value="2">1</option>
                                        <option value="3">2</option>
                                        <option value="4">3</option>
                                        <option value="5">4</option>
                                        <option value="6">5</option>
                                        <option value="7">6</option>
                                        <option value="8">7</option>
                                        <option value="9">8</option>
                                        <option value="10">9</option>
                                        <option value="11">10</option>
                                      </select>
                                    </div>

                                    <div className="col-md-3 mt-1 text-center ">
                                      <div className="form-group">
                                        <label>भाडेकरू पूर्ण नाव </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          
                                        />
                                      </div></div>
                                      <div className="col-md-3 mt-1 ">
                                      <div className="form-group">
                                        <label>Renter Full Name </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          
                                        />
                                        </div>

                                    </div>

                                    
                                    <div className="col-md-3 mt-1 text-center ">
                                      <div className="form-group">
                                        <label>भोगवटधाराचे पूर्ण नाव </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          
                                        />
                                      </div>
                                    </div>
                                   
                                    <div className="col-md-2 mt-1 text-center text-center ">
                                      <div className="form-group">
                                        <label>Occupier Full Name</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          
                                        />
                                      </div>
                                    </div>

                                    <div className="col-1-md-1  text-center">
                                    <label
                              htmlFor="date"
                              className=" col-form-label "
                            >
                              Mutation Date
                            </label>
                              <input
                                className="    form-control form-control-sm "
                                type="text"
                                name="Date"
                                id="txtTDate"
                                placeholder="Enter Mutation Date"
                              />
                            </div>

                            <div className="col-md-2  text-center">
                            <label className="col-form-label ">
  Order No.
</label>

                              <input
                                className="form-control form-control-sm"
                                type="text"
                                
                              />
                            </div>
{/*  */}
                            <div className="col-md-7 text-center">
                                    <label
                              className=" col-form-label"
                            >
                            Remark
                            </label>
                              <input
                                className="form-control form-control-sm"
                                type="text"
                                
                              />
                            </div>

                              <div className="  d-flex justify-content-center align-items-center mt-4  ">
                                <div className="col d-flex justify-content-end align-items-start ">
                                  <button
                                    type="submit"
                                    className=" btn btn-sm btn-grd-success"
                                  >
                                   Add
                                  </button>
                                </div></div>

</div>
 <div class="dt-responsive table-responsive" style={{maxHeight: "120px", overflow: "auto"}}>
                                      <table
                                        id="newcons-table"
                                        class="table table-striped table-bordered nowrap"
                                      >
                                        <thead>
                                          <tr>
                                            <th  className="font-weight-bold">Floor</th>
                                            <th  className="font-weight-bold">Const.Year</th>
                                            <th  className="font-weight-bold">Const.Type</th>
                                            <th  className="font-weight-bold">Group</th>
                                            <th  className="font-weight-bold">Type Of Use</th>
                                            <th  className="font-weight-bold">Carpet Area(ft)</th>
                                            <th  className="font-weight-bold">Carpet Area(mtr)</th>
                                            <th  className="font-weight-bold">Rooms</th>
                                            <th  className="font-weight-bold">Registration</th>
                                            <th  className="font-weight-bold">Renter</th>
                                            {/* <th>प्रथम नाव</th> */}
                                            {/* <th>मधले नाव</th> */}
                                            <th  className="font-weight-bold">पूर्ण नाव</th>
                                            <th  className="font-weight-bold">Calculate Rent(Rs)</th>
                                            <th  className="font-weight-bold">Non Calculate Rent(Rs)</th>
                                            <th  className="font-weight-bold">Full Name</th>
                                            <th  className="font-weight-bold">Occupier</th>
                                            <th  className="font-weight-bold">भोगवटादार चे पूर्ण नाव</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>B</td>

                                            <td>2009</td>
                                            <td>B</td>
                                            <td></td>

                                            <td>H</td>
                                            <td>220</td>
                                            <td>20.438</td>
                                            <td>1</td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td>मारोती G. गवळी</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>Dinesh Dadarrao Ghodake</td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td></td>
                                          </tr>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>G</td>
                                            <td>2009</td>
                                            <td>C</td>
                                            <td></td>
                                            <td>H</td>
                                            <td>1716</td>
                                            <td>159.42</td>
                                            <td>9</td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                 
                                                />
                                              </label>
                                            </td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td>मारोती G. गवळी</td>
                                            <td>0</td>
                                            <td>50</td>
                                            <td>Dinesh Dadarrao Ghodake</td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td></td>
                                          </tr>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>G</td>
                                            <td>2009</td>
                                            <td>B</td>
                                            <td></td>
                                            <td>H</td>
                                            <td>160</td>
                                            <td>14.438</td>
                                            <td>1</td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  
                                                 
                                                />
                                              </label>
                                            </td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                 
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td>मारोती G. गवळी</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>Dinesh Dadarrao Ghodake</td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                
                                                  
                                                />
                                              </label>
                                            </td>
                                            <td></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div> 




                    </div></div>




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
export default RenterMutation;