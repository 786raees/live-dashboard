import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Typography
} from '@material-ui/core';

const PageNotFound = () => (
  <>
    <Helmet>
      <title>Live Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography
          align="center"
          color="red"
          variant="h1"
        >
          License has been expired
        </Typography>
        <Typography
          align="center"
          color="blue"
          variant="h3"
        >
         Please contact to Application administrator or Helpline at ThinkSoft(R&D)
        </Typography>
        </Container>
    </Box>
  </>
);

export default PageNotFound;
