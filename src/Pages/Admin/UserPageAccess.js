import React from 'react'

const UserPageAccess = () => {
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
                                                <h5>User Page Access</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Grant Access</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <form id="main" method="post" action="/" novalidate="">
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Role</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="ddlRole" className='form-control'>
                                                                                <option value="All">Super Admin</option>
                                                                                <option value="All">Admin</option>
                                                                                <option value="1">Office Employee</option>
                                                                                <option value="2">Site Employee</option>
                                                                                <option value="2">Council Employee</option>
                                                                            </select>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">User Name</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="ddlUserName" className='form-control'>
                                                                                <option value="All">All</option>
                                                                                <option value="1">Chetan Rathod</option>
                                                                                <option value="2">Jayesh Shah</option>
                                                                                <option value="3">Ravindra Jadhao</option>
                                                                                <option value="4">Sumit Kumar Singh</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Page Group</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="ddlPageGroup" className='form-control'>
                                                                                <option value="1">All</option>
                                                                                <option value="1">Assessment</option>
                                                                                <option value="2">AMC</option>
                                                                                <option value="2">Admin</option>
                                                                                <option value="2">Utility</option>
                                                                            </select>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">Page Name</label>
                                                                        <div className="col-sm-3">
                                                                            <select id="ddlPageName" class="js-example-placeholder-multiple col-sm-12" multiple="multiple">
                                                                                <option value="AL">All</option>
                                                                                <option value="AL">Data Entry</option>
                                                                                <option value="WY">Tax Payment</option>
                                                                                <option value="WY">Valuation</option>
                                                                                <option value="WY">Zoning</option>
                                                                                <option value="WY">Construction Type</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-sm-5"></div>
                                                                        <div className="col-sm-6">
                                                                            <button type="submit" className="btn waves-effect waves-light btn-grd-success m-r-20">Save</button>
                                                                            <button className="btn waves-effect waves-light btn-grd-primary">Clear</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>User Page Access List</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div class="dt-responsive table-responsive">
                                                                    <table id="order-table" class="table table-striped table-bordered nowrap text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Page Group</th>
                                                                                <th>Page Name</th>
                                                                                <th>User Name</th>
                                                                                <th>User Role</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Assessment</td>
                                                                                <td>Data Entry</td>
                                                                                <td>Chetan Rathod</td>
                                                                                <td>Admin</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Assessment</td>
                                                                                <td>Valuation</td>
                                                                                <td>Chetan Rathod</td>
                                                                                <td>Admin</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Assessment</td>
                                                                                <td>Appeal</td>
                                                                                <td>Jayesh Shah</td>
                                                                                <td>Admin</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Assessment</td>
                                                                                <td>Data Entry</td>
                                                                                <td>Jayesh Shah</td>
                                                                                <td>Admin</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Assessment</td>
                                                                                <td>Valuation</td>
                                                                                <td>Jayesh Shah</td>
                                                                                <td>Admin</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Assessment</td>
                                                                                <td>Appeal</td>
                                                                                <td>Jayesh Shah</td>
                                                                                <td>Admin</td>
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
        </>
    )
}

export default UserPageAccess
