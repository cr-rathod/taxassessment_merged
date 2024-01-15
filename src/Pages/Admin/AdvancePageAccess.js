import React from 'react'

const AdvancePageAccess = () => {
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
                                                <h5>Advance Page Access to Users</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className='col-sm-12'>
                                                    <div className='row'>
                                                        <div className='col-sm-6'>
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <h5>User List</h5>
                                                                </div>
                                                                <div className="card-block">
                                                                    {/* <button className="btn waves-effect waves-light btn-grd-primary m-b-10">Unlock</button> */}
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-4 col-form-label">User Name</label>
                                                                        <div className="col-sm-4">
                                                                            <input type="text" className="form-control" id="txtSrchUserName"
                                                                                placeholder="Enter User Name" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <div className="col-sm-4">
                                                                            <button type="submit" className="btn waves-effect waves-light btn-grd-info m-r-20">Show</button>
                                                                        </div>
                                                                    </div>
                                                                    <div class="dt-responsive table-responsive">
                                                                        <table class="table table-striped table-bordered nowrap text-center">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>User Name</th>
                                                                                    <th>Select</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>Chetan Rathod</td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Laxman Jha</td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Monish Khan</td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Sameer Choudhary</td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-sm-6'>
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <h5>Pages and Access Rights</h5>
                                                                </div>
                                                                <div className="card-block">
                                                                    {/* <button className="btn waves-effect waves-light btn-grd-warning m-b-10">Lock</button> */}
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-4 col-form-label">Page Name</label>
                                                                        <div className="col-sm-4">
                                                                            <input type="text" className="form-control" id="txtSrchPageName"
                                                                                placeholder="Enter Page Name" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <div className="col-sm-4">
                                                                            <button type="submit" className="btn waves-effect waves-light btn-grd-info m-r-20">Show</button>
                                                                        </div>
                                                                    </div>
                                                                    <div class="dt-responsive table-responsive">
                                                                        <table class="table table-striped table-bordered nowrap text-center">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Page Name</th>
                                                                                    <th>None</th>
                                                                                    <th>Read</th>
                                                                                    <th>Write</th>
                                                                                    <th>Full Control</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>Data Entry</td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Appeal</td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Tax Payment</td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Valuation</td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                    <td><input type="checkbox" /></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='sub-title'></div>
                                                    <div className="row">
                                                        <div className="col-sm-5"></div>
                                                        <div className="col-sm-6">
                                                            <button type="submit" className="btn waves-effect waves-light btn-grd-success m-r-20">Save</button>
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
            </div>
        </>
    )
}

export default AdvancePageAccess
