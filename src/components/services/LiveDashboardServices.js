import axios from "axios";
// ma Memorial Hospital
const liveDashboard_Base_URL = "http://172.16.15.9:7205/";


// Lady Reading Hospital 
//const liveDashboard_Base_URL = "http://172.16.200.209:7205/";


//const liveDashboard_Base_URL = "http://localhost:7205/";

class LiveDashboardServices {

  
//**********************************************************
// ******************* OPD **************************
//**********************************************************

//Dashboard,  OPD Date wise Counts
getLast30DaysOPDCountsL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findLast30DaysOPDCountsL1"
   );
}

//Dashboard --- Speciality wise OPD Counts 
getSpecialitywiseOPDCountsL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findSpecialitywiseOPDCountsL1"
   );
}

 //Dashboard,  OPD Monthly Counts
 getmonthewiseOPDCounts() {
  return axios.get(
    liveDashboard_Base_URL +
      "findmonthewiseOPDCounts"
   );
}

 //Level#1,  OPD Date wise Counts
 getmonthwiseOPDCountsL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findmonthwiseOPDCountsL1"
   );
}

//Level#2,  OPD Date wise Counts
  getdatewiseOPDCountsL2(month_name) {
    return axios.get(
      liveDashboard_Base_URL +
        "findDatewiseOPDCountsL2/" +
        month_name
     );
  }

//Level#3,  OPD Speciality wise Counts
getdatewiseOPDCountsL3(date_id,month_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "findDatewiseOPDCountsL3/" +
      "?date_id=" +
      date_id+
      "&month_name="+  
      month_name
  );
}


// Level 4 PMC Speciality wise Patient Detail
getdatewiseOPDCountsL4(date_id, month_name,speciality_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "finddatewiseOPDCountsL4/" + 
      "?date_id=" +
      date_id +
      "&month_name=" +
      month_name +
      "&speciality_name=" +
      speciality_name
  );
}

//**********************************************************
// ******************* Bed Occupancy **************************
//**********************************************************

//Level#1,  Bed Occupancy Ratio
getLast30DaysbedOccupancyL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findLast30DaysbedOccupancyL1" 
  );
}

//Level#1,  Bed Occupancy Ratio
getSpecialitywiseBedOccupancyL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findSpecialitywiseBedOccupancyL1" 
  );
}

getMonthwisebedOccupancy() {
  return axios.get(
    liveDashboard_Base_URL +
      "findMonthwisebedOccupancy" 
  );
}

getMonthwisebedOccupancyL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findMonthwisebedOccupancyL1" 
  );
}




//Level#1,  Bed Occupancy Ratio
  getdatewisebedOccupancyL2(month_name) {
    return axios.get(
      liveDashboard_Base_URL +
      "findDatewisebedOccupancyL2/" +
      month_name

    );
  }

  
  //Level#2,  Bed Occupancy Ratio
  getdatewisebedOccupancyL3(date_id,month_name) {
    return axios.get(
      liveDashboard_Base_URL +
        "findDatewisebedOccupancyL3/"  +
        "?date_id=" +
        date_id+
        "&month_name="+  
        month_name
    );
  }

  
//**********************************************************
// ******************* Beds **************************
//**********************************************************

  //Level#1, Average Length of Stay
  getAlosCountsL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findAlosCountsL1" 
  );
}

//Level#1, Speciality and Location wise Beds
getspecialityBedsL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findspecialityBedsL1" 
  );
}
  
//**********************************************************
// ******************* Admissions **************************
//**********************************************************

//Level#1,  IPD Date wise Counts
getLast30DaysIPDCountsL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findLast30DaysIPDCountsL1" 
  );
}
//Level#1,  Speciality wise Admission
getSpecialitywiseIpdAdmissionsL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findSpecialitywiseIpdAdmissionsL1" 
  );
}


//Level#1,  Monthly wise Admission
getmonthwiseIPDCountsL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findmonthwiseIPDCountsL1" 
  );
}


  //Level#1,  IPD Date wise Counts
  getdatewiseIPDCountsL2(month_name) {
    return axios.get(
      liveDashboard_Base_URL +
        "findDatewiseIPDCountsL2/" +
        month_name
    );
  }
//Level#2,  IPD Speciality wise Counts
getdatewiseIPDCountsL3(date_id,month_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "findDatewiseIPDCountsL3/" +
      "?date_id=" +
      date_id+
      "&month_name="+  
      month_name
  );
}

// Level 3 PMC Speciality wise Patient Detail
getdatewiseIPDCountsL4(date_id,month_name,speciality_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "findDatewiseIPDCountsL4/" + 
      "?date_id=" +
      date_id +
      "&month_name=" +
      month_name +
      "&speciality_name=" +
      speciality_name
  );
}



//Level#1,  Monthly wise Admission
getmonthwiseShortStayCountsL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findmonthwiseShortStayCountsL1" 
  );
}

 //Level#1,  Short Stay Date wise Counts
 getDatewiseShortStayCountsL1(month_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "findDatewiseShortStayCountsL1/" +
      month_name 
  );

}


