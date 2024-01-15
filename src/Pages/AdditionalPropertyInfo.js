// import React, { useState } from "react";

// const AdditionalPropertyInfo = () => {
//   const [mob, setMob] = useState("");
//   const [panCard, setPanCard] = useState("");
//   const [emailId, setEmailId] = useState("");
//   const [adharCard, setAdharCard] = useState("");
//   const [isCombinedProp, setIsCombinedProp] = useState("");
//   const [propertyRemark, setPropertyRemark] = useState("");
//   const [plotTaxableArea, setPlotTaxableArea] = useState("");
//   const [hearingObject, setHearingObject] = useState("");
//   const [appealComm, setAppealComm] = useState("");
//   const [wadhGhat, setWadhGhat] = useState("");
//   const [isProperty, setIsProperty] = useState("");
//   const[plotArea, setPlotArea]=useState("");
//   const [खुल्याभूखंडाच्या, setखुल्याभूखंडाच्या] = useState("");
//   const [मधलेनाव, setमधलेनाव] = useState("");
//   const [आडनाव, setआडनाव] = useState("");
//   const [length, setLength] = useState("");
//   const [width, setWidth] = useState("");
//   const [drainTax, setDrainTax] = useState("");
//   const [isFlat, setIsFlat] = useState("");
//   const [BHK, setBHK] = useState("");


//   return (
//     <div className="pcoded-content">
//       <div className="pcoded-inner-content">
//         <div className="main-body">
//           <div className="page-wrapper">
//             <div className="page-body">
//               <div className="container mt-1">
//                 <h4 style={{ color: "blue" }}>Additional Property Information</h4>
//                 <span>
//                   Add class of <code>.form-control</code> with{" "}
//                   <code>&lt;input&gt;</code> tag
//                 </span>
//                 <div className="card-block">
//                   <div className="row">
//                     <div className="col-md-12">
//                       <div id="wizard">
//                         <section>
//                           <form
//                             className="wizard-form"
//                             id="example-advanced-form"
//                             action="#"
//                           >
//                             <h3> Registration </h3>
//                             <fieldset>
//                               <div className="row">
//                                 <div className="col-md-1 p-1">
//                                   <div className="form-group row">
//                                     <label style={{ marginLeft: "8px" }}>Mob./PhNo.</label>
//                                     <input
//                                       className="form-control"
//                                       type="text"
//                                       value={mob}
//                                       style={{ width: "109px", marginLeft: "-10px" }}
//                                       onChange={(e) => setMob(e.target.value)}
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className="col-md-1 p-1">
//                                   <div className="form-group row">
//                                     <label style={{ marginLeft: "8px" }}>PanCard No.</label>
//                                     <input
//                                       className="form-control"
//                                       type="text"
//                                       value={panCard}
//                                       style={{ marginLeft: "4px", width: "99px" }}
//                                       onChange={(e) => setPanCard(e.target.value)}
//                                     />
//                                   </div>
//                                 </div>
//                                 {/* ... Add more form inputs here */}
//                                 <div className="col-md-1 p-1">
//                     <div class="form-group row">
//                         <label style={{ marginLeft: "15px" }}>Email Id</label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           value={emailId}
//                           style={{ marginLeft: "8px", width: "140px" }}
//                           onChange={(e) => setEmailId(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-2 p-1">
//                     <div class="form-group row">
//                         <label style={{ marginLeft: "47px" }}>
//                           Adhar Card No.
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           value={adharCard}
//                           style={{ marginLeft: "40px", width: "110px" }}
//                           onChange={(e) => setAdharCard(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-1 p-1">
//                     <div class="form-group row">
//                         <label
//                           style={{ marginLeft: "-26px", marginTop: "-16px" }}
//                         >
//                           Is Combined
//                           <br /> Property
//                         </label>
//                         <select
//                           className="form-control"
//                           value={isCombinedProp}
//                           onChange={(e) => setIsCombinedProp(e.target.value)}
//                           style={{
//                             marginLeft: "-40px",
//                             marginTop: "-4px",
//                             height: "35px",
//                           }}
//                         >
//                           <option value="0">No.</option>
//                           <option value="1">1</option>
//                           <option value="2">2</option>
//                           <option value="3">3</option>
//                           <option value="4">4</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="col-md-1 p-1">
//                       <div className="form-group">
//                         <label style={{ marginLeft: "-30px" }}>
//                           Property Remark
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           value={propertyRemark}
//                           style={{ marginLeft: "-48px", width: "150px" }}
//                           onChange={(e) => setPropertyRemark(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-1 p-1">
//                       <div className="form-group">
//                         <label
//                           style={{ marginLeft: "9px", marginTop: "-12px" }}
//                         >
//                           Plot Taxable <br />
//                           Area(SqFt)
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           // value={plotTaxableArea}
//                           value={1080}
//                           style={{
//                             marginLeft: "6px",
//                             width: "90px",
//                             marginTop: "-9px",
//                           }}
//                           onChange={(e) => setPlotTaxableArea(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-1 p-1">
//                       <div className="form-group">
//                         <label
//                           style={{ marginLeft: "-1px", marginTop: "-12px" }}
//                         >
//                           Hearing
//                           <br /> Objection No.
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           value={hearingObject}
//                           style={{ marginLeft: "1px", marginTop: "-9px" }}
//                           onChange={(e) => setHearingObject(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-1 p-1">
//                       <div className="form-group">
//                         <label
//                           style={{ marginLeft: "-10px", marginTop: "-12px" }}
//                         >
//                           Appeal Comm. Objective No.
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           value={appealComm}
//                           style={{ marginLeft: "-9px", marginTop: "-9px" }}
//                           onChange={(e) => setAppealComm(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-1 p-1">
//                       <div className="form-group">
//                         <label
//                           style={{ marginRight: "-30px", marginTop: "-12px" }}
//                         >
//                           WadhGhat Remark
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           value={wadhGhat}
//                           style={{ marginLeft: "-19px", width: "140px" }}
//                           onChange={(e) => setWadhGhat(e.target.value)}
//                         />
//                       </div>
//                     </div> <div className="col-md-1 ">
//                       <div className="form-group">
//                         <label
//                           style={{ marginLeft: "20px", marginBottom: "99px" }}
//                         >
//                           IsPropertyChanges
//                         </label>
//                         <select
//                           className="form-control"
//                           value={isCombinedProp}
//                           onChange={(e) => setIsCombinedProp(e.target.value)}
//                           style={{
//                             marginLeft: "18px",
//                             marginTop: "-87px",
//                             height: "35px",
//                             width: "120px",
//                           }}
//                         >
//                           <option value="0">UnChange</option>
//                           <option value="1">Change</option>
//                         </select>
//                       </div>
//                     </div>
//                               </div>
//                             </fieldset>
// {/*  */}
//                         <fieldset>

