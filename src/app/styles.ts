import { CSSProperties } from 'react';

const styles = (): { [key: string]: CSSProperties } => ({
  main: {
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#000000',
  },
  title: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center',
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    color: '#000000',
    justifyContent: 'space-between',
    padding: 10,
  },
  topBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    color: '#000000',
    alignItems: 'center',
  },
  topBarContainerTitle: {
    display: 'flex',
    flexDirection: 'column',
    color: '#000000',
    fontSize: 14,
  },
  topBarTitle: {
    fontSize: 16,
  },
  aboutUs: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#ffffff',
    color: '#000000',
    padding: 10,
  },
  aboutUsText: {
    display: 'flex',
    justifyContent: 'center',
    background: '#ffffff',
    color: '#000000',
    textAlign: 'center',
  },
  services: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  servicesHeader: {
    display: 'flex',
    justifyContent: 'center',
    background: '#ffffff',
    color: '#000000',
    textAlign: 'center',
  },
  doctorsContainer: {
    display: 'flex',
    justifyContent: 'center',
    background: '#ffffff',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    color: '#000000',
  },
  contactUs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#1f2b6c',
    color:'#ffffff',
    padding: 20,
    gap: 10,
  }
});

export default styles;
