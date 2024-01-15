import React from 'react'

const ConstructionType = () => {
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
                                                <h5>Construction Type</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul class="nav nav-tabs md-tabs" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" data-toggle="tab" href="#newConType" role="tab">New Construction Type</a>
                                                                <div class="slide"></div>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" data-toggle="tab" href="#oldConsType" role="tab">Old Construction Type</a>
                                                                <div class="slide"></div>
                                                            </li>
                                                        </ul>
                                                        <div class="tab-content card-block">
                                                            <div class="tab-pane active" id="newConType" role="tabpanel">
                                                                <div className="col-sm-12">
                                                                    <div className="card">
                                                                        <div className="card-header">
                                                                            <h5>New Cons Type</h5>
                                                                        </div>
                                                                        <div className="card-block">
                                                                            <form id="main" method="post" action="/" novalidate="">
                                                                                <div className="form-group row">
                                                                                    <label className="col-sm-2 col-form-label">Construction Id</label>
                                                                                    <div className="col-sm-3">
                                                                                        <input type="text" className="form-control" id="newConsId"
                                                                                            placeholder="Construction ID" />
                                                                                        <span className="messages"></span>
                                                                                    </div>
                                                                                    <label className="col-sm-2 col-form-label">Description</label>
                                                                                    <div className="col-sm-3">
                                                                                        <input type="text" className="form-control" id="newDescription"
                                                                                            placeholder="Enter Description" />
                                                                                        <span className="messages"></span>
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
                                                                        <div className="card-block">
                                                                            <div class="dt-responsive table-responsive">
                                                                                <table id="newcons-table" class="table table-striped table-bordered nowrap">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>Construction Id</th>
                                                                                            <th>Description</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>Tiger Nixon</td>
                                                                                            <td>System Architect</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Garrett Winters</td>
                                                                                            <td>Accountant</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Ashton Cox</td>
                                                                                            <td>Junior Technical Author</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Cedric Kelly</td>
                                                                                            <td>Senior Javascript Developer</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Airi Satou</td>
                                                                                            <td>Accountant</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Brielle Williamson</td>
                                                                                            <td>Integration Specialist</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Herrod Chandler</td>
                                                                                            <td>Sales Assistant</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Rhona Davidson</td>
                                                                                            <td>Integration Specialist</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Colleen Hurst</td>
                                                                                            <td>Javascript Developer</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Sonya Frost</td>
                                                                                            <td>Software Engineer</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Jena Gaines</td>
                                                                                            <td>Office Manager</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Quinn Flynn</td>
                                                                                            <td>Support Lead</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Charde Marshall</td>
                                                                                            <td>Regional Director</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane" id="oldConsType" role="tabpanel">
                                                                <div className="col-sm-12">
                                                                    <div className="card">
                                                                        <div className="card-header">
                                                                            <h5>Old Cons Type</h5>
                                                                        </div>
                                                                        <div className="card-block">
                                                                            <form id="main" method="post" action="/" novalidate="">
                                                                                <div className="form-group row">
                                                                                    <label className="col-sm-2 col-form-label">Construction Id</label>
                                                                                    <div className="col-sm-3">
                                                                                        <input type="text" className="form-control" id="oldConsId"
                                                                                            placeholder="Construction ID" />
                                                                                        <span className="messages"></span>
                                                                                    </div>
                                                                                    <label className="col-sm-2 col-form-label">Description</label>
                                                                                    <div className="col-sm-3">
                                                                                        <input type="text" className="form-control" id="oldDescription"
                                                                                            placeholder="Enter Description" />
                                                                                        <span className="messages"></span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-sm-4"></div>
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
                                                                                <table id="oldcons-table" class="table table-striped table-bordered nowrap">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>Construction Id</th>
                                                                                            <th>Description</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>Tiger Nixon</td>
                                                                                            <td>System Architect</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Garrett Winters</td>
                                                                                            <td>Accountant</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Ashton Cox</td>
                                                                                            <td>Junior Technical Author</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Cedric Kelly</td>
                                                                                            <td>Senior Javascript Developer</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Airi Satou</td>
                                                                                            <td>Accountant</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Brielle Williamson</td>
                                                                                            <td>Integration Specialist</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Herrod Chandler</td>
                                                                                            <td>Sales Assistant</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Rhona Davidson</td>
                                                                                            <td>Integration Specialist</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Colleen Hurst</td>
                                                                                            <td>Javascript Developer</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Sonya Frost</td>
                                                                                            <td>Software Engineer</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Jena Gaines</td>
                                                                                            <td>Office Manager</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Quinn Flynn</td>
                                                                                            <td>Support Lead</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Charde Marshall</td>
                                                                                            <td>Regional Director</td>
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

export default ConstructionType
