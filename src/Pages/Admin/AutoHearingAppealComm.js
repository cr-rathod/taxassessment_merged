import React from 'react'

const AutoHearingAppealComm = () => {
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
                                                <h5>Auto Hearing Appeal Committee</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul class="nav nav-tabs md-tabs" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" data-toggle="tab" href="#propInfoWise" role="tab">Property Details Wise</a>
                                                                <div class="slide"></div>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" data-toggle="tab" href="#taxAnalysisWise" role="tab">Tax Analysis Wise</a>
                                                                <div class="slide"></div>
                                                            </li>
                                                        </ul>
                                                        <div class="tab-content card-block">
                                                            <div class="tab-pane active" id="propInfoWise" role="tabpanel">
                                                                <div className="col-sm-12">
                                                                    <div className="card">
                                                                        <div className="card-header">
                                                                            <h5>Auto Hearing Appeal</h5>
                                                                        </div>
                                                                        <div className="card-block">
                                                                            <form id="main" method="post" action="/" novalidate="">
                                                                                <div className="form-group row">
                                                                                    <label className="col-sm-2 col-form-label">Select Criteria</label>
                                                                                    <div className="col-sm-3">
                                                                                        <select id="ddlCriteria" className='form-control'>
                                                                                            <option value="A">Construction Type</option>
                                                                                            <option value="B">Type Of Use</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <label className="col-sm-2 col-form-label">Select Appeal Type</label>
                                                                                    <div className="col-sm-3">
                                                                                        <select name="alvrv" id="ddlPropAppealType" className='form-control'>
                                                                                            <option value="A">Appeal</option>
                                                                                            <option value="B">Hearing</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="form-group row">
                                                                                    <label className="col-sm-2 col-form-label">Select Ward</label>
                                                                                    <div className="col-sm-3">
                                                                                        <select id="ddlWard" className='form-control'>
                                                                                            <option value="A">All</option>
                                                                                            <option value="B">1</option>
                                                                                            <option value="A">2</option>
                                                                                            <option value="B">3</option>
                                                                                            <option value="A">4</option>
                                                                                            <option value="B">5</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='sub-title'> </div>
                                                                                <div class="dt-responsive table-responsive">
                                                                                    <table class="table table-striped table-bordered nowrap text-center">
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th>Construction Type</th>
                                                                                                <th>Percentage (%)</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>A</td>
                                                                                                <td><input type="text" /></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>B</td>
                                                                                                <td><input type="text" /></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>C</td>
                                                                                                <td><input type="text" /></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>D</td>
                                                                                                <td><input type="text" /></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>E</td>
                                                                                                <td><input type="text" /></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>F</td>
                                                                                                <td><input type="text" /></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                                <div className='sub-title'> </div>
                                                                                <div class="dt-responsive table-responsive">
                                                                                    <table class="table table-striped table-bordered nowrap text-center">
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th>Type Of Use</th>
                                                                                                <th>Percentage (%)</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>Resedential</td>
                                                                                                <td><input type="text" /></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Commercial</td>
                                                                                                <td><input type="text" /></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Mix</td>
                                                                                                <td><input type="text" /></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                    <div className='sub-title'> </div>
                                                                    <div className="row">
                                                                        <div className="col-sm-5"></div>
                                                                        <div className="col-sm-5">
                                                                            <button type="submit" className="btn waves-effect waves-light btn-grd-success m-r-20">Save</button>
                                                                            <button className="btn waves-effect waves-light btn-grd-primary">Cancel</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane" id="taxAnalysisWise" role="tabpanel">
                                                                <div className="col-sm-12">
                                                                    <div className="card">
                                                                        <div className="card-header">
                                                                            <h5>Auto Hearing Appeal</h5>
                                                                        </div>
                                                                        <div className="card-block">
                                                                            <form id="main" method="post" action="/" novalidate="">
                                                                                <div className="form-group row">
                                                                                    <label className="col-sm-2 col-form-label">Select Appeal Type</label>
                                                                                    <div className="col-sm-2">
                                                                                        <select name="alvrv" id="ddlPropAppealType" className='form-control'>
                                                                                            <option value="A">Appeal</option>
                                                                                            <option value="B">Hearing</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <label className="col-sm-1 col-form-label">Min Value</label>
                                                                                    <div className="col-sm-2">
                                                                                        <input type="text" className="form-control" id="txtMinVal"
                                                                                            placeholder="Min Value" />

                                                                                    </div>
                                                                                    <label className="col-sm-1 col-form-label">Max Value</label>
                                                                                    <div className="col-sm-2">
                                                                                        <input type="text" className="form-control" id="txtMaxVal"
                                                                                            placeholder="Max Value" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='sub-title'></div>
                                                                                <div className="row">
                                                                                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 m-l-50"></div>
                                                                                    <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7">
                                                                                        <button className="btn waves-effect waves-light btn-grd-primary m-r-30">Add Range</button>
                                                                                        <button className="btn waves-effect waves-light btn-grd-info m-r-30">Generate</button>
                                                                                        <button className="btn waves-effect waves-light btn-grd-success m-r-30">Export</button>
                                                                                        <button className="btn waves-effect waves-light btn-grd-inverse">Cancel</button>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <div className="card-header">
                                                                            <h5>Total Gross Properties Demand</h5>
                                                                        </div>
                                                                        <div className="card-block">
                                                                            <div class="dt-responsive table-responsive">
                                                                                <table class="table table-striped table-bordered nowrap text-center">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>Reason</th>
                                                                                            <th>Properties</th>
                                                                                            <th>Old RV</th>
                                                                                            <th>Old Prop Demand</th>
                                                                                            <th>Old Total Demand</th>
                                                                                            <th>New RV</th>
                                                                                            <th>New Prop Demand</th>
                                                                                            <th>New Total Demand</th>
                                                                                            <th>Discount</th>
                                                                                            <th>Final Property Demand</th>
                                                                                            <th>Final Total Demand</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>10-1000</td>
                                                                                            <td>551</td>
                                                                                            <td>148555</td>
                                                                                            <td>168565</td>
                                                                                            <td>2995555</td>
                                                                                            <td>528635</td>
                                                                                            <td>126785</td>
                                                                                            <td>248444</td>
                                                                                            <td>0</td>
                                                                                            <td>126875</td>
                                                                                            <td>248542</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>New-Prop</td>
                                                                                            <td>551</td>
                                                                                            <td>148555</td>
                                                                                            <td>168565</td>
                                                                                            <td>2995555</td>
                                                                                            <td>528635</td>
                                                                                            <td>126785</td>
                                                                                            <td>248444</td>
                                                                                            <td>0</td>
                                                                                            <td>126875</td>
                                                                                            <td>248542</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Zero-Prop</td>
                                                                                            <td>551</td>
                                                                                            <td>148555</td>
                                                                                            <td>168565</td>
                                                                                            <td>2995555</td>
                                                                                            <td>528635</td>
                                                                                            <td>126785</td>
                                                                                            <td>248444</td>
                                                                                            <td>0</td>
                                                                                            <td>126875</td>
                                                                                            <td>248542</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Total</td>
                                                                                            <td>551</td>
                                                                                            <td>148555</td>
                                                                                            <td>168565</td>
                                                                                            <td>2995555</td>
                                                                                            <td>528635</td>
                                                                                            <td>126785</td>
                                                                                            <td>248444</td>
                                                                                            <td>0</td>
                                                                                            <td>126875</td>
                                                                                            <td>248542</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="card">
                                                                        <div className="card-header">
                                                                            <h5>Total Gross Properties Demand</h5>
                                                                        </div>
                                                                        <div className="card-block">
                                                                            <div class="dt-responsive table-responsive">
                                                                                <table class="table table-striped table-bordered nowrap text-center">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>Reason</th>
                                                                                            <th>Properties</th>
                                                                                            <th>Old RV</th>
                                                                                            <th>Old Prop Demand</th>
                                                                                            <th>Old Total Demand</th>
                                                                                            <th>New RV</th>
                                                                                            <th>New Prop Demand</th>
                                                                                            <th>New Total Demand</th>
                                                                                            <th>Discount</th>
                                                                                            <th>Property Discount</th>
                                                                                            <th>Total Discount</th>
                                                                                            <th>Reduced Prop Demand</th>
                                                                                            <th>Reduced Total Demand</th>
                                                                                            <th>Final Property Demand</th>
                                                                                            <th>Final Total Demand</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>10-1000</td>
                                                                                            <td>551</td>
                                                                                            <td>148555</td>
                                                                                            <td>168565</td>
                                                                                            <td>2995555</td>
                                                                                            <td>528635</td>
                                                                                            <td>126785</td>
                                                                                            <td>248444</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>126875</td>
                                                                                            <td>248542</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>New-Prop</td>
                                                                                            <td>551</td>
                                                                                            <td>148555</td>
                                                                                            <td>168565</td>
                                                                                            <td>2995555</td>
                                                                                            <td>528635</td>
                                                                                            <td>126785</td>
                                                                                            <td>248444</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>126875</td>
                                                                                            <td>248542</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Zero-Prop</td>
                                                                                            <td>551</td>
                                                                                            <td>148555</td>
                                                                                            <td>168565</td>
                                                                                            <td>2995555</td>
                                                                                            <td>528635</td>
                                                                                            <td>126785</td>
                                                                                            <td>248444</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>126875</td>
                                                                                            <td>248542</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Total</td>
                                                                                            <td>551</td>
                                                                                            <td>148555</td>
                                                                                            <td>168565</td>
                                                                                            <td>2995555</td>
                                                                                            <td>528635</td>
                                                                                            <td>126785</td>
                                                                                            <td>248444</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>0</td>
                                                                                            <td>126875</td>
                                                                                            <td>248542</td>
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

export default AutoHearingAppealComm
