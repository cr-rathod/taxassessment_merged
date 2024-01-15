import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import UpdateReturnTaxes from "./UpdateReturnTaxes";
import SocialDeatils from "./SocialDetails"
import OldFloor from "./OldFloorInformation"
import DateF6 from "./DataEntryF6"


const Data = () => {
  const [showUpdateReturn, setShowUpdateReturn] = useState(false);

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

  const [floor, setFloor] = useState("");
  const [year, setYear] = useState("");
  const [constructionType, setConstructionType] = useState("");
  const [typeOfUse, setTypeOfUse] = useState("");
  const [noOfRoooms, setNoOfRooms] = useState("");
  const [carpetSqFt, setCarpetSqFt] = useState("");
  const [carpetSqMtr, setCarpetSqMtr] = useState("");
  const [room, setRoom] = useState("");
  const [registration, setRegistration] = useState("");
  const [renter, setRenter] = useState("");
  const [भोगवटधाराचे, setभोगवटधाराचे] = useState("");
  // const [मधलेनाव, setमधलेनाव] = useState("");
  // const [आडनाव, setआडनाव] = useState("");
  const [renterFirst, setRenterFirstName] = useState("");
  const [middle, setMiddle] = useState("");
  // const [lastName, setLastName] = useState("");
  const [caluRent, setCaluRent] = useState("");
  const [nonCalRent, setNonCalRent] = useState("");

  const [mob, setMob] = useState("");
  const [panCard, setPanCard] = useState("");
  const [emailId, setEmailId] = useState("");
  const [adharCard, setAdharCard] = useState("");
  const [isCombinedProp, setIsCombinedProp] = useState("");
  const [propertyRemark, setPropertyRemark] = useState("");
  const [plotTaxableArea, setplotTaxableArea] = useState("");
  const [hearingObject, setHearingObject] = useState("");
  const [appealComm, setAppealComm] = useState("");
  const [wadhGhat, setWadhGhat] = useState("");
  const [isproperty, setIsProperty] = useState("");
  const [plotArea, setPlotArea] = useState("");
  const [खुल्याभूखंडाच्या, setखुल्याभूखंडाच्या] = useState("");
  // const [मधलेनाव, setमधलेनाव] = useState("");
  // const [आडनाव, setआडनाव] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [drainTax, setDrainTax] = useState("");
  const [isFlat, setIsFlat] = useState("");
  const [BHK, setBHK] = useState("");

  const navigate = useNavigate();
  // useEffect(() => {
  //  // updateReturn
  //   const handleKeyDown = (event) => {
  //     if (event.ctrlKey && event.key === "F2") {
  //       navigate("/updateReturn");
  //     }
  //   };
  //    // updateReturn
  //    useEffect(() => {
  //     const handleKeyDown = (event) => {
  //       if (event.ctrlKey && event.key === "F2") {
  //         setShowUpdateReturn(true);
  //       }
  //     };

  //     // Attach the event listener
  //     window.addEventListener("keydown", handleKeyDown);

  //     // Cleanup the event listener on component unmount
  //     return () => {
  //       window.removeEventListener("keydown", handleKeyDown);
  //     };
  //   }, []);

  //   // social
  //   const handleKeySocial = (event) => {
  //     if (event.ctrlKey && event.key === "F5") {
  //       navigate("/social");
  //     }
  //   };
  //  // social
  //  const handleKeyOld = (event) => {
  //   if (event.ctrlKey && event.key === "F3") {
  //     navigate("/oldinfo");
  //   }
  // };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [navigate]);



  // useEffect(() => {
  //   // social
  //   const handleKeySocial = (event) => {
  //     if (event.ctrlKey && event.key === "F5") {
  //       navigate("/social");
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeySocial);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeySocial);
  //   };
  // }, [navigate]);

  // useEffect(() => {
  //   // old Information
  //   const handleKeyOld = (event) => {
  //     if (event.ctrlKey && event.key === "F3") {
  //       navigate("/oldinfo");
  //     }
  //   };

  //   window.addEventListener("keydown",handleKeyOld);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyOld);
  //   };
  // }, [navigate]);

  //
  //inmtr click
  const [iscreate, setcreate] = useState(false);

  const handleClick = () => {
    setcreate(true);
  };

  const [attachedFilesCount, setAttachedFilesCount] = useState(0);

  const fileInputRef = useRef(null);

  const handleAttachmentClick = () => {
    fileInputRef.current.click();
    setAttachedFilesCount(attachedFilesCount + 1);
  };

  //social
  const [showSocialReturns, setShowSocialReturns] = useState(false);

  const handleKeyDownSocial = (event) => {
    if (event.key === "F1") {
      setShowSocialReturns(true);
    } else if (event.key === "Escape") {
      setShowSocialReturns(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDownSocial);

    return () => {
      window.removeEventListener("keydown", handleKeyDownSocial);
    };
  },);
  //update
  const [showUpdateReturns, setShowUpdateReturns] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "F2") {
      setShowUpdateReturns(true);
    } else if (event.key === "Escape") {
      setShowUpdateReturns(false);
    }
  };

  useEffect(() => {
    // Attach the event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  },);

  //old
  const [showOldReturns, setShowOldReturns] = useState(false);

  const handleKeyOld = (event) => {
    if (event.key === "F3") {
      setShowOldReturns(true);
    } else if (event.key === "Escape") {
      setShowOldReturns(false);
    }
  };
  useEffect(() => {

    window.addEventListener("keydown", handleKeyOld);

    return () => {
      window.removeEventListener("keydown", handleKeyOld);
    };
  },);
  //f6
  const [showRvReturns, setShowRvReturns] = useState(false);

  const handleKeyRv = (event) => {
    if (event.key === "F6") {
      setShowRvReturns(true);
    } else if (event.key === "Escape") {
      setShowRvReturns(false);
    }
  };
  useEffect(() => {

    window.addEventListener("keydown", handleKeyRv);

    return () => {
      window.removeEventListener("keydown", handleKeyRv);
    };
  },);
  //
  // const [activeReturns, setActiveReturns] = useState(null);

  // const handleKeyDowns = (event, returnsType) => {
  //   if (event.ctrlKey && event.key === "F1") {
  //     setActiveReturns(returnsType);
  //   } else if (event.key === "Escape") {
  //     setActiveReturns(null); 
  //   }
  // };
  // return (
  //   <div>
  //     {activeReturns === "social" && <showSocialReturns />}
  //     {activeReturns === "update" && <showUpdateReturns />}
  //     {activeReturns === "old" && <showOldReturns />}
  //   </div>
  // );


  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            {/* page body */}
            <div className="page-body">
              <div class="row">
                <div class="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h5>Data Entry</h5>
                      {/* <span>
                        Add class of <code>.form-control</code> with{" "}
                        <code>&lt;input&gt;</code> tag
                      </span> */}
                      <span>
                        Add class of <code>.form-control</code> with{" "}
                        <code>&lt;input&gt;</code> tag
                      </span>
                    </div>
                    <div class="card-block">
                      <div class="row">
                        <div class="col-md-12">
                          {/* <div id="wizardc"> */}
                          <div id="wizard">
                            <section>
                              {/* <form
                                class="wizard-form"
                                id="design-wizard"
                                action="#"
                              > */}
                              <form
                                class="wizard-form"
                                id="example-advanced-form"
                                action="#"
                              >
                                <h3>Data Entry</h3>
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
                                      <div className="form-group row ">

                                        <button
                                          className=" btn btn-grd-primary btn-sm btn-block mt-4 "
                                          type="button"
                                          data-toggle="modal"
                                          data-target="#large-Modal" onClick={handleClick}
                                        > In Mtr</button>
                                        <div
                                          class="modal fade"
                                          id="large-Modal"
                                          tabindex="-1"
                                          role="dialog"
                                        >
                                          <div class="modal-dialog modal-lg" role="document">
                                            <div class="modal-content">
                                              <div class="modal-header">
                                                <h4 class="modal-title">In SqMt</h4>

                                                <button
                                                  type="button"
                                                  class="close"
                                                  data-dismiss="modal"
                                                  aria-label="Close"
                                                >
                                                  <span aria-hidden="true">&times;</span>
                                                </button>
                                              </div>
                                              <div class="form-group justify-content-center row ml-2">
                                                <div class="col-md-3 text-center">

                                                  <label className="col-form-label mb-2 ">
                                                    BuiltUpArSqFt
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control text-center "
                                                    value={"2515.2"}
                                                  />
                                                </div>
                                                <div class="col-md-3 text-center">
                                                  <label className="col-form-label mb-2 text-center">
                                                    CarpetArSqFt
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control  text-center"
                                                    value={"2515.2"}

                                                  />
                                                </div>                               <div class="col-md-3 text-center"  >

                                                  <label className="col-form-label mb-2 text-center">
                                                    RentedArSqFt
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control  text-center"
                                                    value={"1716"}

                                                  />
                                                </div>
                                                {/* <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-grd-info waves-effect "
                                  data-dismiss="modal"
                                >
                                  Ok
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-grd-inverse waves-effect waves-light "
                                  data-dismiss="modal"

                                >
                                  Cancel
                                </button>
                              </div> */}
                                              </div></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

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
                                            <th className="font-weight-bold">isPrime</th>
                                            <th className="font-weight-bold">शिर्षक</th>
                                            <th className="font-weight-bold">पूर्ण नाव</th>
                                            <th className="font-weight-bold">पत्त</th>
                                            <th className="font-weight-bold">दुकान/इमारतचे नाव</th>
                                            <th className="font-weight-bold">दुकान/Flat नं</th>
                                            <th className="font-weight-bold">Title</th>
                                            <th className="font-weight-bold">Full Name</th>
                                            <th className="font-weight-bold">Address</th>
                                            <th className="font-weight-bold">Shop/Building Name</th>
                                            <th className="font-weight-bold">Shop/FlatNumber</th>
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
                                {/* 2nd page */}

                                <h3>New floor Information </h3>
                                <fieldset>
                                  {/* <div class="card-header">
                                    <h5> New floor Information </h5>
                                  </div> */}
                                  <div class="form-group row">
                                    <div className="col-1-md-1 mt-2 ml-4">
                                      <label>Floor</label>
                                      <select
                                        className="form-control bg-info text-white"
                                        value={floor}
                                        onChange={(e) =>
                                          setFloor(e.target.value)
                                        }
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
                                    <div className="col-md-1 mt-2 ml-2 ">
                                      <div className="form-group">
                                        <label>Year</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={year}
                                          onChange={(e) =>
                                            setYear(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-1 ml-2">
                                      <div className="form-group ">
                                        <label>Construction Type</label>
                                        <select
                                          className="form-control "
                                          value={constructionType}
                                          onChange={(e) =>
                                            setConstructionType(e.target.value)
                                          }
                                          style={{ height: 40 }}
                                        >
                                          <option value="0"></option>
                                          <option value="1">
                                            सिमेंट काँक्रेट संरचना{" "}
                                          </option>
                                          <option value="2">
                                            सिमेंट/चुना/ दगड/विठाची/ भिंत व
                                            स्लॅप
                                          </option>
                                          <option value="3">
                                            सिमेंट/चुना/ दगड/विठाची/ भिंत व
                                            टिनाचे छत
                                          </option>
                                          <option value="4">
                                            कुडाचे लाकडी फाट्याचे कच्चे घर{" "}
                                          </option>
                                          <option value="5">
                                            कुडाचे लाकडी फाट्याचे कच्चे घर{" "}
                                          </option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="col-md-2  ml-2">
                                      <div className="form-group">
                                        {/* <label>*Group</label> */}
                                        <label for="userName-2" class="block">
                                          Group *
                                        </label>

                                        <select
                                          className="form-control"
                                          value={typeOfUse}
                                          onChange={(e) =>
                                            setTypeOfUse(e.target.value)
                                          }
                                        >
                                          <option value="0">No</option>
                                          <option value="1">Property 1</option>
                                          <option value="2">Property 2</option>
                                          <option value="3">Property 3</option>
                                          <option value="4">Property 4</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-2  ml-2">
                                      <div className="form-group">
                                        <label>Type of Use</label>
                                        <select
                                          className="form-control"
                                          value={typeOfUse}
                                          onChange={(e) =>
                                            setTypeOfUse(e.target.value)
                                          }
                                        >
                                          <option value="0"></option>
                                          <option value="1">निवास</option>
                                          <option value="2">दुकान </option>
                                          <option value="3">अनिवासी</option>
                                          <option value="4">
                                            व्हरांडा टॉयलेट बाथ
                                          </option>
                                          <option value="5">दवाखाना</option>
                                          <option value="6">
                                            धार्मिक स्थळ
                                          </option>
                                          <option value="7">
                                            बँक/ वित्तीय संस्था{" "}
                                          </option>
                                          <option value="8">कार्यालय</option>
                                          <option value="9">
                                            मंगल कार्यालय/टॉकीज
                                          </option>
                                          <option value="10">हॉटेल</option>
                                          <option value="11">शैक्षणिक</option>
                                          <option value="12">शासकीय</option>
                                          <option value="13">कारखाना </option>
                                          <option value="14">
                                            न. प. मालमत्ता
                                          </option>
                                          <option value="15">खुला भूखंड</option>
                                          <option value="16">
                                            बांधकाम चालू केंद्र
                                          </option>
                                          <option value="17">
                                            केंद्र शासकीय मालमत्ता
                                          </option>
                                          <option value="18">
                                            शासकीय वाणिज्य मालमत्ता{" "}
                                          </option>
                                          <option value="19">
                                            खाजगी शैक्षणिक मालमत्ता
                                          </option>
                                          <option value="20">
                                            शासकीय शाळा{" "}
                                          </option>
                                          <option value="21">
                                            शासकीय निवासी
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className=" col  ml-3 mt-2 ">
                                      <div className="form-group">
                                        <label>No of Rooms</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={noOfRoooms}
                                          onChange={(e) =>
                                            setNoOfRooms(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>

                                    <div class="col-md-2 ml-3   d-flex flex-column justify-content-end align-items-center">
                                      <div class="p-4 ">
                                        <button className="bg-success">
                                          Submission
                                        </button>
                                      </div>
                                    </div>

                                    <div className="col-md-1 p-1 ml-3">
                                      <div className="form-group">
                                        <label>Carpet Sq.Ft</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          // value={carpetSqFt}
                                          value={0}
                                          onChange={(e) =>
                                            setCarpetSqFt(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-1 p-1 ml-3">
                                      <div className="form-group">
                                        <label>Carpet Sq.Mtr</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          // value={carpetSqMtr}
                                          value={0}
                                          onChange={(e) =>
                                            setCarpetSqMtr(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 p-1 ml-3">
                                      <div className="form-group">
                                        <label>Rooms</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          // value={room}
                                          value={0}
                                          onChange={(e) =>
                                            setRoom(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 ml-2">
                                      <div className="form-group">
                                        <label>Registration</label>
                                        <select
                                          className="form-control"
                                          value={registration}
                                          onChange={(e) =>
                                            setRegistration(e.target.value)
                                          }
                                          style={{ height: 40 }}
                                        >
                                          <option value="0">Yes</option>
                                          <option value="1">No</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="col-md-1 ml-2">
                                      <div className="form-group">
                                        <label>Renter</label>
                                        <select
                                          className="form-control"
                                          value={renter}
                                          onChange={(e) =>
                                            setRenter(e.target.value)
                                          }
                                          style={{ height: 40 }}
                                        >
                                          <option value="0">Yes</option>

                                          <option value="1">No </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-3 mt-2  ml-2">
                                      <div className="form-group">
                                        <label>Renter Full Name</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={renterFirst}
                                          onChange={(e) =>
                                            setRenterFirstName(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    {/* <div className="row ml-4">
                                  <div className="d-flex justify-content-center align-items-center  ml-5">
                                    <div className="col d-flex justify-content-end align-items-start ">
                                      <button
                                        type="submit"
                                        className=" btn btn-sm btn-grd-success"
                                      >
                                        Copy
                                      </button>
                                    </div>
                                    <div className="col d-flex justify-content-start align-items-start ">
                                      <button
                                        type="submit"
                                        className="btn btn-sm btn-grd-info"
                                      >
                                        Paste
                                      </button>
                                    </div>
                                    </div>
                                    </div> */}
                                  </div>
                                  <div className="row">
                                    <div className="col-md-1 ml-2">
                                      <div className="form-group">
                                        <label>भाडेकरू </label>
                                        <select
                                          className="form-control"
                                          value={renter}
                                          onChange={(e) =>
                                            setRenter(e.target.value)
                                          }
                                          style={{ height: 40 }}
                                        >
                                          <option value="0">Yes</option>

                                          <option value="1">No </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-3 mt-1 ml-2">
                                      <div className="form-group">
                                        <label>भाडेकरू पूर्ण नाव </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={renterFirst}
                                          onChange={(e) =>
                                            setRenterFirstName(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-1 ml-2">
                                      <div className="form-group">
                                        <label>भोगवटधाराचे </label>
                                        <select
                                          className="form-control"
                                          value={renter}
                                          onChange={(e) =>
                                            setRenter(e.target.value)
                                          }
                                          style={{ height: 40 }}
                                        >
                                          <option value="0">Yes</option>

                                          <option value="1">No </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-3 mt-1  ml-2">
                                      <div className="form-group">
                                        <label>भोगवटधाराचे पूर्ण नाव </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={भोगवटधाराचे}
                                          onChange={(e) =>
                                            setभोगवटधाराचे(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-1 ml-2">
                                      <div className="form-group">
                                        <label>Occupier </label>
                                        <select
                                          className="form-control"
                                          value={renter}
                                          onChange={(e) =>
                                            setRenter(e.target.value)
                                          }
                                          style={{ height: 40 }}
                                        >
                                          <option value="0">Yes</option>

                                          <option value="1">No </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-1  ml-2">
                                      <div className="form-group">
                                        <label>Occupier Full Name</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={भोगवटधाराचे}
                                          onChange={(e) =>
                                            setभोगवटधाराचे(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>

                                    {/* <div className="col-md-2 p-4 ml-3">
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
                                      </div>

                                      <div className="col-md-2 p-4 ml-3">
                                        <div className="form-group">
                                          <label>आडनाव</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            value={आडनाव}
                                            onChange={(e) =>
                                              setआडनाव(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div> */}
                                    {/* <div className="col-md-2 p-4 ml-3">
                                        <div className="form-group">
                                          <label>Renter First Name</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            value={renterFirst}
                                            onChange={(e) =>
                                              setRenterFirstName(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-2 p-4 ml-3">
                                        <div className="form-group">
                                          <label>Middle</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            value={middle}
                                            onChange={(e) =>
                                              setMiddle(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-2 p-4 ml-3">
                                        <div className="form-group">
                                          <label>Last Name</label>
                                          <input
                                            className="form-control"
                                            type="text"
                                            value={lastName}
                                            onChange={(e) =>
                                              setLastName(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div> */}
                                  </div>
                                  <div className="row">
                                    <div class="col-md-1   ml-2  d-flex flex-column justify-content-start align-items-center">
                                      <div className="form-group">
                                        <label>
                                          Calculation
                                          <br />
                                          Rent(Rs)
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          // value={caluRent}
                                          value={0}
                                          onChange={(e) =>
                                            setCaluRent(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-1   ml-2 d-flex flex-column justify-content-start align-items-center">
                                      <div className="form-group ">
                                        <label>
                                          NonCalculation
                                          <br />
                                          Rent(Rs)
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          // value={nonCalRent}
                                          value={0}
                                          onChange={(e) =>
                                            setNonCalRent(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="d-flex justify-content-center align-items-center  ml-5">
                                        <div className="col d-flex justify-content-end align-items-start ">
                                          <button
                                            type="submit"
                                            className=" btn btn-sm  btn-info waves-effect waves-light"
                                          >
                                            Copy
                                          </button>
                                        </div>
                                        <div className="col d-flex justify-content-start align-items-start ">
                                          <button
                                            type="submit"
                                            className="btn btn-sm  btn-info waves-effect waves-light"
                                          >
                                            Paste
                                          </button>
                                        </div>

                                        <div className="col d-flex justify-content-end align-items-start ">
                                          <button
                                            type="submit"
                                            className="  btn btn-sm  btn-success waves-effect waves-light"
                                          >
                                            Add
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    {/* tabel 2 */}
                                    <div class="dt-responsive table-responsive">
                                      <table
                                        id="newcons-table"
                                        class="table table-striped table-bordered nowrap"
                                      >
                                        <thead>
                                          <tr>
                                            <th className="font-weight-bold">Sr no.</th>
                                            <th className="font-weight-bold">Floor</th>
                                            <th className="font-weight-bold">Const.Year</th>
                                            <th className="font-weight-bold">Const.Type</th>
                                            <th className="font-weight-bold">Group</th>
                                            <th className="font-weight-bold">Type Of Use</th>
                                            <th className="font-weight-bold">Carpet Area(ft)</th>
                                            <th className="font-weight-bold">Carpet Area(mtr)</th>
                                            <th className="font-weight-bold">Rooms</th>
                                            <th className="font-weight-bold">Registration</th>
                                            <th className="font-weight-bold">Renter</th>
                                            {/* <th>प्रथम नाव</th> */}
                                            {/* <th>मधले नाव</th> */}
                                            <th className="font-weight-bold">पूर्ण नाव</th>
                                            <th className="font-weight-bold">Calculate Rent(Rs)</th>
                                            <th className="font-weight-bold">Non Calculate Rent(Rs)</th>
                                            <th className="font-weight-bold">Full Name</th>
                                            <th className="font-weight-bold">Occupier</th>
                                            <th className="font-weight-bold">भोगवटादार चे पूर्ण नाव</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>1</td>
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
                                                  checked={registration}
                                                  onChange={(e) =>
                                                    setRegistration(
                                                      e.target.checked
                                                    )
                                                  }
                                                />
                                              </label>
                                            </td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  checked={renter}
                                                  onChange={(e) =>
                                                    setRenter(e.target.checked)
                                                  }
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
                                                  checked={renter}
                                                  onChange={(e) =>
                                                    setRenter(e.target.checked)
                                                  }
                                                />
                                              </label>
                                            </td>
                                            <td></td>
                                          </tr>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>2</td>
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
                                                  checked={registration}
                                                  onChange={(e) =>
                                                    setRegistration(
                                                      e.target.checked
                                                    )
                                                  }
                                                />
                                              </label>
                                            </td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  checked={renter}
                                                  onChange={(e) =>
                                                    setRenter(e.target.checked)
                                                  }
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
                                                  checked={renter}
                                                  onChange={(e) =>
                                                    setRenter(e.target.checked)
                                                  }
                                                />
                                              </label>
                                            </td>
                                            <td></td>
                                          </tr>
                                          <tr style={{ textAlign: "center" }}>
                                            <td>3</td>
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
                                                  checked={registration}
                                                  onChange={(e) =>
                                                    setRegistration(
                                                      e.target.checked
                                                    )
                                                  }
                                                />
                                              </label>
                                            </td>
                                            <td>
                                              <label>
                                                <input
                                                  type="checkbox"
                                                  checked={renter}
                                                  onChange={(e) =>
                                                    setRenter(e.target.checked)
                                                  }
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
                                                  checked={renter}
                                                  onChange={(e) =>
                                                    setRenter(e.target.checked)
                                                  }
                                                />
                                              </label>
                                            </td>
                                            <td></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>{" "}
                                  </div>
                                </fieldset>
                                {/* 3rd */}
                                <h3>Additional Property Information</h3>
                                <fieldset>
                                  {/* <div class="card-header">
                                    <h5> Additional Property Information </h5>
                                  </div> */}
                                  <div class="form-group row">
                                    <div className="col-md-2 mt-2 ml-2">
                                      <label>Mob./PhNo.</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        value={9420749113}
                                        onChange={(e) => setMob(e.target.value)}
                                      />
                                    </div>
                                    <div className="col-md-2 mt-2 ml-2">
                                      <div className="form-group">
                                        <label>Pan Card No.</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={2069}
                                          onChange={(e) =>
                                            setPanCard(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-2 ml-2">
                                      <div className="form-group ">
                                        <label>Email Id</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={emailId}
                                          onChange={(e) =>
                                            setEmailId(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-2 ml-2">
                                      <div className="form-group">
                                        <label>Adhar Card No.</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={707549912072}
                                          onChange={(e) =>
                                            setAdharCard(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-3 mt-2 ml-2">
                                      <div className="form-group">
                                        <label>Property Remark</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={propertyRemark}
                                          onChange={(e) =>
                                            setPropertyRemark(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-2 ml-2">
                                      <div className="form-group">
                                        <label>
                                          Is Combine
                                          <br />
                                          Property
                                        </label>
                                        <select
                                          className="form-control"
                                          value={isCombinedProp}
                                          onChange={(e) =>
                                            setIsCombinedProp(e.target.value)
                                          }
                                        >
                                          <option value="0">No.</option>
                                          <option value="1">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-1-md-1 mt-2 ml-4">
                                      <div className="form-group">
                                        <label>
                                          Plot Taxable
                                          <br />
                                          Area(SqFt)
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          // value={plotTaxableArea}
                                          value={4608}
                                          onChange={(e) =>
                                            setplotTaxableArea(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-2 ml-2">
                                      <div className="form-group">
                                        <label>
                                          Hearing
                                          <br /> Objection No.
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={hearingObject}
                                          onChange={(e) =>
                                            setHearingObject(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-2 ml-2">
                                      <div className="form-group">
                                        <label>
                                          Appeal Comm.
                                          <br /> Objective No.
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={appealComm}
                                          onChange={(e) =>
                                            setAppealComm(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-3 mt-2 ml-2">
                                      <div className="form-group">
                                        <label>
                                          Wadh Ghat
                                          <br /> Remark
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={wadhGhat}
                                          onChange={(e) =>
                                            setWadhGhat(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-2  ml-2">
                                      <div className="form-group">
                                        <label>IsProperty Changes</label>
                                        <select
                                          className="form-control"
                                          value={isCombinedProp}
                                          onChange={(e) =>
                                            setIsCombinedProp(e.target.value)
                                          }
                                          style={{ height: "35" }}
                                        >
                                          <option value="0">UnChange</option>
                                          <option value="1">Change</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-2 mt-2 ml-2">
                                      <div className="form-group">
                                        <label>Plot Area Type</label>
                                        <select
                                          type="text"
                                          className="form-control"
                                          name="tPropNo"
                                          id="tPropNo"
                                          value={plotArea}
                                          onChange={(e) =>
                                            setPlotArea(e.target.value)
                                          }
                                        >
                                          <option value="0">निवासी</option>
                                          <option value="1">औद्योगिक</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-1 mt-3 ml-2">
                                      <div className="form-group ">
                                        <label>Length</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="tPropNo"
                                          id="tPropNo"
                                          // value={length}
                                          value={0}
                                          onChange={(e) =>
                                            setLength(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    {/* <div className="form-group row">
                          <label
                            className="col "
                            
                          > */}
                                    <div className="col-md-1 mt-3 ml-2">
                                      <div className="form-group">
                                        <label>Width</label>
                                        {/* <div className="col-md-7"> */}
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="tPropNo"
                                          id="tPropNo"
                                          // value={length}
                                          value={0}
                                          onChange={(e) =>
                                            setWidth(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-1  ml-2">
                                      <div className="form-group">
                                        <label>
                                          DrainTax
                                          <br />
                                          FlatRate
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="tPropNo"
                                          id="tPropNo"
                                          // value={length}
                                          value={0}
                                          onChange={(e) =>
                                            setDrainTax(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <span className="col mt-4  ml-4 text-danger">
                                      Plot is taxable
                                    </span>

                                    <div className="col-md-1 ml-2">
                                      <div className="form-group ">
                                        <label>
                                          IsFlat
                                          <br />
                                          System
                                        </label>
                                        <select
                                          type="text"
                                          className="form-control "
                                          name="tPropNo"
                                          id="tPropNo"
                                          value={isFlat}
                                          onChange={(e) =>
                                            setIsFlat(e.target.value)
                                          }
                                        >
                                          <option value="0">No</option>
                                          <option value="1">Yes</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-1 mt-3 ml-2">
                                      <div className="form-group ">
                                        <label>BHK</label>
                                        <select
                                          type="text"
                                          className="form-control"
                                          name="tPropNo"
                                          id="tPropNo"
                                          value={BHK}
                                          onChange={(e) =>
                                            setBHK(e.target.value)
                                          }
                                        >
                                          <option value="0"></option>
                                          <option value="1">1</option>
                                          <option value="1">2</option>
                                          <option value="1">3</option>
                                          <option value="1">4</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-3 mt-2 ml-2">
                                      <div className="form-group ">
                                        <label>
                                          खुल्या भूखंडाच भो.प्रथम नाव
                                        </label>

                                        <input
                                          type="text"
                                          className="form-control"
                                          name="tPropNo"
                                          id="tPropNo"
                                          value={खुल्याभूखंडाच्या}
                                          onChange={(e) =>
                                            setखुल्याभूखंडाच्या(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-3 mt-1  ml-2">
                                      <div className="form-group">
                                        <label>
                                          भोगवटधाराचे पूर्ण नाव (OP)
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={भोगवटधाराचे}
                                          onChange={(e) =>
                                            setभोगवटधाराचे(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-3 mt-1  ml-2">
                                      <div className="form-group">
                                        <label>Occupier Full Name(OP)</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          value={भोगवटधाराचे}
                                          onChange={(e) =>
                                            setभोगवटधाराचे(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>

                                    {/* <div className="col-md-2 mt-2 ml-2">
                                        <div className="form-group ">
                                          <label className="col">
                                            मधले नाव
                                          </label>

                                          <input
                                            type="text"
                                            className="form-control"
                                            name="tPropNo"
                                            id="tPropNo"
                                            value={मधलेनाव}
                                            onChange={(e) =>
                                              setमधलेनाव(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-2 mt-2 ml-4">
                                        <div className="form-group">
                                          <label>आडनाव</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="tPropNo"
                                            id="tPropNo"
                                            value={आडनाव}
                                            onChange={(e) =>
                                              setआडनाव(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div> */}
                                  </div>
                                </fieldset>
                                {/* 4th */}

                                {/* images */}
                                <h3>Upload Photo & Plan</h3>

                                <fieldset>

                                  <div className="row">
                                    <div className=" col-lg-6 col-sm-6 col-md-6">
                                      <h6 className="  text-center text-info font-weight-bold">
                                        Upload Photo
                                      </h6>

                                      <div className="form-group row mt-2">
                                        <div class="col-lg-6 col-sm-6">
                                          <div class="thumbnail">
                                            <div class="thumb">
                                              <label >
                                                <a
                                                  href="../files/assets/images/gallery-grid/1.png"
                                                  data-lightbox="1"
                                                  data-title="My caption 1"
                                                >
                                                  <img
                                                    src="../files/assets/images/gallery-grid/1.png"
                                                    alt=""
                                                    class="img-fluid img-thumbnail"
                                                  />
                                                </a>
                                              </label>
                                              <input
                                                type="file"
                                                id="fileInput"
                                                onchange="handleAttachmentClick(this)"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-6">
                                          <div class="thumbnail">
                                            <div class="thumb">
                                              <label >

                                                <a
                                                  href="../files/assets/images/gallery-grid/1.png"
                                                  data-lightbox="2"
                                                  data-title="My caption 2"
                                                >
                                                  <img
                                                    src="../files/assets/images/gallery-grid/1.png"
                                                    alt=""
                                                    class="img-fluid img-thumbnail"
                                                  />
                                                </a>
                                              </label>
                                              <input
                                                type="file"
                                                id="fileInput"
                                                onchange="handleAttachmentClick(this)"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-6">
                                          <div class="thumbnail">
                                            <div class="thumb">
                                              <label>
                                                <a
                                                  href="../files/assets/images/gallery-grid/1.png"
                                                  data-lightbox="3"
                                                  data-title="My caption 3"
                                                >
                                                  <img
                                                    src="../files/assets/images/gallery-grid/1.png"
                                                    alt=""
                                                    class="img-fluid img-thumbnail"
                                                  />
                                                </a></label>
                                              <input
                                                type="file"
                                                id="fileInput"
                                                onchange="handleAttachmentClick(this)"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div class="col-lg-6 col-sm-6">
                                          <div class="thumbnail">
                                            <div class="thumb">
                                              <label>
                                                <a
                                                  href="../files/assets/images/gallery-grid/1.png"
                                                  data-lightbox="4"
                                                  data-title="My caption 4"
                                                >
                                                  <img
                                                    src="../files/assets/images/gallery-grid/1.png"
                                                    alt=""
                                                    class="img-fluid img-thumbnail"
                                                  />
                                                </a></label>
                                              <input
                                                type="file"
                                                id="fileInput"
                                                onchange="handleAttachmentClick(this)"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/*  */}

                                    <div className="col-lg-6 col-sm-6 col-md-6 ">
                                      <h6 className=" text-center  text-info font-weight-bold ml-3">
                                        Plan
                                      </h6>
                                      <div class=" mt-3 col-lg-12 col-sm-12">
                                        <div class="thumbnail">
                                          <div class="thumb">
                                            <label className="text-center">
                                              <a
                                                href="../files/assets/images/gallery-grid/1.png"
                                                data-lightbox="1"
                                                data-title="My caption 1"
                                              >
                                                <img
                                                  src="../files/assets/images/gallery-grid/1.png"
                                                  alt=""
                                                  class="img-fluid img-thumbnail"
                                                />
                                              </a></label>
                                            <input
                                              type="file"
                                              id="fileInput"
                                              onchange="handleAttachmentClick(this)"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>

                                {/* Plan */}
                                {/* <h3></h3> */}
                                {/* <fieldset>
                                  <h5>Plan upload</h5>
                                  <div class="card-header">
                                    <h5>Upload Photo & Plan</h5>
                                  </div>
                                  <div class="card-block masonry-image">
                                    <div class="default-grid ">
                                      <div class="row lightboxgallery-popup">
                                        <div class="col-sm-3 ">
                                          <div class="masonry-media">
                                            <a class="media-middle" href="#!">
                                              <img
                                                class="img-fluid"
                                                src="../files/assets/images/gallery-grid/1.png"
                                                alt="masonary"
                                              />
                                            </a>
                                          </div>
                                        </div>
                                        <div class="col-sm-3 ">
                                          <div class="masonry-media">
                                            <a class="media-middle" href="#!">
                                              <img
                                                class="img-fluid"
                                                src="../files/assets/images/gallery-grid/1.png"
                                                alt="masonary"
                                              />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div class="col-sm-3 ">
                                          <div class="masonry-media">
                                            <a class="media-middle" href="#!">
                                              <img
                                                class="img-fluid"
                                                src="../files/assets/images/gallery-grid/1.png"
                                                alt="masonary"
                                              />
                                            </a>
                                          </div>
                                        </div>
                                        <div class="col-sm-3 ">
                                          <div class="masonry-media">
                                            <a class="media-middle" href="#!">
                                              <img
                                                class="img-fluid"
                                                src="../files/assets/images/gallery-grid/1.png"
                                                alt="masonary"
                                              />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset> */}
                              </form>
                            </section>

                            {showUpdateReturns && (
                              <div className="d-flex align-items-center justify-content-center" style={{ marginTop: "-550px" }}>
                                <UpdateReturnTaxes />
                              </div>
                            )}

                            {showSocialReturns && (
                              <div style={{ marginTop: "-600px" }}>
                                <SocialDeatils   ></SocialDeatils>
                              </div>
                            )}
                            {showOldReturns && (
                              <div style={{ marginTop: "-600px" }}>
                                <OldFloor />
                              </div>
                            )}
                            {showRvReturns && (
                              <div style={{ marginTop: "-600px" }}>
                                < DateF6 />
                              </div>
                            )}

                          </div>
                        </div>
                      </div></div>


                    {/* Footer */}
                    <div className="border " style={{ backgroundColor: "whitesmoke" }} >
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
                              12271
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

                          <div className="col-5 col-sm-4 col-md-2 col-lg-1 col-xl-2">
                            <button
                              type="button"
                              className="btn btn-grd-info btn-sm btn-block"
                            >
                              EditDetails
                            </button>
                          </div>

                          <div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1">
                            <button
                              type="button"
                              className="btn btn-grd-success btn-sm btn-block"
                            >
                              View
                            </button>
                          </div>
                        </div>


                      </div>
                    </div>
                    {/* Footer End */}


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Data;
