import Dashboard_OPD_datewiseCountsL1 from "./components/Dashboard_OPD_datewiseCountsL1";
import Dashboard_Bed_Occupation_datewiseCountsL1 from './components/bedOccupancy/Dashboard_BedOccupancy_datewise';
import Dashboard_IPDAdmissions_datewise from "./addmition/Dashboard_IPDAdmissions_datewise";
import Dashboard_ShortStay_Admissions_datewise from "./addmition/Dashboard_ShortStay_Admissions_datewise";
import Dashboard_MajorProcedure_datewise from './components/majorprocedures/Dashboard_MajorProcedure_datewise';
import Dashboard_MinorProcedure_datewise from './components/minorprocedures/Dashboard_MinorProcedure_datewise';
import Dashboard_Revenue_datewise from './components/revenue/Dashboard_Revenue_datewise';
import Dashboard_AandE_datewise from './components/opd/Dashboard_AandE_datewise';
import Dashboard_Lab_Datewise from './components/pathology/Dashboard_Lab_Datewise';
import Dashboard_Radiology_Datewise from './components/radiology/Dashboard_Radiology_Datewise';


function Last30DaysDashBoard() {
  return (
    <div className="row m-3">
      <div className="col-lg-6 col-sm-12">
        <Dashboard_OPD_datewiseCountsL1 />
      </div>
      <div className="col-lg-6 col-sm-12">
        <Dashboard_Bed_Occupation_datewiseCountsL1 />
      </div>
      <div className="col-lg-6 col-sm-12 mt-2">
        <Dashboard_IPDAdmissions_datewise />
      </div>
      <div className="col-lg-6 col-sm-12 mt-2">
        <Dashboard_ShortStay_Admissions_datewise />
      </div>
      <div className="col-lg-6 col-sm-12 mt-2">
        <Dashboard_MajorProcedure_datewise />
      </div>
      <div className="col-lg-6 col-sm-12 mt-2">
        <Dashboard_MinorProcedure_datewise />
      </div>
      <div className="col-lg-6 col-sm-12 mt-2">
        <Dashboard_Revenue_datewise />
      </div>
      <div className="col-lg-6 col-sm-12 mt-2">
        <Dashboard_AandE_datewise />
      </div>
      <div className="col-lg-6 col-sm-12 mt-2">
        <Dashboard_Lab_Datewise />
      </div>
      <div className="col-lg-6 col-sm-12 mt-2">
        <Dashboard_Radiology_Datewise />
      </div>
    </div>
  );
}

export default Last30DaysDashBoard;
