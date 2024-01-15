import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";




const DemandAnalysis = () => {
 //export
 const handleExportButtonClick = () => {
  const data1 = [
      ["    ", " ", "  Comparative Statement  ", "   "],
      ["Particular", "Properties", "OldPropertyDeamand", "NewPropertyDemand", "TotalNewDemand"],
      [" 5", "1", "1", "0.0000", "0.0000"],
    ];

   
 

  const ws1 = XLSX.utils.aoa_to_sheet(data1);

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws1, "DailyCollectionReport");

  XLSX.writeFile(wb, "exported_data.xlsx");
};
//
const [selectedOption, setSelectedOption] = useState('');
  const [showMinMaxInputs, setShowMinMaxInputs] = useState(false);
  const [selectedDemand, setSelectedDemand] = useState("");
  const [showDemandTable, setShowDemandTable] = useState(false);
  const [showAnalysisTable, setShowAnalysisTable] = useState(false);



    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);
      setShowMinMaxInputs(selectedValue === 'Demand Analysis');
      setShowDemandTable(false);
      setShowAnalysisTable(false);
    };
  
    const handleRadioChange = () => {
      setSelectedDemand('Comparative Statement');
      setShowDemandTable(true);
      setShowAnalysisTable(false);
    };
  
    const handleRadioChange2 = () => {
      setSelectedDemand('Demand Analysis');
      setShowDemandTable(false);
      setShowAnalysisTable(true);
    };
    const handleRadio = () => {
      setSelectedDemand('Demand Analysis');
      setShowDemandTable(false);
      setShowAnalysisTable(true);
    };
  
  
    return (

        <div className="pcoded-content">
          <div className="pcoded-inner-content">
            <div className="main-body">
              <div className="page-wrapper">
                <div className="page-body">
                  <div className="card">
                    <div className="card-header">
                      <h5>Demand Analysis</h5>
                    </div>
                    <div className="card-block">
                      <form>

<div className="row">
  <div className=" col-md-6 ">
  <div className="form-group row">
    <label className="col-sm-3 col-form-label">Select List</label>
    <div className="col-sm-5">
        <select className="form-control text-center" name="ward" id="ward"value={selectedOption}
                        onChange={handleSelectChange}
                    >
                        <option value="">Select an option</option>
                        <option value="Comparative Statement">Comparative Statement</option>
                        <option value="Demand Analysis">Demand Analysis</option>
                    </select>
        <span className="messages"></span>
    </div>
</div>



                                                                        <div className="col-sm-9  ">
                                                                        
                                                                        <div className='form-group row text-center justify-content-center'>

  {selectedOption === 'Comparative Statement' && (
    <div className="col-sm-3 mx-3 ">
      <button
        type="button"
        className="btn btn-grd-info"  data-toggle="modal"
        data-target="#default-Modal"
        onClick={handleRadioChange}
      >
        Generate
      </button>
      
      <span className="messages"></span>
    </div>
  )}
      <div className="col-sm-1  ">

  <button
    type="button"
    className="btn btn-grd-primary "
    onClick={handleExportButtonClick}
  >
    Export To Excel
  </button>
  <span className="messages"></span>
</div>


</div>
                                                                        </div>
                                                                        </div>





                                                                        {/*  */}
                                                                        <div className="col-md-5">

                                                                        {showMinMaxInputs && (
                                                                        <>
                                                                        <div className=" card p-2">
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Max Value</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" placeholder="Enter Max" />
                    </div>

                    <label className="col-sm-3 col-form-label">Min Value</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" placeholder="Enter Min" />
                    </div>
                </div>

                <div className="form-group row justify-content-center">

 
  <div className="text-center col-md-5">
    <button
      type="button"
      className="btn btn-grd-success"
      onClick={() => handleRadio({ target: { value: 'Demand Analysis' } })}
    >
      Add Range
    </button>
    <span className="messages"></span>
  </div>
  <div className="d-flex justify-content-between">
  {selectedOption === 'Demand Analysis' && (
    <div className="text-center col-md-10">
      <button
        type="button"
        className="btn btn-grd-info"
        onClick={handleRadioChange2}
      >
        Generate
      </button>
      <span className="messages"></span>
    </div>
  )}
</div>
</div>

</div>
</>
            )}
</div>
                                                                        </div>

                                                                        {showDemandTable && (



<div className="form-group row">
<div class="dt-responsive mt-2 table-responsive text-center" style={{maxHeight: "320px", overflow: "auto"}}>
                        <table id="order-table" class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">Particulars</th>
                              <th className="font-weight-bold">Properties</th>
                              <th className="font-weight-bold">BeforeAssessDemand</th>
                              <th className="font-weight-bold">NewTotalDemand</th>

                              


                            </tr>
                          </thead>
                          <tbody>
                          
                           
                            <tr>
                              
                              <td>शहरlतील जुने मालमत्ता इमारत </td>
                              <td>3508</td>
                              <td>1513125</td>
                              <td>10041504</td>
                              
                            </tr>
                            <tr>
        
                              <td>अंशात आकारणी केलेल्या मालमत्ता इमारत</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <td>वाढीव  मालमत्ता इमारत, शहरlतील एकूण  कर निरंक  असलेल्या मालमत्ता इमारत,   एकूण मालमत्ता इमारत</td>
                           <td>5696</td>
                           <td>139180</td>
                           <td>10360250</td>
                           
                            </tr>
                            <tr>
                              <td> शहरlतील एकूण  कर निरंक  असलेल्या मालमत्ता इमारत</td>
                           <td>5696</td>
                           <td>139180</td>
                           <td >10360250</td>
                           
                            </tr> <tr>
                              <td  className="bg-danger"> एकूण मालमत्ता इमारत</td>
                           <td  className="bg-danger">5696</td>
                           <td  className="bg-danger">139180</td>
                           <td className="bg-danger">10360250</td>
                           
                            </tr> 

                            <tr><br/></tr>

                             <tr>
                              <td> शहरlतील ख्रुलू भूखंड </td>
                           <td>5696</td>
                           <td>139180</td>
                           <td>10360250</td>
                           
                            </tr>



                          </tbody>
                        </table>
                      </div> 



</div>
)}

{showAnalysisTable && (



<div className="form-group row">
<div class="dt-responsive mt-2 table-responsive text-center" style={{maxHeight: "320px", overflow: "auto"}}>
                        <table id="order-table" class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th className="font-weight-bold">Reason</th>
                              <th className="font-weight-bold">Properties</th>
                              <th className="font-weight-bold">Percents</th>
                              <th className="font-weight-bold">OldRV</th>
                              <th className="font-weight-bold">OldDemand</th>
                              <th className="font-weight-bold">OldProp.Demand</th>
                              <th className="font-weight-bold">NewRV</th>
                              <th className="font-weight-bold">NewDemand</th>
                              <th className="font-weight-bold">NewPropDemand</th>


                            

                              


                            </tr>
                          </thead>
                          <tbody>
                          
                           
                            <tr>
                              
                              <td>1-2</td>
                              <td>572</td>
                              <td></td>
                              <td>1512973</td>
                              <td>309906</td>
                              <td>229708</td>
                              <td>22920005</td>
                              <td>889631</td>
                              <td>548023</td>
                              
                            </tr>
                           
                          </tbody>
                        </table>
                      </div> 



</div>
)}

                                                                       





                        </form>


                        
                        </div>  </div>  </div>  </div>  </div>  </div>  </div>
    )}
    export default DemandAnalysis;