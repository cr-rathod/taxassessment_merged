import React from 'react';
import Layout from './Layout/Layout';
import Login from './Pages/Login';
import LockScreen from './Pages/LockScreen';
import ResetPassword from './Pages/ResetPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Dashboard from './Pages/Dashboard';
import AutoWard from './Pages/AutoWard';
import Oblique from './Pages/Oblique';
import Zoning from './Pages/Assessment/zoning/Zoning';
import Valuation from './Pages/Valuation/Valuation';
import Data from './Pages/Assessment/Data';
import SocialDetails from './Pages/Assessment/SocialDetails';
import OldFloorInformation from './Pages/Assessment/OldFloorInformation';
import AmcAmount from './Pages/Amc/DefaulterListAmcAccount';
import WardWise from './Pages/Reports/WardWise';
import PropertyWise from './Pages/Reports/PropertyWise';
import AdvancePayment from './Pages/Amc/AdvancePayment';
import AppealA from './Pages/Assessment/AppealA';
import Mutation from './Pages/Assessment/Mutation';
import RenterMutation from './Pages/Assessment/RenterMutation';
import BillBookEntry from './Pages/Amc/BillBookEntry';
import TaxPayment from './Pages/Amc/TaxPayment';
import FromViewTransTaxPayment from './Pages/Amc/FromViewTransTaxPayment';
import FromTranField from './Pages/Amc/FromTranField';
import SetCustomTax from './Pages/Amc/SetCustomTax';
import SetRemarkForInvoice from './Pages/Amc/SetRemarkForInvoice';
import ReportEngine from './Pages/Amc/ReportEngine';
import UpdateReturnTaxes from './Pages/Assessment/UpdateReturnTaxes';

