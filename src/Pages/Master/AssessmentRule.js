import React from 'react'

const AssessmentRule = () => {
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
                                                <h5>Apply Policies / Locks </h5>
                                            </div>
                                            <div className="card-block">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="card">
                                                            <div className="card-block accordion-block">
                                                                <div class="accordion-box" id="single-open">
                                                                    <a class="accordion-msg waves-effect waves-dark">Appeal Policies</a>
                                                                    <div class="accordion-desc">
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">As Per Old</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlAsPerOld" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">As Per Old For New Property</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlAsPerOldNewProp" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Minimum RV</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlMinRV" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Min RV For Old RV</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlAsPerOld" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Mix Assessment</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlAsPerOldNewProp" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Retaintion</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlMinRV" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Appeal Policy Rule Wise</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlAsPerOld" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Policy Applicable</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlAsPerOldNewProp" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Capital Value</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlMinRV" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a class="accordion-msg waves-effect waves-dark">Locks</a>
                                                                    <div class="accordion-desc">
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Policy Lock</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlPolicyLock" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">History Lock</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlHistoryLock" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Data Entry Lock</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlDELock" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Restrict Duplicate Entry</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlRestrictDupEntry" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Utility Lock</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlUtilityLock" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Show Photos & Plan</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlShowPhotoPlan" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Drain Tax Flat</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlDrianTaxFlat" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Lock Property Edition</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlLockPropEdition" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Accept Minus Pending Tax</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlMinusPendingTax" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Photo Plan From DB</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlPhotoPlanDB" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Apply Discount</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlApplyDiscount" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">New Property Remark</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlNewPropRemark" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Restrict Wrong Floor Square</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlWrongFloorSq" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Posting Deleted</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlPostingDelete" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a class="accordion-msg waves-effect waves-dark">Open Plot Policies</a>
                                                                    <div class="accordion-desc">
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Plot Taxable</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlPlotTaxable" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Calc On All Floor Renters Rent</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlCalcRent" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Daviation</label>
                                                                            <div className="col-sm-2">
                                                                                <input type="text" className='form-control' id='txtDeviation' />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Plot Tax Applicable</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlPlotTaxApplicable" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Calc On Combined Renters Rent</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlCalRentOnCombRenter" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Is Retention</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlRetention" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Is Hearing</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlHearing" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Is Appeal Committee</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlCalRentOnCombRenter" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Is Remission</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlRemission" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Is Reason Lock</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlReasonLock" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">OpEduEmpTaxZeroForGovtEduProp</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlRemission" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a class="accordion-msg waves-effect waves-dark">Submission</a>
                                                                    <div class="accordion-desc">
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Data Entry Screen</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlDEScreen" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Meter</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlMeter" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a class="accordion-msg waves-effect waves-dark">AMC Flags</a>
                                                                    <div class="accordion-desc">
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Invoice Auto Generated</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlInvAutoGen" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Pending Demand Pay First</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlPenDemandPay" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Discount On Interest MBuild</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlDiscIntMBuild" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Report Image From Path</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlRptImgFromPath" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a class="accordion-msg waves-effect waves-dark">Is Enabled</a>
                                                                    <div class="accordion-desc">
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">OTP Enabled</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlOtpEnable" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Language Enable</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlLangEnable" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">OwnerId Use For Report Name</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlOwnerIdUse" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Apply Discount for Extended</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlApplyDiscForExtented" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">QR Code</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlQRCode" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Receipt Print</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlReceiptPrint" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Ward Allocation</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlWardAlloc" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Rent Validity</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlRentValidity" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a class="accordion-msg waves-effect waves-dark">Appeal Discount Variables</a>
                                                                    <div class="accordion-desc">
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Hearing Max Discount</label>
                                                                            <div className="col-sm-2">
                                                                                <input type="text" className='form-control' id='txtHearingMaxDisc' />
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Appeal Max Discount</label>
                                                                            <div className="col-sm-2">
                                                                                <input type="text" className='form-control' id='txtAppealMaxDisc' />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a class="accordion-msg waves-effect waves-dark">Advance Payment ON</a>
                                                                    <div class="accordion-desc">
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Current Balance</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlCurBal" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Pending Balance</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlPendBal" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a class="accordion-msg waves-effect waves-dark">Others</a>
                                                                    <div class="accordion-desc">
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Active Interest 2</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlActInterest" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Apply Maintainance On Dukan Gale</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlMaintainOnDukanGale" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">DB For AMC</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlDBForAMC" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row">
                                                                            <label className="col-sm-2 col-form-label">Assessment Completed</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlAssessComplete" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Penalty Monthly</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlPenMonthly" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                            <label className="col-sm-2 col-form-label">Allow SMS</label>
                                                                            <div className="col-sm-2">
                                                                                <select name="alvrv" id="ddlAllowSMS" className='form-control'>
                                                                                    <option value="Yes">Yes</option>
                                                                                    <option value="No">No</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='sub-title'></div>
                                                            <div className="row">
                                                                <div className="col-sm-1 col-md-2 col-lg-2 col-xl-4"></div>
                                                                <div className="col-sm-11 col-md-10 col-lg-10 col-xl-8">
                                                                    <button className="btn waves-effect waves-light btn-grd-success m-r-30 m-b-20">Save</button>
                                                                    <button className="btn waves-effect waves-light btn-grd-info m-r-30 m-b-20">Generate Assessment No.</button>
                                                                    <button className="btn waves-effect waves-light btn-grd-inverse m-b-20">Cancel</button>
                                                                </div>
                                                            </div>
                                                            <div className='sub-title'></div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-block">
                                                                <div class="dt-responsive table-responsive">
                                                                    <table class="table table-striped table-bordered nowrap text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Capital Value</th>
                                                                                <th>As Per Old</th>
                                                                                <th>As Per Old for new Property</th>
                                                                                <th>Minimum RV</th>
                                                                                <th>Minimum RV for Old RV Zero</th>
                                                                                <th>Mix Assessment</th>
                                                                                <th>Hearing</th>
                                                                                <th>Remission</th>
                                                                                <th>Retaintion</th>
                                                                                <th>Cal On Renter Rent</th>
                                                                                <th>Cal On Combined Renter Rent</th>
                                                                                <th>Appeal Policy Rule Wise</th>
                                                                                <th>Plot Tax Applicable</th>
                                                                                <th>Daviation</th>
                                                                                <th>Policy Applicable</th>
                                                                                <th>Policy Lock</th>
                                                                                <th>Data Entry Lock</th>
                                                                                <th>Utility Lock</th>
                                                                                <th>History Lock</th>
                                                                                <th>Hearing Max Discount</th>
                                                                                <th>Appeal Max Discount</th>
                                                                                <th>Enabled Language</th>
                                                                                <th>Enabled OTP</th>
                                                                                <th>Appeal Committee</th>
                                                                                <th>Reason Lock</th>
                                                                                <th>OwnerID For Report Name</th>
                                                                                <th>Avoid Property Editing</th>
                                                                                <th>Report Images from Path</th>
                                                                                <th>Apply Flat Rate Drain</th>
                                                                                <th>Accept Minus Pending Tax</th>
                                                                                <th>OpEduEmpTaxZeroForGovtEduProp</th>
                                                                                <th>Photo Plan From DB</th>
                                                                                <th>Current Balance</th>
                                                                                <th>Pending Balance</th>
                                                                                <th>Submission On Meter</th>
                                                                                <th>Submission On Data Entry</th>
                                                                                <th>Display New Property Remark</th>
                                                                                <th>QR Code</th>
                                                                                <th>Receipt Print</th>
                                                                                <th>Ward Allocation</th>
                                                                                <th>Apply Discount For Extended</th>
                                                                                <th>Rent Validity</th>
                                                                                <th>Active Interest 2</th>
                                                                                <th>Apply Maintainance</th>
                                                                                <th>DB For AMC</th>
                                                                                <th>Assessment Completed</th>
                                                                                <th>Wrong Floor Square</th>
                                                                                <th>Penalty Monthly</th>
                                                                                <th>Invoice Auto Generated</th>
                                                                                <th>Pending Demand Pay First</th>
                                                                                <th>Allow SMS</th>
                                                                                <th>Bill Transaction Entry Deleted</th>
                                                                                <th>Discount On Interest & MBuild</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>No</td>
                                                                                <td>Yes</td>
                                                                                <td>Yes</td>
                                                                                <td>Yes</td>
                                                                                <td>Yes</td>
                                                                                <td>Yes</td>
                                                                                <td>Yes</td>
                                                                                <td>Yes</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>Yes</td>
                                                                                <td>No</td>
                                                                                <td>3</td>
                                                                                <td>Yes</td>
                                                                                <td>Yes</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>50</td>
                                                                                <td>50</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>Yes</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>Yes</td>
                                                                                <td>Yes</td>
                                                                                <td>No</td>
                                                                                <td>Yes</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>Yes</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
                                                                                <td>No</td>
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

export default AssessmentRule
