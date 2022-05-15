import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import AppNavbar from './components/SideToolbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from './security/signup';

//import AppSideBar from './components/AppSidebar';
//
import DailyLiveDashboard from  './Last30DaysDashboard';
import MonthlyDashboard from './MonthlyDashboard';
import SpecialityDashboard from './SpecialityDashboard';

import OPDL1 from './opd/OPD_monthwiseCountsL1';
import OPDL2 from './opd/OPD_datewiseCountsL2';
import OPDL3 from './opd/OPD_datewiseCountsL3';
import OPDL4 from './opd/OPD_datewiseCountsL4';

import OccupancyL1 from './bedoccupancy/BedOccupancy_MonthwiseL1';
import OccupancyL2 from './bedoccupancy/BedOccupancy_datewiseL2';
import OccupancyL3 from './bedoccupancy/BedOccupancy_datewiseL3';

import CPTs from './majorprocedures/Major_Minor_Proc_List_L1';

import IPDL1 from './admissions/Admissions_MonthwiseL1';
import IPDL2 from './admissions/Admissions_datewiseL2';
import IPDL3 from './admissions/Admissions_datewiseL3';
import IPDL4 from './admissions/Admissions_datewiseL4';

import AEL1 from './opd/AandE_MonthwiseL1'
import AEL2 from './opd/AandE_datewiseL2';

import MajorProcL1 from './majorprocedures/MajorProcedure_MonthwiseL1';
import MajorProcL2 from './majorprocedures/MajorProcedure_datewiseL2';
import MajorProcL3 from './majorprocedures/MajorProcedure_datewiseL3';

import MinorProcL1 from './minorprocedures/MinorProcedure_MonthwiseL1';
import MinorProcL2 from './minorprocedures/MinorProcedure_datewiseL2';
import MinorProcL3 from './minorprocedures/MinorProcedure_datewiseL3';

import RevenueL1 from './revenue/Revenue_monthwiseL1';
import RevenueL2 from './revenue/Revenue_datewiseL2';
import RevenueL3 from './revenue/Revenue_datewiseL3';
import RevenueL4 from './revenue/Revenue_datewiseL4';


import Lab1 from './pathology/Pathology_monthwiseL1';
import Lab2 from './pathology/Pathology_datewiseL2';

/*const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)*/

export default class MainPage extends Component {
  render() {    
    return (
      <div>
       <Router>
        <AppNavbar />
        <Switch>

        <Route path='/SignUp' exact component={SignUp} />       
        {/* Dashboards */}
        <Route path='/Home' exact component={DailyLiveDashboard} />
        <Route path='/Monthly' exact component={MonthlyDashboard} />
        <Route path='/Speciality' exact component={SpecialityDashboard} />
        

          {/* OPD */}
          <Route exact path='/OPD' component={OPDL1} />
          <Route exact path='/OPDL2' component={OPDL2} />
          <Route exact path="/OPDL3" component={OPDL3}/>
          <Route exact path="/OPDL4" component={OPDL4}/>
          
          {/* Occupancy */}
          <Route exact path="/Occupancy" component={OccupancyL1}/>
          <Route exact path="/OccupancyL2" component={OccupancyL2}/>
          <Route exact path="/OccupancyL3" component={OccupancyL3}/>
        
          <Route exact path="/CPTS" component={CPTs}/>

          


          {/* IPD */}
          <Route exact path="/IPD" component={IPDL1}/>
          <Route exact path="/IPDL2" component={IPDL2}/>
          <Route exact path="/IPDL3" component={IPDL3}/>
          <Route exact path="/IPDL4" component={IPDL4}/>
           {/* A & E */}
          <Route exact path="/AE" component={AEL1}/>
          <Route exact path="/AEL2" component={AEL2}/>
          {/* Major Procedures */}
          <Route exact path="/MajorProc" component={MajorProcL1}/>
          <Route exact path="/MajorProcL2" component={MajorProcL2}/>
          <Route exact path="/MajorProcL3" component={MajorProcL3}/>
         {/* Minor Procedures*/}
          <Route exact path="/MinorProc" component={MinorProcL1}/>
          <Route exact path="/MinorProcL2" component={MinorProcL2}/>
          <Route exact path="/MinorProcL3" component={MinorProcL3}/>
         {/* Revenue*/}
          <Route exact path="/Revenue" component={RevenueL1}/>
          <Route exact path="/RevenueL2" component={RevenueL2}/>
          <Route exact path="/RevenueL3" component={RevenueL3}/>
          <Route exact path="/RevenueL4" component={RevenueL4}/>


          {/* Pathology*/}
          <Route exact path="/LAB" component={Lab1}/>
          <Route exact path="/LABL2" component={Lab2}/>

        </Switch>
      </Router>


    </div>

    );
  }
}