import AddTaxes from "./Pages/Utlility/AddTaxes";
import PropertyForDeduAddTaxes from "./Pages/Utlility/PropertyForDeduAddTaxes";
// import ApplyTax from "./Pages/Utlility/Samole";
import AutoAppeal from "./Pages/Utlility/AutoAppeal";
import AutoAppealRetain from "./Pages/Utlility/AutoAppealRetain";
import DataEntrySameAs from "./Pages/Utlility/DataEntrySameAs";
import DeleteExcessPropFromDb from "./Pages/Utlility/DeleteExcessPropFromDb";
import ImageDownloader from "./Pages/Utlility/ImageDownloader";
import OwnerNameSameAs from "./Pages/Utlility/OwnerNameSameAs";
import UpdatePropertyAddress from "./Pages/Utlility/UpdatePropertyAddress";
import WardAlloaction from "./Pages/Utlility/WardAllocation";
import UploadPlanAndPhoto from "./Pages/Utlility/UploadPlanAndPhoto";
import DailyCollectionReport from "./Pages/Reports/DaliyCollectionReport";
import DemandAnalysis from "./Pages/Reports/DemandAnalysis";
import PropertyClassification from "./Pages/Reports/PropertyClassification";
import MutationHistory from "./Pages/Reports/MutationHist";
import ReportsEngine from "./Pages/Reports/ReportsE";
import ReportsE from "./Pages/Reports/ReportsE";
import AdminReport from "./Pages/Reports/AdminReport";
import DataEntryF6 from "./Pages/Assessment/DataEntryF6";
import EmployeeMaster from "./Pages/Amc/EmployeeMaster";
import ApplyTax from './Pages/Master/ApplyTax';
import ConstructionType from './Pages/Master/ConstructionType';
import CouncilDetails from './Pages/Master/CouncilDetails';
import Floor from './Pages/Master/Floor';
import OpenPlotRate from './Pages/Master/OpenPlotRate';
import PrimeTypeOfUse from './Pages/Master/PrimeTypeOfUse';
import Maintainance from './Pages/Master/Maintainance';
import Penalty from './Pages/Master/Penalty';
import PrimeApplyTaxes from './Pages/Master/PrimeApplyTaxes';
import PropertyType from './Pages/Master/PropertyType';
import PropertyTypeTax from './Pages/Master/PropertyTypeTax';
import RetainPolicyFactor from './Pages/Master/RetainPolicyFactor';
import RetainPolicyYear from './Pages/Master/RetainPolicyYear';
import TaxName from './Pages/Master/TaxName';
import TypeOfUse from './Pages/Master/TypeOfUse';
import Zone from './Pages/Master/Zone';
import ZoneSection from './Pages/Master/ZoneSection';
import TaxMaster from './Pages/Master/TaxMaster';
import RateMaster from './Pages/Master/RateMaster';
import Depreciation from './Pages/Master/Depreciation';
import AssessmentRule from './Pages/Master/AssessmentRule';
import AutoHearingAppealComm from './Pages/Admin/AutoHearingAppealComm';
import DiscountSlabMaster from './Pages/Admin/DiscountSlabMaster';
import LockProperty from './Pages/Admin/LockProperty';
import PenaltyOnOwnerId from './Pages/Admin/PenaltyOnOwnerId';
import NewUser from './Pages/Admin/NewUser';
import NewPageGroup from './Pages/Admin/NewPageGroup';
import NewPage from './Pages/Admin/NewPage';
import UserPageAccess from './Pages/Admin/UserPageAccess';
import YearMaster from './Pages/Master/YearMaster';
import AdvancePageAccess from './Pages/Admin/AdvancePageAccess';
function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path="autoward" element={<AutoWard />} />
            <Route path="oblique" element={<Oblique />} />

            {/* Assessment */}
            <Route path="dataEntry" element={<Data />} />
            <Route path="zoning" element={<Zoning />} />
            <Route path="totalvaluation" element={<Valuation />} />
            <Route path="socialDetails" element={<SocialDetails />} />
            <Route path="oldinformation" element={<OldFloorInformation />} />
            <Route path="appeal" element={<AppealA />} />
            <Route path="mutation" element={<Mutation />} />
            <Route path="Rentermutation" element={<RenterMutation />} />
            <Route path="updateReturn" element={<UpdateReturnTaxes />} />
            <Route path="/datalast" element={<DataEntryF6 />} />


            {/* Amc */}
            <Route path="wardWise" element={<WardWise />} />
            <Route path="propertyWise" element={<PropertyWise />} />
            <Route path="defaulterList" element={<AmcAmount />} />

            <Route path="advancePayment" element={<AdvancePayment />} />
            <Route path="billBookEntry" element={<BillBookEntry />} />
            <Route path="taxPayment" element={<TaxPayment />} />
            <Route path="fromViewtransTax" element={<FromViewTransTaxPayment />} />
            <Route path="tranFieldP" element={<FromTranField />} />
            <Route path="setCustomTaxes" element={<SetCustomTax />} />
            <Route path="setRemarkForInvoice" element={<SetRemarkForInvoice />} />
            <Route path="reportEAmc" element={<ReportEngine />} />
            <Route path="/employeeMaster" element={<EmployeeMaster />} />
            <Route path="dailyCollectionReport" element={<DailyCollectionReport />} />
            <Route path="demandAnalysis" element={<DemandAnalysis />} />
            <Route path="propertyClassification" element={<PropertyClassification />} />
            <Route path="mutationHistory" element={<MutationHistory />} />
            <Route path="ReportEngine" element={<ReportsE />} />
            <Route path="adminReport" element={<AdminReport />} />
            <Route path="addTaxes" element={<AddTaxes />} />
            <Route path="pAdvanceDedu" element={<PropertyForDeduAddTaxes />} />
            <Route path="autoAppeal" element={<AutoAppeal />} />
            <Route path="autoAppealRetain" element={<AutoAppealRetain />} />
            <Route path="dataEntrySameAs" element={<DataEntrySameAs />} />
            <Route path="deleteExcessPropertiesFromDataBase" element={<DeleteExcessPropFromDb />} />
            <Route path="imageDownloader" element={<ImageDownloader />} />
            <Route path="ownerNameSameAs" element={<OwnerNameSameAs />} />
            <Route path="updatePropertyAddress" element={<UpdatePropertyAddress />} />
            <Route path="wardAllocation" element={<WardAlloaction />} />
            <Route path="uploadPlanAndPhoto" element={<UploadPlanAndPhoto />} />
            {/* <Route path="/advanceP" element={<AdvancePayment/>}/> */}
            <Route path="appeal" element={<AppealA />} />
            <Route path="applytax" element={<ApplyTax />} />
            <Route path="constructiontype" element={<ConstructionType />} />
            <Route path='councildetails' element={<CouncilDetails />} />
            <Route path='floor' element={<Floor />} />
            <Route path='openplotrate' element={<OpenPlotRate />} />
            <Route path='primetypeofuse' element={<PrimeTypeOfUse />} />
            <Route path='maintainance' element={<Maintainance />} />
            <Route path='penalty' element={<Penalty />} />
            <Route path='primeapplytax' element={<PrimeApplyTaxes />} />
            <Route path='proptype' element={<PropertyType />} />
            <Route path='proptypetax' element={<PropertyTypeTax />} />
            <Route path='retainpolicyfactor' element={<RetainPolicyFactor />} />
            <Route path='retainpolicyyear' element={<RetainPolicyYear />} />
            <Route path='taxname' element={<TaxName />} />
            <Route path='typeofuse' element={<TypeOfUse />} />
            <Route path='zone' element={<Zone />} />
            <Route path='zonesection' element={<ZoneSection />} />
            <Route path='taxmaster' element={<TaxMaster />} />
            <Route path='ratemaster' element={<RateMaster />} />
            <Route path='depreciationmaster' element={<Depreciation />} />
            <Route path='assessmentrulemaster' element={<AssessmentRule />} />
            <Route path='appealhearingcomm' element={<AutoHearingAppealComm />} />
            <Route path='discslabmaster' element={<DiscountSlabMaster />} />
            <Route path='lockproperty' element={<LockProperty />} />
            <Route path='penaltyonproperty' element={<PenaltyOnOwnerId />} />
            <Route path='newuser' element={<NewUser />} />
            <Route path='pagegroup' element={<NewPageGroup />} />
            <Route path='pagename' element={<NewPage />} />
            <Route path='useraccess' element={<UserPageAccess />} />
            <Route path='yearmaster' element={<YearMaster />} />
            <Route path='advpageaccess' element={<AdvancePageAccess />} />

          </Route>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/lock" element={<LockScreen />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

