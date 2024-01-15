import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const FromTranField = () => {
  // edit
  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveChanges = () => {
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };
  //delete
  const handleDeleteClick = () => {
    window.alert("Record deleted successfully");
  };

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>From AMC Transction </h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="row  ml-2 ">
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
                    <hr className="border-info"></hr>
                    {/* 2nd row */}
                    <div className="row ml-2 ">
                      {/*  */}
                      <div className="col-md-5">
                        <div className="form-group row">
                          <label className="mt-2 col-md-3">Payment Mode:</label>
                          <div className="col-md-9">
                            <select
                              className="form-control text-center"
                              type="text"
                            >
                              <option>Cash</option>
                              <option>Cheque</option>
                              <option>DD</option>
                              <option>Online</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="mt-1 col-md-3">PaymentType</label>
                          <div className="col-md-4">
                            <input
                              className="form-control text-center"
                              type="text"
                              value={"Current-Pending"}
                            />
                          </div>

                          <label className="mt-1 col-md-2">Amount:</label>
                          <div className="col-md-3">
                            <input
                              className="form-control text-center"
                              type="text"
                              value={"2615.0"}
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="mt-1 col-md-3">BillBookNo:</label>
                          <div className="col-md-4">
                            <input
                              className="form-control text-center"
                              type="text"
                              value={0.0}
                            />
                          </div>

                          <label className="mt-1 col-md-2">
                            Invoice
                            <br />
                            No
                          </label>
                          <div className="col-md-3">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="mt-1 col-md-3">
                            Transaction Date:
                          </label>
                          <div className="col-md-4">
                            <input
                              className="form-control text-center"
                              type="text"
                            id="txtTDate"
                            placeholder="Enter  Transaction Date "
                            />
                          </div>

                          <label className="mt-1 col-md-2">RecieveBy</label>
                          <div className="col-md-3">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="mt-1 col-md-3">
                            Assessment
                            <br />
                            No
                          </label>
                          <div className="col-md-4">
                            <input
                              className="form-control text-center"
                              type="text"
                              value={0.0}
                            />
                          </div>

                          <label className="mt-1 col-md-2">BillNo</label>
                          <div className="col-md-3">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>

                        <h6 className="text-info">Cheque/DD Details</h6>

                        <div class="row form-group ">
                          <label className="mt-1 col-md-3">DD No.</label>
                          <div className="col-md-4">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>

                          <label className="mt-1 ">Date</label>
                          <div className="col-md-3">
                            <input
                              className="form-control text-center"
                              type="text"
                              id="txtDate"
                              placeholder="Enter Date"
                            />
                          </div>
                        </div>

                        <div class="row form-group ">
                          <label className="mt-1  col-md-3">Payment Name</label>
                          <div className="col-md-8">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>

                        <div class="row form-group ">
                          <label className="mt-1  col-md-3">Bank Name</label>
                          <div className="col-md-8">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>

                        <div class="row form-group ">
                          <label className="mt-1  col-md-3">Branch Name</label>
                          <div className="col-md-8">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>

                        <div class="row form-group ">
                          <label className="mt-1  col-md-3">Bank IFSC No</label>
                          <div className="col-md-8">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>

                        <div class="row form-group ">
                          <label className="mt-1 col-md-3">Amount</label>
                          <div className="col-md-4 ">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                          <label className="col-1-md-1">
                            Cheque/DD
                            <br />
                            ExpireDate
                          </label>

                          <div className=" mt-1 col-md-3  ">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>

                        <h6 className="text-info">Online payment Details</h6>
                        <div class="row form-group ">
                          <label className="mt-1  col-md-3">
                            Tranaction Id:
                          </label>
                          <div className="col-md-8">
                            <input
                              className="form-control text-center"
                              type="text"
                            />
                          </div>
                        </div>

                        <div className="row mt-3">
                          <div className="col-md-3 col-sm-12 mb-2">
                            <button
                              type="submit"
                              className="btn btn-sm  btn-grd-primary w-100"
                            >
                              First
                            </button>
                          </div>
                          <div className="col-md-3 col-sm-12 mb-2">
                            <button
                              type="submit"
                              className="btn btn-sm  btn-grd-primary w-100"
                            >
                              Previous
                            </button>
                          </div>
                          <div className="col-md-3 col-sm-12 mb-2">
                            <button
                              type="submit"
                              className="btn btn-sm  btn-grd-primary w-100"
                            >
                              Next
                            </button>
                          </div>
                          <div className="col-md-3 col-sm-12 mb-2">
                            <button
                              type="submit"
                              className="btn btn-sm btn-grd-primary w-100"
                            >
                              Last
                            </button>
                          </div>
                        </div>
                      </div>

                      {/*  */}
                      <div className="col-md-7  border">
                        <div
                          class="mb-4 mt-2 form-group dt-responsive table-responsive "
                          style={{
                            maxHeight: "706px",
                            overflowY: "auto",
                          }}
                        >
                          <table class="table table-striped table-bordered nowrap">
                            <thead>
                              <tr className="text-center">
                                {/* <tr style={{ textAlign: "center" }}> */}
                                <td  className="font-weight-bold">TypeOfTaxes</td>
                                <td  className="font-weight-bold">Current</td>
                                <td  className="font-weight-bold">Pending</td>
                              </tr>
                            </thead>

                            <tr className="text-center">
                              <td>Property Tax</td>
                              <td>399</td>
                              <td>1995</td>
                            </tr>

                            <tr className="text-center">
                              <td>Edcation Tax</td>
                              <td>74</td>
                              <td>354</td>
                            </tr>
                            <tr className="text-center">
                              <td>Employement Tax</td>
                              <td>0</td>
                              <td>66</td>
                            </tr>
                            <tr className="text-center">
                              <td>Tree Cess</td>
                              <td>17</td>
                              <td>85</td>
                            </tr>
                            <tr className="text-center">
                              <td>Spe.WaterCess</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>Sanitation</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>Property Tax</td>
                              <td>399</td>
                              <td>1995</td>
                            </tr>
                            <tr className="text-center">
                              <td>Drain Tax</td>
                              <td>180</td>
                              <td>75</td>
                            </tr>
                            <tr className="text-center">
                              <td>Road Tax</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>Fire Tax</td>
                              <td>8</td>
                              <td>40</td>
                            </tr>
                            <tr className="text-center">
                              <td>LightCess</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>Water Benfits</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>MajorBuildingTax</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>Sewage Disposal Cess</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>Spe.Education Tax</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>Water Bill</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>Tax1</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>TaxTotal</td>
                              <td>678</td>
                              <td>2615</td>
                            </tr>

                            <tr className="text-center">
                              <td>Interest</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>Discount</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>Notice Fee</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>Miscelianeouse Fee</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr className="text-center">
                              <td>Net Total</td>
                              <td>678</td>
                              <td>2615</td>
                            </tr>
                            <tr className="text-center">
                              <td>PaymentMode</td>
                              <td>Cash</td>
                              <td>Cash</td>
                            </tr>
                          </table>
                        </div>
                        <div className="row justify-content-center mt-3">
                          <div className="col-md-2 col-sm-12 mb-2">
                            <button
                              type="button"
                              className="btn btn-sm  btn-grd-info w-100 typcn typcn-edit"
                              onClick={handleEditClick}
                            >
                              EDIT
                            </button>
                          </div>
                          <div className="col-md-2 col-sm-12 mb-2">
                            <button
                              type="submit"
                              className="btn btn-sm btn-grd-primary w-100"
                            >
                              PRINT
                            </button>
                          </div>
                          <div className="col-md-2 col-sm-12 mb-2">
                            <Link to="/fromViewtransTax">
                              <button
                                type="submit"
                                className="btn btn-sm  btn-grd-primary w-100"
                              >
                                CLOSE
                              </button>
                            </Link>
                          </div>
                          <div className="col-md-2 col-sm-12 mb-2">
                            <button
                              type="submit"
                              className="btn btn-sm  btn-grd-danger w-100"
                              onClick={handleDeleteClick}
                            >
                              DELECT
                            </button>
                          </div>
                        </div>

                        {/* Edit overlay */}
                        {isEditing && (
                          <div className="col-12  bg-info col-md-6 d-flex flex-column align-items-center">
                            <h6 className="text-info">Edit Mode</h6>
                            <div className="grid-box text-center  ">
                              <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">
                                  Bill Book No
                                </label>
                                <div className="col-sm-5">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>

                              <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">
                                  InvoiceNo
                                </label>
                                <div className="col-sm-5">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="mb-3 row">
                                <label className="col-sm-4 ">
                                  payment
                                  <br />
                                  Mode
                                </label>
                                <div className="col-sm-5">
                                  <select type="text" className="form-control">
                                    <option>Cash</option>
                                    <option>DD</option>
                                    <option>Cheque</option>
                                    <option>Online</option>
                                  </select>
                                </div>
                              </div>

                              {/* Buttons for Save Changes and Cancel */}
                              <button
                                className="btn btn-primary btn-sm mb-2"
                                onClick={handleSaveChanges}
                              >
                                Save
                              </button>
                              <button
                                className="btn btn-secondary btn-sm mb-2 mx-1 "
                                onClick={handleCancel}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                      {/*  */}
                      {/*  */}
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
export default FromTranField;
