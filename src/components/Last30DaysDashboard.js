import React from 'react';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
//import 'bootstrap/dist/css/bootstrap.min.css';
import OPD from './opd/Dashboard_OPD_Datewise';
import AandEdatewise from './opd/Dashboard_AandE_datewise';
import BedOccupancydatewiseL1 from './bedoccupancy/Dashboard_BedOccupancy_datewise';
import IPDAdmissions from './admissions/Dashboard_IPDAdmissions_datewise';
import ShortAdmissions from './admissions/Dashboard_ShortStay_Admissions_datewise';
import MajorProcedures from './majorprocedures/Dashboard_MajorProcedure_datewise';
import MinorProcedures from './minorprocedures/Dashboard_MinorProcedure_datewise';
import Revenue from './revenue/Dashboard_Revenue_datewise';
import LabTests from './pathology/Dashboard_Lab_Datewise';
import RadiologyTests from './radiology/Dashboard_Radiology_Datewise';

const Dashboard = () => (
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
        spacing={3}
      >
          <Grid
          item
          lg={6}
          sm={12}
          xl={6}
          xs={2}
        >
            <OPD />
          </Grid>

       <Grid
          item
          lg={6}
          sm={12}
          xl={6}
          xs={2}
        >
            <BedOccupancydatewiseL1 />
          </Grid>
          <Grid
            item
            lg={6}
          sm={12}
          xl={6}
          xs={2}
          >
             <IPDAdmissions />
          </Grid>
          <Grid
            item
            lg={6}
          sm={12}
          xl={6}
          xs={2}
          >
             <ShortAdmissions />
          </Grid>
          <Grid
            item
            lg={6}
          sm={12}
          xl={6}
          xs={2}
          >
             <MajorProcedures />
          </Grid>
          <Grid
            item
            lg={6}
          sm={12}
          xl={6}
          xs={2}
          >
             <MinorProcedures />
          </Grid>
          <Grid
            item
            lg={6}
          sm={12}
          xl={6}
          xs={2}
          >
             <Revenue />
        </Grid> 

        <Grid
            item
            lg={6}
          sm={12}
          xl={6}
          xs={2}
          >
             <AandEdatewise />
          </Grid>

          <Grid
            item
            lg={6}
          sm={12}
          xl={6}
          xs={2}
          >
             <LabTests/>
          </Grid>

          <Grid
            item
            lg={6}
          sm={12}
          xl={6}
          xs={2}
          >
             <RadiologyTests/>
          </Grid>

        </Grid> 
      </Container>
    </Box>
  </div>
);

export default Dashboard;






