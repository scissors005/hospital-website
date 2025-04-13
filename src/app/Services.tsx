'use client';

import { Box, Tab, Tabs } from '@mui/material';
import styles from './styles';
import { useState } from 'react';
import TabPanel from './TabPanel';
import getTabsInfo from './getTabsInfo';

const Services = () => {
  const classes = styles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => ({
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  });

  return (
    <div style={classes.services} id="services">
      <div style={classes.aboutUsHeading}>CARE YOU CAN BELIEVE IN</div>
      <div style={classes.servicesSubHeading}>Our Services</div>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: 400,
          width: '700px',
          alignSelf: 'center',
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {Array.from({ length: 7 }).map((_, index) => {
            const tab = getTabsInfo(index);
            return (
              <Tab
                key={index}
                label={tab.label}
                icon={tab.icon}
                iconPosition="start"
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>

        {Array.from({ length: 7 }).map((_, index) => {
          const tab = getTabsInfo(index);
          return (
            <TabPanel key={index} value={value} index={index}>
              <h3>{tab.label}</h3>
              <p>{tab.content}</p>
            </TabPanel>
          );
        })}
      </Box>
    </div>
  );
};

export default Services;
