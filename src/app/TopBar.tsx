import { AccessTime, LocalPhone, LocationOn } from "@mui/icons-material";
import styles from "./styles";

const TopBar = () => {
    const classes = styles();
    return (
        <div style={classes.topBar}>
        <div style={classes.topBarTitle}>Mahila Clinic Maternity Home</div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={classes.topBarContainer}>
            <LocalPhone />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={classes.topBarContainerTitle}>EMERGENCY</div>
              <div style={classes.topBarContainerTitle}>1234567890</div>
            </div>
          </div>
          <div style={classes.topBarContainer}>
            <AccessTime />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={classes.topBarContainerTitle}>WORK HOURS</div>
              <div style={classes.topBarContainerTitle}>10:00 - 2:00</div>
            </div>
          </div>
          <div style={classes.topBarContainer}>
            <LocationOn />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={classes.topBarContainerTitle}>LOCATION</div>
              <div style={classes.topBarContainerTitle}>MOTI KATRA, AGRA</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TopBar;