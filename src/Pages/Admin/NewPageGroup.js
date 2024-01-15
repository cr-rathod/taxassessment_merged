import React from 'react'

const NewPageGroup = () => {
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
                                                <h5>Create New Group</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Add Page Group</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <form id="main" method="post" action="/" novalidate="">
                                                                    <div className="form-group row">
                                                                        <label className="col-sm-2 col-form-label">Group Name</label>
                                                                        <div className="col-sm-3">
                                                                            <input type="text" className="form-control" id="txtgrpName"
                                                                                placeholder="Enter Group Name" />
                                                                            <span className="messages"></span>
                                                                        </div>
                                                                        <label className="col-sm-2 col-form-label">Display Order</label>
                                                                        <div className="col-sm-3">
                                                                            <textarea className="form-control" id="txtDispOrder"
                                                                                placeholder="Enter Display Order" />
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
                                                                <h5>Page Group List</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div class="dt-responsive table-responsive">
                                                                    <table id="order-table" class="table table-striped table-bordered nowrap text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Group Name</th>
                                                                                <th>Display Order</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Assessment</td>
                                                                                <td>1</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>AMC</td>
                                                                                <td>2</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Admin</td>
                                                                                <td>3</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Utility</td>
                                                                                <td>4</td>
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

export default NewPageGroup
