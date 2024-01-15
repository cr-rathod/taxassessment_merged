import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Zoning = () => {
  const [zoneNO, setZoneNO] = useState('');
  const [wardNo, setWardNo] = useState('');
  const [YwardNo, setYWardNo] = useState('');

  const [fromPropertyNo, setFromPropertyNo] = useState('');
  const [toPropertyNo, setToPropertyNo] = useState('');

  const [to, setTo] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [enterMainZoneNo, setEnterMainZoneNo] = useState("");
  const [enterMax, setEnterMax] = useState("");

  const [enterZoneNo, setEnterZoneNo] = useState("");

  const handleUpdate = () => {
    setShowTable(true);
  };

  const handleClear = () => {
    setShowTable(false);
  };

  // 
  const handleFromChange = (e) => {
    const value = e.target.value;
    if (value <= toPropertyNo || !toPropertyNo) {
      setFromPropertyNo(value);
    }
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    if (value >= fromPropertyNo || !fromPropertyNo) {
      setToPropertyNo(value);
    }
  };


  return(
    <div className="pcoded-content">
    <div className="pcoded-inner-content">
      <div className="main-body">
        <div className="page-wrapper">
          <div className="page-body">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Zoning</h5>
                  </div>
      <div className="card-block">
   <form id="main" method="post" action="/" noValidate="">
   <div className="container">
      <div className="row">
        

          <div className="col-md-6">
              <h6 className="text-info">Ward Wise Zoning</h6>

<div className="container">

<div className="form-group row ">
<label className="col-12 col-md-3 col-form-label mb-2">Zone No.</label>
<div className="col-12 col-md-3 mb-2">
      <input
        type="number"
        className="form-control"
        name="ZNo"
        id="ZNo"
        value={zoneNO}
        onChange={(e) => setZoneNO(e.target.value)}
      />
      <span className="messages"></span>
    </div>
  </div>

  <div className="form-group row ">
  <label className="col-12 col-md-3 col-form-label mb-2">Ward No.</label>
<div className="col-12 col-md-3 mb-2">
      <input
        type="number"
        className="form-control"
        name="wdName"
        id="wdName"
        value={wardNo}
        onChange={(e) => setWardNo(e.target.value)}

      />
      <span className="messages"></span>
    </div>
  </div>
  <div className="form-group row">
      <label className="col-12 col-md-3 col-form-label mb-2">From Property No:</label>
      <div className="col-12 col-md-3 mb-2">
        <input
          type="number"
          className="form-control"
          name="fPropNo"
          id="fPropNo"
          value={fromPropertyNo}
          onChange={handleFromChange}
        />
        <span className="messages"></span>
      </div>

      <label className="col-12 col-md-3 col-form-label mb-2">To</label>
      <div className="col-12 col-md-3 mb-2">
        <input
          type="number"
          className="form-control"
          name="tPropNo"
          id="tPropNo"
          value={toPropertyNo}
          onChange={handleToChange}
        />
        <span className="messages"></span>
      </div>
    
</div></div>
      {/*  */}
      {/*  */}
      {wardNo && (
      <div className="col-12 col-md-6 d-flex flex-column align-items-center">
      <h6 className="text-info" style={{ marginRight: "80px", marginTop: "-20px" }}>Ward No</h6>
    <div className="grid-box text-center" style={{
      border: "1px solid #000",
      width: "70px",
      marginTop: "-3px",
      marginLeft: "-90px",
      maxHeight: "60px",
      overflowY: "auto",
    }}>
      {[...Array(8)].map((_, index) => (
        <div key={index} className="grid-item">
          <div className="framed-box">{index + 1}</div>
        </div>
      ))}
      <div className="grid-item">
        <div className="framed-box">16</div>
      </div>
    </div>
  </div>
)}

              {/*  */}
         {zoneNO && (
      <div className="col-12 col-md-6 d-flex flex-column align-items-center">
      <h6 className="text-info" style={{marginLeft:"250px",  marginTop: "-240px"}}>ZN</h6>
            <div className="grid-box text-center "style={{border: "1px solid #000" ,
            maxHeight: "60px",
            overflowY: "auto"  , width:"60px",marginLeft:"250px",  marginTop: "-3px",

              }}>
              {[...Array(16)].map((_, index) => (
                <div key={index} className="grid-item"  >
                  <div className="framed-box ">{index + 1}</div>
                </div>
              ))}
              <div className="grid-item">
               
                <div className="framed-box">Z</div>
              </div>
            </div>
          </div>
        )}
      {/*  */}
      {fromPropertyNo && (
          <div className="col-1-md-1 ml-1 d-flex flex-column align-items-center">
            <div className="grid-box text-center "style={{border: "1px solid #000" ,
              maxHeight: "60px",
              overflowY: "auto"  ,  width:"60px",marginLeft:"-220px"   ,marginTop:"-17px"         }}>
              {[...Array(299)].map((_, index) => (
                <div key={index} className="grid-item"  >
                  <div className="framed-box ">{index + 1}</div>
                </div>
              ))}
              <div className="grid-item">
               
              </div>
            </div>
          </div>
        )}
       {/*  */}
      {to && (
      <div className="col-12 col-md-6 d-flex flex-column align-items-center">
      <div className="grid-box text-center "style={{border: "1px solid #000" ,
            maxHeight: "60px",
            overflowY: "auto"  ,    width:"60px",marginLeft:"200px"   ,marginTop:"-60px"           }}>
              {[...Array(299)].map((_, index) => (
                <div key={index} className="grid-item"  >
                  <div className="framed-box ">{index + 1}</div>
                </div>
              ))}
              <div className="grid-item">
               
              </div>
            </div>
          </div>
        )}
       
    {/* button */}
    <div className="col-md-8 ml-1 d-flex justify-content-center">
      <button
        type="submit"
        className="  btn waves-effect btn-sm waves-light btn-grd-info mx-3"
      >
        Update
      </button>
      <button
        className=" ml-3 btn waves-effect  btn-sm waves-light btn-grd-inverse waves-effect waves-light"
      >
        Clear
      </button>
    </div>
    {/*  */}
    <hr/>
    <h6 className="text-info">Year Wise Zoning</h6>
    <div className="container">

    <div className="form-group row mt-4">
  <label className="col-12 col-md-3 col-form-label mb-2">Enter Zone No:</label>
  <div className="col-12 col-md-3 mb-2">
    <input
      type="number"
      className="form-control"
      name="enterZoneNo"
      id="enterZoneNo"
      value={enterZoneNo}
      onChange={(e) => setEnterZoneNo(e.target.value)}
     
    />
    <span className="messages"></span>
  </div>
  

  <label className="col-12 col-md-3 col-form-label mb-1">Enter Main Zone No:</label>
  <div className="col-12 col-md-3 mb-1">
    <input
      type="number"
      className="form-control"
      name="MZoneNo"
      id="MZoneNo"
      value={enterMainZoneNo}
      onChange={(e)=>setEnterMainZoneNo(e.target.value)}
    />
    <span className="messages"></span>
  </div>
</div>



<div className="form-group row ">
    <label className="col-12 col-md-3 col-form-label mb-2">Ward No.</label>
  <div className="col-12 col-md-3 mb-2">
          <input
            type="number"
            className="form-control"
            name="wdName"
            id="wdName"
            value={YwardNo}
            onChange={(e) => setYWardNo(e.target.value)}
          />
          <span className="messages"></span>
        </div>
      </div>

      <div className="form-group row ">
      <label className="col-12 col-md-3 col-form-label mb-2">Enter Max Year No.</label>
  <div className="col-12 col-md-3 mb-2">
          <input
            type="number"
            className="form-control"
            name="wdName"
            id="wdName"
            value={enterMax}
            onChange={(e) => setEnterMax(e.target.value)}

          />
          <span className="messages"></span>
        </div>
      </div>
      <div className="form-group row">
  <label className="col-12 col-md-3 col-form-label mb-2">Age Different From:</label>
  <div className="col-12 col-md-3 mb-2">
    <input
      type="number"
      className="form-control"
      name="fPropNo"
      id="fPropNo"
      value={fromPropertyNo}
      onChange={(e) => setFromPropertyNo(e.target.value)}
    />
    <span className="messages"></span>
  </div>


  <label className="col-12 col-md-3  col-form-label mb-2">To</label>
  <div className="col-12 col-md-3   mb-2">
    <input
      type="number"
      className="form-control"
      name="tPropNo"
      id="tPropNo"
    />
    <span className="messages"></span>
    
  </div>
{/*  */}
    {enterMainZoneNo && (
      <div className="col-12 col-md-6 d-flex flex-column align-items-center">
               <h6 className="text-info" style={{ marginLeft: "-100px", marginTop: "-20px" }}>MZN</h6>

        <div className="grid-box text-center" style={{ border: "1px solid #000", overflowY: "auto",maxHeight: "60px", width: "50px", marginLeft: "-86px", marginTop: "-10px" }}>
          {[...Array(16)].map((_, index) => (
            <div key={index} className="grid-item">
              <div className="framed-box">{index + 1}</div>
            </div>
          ))}
          <div className="grid-item"></div>
        </div>
      </div>
    )}

    {YwardNo && (
      <div className="col-12 col-md-6 d-flex flex-column align-items-center" >
        <h6 className="text-info" style={{ marginLeft: "25px", marginTop: "-50px" }} >WN</h6>
        <div className="grid-box text-center" style={{ border: "1px solid #000", width: "50px", marginLeft: "25px", maxHeight: "60px",
      overflowY: "auto", marginTop: "-9px" }}>
          {[...Array(16)].map((_, index) => (
            <div key={index} className="grid-item">
              <div className="framed-box">{index + 1}</div>
            </div>
          ))}
          <div className="grid-item"></div>
        </div>
      </div>
    )}

{enterMax && (
      <div className="col-12 col-md-6 d-flex flex-column align-items-center" >
        <h6 className="text-info" style={{ marginLeft: "200px", marginTop: "-100px" }} >MYN</h6>
        <div className="grid-box text-center" style={{ border: "1px solid #000", width: "50px", marginLeft: "200px", maxHeight: "60px",
      overflowY: "auto", marginTop: "-9px" }}>
          {[...Array(16)].map((_, index) => (
            <div key={index} className="grid-item">
              <div className="framed-box">{index + 1}</div>
            </div>
          ))}
          <div className="grid-item"></div>
        </div>
      </div>
    )}

  </div>
</div>

<div className="form-group row   ml-3">
  <div className="col d-flex justify-content-center align-items-center">
    <button type="submit" className=" mx-1 btn btn-sm btn-grd-success mb-2">
      Add Range
    </button>
    <button type="submit" className="mx-1 btn btn-sm btn-grd-primary mb-2 ml-md-2  waves-effect waves-light">
      Export
    </button>
    <button type="submit" className="mx-1 btn btn-sm btn-grd-primary mb-2 ml-md-2  waves-effect waves-light">
      Update
    </button>
    <button type="submit" className="mx-1 btn btn-sm btn-grd-inverse waves-effect waves-light mb-2 ml-md-2  waves-effect waves-light">
      Clear
    </button>
  </div>

</div>

<h6 className="text-info">Year Wise Zoning:</h6>
<div className="d-flex justify-content-center align-items-center" >
  <div class="dt-responsive table-responsive">
    <table class="table table-striped table-bordered nowrap">
      <thead>
      <tr style={{ textAlign: "center" }}>
          <th  className="font-weight-bold">Zone </th>
          <th  className="font-weight-bold">Main Zone</th>
          <th  className="font-weight-bold">Range</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ textAlign: "center" }}>
          <td>1</td>
          <td>1</td>
          <td>0-5</td>
          
        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>1</td>
          <td>2</td>
          <td>0-6</td>
          </tr>
          <tr style={{ textAlign: "center" }}>
          <td>2</td>
          <td>1</td>
          <td>0-5</td>
          </tr>
      </tbody>
    </table>
  </div>
