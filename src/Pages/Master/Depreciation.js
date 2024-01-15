import React from 'react'

const Depreciation = () => {
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
                                                <h5>Depreciation Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul class="nav nav-tabs md-tabs" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" data-toggle="tab" href="#depByChart" role="tab">Depreciation Rates By Chart</a>
                                                                <div class="slide"></div>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" data-toggle="tab" href="#depRates" role="tab">Add Depreciation Rates</a>
                                                                <div class="slide"></div>
                                                            </li>
                                                        </ul>
                                                        <div class="tab-content card-block">
                                                            <div class="tab-pane active" id="depByChart" role="tabpanel">
                                                                <div className="col-sm-12">
                                                                    <div className="card">
                                                                        <div className="card-header">
                                                                            <h5>Depreciation Master</h5>
                                                                        </div>
                                                                        <div className="card-block">
                                                                            <div className='col-sm-12 col-md-12 col-lg-12 col-xs-12'>
                                                                                <div className='row'>
                                                                                    <div className='col-sm-5 col-md-5 col-lg-5 col-xs-5'>
                                                                                        <div className="card">
                                                                                            <div className="card-block">
                                                                                                <div className="form-group row">
                                                                                                    <label className="col-sm-3 col-form-label">Year</label>
                                                                                                    <div className="col-sm-3">
                                                                                                        <input type="text" className="form-control" id="txtYear"
                                                                                                            placeholder="Year" />
                                                                                                        <span className="messages"></span>
                                                                                                    </div>
                                                                                                    <label className="col-sm-3 col-form-label">Min Year</label>
                                                                                                    <div className="col-sm-3">
                                                                                                        <input type="text" className="form-control" id="txtMinYear"
                                                                                                            placeholder="Min Year" />
                                                                                                        <span className="messages"></span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="form-group row">
                                                                                                    <label className="col-sm-3 col-form-label">Max Year</label>
                                                                                                    <div className="col-sm-3">
                                                                                                        <input type="text" className="form-control" id="txtMaxYear"
                                                                                                            placeholder="Max Year" />
                                                                                                        <span className="messages"></span>
                                                                                                    </div>
                                                                                                    {/* <div className='col-sm-3'> </div> */}
                                                                                                    <div className='col-sm-3 text-right'>
                                                                                                        <button className='btn btn-sm btn-mat waves-effect waves-light btn-grd-primary'>
                                                                                                            Add Range
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="dt-responsive table-responsive">
                                                                                                    <table class="table table-striped table-bordered nowrap">
                                                                                                        <thead>
                                                                                                            <tr>
                                                                                                                <th>Range</th>
                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td>0-5</td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td>6-10</td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-sm-7 col-md-7 col-lg-7 col-xs-7'>
                                                                                        <div className="card">
                                                                                            <div className="card-block">
                                                                                                <div className='row'>
                                                                                                    <button className='btn btn-mat waves-effect waves-light btn-grd-info'>
                                                                                                        Create Depreciation Chart
                                                                                                    </button>
                                                                                                </div>
                                                                                                <div className='sub-title'> </div>
                                                                                                <div class="dt-responsive table-responsive">
                                                                                                    <table class="table table-striped table-bordered nowrap text-center">
                                                                                                        <thead>
                                                                                                            <tr>
                                                                                                                <th>Construction Type / Construction Year</th>
                                                                                                                <th>0-5</th>
                                                                                                                <th>6-10</th>
                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td>A</td>
                                                                                                                <td>50</td>
                                                                                                                <td>25</td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td>B</td>
                                                                                                                <td>15</td>
                                                                                                                <td>29</td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td>C</td>
                                                                                                                <td>35</td>
                                                                                                                <td>20</td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td>D</td>
                                                                                                                <td>15</td>
                                                                                                                <td>30</td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div className='sub-title'></div>
                                                                            <div className="row">
                                                                                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 m-l-50"></div>
                                                                                <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7">
                                                                                    <button className="btn waves-effect waves-light btn-grd-info m-r-30">Generate Rates</button>
                                                                                    <button className="btn waves-effect waves-light btn-grd-primary m-r-30">Update Rates</button>
                                                                                    <button className="btn waves-effect waves-light btn-grd-danger m-r-30">Delete</button>
                                                                                    <button className="btn waves-effect waves-light btn-grd-success m-r-30">Export</button>
                                                                                    <button className="btn waves-effect waves-light btn-grd-inverse">Cancel</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane" id="depRates" role="tabpanel">
                                                                <div className="col-sm-12">
                                                                    <div className="card">
                                                                        <div className="card-header">
                                                                            <h5>Depreciation Master</h5>
                                                                        </div>
                                                                        <div className="card-block">
                                                                            <div className="form-group row">
                                                                                <label className="col-sm-2 col-form-label">Year</label>
                                                                                <div className="col-sm-2">
                                                                                    <input type="text" className="form-control" id="txtYear"
                                                                                        placeholder="Year" />
                                                                                    <span className="messages"></span>
                                                                                </div>
                                                                                <label className="col-sm-2 col-form-label">Min Year</label>
                                                                                <div className="col-sm-2">
                                                                                    <input type="text" className="form-control" id="txtMinYear"
                                                                                        placeholder="Min Year" />
                                                                                    <span className="messages"></span>
                                                                                </div>
                                                                                <label className="col-sm-2 col-form-label">Max Year</label>
                                                                                <div className="col-sm-2">
                                                                                    <input type="text" className="form-control" id="txtMaxYear"
                                                                                        placeholder="Max Year" />
                                                                                    <span className="messages"></span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group row">
                                                                                <label className="col-sm-2 col-form-label">Rates</label>
                                                                                <div className="col-sm-2">
                                                                                    <input type="text" className="form-control" id="txtRate"
                                                                                        placeholder="Rate" />
                                                                                    <span className="messages"></span>
                                                                                </div>
                                                                                <label className="col-sm-2 col-form-label">Construction Type</label>
                                                                                <div className="col-sm-2">
                                                                                    <select name="alvrv" id="ddlConsType" className='form-control'>
                                                                                        <option value="A">A</option>
                                                                                        <option value="B">B</option>
                                                                                        <option value="C">C</option>
                                                                                        <option value="D">D</option>
                                                                                        <option value="E">E</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className='col-sm-2'>
                                                                                    <button className='btn btn-mat waves-effect waves-light btn-grd-success'>
                                                                                        Add Range
                                                                                    </button>
                                                                                </div>
                                                                                <div className='col-sm-1'>
                                                                                    <button className='btn btn-mat waves-effect waves-light btn-grd-info'>
                                                                                        Clear
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <div className="card-block">
                                                                            <div class="dt-responsive table-responsive">
                                                                                <table class="table table-striped table-bordered nowrap text-center">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>Construction Id</th>
                                                                                            <th>Year</th>
                                                                                            <th>Rate</th>
                                                                                            <th>Min Year</th>
                                                                                            <th>Max Year</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>A</td>
                                                                                            <td>2023</td>
                                                                                            <td>120</td>
                                                                                            <td>0</td>
                                                                                            <td>5</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>B</td>
                                                                                            <td>2023</td>
                                                                                            <td>95</td>
                                                                                            <td>6</td>
                                                                                            <td>10</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>C</td>
                                                                                            <td>2023</td>
                                                                                            <td>155</td>
                                                                                            <td>11</td>
                                                                                            <td>15</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>D</td>
                                                                                            <td>2023</td>
                                                                                            <td>165</td>
                                                                                            <td>16</td>
                                                                                            <td>20</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>E</td>
                                                                                            <td>2023</td>
                                                                                            <td>112</td>
                                                                                            <td>21</td>
                                                                                            <td>25</td>
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
        </>
    )
}

export default Depreciation
