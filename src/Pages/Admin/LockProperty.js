import React from 'react'

const LockProperty = () => {
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
                                                <h5>Lock Ward Wise Property</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Property Search</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <form id="main" method="post" action="/" novalidate="">
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-1 col-form-label">Ward</label>
                                                                        <div className="col-sm-2">
                                                                            <select name="" id="ddlWard" className='form-control'>
                                                                                <option value="All">All</option>
                                                                                <option value="1">W1</option>
                                                                                <option value="2">W2</option>
                                                                                <option value="3">W3</option>
                                                                                <option value="4">W4</option>
                                                                            </select>
                                                                        </div>
                                                                        <label className="col-sm-1 col-form-label">From Property</label>
                                                                        <div className="col-sm-2">
                                                                            <input type="text" className="form-control" id="txtFProperty"
                                                                                placeholder="Enter From Property" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <label className="col-sm-1 col-form-label">To Property</label>
                                                                        <div className="col-sm-2">
                                                                            <input type="text" className="form-control" id="txtTProperty"
                                                                                placeholder="Enter From Property" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <div className="col-sm-2">
                                                                            <button type="submit" className="btn waves-effect waves-light btn-grd-success m-r-20">Show</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Lock Property List</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className='col-sm-12'>
                                                                    <div className='row'>
                                                                        <div className='col-sm-6'>
                                                                            <div className="card">
                                                                                <div className="card-header">
                                                                                    <h5>Locked Properties</h5>
                                                                                </div>
                                                                                <div className="card-block">
                                                                                    <button className="btn waves-effect waves-light btn-grd-primary m-b-10">Unlock</button>
                                                                                    <div class="dt-responsive table-responsive">
                                                                                        <table class="table table-striped table-bordered nowrap text-center">
                                                                                            <thead>
                                                                                                <tr>
                                                                                                    <th>Ward No</th>
                                                                                                    <th>Property No</th>
                                                                                                    <th>Partition No</th>
                                                                                                    <th>Lock Status</th>
                                                                                                </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td>1</td>
                                                                                                    <td>1</td>
                                                                                                    <td></td>
                                                                                                    <td>Yes</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>1</td>
                                                                                                    <td>1</td>
                                                                                                    <td>1</td>
                                                                                                    <td>Yes</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>1</td>
                                                                                                    <td>2</td>
                                                                                                    <td></td>
                                                                                                    <td>Yes</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>1</td>
                                                                                                    <td>3</td>
                                                                                                    <td></td>
                                                                                                    <td>Yes</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>1</td>
                                                                                                    <td>3</td>
                                                                                                    <td>1</td>
                                                                                                    <td>Yes</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>1</td>
                                                                                                    <td>3</td>
                                                                                                    <td>2</td>
                                                                                                    <td>Yes</td>
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
                                                                                    <h5>Unlocked Properties</h5>
                                                                                </div>
                                                                                <div className="card-block">
                                                                                    <button className="btn waves-effect waves-light btn-grd-warning m-b-10">Lock</button>
                                                                                    <div class="dt-responsive table-responsive">
                                                                                        <table class="table table-striped table-bordered nowrap text-center">
                                                                                            <thead>
                                                                                                <tr>
                                                                                                    <th>Ward No</th>
                                                                                                    <th>Property No</th>
                                                                                                    <th>Partition No</th>
                                                                                                    <th>Lock Status</th>
                                                                                                </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td>1</td>
                                                                                                    <td>5</td>
                                                                                                    <td></td>
                                                                                                    <td>No</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>1</td>
                                                                                                    <td>6</td>
                                                                                                    <td></td>
                                                                                                    <td>No</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>1</td>
                                                                                                    <td>6</td>
                                                                                                    <td>1</td>
                                                                                                    <td>No</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>1</td>
                                                                                                    <td>7</td>
                                                                                                    <td></td>
                                                                                                    <td>No</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>1</td>
                                                                                                    <td>8</td>
                                                                                                    <td></td>
                                                                                                    <td>No</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>1</td>
                                                                                                    <td>8</td>
                                                                                                    <td>1</td>
                                                                                                    <td>No</td>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LockProperty