</div>


    </div>

    


    <div className="col-md-6 mt-2">
  <h6 className="text-info ml-2">Zone Wise Property Separation in a Ward</h6>
  <div className="d-flex justify-content-center align-items-center" >
  {/* // style={{ height: '890px', width: '100%', maxWidth: '400px', backgroundColor: 'buttonshadow' }}> */}
  <div class="dt-responsive table-responsive">
                        <table class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th  className="font-weight-bold">Zone </th>
                              <th  className="font-weight-bold">Ward </th>
                              <th  className="font-weight-bold">From Property</th>
                              <th  className="font-weight-bold">To Property</th>
                              
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ textAlign: "center" }}>
                              <td>Z</td>
                              <td>16</td>
                              <td>1</td>
                              <td>2</td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                              <td>1</td>
                              <td>3</td>
                              <td>2</td>
                              <td>3</td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                              <td>2</td>
                              <td>2</td>
                              <td>2</td>
                              <td>4</td>
                            </tr><tr style={{ textAlign: "center" }}>
                              <td>Z</td>
                              <td>15</td>
                              <td>1</td>
                              <td>2</td>
                            </tr><tr style={{ textAlign: "center" }}>
                              <td>1</td>
                              <td>15</td>
                              <td>2</td>
                              <td>3</td>
                            </tr><tr style={{ textAlign: "center" }}>
                              <td>1</td>
                              <td>1</td>
                              <td>2</td>
                              <td>3</td>
                            </tr>
                            </tbody></table>
  </div>
</div></div>


</div>
    </div>
</form>

                  </div>
                </div>
                </div>
                </div>
                </div>                </div>
                </div>
                </div>
                </div>
            

  )}
  export default Zoning;