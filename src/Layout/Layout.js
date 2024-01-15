import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from '../Pages/Dashboard'
import AutoWard from '../Pages/Utlility/AutoWard'
import { BrowserRouter, Route, Link, Routes, Router } from 'react-router-dom';
import LockScreen from '../Pages/LockScreen'
import Login from '../Pages/Login'
import ResetPassword from '../Pages/ResetPassword'
import NewFloorInformation from '../Pages/NewFloorInformation'
import AdditionalPropertyInfo from '../Pages/AdditionalPropertyInfo'
import Zoning from '../Pages/Assessment/zoning/Zoning'
import Valuation from '../Pages/Valuation/Valuation'
import Data from '../Pages/Assessment/Data'
import SocialDetails from '../Pages/Assessment/SocialDetails'
import OldFloorInformation from '../Pages/Assessment/OldFloorInformation'
import AmcAmount from '../Pages/Amc/DefaulterListAmcAccount'
import WardWise from '../Pages/Reports/WardWise'
import PropertyWise from '../Pages/Reports/PropertyWise'
import AdvancePayment from '../Pages/Amc/AdvancePayment'
import AppealA from '../Pages/Assessment/AppealA'
import Mutation from '../Pages/Assessment/Mutation'
import RenterMutation from '../Pages/Assessment/RenterMutation'
import BillBookEntry from '../Pages/Amc/BillBookEntry'
import TaxPayment from '../Pages/Amc/TaxPayment'
import FromViewTransTaxPayment from '../Pages/Amc/FromViewTransTaxPayment'
import FromTranField from '../Pages/Amc/FromTranField'
import SetCustomTax from '../Pages/Amc/SetCustomTax'
import SetRemarkForInvoice from '../Pages/Amc/SetRemarkForInvoice'
import ReportEngine from '../Pages/Amc/ReportEngine'
import UpdateReturnTaxes from '../Pages/Assessment/UpdateReturnTaxes'
import AddTaxes from '../Pages/Utlility/AddTaxes'
import PropertyForDeduAddTaxes from '../Pages/Utlility/PropertyForDeduAddTaxes'
import AutoAppeal from '../Pages/Utlility/AutoAppeal'
import AutoAppealRetain from '../Pages/Utlility/AutoAppealRetain'
import DataEntrySameAs from '../Pages/Utlility/DataEntrySameAs'
import DeleteExcessPropFromDb from '../Pages/Utlility/DeleteExcessPropFromDb'
import ImageDownloader from '../Pages/Utlility/ImageDownloader'
import OwnerNameSameAs from '../Pages/Utlility/OwnerNameSameAs'
import UpdatePropertyAddress from '../Pages/Utlility/UpdatePropertyAddress'
import WardAlloaction from '../Pages/Utlility/WardAllocation'
import UploadPlanAndPhoto from '../Pages/Utlility/UploadPlanAndPhoto'
import DailyCollectionReport from '../Pages/Reports/DaliyCollectionReport'
import DemandAnalysis from '../Pages/Reports/DemandAnalysis'
import PropertyClassification from '../Pages/Reports/PropertyClassification'
import MutationHistory from '../Pages/Reports/MutationHist'
import ReportsEngine from '../Pages/Reports/ReportsE'
import ReportsE from '../Pages/Reports/ReportsE'
import AdminReport from '../Pages/Reports/AdminReport'
import DataEntryF6 from '../Pages/Assessment/DataEntryF6'
import EmployeeMaster from '../Pages/Amc/EmployeeMaster'
import ApplyTax from '../Pages/Master/ApplyTax'
import ConstructionType from '../Pages/Master/ConstructionType'
import CouncilDetails from '../Pages/Master/CouncilDetails'
import Floor from '../Pages/Master/Floor'
import OpenPlotRate from '../Pages/Master/OpenPlotRate'
import PrimeTypeOfUse from '../Pages/Master/PrimeTypeOfUse'
import Maintainance from '../Pages/Master/Maintainance';
import Penalty from '../Pages/Master/Penalty';
import PrimeApplyTaxes from '../Pages/Master/PrimeApplyTaxes';
import PropertyType from '../Pages/Master/PropertyType';
import PropertyTypeTax from '../Pages/Master/PropertyTypeTax';
import RetainPolicyFactor from '../Pages/Master/RetainPolicyFactor';
import RetainPolicyYear from '../Pages/Master/RetainPolicyYear';
import TaxName from '../Pages/Master/TaxName';
import TypeOfUse from '../Pages/Master/TypeOfUse';
import Zone from '../Pages/Master/Zone';
import ZoneSection from '../Pages/Master/ZoneSection';
import TaxMaster from '../Pages/Master/TaxMaster'
import RateMaster from '../Pages/Master/RateMaster'
import Depreciation from '../Pages/Master/Depreciation'
import AssessmentRule from '../Pages/Master/AssessmentRule'
import AutoHearingAppealComm from '../Pages/Admin/AutoHearingAppealComm'
import DiscountSlabMaster from '../Pages/Admin/DiscountSlabMaster'
import LockProperty from '../Pages/Admin/LockProperty'
import PenaltyOnOwnerId from '../Pages/Admin/PenaltyOnOwnerId'
import NewUser from '../Pages/Admin/NewUser'
import NewPageGroup from '../Pages/Admin/NewPageGroup'
import NewPage from '../Pages/Admin/NewPage'
import UserPageAccess from '../Pages/Admin/UserPageAccess'
import YearMaster from '../Pages/Master/YearMaster'
import AdvancePageAccess from '../Pages/Admin/AdvancePageAccess'

