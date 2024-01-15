import React, { useState, useEffect,useRef } from "react";
import { Link } from "react-router-dom";

const TaxPayment = () => {
  const wardOptions = Array.from({ length: 100 }, (_, index) => index + 1);
  const [attachedFilesCount, setAttachedFilesCount] = useState(0);

  function toggleBalanceSheet() {
    var balanceSheet = document.getElementById("balanceSheet");
    balanceSheet.style.display =
      balanceSheet.style.display === "none" || balanceSheet.style.display === ""
        ? "block"
        : "none";
  }

  //dd
  const [paymentMode, setPaymentMode] = useState("");

  const handlePaymentModeChange = (event) => {
    setPaymentMode(event.target.value);
  };
  //attached
  const fileInputRef = useRef(null);

  const handleAttachmentClick = () => {
    fileInputRef.current.click();
    setAttachedFilesCount(attachedFilesCount + 1);
  };


  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Tax Payment</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="row">
                      <div className="col-md-10">
                        <div className="   row ml-1 text-center">
                          <div className="col-md-2  ">
                            <label className="col-form-label">
                              Finacial Year
                            </label>
                            <select
                              className="form-control text-center"
                              name="fYear"
                              id="fYear"
                            >
                              <option>2022-2023</option>
                              <option>2023-2024</option>{" "}
                              <option>2023-2024</option>
                            </select>
                          </div>
                          <div className="col-md-2 ">
                            <label className="  col-form-label  ">
                              WardNo.
                            </label>
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
                          <div className="col-md-2  ">
                            <label className="  col-form-label">Property</label>
                            <input
                              className="form-control text-center"
                              name="tPropNo"
                              id="tPropNo"
                              value={"745"}
                            ></input>
                          </div>
                          <div className=" col-md-2">
                            <label className=" col-form-label ">
                              Partition
                            </label>

                            <input
                              className="form-control text-center "
                              name="tPropNo"
                              id="tPropNo"
                            />
                          </div>
                          <div className=" col-md-1 ">
                            <label className=" col-form-label">OldWard</label>

                            <input
                              className="form-control text-center "
                              name="tPropNo"
                              id="tPropNo"
                              value={"27"}
                            />
                          </div>
                          <div className=" col-md-1 ">
                            <label className="  col-form-label">
                              OldPropNo
                            </label>

                            <input
                              className="form-control text-center "
                              name="tPropNo"
                              id="tPropNo"
                              value={"845"}
                            />
                          </div>
                          <div className=" col-md-1">
                            <label className="  col-form-label">
                              OldPartNo
                            </label>

                            <input
                              className="form-control text-center "
                              name="tPropNo"
                              id="tPropNo"
                            />
                          </div>{" "}
                        </div>
                        <div className="row form-group ml-1 mt-1 text-center">
                          <div className=" col-md-4 ">
                            <label className="  col-form-label">
                              Owner Name:
                            </label>

                            <input
                              className="form-control text-center "
                              name="tPropNo"
                              id="tPropNo"
                              value={"देविदास सुदाम पुरी "}
                            />
                          </div>

                          <div className=" col-md-4">
                            <label className="  col-form-label">
                              Renter Name:
                            </label>

                            <input
                              className="form-control text-center "
                              name="tPropNo"
                              id="tPropNo"
                              value={"दिनेश घोडके "}
                            />
                          </div>

                          <div className=" col-md-4">
                            <label className="  col-form-label">
                              Occupier Name:
                            </label>

                            <input
                              className="form-control text-center "
                              name="tPropNo"
                              id="tPropNo"
                            />
                          </div>
                        </div>

                        {/* md-6 */}
                      </div>

                      {/* 2nd part */}
                      <div className="col-md-2 mt-2 border border-info">
                        <div className="form-group row">
                          <label className="text-center font-weight-bold">
                            Assessment No:
                          </label>
                          <div className="col-1-md-1">
                            <input
                              className="form-control"
                              name="AssN"
                              type="text"
                              id="AssN"
                            />
                            <input
                              className="form-control mt-2"
                              name="AssN"
                              type="text"
                              id="AssN"
                            />
                          </div>
                        </div>
                      </div>
                      {/* row */}
                    </div>
                    <hr className="border-info"></hr>
                    {/* heading */}
                    <h6 className="ml-2 text-info font-weight-bold">
                      Tax Details:
                    </h6>

                    <div className="row ml-1">
                      <div className="col-md-9 ">
                        <div className="   row  text-center">
                          <div className="col-md-3  ">
                            <label className="  col-form-label">
                              *Bill Book No
                            </label>
                            <input
                              className="form-control text-center"
                              name="billN"
                              id="billN"
                            ></input>
                          </div>
                          <div className=" col-md-3">
                            <label className=" col-form-label ">
                              *Invoice No
                            </label>

                            <input
                              className="form-control text-center "
                              name="invoiceNo"
                              id="invoiceNo"
                            />
                          </div>
                          <div className=" col-md-2 ">
                            <label className=" col-form-label">
                              Transaction Date
                            </label>

                            <input
                              className="form-control text-center "
                              name="tDate"
                              id="txtDate"
                              type="text"
                              placeholder="Enter Transaction Date"
                            />
                          </div>

                          <div className=" col-1-md-1 mx-2  mt-5">
                            <input
                              className="form-control text-center mt-1 "
                              name="fPenT"
                              id="fPenT"
                              type="checkbox"
                            />
                          </div>
                          <label className=" mx-2  mt-5 font-weight-bold ">
                            Fill Pending Tax
                          </label>

                          <div className=" col-1-md-1 mx-2  mt-5">
                            <input
                              className="form-control text-center mt-1 "
                              name="fCurT"
                              id="fCurT"
                              type="checkbox"
                            />
                          </div>
                          <label className=" mx-2  mt-5 font-weight-bold ">
                            Fill Current Tax
                          </label>

                          {/* md-6 */}
                        </div>{" "}
                      </div>

                      {/*  */}
                      <div className="col-md-3 text-center">
                        <div className="row form-group text-center">
                          <label className="col-form-label  text-center">
                            Tax Inspector Name:
                          </label>
                          <div className="col-md-4  col-12 justify-content-center mt-2">
                            <input
                              className="form-control text-center"
                              name="tInc"
                              id="tInc"
                              value={"1729"}
                            ></input>
                          </div>
                          <div className="col-1-md-1 col-9 justify-content-center mt-2">
                            <input
                              className="form-control text-center"
                              name="tInc"
                              id="tInc"
                              value={"Manoj Harde"}
                            ></input>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                    {/*  */}
                    <div className="row border-primary card p-2">
                      <div className="form-group row">
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
                    <hr className="border-info"></hr>
                    <div className="row  card border-primary p-2">
                      <div className=" form-group row">
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
                    {/*  */}
                    <div className="row form-group">
                      <h6 className="text-info col-md-3 col-12 text-md-start text-center font-weight-bold">
                        Prev Pend Int=0 Pend Int=0 Curr Int=0
                      </h6>
                      <h6 className="text-info col-md-6 col-12 text-md-center text-center font-weight-bold">
                        Advance Paid:0
                      </h6>
                      <h6 className="text-info col-md-3 col-12 text-md-end text-center font-weight-bold ">
                        Total Paid:0
                      </h6>
                      <label className="ml-2">Interest:</label>

                      <div className="col-md-1 col-12">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={0}
                        />
                      </div>
                      <label className="ml-2">Interest2:</label>

                      <div className="col-md-1 col-12">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={"0.00"}
                        />
                      </div>
                      <label className="ml-2">Extra Charges:</label>

                      <div className="col-md-1 col-12">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={0}
                        />
                      </div>
                      <label className="ml-2">NoticeFee:</label>

                      <div className="col-md-1 col-12">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={0}
                        />
                      </div>
                      <label className="ml-2">Discount:</label>

                      <div className="col-md-1 col-12">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={0}
                        />
                      </div>
                      <label className="ml-2">Total Tax:</label>

                      <div className="col-md-1">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={0}
                        />
                      </div>
                      <label className="ml-2">Net Total:</label>

                      <div className="col-md-1 col-12">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={"533"}
                        />
                      </div>
                    </div>
                    <hr className="border-info"></hr>

                    {/* table */}
                    <h6 className="text-primary  ml-2 ">Balance Sheet:</h6>

                    <div className="row form-group">
                      <h6 className="text-danger col-md-4 col-12 text-md-start text-center font-weight-bold">
                        {" "}
                        Current Pending:
                      </h6>
                      <h6 className="text-danger col-md-5 col-12 text-md-center text-center font-weight-bold">
                        Custom Current
                      </h6>
                      <Link
                        className="text-danger col-md-3 col-12 text-md-end text-center"
                        onClick={toggleBalanceSheet}
                      >
                        --Show Balance Sheet(Bar Chart)--
                      </Link>

                      <div class="dt-responsive table-responsive">
                        <table class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <t></t>
                              <th>Property</th>
                              <th>Edu</th>
                              <th>SpEdu.</th>
                              <th>Emp</th>
                              <th>Tree</th>
                              <th>Fire</th>
                              <th>Light</th>
                              <th>Drain</th>
                              <th>Road</th>
                              <th>Sanitation</th>
                              <th>W.Cess</th>
                              <th>W.benfit</th>
                              <th>W.Bill</th>
                              <th>M.Build</th>
                              <th>Sewage</th>
                              <th>Tax1</th>
                              <th>Tax2</th>
                              <th>Interest</th>
                              <th>Total Tax:</th>
                            </tr>
                          </thead>
                          <tr className="text-center ">
                            <t className="font-weight-bold mx-2  ">C </t>
                            <td>10309</td>
                            <td>5727</td>
                            <td>0</td>
                            <td>1432</td>
                            <td>430</td>
                            <td>215</td>
                            <td>0</td>
                            <td>30</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0.00</td>
                            <td>0</td>
                            <td>18143</td>
                          </tr>

                          <tr className="text-center ">
                            <t className="font-weight-bold  mx-2">P</t>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0.00</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>

                          <tr className="text-center ">
                            <t className="font-weight-bold mx-2  ">TT </t>
                            <td>10309</td>
                            <td>5727</td>
                            <td>0</td>
                            <td>1432</td>
                            <td>430</td>
                            <td>215</td>
                            <td>0</td>
                            <td>30</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0.00</td>
                            <td>0</td>
                            <td>18143</td>
                          </tr>

                          <tr className="text-center ">
                            <t className="font-weight-bold  mx-2">TP</t>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0.00</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>

                          <tr className="text-center ">
                            <t className="font-weight-bold mx-2  ">PN </t>
                            <td>10309</td>
                            <td>5727</td>
                            <td>0</td>
                            <td>1432</td>
                            <td>430</td>
                            <td>215</td>
                            <td>0</td>
                            <td>30</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0.00</td>
                            <td>0</td>
                            <td>18143</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    {/*Payment Details */}
                    <h6 className="text-info">Payment Details</h6>

                    <div className="form-group ml-2 row">
                      <label className="mt-1">Payment Mode:</label>
                      <div className="col-md-2 ">
                        <select
                          className="form-control text-center"
                          type="text"
                          onChange={handlePaymentModeChange}
                          value={paymentMode}
                        >
                          <option>Cash</option>
                          <option>Cheque</option>
                          <option>DD</option>
                          <option>Online</option>
                        </select>
                      </div>

                      <label className="mt-1">Bill No:</label>
                      <div className="col-md-1  ">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={0.0}
                        />
                      </div>

                      <label className="mt-1">*Bill Date:</label>
                      <div className="col-md-2  ">
                        <input
                          className="form-control text-center"
                          type="text"
                          id="txtBillDate"
                          placeholder="Enter Bill Date"
                        />
                      </div>

                      <label className="mt-1">Remark:</label>
                      <div className="col-md-2 ml-md-2 ">
                        <input
                          className="form-control text-center"
                          type="text"
                        />
                      </div>
                      <div>
                        <Link to="/fromViewtransTax">
                          <button className="btn btn-sm  btn-grd-primary waves-effect waves-light"  style={{ fontSize: '12px'}}>
                            View Transaction
                          </button>
                        </Link>
                        <button className=" mx-2 btn btn-sm btn-grd-inverse waves-effect waves-light "  style={{ fontSize: '12px'}}>
                          CancelReceipt
                        </button>
                      </div>

                      {/*  */}
                    </div>

                    {/*Payment DD */}

                    <div class="row form-group ml-2">
                      {["DD", "Cheque"].includes(paymentMode) && (
                        <>
                          <div className="col-md-8 justify-content-center">
                            <h6 className="text-info">DD/Cheque Details</h6>

                            <div className=" row  align-items-center">
                              <label className="mt-1">DD/Cheque No.</label>
                              <div className="col-md-2">
                                <input
                                  className="form-control text-center"
                                  type="text"
                                />
                              </div>

                              <label className="mt-1">*Name</label>
                              <div className="col-md-4">
                                <input
                                  className="form-control text-center"
                                  type="text"
                                />
                              </div>

                              <label className="mt-1">
                                Bank
                                <br />
                                IFSC No.
                              </label>
                              <div className="col-md-2">
                                <input
                                  className="form-control text-center"
                                  type="text"
                                />
                              </div>
                            </div>

                            <div className="  row justify-content-center  align-items-center">
                              <label
                                className="mt-1 "
                                style={{ marginLeft: "-18px" }}
                              >
                                Date:
                              </label>
                              <div className="col-md-2">
                                <input
                                  className="form-control text-center"
                                  type="text"
                                  id="txtDate"
                                  placeholder="Enter date"
                                />
                              </div>

                              <label className="mt-1">
                                * Bank
                                <br />
                                Name
                              </label>
                              <div className="col-md-4 ">
                                <input
                                  className="form-control text-center"
                                  type="text"
                                />
                              </div>

                              <label className="mt-1">Amount:</label>
                              <div className="col-md-2">
                                <input
                                  className="form-control text-center"
                                  type="text"
                                />
                              </div>
                            </div>

                            <div className=" row  align-items-center">
                              <label
                                className="mt-1"
                                style={{ marginLeft: "25px" }}
                              >
                                Expire Date
                              </label>
                              <div className="col-md-2">
                                <input
                                  className="form-control text-center"
                                  type="text"
                                />
                              </div>

                              <label
                                className="mt-1"
                                style={{ marginLeft: "-10px" }}
                              >
                                * Branch
                                <br />
                                Name
                              </label>
                              <div className="col-md-4">
                                <input
                                  className="form-control text-center"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                     {/* Footer */}
      <div className="border " style={{backgroundColor:"whitesmoke"}} >
                                                    <div class="card-footer ">
                                                    </div>
                                                    <div class="card-block mb-6">
                                                       
                                                        {/* <h6 class="m-t-20 f-w-600">Usage:</h6> */}
                                                      

                                                        <div className="row  justify-content-center">
                                                        <div className="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
       First
     </button>
   </div>
   
   <div className="col-5 col-sm-4 col-md-2 col-lg-2 col-xl-2">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
       &lt;&lt; Previous
     </button>
   </div>

   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <input
       type="number"
       className="btn btn-grd-success btn-sm btn-block"
       value={"1"}
    / >
   </div>

   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
       10509
     </button>
   </div>

   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
       Next &gt;&gt;
     </button>
   </div>

   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
       Last
     </button>
   </div>
   
   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
      Add
     </button>
   </div>

   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
     Save
     </button>
   </div>
   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-info btn-sm btn-block"
     >
    Edit
     </button>
   </div>
   <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
     <button
       type="button"
       className="btn btn-grd-inverse btn-sm btn-block"
     >
     Cancel
     </button>
   </div>
   <div className="col-5 col-sm-4 col-md-2 col-lg-2 col-xl-2 mt-2">
     <button
       type="button"
       className="btn btn-grd-success btn-sm btn-block"
     >
      Take Advance Payment
     </button>
   </div>
   <div className="col-5 col-sm-4 col-md-2 col-lg-2 col-xl-2 mt-3">
                          <div className="form-group ">
                            <div>
                              <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={() =>
                                  setAttachedFilesCount(attachedFilesCount + 1)
                                }
                              />
                              <Link
                                className=" font-weight-bold mt-3   "
                                style={{
                                  fontSize: "13px",
                                  textDecoration: "underline",
                                }}
                                onClick={handleAttachmentClick}
                              >
                                Attach Document
                              </Link>
                              {attachedFilesCount >= 0 && (
                                <span className="ml-2  badge badge-danger col-md-2">
                                  {attachedFilesCount}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
 </div>
                                                        
                                                       
                                                    </div>
                                                </div>
{/* Footer End */}
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
export default TaxPayment;
