import React, { useState } from "react";
import { Route } from "react-router-dom";

const PropertyClassification = () => {
  // Step 1: Add State for Input Values and Visibility - for Proerty discr
  const [PropValue, setPropValue] = useState("");
  const [ExpValue, setExpValue] = useState("");
  const [showInputFields, setShowInputFields] = useState(false);

  // Step 2: Handle Double Click Event - for Proerty discr
  const handleRowDoubleClick = (rowData) => {
    // Update the corresponding input fields with row data - for Proerty discr
    setPropValue(rowData[0]);
    setExpValue(rowData[1]);

    // Show the input fields
    setShowInputFields(true);
  };

  // Step 1: Add State for Input Values and Visibility - for Proerty use
  const [UseValue, setUseValue] = useState("");
  const [ExpUseValue, setExpUseValue] = useState("");
  const [showInputFieldsUse, setShowInputFieldsUse] = useState(false);

  // Step 2: Handle Double Click Event - for Proerty use
  const handleRowDoubleClickUse = (rowData) => {
    // Update the corresponding input fields with row data - for Proerty use
    setUseValue(rowData[0]);
    setExpUseValue(rowData[1]);

    // Show the input fields
    setShowInputFieldsUse(true);
  };

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Property Classification</h5>
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
                            Property Discription
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
                            Property Type Of Use
                          </a>
                          <div class="slide"></div>
                        </li>
                      </ul>
                      <div class="tab-content card-block">
                        <div
                          class="tab-pane active"
                          id="mainProperties"
                          role="tabpanel"
                        >
                          <div className="col-sm-12">
                            <div className="card">
                              <div className="card-header">
                                <h5>Property Discription</h5>
                              </div>
                              <div className="card-block">
                                <form
                                  id="main"
                                  method="post"
                                  action="/"
                                  novalidate=""
                                >
                                  <div className="">
                                    <div className="row p-2 justify-content-center">
                                      <label className="mt-2">
                                        Property Type
                                      </label>
                                      <div className="col-sm-6 col-md-2">
                                        <div className="form-group text-center">
                                          <input
                                            className="form-control"
                                            name="prop"
                                            id="prop"
                                            value={PropValue}
                                            readOnly
                                          />
                                          <span className="messages"></span>
                                        </div>
                                      </div>
                                      <label className="mt-2">
                                        Export Type
                                      </label>
                                      <div className="col-sm-6 col-md-2">
                                        <div className="form-group text-center">
                                          <input
                                            className="form-control"
                                            name="exp"
                                            id="exp"
                                            value={ExpValue}
                                            readOnly
                                          />
                                          <span className="messages"></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card mt-2 text-center">
                                    <div
                                      class="dt-responsive table-responsive"
                                      style={{
                                        maxHeight: "320px",
                                        overflow: "auto",
                                      }}
                                    >
                                      <table
                                        id="order-table"
                                        class="table table-striped table-bordered nowrap"
                                      >
                                        <thead>
                                          <tr>
                                            <th className="font-weight-bold">
                                              Property Type
                                            </th>
                                            <th className="font-weight-bold">
                                              Export Type
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClick([
                                                "खाजगी शाळा ",
                                                "बिगर निवासी",
                                              ])
                                            }
                                          >
                                            <td> खाजगी शाळा </td>
                                            <td>बिगर निवासी</td>
                                          </tr>
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClick([
                                                " न.प.शाळा",
                                                "नगरपरिषद मालमत्ता",
                                              ])
                                            }
                                          >
                                            <td> न.प.शाळा</td>
                                            <td>नगरपरिषद मालमत्ता</td>
                                          </tr>
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClick([
                                                " शासकीय शाळा",
                                                " शासकीय मालमत्ता",
                                              ])
                                            }
                                          >
                                            <td> शासकीय शाळा</td>
                                            <td> शासकीय मालमत्ता</td>
                                          </tr>{" "}
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClick([
                                                "डिस्पेन्सरी",
                                                "बिगर निवासी",
                                              ])
                                            }
                                          >
                                            <td>डिस्पेन्सरी</td>
                                            <td>बिगर निवासी</td>
                                          </tr>{" "}
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClick([
                                                " न.प.शाळा",
                                                "नगरपरिषद मालमत्ता",
                                              ])
                                            }
                                          >
                                            <td> न.प.शाळा</td>
                                            <td>नगरपरिषद मालमत्ता</td>
                                          </tr>{" "}
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClick([
                                                "खाजगी रुग्णालय",
                                                " बिगर निवासी",
                                              ])
                                            }
                                          >
                                            <td> खाजगी रुग्णालय</td>
                                            <td> बिगर निवासी</td>
                                          </tr>{" "}
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClick([
                                                "शासकीय रुग्णालय",
                                                " शासकीय मालमत्ता",
                                              ])
                                            }
                                          >
                                            <td>शासकीय रुग्णालय</td>
                                            <td>शासकीय मालमत्ता</td>
                                          </tr>{" "}
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClick([
                                                "प्राथमिक आरोग्य",
                                                "शासकीय मालमत्ता",
                                              ])
                                            }
                                          >
                                            <td>प्राथमिक आरोग्य</td>
                                            <td>शासकीय मालमत्ता</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="row justify-content-center align-items-center">
                                    <div className="text-center  mt-2">
                                      <button
                                        type="button"
                                        className="btn waves-effect waves-light btn-grd-success m-r-20"
                                        data-toggle="modal"
                                        data-target="#large-Modal"
                                      >
                                        Save
                                      </button>
                                      <div
                                        class="modal fade"
                                        id="large-Modal"
                                        tabindex="-1"
                                        role="dialog"
                                      >
                                        <div
                                          class="modal-dialog modal-sm"
                                          role="document"
                                        >
                                          <div class="modal-content ">
                                            <div class="modal-header">
                                              <h4 class="modal-title text-info">
                                                Updating Record successfully
                                              </h4>

                                              <button
                                                type="button"
                                                class="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                              >
                                                <span aria-hidden="true">
                                                  &times;
                                                </span>
                                              </button>
                                            </div>

                                            <div class="modal-footer justify-content-center ">
                                              <button
                                                type="button"
                                                class="btn btn-grd-success btn-block waves-effect mt-2"
                                                data-dismiss="modal"
                                              >
                                                Ok
                                              </button>

                                              <button
                                                type="button"
                                                class="btn btn-grd-inverse btn-block waves-effect"
                                                data-dismiss="modal"
                                              >
                                                Cancel
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
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
                                <h5>Property Type Of Use</h5>
                              </div>
                              <div className="card-block">
                                <form
                                  id="main"
                                  method="post"
                                  action="/"
                                  novalidate=""
                                >
                                  <div className="">
                                    <div className="row p-2 justify-content-center">
                                      <label className="mt-2">
                                        Property Use
                                      </label>
                                      <div className="col-sm-6 col-md-2">
                                        <div className="form-group text-center">
                                          <input
                                            className="form-control"
                                            name="prop"
                                            id="prop"
                                            value={UseValue}
                                            readOnly
                                          />
                                          <span className="messages"></span>
                                        </div>
                                      </div>
                                      <label className="mt-2">Export Use</label>
                                      <div className="col-sm-6 col-md-2">
                                        <div className="form-group text-center">
                                          <input
                                            className="form-control"
                                            name="exp"
                                            id="exp"
                                            value={ExpUseValue}
                                            readOnly
                                          />
                                          <span className="messages"></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card mt-2 text-center">
                                    <div
                                      class="dt-responsive table-responsive"
                                      style={{
                                        maxHeight: "320px",
                                        overflow: "auto",
                                      }}
                                    >
                                      <table
                                        id="order-table"
                                        class="table table-striped table-bordered nowrap"
                                      >
                                        <thead>
                                          <tr>
                                            <th className="font-weight-bold">
                                              Type Of Use
                                            </th>
                                            <th className="font-weight-bold">
                                              Export Use
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClickUse([
                                                "खाजगी शाळा ",
                                                "बिगर निवासी",
                                              ])
                                            }
                                          >
                                            <td> खाजगी शाळा </td>
                                            <td>बिगर निवासी</td>
                                          </tr>
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClickUse([
                                                " न.प.शाळा",
                                                "नगरपरिषद मालमत्ता",
                                              ])
                                            }
                                          >
                                            <td> न.प.शाळा</td>
                                            <td>नगरपरिषद मालमत्ता</td>
                                          </tr>
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClickUse([
                                                " शासकीय शाळा",
                                                " शासकीय मालमत्ता",
                                              ])
                                            }
                                          >
                                            <td> शासकीय शाळा</td>
                                            <td> शासकीय मालमत्ता</td>
                                          </tr>{" "}
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClickUse([
                                                "डिस्पेन्सरी",
                                                "बिगर निवासी",
                                              ])
                                            }
                                          >
                                            <td>डिस्पेन्सरी</td>
                                            <td>बिगर निवासी</td>
                                          </tr>{" "}
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClickUse([
                                                " न.प.शाळा",
                                                "नगरपरिषद मालमत्ता",
                                              ])
                                            }
                                          >
                                            <td> न.प.शाळा</td>
                                            <td>नगरपरिषद मालमत्ता</td>
                                          </tr>{" "}
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClickUse([
                                                "खाजगी रुग्णालय",
                                                " बिगर निवासी",
                                              ])
                                            }
                                          >
                                            <td> खाजगी रुग्णालय</td>
                                            <td> बिगर निवासी</td>
                                          </tr>{" "}
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClickUse([
                                                "शासकीय रुग्णालय",
                                                " शासकीय मालमत्ता",
                                              ])
                                            }
                                          >
                                            <td>शासकीय रुग्णालय</td>
                                            <td>शासकीय मालमत्ता</td>
                                          </tr>{" "}
                                          <tr
                                            onDoubleClick={() =>
                                              handleRowDoubleClickUse([
                                                "प्राथमिक आरोग्य",
                                                "शासकीय मालमत्ता",
                                              ])
                                            }
                                          >
                                            <td>प्राथमिक आरोग्य</td>
                                            <td>शासकीय मालमत्ता</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="row justify-content-center align-items-center">
                                    <div className="text-center  mt-2">
                                      <button
                                        type="button"
                                        className="btn waves-effect waves-light btn-grd-success m-r-20"
                                        data-toggle="modal"
                                        data-target="#large-Modal"
                                      >
                                        Save
                                      </button>
                                      <div
                                        class="modal fade"
                                        id="large-Modal"
                                        tabindex="-1"
                                        role="dialog"
                                      >
                                        <div
                                          class="modal-dialog modal-sm"
                                          role="document"
                                        >
                                          <div class="modal-content ">
                                            <div class="modal-header">
                                              <h4 class="modal-title text-info">
                                                Updating Record successfully
                                              </h4>

                                              <button
                                                type="button"
                                                class="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                              >
                                                <span aria-hidden="true">
                                                  &times;
                                                </span>
                                              </button>
                                            </div>

                                            <div class="modal-footer justify-content-center ">
                                              <button
                                                type="button"
                                                class="btn btn-grd-success btn-block waves-effect mt-2"
                                                data-dismiss="modal"
                                              >
                                                Ok
                                              </button>

                                              <button
                                                type="button"
                                                class="btn btn-grd-inverse btn-block waves-effect"
                                                data-dismiss="modal"
                                              >
                                                Cancel
                                              </button>
                                            </div>
                                          </div>
                                        </div>
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

export default PropertyClassification;