//                         <div className="form-group row">
//                       <label
//                         className="col "
//                         style={{ marginTop: "6px", fontSize: "14px" }}
//                       >
//                         Plot Area Type
//                       </label>
//                       <div className="col-md-1">
//                         <select
//                           type="text"
//                           className="form-control"
//                           name="tPropNo"
//                           id="tPropNo"
//                           value={plotArea}
//                           onChange={(e) => setPlotArea(e.target.value)}
//                           style={{
//                             marginLeft: "-55px",
//                             width: "90px",
//                             height: "35px",
//                           }}
//                         >
//                           <option value="0">निवासी</option>
//                           <option value="1">Property 1</option>
//                           <option value="2">Property 2</option>
//                           <option value="3">Property 3</option>
//                           <option value="4">Property 4</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="form-group row">
//                       <label
//                         className="col "
//                         style={{
//                           marginLeft: "40px",
//                           marginTop: "6px",
//                           fontSize: "14px",
//                         }}
//                       >
//                         खुल्या भूखंडाच भो.प्रथम नाव
//                       </label>
//                       <div className="col-md-1">
//                         <input
//                           type="text"
//                           className="form-control"
//                           name="tPropNo"
//                           id="tPropNo"
//                           value={खुल्याभूखंडाच्या}
//                           onChange={(e) => setखुल्याभूखंडाच्या(e.target.value)}
//                           style={{
//                             marginLeft: "-56px",
//                             width: "90px",
//                             height: "35px",
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="form-group row">
//                       <label
//                         className="col "
//                         style={{
//                           marginLeft: "34px",
//                           marginTop: "6px",
//                           fontSize: "14px",
//                         }}
//                       >
//                         मधले नाव
//                       </label>
//                       <div className="col-md-1">
//                         <input
//                           type="text"
//                           className="form-control"
//                           name="tPropNo"
//                           id="tPropNo"
//                           value={मधलेनाव}
//                           onChange={(e) => setमधलेनाव(e.target.value)}
//                           style={{
//                             marginLeft: "-56px",
//                             width: "90px",
//                             height: "35px",
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="form-group row">
//                       <label
//                         className="col "
//                         style={{
//                           marginLeft: "32px",
//                           marginTop: "6px",
//                           fontSize: "14px",
//                         }}
//                       >
//                         आडनाव
//                       </label>
//                       <div className="col-md-1">
//                         <input
//                           type="text"
//                           className="form-control"
//                           name="tPropNo"
//                           id="tPropNo"
//                           value={आडनाव}
//                           onChange={(e) => setआडनाव(e.target.value)}
//                           style={{
//                             marginLeft: "-56px",
//                             width: "90px",
//                             height: "35px",
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="form-group row">
//                       <label
//                         className="col "
//                         style={{
//                           fontWeight: "bold",
//                           marginLeft: "40px",
//                           marginTop: "6px",
//                           fontSize: "14px",
//                         }}
//                       >
//                         Length
//                       </label>
//                       <div className="col-md-1">
//                         <input
//                           type="text"
//                           className="form-control"
//                           name="tPropNo"
//                           id="tPropNo"
//                           // value={length}
//                           value={0}
//                           onChange={(e) => setLength(e.target.value)}
//                           style={{
//                             marginLeft: "-38px",
//                             width: "49px",
//                             height: "35px",
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="form-group row">
//                       <label
//                         className="col "
//                         style={{
//                           fontWeight: "bold",
//                           marginLeft: "15px",
//                           marginTop: "6px",
//                           fontSize: "14px",
//                         }}
//                       >
//                         Width
//                       </label>
//                       <div className="col-md-1">
//                         <input
//                           type="text"
//                           className="form-control"
//                           name="tPropNo"
//                           id="tPropNo"
//                           // value={length}
//                           value={0}
//                           onChange={(e) => setWidth(e.target.value)}
//                           style={{
//                             marginLeft: "-38px",
//                             width: "49px",
//                             height: "35px",
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="form-group row">
//                       <label
//                         className="col "
//                         style={{
//                           marginLeft: "15px",
//                           fontSize: "14px",
//                         }} >
//                         DrainTax <br/>FlatRate
//                       </label>
//                       <div className="col-md-1">
//                         <input
//                           type="text"
//                           className="form-control"
//                           name="tPropNo"
//                           id="tPropNo"
//                           // value={length}
//                           value={0}
//                           onChange={(e) => setDrainTax(e.target.value)}
//                           style={{
//                             marginLeft: "-44px",
//                             width: "60px",
//                             height: "35px",
//                           }}
//                         />
//                       </div>
//                     </div>
//              <span style={{color:'red', marginLeft:'18px',marginTop:'7px'}}>Plot is taxable</span>
             
