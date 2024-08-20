
import { Box } from '@mui/material';

import Grid from '@mui/material/Grid';

export const BasicGrid = () => (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div>xs=8</div>
        </Grid>
        <Grid item xs={4}>
          <div>xs=4</div>
        </Grid>
        <Grid item xs={4}>
          <div>xs=4</div>
        </Grid>
        <Grid item xs={8}>
          <div>xs=8</div>
        </Grid>
      </Grid>
    </Box>
);