import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AutoWard = () => {
  const [wardNo, setWardNo] = useState("");
  const [fromPropertyNo, setFromPropertyNo] = useState("");
  const [toPropertyNo, setToPropertyNo] = useState("");
  // const [propertyRange, setPropertyRange] = useState("");
  // const [missingProperty, setMissingProperty] = useState("");
  // const [missingPropertyWard, setMissingPropertyWard] = useState("");
  // const [mainProperties, setMainProperties] = useState("");
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Fetch all tax assignments from the backend
    fetch("/api/assignments")
      .then((response) => response.json())
      .then((data) => {
        setAssignments(data);
      });
  }, []);

  const createAssignment = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/assignments", {
        method: "POST",
        body: JSON.stringify({
          wardNo,
          fromPropertyNo,
          toPropertyNo,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.message);

      // Refresh the list of assignments
      fetch("/api/assignments")
        .then((response) => response.json())
        .then((data) => {
          setAssignments(data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const clear = () => {
    // Clear all form fields
    setWardNo("");
    setFromPropertyNo("");
    setToPropertyNo("");
    // setPropertyRange("");
    // setMissingProperty("");
    // setMissingPropertyWard("");
  };

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h5>Auto Ward Entry</h5>
                    </div>
                    <div className="card-block">
                      <form id="main" method="post" action="/" novalidate="">
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Ward No.</label>
                          <div className="col-sm-3">
                            <input type="text" className="form-control" name="wdName" id="wdName"
                              value={wardNo} onChange={(e) => setWardNo(e.target.value)} placeholder="Enter Ward No" />
                            <span className="messages"></span>
                          </div>
                          <label className="col-sm-2 col-form-label">From Property No</label>
                          <div className="col-sm-3">
                            <input type="text" className="form-control" name="fPropNo" id="fPropNo"
                              value={fromPropertyNo} onChange={(e) => setFromPropertyNo(e.target.value)} placeholder="Enter From Property No" />
                            <span className="messages"></span>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">To Property No</label>
                          <div className="col-sm-3">
                            <input type="text" className="form-control" name="tPropNo" id="tPropNo"
                              value={toPropertyNo} onChange={(e) => setToPropertyNo(e.target.value)} placeholder="Enter To Property No" />
                            <span className="messages"></span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4"></div>
                          <div className="col-sm-6">
                            <button type="submit" className="btn waves-effect waves-light btn-grd-success m-r-20"
                              onClick={createAssignment}>Save</button>
                            <button className="btn waves-effect waves-light btn-grd-primary"
                              onClick={clear}>Clear</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h5>Ward List</h5>
                    </div>
                    <div className="card-block">
                      <div class="dt-responsive table-responsive">
                        <table id="order-table" class="table table-striped table-bordered nowrap">
                          <thead>
                            <tr>
                              <th>Ward Name</th>
                              <th>Property No</th>
                              <th>Oblique No</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tiger Nixon</td>
                              <td>System Architect</td>
                              <td>Edinburgh</td>
                            </tr>
                            <tr>
                              <td>Garrett Winters</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                            </tr>
                            <tr>
                              <td>Ashton Cox</td>
                              <td>Junior Technical Author</td>
                              <td>San Francisco</td>
                            </tr>
                            <tr>
                              <td>Cedric Kelly</td>
                              <td>Senior Javascript Developer</td>
                              <td>Edinburgh</td>
                            </tr>
                            <tr>
                              <td>Airi Satou</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                            </tr>
                            <tr>
                              <td>Brielle Williamson</td>
                              <td>Integration Specialist</td>
                              <td>New York</td>
                            </tr>
                            <tr>
                              <td>Herrod Chandler</td>
                              <td>Sales Assistant</td>
                              <td>San Francisco</td>
                            </tr>
                            <tr>
                              <td>Rhona Davidson</td>
                              <td>Integration Specialist</td>
                              <td>Tokyo</td>
                            </tr>
                            <tr>
                              <td>Colleen Hurst</td>
                              <td>Javascript Developer</td>
                              <td>San Francisco</td>
                            </tr>
                            <tr>
                              <td>Sonya Frost</td>
                              <td>Software Engineer</td>
                              <td>Edinburgh</td>
                            </tr>
                            <tr>
                              <td>Jena Gaines</td>
                              <td>Office Manager</td>
                              <td>London</td>
                            </tr>
                            <tr>
                              <td>Quinn Flynn</td>
                              <td>Support Lead</td>
                              <td>Edinburgh</td>
                            </tr>
                            <tr>
                              <td>Charde Marshall</td>
                              <td>Regional Director</td>
                              <td>San Francisco</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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

export default AutoWard;
