import React from 'react'

const DiscountSlabMaster = () => {
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
                                                <h5>Discount Slab Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Add Discount</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <form id="main" method="post" action="/" novalidate="">
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Zone</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="ddlZone" className='form-control'>
                                                                                <option value="All">All</option>
                                                                                <option value="1">Zone 1</option>
                                                                                <option value="2">Zone 2</option>
                                                                            </select>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">Ward</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="ddlWard" className='form-control'>
                                                                                <option value="All">All</option>
                                                                                <option value="1">W1</option>
                                                                                <option value="2">W2</option>
                                                                                <option value="3">W3</option>
                                                                                <option value="4">W4</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">From Date</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" id="txtFDate"
                                                                                placeholder="Enter From Date" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">To Date</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" id="txtTDate"
                                                                                placeholder="Enter From Date" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Year Type</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="ddlYearType" className='form-control'>
                                                                                <option value="All">All</option>
                                                                                <option value="1">Current</option>
                                                                                <option value="2">Pending</option>
                                                                            </select>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">Head Type</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="ddlHeadType" className='form-control'>
                                                                                <option value="All">All</option>
                                                                                <option value="1">Property Tax</option>
                                                                                <option value="2">Education Tax</option>
                                                                                <option value="2">Interest</option>
                                                                                <option value="2">Employement Tax</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Payment Type</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="ddlPaymentType" className='form-control'>
                                                                                <option value="All">All</option>
                                                                                <option value="1">Online</option>
                                                                                <option value="2">Offline</option>
                                                                            </select>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">Percentage (%)</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" id="txtPercent"
                                                                                placeholder="Percentage (%)" />
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
                                                                <h5>Tax Name List</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div class="dt-responsive table-responsive">
                                                                    <table id="order-table" class="table table-striped table-bordered nowrap">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Zone</th>
                                                                                <th>Ward</th>
                                                                                <th>From Date</th>
                                                                                <th>To Date</th>
                                                                                <th>Year Type</th>
                                                                                <th>Head Type</th>
                                                                                <th>Percentage (%)</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Zone 1</td>
                                                                                <td>All</td>
                                                                                <td>01-04-2024</td>
                                                                                <td>30-06-2024</td>
                                                                                <td>Current</td>
                                                                                <td>Interest</td>
                                                                                <td>10</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Zone 2</td>
                                                                                <td>W1, w2, w3, w4,w5</td>
                                                                                <td>01-04-2024</td>
                                                                                <td>30-06-2024</td>
                                                                                <td>All</td>
                                                                                <td>Property Tax</td>
                                                                                <td>2</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Zone 1</td>
                                                                                <td>All</td>
                                                                                <td>01-04-2024</td>
                                                                                <td>30-06-2024</td>
                                                                                <td>Current</td>
                                                                                <td>Education Tax</td>
                                                                                <td>5</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>All</td>
                                                                                <td>All</td>
                                                                                <td>01-07-2024</td>
                                                                                <td>30-09-2024</td>
                                                                                <td>Current</td>
                                                                                <td>Total</td>
                                                                                <td>2</td>
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

export default DiscountSlabMaster
