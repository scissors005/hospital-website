import styles from './styles';

const AboutUs = () => {
  const classes = styles();
  return (
    <div style={classes.aboutUs}>
      <div style={classes.aboutUsText}>WELCOME TO MEDICAL</div>
      <div style={classes.aboutUsText}>A Great Place to Recieve Care.</div>
      <div style={classes.aboutUsText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim
        et.
      </div>
    </div>
  );
};

export default AboutUs;
