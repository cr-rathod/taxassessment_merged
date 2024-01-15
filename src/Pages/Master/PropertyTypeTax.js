import React from 'react'

const PropertyTypeTax = () => {
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
                                                <h5>Property Type Tax Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Property Type Tax Rate</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <form id="main" method="post" action="/" novalidate="">
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Property Description</label>
                                                                        <div className="col-sm-3">
                                                                            <select name="" id="propDescription" className='form-control'>
                                                                                <option value="-1">Select Description</option>
                                                                                <option value="-1">अनिवासी</option>
                                                                                <option value="-1">निवासी</option>
                                                                                <option value="-1">औद्योगिक</option>
                                                                            </select>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">Rate</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" name="rate" id="rate"
                                                                                placeholder="Enter Rate" />
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
                                                                <h5>Rate List</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div class="dt-responsive table-responsive">
                                                                    <table id="order-table" class="table table-striped table-bordered nowrap">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Property Description</th>
                                                                                <th>Type Description</th>
                                                                                <th>Tax</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>खाजगी शाळा</td>
                                                                                <td>अनिवासी</td>
                                                                                <td>600</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>न. प. शाळा</td>
                                                                                <td>अनिवासी</td>
                                                                                <td>300</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>निवासी</td>
                                                                                <td>निवासी</td>
                                                                                <td>200</td>
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

export default PropertyTypeTax
