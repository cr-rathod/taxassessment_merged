import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ReportEngine = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [billBookNo, setBillBookNo] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  //invoice
  const handleInvoiceNoChange = (event) => {
    setInvoiceNo(event.target.value);
  };
  //bill
  const handleBillBookNoChange = (event) => {
    setBillBookNo(event.target.value);
  };
  //chalan reciept
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("Selected Option:", event.target.value);
  };
  //ward
  const wardOptions = Array.from({ length: 100 }, (_, index) => index + 1);
  //date
  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };


//   propertyNo & partitional
const pOptions = Array.from({ length: 100 }, (_, index) => index + 1);

const propertyOptions = Array.from({ length: 100 }, (_, index) => index + 1);

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };
  //
  useEffect(() => {
    const isDateValid =
      fromDate && toDate && new Date(fromDate) < new Date(toDate);
    const isFieldsValid = !!billBookNo && !!invoiceNo;
    setIsFormValid(isDateValid && isFieldsValid);
  }, [billBookNo, invoiceNo, fromDate, toDate]);
  
  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Report Engine</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="row justify-content-center form-group">
                      <div className="col-md-4">
                        <h6>Select Report</h6>
                        <div className="row border p-3 form-group ml-3 mt-1 text-center">
                          <label className="col-form-label">
                            Select Report:
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control text-center"
                              name="sReport"
                              id="sReport"
                              value={selectedOption}
                              onChange={handleSelectChange}
                            >
                              <option>Counter Wise Collection</option>
                              <option>Receipt</option>
                              <option>Chalan</option>
                              <option>Transaction Report</option>
                            </select>
                          </div>
                        </div>

                       
                      </div>
                      {/*  */}
                      <div className="col-md-7 ml-2 mt-4 mb-2 ">
                        {/*  */}
                        
                        {selectedOption.toLowerCase() ===
                          "counter wise collection" && (
                          <div className="border-info p-3">
                            <div
                              className="form-group row "
                              style={{ maxWidth: "290", height: "300px" }}
                            ></div>

                            {/* border */}
                          </div>
                        )}
                        {/*  */}
                        {(selectedOption.toLowerCase() === "receipt" ||
                          selectedOption.toLowerCase() === "chalan") && (
                          <div className="border-info p-3">
                            {/* <div className="col-md-5"> */}
                            <div className="form-group row">
                              <label className="mt-2 col-md-3">Ward No:</label>
                              <div className="col-md-4">
                                <select
                                  className="form-control text-center"
                                  type="text"
                                >
                                  {wardOptions.map((wardNo) => (
                                    <option key={wardNo} value={wardNo}>
                                      {wardNo}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label className="mt-1 col-md-3">
                                Property No
                              </label>
                              <div className="col-md-4">
                                <select
                                  className="form-control text-center"
                                  type="text"
                                >
                                    {propertyOptions.map((propertyNo) => (
                                    <option key={propertyNo} value={propertyNo}>
                                      {propertyNo}
                                    </option>
                                  ))}
                                  </select>
                              </div>

                              <label className="mt-1 col-md-2">
                                Partition No:
                              </label>
                              <div className="col-md-3">
                              <select
                                  className="form-control text-center"
                                  type="text"
                                >
                                    {pOptions.map((propertyNo) => (
                                    <option key={propertyNo} value={propertyNo}>
                                      {propertyNo}
                                    </option>
                                  ))}
                                  </select>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label className="mt-1 col-md-3">
                                Owner Name:
                              </label>
                              <div className="col-md-9">
                                <input
                                  className="form-control text-center"
                                  type="text"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label className="mt-1 col-md-3">
                                Finacial Year:
                              </label>
                              <div className="col-md-4">
                                <select
                                  className="form-control text-center"
                                  type="text"
                                  value={0.0}
                                >
                                  <option>2022-2023</option>
                                  <option>2023-2024</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label className="mt-1 col-md-3">From Date</label>
                              <div className="col-md-4">
                                <input
                                  className="form-control text-center"
                                  type="date"
                                  value={fromDate}
                                  onChange={handleFromDateChange}
                                />
                              </div>

                              <label className="mt-1 col-md-2">To Date</label>
                              <div className="col-md-3">
                                <input
                                  className="form-control text-center"
                                  type="date"
                                  value={toDate}
                                  onChange={handleToDateChange}
                                />
                              </div>
                            </div>

                            <div class="row form-group ">
                              <label className="mt-1 col-md-3">
                                Bill Book No.
                              </label>
                              <div className="col-md-4">
                                <input
                                  className="form-control text-center"
                                  type="text"
                                  value={billBookNo}
                                  onChange={handleBillBookNoChange}
                                />
                              </div>

                              <label className="mt-1 ">Invoice No</label>
                              <div className="col-md-3">
                                <input
                                  className="form-control text-center"
                                  type="text"
                                  value={invoiceNo}
                                  onChange={handleInvoiceNoChange}
                                />
                              </div>
                            </div>

                            {/* border */}
                          </div>
                        )}
                        {/*  */}
                        {selectedOption.toLowerCase() ===
                          "transaction report" && (
                          <div className="border p-3">
                            <div className="form-group row">
                              <label className="mt-1 col-md-3">
                                Finacial Year:
                              </label>
                              <div className="col-md-4">
                                <select
                                  className="form-control text-center"
                                  type="text"
                                  value={0.0}
                                >
                                  <option>2022-2023</option>
                                  <option>2023-2024</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label className="mt-1 col-md-3">From Date</label>
                              <div className="col-md-4">
                                <input
                                  className="form-control text-center"
                                  type="date"
                                />
                              </div>

                              <label className="mt-1 col-md-2">To Date</label>
                              <div className="col-md-3">
                                <input
                                  className="form-control text-center"
                                  type="date"
                                />
                              </div>
                            </div>

                            {/* border */}
                          </div>
                        )}

                        <div className="row mt-3 justify-content-center">
                          <div className="col-md-3 col-sm-12 mb-2 ">
                            <button
                              type="submit"
                              className="btn btn-sm  font-weight-bold btn-grd-info  waves-effect waves-light w-100"
                              disabled={!isFormValid}
                            >
                              Show Report
                            </button>
                          </div>
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

export default ReportEngine;