//Level#1,  Short Stay Date wise Counts
getLast30DaysShortStayCountsL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findLast30DaysShortStayCountsL1" 
  );
  }

//Level#1,  Speciality wise Admission
getSpecialitywiseShortStayL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findSpecialitywiseShortStayL1" 
  );
}
//Level#2,  Short Stay Speciality wise Counts
getDatewiseShortStayCountsL2(date_name) {
return axios.get(
  liveDashboard_Base_URL +
    "findDatewiseShortStayCountsL2/" +
    date_name 
);
}



//****************************************************************
// ******************* A & E **************************
//****************************************************************

getLast30DaysEmergencyL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findLast30DaysEmergencyL1" 
  );
}


getmonthwiseEmergencyL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findmonthwiseEmergencyL1" 
  );
}


getdatewiseEmergencyL2(month_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "findDatewiseEmergencyL2/"  +
      month_name
  );
}

//****************************************************************
// ******************* Major Procedures **************************
//****************************************************************

getLast30DaysMajProcL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findLast30DaysMajProcL1" 
  );
}

getSpecialitywiseMajProcL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findSpecialitywiseMajProcL1" 
  );
}





getmonthwiseMajProcL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findmonthwiseMajProcL1" 
  );
}


getdatewiseMajProcL2(month_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "findDatewiseMajProcL2/" +
      month_name
  );
}

getdatewiseMajProcL3(date_id, month_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "findDatewiseMajProcL3/" + 
      "?date_id=" +
      date_id +
      "&month_name=" +
      month_name 
  );
}

getMajMinProcListL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findMajMinProcListL1" 
  );
}

//****************************************************************
// ******************* Minor Procedures **************************
//****************************************************************

getLast30DaysMinProcL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findLast30DaysMinProcL1" 
  );
}

// Speciality wise
getSpecialitywiseMinProcL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findSpecialitywiseMinProcL1" 
  );
}


getMonthwiseMinProcL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findMonthwiseMinProcL1" 
  );
}

getdatewiseMinProcL2(month_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "findDatewiseMinProcL2/" +
      month_name
  );
}


getdatewiseMinProcL3(date_id, month_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "findDatewiseMinProcL3/"  + 
      "?date_id=" +
      date_id +
      "&month_name=" +
      month_name 
  );
}


//****************************************************************
// ************************ Revenue ******************************
//****************************************************************


getLast30DaysRevenueL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findLast30DaysRevenueL1" 
  );
}


//Dashboard --- Speciality wise Revenue
getSpecialitywiseRevenueL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findSpecialitywiseRevenueL1"
   );
}

getmonthwiseRevenueL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findmonthwiseRevenueL1" 
  );
}


getdatewiseRevenueL2(month_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "findDatewiseRevenueL2/" +
      month_name
  );
}

getdatewiseRevenueL3(date_id,month_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "findDatewiseRevenueL3/" +
      "?date_id=" +
      date_id+
      "&month_name="+  
      month_name
  );
}

// Level 4 PMC Speciality wise Patient Detail
getdatewiseRevenueL4(date_id, month_name,speciality_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "findDatewiseRevenueL4/" + 
      "?date_id=" +
      date_id +
      "&month_name=" +
      month_name +
      "&speciality_name=" +
      speciality_name
  );
}

//**********************************************************
// ******************* PATHOLOGY **************************
//**********************************************************


//Dashboard,  Lab Tests Last 30 Days
getLast30DaysLabTests() {
  return axios.get(
    liveDashboard_Base_URL +
      "findLast30DaysLabTests"
   );
}

// Level#1, Month wise Pathology Counts
getmonthwiseLabL1() {
  return axios.get(
    liveDashboard_Base_URL +
      "findmonthwiseLabL1" 
  );
}

// Level#2, Date wise Pathology Counts
getdatewiseLabL2(month_name) {
  return axios.get(
    liveDashboard_Base_URL +
      "finddatewiseLabL2/"+
      month_name 
  );
}

//**********************************************************
// ******************* RADIOLOGY **************************
//**********************************************************

//Dashboard,  Lab Tests Last 30 Days
getLast30DaysRadiologyTests() {
  return axios.get(
    liveDashboard_Base_URL +
      "findLast30DaysRadiologyTests"
   );
}



//**********************************************************
// ******************* SPECIALITY **************************
//**********************************************************

//Speciality wise all stats
getspecialitycommonCounts() {
  return axios.get(
    liveDashboard_Base_URL +
      "findspecialitycommonCounts"
   );
}

// Speciality wise Diagnosis Counts
getspecialityDxCounts() {
  return axios.get(
    liveDashboard_Base_URL +
      "findspecialityDxCounts"
   );
}

// Speciality wise Combined Procedures Counts
getspecialityCombinedProceduresCounts() {
  return axios.get(
    liveDashboard_Base_URL +
      "findSpecialitywiseCombinedProcL1"
   );
}


}
export default new LiveDashboardServices();