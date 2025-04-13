'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import bannerImage from '../app/assets/banner.jpg';
import styles from './styles';
import theme from './constants/colors';

const Navbar = () => {
  const classes = styles();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div>
        <AppBar
          sx={{ backgroundColor: theme.primaryColor, position: 'sticky' }}
        >
          <Toolbar>
            <Button color="inherit" onClick={() => scrollToSection('home')}>
              Home
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('about-us')}>
              About Us
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('services')}>
              Services
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('doctors')}>
              Doctors
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('contact-us')}>
              Contact Us
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Box
        id="home"
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
