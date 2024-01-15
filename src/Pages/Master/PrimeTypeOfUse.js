import React from 'react'

const PrimeTypeOfUse = () => {
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
                                                <h5>Prime Type of Use Master</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Add Prime Type of Use</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <form id="main" method="post" action="/" novalidate="">
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Description</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" id="description"
                                                                                placeholder="Enter Decription" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <label className="col-sm-1 col-form-label">Type</label>
                                                                        <div className="col-sm-2">
                                                                            <input type="text" className="form-control" id="type"
                                                                                placeholder="Enter Type" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <div className='col-sm-3'>
                                                                            <div class="checkbox-fade fade-in-primary" style={{"margin-top":"3%"}}>
                                                                                <label>
                                                                                    <input type="checkbox" value="" />
                                                                                    <span class="cr">
                                                                                        <i class="cr-icon icofont icofont-ui-check txt-primary"></i>
                                                                                    </span>
                                                                                    <span>Taxable</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-sm-5"></div>
                                                                        <div className="col-sm-5">
                                                                            <button type="submit" className="btn waves-effect waves-light btn-grd-success m-r-20">Save</button>
                                                                            <button className="btn waves-effect waves-light btn-grd-primary">Clear</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Type of Use List</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div class="dt-responsive table-responsive">
                                                                    <table id="order-table" class="table table-striped table-bordered nowrap">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Type</th>
                                                                                <th>Type Description</th>
                                                                                <th>Taxable Status</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>N</td>
                                                                                <td>No Tax</td>
                                                                                <td>False</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>C</td>
                                                                                <td>अनिवासी</td>
                                                                                <td>True</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>I</td>
                                                                                <td>औद्योगिक</td>
                                                                                <td>True</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>R</td>
                                                                                <td>निवासी</td>
                                                                                <td>True</td>
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

export default PrimeTypeOfUse
