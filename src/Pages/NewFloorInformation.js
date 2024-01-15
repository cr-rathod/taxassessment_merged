import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DataEntry = () => {
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


  const [assignments, setAssignments] = useState([]);

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Data Entry</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="row">
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>Zone No:</label>
                          <input
                            className="form-control"
                            type="text"
                            // value={zoneNo}
                            value={1}
                            onChange={(e) => setZoneNo(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>Ward No:</label>
                          <input
                            className="form-control"
                            type="text"
                            // value={wardNo}
                            value={1}
                            onChange={(e) => setWardNo(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>Property No:</label>
                          <input
                            className="form-control"
                            type="text"
                            value={propertyNo}
                            onChange={(e) => setPropertyNo(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>Partition No:</label>
                          <input
                            className="form-control"
                            type="text"
                            value={partitionNo}
                            onChange={(e) => setPartitionNo(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>Open Plot:</label>
                          <select
                            className="form-control"
                            value={openPlot}
                            onChange={(e) => setOpenPlot(e.target.value)}
                            style={{ height: "35px" }}
                          >
                            <option value="0">No</option>
                            <option value="1">Property 1</option>
                            <option value="2">Property 2</option>
                            <option value="3">Property 3</option>
                            <option value="4">Property 4</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>CSN:</label>
                          <input
                            className="form-control"
                            type="text"
                            value={csn}
                            onChange={(e) => setCSN(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>Plot No:</label>
                          <input
                            className="form-control"
                            type="text"
                            value={plotNo}
                            onChange={(e) => setPlotNo(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 p-1">
                        <div className="form-group">
                          <label>Property Description:</label>
                          <select
                            className="form-control"
                            value={propertyDescription}
                            onChange={(e) =>
                              setPropertyDescription(e.target.value)
                            }
                            style={{ height: "35px" }}
                          >
                            <option value="0">निवासी</option>
                            <option value="1">Property 1</option>
                            <option value="2">Property 2</option>
                            <option value="3">Property 3</option>
                            <option value="4">Property 4</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>Plot Art SqFt:</label>
                          <input
                            className="form-control"
                            type="text"
                            // value={plotArSqFt}
                            value={1080}
                            onChange={(e) => setPlotArSqFt(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>Plot Art SqMt:</label>
                          <input
                            className="form-control"
                            type="text"
                            // value={plotArSqMt}
                            value={0}
                            onChange={(e) => setPlotArSqMt(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>Built Up Area:</label>
                          <input
                            className="form-control"
                            type="text"
                            value={builtUp}
                            onChange={(e) => setBuiltUp(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <h5 style={{ color: "blue" }}>Owner Details</h5>
                  <form>
                    <div className="row">
                      <div className="col p-1">
                        <div className="form-group">
                          <label>शिर्षक</label>
                          <select
                            className="form-control"
                            value={शिर्षक}
                            onChange={(e) => setशिर्षक(e.target.value)}
                            style={{ height: "35px" }}
                          >
                            <option value="0"></option>
                            <option value="1">Mr.</option>
                            <option value="2">Mrs.</option>
                            <option value="3">Miss</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>प्रथम नाव</label>
                          <input
                            className="form-control"
                            type="text"
                            value={प्रथमनाव}
                            onChange={(e) => setप्रथमनाव(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 p-1">
                        <div className="form-group">
                          <label>मधले नाव</label>
                          <input
                            className="form-control"
                            type="text"
                            value={मधलेनाव}
                            onChange={(e) => setमधलेनाव(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 p-1">
                        <div className="form-group">
                          <label>आडनाव</label>
                          <input
                            className="form-control"
                            type="text"
                            value={आडनाव}
                            onChange={(e) => setआडनाव(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 p-1">
                        <div className="form-group">
                          <label>पत्त</label>
                          <input
                            className="form-control"
                            type="text"
                            value={पत्त}
                            onChange={(e) => setपत्ता(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 p-1">
                        <div className="form-group">
                          <label>दुकान/इमारतचे नाव </label>
                          <input
                            className="form-control"
                            type="text"
                            value={दुकान}
                            onChange={(e) => setदुकान(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>दुकान/Flat नं</label>
                          <input
                            className="form-control"
                            type="text"
                            value={दुकानF}
                            onChange={(e) => setदुकानF(e.target.value)}
                          />
                        </div>
                      </div>
                      <div
                        className="col-md-1 p-1"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <button style={{color:'blue', marginLeft:'10px',width:'51px'}}>Copy</button>{" "}
                      </div>

                      <div className="col-md-12 d-flex justify-content-end align-items-start">
                        <button
                          style={{ marginTop: "-30px", marginRight: "25px",color:"blue" }}
                        >
                          Paste
                        </button>{" "}
                      </div>
                    </div>
                  </form>
                  <form>
                    <div className="row">
                      <div className="col p-1">
                        <div className="form-group">
                          <label>Title</label>
                          <select
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{
                              height: "35px",
                              backgroundColor: "gray",
                            }}
                          >
                            <option value="0">Other</option>
                            <option value="1">Mr.</option>
                            <option value="2">Mrs.</option>
                            <option value="3">Miss</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            className="form-control"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 p-1">
                        <div className="form-group">
                          <label>Middle Name</label>
                          <input
                            className="form-control"
                            type="text"
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 p-1">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            className="form-control"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 p-1">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            className="form-control"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-2 p-1">
                        <div className="form-group">
                          <label>Shop/Bid Name </label>
                          <input
                            className="form-control"
                            type="text"
                            value={shopBidName}
                            onChange={(e) => setShopBidName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-1 p-1">
                        <div className="form-group">
                          <label>Shop/Flat No.</label>
                          <input
                            className="form-control"
                            type="text"
                            value={shopFlatName}
                            onChange={(e) => setShopFlatName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div
                        className="col-md-1 p-1"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <button
                          style={{ backgroundColor: "black", color: "White" }}
                        >
                          Add
                        </button>{" "}
                      </div>
                    </div>
                  </form>
                </div>
{/* Close two divs after completing the table */}          
              {/* <div className="card">
                <div className="card-header"></div>
                <div className="card-block"> */}
                  <div class="dt-responsive table-responsive">
                    <table class="table table-striped table-bordered nowrap" >
                      <thead >
                        <tr >
                          <th>isPrime</th>
                          <th>शिर्षक</th>
                          <th>प्रथमनाव</th>
                          <th>मधलेनाव</th>
                          <th>आडनाव</th>
                          <th>पत्त</th>
                          <th>दुकान/इमारतचे नाव</th>
                          <th>दुकान/Flat नं</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label style={{marginLeft:"30px",width:"55px"}}>
                              <input
                                type="checkbox"
                                checked={isPrime}
                                onChange={(e) => setIsPrime(e.target.checked)}
                                />
                            </label>
                          </td>
                          <td>इतर</td>
                          <td>धारक</td>
                          <td></td>
                          <td></td>
                          <td>pune</td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                               </div>

{/* 2nd pge */}
                <div className="card">
                <div className="card-header">
                  <h5>New Floor Information</h5>
                </div>
                <div className="card-block">
                </div>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-1 ">
                      <div className="form-group">
                        <label style={{marginLeft:"8px",marginTop:"3px"}}>Floor</label>
                        <select
                          className="form-control"
                          value={floor}
                          onChange={(e) => setFloor(e.target.value)}
                          style={{ height: '35px', width:"55px",marginLeft:"7px" }}    >
                          <option value="0"></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label>Year</label>
                        <input
                          className="form-control"
                          type="text"
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                        style={{marginLeft:"-33px"}}/>
                      </div>
                    </div>
                    <div className="col-md-2 p-1">
                      <div className="form-group">
                        <label>Construction Type</label>
                        <select
                          className="form-control"
                          value={constructionType}
                          onChange={(e) => setConstructionType(e.target.value)}
                          style={{ height: '35px',marginLeft:"-37px" }} >
                          <option value="0"></option>
                          <option value="1">Property 1</option>
                          <option value="2">Property 2</option>
                          <option value="3">Property 3</option>
                          <option value="4">Property 4</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label style={{marginLeft:"-20px"}}>Type of Use</label>
                        <select
                          className="form-control"
                          value={typeOfUse}
                          onChange={(e) => setTypeOfUse(e.target.value)}
                          style={{ height:'35px',marginLeft:"-40px" }} >
                          <option value="0">No</option>
                          <option value="1">Property 1</option>
                          <option value="2">Property 2</option>
                          <option value="3">Property 3</option>
                          <option value="4">Property 4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label style={{marginLeft:"-30px"}}>No of Rooms</label>
                        <input
                          className="form-control"
                          type="text"
                          value={noOfRoooms}
                          onChange={(e) => setNoOfRooms(e.target.value)}
                          style={{ height:'35px',marginLeft:"-40px" }} 

                       />
                      </div>
                    </div>

                    <div className="col-md-1 p-1 ">
                      <div style={{ display: 'block', alignItems: 'center' }}>
                        <button  style={{ color: "blue", height: '35px', marginTop:"29px" ,marginLeft:"-44px"}}>Submission</button>
                      </div>
                    </div>

                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label style={{marginLeft:"-50px"}}>Carpet Sq.Ft</label>
                        <input
                          className="form-control"
                          type="text"
                          // value={carpetSqFt}
                          value={0}
                          style={{ height:'35px',marginLeft:"-60px" }} 

                          onChange={(e) => setCarpetSqFt(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label style={{marginLeft:"-57px"}}>Carpet Sq.Mtr</label>
                        <input
                          className="form-control"
                          type="text"
                          // value={carpetSqMtr}
                          value={0}
                          style={{ height:'35px',marginLeft:"-65px" }} 

                          onChange={(e) => setCarpetSqMtr(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label style={{marginLeft:"-41px"}}>Rooms</label>
                        <input
                          className="form-control"
                          type="text"
                          // value={room}
                          value={0}
                          style={{ height:'35px',marginLeft:"-70px" }} 

                          onChange={(e) => setRoom(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label  style={{marginLeft:"-72px"}}>Registration</label>
                        <select
                          className="form-control"
                          value={registration}
                          onChange={(e) => setRegistration(e.target.value)} 
                          style={{ height: '35px',marginLeft:"-76px" ,width:"70px"}}
                        >
                          <option value="0">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label style={{marginLeft:"-98px"}}>Renter</label>
                        <select
                          className="form-control"
                          value={renter}
                          onChange={(e) => setRenter(e.target.value)} 
                          style={{ height:'35px',marginLeft:"-110px",width:"70px" }} 

                        >
                          <option value="0"></option>
                          <option value="1">No </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-1 p-1" style={{ display: 'flex', alignItems: 'center' }}>
                    <button style={{ color: "blue", marginTop:"-90px" , marginLeft:"1157px"  }}>Copy</button>
                    </div>

                    <div className="col-md-1  " style={{ display: 'flex', alignItems: 'center' }}>
                      <button style={{ color: "blue", marginTop:"-90px" , marginLeft:"1090px"  }}>Paste</button>
                    </div>
                  </div>
                </form>
                <form>
  <div className="row">
    <div className="col-md-2 p-2">
      <div className="form-group">
        <label style={{marginLeft:"15px"}}>भोगवट धाराचे प्रथम नाव</label>
        <input
          className="form-control"
          type="text"
          value={भोगवटधाराचे}
          style={{width:"150px", marginLeft:"9px",marginTop:"1px"}}

          onChange={(e) => setभोगवटधाराचे(e.target.value)}
        />
      </div>
    </div>

    <div className="col-md-1 p-2">
      <div className="form-group">
        <label >मधले नाव</label>
        <input
          className="form-control"
          type="text"
          value={मधलेनाव}
          style={{width:"140px", marginLeft:"-58px",marginTop:"1px"}}
          onChange={(e) => setमधलेनाव(e.target.value)}
        />
      </div>
    </div>

    <div className="col-md-1 p-2">
      <div className="form-group">
        <label>आडनाव</label>
        <input
          className="form-control"
          type="text"
          style={{width:"140px", marginLeft:"-26px",marginTop:"1px"}}

          value={आडनाव}
          onChange={(e) => setआडनाव(e.target.value)}
        />
      </div>
    </div>

    <div className="col-md-2 p-2">
      <div className="form-group">
        <label style={{marginLeft:"18px"}} >Renter First Name</label>
        <input
          className="form-control"
          type="text"
          value={renterFirst}
          style={{width:"140px", marginLeft:"7px",marginTop:"2px"}}
          onChange={(e) => setRenterFirstName(e.target.value)}
        />
      </div>
    </div>

    <div className="col-md-1 p-2">
      <div className="form-group">
        <label style={{marginLeft:"-20px"}}>Middle</label>
        <input
          className="form-control"
          type="text"
          value={middle}
          style={{width:"140px", marginLeft:"-69px",marginTop:"2px"}}
          onChange={(e) => setMiddle(e.target.value)}
        />
      </div>
    </div>

    <div className="col-md-2 p-2">
      <div className="form-group">
        <label style={{marginLeft:"4px"}}>Last Name</label>
        <input
          className="form-control"
          type="text"
          value={lastName}
          style={{width:"140px", marginLeft:"-36px",marginTop:"2px"}}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    </div>

    <div className="col-md-1 p-1">
      <div className="form-group">
        <label  style={{marginLeft:"-110px",marginTop:"-19px"}}>Calculation <br/>Rent(Rs)</label>
        <input
          className="form-control"
          type="text"
          // value={caluRent}
          value={0}

          style={{width:"80px", marginLeft:"-109px",marginTop:"4px"}}

          onChange={(e) => setCaluRent(e.target.value)}
        />
      </div>
    </div>

    <div className="col-md-1 p-2">
      <div className="form-group">
        <label style={{marginLeft:"-140px", marginTop:'-119px'}}>Non Calculation <br/>Rent(Rs)</label>
        <input
          className="form-control"
          type="text"
          // value={nonCalRent}
          value={0}

          style={{width:"80px", marginLeft:"-140px",marginTop:"2px"}}

          onChange={(e) => setNonCalRent(e.target.value)}
        />
      </div>
    </div>

    <div className="col">
  <button style={{marginLeft:"-159px", backgroundColor: 'black', color:"white", marginTop: "40px" }}>Add</button>
</div>

  </div>
</form>
<div class="dt-responsive table-responsive">
                    <table class="table table-striped table-bordered nowrap" >
                      <thead >
                        <tr >
                          <th>Floor</th>
                          <th>Const.Year</th>
                          <th>Const.Type</th>
                          <th>Type Of Use</th>
                          <th>Carpet Area(ft)</th>
                          <th>Carpet Area(mtr)</th>
                          <th>Rooms</th>
                          <th>Registration</th>
                          <th>Renter</th>
                          <th>प्रथम नाव</th>
                          <th>मधले नाव</th>
                          <th>आडनाव</th>
                          <th>Calculate Rent(Rs)</th>
                          <th>Non Calculate Rent(Rs)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>G</td>
                          <td>2000</td>
                          <td>C</td>
                          <td>R</td>
                          <td>200</td>
                          <td>18.58</td>
                          <td>1</td>
                          <td>
                            <label style={{marginLeft:"30px",width:"55px"}}>
                              <input
                                type="checkbox"
                                checked={registration}
                                onChange={(e) => setRegistration(e.target.checked)}
                                />
                            </label>
                          </td>
                          <td>
                            <label style={{marginLeft:"30px",width:"55px"}}>
                              <input
                                type="checkbox"
                                checked={renter}
                                onChange={(e) => setRenter(e.target.checked)}
                                />
                            </label>
                          </td>
                          <td>मारोती</td>
                          <td></td>
                          <td>गवळी</td>
                          <td>0</td>
                          <td>0</td>

                        </tr>
                      </tbody>
                    </table>
                               </div>


                {/* 3rd additional information */}
                 <div className="card">
                <div className="card-header">
                <h4 style={{ color: "blue" }}>
                  Additional Property Information
                </h4>
                </div></div>
                <div className="card-block">
                </div>
                <form>
                <div className="row">
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label style={{ marginLeft: "18px" }}>Mob./PhNo.</label>
                        <input
                          className="form-control"
                          type="text"
                          value={mob}
                          style={{ width: "100px",marginLeft:'11px' }}
                          onChange={(e) => setMob(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label style={{ marginLeft: "8px" }}>PanCard No.</label>
                        <input
                          className="form-control"
                          type="text"
                          value={panCard}
                          style={{ marginLeft: "4px", width: "99px" }}
                          onChange={(e) => setPanCard(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label style={{ marginLeft: "6px" }}>Email Id</label>
                        <input
                          className="form-control"
                          type="text"
                          value={emailId}
                          style={{ marginLeft: "-5px", width: "140px" }}
                          onChange={(e) => setEmailId(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-2 p-1">
                      <div className="form-group">
                        <label style={{ marginLeft: "40px" }}>
                          Adhar Card No.
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={adharCard}
                          style={{ marginLeft: "28px", width: "110px" }}
                          onChange={(e) => setAdharCard(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label
                          style={{ marginLeft: "-69px", marginTop: "-16px" }}
                        >
                          Is Combined
                          <br /> Property
                        </label>
                        <select
                          className="form-control"
                          value={isCombinedProp}
                          onChange={(e) => setIsCombinedProp(e.target.value)}
                          style={{
                            marginLeft: "-79px",
                            marginTop: "-4px",
                            height: "35px",
                          }}
                        >
                          <option value="0">No.</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label style={{ marginLeft: "-80px" }}>
                          Property Remark
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={propertyRemark}
                          style={{ marginLeft: "-82px", width: "150px" }}
                          onChange={(e) => setPropertyRemark(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label
                          style={{ marginLeft: "-39px", marginTop: "-12px" }}
                        >
                          Plot Taxable <br />
                          Area(SqFt)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          // value={plotTaxableArea}
                          value={1080}
                          style={{
                            marginLeft: "-40px",
                            width: "90px",
                            marginTop: "-9px",
                          }}
                          onChange={(e) => setplotTaxableArea(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label
                          style={{ marginLeft: "-59px", marginTop: "-12px" }}
                        >
                          Hearing
                          <br /> Objection No.
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={hearingObject}
                          style={{ marginLeft: "-59px", marginTop: "-9px" }}
                          onChange={(e) => setHearingObject(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label
                          style={{ marginLeft: "-61px", marginTop: "-12px" }}
                        >
                          Appeal Comm.<br/> Objective No.
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={appealComm}
                          style={{ marginLeft: "-67px", marginTop: "-9px" }}
                          onChange={(e) => setAppealComm(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label
                          style={{ marginLeft: "-70px", marginTop: "-12px" }}
                        >
                          WadhGhat Remark
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={wadhGhat}
                          style={{ marginLeft: "-75px", width: "140px" }}
                          onChange={(e) => setWadhGhat(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 ">
                      <div className="form-group">
                        <label
                          style={{ marginLeft: "-55px", marginBottom: "99px" }}
                        >
                          IsPropertyChanges
                        </label>
                        <select
                          className="form-control"
                          value={isCombinedProp}
                          onChange={(e) => setIsCombinedProp(e.target.value)}
                          style={{
                            marginLeft: "-50px",
                            marginTop: "-87px",
                            height: "35px",
                            width: "120px",
                          }}
                        >
                          <option value="0">UnChange</option>
                          <option value="1">Change</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col "
                        style={{ marginTop: "6px", fontSize: "14px" ,marginLeft:'19px'}}
                      >
                        Plot Area Type
                      </label>
                      <div className="col-md-1">
                        <select
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          value={plotArea}
                          onChange={(e) => setPlotArea(e.target.value)}
                          style={{
                            marginLeft: "-55px",
                            width: "90px",
                            height: "35px",
                          }}
                        >
                          <option value="0">निवासी</option>
                          <option value="1">Property 1</option>
                          <option value="2">Property 2</option>
                          <option value="3">Property 3</option>
                          <option value="4">Property 4</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col "
                        style={{
                          marginLeft: "44px",
                          marginTop: "6px",
                          fontSize: "14px",
                        }}
                      >
                        खुल्या भूखंडाच भो.प्रथम नाव
                      </label>
                      <div className="col-md-1">
                        <input
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          value={खुल्याभूखंडाच्या}
                          onChange={(e) => setखुल्याभूखंडाच्या(e.target.value)}
                          style={{
                            marginLeft: "-56px",
                            width: "90px",
                            height: "35px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col "
                        style={{
                          marginLeft: "39px",
                          marginTop: "6px",
                          fontSize: "14px",
                        }}
                      >
                        मधले नाव
                      </label>
                      <div className="col-md-1">
                        <input
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          value={मधलेनाव}
                          onChange={(e) => setमधलेनाव(e.target.value)}
                          style={{
                            marginLeft: "-56px",
                            width: "90px",
                            height: "35px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col "
                        style={{
                          marginLeft: "38px",
                          marginTop: "6px",
                          fontSize: "14px",
                        }}
                      >
                        आडनाव
                      </label>
                      <div className="col-md-1">
                        <input
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          value={आडनाव}
                          onChange={(e) => setआडनाव(e.target.value)}
                          style={{
                            marginLeft: "-56px",
                            width: "90px",
                            height: "35px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col "
                        style={{
                          fontWeight: "bold",
                          marginLeft: "44px",
                          marginTop: "6px",
                          fontSize: "14px",
                        }}
                      >
                        Length
                      </label>
                      <div className="col-md-1">
                        <input
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          // value={length}
                          value={0}
                          onChange={(e) => setLength(e.target.value)}
                          style={{
                            marginLeft: "-38px",
                            width: "49px",
                            height: "35px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col "
                        style={{
                          fontWeight: "bold",
                          marginLeft: "19px",
                          marginTop: "6px",
                          fontSize: "14px",
                        }}
                      >
                        Width
                      </label>
                      <div className="col-md-1">
                        <input
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          // value={length}
                          value={0}
                          onChange={(e) => setWidth(e.target.value)}
                          style={{
                            marginLeft: "-38px",
                            width: "49px",
                            height: "35px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col "
                        style={{
                          marginLeft: "19px",
                          fontSize: "14px",
                        }} >
                        DrainTax <br/>FlatRate
                      </label>
                      <div className="col-md-1">
                        <input
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          // value={length}
                          value={0}
                          onChange={(e) => setDrainTax(e.target.value)}
                          style={{
                            marginLeft: "-49px",
                            width: "80px",
                            height: "35px",
                          }}
                        />
                      </div>
                    </div>
             <span style={{color:'red', marginLeft:'45px',marginTop:'3px'}}>Plot is taxable</span>
             
             <div className="form-group row">
                      <label
                        className="col "
                        style={{ marginLeft:'19px',marginTop: "6px", fontSize: "14px" }}
                      >
                        Is Flat System
                      </label>
                      <div className="col-md-1">
                        <select
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          value={isFlat}
                          onChange={(e) => setIsFlat(e.target.value)}
                          style={{
                            marginLeft: "-55px",
                            width: "90px",
                            height: "35px",
                          }}
                        >
                          <option value="0">No</option>
                          <option value="1">Yes</option>
                         
                        </select>
                      </div>
                    </div>  
                    <div className="form-group row">
                      <label
                        className="col "
                        style={{ marginLeft:'45px',marginTop: "6px", fontSize: "14px" }}
                      >
                        BHK
                      </label>
                      <div className="col-md-1">
                        <select
                          type="text"
                          className="form-control"
                          name="tPropNo"
                          id="tPropNo"
                          value={BHK}
                          onChange={(e) => setBHK(e.target.value)}
                          style={{
                            marginLeft: "-56px",
                            width: "90px",
                            height: "35px",
                            backgroundColor:'gray'
                          }}
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
</form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEntry;




