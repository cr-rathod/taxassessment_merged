import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Mutation = () => {
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
                  <h5>Mutation</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="text-info ">Search By</h6>
                          <div className="form-group row ml-2 mt-3">
                            <label
                              htmlFor="wardNo"
                              className="col-1-md-1 col-form-label"
                            >
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
                            <div class="dt-responsive table-responsive ml-3"  style={{maxHeight: "200px", overflow: "auto"}}>
                              <table class="table table-striped table-bordered nowrap">
                                <thead>
                                  <tr class="text-center">
                                    <th>IsPrime</th>
                                    <th>M.Title</th>
                                    <th>पूर्ण नाव </th>
                                    <th>Title</th>
                                    <th>Full Name</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="text-center">
                                    <td>
                                      <label>
                                        <input type="checkbox" />
                                      </label>
                                    </td>
                                    <td>श्री </td>
                                    <td>देविदास सुदाम पुरी</td>

                                    <td>Mr.</td>
                                    <td>Devidas Shundas Puri</td>
                                  </tr>  <tr class="text-center">
                                    <td>
                                      <label>
                                        <input type="checkbox" />
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
                          </div>
                        </div>

                        {/*  */}
                        <div className="col-md-3  mt-3">
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
                                  className="btn btn-sm btn-grd-inverse waves-effect waves-light mx-1"
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
                                maxHeight: "250px",
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
                            <h6 className="text-info">
                              Property Transfer Details
                            </h6>
                            <div class="dt-responsive table-responsive "  style={{maxHeight: "250px", overflow: "auto"}}>
                              <table class="table table-striped table-bordered nowrap">
                                <thead>
                                  <tr class="text-center">
                                    <th>Transaction Date</th>
                                    <th>Seller Name</th>
                                    <th>Buyer Name</th>
                                    <th>Remark</th>
                                    <th>OrderNo.</th>
                                    <th>Order Transfer Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="text-center">
                                    <td>24/11/2023</td>
                                    <td>The Holder </td>
                                    <td>Devidas Shundas Puri</td>
                                    <td>test</td>
                                    <td>0</td>
                                    <td>24/11/2023</td>
                                  </tr>
                                  <tr class="text-center">
                                    <td>24/11/2023</td>
                                    <td>The Holder </td>
                                    <td>Devidas Shundas Puri</td>
                                    <td>test</td>
                                    <td>0</td>
                                    <td>25/11/2023</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        {/*  */}
                      </div>
                    </div>
                    <hr />
                    <div className="container">
                    <h6 className="text-info ">New Owner Details</h6>

                      <div className="row ">
                        <div className="col-md-6">
                          <div className=" row form-group   ">
                          
                            <div className="col-md-6">
                            <label
                              htmlFor="date"
                              className=" col-form-label"
                            >
                              Old Owner's Purchase Date
                            </label>
                              <input
                            type="text" className="form-control" id="txtOPDDate"
                            placeholder="Enter Old Purchase Date"
                              />
                            </div>

                          
                            <div className="col-md-6">
                            <label
                              htmlFor="date"
                              className="col-1-md-1 col-form-label"
                            >
                              New Owner's Purchase Date
                            </label>
                              <input
                                 type="text" className="form-control" id="txtNOPDate"
                                 placeholder="Enter New Purchase Date"
                              />   
                            
                            </div></div> </div>
                            <div className="col-md-6 mt-2 card p-2 ">
      <div className="form-group row ">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-md-6 d-flex justify-content-center align-items-start">
            <button type="submit" className="btn btn-sm btn-grd-info ">
              Copy
            </button>
          </div>
          <div className="col d-flex justify-content-center align-items-start">
            <button type="submit" className="btn btn-sm btn-grd-info">
              Paste
            </button>
          </div>
        </div>

        {/* Attach Document */}
        <div className="col-md-6 mt-2">
          <div className="form-group text-center">
            <div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={() => setAttachedFilesCount(attachedFilesCount + 1)}
              />
              <Link
                className="text-primary font-weight-bold mt-2"
                style={{
                  fontSize: '17px',
                  textDecoration: 'underline',
                }}
                onClick={handleAttachmentClick}
              >
                Attach Document
              </Link>
              { attachedFilesCount >= 0 && (
                <span className=" badge badge-danger col-md-4  mx-2">
                  {attachedFilesCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div></div></div>

                          {/* remark */}
                          <div className="container">

                          <div className="row ">

                          <div className="  ml-2 form-group row">
                            <label
                              htmlFor="remark"
                              className=" col-form-label"
                            >
                              *Remark
                            </label>
                            <div className="col-md-5">
                              <input
                                type="text"
                                id="remark"
                                className="form-control "
                              />
                            </div>
                            {/* order */}
                            <label
                              htmlFor="remark"
                              className=" col-form-label"
                            >
                              Order No.
                            </label>
                            <div className="col-md-2">
                              <input
                                type="text"
                                id="remark"
                                className="form-control "
                              />
                            </div>
                            <label
                              htmlFor="date"
                              className=" col-form-label"
                            >
                              Transfer Date
                            </label>
                            <div className="col-md-2">
                            <input
                                 type="text" className="form-control" id="txtTDate"
                                 placeholder="Enter TransferDate"
                              />   
                            </div>
                          </div>
                        
                    </div>
                  </div>
                  <div className="container">

                      <div className=" row text-center ">
                        <div className="col-md-1 mt-2">
                          <div className="form-group ">
                            <label className="mx-2">*Title</label>
                            <select
                              className=" bg-info text-white"
                              style={{
                                height: "35px",
                              }}
                            >
                              <option value="0">Other</option>
                              <option value="1">Mr.</option>
                              <option value="2">Mrs.</option>
                              <option value="3">Miss</option>
                              <option value="4">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4 mt-2">
                          <div className="form-group">
                            <label>*Full Name</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>

                        <div className="col-md-1 mt-2">
                          <div className="form-group">
                            <label className="mx-2">*शिर्षक</label>
                            <select
                              className="form-group bg-info text-white"
                              style={{
                                height: "35px",
                              }}
                            >
                              <option value="0">Other</option>
                              <option value="1">Mr.</option>
                              <option value="2">Mrs.</option>
                              <option value="3">Miss</option>
                              <option value="4">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4  mt-2">
                          <div className="form-group">
                            <label>*पूर्ण नाव </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-1 mt-2">
                          <div className="form-group">
                            <label className="mx-2">IsPrime</label>
                            <select
                              className="form-group bg-info text-white"
                              style={{
                                height: "35px",
                              }}
                            >
                              <option value="0">Yes</option>
                              <option value="1">No</option>
                            </select>
                          </div>
                        </div>
                      </div></div>

                      <div className="  d-flex justify-content-center align-items-center   ">
                        <div className="col-md-1 d-flex justify-content-center align-items-start ">
                          <button
                            type="submit"
                            className=" btn btn-sm  btn-grd-success waves-effect waves-light"
                          >
                            Add
                          </button>
                        </div>
                        <div className="align-items-start ">
                          <button
                            type="submit"
                            className=" btn btn-sm  btn-grd-success waves-effect waves-light"
                          >
                            Save
                          </button>
                        </div>
                        <div className="col-md-1 d-flex  align-items-start ">
                          <button
                            type="submit"
                            className=" btn btn-sm btn-grd-info waves-effect waves-light"
                            onClick={handleUpdateButtonClick}
                          >
                            Update
                          </button>
                        </div>

                        <div className="col-1-md-1 d-flex  align-items-start ">
                          <button
                            type="submit"
                            className="  btn btn-sm btn-grd-primary"
                          >
                            Process
                          </button>
                        </div>
                      </div>
                
                    <div className="form-group row mt-2">
                      <div class="dt-responsive table-responsive">
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
                                  <input type="checkbox" />
                                </label>
                              </td>
                              <td>श्री</td>
                              <td>देविदास सुदाम पुरी</td>
                              <td>Mr.</td>
                              <td>Devidas Shundas Puri</td>
                            </tr>
                          </tbody>
                        </table>
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
export default Mutation;
