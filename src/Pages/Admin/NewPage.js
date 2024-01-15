import React from 'react'

const NewPage = () => {
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
                                                <h5>Create New Page</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Add Page</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <form id="main" method="post" action="/" novalidate="">
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Page Name</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" id="txtPageName"
                                                                                placeholder="Enter Page Name" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">Alias Name</label>
                                                                        <div className="col-sm-3">
                                                                            <input className="form-control" id="txtAliasName"
                                                                                placeholder="Enter Alias Name" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                    </div>
                                                                  <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Page Group</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="ddlPageGroup" className='form-control'>
                                                                                <option value="1">Assessment</option>
                                                                                <option value="2">AMC</option>
                                                                                <option value="2">Admin</option>
                                                                                <option value="2">Utility</option>
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
                                                                <h5>Page List</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div class="dt-responsive table-responsive">
                                                                    <table id="order-table" class="table table-striped table-bordered nowrap text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Page Name</th>
                                                                                <th>Alias Name</th>
                                                                                <th>Page Group</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>dataEntry</td>
                                                                                <td>Data Entry</td>
                                                                                <td>Assessment</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>valuation</td>
                                                                                <td>Valuation</td>
                                                                                <td>Assessment</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>appeal</td>
                                                                                <td>Appeal</td>
                                                                                <td>Assessment</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>amcAccount</td>
                                                                                <td>Amc Accounts</td>
                                                                                <td>AMC</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>advance</td>
                                                                                <td>Advance Payment</td>
                                                                                <td>AMC</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>taxpayment</td>
                                                                                <td>Tax Payment</td>
                                                                                <td>AMC</td>
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

export default NewPage
