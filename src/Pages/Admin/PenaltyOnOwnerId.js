import React, { useState } from 'react'

const PenaltyOnOwnerId = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggle(e) {
        setIsOpen((isOpen) => !isOpen);
        e.preventDefault();
    }
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
                                                <h5>Penalty Master Owner ID Wise</h5>
                                            </div>
                                            <div className="card-block">
                                                <form id="main" method="post" action="/" novalidate="">
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Year</label>
                                                        <div className="col-sm-3">
                                                            <select name="" id="ddlYear" className='form-control'>
                                                                <option value="2020">2020</option>
                                                                <option value="2021">2021</option>
                                                                <option value="2022">2022</option>
                                                                <option value="2023">2023</option>
                                                            </select>
                                                        </div>
                                                        <label className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-form-label">Ward No.</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                            <input type="text" className="form-control" name="wdName" id="wdName"
                                                                placeholder="Ward No" />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-form-label">From Property No</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                            <input type="text" className="form-control" name="fPropNo" id="fPropNo"
                                                                placeholder="From Property No" />
                                                            <span className="messages"></span>
                                                        </div>
                                                        <label className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-form-label">To Property No</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                            <input type="text" className="form-control" name="tPropNo" id="tPropNo"
                                                                placeholder="To Property No" />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5"></div>
                                                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                                            <button onClick={toggle} className="btn waves-effect waves-light btn-grd-inverse m-b-20">Search</button>
                                                        </div>
                                                    </div>
                                                    {isOpen && (
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Ward List</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div class="dt-responsive table-responsive">
                                                                    <table id="order-table" class="table table-striped table-bordered nowrap">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Ward Name</th>
                                                                                <th>Property No</th>
                                                                                <th>Oblique No</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>1</td>
                                                                                <td>1</td>
                                                                                <td></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>1</td>
                                                                                <td>2</td>
                                                                                <td></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>1</td>
                                                                                <td>2</td>
                                                                                <td>1</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>1</td>
                                                                                <td>3</td>
                                                                                <td></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>1</td>
                                                                                <td>4</td>
                                                                                <td></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>1</td>
                                                                                <td>4</td>
                                                                                <td>1</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>)
                                                    }
                                                    <div className='sub-title'> </div>
                                                    <div className='sub-title'> Taxes </div>
                                                    <div className='row'>
                                                        <div className='col-sm-12 col-xl-12 col-md-12 m-10'>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Is Date Validate</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Property</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Education</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Tree</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Employment</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Sp. Edu.</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Fire</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Road</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Light</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Sewage</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Sanitation</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Drain  </span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>w. Cess</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>W. Benefit</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>W. Bill</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Tax1</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Tax2</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Tax3</span>
                                                                </label>
                                                            </div>

                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Tax4</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Tax5  </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='sub-title'></div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Bill Generation Date</label>
                                                        <div className="col-sm-2">
                                                            <input type="text" className="form-control" id="txtBillGenDate"
                                                                placeholder="Enter Date" />
                                                            <span className="messages"></span>
                                                        </div>
                                                        <label className="col-sm-2 col-form-label">Start Half On Current</label>
                                                        <div className="col-sm-2">
                                                            <input type="text" className="form-control" id="txtHalfStCurrDate"
                                                                placeholder="Enter Date" />
                                                            <span className="messages"></span>
                                                        </div>
                                                        <label className="col-sm-2 col-form-label">End Half On Current</label>
                                                        <div className="col-sm-2">
                                                            <input type="text" className="form-control" id="txtHaldEndCurrDate"
                                                                placeholder="Enter Date" />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Start Full On Current</label>
                                                        <div className="col-sm-2">
                                                            <input type="text" className="form-control" id="txtFullStCurrDate"
                                                                placeholder="Enter Date" />
                                                            <span className="messages"></span>
                                                        </div>
                                                        <label className="col-sm-2 col-form-label">End Full On Current</label>
                                                        <div className="col-sm-2">
                                                            <input type="text" className="form-control" id="txtFullEndCurrDate"
                                                                placeholder="Enter Date" />
                                                            <span className="messages"></span>
                                                        </div>
                                                        <label className="col-sm-2 col-form-label">Current Rate</label>
                                                        <div className="col-sm-2">
                                                            <input type="text" className="form-control" id="txtRateCurr"
                                                                placeholder="Enter Rate" />
                                                            <span className="messages"></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Start Full On Pending</label>
                                                        <div className="col-sm-2">
                                                            <input type="text" className="form-control" id="txtFullStPendDate"
                                                                placeholder="Enter Date" />
                                                            <span className="messages"></span>
                                                        </div>
                                                        <label className="col-sm-2 col-form-label">End Full On Pending</label>
                                                        <div className="col-sm-2">
                                                            <input type="text" className="form-control" id="txtFullEndPendDate"
                                                                placeholder="Enter Date" />
                                                            <span className="messages"></span>
                                                        </div>
                                                        <label className="col-sm-2 col-form-label">Pending Rate</label>
                                                        <div className="col-sm-2">
                                                            <input type="text" className="form-control" id="txtRatePend"
                                                                placeholder="Enter Rate" />
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

export default PenaltyOnOwnerId
