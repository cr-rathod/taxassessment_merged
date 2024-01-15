import React, { useState, useEffect,useRef } from "react";
import { Link } from "react-router-dom";

const AdvancePayment = () => {
  const [wardNo, setWardNo] = useState("");
  const [propertyNo, setPropertyNo] = useState("");
  const [PartitionNo, setPatitionNo] = useState("");
  const [OwnerName, setOwnerName] = useState("");
  const [FinacialYear, setFinanceYear] = useState("");
  const [billBookNo, setBillBookNo] = useState("");
  const [employName, setEmployeeName] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [TransactionDate, setTransactionDate] = useState("");
  const [attachedFilesCount, setAttachedFilesCount] = useState(0);

  const wardOptions = Array.from({ length: 16 }, (_, index) => index + 1);
  //
  const propertyOptions = [
    ...Array.from({ length: 10 }, (_, index) => (index + 1).toString()),
    "11",
    ...Array.from({ length: 7 }, (_, index) => `11-${index + 1}`),
    "12",
    ...Array.from({ length: 13 }, (_, index) => (index + 13).toString()),
    "30",
  ];

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
                  <h5>Advance Payment</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="row">
                      <div className="col-md-6 ">
                        <h6 className="mt-4 text-info">Property Details</h6>

                        <div className=" col-10 form-group row ml-1">
                          <label className="col-1-md-1  mt-4  col-form-label">
                            Select Ward
                          </label>
                          <div className="col-sm-2  mt-3 ">
                            <select
                              className="form-control text-right"
                              name="tPropNo"
                              id="tPropNo"
                              value={wardNo}
                              onChange={(e) => setWardNo(e.target.value)}
                            >
                              <option></option>
                              {wardOptions.map((option) => (
                                <option key={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                          <label className="col-1-md-1  mt-4  col-form-label">
                            Property No.
                          </label>
                          <div className="col-sm-2  mt-3 ">
                            <select
                              className="form-control text-right"
                              name="tPropNo"
                              id="tPropNo"
                              value={propertyNo}
                              onChange={(e) => setPropertyNo(e.target.value)}
                            >
                              {propertyOptions.map((option) => (
                                <option key={option}>{option}</option>
                              ))}
                            </select>
                          </div>

                          <label className="col-1-md-1  mt-4  col-form-label">
                            Partition No.
                          </label>
                          <div className="col-sm-2  mt-3 ">
                            <select
                              className="form-control text-right"
                              name="tPropNo"
                              id="tPropNo"
                              value={propertyNo}
                              onChange={(e) => setPropertyNo(e.target.value)}
                            >
                              {propertyOptions.map((option) => (
                                <option key={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className=" row ml-3">
                          <label className=" col-md-3 mt-3">Owner Name</label>
                          <div className="col-12 col-md-7 mt-3">
                            <input
                              className="form-control text-center "
                              name="tPropNo"
                              id="tPropNo"
                            />
                          </div></div>
                          <div className=" row ml-3">
                          <label className=" col-md-3 mt-3">Owner Id</label>

                          <div className=" col-12 col-md-2 mt-3 text-md-right">
                            <input
                              className="form-control ml-md"
                              name="tPropNo"
                              id="tPropNo"
                              value={"5678"}
                            />
                          </div>
                          {/* md-6 */}
                        </div>

                        {/* row */}
                      </div>

                      {/* 2nd part */}
                      <div className="col-md-6">
                        <div className=" col-12 row mt-4">
                          <label className="col-1-md-1 mt-4 col-form-label">
                            Finance Year:
                          </label>
                          <div className="col-md-7 mt-3">
                            <select
                              className="form-control text-center"
                              name="wdName"
                              type="checkbox"
                              id="wdName"
                            >
                              <option>2017-2018</option>
                              <option>2018-2019</option>
                              <option>2019-2020</option>
                              <option>2020-2021</option>
                              <option>2021-2022</option>
                              <option>2022-2023</option>
                              <option>2023-2024</option>
                            </select>
                          </div>
                        </div>

                        <div className=" mt-2 col-10 form-group row ">
                          <label className="col-1-md-1 col-form-label">
                            Bill Book:
                          </label>
                          <div className="col-md-4 ">
                            <input
                              className="form-control"
                              name="Bbook"
                              type="text"
                              id="Bbook"
                            />
                          </div>

                          <label className="col-1-md-1 col-form-label">
                            Invoice:
                          </label>
                          <div className="col-md-4 ">
                            <input
                              className="form-control"
                              name="invoice"
                              type="text"
                              id="invoice"
                            />
                          </div>
                        </div>

                        <div className=" col-10 form-group row ">
                          <label className="col-1-md-1 col-form-label">
                            Employee Name
                          </label>
                          <div className="col-md-8  ">
                            <input
                              className="form-control"
                              name="invoice"
                              type="text"
                              id="invoice"
                            />
                          </div>
                        </div>

                        <div className=" col-10 form-group row ">
                          <label className="col-1-md-1 col-form-label">
                            Tranaction Date
                          </label>
                          <div className="col-md-4 mb-2  ">
                            <input
                              className="form-control "
                              type="text"
                              id="txtTDate" 
                              placeholder="Enter Tranaction Date"
                            />
                          </div>

                          <div className="col-md-4  ">
                            <input
                              className="form-control"
                              name="tDate"
                              type="tDate"
                              id="invoice"
                            />
                          </div>
                        </div>
                        {/*  */}
                      </div>
                    </div>
                    {/* table */}
                    <h6 className="text-info">Current Taxes</h6>
                    <div class="mb-4 form-group dt-responsive table-responsive ">
                      {/*style={{
          maxHeight: "100px",
                     overflowY: "auto"}}*/}
                      <table class="table table-striped table-bordered nowrap">
                        <thead>
                          <tr className="text-center">
                            {/* <tr style={{ textAlign: "center" }}> */}
                            <td className="font-weight-bold">Property</td>
                            <td  className="font-weight-bold">Edcation</td>
                            <td  className="font-weight-bold">Sp Edu.</td>
                            <td className="font-weight-bold">Employee</td>
                            <td className="font-weight-bold">Tree</td>
                            <td className="font-weight-bold">Fire</td>
                            <td className="font-weight-bold">Light</td>
                            <td className="font-weight-bold">Drain</td>
                            <td className="font-weight-bold">Road</td>
                            <td className="font-weight-bold">Sanitation</td>
                            <td className="font-weight-bold">W.Cess</td>
                            <td className="font-weight-bold">Wbenfit</td>
                            <td className="font-weight-bold">WaterFit</td>
                            <td className="font-weight-bold">WaterBill</td>
                            <td className="font-weight-bold">MajorBuild</td>
                            <td className="font-weight-bold">Sewage</td>
                            <td className="font-weight-bold">Tax1</td>
                            <td className="font-weight-bold">Interest</td>

                            <td className="font-weight-bold">TotalInterest</td>
                          </tr>
                          {/* </tr> */}
                          {/* <tr> */}
                        </thead>

                        <tr className="text-center">
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
                          <td>0</td>
                          <td>0</td>
                          <td>18143</td>
                        </tr>
                      </table>
                    </div>
                    {/*  */}
                    <div className="row  card p-2">
                      <div className="   form-group row">
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
                    {/* Other Expense */}
                    <h6 className="text-info">Other Expence</h6>

                    <div className="form-group ml-2 row">
                      <label className="mt-1">Interest</label>
                      <div className="col-md-1  ">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={0.0}
                        />
                      </div>

                      <label className="mt-1">Extra Charges:</label>
                      <div className="col-md-1  ">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={0.0}
                        />
                      </div>

                      <label className="mt-1">Notice Fee:</label>
                      <div className="col-md-1  ">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={0.0}
                        />
                      </div>

                      <label className="mt-1">Discount:</label>
                      <div className="col-md-1  ">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={0.0}
                        />
                      </div>

                      <label className="mt-1">Total Tax:</label>
                      <div className="col-md-2  ">
                        <input
                          className="form-control text-center "
                          type="text"
                          value={0.0}
                        />
                      </div>

                      <label className="mt-1">Total:</label>
                      <div className="col-md-2   ">
                        <input
                          className="form-control text-center"
                          type="text"
                          value={0.0}
                        />
                      </div>
                      {/*  */}
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
                      <div className="col-md-4 ml-md-2 ">
                        <input
                          className="form-control text-center"
                          type="text"
                        />
                      </div>

                      {/*  */}
                    </div>

                    {/*Payment DD */}

                    <div class="row form-group ml-2">
                      {["DD", "Cheque"].includes(paymentMode) && (
                        <>
                                            <h6 className="text-info">DD/Cheque Details</h6>

                          <div className="col-md-8 justify-content-center">
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
                                  type="date"
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
                      <div className="col-md-4 text-center mx-auto ">
  <div className="col-md-5 col-12">
    <button
      type="submit"
      className="  btn  btn-grd-success  "
    >
      Add To Grid
    </button>
  </div>
</div>

                    </div>
                    {/*  */}
                    {/* table */}
                    <div
                      class="mb-4 form-group dt-responsive table-responsive "
                      style={{
                        maxHeight: "100px",
                        overflowY: "auto",
                      }}
                    >
                      <table class="table table-striped table-bordered nowrap">
                        <thead>
                          <tr className="text-center">
                            {/* <tr style={{ textAlign: "center" }}> */}
                            <td className="font-weight-bold">ID</td>
                            <td className="font-weight-bold">ManageId</td>
                            <td className="font-weight-bold">OwnerId</td>
                            <td className="font-weight-bold">PaymentType</td>
                            <td className="font-weight-bold">FinanceYear</td>
                            <td className="font-weight-bold">EmpId</td>
                            <td className="font-weight-bold">BillBookNo</td>
                            <td className="font-weight-bold">InvoiceNo</td>
                            <td className="font-weight-bold">BillNo</td>
                            <td className="font-weight-bold">Trans.Date</td>
                            <td className="font-weight-bold">BillDate</td>
                            <td className="font-weight-bold">Prop</td>
                            <td className="font-weight-bold">Edu.</td>
                            <td className="font-weight-bold">Emp.</td>
                            <td className="font-weight-bold">Tree</td>
                            <td className="font-weight-bold">SpWater</td>
                            <td className="font-weight-bold">Sanitation</td>
                            <td className="font-weight-bold">Drain</td>
                            <td className="font-weight-bold">Road</td>
                            <td className="font-weight-bold">Fire</td>
                            <td className="font-weight-bold">Light</td>
                            <td className="font-weight-bold">WatBenfits</td>
                            <td className="font-weight-bold">MajorBuild</td>
                            <td className="font-weight-bold">Sew.Disp.</td>
                            <td className="font-weight-bold">SpEdu.</td>
                            <td className="font-weight-bold">WaterBill</td>
                            <td className="font-weight-bold">Tax1</td>
                            <td className="font-weight-bold">TaxTotal</td>
                            <td className="font-weight-bold">Interest</td>
                            <td className="font-weight-bold">NoticeFee</td>
                            <td className="font-weight-bold">WarrentFee</td>
                            <td className="font-weight-bold">NetTotal</td>
                            <td className="font-weight-bold">PaymentMode</td>
                            <td className="font-weight-bold">DD/ChequeNo.</td>
                            <td className="font-weight-bold" >Payee Name</td>
                            <td className="font-weight-bold">Bank Name</td>
                            <td className="font-weight-bold">DD/ChequeDate</td>
                            <td className="font-weight-bold">Expire Date</td>
                            <td className="font-weight-bold">IFSC No.</td>
                            <td className="font-weight-bold">Amount</td>
                            <td className="font-weight-bold">Pending Year</td>
                            <td className="font-weight-bold">Remark</td>
                          </tr>
                        </thead>

                        <tr className="text-center">
                          <td></td>
                          <td></td>
                          <td>7500</td>
                          <td>Advance</td>
                          <td>2023</td>
                          <td>2</td>
                          <td>11</td>
                          <td>100</td>
                          <td>0</td>
                          <td>04/12/2023</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td></td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>Cash</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>04/12/2023</td>
                          <td>04/12/2023</td>
                          <td></td>
                          <td>0.00</td>
                          <td>2023</td>
                          <td></td>
                        </tr>
                      </table>
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
     >
     </input>
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
       className="btn btn-grd-danger btn-sm btn-block"
     >
    Delete
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
export default AdvancePayment;