const Layout = () => {
    return (



        <div id="pcoded" className="pcoded">
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">

                <Header />
                <div id="sidebar" className="users p-chat-user showChat">
                    <div className="had-container">
                        <div className="card card_main p-fixed users-main">
                            <div className="user-box">
                                <div className="chat-search-box">
                                    <a className="back_friendlist">
                                        <i className="fa fa-chevron-left"></i>
                                    </a>
                                    <div className="right-icon-control">
                                        <form className="form-material">
                                            <div className="form-group form-primary">
                                                <input type="text" name="footer-email" className="form-control" id="search-friends" required="" />
                                                <span className="form-bar"></span>
                                                <label className="float-label"><i className="fa fa-search m-r-10"></i>Search Friend</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="main-friend-list">
                                    <div className="media userlist-box waves-effect waves-light" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">
                                        <a className="media-left" href="#!">
                                            <img className="media-object img-radius img-radius" src="../files/assets/images/avatar-3.jpg" alt="Generic placeholder image " />
                                            <div className="live-status bg-success"></div>
                                        </a>
                                        <div className="media-body">
                                            <div className="f-13 chat-header">Josephin Doe</div>
                                        </div>
                                    </div>
                                    <div className="media userlist-box waves-effect waves-light" data-id="2" data-status="online" data-username="Lary Doe" data-toggle="tooltip" data-placement="left" title="Lary Doe">
                                        <a className="media-left" href="#!">
                                            <img className="media-object img-radius" src="../files/assets/images/avatar-2.jpg" alt="Generic placeholder image" />
                                            <div className="live-status bg-success"></div>
                                        </a>
                                        <div className="media-body">
                                            <div className="f-13 chat-header">Lary Doe</div>
                                        </div>
                                    </div>
                                    <div className="media userlist-box waves-effect waves-light" data-id="3" data-status="online" data-username="Alice" data-toggle="tooltip" data-placement="left" title="Alice">
                                        <a className="media-left" href="#!">
                                            <img className="media-object img-radius" src="../files/assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                                            <div className="live-status bg-success"></div>
                                        </a>
                                        <div className="media-body">
                                            <div className="f-13 chat-header">Alice</div>
                                        </div>
                                    </div>
                                    <div className="media userlist-box waves-effect waves-light" data-id="4" data-status="online" data-username="Alia" data-toggle="tooltip" data-placement="left" title="Alia">
                                        <a className="media-left" href="#!">
                                            <img className="media-object img-radius" src="../files/assets/images/avatar-3.jpg" alt="Generic placeholder image" />
                                            <div className="live-status bg-success"></div>
                                        </a>
                                        <div className="media-body">
                                            <div className="f-13 chat-header">Alia</div>
                                        </div>
                                    </div>
                                    <div className="media userlist-box waves-effect waves-light" data-id="5" data-status="online" data-username="Suzen" data-toggle="tooltip" data-placement="left" title="Suzen">
                                        <a className="media-left" href="#!">
                                            <img className="media-object img-radius" src="../files/assets/images/avatar-2.jpg" alt="Generic placeholder image" />
                                            <div className="live-status bg-success"></div>
                                        </a>
                                        <div className="media-body">
                                            <div className="f-13 chat-header">Suzen</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="showChat_inner">
                    <div className="media chat-inner-header">
                        <a className="back_chatBox">
                            <i className="fa fa-chevron-left"></i> Josephin Doe
                        </a>
                    </div>
                    <div className="media chat-messages">
                        <a className="media-left photo-table" href="#!">
                            <img className="media-object img-radius img-radius m-t-5" src="../files/assets/images/avatar-3.jpg" alt="Generic placeholder image" />
                        </a>
                        <div className="media-body chat-menu-content">
                            <div className="">
                                <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                                <p className="chat-time">8:20 a.m.</p>
                            </div>
                        </div>
                    </div>
                    <div className="media chat-messages">
                        <div className="media-body chat-menu-reply">
                            <div className="">
                                <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                                <p className="chat-time">8:20 a.m.</p>
                            </div>
                        </div>
                        <div className="media-right photo-table">
                            <a href="#!">
                                <img className="media-object img-radius img-radius m-t-5" src="../files/assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                            </a>
                        </div>
                    </div>
                    <div className="chat-reply-box">
                        <div className="right-icon-control">
                            <form className="form-material">
                                <div className="form-group form-primary">
                                    <input type="text" name="footer-email" className="form-control" required="" />
                                    <span className="form-bar"></span>
                                    <label className="float-label"><i className="fa fa-search m-r-10"></i>Share Your Thoughts</label>
                                </div>
                            </form>
                            <div className="form-icon ">
                                <button className="btn btn-success btn-icon  waves-effect waves-light">
                                    <i className="fa fa-paper-plane "></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar />
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/autoward" element={<AutoWard />} />
                            {/* assessment */}
                            <Route path="/dataEntry" element={<Data />} />
                            <Route path="/zoning" element={<Zoning />} />
                            <Route path="/totalvaluation" element={<Valuation/>}/>
                              <Route path="/socialDetails" element={<SocialDetails/>}/>
                              <Route path="/oldinformation" element={<OldFloorInformation/>}/>
                              <Route path="/appeal" element={<AppealA/>}/>
                              <Route path="/mutation" element={<Mutation/>}/>
                              <Route path="/Rentermutation" element={<RenterMutation/>}/>
                            <Route path="/updateReturn" element={<UpdateReturnTaxes />} />
                             <Route path="/datalast" element={<DataEntryF6/>}/>
                            <Route path="/wardWise" element={<WardWise />} />
                            <Route path="/propertyWise" element={<PropertyWise />} />
                             <Route path="/defaulterList" element={<AmcAmount/>}/>
                             
                              <Route path="/advancePayment" element={<AdvancePayment/>}/> 
                              <Route path="/billBookEntry" element={<BillBookEntry/>}/> 
                              <Route path="/taxPayment" element={<TaxPayment/>}/> 
                              <Route path="/fromViewtransTax" element={<FromViewTransTaxPayment/>}/> 
                              <Route path="/tranFieldP" element={<FromTranField/>}/> 
                              <Route path="/setCustomTaxes" element={<SetCustomTax/>}/> 
                              <Route path="/setRemarkForInvoice" element={<SetRemarkForInvoice/>}/> 
                              <Route path="/reportEAmc" element={<ReportEngine/>}/> 
                              <Route path="/employeeMaster" element={<EmployeeMaster/>}/> 
                               <Route path="/dailyCollectionReport" element={<DailyCollectionReport/>}/>
                              <Route path="/demandAnalysis" element={<DemandAnalysis/>}/>
                              <Route path="/propertyClassification" element={<PropertyClassification/>}/>
                              <Route path="/mutationHistory" element={<MutationHistory/>}/>
                              <Route path="/ReportEngine" element={<ReportsEngine/>}/>
                              <Route path="/adminReport" element={<AdminReport/>}/>
                              {/* Utlity */}
                              <Route path="/addTaxes" element={<AddTaxes/>}/>
                              <Route path="/pAdvanceDedu" element={<PropertyForDeduAddTaxes/>}/>
                              <Route path="/autoAppeal" element={<AutoAppeal/>}/>
                              <Route path="/autoAppealRetain" element={<AutoAppealRetain/>}/>
                              <Route path="/dataEntrySameAs" element={<DataEntrySameAs/>}/>
                              <Route path="/deleteExcessPropertiesFromDataBase" element={<DeleteExcessPropFromDb/>}/>
                              <Route path="/imageDownloader" element={<ImageDownloader/>}/>
                              <Route path="/ownerNameSameAs" element={<OwnerNameSameAs/>}/>
                              <Route path="/updatePropertyAddress" element={<UpdatePropertyAddress/>}/>
                              <Route path="/wardAllocation" element={<WardAlloaction/>}/>
                              <Route path="/uploadPlanAndPhoto" element={<UploadPlanAndPhoto/>}/>

                            <Route path="/applytax" element={<ApplyTax />} />
                            <Route path="/constructiontype" element={<ConstructionType />} />
                            <Route path="/councildetails" element={<CouncilDetails />} />
                            <Route path="/floor" element={<Floor />} />
                            <Route path="/openplotrate" element={<OpenPlotRate />} />
                            <Route path="/primetypeofuse" element={<PrimeTypeOfUse />} />
                            <Route path='/maintainance' element={<Maintainance />} />
                            <Route path='/penalty' element={<Penalty />} />
                            <Route path='/primeapplytax' element={<PrimeApplyTaxes />} />
                            <Route path='/proptype' element={<PropertyType />} />
                            <Route path='/proptypetax' element={<PropertyTypeTax />} />
                            <Route path='/retainpolicyfactor' element={<RetainPolicyFactor />} />
                            <Route path='/retainpolicyyear' element={<RetainPolicyYear />} />
                            <Route path='/taxname' element={<TaxName />} />
                            <Route path='/typeofuse' element={<TypeOfUse />} />
                            <Route path='/zone' element={<Zone />} />
                            <Route path='/zonesection' element={<ZoneSection />} />
                            <Route path='/taxmaster' element={<TaxMaster />} />
                            <Route path='/ratemaster' element={<RateMaster />} />
                            <Route path='/depreciationmaster' element={<Depreciation />} />
                            <Route path='/assessmentrulemaster' element={<AssessmentRule />} />
                            <Route path='/appealhearingcomm' element={<AutoHearingAppealComm />} />
                            <Route path='/discslabmaster' element={<DiscountSlabMaster />} />
                            <Route path='/lockproperty' element={<LockProperty />} />
                            <Route path='/penaltyonproperty' element={<PenaltyOnOwnerId />} />
                            <Route path='/newuser' element={<NewUser />} />
                            <Route path='/pagegroup' element={<NewPageGroup />} />
                            <Route path='/pagename' element={<NewPage />} />
                            <Route path='/useraccess' element={<UserPageAccess />} />
                            <Route path='/yearmaster' element={<YearMaster />} />
                            <Route path='/advpageaccess' element={<AdvancePageAccess />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Layout
