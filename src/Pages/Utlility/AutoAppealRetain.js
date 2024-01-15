import React, { useState } from "react";

const AutoAppealRetain = () => {
  // Step 1: Add State for Input Values and Visibility
  const [wardValue, setWardValue] = useState("");
  const [fromPropertiesValue, setFromPropertiesValue] = useState("");
  const [toPropertiesValue, setToPropertiesValue] = useState("");
  const [showInputFields, setShowInputFields] = useState(false);

  // Step 2: Handle Double Click Event
  const handleRowDoubleClick = (rowData) => {
    // Update the corresponding input fields with row data
    setWardValue(rowData[0]);
    setFromPropertiesValue(rowData[1]);
    setToPropertiesValue(rowData[2]);

    // Show the input fields
    setShowInputFields(true);
  };
  // const [rowData, setRowData] = useState([]);
  // const handleRowDoubleClick = (row) => {
  //     console.log("Row double-clicked:", row);
  //   };

  //   useEffect(() => {
  //     fetch("http://your-node-server-api-endpoint")
  //       .then((response) => response.json())
  //       .then((data) => setRowData(data))
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }, []);
  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <h5>Retaintion Policy Factor Wise Master</h5>
                </div>
                <div className="card-block">
                  <form>
                    <div className="card border-info">
                      <div className="row p-2 justify-content-center">
                        <label className="mt-2">From Range</label>
                        <div className="col-sm-6 col-md-2">
                          <div className="form-group text-center">
                            <input
                              className="form-control"
                              name="ward"
                              id="ward"
                              value={wardValue}
                              readOnly
                            />
                            <span className="messages"></span>
                          </div>
                        </div>
                        <label className="mt-2">To</label>
                        <div className="col-sm-6 col-md-2">
                          <div className="form-group text-center">
                            <input
                              className="form-control"
                              name="fromProperties"
                              id="fromProperties"
                              value={fromPropertiesValue}
                              readOnly
                            />
                            <span className="messages"></span>
                          </div>
                        </div>
                        <label className="mt-2">Factor Value</label>
                        <div className="col-sm-6 col-md-2">
                          <div className="form-group text-center">
                            <input
                              className="form-control"
                              name="toProperties"
                              id="toProperties"
                              value={toPropertiesValue}
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
                        style={{ maxHeight: "320px", overflow: "auto" }}
                      >
                        <table
                          id="order-table"
                          class="table table-striped table-bordered nowrap"
                        >
                          <thead>
                            <tr>
                              <th className="font-weight-bold">From Factor</th>
                              <th className="font-weight-bold">To Factor</th>
                              <th className="font-weight-bold">Factor Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              onDoubleClick={() =>
                                handleRowDoubleClick(["0", "99999", "1.2"])
                              }
                            >
                              <td>0</td>
                              <td>99999</td>
                              <td>1.2</td>
                            </tr>
                            <tr
                              onDoubleClick={() =>
                                handleRowDoubleClick(["1", "99998", "1.2"])
                              }
                            >
                              <td>1</td>
                              <td>99998</td>
                              <td>1.2</td>
                            </tr>
                            {/* {rowData.map((row, index) => (
                <tr key={index} onDoubleClick={() => handleRowDoubleClick(row)}>
                  <td>{row.fromFactor}</td>
                  <td>{row.toFactor}</td>
                  <td>{row.factorValue}</td>
                </tr>
              ))} */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
  <div className="text-center  mt-2">
    <button className=" btn btn-grd-info  ">
      To Edit Click On Row
    </button>
  </div>
  <div className="text-center  mt-2 mx-3">
    <a href="/autoAppeal">
    <button className="btn btn-grd-inverse">
     Return To Auto Appeal
    </button>
    </a>
    <span className="messages"></span>
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
  );
};

export default AutoAppealRetain;
