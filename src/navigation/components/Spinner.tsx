import { Box, Card, CircularProgress } from '@mui/material';
import React from 'react';

export const Spinner: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
      <CircularProgress size='lg' />
    </Box>
  );
};
