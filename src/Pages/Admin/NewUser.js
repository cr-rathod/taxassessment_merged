import React from 'react'

const NewUser = () => {
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
                                                <h5>Create New User</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Add User</h5>
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
                                                                        <label className="col-sm-2 col-form-label">Date Of Birth</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" id="txtDOB"
                                                                                placeholder="Enter Date" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Name</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" id="txtName"
                                                                                placeholder="Enter Full Name" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">Address</label>
                                                                        <div className="col-sm-3">
                                                                            <textarea className="form-control" id="txtAddress"
                                                                                placeholder="Enter Address" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Email</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" id="txtEmail"
                                                                                placeholder="Enter Mail Id" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">Contact No</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" id="txtContactNo"
                                                                                placeholder="Enter Contact" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Active</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="ddlActive" className='form-control'>
                                                                                <option value="1">Active</option>
                                                                                <option value="2">De-Active</option>
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
                                                                <h5>User List</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div class="dt-responsive table-responsive">
                                                                    <table id="order-table" class="table table-striped table-bordered nowrap">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Name</th>
                                                                                <th>Username</th>
                                                                                <th>Email</th>
                                                                                <th>Contact</th>
                                                                                <th>Is Active</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Chetan Rathod</td>
                                                                                <td>crathod123</td>
                                                                                <td>chetan.rathod@coreproject.in</td>
                                                                                <td>7894561230</td>
                                                                                <td>Yes</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Jayesh Jadhao</td>
                                                                                <td>jjadhao123</td>
                                                                                <td>jayesh.jadho@coreproject.in</td>
                                                                                <td>7894451230</td>
                                                                                <td>Yes</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Sumit Kumar Singh</td>
                                                                                <td>sam123</td>
                                                                                <td>sumit.kumar@coreproject.in</td>
                                                                                <td>7894561145</td>
                                                                                <td>Yes</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Ravindra Shah</td>
                                                                                <td>ravishah123</td>
                                                                                <td>ravi.shah@coreproject.in</td>
                                                                                <td>8791561230</td>
                                                                                <td>Yes</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Administrator</td>
                                                                                <td>admin0001</td>
                                                                                <td>admin@coreproject.in</td>
                                                                                <td>7878951230</td>
                                                                                <td>Yes</td>
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

export default NewUser
