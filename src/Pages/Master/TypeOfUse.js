import React from 'react'

const TypeOfUse = () => {
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
                                                <h5>Type Of Use Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul class="nav nav-tabs md-tabs" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" data-toggle="tab" href="#newTypeOfUse" role="tab">New Type of Use</a>
                                                                <div class="slide"></div>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" data-toggle="tab" href="#oldTypeOfUse" role="tab">Old Type of Use</a>
                                                                <div class="slide"></div>
                                                            </li>
                                                        </ul>
                                                        <div class="tab-content card-block">
                                                            <div class="tab-pane active" id="newTypeOfUse" role="tabpanel">
                                                                <div className="col-sm-12">
                                                                    <div className="card">
                                                                        <div className="card-header">
                                                                            <h5>New Type Of Use</h5>
                                                                        </div>
                                                                        <div className="card-block">
                                                                            <div className="form-group row">
                                                                                <label className="col-sm-2 col-form-label">Type Of Use</label>
                                                                                <div className="col-sm-3">
                                                                                    <input type="text" className="form-control" id="newTypefUse"
                                                                                        placeholder="Type Of Use" />
                                                                                    <span className="messages"></span>
                                                                                </div>
                                                                                <label className="col-sm-2 col-form-label">Description</label>
                                                                                <div className="col-sm-3">
                                                                                    <input type="text" className="form-control" id="newDescription"
                                                                                        placeholder="Enter Description" />
                                                                                    <span className="messages"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Group</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" name="rate" id="newGrp"
                                                                                    placeholder="Enter Group Type" />
                                                                                <span className="messages"></span>
                                                                            </div>

                                                                            <label className="col-sm-2 col-form-label">Type</label>
                                                                            <div className="col-sm-3">
                                                                                <select name="" id="newtype" className='form-control'>
                                                                                    <option value="-1">अनिवासी</option>
                                                                                    <option value="-1">निवासी</option>
                                                                                    <option value="-1">औद्योगिक</option>
                                                                                    <option value="-1">NO TAX</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-5"></div>
                                                                            <div className="col-sm-6">
                                                                                <button type="submit" className="btn waves-effect waves-light btn-grd-success m-r-20">Save</button>
                                                                                <button className="btn waves-effect waves-light btn-grd-primary">Clear</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-block">
                                                                        <div class="dt-responsive table-responsive">
                                                                            <table id="newcons-table" class="table table-striped table-bordered nowrap">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Type Of Use</th>
                                                                                        <th>Type Of Use Description</th>
                                                                                        <th>Description</th>
                                                                                        <th>Group</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>c</td>
                                                                                        <td>अनिवासी</td>
                                                                                        <td>अनिवासी</td>
                                                                                        <td>बिगर निवासी</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>AN</td>
                                                                                        <td>निवासी</td>
                                                                                        <td>निवासी</td>
                                                                                        <td>निवासी</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>T</td>
                                                                                        <td>धार्मिक स्थळ</td>
                                                                                        <td>No Tax</td>
                                                                                        <td>धार्मिक</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane" id="oldTypeOfUse" role="tabpanel">
                                                                <div className="col-sm-12">
                                                                    <div className="card">
                                                                        <div className="card-header">
                                                                            <h5>Old Type Of Use</h5>
                                                                        </div>
                                                                        <div className="card-block">
                                                                            <div className="form-group row">
                                                                                <label className="col-sm-2 col-form-label">Type Of Use</label>
                                                                                <div className="col-sm-3">
                                                                                    <input type="text" className="form-control" id="oldTypefUse"
                                                                                        placeholder="Type Of Use" />
                                                                                    <span className="messages"></span>
                                                                                </div>
                                                                                <label className="col-sm-2 col-form-label">Description</label>
                                                                                <div className="col-sm-3">
                                                                                    <input type="text" className="form-control" id="oldDescription"
                                                                                        placeholder="Enter Description" />
                                                                                    <span className="messages"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                           <label className="col-sm-2 col-form-label">Type</label>
                                                                            <div className="col-sm-3">
                                                                                <select name="" id="newtype" className='form-control'>
                                                                                    <option value="-1">अनिवासी</option>
                                                                                    <option value="-1">निवासी</option>
                                                                                    <option value="-1">औद्योगिक</option>
                                                                                    <option value="-1">NO TAX</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-5"></div>
                                                                            <div className="col-sm-6">
                                                                                <button type="submit" className="btn waves-effect waves-light btn-grd-success m-r-20">Save</button>
                                                                                <button className="btn waves-effect waves-light btn-grd-primary">Clear</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-block">
                                                                        <div class="dt-responsive table-responsive">
                                                                            <table id="newcons-table" class="table table-striped table-bordered nowrap">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Type Of Use</th>
                                                                                        <th>Type Of Use Description</th>
                                                                                        <th>Description</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>c</td>
                                                                                        <td>अनिवासी</td>
                                                                                        <td>अनिवासी</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>AN</td>
                                                                                        <td>निवासी</td>
                                                                                        <td>निवासी</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>T</td>
                                                                                        <td>धार्मिक स्थळ</td>
                                                                                        <td>No Tax</td>
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
            </div >
        </>
    )
}

export default TypeOfUse
