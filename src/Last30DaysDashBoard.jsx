import Dashboard_OPD_datewiseCountsL1 from "./components/Dashboard_OPD_datewiseCountsL1";
import Dashboard_Bed_Occupation_datewiseCountsL1 from './components/bedOccupancy/Dashboard_BedOccupancy_datewise';
import Dashboard_IPDAdmissions_datewise from "./addmition/Dashboard_IPDAdmissions_datewise";
import Dashboard_ShortStay_Admissions_datewise from "./addmition/Dashboard_ShortStay_Admissions_datewise";

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
    </div>
  );
}

export default Last30DaysDashBoard;
