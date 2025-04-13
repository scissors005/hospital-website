import styles from './styles';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Services from './Services';
import TopBar from './TopBar';
import Doctors from './Doctors';
import ContactUs from './ContactUs';

const Home = () => {
  const classes = styles();

  return (
    <div style={classes.main}>
      <TopBar />
      <Navbar />
      <AboutUs />
      <Services />
      <Doctors />
      <ContactUs />
    </div>
  );
};

export default Home;