//              <div className="form-group row">
//                       <label
//                         className="col "
//                         style={{ marginTop: "6px", fontSize: "14px" }}
//                       >
//                         Is Flat System
//                       </label>
//                       <div className="col-md-1">
//                         <select
//                           type="text"
//                           className="form-control"
//                           name="tPropNo"
//                           id="tPropNo"
//                           value={isFlat}
//                           onChange={(e) => setIsFlat(e.target.value)}
//                           style={{
//                             marginLeft: "-55px",
//                             width: "90px",
//                             height: "35px",
//                           }}
//                         >
//                           <option value="0">No</option>
//                           <option value="1">Yes</option>
                         
//                         </select>
//                       </div>
//                     </div>  
//                     <div className="form-group row">
//                       <label
//                         className="col "
//                         style={{ marginLeft:'45px',marginTop: "6px", fontSize: "14px" }}
//                       >
//                         BHK
//                       </label>
//                       <div className="col-md-1">
//                         <select
//                           type="text"
//                           className="form-control"
//                           name="tPropNo"
//                           id="tPropNo"
//                           value={BHK}
//                           onChange={(e) => setBHK(e.target.value)}
//                           style={{
//                             marginLeft: "-56px",
//                             width: "90px",
//                             height: "35px",
//                             backgroundColor:'gray'
//                           }}
//                         >
//                           <option value="0"></option>
//                           <option value="1">1</option>
//                           <option value="1">2</option>
//                           <option value="1">3</option>
//                           <option value="1">4</option>

