'use client';
import styles from './styles';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import maleDoctor from './assets/maleDoctor.png';
import femaleDoctor from './assets/femaleDoctor.png';
import theme from './constants/colors';
import { useState } from 'react';
import ProfileModal from './ProfileModal';

const Doctors = () => {
  const classes = styles();
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const handleModal1Open = () => {
    setModal1Open(!modal1Open);
  };
  

  const handleModal2Open = () => {
    setModal2Open(!modal2Open);
  };

  const renderDoctor1Card = () => {
    return (
      <Card sx={{ width: 345, margin: 10 }}>
        <CardMedia
          sx={{ height: 400 }}
          image={maleDoctor.src}
          title="green iguana"
        />
        <CardContent style={{ backgroundColor: theme.tertiaryColor }}>
          <div style={classes.doctorName}>Dr. Rajeev Goyal</div>
          <div style={classes.doctorType}>PAEDIATRICIAN</div>
        </CardContent>
        <CardActions
          style={{
            backgroundColor: theme.primaryColor,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            size="small"
            style={classes.viewProfileButton}
            onClick={handleModal1Open}
          >
            VIEW PROFILE
          </Button>
        </CardActions>
      </Card>
    );
  };

  const renderDoctor2Card = () => {
    return (
      <Card sx={{ width: 345, margin: 10 }}>
        <CardMedia
          sx={{ height: 400 }}
          image={femaleDoctor.src}
          title="green iguana"
        />
        <CardContent style={{ backgroundColor: theme.tertiaryColor }}>
          <div style={classes.doctorName}>Dr. Sonal Goyal</div>
          <div style={classes.doctorType}>GYANECOLOGIST</div>
        </CardContent>
        <CardActions
          style={{
            backgroundColor: theme.primaryColor,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            size="small"
            style={classes.viewProfileButton}
            onClick={handleModal2Open}
          >
            VIEW PROFILE
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <div id="doctors">
      <div style={classes.aboutUsHeading}>TRUSTED CARE</div>
      <div style={classes.servicesSubHeading}>Our Doctors</div>
      <div style={classes.doctorsContainer}>
        {renderDoctor1Card()}
        {renderDoctor2Card()}
      </div>
      <ProfileModal open={modal1Open} handleClose={handleModal1Open} />
      <ProfileModal open={modal2Open} handleClose={handleModal2Open} />
    </div>
  );
};

export default Doctors;
