import React from 'react'

const CouncilDetails = () => {
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
                                                <h5>Council Information</h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Council Basic Details</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className='row'>
                                                                    <div className='col-md-7'>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Council Name</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="consName"
                                                                                    placeholder="Council Name" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Council Name (Marathi)</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="consNameMar"
                                                                                    placeholder="Council Name Marathi" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Address</label>
                                                                            <div className="col-sm-3">
                                                                                <textarea type="text" className="form-control" id="address"
                                                                                    placeholder="Address" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Address (Marathi)</label>
                                                                            <div className="col-sm-3">
                                                                                <textarea className="form-control" id="addressMar"
                                                                                    placeholder="Address Marathi" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Contact No</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="consContactNo"
                                                                                    placeholder="Contact No" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Email</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="consEmail"
                                                                                    placeholder="Email" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Website</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="consWebsite"
                                                                                    placeholder="Website" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Remark</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="remark"
                                                                                    placeholder="Remark" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-5'>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">From Year</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="fYear"
                                                                                    placeholder="From Year" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">To Year</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="toYear"
                                                                                    placeholder="To Year" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Min. RV</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="minRV"
                                                                                    placeholder="Min RV" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Max RV</label>
                                                                            <div className="col-sm-3">
                                                                                <input type='text' className="form-control" id="maxRV"
                                                                                    placeholder="Max RV" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Active Status</label>
                                                                            <div className="col-sm-9">
                                                                                <select name="status" id="activeStatus" className='form-control'>
                                                                                    <option value="-1">Select Status</option>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Image</label>
                                                                            <div className="col-sm-3">
                                                                                <img src="../files/assets/images/widget/uk.jpg" alt="CouncilLogo" />
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Icon</label>
                                                                            <div className="col-sm-3">
                                                                                <img src="../files/assets/images/widget/uk.jpg" alt="CouncilIcon" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Image</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="file" className='form-control' />
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Icon</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="file" className='form-control' />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Provider Basic Details</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className='row'>
                                                                    <div className='col-md-7'>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Party Name</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="provName"
                                                                                    placeholder="Party Name" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Party Name (Marathi)</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="consNameMar"
                                                                                    placeholder="Party Marathi Name" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Address</label>
                                                                            <div className="col-sm-3">
                                                                                <textarea type="text" className="form-control" id="partyAddress"
                                                                                    placeholder="Address" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Address (Marathi)</label>
                                                                            <div className="col-sm-3">
                                                                                <textarea className="form-control" id="partyAddressMar"
                                                                                    placeholder="Address Marathi" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Contact No</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="partyContactNo"
                                                                                    placeholder="Contact No" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Email</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="partyEmail"
                                                                                    placeholder="Email" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Website</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="partyWebsite"
                                                                                    placeholder="WebSite" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Remark</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="text" className="form-control" id="partyRemark"
                                                                                    placeholder="Remark" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-5'>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Copyright</label>
                                                                            <div className="col-sm-9">
                                                                                <textarea rows={3} cols={10} className="form-control" id="fYear"
                                                                                    placeholder="Construction ID" />
                                                                                <span className="messages"></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Image</label>
                                                                            <div className="col-sm-3">
                                                                                <img src="../files/assets/images/widget/uk.jpg" alt="CouncilLogo" />
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Icon</label>
                                                                            <div className="col-sm-3">
                                                                                <img src="../files/assets/images/widget/uk.jpg" alt="CouncilLogo" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-3 col-form-label">Image</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="file" className='form-control' />
                                                                            </div>
                                                                            <label className="col-sm-3 col-form-label">Icon</label>
                                                                            <div className="col-sm-3">
                                                                                <input type="file" className='form-control' />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

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

export default CouncilDetails
