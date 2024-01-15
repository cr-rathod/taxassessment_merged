import React from 'react'

const RetainPolicyFactor = () => {
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
                                                <h5>Retaintion Policy Factor Wise Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Add Factor</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <form id="main" method="post" action="/" novalidate="">
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Factor Range From</label>
                                                                        <div className="col-sm-2">
                                                                            <input type="text" className="form-control" id="txtFactFrom"
                                                                                placeholder="Enter Factor From" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <label className="col-sm-1 col-form-label">To</label>
                                                                        <div className="col-sm-2">
                                                                            <input type="text" className="form-control" id="txtFactTo"
                                                                                placeholder="Enter Factor To" />
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">Factor Value</label>
                                                                        <div className="col-sm-2">
                                                                            <input type="text" className="form-control" id="txtFactValue"
                                                                                placeholder="Enter Factor Value" />
                                                                            <span className="messages"></span>
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
                                                                <h5>Factor List</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div class="dt-responsive table-responsive">
                                                                    <table id="order-table" class="table table-striped table-bordered nowrap">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Factor From</th>
                                                                                <th>Factor To</th>
                                                                                <th>Factor Value</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>0</td>
                                                                                <td>99</td>
                                                                                <td>1.2</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>100</td>
                                                                                <td>999</td>
                                                                                <td>1.5</td>
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

export default RetainPolicyFactor
