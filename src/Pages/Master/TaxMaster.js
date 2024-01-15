import React from 'react'

const TaxMaster = () => {
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
                                                <h5>Tax Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <form id="main" method="post" action="/" novalidate="">
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Select Tax Master</label>
                                                        <div className="col-sm-3">
                                                            <select name="typeofuse" id="ddlTaxMaster" className='form-control'>
                                                                <option value="-1">Property Tax Master</option>
                                                                <option value="-1">Education Tax Master</option>
                                                                <option value="-1">Employement Tax Master</option>
                                                                <option value="-1">Tax 1 Master</option>
                                                                <option value="-1">Road Tax Master</option>
                                                                <option value="-1">Tree Cess Master</option>
                                                                <option value="-1">Open Plot Employement Tax Master</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='sub-title'> </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Type Of Use</label>
                                                        <div className="col-sm-3">
                                                            <select name="typeofuse" id="ddlTypeofuse" className='form-control'>
                                                                <option value="-1">Select Type of Use</option>
                                                                <option value="-1">अनिवासी</option>
                                                                <option value="-1">निवासी</option>
                                                                <option value="-1">औद्योगिक</option>
                                                            </select>
                                                        </div>
                                                        <label className="col-sm-2 col-form-label">ALV / RV</label>
                                                        <div className="col-sm-3">
                                                            <select name="alvrv" id="ddlAlvRv" className='form-control'>
                                                                <option value="-1">Select option</option>
                                                                <option value="ALV">ALV</option>
                                                                <option value="RV">RV</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Year</label>
                                                        <div className="col-sm-3">
                                                            <input type="text" className="form-control" name="year" id="txtYear"
                                                                placeholder="Enter Year" />
                                                            <span className="messages"></span>
                                                        </div>
                                                        <label className="col-sm-2 col-form-label">Rate</label>
                                                        <div className="col-sm-3">
                                                            <input type="text" className="form-control" name="rate" id="txtRate"
                                                                placeholder="Enter Rate" />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Min. Amount</label>
                                                        <div className="col-sm-3">
                                                            <input type="text" className="form-control" id="txtminAmt"
                                                                placeholder="Enter Min Amount" />
                                                            <span className="messages"></span>
                                                        </div>
                                                        <label className="col-sm-2 col-form-label">Max. Amount</label>
                                                        <div className="col-sm-3">
                                                            <input type="text" className="form-control" id="txtmaxAmt"
                                                                placeholder="Enter Max Amount" />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className='sub-title'></div>
                                                    <div className="row">
                                                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 m-l-50"></div>
                                                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                                            <button type="submit" className="btn waves-effect waves-light btn-grd-success m-r-30">Save</button>
                                                            <button className="btn waves-effect waves-light btn-grd-primary">Clear</button>
                                                        </div>
                                                    </div>
                                                    <div className='sub-title'> </div>
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5>Rate Available Status</h5>
                                                        </div>
                                                        <div className="card-block">
                                                            <div className='row'>
                                                                <div className='col-sm-12 col-xl-12 col-md-12 m-10'>
                                                                    <div class="checkbox-fade fade-in-primary col-md-2">
                                                                        <label>
                                                                            <input type="checkbox" value="" checked/>
                                                                            <span class="cr">
                                                                                <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                            </span>
                                                                            <span>निवासी</span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="checkbox-fade fade-in-primary col-md-2">
                                                                        <label>
                                                                            <input type="checkbox" value="" checked />
                                                                            <span class="cr">
                                                                                <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                            </span>
                                                                            <span>अनिवासी</span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="checkbox-fade fade-in-primary col-md-2">
                                                                        <label>
                                                                            <input type="checkbox" value="" />
                                                                            <span class="cr">
                                                                                <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                            </span>
                                                                            <span>कार्यालय</span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="checkbox-fade fade-in-primary col-md-2">
                                                                        <label>
                                                                            <input type="checkbox" value="" />
                                                                            <span class="cr">
                                                                                <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                            </span>
                                                                            <span>खुला भूखंड</span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="checkbox-fade fade-in-primary col-md-2">
                                                                        <label>
                                                                            <input type="checkbox" value="" />
                                                                            <span class="cr">
                                                                                <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                            </span>
                                                                            <span>बँक / वित्तीय संस्था</span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="checkbox-fade fade-in-primary col-md-2">
                                                                        <label>
                                                                            <input type="checkbox" value="" />
                                                                            <span class="cr">
                                                                                <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                            </span>
                                                                            <span>दवाखाना</span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="checkbox-fade fade-in-primary col-md-2">
                                                                        <label>
                                                                            <input type="checkbox" value="" />
                                                                            <span class="cr">
                                                                                <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                            </span>
                                                                            <span>धार्मिक स्थळ</span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="checkbox-fade fade-in-primary col-md-2">
                                                                        <label>
                                                                            <input type="checkbox" value="" />
                                                                            <span class="cr">
                                                                                <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                            </span>
                                                                            <span>दुकान</span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="checkbox-fade fade-in-primary col-md-2">
                                                                        <label>
                                                                            <input type="checkbox" value="" />
                                                                            <span class="cr">
                                                                                <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                            </span>
                                                                            <span>चालू बांधकाम</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5>Tax Rate List</h5>
                                                        </div>
                                                        <div className="card-block">
                                                            <div class="dt-responsive table-responsive">
                                                                <table id="order-table" class="table table-striped table-bordered nowrap">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Year</th>
                                                                            <th>Rate</th>
                                                                            <th>Description</th>
                                                                            <th>On ALV / RV</th>
                                                                            <th>Min Amount</th>
                                                                            <th>Max AMount</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>2023</td>
                                                                            <td>160</td>
                                                                            <td>निवासी</td>
                                                                            <td>RV</td>
                                                                            <td>130</td>
                                                                            <td>200</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2023</td>
                                                                            <td>450</td>
                                                                            <td>अनिवासी</td>
                                                                            <td>ALV</td>
                                                                            <td>280</td>
                                                                            <td>999</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
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

        </>
    )
}

export default TaxMaster
