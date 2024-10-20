import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from '../images/constant';

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    padding={2} 
    sx={{ position: 'sticky', background: 'black', top: '0', justifyContent: 'space-between' }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
  </Stack>
);

export default Navbar;
