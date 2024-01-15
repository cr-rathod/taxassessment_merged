import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FromViewTransTaxPayment = () => {
  const handleDoubleClick = () => {
    window.location.href = "/tranFieldP";
  };

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>From View Transction </h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="row ml-2 ">
                      <div className="col-md-5">
                        <div className="row form-group">
                          <label className="col-md-3/4 mx-2">Account Id:</label>
                          <div className="col-md-6 col-12  ">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="row form-group ">
                          <label className="col-md-3/4 mx-1">
                            FinacialYear:
                          </label>
                          <div className="col-md-6 col-12  ">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="row  ">
                          <label className="col-md-3/">AssementNo:</label>
                          <div className="col-md-8 col-12  ">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      {/*  */}
                      <div className="col-md-3">
                        <div className="row form-group ">
                          <label>*Ward No:</label>
                          <div className="col-md-5 col-12  ">
                            <input
                              className="form-control text-center ml-3"
                              type="text"
                              value="1"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <label>*PropertyNo:</label>
                          <div className="col-md-5 col-12  ">
                            <input
                              className="form-control text-center"
                              type="text"
                              value="1"
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <label>*PartitionNo:</label>
                          <div className="col-md-5 col-12  ">
                            <input
                              className="form-control text-center"
                              type="text"
                              value="1"
                            />
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      <div className="col-md-4">
                        <div className="row form-group ">
                          <label className="mt-3">Owner Name:</label>
                          <div className="col-md-7 p-2 col-12  ">
                            <input
                              className="form-control text-center ml-3"
                              type="text"
                              value={"देविदास सुदान पुरी "}
                            />
                          </div>
                        </div>

                        <div className="row form-group ">
                          <label className="mt-3">Renter Name:</label>
                          <div className="col-md-7 p-2 col-12  ">
                            <input
                              className="form-control text-center ml-3"
                              type="text"
                              value={"दिनेश घोडके "}
                            />
                          </div>
                        </div>
                      </div>

                      {/*  */}
                    </div>

                    {/* 2nd */}

                    {/*  */}

                    <div className=" ml-3 form-group  row  text-center">
                      <label className="  col-form-label">Finance Year:</label>
                      <div className="col-md-2 ">
                        <select
                          className="form-control text-center "
                          name="fYear"
                          id="fYear"
                        >
                          <option>2021-2022</option>
                          <option>2022-2023</option>
                          <option>2023-2024</option>
                        </select>
                      </div>

                      <span className="col-md-2 col-12 mt-2">
                        Payment Type:
                      </span>

                      <div className="col-md-1 col-6 mt-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="currentCheckbox"
                        />
                        <label
                          className="form-check-label font-weight-bold"
                          htmlFor="currentCheckbox"
                        >
                          *Current
                        </label>
                      </div>

                      <div className="col-md-1 col-6 mt-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="pendingCheckbox"
                        />
                        <label
                          className="form-check-label font-weight-bold"
                          htmlFor="pendingCheckbox"
                        >
                          Pending
                        </label>
                      </div>

                      <div className="col-md-1 col-6 mt-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="allCheckbox"
                        />
                        <label
                          className="form-check-label font-weight-bold"
                          htmlFor="allCheckbox"
                        >
                          All
                        </label>
                      </div>

                      <div className="col-md-1 col-6 mt-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="advanceCheckbox"
                        />
                        <label
                          className="form-check-label font-weight-bold"
                          htmlFor="advanceCheckbox"
                        >
                          Advance
                        </label>
                      </div>

                      {/* md-6 */}

                      {/*  */}
                    </div>

                    {/* table */}
                    <div
                      class="mb-4 form-group dt-responsive table-responsive "
                      style={{
                        maxHeight: "300px",
                        overflowY: "auto",
                      }}
                    >
                      <table class="table table-striped table-bordered nowrap ">
                        <thead>
                          <tr
                            className="text-center"
                            onDoubleClick={handleDoubleClick}
                          >
                            <td className="font-weight-bold">Action</td>
                            <td className="font-weight-bold">Year</td>
                            <td className="font-weight-bold">PayType</td>
                            <td className="font-weight-bold">BillBookNo.</td>
                            <td className="font-weight-bold">InvoiceNo.</td>
                            <td className="font-weight-bold">TransactionDate</td>
                            <td className="font-weight-bold">Property</td>
                            <td className="font-weight-bold">Education</td>
                            <td className="font-weight-bold">Employement</td>
                            <td className="font-weight-bold">Tree</td>
                            <td className="font-weight-bold">WaterCess</td>
                            <td className="font-weight-bold">Sanitation</td>
                            <td className="font-weight-bold">Drain</td>
                            <td className="font-weight-bold">Road</td>
                            <td className="font-weight-bold" >Fire</td>
                            <td className="font-weight-bold">Light</td>
                            <td className="font-weight-bold">WaterBenfits</td>
                            <td className="font-weight-bold" >MajorBuilding</td>
                            <td className="font-weight-bold">Sewage</td>
                            <td className="font-weight-bold">Spe.Edu</td>
                            <td className="font-weight-bold">WaterBill</td>
                            <td className="font-weight-bold" >Tax1</td>
                            <td className="font-weight-bold">TotalTax</td>
                            <td className="font-weight-bold">Interest</td>
                            <td className="font-weight-bold">Tax5</td>
                            <td className="font-weight-bold">MiseFee</td>
                            <td className="font-weight-bold">NoticeFee</td>
                            <td className="font-weight-bold">Discount</td>
                            <td className="font-weight-bold">Discount2</td>
                            <td className="font-weight-bold">Total</td>
                            <td className="font-weight-bold">PayeeName</td>
                            <td className="font-weight-bold" >PayMode</td>
                            <td className="font-weight-bold">DD/ChequeNo.</td>
                            <td className="font-weight-bold">DD/ChequeDate</td>
                            <td className="font-weight-bold">ExpireDate</td>
                            <td className="font-weight-bold">BankName</td>
                            <td className="font-weight-bold">BranchName</td>
                            <td className="font-weight-bold">IFSC No</td>
                            <td className="font-weight-bold">Amount</td>
                            <td className="font-weight-bold">BillNo.</td>
                            <td className="font-weight-bold">BillDate</td>
                          </tr>
                          {/* </tr> */}
                          {/* <tr> */}
                        </thead>

                        <tr className="text-center">
                          <td>
                            <input type="checkbox" checked />
                          </td>
                          <td>2022-2023</td>
                          <td>Current</td>
                          <td>10</td>
                          <td>25</td>
                          <td>06-oct-2022</td>
                          <td>399</td>
                          <td>74</td>
                          <td>0</td>
                          <td>0</td>
                          <td>17</td>
                          <td>0</td>
                          <td>0</td>
                          <td>180</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>674</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>678</td>
                          <td></td>
                          <td></td>
                          <td>Cash</td>
                          <td></td>
                          <td>04-Dec-2023</td>
                          <td>04-Dec-2023</td>
                          <td></td>
                          <td>0</td>
                          <td>0</td>
                          <td>04-Dec-2023</td>
                        </tr>

                        <tr className="text-center">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>2022-2023</td>
                          <td>Pending</td>
                          <td>10</td>
                          <td>25</td>
                          <td>06-oct-2022</td>
                          <td>399</td>
                          <td>74</td>
                          <td>0</td>
                          <td>0</td>
                          <td>17</td>
                          <td>0</td>
                          <td>0</td>
                          <td>180</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>674</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>678</td>
                          <td></td>
                          <td></td>
                          <td>Cash</td>
                          <td></td>
                          <td>04-Dec-2023</td>
                          <td>04-Dec-2023</td>
                          <td></td>
                          <td>0</td>
                          <td>0</td>
                          <td>04-Dec-2023</td>
                        </tr>

                        <tr className="text-center">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>2023-2024</td>
                          <td>Current</td>
                          <td>10</td>
                          <td>25</td>
                          <td>06-oct-2022</td>
                          <td>399</td>
                          <td>74</td>
                          <td>0</td>
                          <td>0</td>
                          <td>17</td>
                          <td>0</td>
                          <td>0</td>
                          <td>180</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>674</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>678</td>
                          <td></td>
                          <td></td>
                          <td>Cash</td>
                          <td></td>
                          <td>04-Dec-2023</td>
                          <td>04-Dec-2023</td>
                          <td></td>
                          <td>0</td>
                          <td>0</td>
                          <td>04-Dec-2023</td>
                        </tr>

                        <tr className="text-center">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>2023-2024</td>
                          <td>Pending</td>
                          <td>10</td>
                          <td>25</td>
                          <td>06-oct-2023</td>
                          <td>399</td>
                          <td>74</td>
                          <td>0</td>
                          <td>0</td>
                          <td>17</td>
                          <td>0</td>
                          <td>0</td>
                          <td>180</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>674</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>678</td>
                          <td></td>
                          <td></td>
                          <td>Cash</td>
                          <td></td>
                          <td>04-Dec-2023</td>
                          <td>04-Dec-2023</td>
                          <td></td>
                          <td>0</td>
                          <td>0</td>
                          <td>04-Dec-2023</td>
                        </tr>
                      </table>
                    </div>

                    {/* button */}
                    <div className="d-flex justify-content-center">
                      <Link to="/taxP">
                        <button className="btn btn-sm  btn-inverse waves-effect waves-light"  style={{ fontSize: '12px'}}>
                          Close
                        </button>
                      </Link>
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
export default FromViewTransTaxPayment;
