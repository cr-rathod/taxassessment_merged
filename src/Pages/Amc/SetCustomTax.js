import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SetCustomTax = () => {
  const [propertyNo, setPropertyNo] = useState("");
  // select property
  const [selectedItem, setSelectedItem] = useState(null);
  const [customTaxSuccess, setCustomTaxSuccess] = useState(false);
  const [savedData, setSavedData] = useState(null);
  const [password, setPassword] = useState("");

  const handleSaveExit = () => {
    const dataToSave = null;
    setSavedData(dataToSave);
  };

  const handleItemClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };
  //
  const handleSubmit = () => {
    setCustomTaxSuccess(true);
  };
  //
  const wardOptions = Array.from({ length: 100 }, (_, index) => index + 1);

  function toggleBalanceSheet() {
    var balanceSheet = document.getElementById("balanceSheet");
    balanceSheet.style.display =
      balanceSheet.style.display === "none" || balanceSheet.style.display === ""
        ? "block"
        : "none";
  }

  //process button
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState("");

  const navigate = useNavigate();

  const handleConfirmation = () => {
    setIsConfirmationOpen(true);
  };

  const handleYes = () => {
    setIsConfirmationOpen(false);
    setIsFormVisible(true);
  };

  const handleNo = () => {
    setIsConfirmationOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (password === "12345") {
      alert(`Processing password: ${password}`);
      navigate("/");
    } else {
      alert("Please enter a valid password.");
    }
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);

    setIsSubmitDisabled(enteredPassword === "12345");
  };

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Set Custom Taxes</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="row ml-2 form-group">
                      <div className="col-md-2 text-center ">
                        <label className="col-form-label">Finacial Year</label>
                        <select
                          className="form-control text-center"
                          name="fYear"
                          id="fYear"
                        >
                          <option>2022-2023</option>
                          <option>2023-2024</option> <option>2023-2024</option>
                        </select>
                      </div>
                      <div className="col-md-1 text-center ">
                        <label className="  col-form-label  ">WardNo.</label>
                        <select
                          className="form-control text-center"
                          name="tPropNo"
                          id="tPropNo"
                        >
                          {wardOptions.map((wardNo) => (
                            <option key={wardNo} value={wardNo}>
                              {wardNo}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className=" col-md-2 text-center">
                        <label className=" col-form-label ">Property No.</label>

                        <input
                          className="form-control text-center "
                          name="tPropNo"
                          id="tPropNo"
                          value={propertyNo}
                          onChange={(e) => setPropertyNo(e.target.value)}
                        />
                      </div>

                      <div className=" col-md-2 text-center ">
                        <label className="  col-form-label">
                          Partition No.
                        </label>

                        <input
                          className="form-control text-center "
                          name="tPartNo"
                          id="tPartNo"
                          value={"845"}
                        />
                      </div>
                      <div className=" col-md-4 text-center">
                        <label className="  col-form-label">Owner Name:</label>

                        <input
                          className="form-control text-center "
                          name="ownerN"
                          id="ownerN"
                          value={"देविदास सुदाम पुरी "}
                        />
                      </div>
                    </div>
                    {/*  */}
                    {propertyNo && (
                      <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                        <h6
                          className="text-info"
                          style={{ marginRight: "-90px", marginTop: "-55px" }}
                        >
                          PropertyNo
                        </h6>
                        <div
                          className="grid-box text-center"
                          style={{
                            border: "1px solid #000",
                            width: "70px",
                            marginLeft: "80px",
                            marginTop: "-30px",
                            maxHeight: "60px",
                            overflowY: "auto",
                            position: "absolute",
                            zIndex: "1",
                          }}
                        >
                          {[...Array(200)].map((_, index) => (
                            <div
                              key={index}
                              className={`grid-item ${
                                selectedItem === index ? "selected" : ""
                              }`}
                              onClick={() => handleItemClick(index)}
                            >
                              <div className="framed-box">{index + 1}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {/*  */}
                    <div className="row form-group">
                      <div className="col-md-8 ">
                        <div className="row form-group ml-3 mt-1 text-center">
                          <label className="  col-form-label">
                            Renter Name:
                          </label>
                          <div className=" col-md-4">
                            <input
                              className="form-control text-center "
                              name="tPropNo"
                              id="tPropNo"
                              value={"प्लेयिंग स्कूल  "}
                            />
                          </div>
                          <label className="  col-form-label">
                            Occupier Name:
                          </label>
                          <div className=" col-md-5">
                            <input
                              className="form-control text-center "
                              name="tPropNo"
                              id="tPropNo"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-2 border-info">
                        <h6 className="mt-2 mx-3 ">Tax Type:</h6>

                        <div className="row  ">
                          <div className="col-md-1 ml-2 mx-5  mt-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="currentCheckbox"
                              name="paymentType"
                            />
                            <label
                              className=" font-weight-bold"
                              htmlFor="currentCheckbox"
                            >
                              Current
                            </label>
                          </div>

                          <div className="col-md-1 mx-5 ml-2  mt-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="pendingCheckbox"
                              name="paymentType"
                            />
                            <label
                              className=" font-weight-bold"
                              htmlFor="pendingCheckbox"
                            >
                              Pending
                            </label>
                          </div>

                          <div className=" col-md-4">
                            <input
                              className="form-control text-center "
                              name="tPropNo"
                              id="tPropNo"
                              value={"8656  "}
                            />
                          </div>
                        </div>
                      </div>
                      {/*  */}

                      {/* md-6 */}
                    </div>
                    {/*  */}

                    <div className="row  card border  p-2">
                      <div className="ml-2 form-group row">
                      <label className="col-md-1">Property</label>

                        <div className="col-md-1 ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1">Education</label>

                        <div className="col-md-1 ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1">Sp.Edu</label>

                        <div className="col-md-1   ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1">Emp</label>

                        <div className="col-md-1  ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1">Tree</label>

                        <div className="col-md-1  ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1">Fire</label>

                        <div className="col-md-1  ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1 mt-1">Light</label>

                        <div className="col-md-1   mt-1 ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1  mt-1">Drain</label>

                        <div className="col-md-1  mt-1 ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                      {/* </div>
                      <div className="form-group ml-2 row"> */}
                <label className="col-md-1  mt-1">Road</label>

                        <div className="col-md-1  mt-1 ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1  mt-1">Sanitation</label>

                        <div className="col-md-1  mt-1  ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1  mt-1">W.Cess</label>

                        <div className="col-md-1  mt-1 ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1  mt-1">W.Ben</label>

                        <div className="col-md-1  mt-1 ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>

                        <label className="col-md-1  mt-1">W.Bill</label>

                        <div className="col-md-1  mt-1 ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1  mt-1">M.Bulid</label>

                        <div className="col-md-1  mt-1 ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1  mt-1">Sewage</label>

                        <div className="col-md-1  mt-1  ">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                        <label className="col-md-1  mt-1">Tax1</label>

                        <div className="col-md-1  mt-1">

                          <input
                            className="form-control text-center"
                            type="text"
                            value={0}
                          />
                        </div>
                      </div>{" "}
                    </div>

                    <div className="form-group ml-2 row">
                      <label className=" ml-2 mt-2">Interest:</label>
                      <div className="col-md-2">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={0}
                        />
                      </div>
                      
                      <div className="col-md-2 col-12 mt-2">
                        <input
                          className="form-check-input "
                          type="checkbox"
                          id="currentCheckbox"
                        />
                        <label
                          className="form-check-label font-weight-bold"
                          htmlFor="currentCheckbox"
                        >
                          With Runtime Interest
                        </label>
                      </div>
                      <label className="mt-2">Remark:</label>
                      <div className="col-md-5">
                        <input
                          className="form-control text-center "
                          type="text"
                          name="remark"
                          id="remark"
                        />
                      </div>
                      <span className="text-danger mt-2 ml-3">Total:8555</span>
                    </div>
                    {/*  */}
                    <div className="row mt-3 justify-content-center">
                      <div className="col-md-2 col-sm-12 mb-2">
                        <button
                          type="button"
                          className="btn   btn-grd-success  waves-effect waves-light w-100 "
                          data-toggle="modal"
                          data-target="#default-Modal"
                          onClick={handleSubmit}
                        >
                          Save/Exit
                        </button>
                        {/* <button type="button" class="btn btn-default waves-effect" data-toggle="modal" data-target="#default-Modal">Save/Exit</button> */}
                        <div
                          class="modal fade"
                          id="default-Modal"
                          tabindex="-1"
                          role="dialog"
                        >
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
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
                                <h5 className="text-danger">
                                  Custom tax Applied
                                </h5>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-default waves-effect "
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-12 mb-2">
                        {/* <button
          type="button"
          className="btn btn-sm  font-weight-bold btn-grd-success  alert-prompt  waves-effect waves-light w-100"
          onClick={handleConfirmation}
        >
          Proceed Changes To Final
        </button> */}
                        <button
                          type="button"
                          class="btn  btn-grd-success waves-effect  w-100"
                          data-toggle="modal"
                          data-target="#large-Modal"
                        >
                          {" "}
                          Proceed Changes To Final
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
                                  onChange={handlePasswordChange}
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
                      </div>

                      <div className="col-md-2 col-sm-12 mb-2">
                        <button
                          type="submit"
                          className="btn  btn-grd-inverse waves-effect waves-light w-100"
                        >
                          Cancel
                        </button>
                      </div>

                      {/* {isConfirmationOpen && (
  <div className="confirmation-dialog">
    <div className=" row justify-content-center">

      <div className="col-md-10  col-sm-12 border border-info p-2 " style={{ maxWidth: "320px",}}>
      <h6 className="text-center text-primary font-weight-bold">Customize Tax</h6>

        <label className="col-md-11 text-center col-sm-12">
          Do you want to proceed with the changes?
        </label>

        <div className="col-sm-12 mt-2 text-center">
          <button
            className="btn btn-sm mx-2 justify-content-center"
            onClick={handleYes}
          >
            Yes
          </button>
          <button className="btn btn-sm" onClick={handleNo}>
            No
          </button>
        </div>
      </div>
    </div>
  </div>
)}


{isFormVisible && (
  <div className="col-md-6 col-sm-12" style={{ marginTop: "-42px", marginLeft: "-9px" }}>
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3 row justify-content-center">
        <div className="col-md-3 col-sm-12 border border-info p-1">
          <h6 className="text-primary font-weight-bold text-center">L4 Level</h6>
          {/* <label className="col-form-label mb-2 text-center">
            Enter the Password
          </label>
          <input type="text" className="form-control mb-2" 
                onChange={handlePasswordChange}
                />
          <div className="row justify-content-center mt-2 ">
            <div className="col-6 col-md-5 mb-2">
              <button type="submit" className={`btn btn-grd-primary btn-sm w-10 ${isSubmitDisabled ? 'disabled' : ''}`}
                    disabled={isSubmitDisabled}>
                Submit
              </button>
            </div>
            <div className="col-3 col-md-6 mb-2">
              <button type="submit" className="btn btn-grd-inverse btn-sm w-10 ">
                Cancel
              </button>
            </div>
          </div> */}

                      {/* </div>
      </div>
    </form>
  </div>
)} */}

                      {/* {customTaxSuccess && (
                        <div className="text-danger text-center mt-2">
                          <h6>Custom tax Applied</h6>
                        </div>
                      )} */}
                    </div>
                    {/*  */}

                    {/*  */}
                  </form>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default SetCustomTax;
