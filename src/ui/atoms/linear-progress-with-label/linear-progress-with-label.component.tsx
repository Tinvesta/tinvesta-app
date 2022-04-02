import { Box, LinearProgress, Typography } from '@mui/material';

import { ILinearProgressWithLabelProps } from './linear-progress-with-label.types';

export const LinearProgressWithLabel = ({
  value = 0,
  ...restProp
}: ILinearProgressWithLabelProps): JSX.Element => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ width: '100%', mr: 1 }}>
      <LinearProgress value={value} variant="determinate" {...restProp} />
    </Box>
    <Box sx={{ minWidth: 35 }}>
      <Typography color="text.secondary" variant="body2">{`${Math.round(value)}%`}</Typography>
    </Box>
  </Box>
);
