import React from 'react'

const RetainPolicyYear = () => {
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
                                                <h5>Retaintion Policy Year Wise Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Add Year</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <form id="main" method="post" action="/" novalidate="">
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Year Range From</label>
                                                                        <div className="col-sm-2">
                                                                            <input type="text" className="form-control" id="txtYearFrom"
                                                                                placeholder="Enter Factor From" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <label className="col-sm-1 col-form-label">To</label>
                                                                        <div className="col-sm-2">
                                                                            <input type="text" className="form-control" id="txtYearTo"
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
                                                                                <th>Year From</th>
                                                                                <th>Year To</th>
                                                                                <th>Factor Value</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>2003</td>
                                                                                <td>2009</td>
                                                                                <td>1.2</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>2004</td>
                                                                                <td>2007</td>
                                                                                <td>16</td>
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

export default RetainPolicyYear
