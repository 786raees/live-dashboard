import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import PlaceIcon from '@mui/icons-material/Place';
import StairsIcon from '@mui/icons-material/Stairs';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScienceIcon from '@mui/icons-material/Science';
import RadioIcon from '@mui/icons-material/Radio';

export const SidebarData = [
    {
      title: '30 Days',
      path: '/Home',
      icon: HomeIcon,
      cName: 'nav-text'
    },
    {
      title: 'Monthly',
      path: '/Monthly',
      icon: CalendarMonthIcon,
      cName: 'nav-text'
    },
    {
        title: 'Speciality',
        path: '/Speciality',
        icon: AdminPanelSettingsIcon,
      cName: 'nav-text'
    },
    {
        title: 'OPD',
        path: '/OPD',
      icon: BedroomParentIcon,
      cName: 'nav-text'
    },
    {
        title: 'Occupancy',
        path: '/Occupancy',
      icon: PlaceIcon,
      cName: 'nav-text'
    },
    {
        title: 'IPD',
        path: '/IPD',
        icon: BedroomParentIcon,
        cName: 'nav-text'
    },
    {
        title: 'Procedures',
        path: '/CPTS',
        icon: StairsIcon,
        cName: 'nav-text'
    },
    {
        title: 'A&E',
        path: '/AE',
        icon: HomeIcon,
        cName: 'nav-text'
    },
    {
        title: 'Major Proc',
        path: '/MajorProc',
        icon: StairsIcon,
        cName: 'nav-text'
    },
    {
        title: 'Minor Proc',
        path: '/MinorProc',
        icon: StairsIcon,
        cName: 'nav-text'
    },
    {
        title: 'Revenue',
        path: '/Revenue',
        icon: AttachMoneyIcon,
        cName: 'nav-text'
    },
    {
        title: 'LAB',
        path: '/LAB',
        icon: ScienceIcon,
        cName: 'nav-text'
    },
    {
        title: 'Radiology',
        path: '/Radiology',
        icon: RadioIcon,
        cName: 'nav-text'
    }
];
