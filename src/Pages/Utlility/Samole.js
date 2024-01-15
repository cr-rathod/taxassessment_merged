import React, { useState, useEffect } from "react";
import UpdateReturnTaxes from "../Assessment/UpdateReturnTaxes";
const  ApplyTax = () => {
   //mtr
   const [InMtr, setInMtr] = useState(false);

  const handleClick = () => {
    setInMtr(!InMtr);
  };

  const [zoneNo, setZoneNo] = useState("");
  const [wardNo, setWardNo] = useState("");
  const [propertyNo, setPropertyNo] = useState("");
  const [partitionNo, setPartitionNo] = useState("");
  const [openPlot, setOpenPlot] = useState("");
  const [csn, setCSN] = useState("");
  const [plotNo, setPlotNo] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [plotArSqFt, setPlotArSqFt] = useState("");
  const [plotArSqMt, setPlotArSqMt] = useState("");
  const [builtUp, setBuiltUp] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [shopBidName, setShopBidName] = useState("");
  const [shopFlatName, setShopFlatName] = useState("");
  const [शिर्षक, setशिर्षक] = useState("");
  const [प्रथमनाव, setप्रथमनाव] = useState("");
  const [मधलेनाव, setमधलेनाव] = useState("");
  const [आडनाव, setआडनाव] = useState("");
  const [पत्त, setपत्ता] = useState("");
  const [दुकान, setदुकान] = useState("");
  const [दुकानF, setदुकानF] = useState("");
  const [isPrime, setIsPrime] = useState("");
  const [CarpetArSqMtr, setCarpetArMtr] = useState("");
  const [RentedArSqFt, setRentedArSqFt] = useState("");
  const [TotalRent, setTotalRent] = useState("");

  return(
  <div className="pcoded-content">
  <div className="pcoded-inner-content">
    <div className="main-body">
      <div className="page-wrapper">
        <div className="page-body">
        <div className="card ">
            <div className="card-header">
              <h5>Data</h5>
            </div>
            <div className="card-block">
            <div id="wizard">
                            <section>
            <form
                                class="wizard-form"
                                id="example-advanced-form"
                                action="#"
                              >
          
            <fieldset>
                                  {/* <div class="card-header">
                                    <h5> Data Entry</h5>
                                  </div> */}
                                  <div class="form-group row">
                                    <div className="col-md-1 mt-1 ml-2  ">
                                      {/* <div className="form-group"> */}
                                      <label for="userName-2" class="block">
                                        Zone No:
                                      </label>
                                      {/* <div className="col-md-1 mt-1  ml-2"> */}

                                      <input
                                        className="form-control text-center "
                                        type="text"
                                        // value={zoneNo}
                                        value={1}
                                        onChange={(e) =>
                                          setZoneNo(e.target.value)
                                        }
                                      />
                                      {/* </div> */}
                                    </div>
                                    <div className="col-md-1 mt-1 ml-4">
                                      <div className="form-group row">
                                        <label for="userName-2c" class="block">
                                          Ward No:
                                        </label>
                                        <input
                                          className="form-control text-center"
                                          type="text"
                                          // value={wardNo}
                                          value={1}
                                          onChange={(e) =>
                                            setWardNo(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-1 ml-2">
                                      <div className="form-group">
                                        <label>Property No</label>
                                        <input
                                          className="form-control text-center"
                                          type="text"
                                          value={1}
                                          onChange={(e) =>
                                            setPropertyNo(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-1 ml-2">
                                      <div className="form-group">
                                        <label>Partition No</label>
                                        <input
                                          className="form-control text-center"
                                          type="text"
                                          value={partitionNo}
                                          onChange={(e) =>
                                            setPartitionNo(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-1 mt-1 ml-2">
                                      <div className="form-group">
                                        <label>Open Plot:</label>
                                        <select
                                          className="form-control text-center"
                                          value={openPlot}
                                          onChange={(e) =>
                                            setOpenPlot(e.target.value)
                                          }
                                          style={{ height: "35px" }}
                                        >
                                          <option value="0">No</option>
                                          <option value="1">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-1 mt-1 ml-2">
                                      <div className="form-group">
                                        <label>CSN:</label>
                                        <input
                                          className="form-control text-center"
                                          type="text"
                                          value={csn}
                                          onChange={(e) =>
                                            setCSN(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-1 mt-1 ml-2">
                                      <div className="form-group">
                                        <label>Plot No:</label>
                                        <input
                                          className="form-control text-center"
                                          type="text"
                                          value={plotNo}
                                          onChange={(e) =>
                                            setPlotNo(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-1 ml-2">
                                      <div className="form-group">
                                        <label>Property Description</label>
                                        <select
                                          className="form-control text-center"
                                          value={propertyDescription}
                                          onChange={(e) =>
                                            setPropertyDescription(
                                              e.target.value
                                            )
                                          }
                                          style={{ height: "35px" }}
                                        >
                                          <option value="0">निवासी</option>
                                          <option value="1">खाजगी शाळा</option>
                                          <option value="2">न. प. शाळा</option>
                                          <option value="3">शासकीय शाळा</option>
                                          <option value="5">डिस्पेन्सरी</option>
                                          <option value="6">
                                            खाजगी रुग्णालय
                                          </option>
                                          <option value="7">
                                            शासकीय रुग्णालय
                                          </option>
                                          <option value="8">
                                            प्राथमिक आरोग्य केंद्र
                                          </option>
                                          <option value="9">
                                            न. प चे रुग्णालय
                                          </option>
                                          <option value="10">
                                            मंगल कार्यालय/टॉकीज
                                          </option>
                                          <option value="11">
                                            बँक वित्तीय संस्था
                                          </option>
                                          <option value="12">
                                            धार्मिक स्थळ{" "}
                                          </option>
                                          <option value="13">दुकान </option>
                                          <option value="14">
                                            रेस्टॉरंट आणि बार{" "}
                                          </option>
                                          <option value="15">औद्योगिक</option>
                                          <option value="16">
                                            न. प. चे कार्यालय
                                          </option>
                                          <option value="17">
                                            खाजगी कार्यालय
                                          </option>
                                          <option value="18">
                                            नर्सिंग होम{" "}
                                          </option>
                                          <option value="19">रेस्टॉरंट</option>
                                          <option value="20">
                                            न.प. इतर मालमत्ता{" "}
                                          </option>
                                          <option value="21">प्लॉट</option>
                                          <option value="22">
                                            {" "}
                                            निवासी व दुकान
                                          </option>
                                          <option value="23">अतिक्रमण </option>
                                          <option value="24">
                                            मा शासकीय मालमत्ता करमुक्त{" "}
                                          </option>
                                          <option value="25">
                                            मोबाईल टॉवर
                                          </option>
                                          <option value="26">
                                            पेट्रोल पंप{" "}
                                          </option>
                                          <option value="27">हॉटेल </option>
                                          <option value="28">लॉज</option>
                                          <option value="30">
                                            {" "}
                                            निवास व हॉटेल
                                          </option>
                                          <option value="31"></option>
                                          <option value="32">
                                            चालू बांधकाम
                                          </option>
                                          <option value="33">मोठा </option>
                                          <option value="34">
                                            न. प. दुकान माळे
                                          </option>
                                          <option value="35">वस्तीगृह </option>
                                          <option value="36">
                                            व्यायाम शाळा
                                          </option>
                                          <option value="37">घरकुल</option>
                                          <option value="38"> पार्किंग</option>
                                          <option value="39">
                                            निवासी व कार्यालय
                                          </option>
                                          <option value="40">गोडाऊन </option>
                                          <option value="41">वाचनालय </option>
                                          <option value="42">
                                            केंद्र शासकीय मालमत्ता खाजगी
                                            रुग्णालय व निवासी
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-1 mt-1 mx-2 ml-4">
                                      <div className="form-group row">
                                        <label>Plot Art SqFt</label>
                                        <input
                                          className="form-control text-center"
                                          type="text"
                                          // value={plotArSqFt}
                                          value={5400}
                                          onChange={(e) =>
                                            setPlotArSqFt(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-1 mx-2 mt-1 ml-4 ">
                                      <div className="form-group row ">
                                        <label>Plot Art SqMt</label>
                                        <input
                                          className="form-control text-center"
                                          type="text"
                                          // value={plotArSqMt}
                                          value={0}
                                          onChange={(e) =>
                                            setPlotArSqMt(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-1 mt-1 mx-2 ml-4">
                                      <div className="form-group row ">
                                        <label>TotalRent</label>
                                        <input
                                          className="form-control text-center"
                                          type="text"
                                          value={0}
                                          // onChange={(e) =>
                                          //   setBuiltUp(e.target.value)
                                          // }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-1 mt-1 mx-2 ml-4">
                                      <div className="form-group row ">
                                        <label>BuildUp Area:</label>
                                        <input
                                          className="form-control text-center"
                                          type="text"
                                          value={2515.2}
                                          onChange={(e) =>
                                            setBuiltUp(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-1 mt-1 mx-2 ml-4">
                                      <div className="form-group row ">
                                        <label>CarpetArSqMtr</label>
                                        <input
                                          className="form-control text-center"
                                          type="text"
                                          value={2515.2}
                                          // onChange={(e) =>
                                          //   setBuiltUp(e.target.value)
                                          // }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-1 mt-1 mx-2 ml-4">
                                      <div className="form-group row ">
                                        <label>RentedArSqFt</label>
                                        <input
                                          className="form-control text-center"
                                          type="text"
                                          value={1716}
                                          // onChange={(e) =>
                                          //   setBuiltUp(e.target.value)
                                          // }
                                        />
                                      </div>
                                    </div>
                                   
                                    <div className="col-md-1 mt-1 mx-2 ml-4">
                                      <div className="form-group row ">
                                        <label >
                                         Owner Id
                                        </label>
                                        <input
                                          className="form-control"
                                          type="number"
                                          value={7501}
                                          // onChange={(e) =>
                                          //   setBuiltUp(e.target.value)
                                          // }
                                        />
                                      </div>
                                    </div>
                                   <div className="col-md-1 mt-1 mx-2 ml-4">
          <div className="form-group row">
            <button
              className="btn btn-grd-primary btn-sm btn-block mt-4"
              type="button"
              value={InMtr}
              onClick={handleClick}
            >
              In Mtr
            </button>
          </div>
        </div></div>

        {InMtr && (
          <>
          <div className="row  justify-content-center  ">
          <div className="col-md-5 border border-primary">
<div className="sub-title">InMtr</div>
           
          <div className="form-group row justify-content-center">
              <div className="col-md-3 text-center">
                <label className="col-form-label mb-2">BuiltUpArSqFt</label>
                <input
                  type="text"
                  className="form-control text-center"
                  value={"2515.2"}
                />
              </div>
              <div className="col-md-3 text-center">
                <label className="col-form-label mb-2 text-center">
                  CarpetArSqFt
                </label>
                <input
                  type="text"
                  className="form-control text-center"
                  value={"2515.2"}
                />
              </div>
              <div className="col-md-3 text-center">
                <label className="col-form-label mb-2 text-center">
                  RentedArSqFt
                </label>
                <input
                  type="text"
                  className="form-control text-center"
                  value={"1716"}
                />
              </div>
            </div> </div>
          </div>
          </>
        )}

                                  {/* <h3 id="design-wizard-h-0" tabindex="-1" class="title current" style={{ color: "blue" }}>Owner Details</h3> */}
                                  <h4 className="text-info">Owner Details</h4>
                                  <div className="row">
                                    <div className="col-1-md-1 mt-2 ml-4">
                                      <div className="form-group ">
                                        <label>*Title</label>
                                        <select
                                          className="form-control  bg-info text-white "
                                          value={title}
                                          onChange={(e) =>
                                            setTitle(e.target.value)
                                          }
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
                                    {/* <div className="col-md-2 mt-2 ml-2">
                                      <div className="form-group">
                                        <label>*First Name</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={firstName}
                                          onChange={(e) =>
                                            setFirstName(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-2 ml-2">
                                      <div className="form-group">
                                        <label>Middle Name</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={middleName}
                                          onChange={(e) =>
                                            setMiddleName(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div> */}
                                    <div className="col-md-3 mt-2 ml-2">
                                      <div className="form-group">
                                        <label>*Full Name</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={lastName}
                                          onChange={(e) =>
                                            setLastName(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-3 mt-2 ml-2">
                                      <div className="form-group">
                                        <label>Address</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={address}
                                          onChange={(e) =>
                                            setAddress(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-2 mt-2 ml-2 ">
                                      <div className="form-group">
                                        <label>Shop/Bid Name </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={shopBidName}
                                          onChange={(e) =>
                                            setShopBidName(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-2 ml-2  ">
                                      <div className="form-group">
                                        <label>Shop/FlatNo.</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={shopFlatName}
                                          onChange={(e) =>
                                            setShopFlatName(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-1-md-1 mt-2 ml-4">
                                      <div className="form-group">
                                        <label>*शिर्षक</label>
                                        <select
                                          className="form-control  bg-info text-white "
                                          value={शिर्षक}
                                          onChange={(e) =>
                                            setशिर्षक(e.target.value)
                                          }
                                          style={{ height: "35px" }}
                                        >
                                          <option value="0"></option>
                                          <option value="1">श्री </option>
                                          <option value="2">श्रीमती.</option>
                                          <option value="3">सौ</option>
                                          <option value="4">कुमार</option>
                                          <option value="5"> इतर</option>
                                        </select>
                                      </div>
                                    </div>
                                    {/* <div className="col-md-2 mt-1  ml-2">
                                      <div className="form-group">
                                        <label>*प्रथम नाव</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={प्रथमनाव}
                                          onChange={(e) =>
                                            setप्रथमनाव(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-1  ml-2">
                                      <div className="form-group">
                                        <label>मधले नाव</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={मधलेनाव}
                                          onChange={(e) =>
                                            setमधलेनाव(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div> */}
                                    <div className="col-md-3 mt-1  ml-2">
                                      <div className="form-group">
                                        <label>पूर्ण नाव</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={आडनाव}
                                          onChange={(e) =>
                                            setआडनाव(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-3 mt-1  ml-2">
                                      <div className="form-group">
                                        <label>पत्ता</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={पत्त}
                                          onChange={(e) =>
                                            setपत्ता(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    {/* </div>
                                  <div className="row"> */}
                                    <div className="col-md-2 mt-1 ml-2">
                                      <div className="form-group">
                                        <label>दुकान/इमारतचे नाव </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={दुकान}
                                          onChange={(e) =>
                                            setदुकान(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-1 ml-2">
                                      <div className="form-group">
                                        <label>दुकान/Flat नं</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={दुकानF}
                                          onChange={(e) =>
                                            setदुकानF(e.target.value)
                                          }
                                        />
                                      </div>
                                      
                                    </div>
                                    <div className="row justify-contain-center ">
                                      <div className=" p-4 d-flex justify-content-center align-items-center  ml-5">
                                        <div className="col d-flex justify-content-end align-items-start ">
                                          <button
                                            type="button"
                                            className=" btn btn-sm  btn-grd-info waves-effect waves-light"
                                          >
                                            Copy
                                          </button>
                                        </div>
                                        <div className="col d-flex justify-content-start align-items-start ">
                                          <button
                                            type="button"
                                            className="btn btn-sm btn-grd-info  waves-effect waves-light"
                                          >
                                            Paste
                                          </button>
                                        </div>

                                        <div className="col d-flex justify-content-end align-items-start ">
                                          <button
                                            type="button"
                                            className="  btn btn-sm btn-success waves-effect waves-light"
                                          >
                                            Add
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    {/* table */}
                                    <div class="dt-responsive table-responsive">
                                      <table class="table table-striped table-bordered nowrap">
                                        <thead>
                                          <tr>
                                            <th  className="font-weight-bold">isPrime</th>
                                            <th  className="font-weight-bold">शिर्षक</th>
                                            <th  className="font-weight-bold">पूर्ण नाव</th>
                                            <th  className="font-weight-bold">पत्त</th>
                                            <th  className="font-weight-bold">दुकान/इमारतचे नाव</th>
                                            <th  className="font-weight-bold">दुकान/Flat नं</th>
                                            <th  className="font-weight-bold">Title</th>
                                            <th  className="font-weight-bold">Full Name</th>
                                            <th  className="font-weight-bold">Address</th>
                                            <th  className="font-weight-bold">Shop/Building Name</th>
                                            <th  className="font-weight-bold">Shop/FlatNumber</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  checked={isPrime}
                                                  onChange={(e) =>
                                                    setIsPrime(e.target.checked)
                                                  }
                                                />
                                              </label>
                                            </td>
                                            <td>श्री </td>
                                            <td>देविदास सुदाम पुरी</td>
                                            <td>Pune</td>
                                            <td></td>
                                            <td></td>
                                            <td>Mr</td>
                                            <td>Devidas sudam puri</td>
                                            <td>Pune</td>
                                            <td></td>
                                            <td></td>
                                          </tr>

                                          <tr style={{ textAlign: "center" }}>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  checked={isPrime}
                                                  onChange={(e) =>
                                                    setIsPrime(e.target.checked)
                                                  }
                                                />
                                              </label>
                                            </td>
                                            <td>श्री </td>
                                            <td>देविदास सुदाम पुरी</td>
                                            <td>Pune</td>
                                            <td></td>
                                            <td></td>
                                            <td>Mr</td>
                                            <td>Devidas sudam puri</td>
                                            <td>Pune</td>
                                            <td></td>
                                            <td></td>
                                          </tr>

                                          <tr style={{ textAlign: "center" }}>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  checked={isPrime}
                                                  onChange={(e) =>
                                                    setIsPrime(e.target.checked)
                                                  }
                                                />
                                              </label>
                                            </td>
                                            <td>श्री </td>
                                            <td>देविदास सुदाम पुरी</td>
                                            <td>Pune</td>
                                            <td></td>
                                            <td></td>
                                            <td>Mr</td>
                                            <td>Devidas sudam puri</td>
                                            <td>Pune</td>
                                            <td></td>
                                            <td></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>{" "}
                                  </div>
                                </fieldset>
                
            </form>
            </section>
                 </div>
      
    </div>   </div>   </div>   </div>   </div>   </div>   </div>
  );
};
    
    
export default ApplyTax