//                         </select>
//                       </div>
//                     </div>  

//                         </fieldset>
//                           </form>
//                         </section>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdditionalPropertyInfo;


import React, { useState } from "react";

const AdditionalPropertyInfo = () => {
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
  const [मधलेनाव, setमधलेनाव] = useState("");
  const [आडनाव, setआडनाव] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [drainTax, setDrainTax] = useState("");
  const [isFlat, setIsFlat] = useState("");
  const [BHK, setBHK] = useState("");

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="container mt-1">
                <h4 style={{ color: "blue" }}>
                  Additional Property Information
                </h4>
                <form>
                  <div className="row">
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label style={{ marginLeft: "8px" }}>Mob./PhNo.</label>
                        <input
                          className="form-control"
                          type="text"
                          value={mob}
                          style={{ width: "109px",marginLeft:'-10px' }}
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
                        <label style={{ marginLeft: "15px" }}>Email Id</label>
                        <input
                          className="form-control"
                          type="text"
                          value={emailId}
                          style={{ marginLeft: "8px", width: "140px" }}
                          onChange={(e) => setEmailId(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-2 p-1">
                      <div className="form-group">
                        <label style={{ marginLeft: "47px" }}>
                          Adhar Card No.
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={adharCard}
                          style={{ marginLeft: "40px", width: "110px" }}
                          onChange={(e) => setAdharCard(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label
                          style={{ marginLeft: "-26px", marginTop: "-16px" }}
                        >
                          Is Combined
                          <br /> Property
                        </label>
                        <select
                          className="form-control"
                          value={isCombinedProp}
                          onChange={(e) => setIsCombinedProp(e.target.value)}
                          style={{
                            marginLeft: "-40px",
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
                        <label style={{ marginLeft: "-30px" }}>
                          Property Remark
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={propertyRemark}
                          style={{ marginLeft: "-48px", width: "150px" }}
                          onChange={(e) => setPropertyRemark(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label
                          style={{ marginLeft: "9px", marginTop: "-12px" }}
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
                            marginLeft: "6px",
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
                          style={{ marginLeft: "-1px", marginTop: "-12px" }}
                        >
                          Hearing
                          <br /> Objection No.
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={hearingObject}
                          style={{ marginLeft: "1px", marginTop: "-9px" }}
                          onChange={(e) => setHearingObject(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label
                          style={{ marginLeft: "-10px", marginTop: "-12px" }}
                        >
                          Appeal Comm. Objective No.
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={appealComm}
                          style={{ marginLeft: "-9px", marginTop: "-9px" }}
                          onChange={(e) => setAppealComm(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 p-1">
                      <div className="form-group">
                        <label
                          style={{ marginRight: "-30px", marginTop: "-12px" }}
                        >
                          WadhGhat Remark
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={wadhGhat}
                          style={{ marginLeft: "-19px", width: "140px" }}
                          onChange={(e) => setWadhGhat(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-1 ">
                      <div className="form-group">
                        <label
                          style={{ marginLeft: "20px", marginBottom: "99px" }}
                        >
                          IsPropertyChanges
                        </label>
                        <select
                          className="form-control"
                          value={isCombinedProp}
                          onChange={(e) => setIsCombinedProp(e.target.value)}
                          style={{
                            marginLeft: "18px",
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
                        style={{ marginTop: "6px", fontSize: "14px" }}
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
                          marginLeft: "40px",
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
                          marginLeft: "34px",
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
                          marginLeft: "32px",
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
                          marginLeft: "40px",
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
                          marginLeft: "15px",
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
                          marginLeft: "15px",
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
                            marginLeft: "-44px",
                            width: "60px",
                            height: "35px",
                          }}
                        />
                      </div>
                    </div>
             <span style={{color:'red', marginLeft:'18px',marginTop:'7px'}}>Plot is taxable</span>
             
             <div className="form-group row">
                      <label
                        className="col "
                        style={{ marginTop: "6px", fontSize: "14px" }}
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
export default AdditionalPropertyInfo;
