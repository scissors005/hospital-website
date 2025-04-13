import {
  LocalHospitalTwoTone,
  BloodtypeTwoTone,
  BedroomChildTwoTone,
  HealingTwoTone,
  MasksTwoTone,
  ChildCareTwoTone,
} from '@mui/icons-material';
import operationImg from '../app/assets/operation.png';

const getTabInfo = (index: number) => {
  switch (index) {
    case 0:
      return {
        id: 'vertical-tab-0',
        'aria-controls': 'vertical-tabpanel-0',
        label: 'OPD Consultation',
        icon: <LocalHospitalTwoTone />,
        content:
          'Daily consultation for children and women by experienced paediatrician and gynaecologist.',
      };
    case 1:
      return {
        id: 'vertical-tab-1',
        'aria-controls': 'vertical-tabpanel-1',
        label: 'Blood Group Testing',
        icon: <BloodtypeTwoTone />,
        content:
          'Quick and accurate blood group testing available on-site for all patients.',
      };
    case 2:
      return {
        id: 'vertical-tab-2',
        'aria-controls': 'vertical-tabpanel-2',
        label: 'In-Patient Facilities',
        icon: <BedroomChildTwoTone />,
        content:
          'Private rooms with attached washrooms and affordable general rooms with shared facilities.',
      };
    case 3:
      return {
        id: 'vertical-tab-3',
        'aria-controls': 'vertical-tabpanel-3',
        label: 'Operation Theatre',
        icon: (
          <img
            src={operationImg.src}
            alt="Operation Icon"
            style={{ width: 24, height: 24 }}
          />
        ),
        content:
          'Equipped for safe deliveries, C-sections, and abortion procedures with sterile environment.',
      };
    case 4:
      return {
        id: 'vertical-tab-4',
        'aria-controls': 'vertical-tabpanel-4',
        label: 'General Healthcare Services',
        icon: <HealingTwoTone />,
        content:
          'We provide wound dressing, injury stitching, and emergency first-aid services.',
      };
    case 5:
      return {
        id: 'vertical-tab-5',
        'aria-controls': 'vertical-tabpanel-5',
        label: 'Nebulization Therapy',
        icon: <MasksTwoTone />,
        content:
          'On-demand nebulization treatment for patients with asthma or respiratory distress.',
      };
    case 6:
      return {
        id: 'vertical-tab-6',
        'aria-controls': 'vertical-tabpanel-6',
        label: 'Infant and Postnatal Care',
        icon: <ChildCareTwoTone />,
        content:
          'Post-delivery child care and guidance for newborn health and early development.',
      };
    default:
      return {
        id: 'vertical-tab-6',
        'aria-controls': 'vertical-tabpanel-7',
        label: 'Infant and Postnatal Care',
        icon: <ChildCareTwoTone />,
        content:
          'Post-delivery child care and guidance for newborn health and early development.',
      };
  }
};

export default getTabInfo;