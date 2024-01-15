import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);


  const handleSearch = (event) => {
    event.preventDefault();

    const searchQuery = event.target.value.toLowerCase();
    const friendList = ["Data Entry", "Total Valuation", "Appeal", "Old Information", 
    "Social Details", "Renter Mutation","Mutation","Zoning", "Defaulter List", "Advance Payment", 
    "Bill Book Entry","Set Custom Taxes", "Set Remark For Invoice", 
    "Report Engine", "Tax Payment","Add Taxes","Auto Ward","Auto Appeal",
    "Data Entry Same As","Delete Excess Properties From DataBase",
    "Image Downloader","Owner Name Same As","Update Property Address",
    "Ward Allocation","Upload Plan And Photo","property Classification","Admin Report","Property Wise",
    "Ward Wise","Daily Collection Report","Mutation History","Employee Master","Demand Analysis","Report Engine" ,
    " Report E amc"];
    
    const foundFriend = friendList.find(friend => friend.toLowerCase() === searchQuery);

    if (foundFriend) {
      navigate(`/${foundFriend.replace(/\s+/g, '').toLowerCase()}`);
    }
  };

  
  return (
    <>
      <nav className="pcoded-navbar">
        <div className="sidebar_toggle"><a href="#"><i className="icon-close icons"></i></a></div>
        <div className="pcoded-inner-navbar main-menu">
          <div className="">
            <div className="main-menu-header">
              <img className="img-80 img-radius" src="../files/assets/images/avatar-4.jpg" alt="User-Profile-Image" />
              <div className="user-details">
                <span id="more-details">John Doe<i className="fa fa-caret-down"></i></span>
              </div>
            </div>

            <div className="main-menu-content">
              <ul>
                <li className="more-details">
                  <a href="user-profile.html"><i className="ti-user"></i>View Profile</a>
                  <a href="#!"><i className="ti-settings"></i>Settings</a>
                  <a href="/auth-normal-sign-in"><i className="ti-layout-sidebar-left"></i>Logout</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-15 p-b-0">
            <form className="form-material">
              <div className="form-group form-primary">
                <input type="text" name="footer-email" className="form-control" required=""               onChange={handleSearch}
 />
                <span className="form-bar"></span>
                <label className="float-label"><i className="fa fa-search m-r-10"></i>Search Friend</label>
              </div>
            </form>
          </div>
          <div className="pcoded-navigation-label">NTIS</div>
          <ul className="pcoded-item pcoded-left-item">
            <li className="pcoded-hasmenu  ">
              {/* active pcoded-trigger */}
              <a href="javascript:void(0)" className="waves-effect waves-dark">
                <span className="pcoded-micon "><i className="ti-home"></i><b>D</b></span>
                <span className="pcoded-mtext  ">Assessment</span>
                <span className="pcoded-mcaret"></span>
              </a>
              <ul className="pcoded-submenu">
               
                <li className="">
                  <a href="/dataEntry" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Data Entry</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/totalvaluation" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Total Valuation</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className=" ">
                  <a href="/appeal" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Appeal</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className=" ">
                  <a href="/oldinformation" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Old Information</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className=" ">
                  <a href="/socialDetails" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Social Details</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                {/* <li className=" ">
                  <a href="/updateReturn" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Update Return Taxes</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li> */}
                <li className=" ">
                  <a href="/mutation" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Mutation</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                
                <li className=" ">
                  <a href="/zoning" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Zoning</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className=" ">
                  <a href="/Rentermutation" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Renter Mutation</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
               

{/*  */}
 
{/*  */}
              </ul>
            </li>
            
            <li className="pcoded-hasmenu  ">
              <a href="javascript:void(0)" className="waves-effect waves-dark">
                <span className="pcoded-micon"><i className="ti-layout"></i><b>P</b></span>
                <span className="pcoded-mtext">AMC</span>
                <span className="pcoded-badge label label-warning">NEW</span>
                <span className="pcoded-mcaret"></span>
              </a>
              <ul className="pcoded-submenu">
             
                <li className=" ">
                  <a href="/defaulterList" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Defaulter List</span>
                    <span className="pcoded-badge label label-info ">Modify</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className=" ">
                  <a href="/advancePayment" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Advance Payment</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className=" ">
                  <a href="/billBookEntry" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Bill Book Entry</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                
                <li className=" ">
                  <a href="/setCustomTaxes" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">set Custom Taxes</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className=" ">
                  <a href="/setRemarkForInvoice" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Set Remark For Invoice</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className=" ">
                  <a href="/reportEAmc" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Report Engine</span>
                    <span className="pcoded-badge label label-warning ">check</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className=" ">
                  <a href="/taxPayment" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Tax Payment</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>

               
                    
               

              
                
              </ul>
            </li>
           
            <li className="pcoded-hasmenu ">
              <a href="javascript:void(0)" className="waves-effect waves-dark">
                <span className="pcoded-micon"><i className="ti-view-grid"></i><b>W</b></span>
                <span className="pcoded-mtext">Report</span>
                <span className="pcoded-mcaret"></span>
              </a>
              <ul className="pcoded-submenu">
              <li className=" ">
                  <a href="/adminReport" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Admin Report</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className=" ">
                  <a href="/propertyWise" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Property Wise</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className=" ">
                  <a href="/wardWise" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Ward Wise</span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>      
                <li className=" ">
                  <a href="/dailyCollectionReport" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Daily Collection Report</span>
                    <span className="pcoded-badge label label-warning">check</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>                              

                <li className=" ">
                  <a href="/demandAnalysis" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Demand Analysis </span>
                    <span className="pcoded-badge label label-warning ">check</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>           

                <li className=" ">
                  <a href="/propertyClassification" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Property Classification </span>
                    <span className="pcoded-badge label label-warning ">check</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>                             
                <li className=" ">
                  <a href="/mutationHistory" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Mutation History </span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>            
                <li className=" ">
                  <a href="/ReportEngine" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Report Engine </span>
                    <span className="pcoded-badge label label-info ">NEW</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li> 
                
              </ul>
            </li>
            <li className="pcoded-hasmenu">
              <a href="javascript:void(0)" className="waves-effect waves-dark">
                <span className="pcoded-micon"><i className="ti-view-grid"></i><b>W</b></span>
                <span className="pcoded-mtext">Utility</span>
                <span className="pcoded-badge label label-warning">new</span>
                <span className="pcoded-mcaret"></span>
              </a>
              <ul className="pcoded-submenu">
             
               
                <li className="">
                  <a href="/addTaxes" className="waves-effect waves-dark">

                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Add Taxes</span>

                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/autoward" className="waves-effect waves-dark">

                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Auto Ward</span>

                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/autoAppeal" className="waves-effect waves-dark">

                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Auto Appeal</span>

                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/dataEntrySameAs" className="waves-effect waves-dark">

                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Data Entry Same As</span>

                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/deleteExcessPropertiesFromDataBase" className="waves-effect waves-dark">

                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Delete Excess Properties From DataBase</span>

                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/ImageDownloader" className="waves-effect waves-dark">

                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Image Downloader</span>

                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/ownerNameSameAs" className="waves-effect waves-dark">

                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Owner Name Same As</span>

                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>

                <li className="">
                  <a href="/updatePropertyAddress" className="waves-effect waves-dark">

                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Update Property Address</span>

                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/wardAllocation" className="waves-effect waves-dark">

                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Ward Allocation</span>

                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>           
                <li className="">
                  <a href="/uploadPhotoAndPlan" className="waves-effect waves-dark">

                    <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                    <span className="pcoded-mtext">Upload Plan And Photo</span>

                    <span className="pcoded-mcaret"></span>
                  </a>
                </li> 
               
               
              </ul>
            </li>
            <li className="pcoded-hasmenu">
              <a href="javascript:void(0)" className="waves-effect waves-dark">
                <span className="pcoded-micon"><i className="ti-archive"></i><b>P</b></span>
                <span className="pcoded-mtext">Master</span>
                <span className="pcoded-mcaret"></span>
              </a>
              <ul className="pcoded-submenu">
                <li className="">
                  <a href="/applytax" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Apply Tax</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/assessmentrulemaster" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Assessment Rule</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/constructiontype" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Construction Type</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/councildetails" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Council Details</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/depreciationmaster" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Depreciation Master</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/floor" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Floor</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/openplotrate" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Open Plot Rate</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/primetypeofuse" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Prime Type Of Use</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/maintainance" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Maintainance</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/penalty" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Penalty</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/primeapplytax" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Prime Apply Tax</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/proptype" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Property Type</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/proptypetax" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Property Type Tax</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/ratemaster" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Rate Master</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/retainpolicyfactor" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Retain Policy Factor</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/RetainPolicyYear" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Retain Policy Year</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/taxname" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Tax Name</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/taxmaster" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Tax Master</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/typeofuse" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Type of Use</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/yearmaster" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Year Master</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/zone" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Zone</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/zonesection" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Zone Section</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="pcoded-hasmenu">
              <a href="javascript:void(0)" className="waves-effect waves-dark">
                <span className="pcoded-micon"><i className="ti-user"></i><b>P</b></span>
                <span className="pcoded-mtext">Admin</span>
                <span className="pcoded-mcaret"></span>
              </a>
              <ul className="pcoded-submenu">
                <li className="">
                  <a href="/appealhearingcomm" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Appeal Hearing Committee</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/discslabmaster" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Discount Slab Master</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/lockproperty" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Lock Property</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/penaltyonproperty" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Penalty Owner Id Wise</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/newuser" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">New User</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/pagegroup" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">New Page Group</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/pagename" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">New Page Name</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/useraccess" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">User Page Access</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
                <li className="">
                  <a href="/advpageaccess" className="waves-effect waves-dark">
                    <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                    <span className="pcoded-mtext">Advance Page Access</span>
                    <span className="pcoded-mcaret"></span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav >
    </>
  )
}

export default Sidebar