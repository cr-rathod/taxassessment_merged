import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AutoWard = () => {
  const [wardNo, setWardNo] = useState("");
  const [fromPropertyNo, setFromPropertyNo] = useState("");
  const [toPropertyNo, setToPropertyNo] = useState("");
  // const [propertyRange, setPropertyRange] = useState("");
  // const [missingProperty, setMissingProperty] = useState("");
  // const [missingPropertyWard, setMissingPropertyWard] = useState("");
  // const [mainProperties, setMainProperties] = useState("");
  const [assignments, setAssignments] = useState([]);

  const [propertyNo, setPropertyNo] = useState("");
  const [fromObPropertyNo, setFromObPropertyNo] = useState("");
  const [toObPropertyNo, setToObPropertyNo] = useState("");
  const navigate = useNavigate();

  // edit for main
  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };
 // create for main
 const [isCreate, setCreate] = useState(false);
  const handleCreateClick = () => {
    setCreate(true);

  };
  const [enteredPasswords, setEnteredPasswords] = useState("");
  const correctPasswords = "123$";

  const handleSaveChanges = () => {
    if (enteredPassword === correctPasswords) {
      alert("Changes saved successfully");
      navigate("/autoward");
    } else {
      alert("Incorrect password. Changes not saved.");
    }
  };

  const handleCancel = () => {
    setEditing(false);
    alert("Authication Failed");
  };

  // edit for oblique
  const [isEditingOb, setEditingOb] = useState(true);

  const handleEditClickOb = () => {
    setEditing(true);
  };

  const [enteredPassword, setEnteredPassword] = useState("");
  const correctPassword = "123$";

  const handleSaveChangesOb = () => {
    if (enteredPassword === correctPassword) {
      alert("Changes saved successfully");
      navigate("/autoward");
    } else {
      alert("Incorrect password. Changes not saved.");
    }
  };

  const handleCancelOb = () => {
    setEditing(false);
    alert("Authication Failed");
  };

  useEffect(() => {
    // Fetch all tax assignments from the backend
    fetch("/api/oblique")
      .then((response) => response.json())
      .then((data) => {
        setAssignments(data);
      });
  }, []);

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
    <>
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
                        <div className="row">
                          <div className="col-md-12">
                            <ul class="nav nav-tabs md-tabs" role="tablist">
                              <li class="nav-item">
                                <a
                                  class="nav-link active"
                                  data-toggle="tab"
                                  href="#mainProperties"
                                  role="tab"
                                >
                                  Ward Entry For Main Properties
                                </a>
                                <div class="slide"></div>
                              </li>
                              <li class="nav-item">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#obliqueProperties"
                                  role="tab"
                                >
                                  Ward Entry For Oblique Prop
                                </a>
                                <div class="slide"></div>
                              </li>
                            </ul>
                            <div class="tab-content card-block">
                              <div
                                class="tab-pane active"
                                id="mainProperties"
                                role="tabpanel">
                                <div className="col-sm-12">
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>Ward Entry For Main Properties</h5>
                                    </div>
                                    <div className="card-block">
                                      <form
                                        id="main"
                                        method="post"
                                        action="/"
                                        novalidate="">
                                        <div className="form-group row">
                                          <label className="col-sm-2 col-form-label">
                                            Ward Entry For Main Properties
                                          </label>
                                          <div className="col-sm-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="wdName"
                                              id="wdName"
                                              value={wardNo}
                                              onChange={(e) =>
                                                setWardNo(e.target.value)
                                              }
                                              placeholder="Enter Ward No"
                                            />
                                            <span className="messages"></span>
                                          </div>
                                          <label className="col-sm-2 col-form-label">
                                            From Property No
                                          </label>
                                          <div className="col-sm-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="fPropNo"
                                              id="fPropNo"
                                              value={fromPropertyNo}
                                              onChange={(e) =>
                                                setFromPropertyNo(
                                                  e.target.value
                                                )
                                              }
                                              placeholder="Enter From Property No"
                                            />
                                            <span className="messages"></span>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <label className="col-sm-2 col-form-label">
                                            To Property No
                                          </label>
                                          <div className="col-sm-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="tPropNo"
                                              id="tPropNo"
                                              value={toPropertyNo}
                                              onChange={(e) =>
                                                setToPropertyNo(e.target.value)
                                              }
                                              placeholder="Enter To Property No"
                                            />
                                            <span className="messages"></span>
                                          </div>

                                          <label className="col-sm-2 col-form-label">
                                            Property Range:
                                          </label>
                                          <div className="mt-2">
                                            <span className="mx-5 text-danger ">
                                              3
                                            </span>
                                          </div>
                                          <label className="col-sm-2 col-form-label">
                                            Missing Property:
                                          </label>
                                          <div className="mt-2 mx-5">
                                            <span className="text-center text-danger ">
                                              2
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-sm-4"></div>
                                          <div className="col-sm-6">
                                            <button
                                              type="button"
                                              className="btn waves-effect waves-light btn-grd-success m-r-20" data-toggle="modal" data-target="#large-Modal"
                                              onClick={handleEditClick}
                                            >
                                              Create
                                            </button>
                                             <div
                          class="modal fade"
                          id="large-Modal"
                          tabindex="-1"
                          role="dialog"
                        >
                          <div class="modal-dialog modal-sm" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title"> Admin Plus Level</h4>

                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <label className="col-form-label mb-2 text-center">
                                  Enter the Password
                                </label>
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                />
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-grd-success waves-effect "
                                  data-dismiss="modal"
                                >
                                  Submit
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-grd-inverse waves-effect waves-light "
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>


                                            <button
                                              className="btn btn-inverse waves-effect waves-light"
                                              onClick={clear}
                                            >
                                              Clear
                                            </button>
                                          </div>
                                        </div>
                                        {/* {isEditing && (
                                          <div className="col-12 border border-primary col-md-3 d-flex flex-column align-items-center">
                                            <h6 className="text-info mt-2 font-weight-bold">
                                              Admin Plus Level
                                            </h6>
                                            <div className="grid-box text-center  ">
                                              <label className=" col-form-label">
                                                Please Enter Password
                                              </label>
                                              <div className="mb-3 row">
                                                <div className="col-sm-10 ml-3">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </div>
                                              </div>
                                              <button
                                                className="btn btn-grd-primary btn-sm mb-2"
                                                onClick={handleSaveChanges}
                                              >
                                                Ok
                                              </button>
                                              <button
                                                className="btn btn-grd-inverse btn-sm mb-2 mx-1 "
                                                onClick={handleCancel}
                                              >
                                                Cancel
                                              </button>
                                            </div>
                                          </div>
                                        )} */}
                                      </form>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>Missing Properties in Ward</h5>
                                    </div>
                                    <div className="card-block">
                                      <div class="dt-responsive table-responsive">
                                        <table
                                          id="order-table"
                                          class="table table-striped table-bordered nowrap"
                                        >
                                          <thead>
                                            <tr>
                                              <th className="font-weight-bold">
                                                Ward Name
                                              </th>
                                              <th className="font-weight-bold">
                                                Property No
                                              </th>
                                              <th className="font-weight-bold">
                                                Partition No
                                              </th>
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
                                              <td>
                                                Senior Javascript Developer
                                              </td>
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
                                            {/* <tbody>
        {data.map((item, index) => (
          // Only render rows if both propertyNo and partitionNo are not null
          item.propertyNo !== null && item.partitionNo !== null && (
            <tr key={index}>
              <td>{item.wardName}</td>
              <td>{item.propertyNo}</td>
              <td>{item.partitionNo}</td>
            </tr>
          )
        ))}
      </tbody> */}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="tab-pane"
                                id="obliqueProperties"
                                role="tabpanel"
                              >
                                <div className="col-sm-12">
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>Ward Entry For Oblique Properties</h5>
                                    </div>
                                    <div className="card-block">
                                      <form
                                        id="main"
                                        method="post"
                                        action="/"
                                        novalidate=""
                                      >
                                        <div className="form-group row">
                                          <label className="col-sm-2 col-form-label">
                                            Ward No.
                                          </label>
                                          <div className="col-sm-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="wdName"
                                              id="wdName"
                                              value={wardNo}
                                              onChange={(e) =>
                                                setWardNo(e.target.value)
                                              }
                                              placeholder="Enter Ward No"
                                            />
                                            <span className="messages"></span>
                                          </div>
                                          <label className="col-sm-2 col-form-label">
                                            Property No
                                          </label>
                                          <div className="col-sm-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="PropNo"
                                              id="propNo"
                                              value={propertyNo}
                                              onChange={(e) =>
                                                setPropertyNo(e.target.value)
                                              }
                                              placeholder="Enter Property No"
                                            />
                                            <span className="messages"></span>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <label className="col-sm-2 col-form-label">
                                            From Oblique No
                                          </label>
                                          <div className="col-sm-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="fOblNo"
                                              id="fOblNo"
                                              value={fromObPropertyNo}
                                              onChange={(e) =>
                                                setFromObPropertyNo(
                                                  e.target.value
                                                )
                                              }
                                              placeholder="Enter From oblique No"
                                            />
                                            <span className="messages"></span>
                                          </div>
                                          {/*  */}
                                          <label className="col-sm-2 col-form-label">
                                            Property Range:
                                          </label>
                                          <div className="  mt-2">
                                            <span className="mx-5 text-danger ">
                                              3
                                            </span>
                                          </div>
                                          <label className="col-sm-2  col-form-label">
                                            Missing Property:
                                          </label>
                                          <div className=" mt-2 mx-5">
                                            <span className="text-center text-danger ">
                                              2
                                            </span>
                                          </div>{" "}
                                        </div>
                                        <div className="form-group row">
                                          <label className="col-sm-2 col-form-label">
                                            To Oblique No
                                          </label>
                                          <div className="col-sm-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="tOblNo"
                                              id="tOblNo"
                                              value={toObPropertyNo}
                                              onChange={(e) =>
                                                setToObPropertyNo(
                                                  e.target.value
                                                )
                                              }
                                              placeholder="Enter To Oblique No"
                                            />
                                            <span className="messages"></span>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-sm-4"></div>
                                          <div className="col-sm-6">
                                            <button
                                              type="button"
                                              className="btn waves-effect waves-light btn-grd-success m-r-20" data-toggle="modal" data-target="#large-Modal"
                                              onClick={handleCreateClick}
                                            >
                                              Create
                                            </button>
                                             <div
                          class="modal fade"
                          id="large-Modal"
                          tabindex="-1"
                          role="dialog"
                        >
                          <div class="modal-dialog modal-sm" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title"> Admin Plus Level</h4>

                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <label className="col-form-label mb-2 text-center">
                                  Enter the Password
                                </label>
                                <input
                                  type="text"
                                  className="form-control mb-2"
                                />
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-grd-success waves-effect "
                                  data-dismiss="modal"
                                >
                                  Submit
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-grd-inverse waves-effect waves-light "
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>


                                            <button
                                              className="btn btn-inverse waves-effect waves-light"
                                              onClick={clear}
                                            >
                                              Clear
                                            </button>
                                          </div>
                                        </div>
                                                               
                                        {/* {isEditingOb && (
                                          <div className="col-12 border border-primary col-md-3 d-flex flex-column align-items-center">
                                            <h6 className="text-info mt-2 font-weight-bold">
                                              Admin Plus Level
                                            </h6>
                                            <div className="grid-box text-center  ">
                                              <label className=" col-form-label">
                                                Please Enter Password
                                              </label>
                                              <div className="mb-3 row">
                                                <div className="col-sm-10 ml-3">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </div>
                                              </div>
                                              <button
                                                className="btn btn-grd-primary btn-sm mb-2"
                                                onClick={handleSaveChangesOb}
                                              >
                                                Ok
                                              </button>
                                              <button
                                                className="btn btn-grd-inverse btn-sm mb-2 mx-1 "
                                                onClick={handleCancelOb}
                                              >
                                                Cancel
                                              </button>
                                            </div>
                                          </div>
                                        )} */}
                                      </form>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header">
                                      <h5>Missing Properties in Ward</h5>
                                    </div>
                                    <div className="card-block">
                                      <div class="dt-responsive table-responsive">
                                        <table
                                          id="order-table"
                                          class="table table-striped table-bordered nowrap"
                                        >
                                          <thead>
                                            <tr>
                                              <th className="font-weight-bold">
                                                Ward Name
                                              </th>
                                              <th className="font-weight-bold">
                                                Property No
                                              </th>
                                              <th className="font-weight-bold">
                                                Partition No
                                              </th>
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
                                              <td>
                                                Senior Javascript Developer
                                              </td>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoWard;
