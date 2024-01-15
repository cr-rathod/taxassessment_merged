import React from 'react'

const ZoneSection = () => {
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
                                                <h5>Zone Section Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul class="nav nav-tabs md-tabs" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" data-toggle="tab" href="#zonesec" role="tab">Zone Section</a>
                                                                <div class="slide"></div>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" data-toggle="tab" href="#wardtozone" role="tab">Add Wards to Zone</a>
                                                                <div class="slide"></div>
                                                            </li>
                                                        </ul>
                                                        <div class="tab-content card-block">
                                                            <div class="tab-pane active" id="zonesec" role="tabpanel">
                                                                <div className="col-sm-12">
                                                                    <div className="card">
                                                                        <div className="card-header">
                                                                            <h5>New Zone Section</h5>
                                                                        </div>
                                                                        <div className="card-block">
                                                                            <form id="main" method="post" action="/" novalidate="">
                                                                                <div className="form-group row">
                                                                                    <label className="col-sm-2 col-form-label">Zone Section No</label>
                                                                                    <div className="col-sm-3">
                                                                                        <input type="text" className="form-control" id="txtZoneSecNo"
                                                                                            placeholder="Zone Section No" />
                                                                                        <span className="messages"></span>
                                                                                    </div>
                                                                                    <label className="col-sm-2 col-form-label">Section Type</label>
                                                                                    <div className="col-sm-3">
                                                                                        <input type="text" className="form-control" id="txtSecType"
                                                                                            placeholder="Enter Section Type" />
                                                                                        <span className="messages"></span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="form-group row">
                                                                                    <label className="col-sm-2 col-form-label">Remark</label>
                                                                                    <div className="col-sm-3">
                                                                                        <input type="text" className="form-control" name="remark" id="txtRemark"
                                                                                            placeholder="Enter Remark" />
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
                                                                        <div className="card-block">
                                                                            <div class="dt-responsive table-responsive">
                                                                                <table id="newcons-table" class="table table-striped table-bordered nowrap">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>Zone Section</th>
                                                                                            <th>Section Type</th>
                                                                                            <th>Remark</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>Z1</td>
                                                                                            <td>Z1</td>
                                                                                            <td>Only One Zone</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Z2</td>
                                                                                            <td>Z2</td>
                                                                                            <td>2nd Zone</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane" id="wardtozone" role="tabpanel">
                                                                <div className="col-sm-12">
                                                                    <div className="card">
                                                                        <div className="card-block">
                                                                            <form id="main" method="post" action="/" novalidate="">
                                                                                <div className="form-group row">
                                                                                    <label className="col-sm-2 col-form-label">Construction Id</label>
                                                                                    <div className="col-sm-3">
                                                                                        <select name="typeofuse" id="typeofuse" className='form-control'>
                                                                                            <option value="-1">Select Zone section</option>
                                                                                            <option value="-1">Z1</option>
                                                                                            <option value="-1">Z2</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-sm-12 col-md-12 col-xs-12'>
                                                                                    <div className='row'>
                                                                                        <div className='col-sm-5 col-md-5 col-xs-5'>
                                                                                            <div class="dt-responsive table-responsive">
                                                                                                <table class="table table-striped table-bordered nowrap">
                                                                                                    <thead>
                                                                                                        <tr>
                                                                                                            <th>Wards</th>
                                                                                                        </tr>
                                                                                                    </thead>
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td>1</td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>2</td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-sm-2 col-md-2 col-xs-2'>
                                                                                            <div className='row'>

                                                                                                <button className='btn waves-effect waves-light btn-success btn-block'>
                                                                                                    <i className='fa fa-angle-left' />
                                                                                                </button>
                                                                                                <button className='btn waves-effect waves-light btn-primary btn-block'>
                                                                                                    <i className='fa fa-angle-left' />
                                                                                                    <i className='fa fa-angle-left' />
                                                                                                </button>
                                                                                                <button className='btn waves-effect waves-light btn-danger btn-block'>
                                                                                                    <i className='fa fa-angle-right' />
                                                                                                </button>
                                                                                                <button className='btn waves-effect waves-light btn-info btn-block'>
                                                                                                    <i className='fa fa-angle-right' />
                                                                                                    <i className='fa fa-angle-right' />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='col-sm-5 col-md-5 col-xs-5'>
                                                                                            <div class="dt-responsive table-responsive">
                                                                                                <table class="table table-striped table-bordered nowrap">
                                                                                                    <thead>
                                                                                                        <tr>
                                                                                                            <th>Wards</th>
                                                                                                        </tr>
                                                                                                    </thead>
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td>1</td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td>2</td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row m-5">
                                                                                    <div className="col-sm-5"></div>
                                                                                    <div className="col-sm-5">
                                                                                        <button type="submit" className="btn waves-effect waves-light btn-grd-success m-r-20">Save</button>
                                                                                        <button className="btn waves-effect waves-light btn-grd-primary">Clear</button>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
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

export default ZoneSection
