'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import bannerImage from '../app/assets/banner.jpg';
import styles from './styles';

const Navbar = () => {
  const classes = styles();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Doctors</Button>
            <Button color="inherit">Contact Us</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        component="img"
        src={bannerImage.src}
        alt="Clinic Banner"
        sx={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    </>
  );
};

export default Navbar;
