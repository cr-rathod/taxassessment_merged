import React from 'react'

const TaxName = () => {
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
                                                <h5>Tax Name Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Add Tax Name</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <form id="main" method="post" action="/" novalidate="">
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Tax Name</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" id="txtTaxName"
                                                                                placeholder="Enter Tax Name" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">Status</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="ddlStatus" className='form-control'>
                                                                                <option value="1">True</option>
                                                                                <option value="0">False</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Alias Name</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" id="txtAliasName"
                                                                                placeholder="Enter Alias Name" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">Interest</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="ddlInterest" className='form-control'>
                                                                                <option value="1">True</option>
                                                                                <option value="0">False</option>
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
                                                                <h5>Tax Name List</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div class="dt-responsive table-responsive">
                                                                    <table id="order-table" class="table table-striped table-bordered nowrap">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Tax Name</th>
                                                                                <th>Alias Name</th>
                                                                                <th>Status</th>
                                                                                <th>Interest</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Property Tax</td>
                                                                                <td>Property Tax</td>
                                                                                <td>False</td>
                                                                                <td>False</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Education Tax</td>
                                                                                <td>Education Tax</td>
                                                                                <td>True</td>
                                                                                <td>False</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Tree Cess</td>
                                                                                <td>Tree Cess</td>
                                                                                <td>False</td>
                                                                                <td>True</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Employeement Tax</td>
                                                                                <td>Employeement Tax</td>
                                                                                <td>False</td>
                                                                                <td>True</td>
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

export default TaxName
