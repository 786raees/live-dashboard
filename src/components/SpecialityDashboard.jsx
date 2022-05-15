import React from 'react';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
//import 'bootstrap/dist/css/bootstrap.min.css';
import OPD from './opd/Dashhboard_OPD_Specialitywise';
import BedOccupancy from './bedoccupancy/Dashboard_BedOccupancy_Specialitywise';
import IPDAdmissions from './admissions/Dashboard_IPDAdmissions_Specialitywise';
import ShortAdmissions from './admissions/Dashboard_ShortStay_Admissions_Specialitywise';
import MajorProcedures from './majorprocedures/Dashboard_MajorProcedure_Specialitywise';
import MinorProcedures from './minorprocedures/Dashboard_MinorProcedure_Specialitywise';

import CombinedProcedures from './majorprocedures/Dashboard_CombinedProcedure_Specialitywise';

import Revenue from './revenue/Dashboard_Revenue_Specialitywise';
import ALOS from './bedoccupancy/Dashboard_ALOSBedSpecialityOccupancyL1';
import SpecialityBeds from './bedoccupancy/Dashboard_Speciality_Loc_BedsL1';
import SpecialityAllStatswithDiff from './speciality/SpecialityAllStatswithDiff';
import SpecialityDiagnosis from './speciality/Dashboard_SpecialityDiagnosis';



const SpecialityDashboard = () => (
  <div >
   <Box 
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      py: 3
    }}
  >
     <Container>
      <Grid  
        container  
        spacing={2}
      >
          <Grid
          item
          lg={6}
          sm={12}
          xl={60}
          xs={2}
        >
            <OPD />
          </Grid>

       <Grid
          item
          lg={6}
          sm={12}
          xl={60}
          xs={2}
        >
            <BedOccupancy />
          </Grid>
          <Grid
            item
            lg={6}
          sm={12}
          xl={60}
          xs={2}
          >
             <IPDAdmissions />
          </Grid>
          <Grid
            item
            lg={6}
          sm={12}
          xl={60}
          xs={2}
          >
             <ShortAdmissions />
          </Grid>
          <Grid
            item
            lg={6}
          sm={12}
          xl={60}
          xs={2}
          >
             <MajorProcedures />
          </Grid>
          
          <Grid
            item
            lg={6}
          sm={12}
          xl={60}
          xs={2}
          >
             <MinorProcedures />
          </Grid>

          <Grid
            item
            lg={6}
          sm={12}
          xl={60}
          xs={2}
          >
             <CombinedProcedures />
          </Grid>

          

          <Grid
            item
            lg={6}
          sm={12}
          xl={60}
          xs={2}
          >
             <Revenue />
        </Grid> 

        <Grid
            item
            lg={6}
          sm={12}
          xl={60}
          xs={2}
          >
             <ALOS />
        </Grid> 

        <Grid
            item
            lg={6}
          sm={12}
          xl={60}
          xs={2}
          >
             <SpecialityBeds />
        </Grid> 

        <Grid
            item
            lg={6}
          sm={12}
          xl={60}
          xs={2}
          >
             <SpecialityAllStatswithDiff />
        </Grid> 


        <Grid
            item
            lg={6}
          sm={12}
          xl={60}
          xs={2}
          >
             <SpecialityDiagnosis />
        </Grid> 
        
        
        

        </Grid> 
      </Container>
    </Box>
  </div>
);

export default SpecialityDashboard;






