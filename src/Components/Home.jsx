import { Box } from '@mui/material';
import './styles.css';
import React from 'react';
import Header from './Header';
import View from './View';
import Workspace from './Workspace'
export default function Home() {
  return (
    <Box component="div"
    sx={{
      display:"flex",
      flexDirection:"column",
    }}
    >
    <Header />
    <Workspace/>
    </Box>
  )
}
