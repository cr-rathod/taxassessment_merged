import React, { useState } from 'react'

const ApplyTax = () => {
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
                                                <h5>Appy Tax Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <form id="main" method="post" action="/" novalidate="">
                                                    <div className="form-group row">
                                                        <label className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-form-label">Ward No.</label>
                                                        <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                                            <input type="text" className="form-control" name="wdName" id="wdName"
                                                                placeholder="Ward No" />
                                                            <span className="messages"></span>
                                                        </div>
                                                        <label className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-form-label">From Property No</label>
                                                        <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                                            <input type="text" className="form-control" name="fPropNo" id="fPropNo"
                                                                placeholder="From Property No" />
                                                            <span className="messages"></span>
                                                        </div>
                                                        <label className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-form-label">To Property No</label>
                                                        <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
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
                                                                                <td>Tiger Nixon</td>
                                                                                <td>System Architect</td>
                                                                                <td>Edinburgh</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Garrett Winters</td>
                                                                                <td>Accountant</td>
                                                                                <td>Tokyo</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Ashton Cox</td>
                                                                                <td>Junior Technical Author</td>
                                                                                <td>San Francisco</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Cedric Kelly</td>
                                                                                <td>Senior Javascript Developer</td>
                                                                                <td>Edinburgh</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Airi Satou</td>
                                                                                <td>Accountant</td>
                                                                                <td>Tokyo</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Brielle Williamson</td>
                                                                                <td>Integration Specialist</td>
                                                                                <td>New York</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>)
                                                    }
                                                    <div className='sub-title'> Tax Apply Criteria</div>
                                                    <div class="form-radio">
                                                        <div class="radio radio-inline">
                                                            <label>
                                                                <input type="radio" name="radio" />
                                                                <i class="helper"></i>For All Properties
                                                            </label>
                                                        </div>
                                                        <div class="radio radio-inline">
                                                            <label>
                                                                <input type="radio" name="radio" />
                                                                <i class="helper"></i>For Single Property
                                                            </label>
                                                        </div>
                                                        <div class="radio radio-inline">
                                                            <label>
                                                                <input type="radio" name="radio" />
                                                                <i class="helper"></i>For All Ward
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='sub-title'> </div>
                                                    <div className='sub-title'> Apply Tax From Here</div>
                                                    <div className='row'>
                                                        <div className='col-sm-12 col-xl-12 col-md-12 m-10'>
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
                                                                    <span>M. Build</span>
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
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Is Tax For Plot</span>
                                                                </label>
                                                            </div>
                                                            <div class="checkbox-fade fade-in-primary col-md-2">
                                                                <label>
                                                                    <input type="checkbox" value="" />
                                                                    <span class="cr">
                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                    </span>
                                                                    <span>Is Policy Applicable</span>
                                                                </label>
                                                            </div>
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

export default ApplyTax
