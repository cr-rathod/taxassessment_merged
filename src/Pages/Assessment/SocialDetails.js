import React, { useState } from "react";
import { Link } from "react-router-dom";

const SocialDetails = () => {
  const [roadWidth, setRoadWidth] = useState("");
  const [showChaturthasima, setShowChaturthasima] = useState(false);
  const [showRemark, setShowRemark] = useState(false);
  const [WadhGhatRemarkOne, setWadhGhatRemarkOne] = useState("");
  const [WadhGhatRemarkTwo, setWadhGhatRemarkTwo] = useState("");
  const [showWater, setShowWater] = useState(false);


  const toggleChaturthasimaFields = () => {
    setShowChaturthasima(!showChaturthasima);
  };

  const toggleRemarkFields = () => {
    setShowRemark(!showRemark);
  };
  const toggleWaterFields = () => {
    setShowWater(!showWater);
  };
  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
            <div className="card border  border-primary " style={{ borderWidth: "7px", backgroundColor:"whitesmoke", color:"black" }}>
                <div className="card-header">
                  <h5>Social Details</h5>
                </div>
                <div className="card-block">
                <form>
              <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-3 text-center">
                          <label className="col-form-label">Road Width</label>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control text-center"
                              name="roadW"
                              id="roadW"
                              value={0}
                              onChange={(e) => setRoadWidth(e.target.value)}
                            />
                            <span className="messages"></span>
                          </div>
                        </div>

                        <div className="col-md-3 text-center">
    <label className="col-form-label">R Toilet</label>
    <div className="form-group">
      <input
        type="text"
        className="form-control text-center"
        value={0}
      />
    </div>
  </div>

  <div className="col-md-3 text-center">
    <label className="col-form-label">C Toilet</label>
    <div className="form-group">
      <input
        type="text"
        className="form-control text-center"
        name="Ct"
        id="Ct"
        value={1}
      />
    </div>
  </div>

  <div className="col-md-3 text-center">
    <label className="col-form-label">No of trees</label>
    <div className="form-group">
      <input
        type="text"
        className="form-control text-center"
        name="NTree"
        id="NTree"
        value={0}
      />
      <span className="messages"></span>
    </div>
  

                    </div>
                      </div></div>

         <div className="row">
<div className="col-md-4">
   <div className="row form-group border  border-info p-2 ">
                        
                     
                         <div className="col-md-7 mt-4">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check "></i>
                                  </span>
                                  <span style={{color:"black"}} >IsHandPump</span>
<br  />
<span ></span>
                                </label>
                              </div>
                            </div>
                        <div className="col-md-5">
                          <label className="col-form-label "   style={{color:"black"}}
>
                            No.ofHandPump:
                          </label>
                          <input
                            type="text"
                            className="form-control text-center"
                            name="isHand"
                            id="isHand"
                            placeholder=" No. of Hand Pump"


                          />
                        </div>
</div>
<div className="row form-group border border-info p-3">
                        
                     
<div className="col-md-7 mt-4">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span style={{color:"black"}}>IsLift</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-5">
                          <label className="col-form-label"  style={{color:"black"}}                         
>No. of Lift:</label>
                          <input
                            type="text"
                            className="form-control text-center"
                            name="Nlift"
                            id="Nlift"
placeholder="No. of Lift"
                          />
                        </div>
</div>

</div>
{/*  */}
<div className="col-md-4 ">
<div className="row form-group border border-info p-2">

<div className="col-md-7 mt-4">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span style={{color:"black"}}>IsBoreWell</span>

                                </label>
                              </div>
                            </div>
                            <div className="col-md-5">
                          <label className="col-form-label"  style={{color:"black"}}                         
>
                            No.ofBoreWell:
                          </label>
                          <input
                            type="text"
                            className="form-control text-center"
                            name="isNBor"
                            id="isNBor"
                           placeholder="No. of BoreWell"

                          />
                        </div>

</div>

<div className="row form-group border border-info p-3">
<div className="col-md-7 mt-4">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span style={{color:"black"}}> IsSolar</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-5">
    <label className="col-form-label " style={{color:"black"}} 
>No. of Solar:</label>
    <input
      type="text"
      className="form-control text-center custom-input"
      name="NSolar"
      id="NSolar"
placeholder="No. of Solar"      

    />
  </div>


</div>


</div>
{/*  */}
<div className="col-md-4">
<div className="row form-group border border-info p-2">
<div className="col-md-7 mt-4">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span style={{color:"black"}}>IsFire</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-5">
    <label className="col-form-label "      style={{color:"black"}}                      
>No. of Fire:</label>
    <input
      type="text"
      className="form-control text-center custom-input"
      name="NFire"
      id="NFire"
placeholder="No. of Fire"
    />
  </div>
  </div>
  <div className="row form-group border border-info p-2">
  <div className="col-md-7 mt-4">
                              <div
                                class="checkbox-fade fade-in-primary"
                                style={{ "margin-top": "3%" }}
                              >
                                <label>
                                  <input type="checkbox" value="" />
                                  <span class="cr">
                                    <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                  </span>
                                  <span style={{color:"black"}}>IsRainWater</span>
                                  <br/>
                                  <span className="ml-2" style={{color:"black"}}>Harvesting</span>


                                </label>
                              </div>
                            </div>
                            <div className="col-md-5">
    <label className=" text-left"   style={{color:"black"}}                         
>
      No.RainWater Harversting:
    </label>
    <input
      type="text"
      className="form-control text-center custom-input"
      name="isRain"
      id="isRain"
placeholder=" No.of IsRainWater Harversting"

    />
  </div>
  </div>
  </div>
          
         </div>
         {/*  */}
         <div className="row  p-2 ">
          <div className="col-md-4">
          <div className="row form-group ">
          <div className="col-md-12">

<div
  className="card-header"
  onClick={toggleWaterFields}
  style={{ cursor: "pointer" }}
>
  <h5 className="font-weight-bold">Water Connection </h5>
</div>

{showWater && (  
              <> 
                                        <div className="row justify-content-start text-start">
     
         <div className="col-md-9 mt-2">
                            <div
                              class="checkbox-fade fade-in-primary"
                              style={{ "margin-top": "3%" }}
                            >
                              <label>
                                <input type="checkbox" value="" />
                                <span class="cr">
                                  <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                </span>
                                
<span> Water Connection</span>



                              </label>
                            </div>
                          </div>
                          </div><div className="row ">

                          <div className="col-md-7">
                        <label className="col-form-label"                          
> No.ofWaterConnection:</label>
                        <input
                          type="text"
                          className="form-control text-center"
                          name="WConnection"
                          id="WConnection"
placeholder="No. of Water Connection"                          

                        />
                      </div>

                     

                      <div className="col-md-4">
                      <label className="  col-form-label">
                        Size ("):
                      </label> 
                        <select
                          type="text"
                          className="form-control text-center "
                          name="size"
                          style={{ height: "40px",marginTop:"-2px" }}
                          id="size"
                        >
                          <option></option>
                          <option>1/2</option>
                          <option>3/4</option>
                          <option>1.0</option>
                          <option>1.5"</option>
                          <option>2.0"</option>
                          <option>2.5"</option>
                          <option>3.5"</option>
                        </select>
                      </div></div>
                      </> )}</div></div></div>
                 
{/*  */}

                      <div className="col-md-4">
                      <div className="form-group row" >
                      <div className="col-md-12">

                      <div
                        className="card-header"
                        onClick={toggleChaturthasimaFields}
                        style={{ cursor: "pointer" }}
                      >
                        <h5 className="font-weight-bold">चतुर्थसीमा</h5>
                      </div>

                      {showChaturthasima && (
                        <div>
                          <div className="row justify-content-center text-center">
                          <div className="col-md-5 mb-2">
            <label className="col-form-label">पूर्व</label>
            <input
              type="text"
              className="form-control form-control-sm text-center"
              name="sName"
              id="sName"
            />
          </div>
          <div className="col-md-5 mb-2 text-center">
            <label className="col-form-label">पश्चिम</label>
            <input
              type="text"
              className="form-control form-control-sm text-center"
              name="sName"
              id="sName"
            />
          </div>
        </div>

        <div className="mt-2 row justify-content-center">
          <div className="col-md-5 mb-2 text-center">
            <label className="col-form-label">उत्तर</label>
            <input
              type="text"
              className="form-control form-control-sm text-center"
              name="sName"
              id="sName"
            />
          </div>
          <div className="col-md-5 mb-2 text-center">
            <label className="col-form-label">दक्षिण</label>
            <input
              type="text"
              className="form-control form-control-sm text-center"
              name="sName"
              id="sName"
            />
          </div>
        </div>
      </div>
    )}
</div></div></div>
{/*  */}
<div className="col-md-4">
<div className="form-group row" >
<div className="col-md-12">

    <div className="card-header" onClick={toggleRemarkFields} style={{ cursor: 'pointer' }}>
      <h5 className="font-weight-bold">Wadh Ghat Remark</h5>
    </div>

    {showRemark && (
      <>
      <div className="mt-2 row justify-content-center text-center">
        <div className="col-md-10 mb-2">
          <label className="col-form-label text-center">WadhGhatRemark One</label>
          <input
            type="text"
            className="form-control form-control-sm text-center"
            name="sName"
            id="sName"
            value={WadhGhatRemarkOne}
          />
        </div></div>
              <div className="mt-2 row justify-content-center text-center">

        <div className="col-md-10  mb-2">
          <label className="col-form-label text-center">WadhGhatRemark Two</label>
          <input
            type="text"
            className="form-control form-control-sm text-center"
            name="sName"
            id="sName"
            value={WadhGhatRemarkTwo}
          />
        </div>
       
  </div>
              </>         )}
                    </div>  </div></div></div>
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

export default SocialDetails;
