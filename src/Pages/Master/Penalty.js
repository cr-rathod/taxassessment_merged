import React from 'react'

const Penalty = () => {
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
                                                <h5>Penalty Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-form-label">Year</label>
                                                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                                        <input type="text" className="form-control" name="year" id="year"
                                                            placeholder="Year" />
                                                        <span className="messages"></span>
                                                    </div>
                                                    <div className='col-sm-2'>
                                                        <button className='btn btn-primary'>Add</button>

                                                    </div>
                                                </div>

                                                <div className='sub-title'></div>
                                                <div className="card">
                                                    {/* <div className="card-header">
                                                        <h5>Ward List</h5>
                                                    </div> */}
                                                    <div className="card-block">
                                                        <div class="dt-responsive table-responsive">
                                                            <table class="table table-striped table-bordered nowrap">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Year</th>
                                                                        <th>Is Applied Owner Id Wise</th>
                                                                        <th>Is ValidateDate</th>
                                                                        <th>Property Tax</th>
                                                                        <th>Edcucation Tax</th>
                                                                        <th>Employment Tax</th>
                                                                        <th>Sp Educattion Tax</th>
                                                                        <th>Drain Cess</th>
                                                                        <th>Road Cess</th>
                                                                        <th>Tree Cess</th>
                                                                        <th>Sewage Disposal </th>
                                                                        <th>Sanitation</th>
                                                                        <th>Water Benefit</th>
                                                                        <th>Sp Wate Cessr</th>
                                                                        <th>Water Bill</th>
                                                                        <th>Fire Cess</th>
                                                                        <th>Major Building</th>
                                                                        <th>Light Cess</th>
                                                                        <th>Tax 1</th>
                                                                        <th>Tax 2</th>
                                                                        <th>Tax 3</th>
                                                                        <th>Tax 4</th>
                                                                        <th>Tax 5</th>
                                                                        <th>Bill Gen Date</th>
                                                                        <th>Start Half Current</th>
                                                                        <th>End Half Current</th>
                                                                        <th>Start Full Current</th>
                                                                        <th>End Full Current</th>
                                                                        <th>Start Full Pending</th>
                                                                        <th>End Full Pending</th>
                                                                        <th>Rate Current</th>
                                                                        <th>Rate Pending</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td><input type="checkbox" /></td>
                                                                        <td> <input type="text" className="form-control" id="txtTDate"
                                                                            placeholder="Enter Date" /></td>
                                                                        <td> <input type="text" className="form-control" id="txtTDate"
                                                                            placeholder="Enter Date" /></td>
                                                                        <td> <input type="text" className="form-control" id="txtTDate"
                                                                            placeholder="Enter Date" /></td>
                                                                        <td> <input type="text" className="form-control" id="txtTDate"
                                                                            placeholder="Enter Date" /></td>
                                                                        <td> <input type="text" className="form-control" id="txtTDate"
                                                                            placeholder="Enter Date" /></td>
                                                                        <td> <input type="text" className="form-control" id="txtTDate"
                                                                            placeholder="Enter Date" /></td>
                                                                        <td> <input type="text" className="form-control" id="txtTDate"
                                                                            placeholder="Enter Date" /></td>
                                                                        <td> <input type="text" className="form-control" id="txtTDate"
                                                                            placeholder="Enter Rate" /></td>
                                                                        <td> <input type="text" className="form-control" id="txtTDate"
                                                                            placeholder="Enter Rate" /></td>
                                                                        
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='sub-title'></div>
                                                <div className="row">
                                                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 m-l-50"></div>
                                                    <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                                        <button type="submit" className="btn waves-effect waves-light btn-grd-success m-r-30">Save</button>
                                                        <button className="btn waves-effect waves-light btn-grd-primary">Clear</button>
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
    )
}

export default Penalty
