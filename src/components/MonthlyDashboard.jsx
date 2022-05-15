import React from 'react';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
//import 'bootstrap/dist/css/bootstrap.min.css';
import OPD from './opd/Dashboard_OPD_Monthwise';
import AandEdatewise from './opd/Dashboard_AandE_Monthwise';
import BedOccupancydatewiseL1 from './bedoccupancy/Dashboard_BedOccupancy_Monthwise';
import IPDAdmissions from './admissions/Dashboard_IPDAdmissions_Monthwise';
import ShortAdmissions from './admissions/Dashboard_ShortStay_Admissions_Monthwise';
import MajorProcedures from './majorprocedures/Dashboard_MajorProcedure_Monthwise';
import MinorProcedures from './minorprocedures/Dashboard_MinorProcedure_Monthwise';
import Revenue from './revenue/Dashboard_Revenue_Monthwise';


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
        spacing={5}
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

        </Grid> 
      </Container>
    </Box>
  </div>
);

export default Dashboard;






