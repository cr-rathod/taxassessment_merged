import React from 'react'

const RateMaster = () => {
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
                                                <h5>Rate Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="card">
                                                    <div className="card-block">
                                                        <div className="form-group row">
                                                            <label className="col-sm-2 col-form-label">Type Of Rate</label>
                                                            <div className="col-sm-3">
                                                                <select id="ddlRateType" className='form-control'>
                                                                    <option value="-1">RV</option>
                                                                    <option value="-1">CV</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-2 col-form-label">Zone Section</label>
                                                            <div className="col-sm-3">
                                                                <select name="alvrv" id="ddlZoneSec" className='form-control'>
                                                                    <option value="-1">Select option</option>
                                                                    <option value="ALV">Z1</option>
                                                                    <option value="RV">Z2</option>
                                                                </select>
                                                            </div>
                                                            <label className="col-sm-2 col-form-label">Year</label>
                                                            <div className="col-sm-3">
                                                                <input type="text" className="form-control" id="txtYear"
                                                                    placeholder="Enter Year" />
                                                                <span className="messages"></span>
                                                            </div>

                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-2 col-form-label">Min Year</label>
                                                            <div className="col-sm-3">
                                                                <input type="text" className="form-control" id="txtMinYear"
                                                                    placeholder="Enter Min Year" />
                                                                <span className="messages"></span>
                                                            </div>
                                                            <label className="col-sm-2 col-form-label">Max Year</label>
                                                            <div className="col-sm-3">
                                                                <input type="text" className="form-control" id="txtMaxYear"
                                                                    placeholder="Enter Max Year" />
                                                                <span className="messages"></span>
                                                            </div>
                                                        </div>
                                                        <div className='sub-title'>Criteria</div>
                                                        <div class="form-radio">
                                                            <div class="radio radio-inline">
                                                                <label>
                                                                    <input type="radio" name="radio" />
                                                                    <i class="helper"></i>Multiplier
                                                                </label>
                                                            </div>
                                                            <div class="radio radio-inline">
                                                                <label>
                                                                    <input type="radio" name="radio" />
                                                                    <i class="helper"></i>Using Type
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-sm-12 col-md-12 col-xs-12 col-xl-12 col-lg-12'>
                                                                <div>
                                                                    <div className='form-group row'>
                                                                        <label className="col-sm-2 col-form-label">Industrial Multiplier</label>
                                                                        <div className="col-sm-2">
                                                                            <input type="text" className="form-control" id="txtIndMulti"
                                                                                placeholder="Enter multiplier" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='form-group row'>
                                                                        <label className="col-sm-2 col-form-label">Commercial Multiplier</label>
                                                                        <div className="col-sm-2">
                                                                            <input type="text" className="form-control" id="txtCommMulti"
                                                                                placeholder="Enter multiplier" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <div className='col-sm-8'>
                                                                            <label className="col-sm-1 col-form-label">Zones - </label>
                                                                            <div class="checkbox-fade fade-in-primary col-sm-1">
                                                                                <label>
                                                                                    <input type="checkbox" value="" />
                                                                                    <span class="cr">
                                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                                    </span>
                                                                                    <span>1</span>
                                                                                </label>
                                                                            </div>
                                                                            <div class="checkbox-fade fade-in-primary col-sm-1">
                                                                                <label>
                                                                                    <input type="checkbox" value="" />
                                                                                    <span class="cr">
                                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                                    </span>
                                                                                    <span>2</span>
                                                                                </label>
                                                                            </div>
                                                                            <div class="checkbox-fade fade-in-primary col-sm-1">
                                                                                <label>
                                                                                    <input type="checkbox" value="" />
                                                                                    <span class="cr">
                                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                                    </span>
                                                                                    <span>3</span>
                                                                                </label>
                                                                            </div>
                                                                            <div class="checkbox-fade fade-in-primary col-sm-1">
                                                                                <label>
                                                                                    <input type="checkbox" value="" />
                                                                                    <span class="cr">
                                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                                    </span>
                                                                                    <span>4</span>
                                                                                </label>
                                                                            </div>
                                                                            <div class="checkbox-fade fade-in-primary col-sm-1">
                                                                                <label>
                                                                                    <input type="checkbox" value="" />
                                                                                    <span class="cr">
                                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                                    </span>
                                                                                    <span>z</span>
                                                                                </label>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className='form-group row'>
                                                                        <label className="col-sm-2 col-form-label">Type</label>
                                                                        <div className="col-sm-2">
                                                                            <select name="alvrv" id="ddlPropType" className='form-control'>
                                                                                <option value="R">R</option>
                                                                                <option value="C">C</option>
                                                                                <option value="I">I</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className='sub-title'> </div>
                                                        <div class="dt-responsive table-responsive">
                                                            <table class="table table-striped table-bordered nowrap text-center">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Construction Type / Zone No</th>
                                                                        <th>1</th>
                                                                        <th>2</th>
                                                                        <th>3</th>
                                                                        <th>4</th>
                                                                        <th>Z</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>A</td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B</td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>C</td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>D</td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>E</td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>F</td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                        <td><input type="text" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='sub-title'></div>
                                                <div className="row">
                                                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 m-l-50"></div>
                                                    <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7">
                                                        <button  className="btn waves-effect waves-light btn-grd-info m-r-30">Generate Rates</button>
                                                        <button  className="btn waves-effect waves-light btn-grd-primary m-r-30">Update Rates</button>
                                                        <button  className="btn waves-effect waves-light btn-grd-danger m-r-30">Delete</button>
                                                        <button  className="btn waves-effect waves-light btn-grd-success m-r-30">Export</button>
                                                        <button className="btn waves-effect waves-light btn-grd-inverse">Cancel</button>
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

export default RateMaster
