// Type for main menu items,
// key is the identifier, 
// label is text shown
// icon references a primereact icon
// path is the url path to navigate to when clicked,
// sections is an optional array that holds submenu sections, if not included then there is no dropdown
export type menuItem = {
  key: string;
  label: string;
  icon: string;
  path: string;
  state?: unknown;
  subSection?: subMenuSection[];
};

// This type holds a submenu option.
// uses the same logic as main menu items
// but in order to create working submenus, hashes are used inbetween the main path and the submenu path
// for example: /about-us#missionphilosophy
// you then create a div container that holds that sub-section with the id of 'missionphilosophy'
type subMenuItem = {
  label: string;
  icon?: string;
  path: string;
};

// This type allows for submenu options to be grouped together
// the title added is there for an optional one-liner
type subMenuSection = {
  title: string;
  items: subMenuItem[];
};

// This array holds the content for the header menu.
export const menuItems: menuItem[] = [

  //Home section
  {
    key: 'home',
    label: 'Home',
    icon: 'pi pi-home',
    path: '/',
    subSection: [
      {
        title: 'Welcome to Linces Softco',
        items: [
          { label: 'Overview', icon: 'pi pi-info-circle', path: '/#home-overview' },
          { label: 'Velocity Enterprise', icon: 'pi pi-bolt', path: '/#home-velocity' },
          { label: 'Services', icon: 'pi pi-cog', path: '/#home-services' }
        ]
      }
    ]
  },

  //About us section
  {
    key: 'aboutus',
    label: 'About Us',
    icon: 'pi pi-users',
    path: '/about-us',
    subSection: [
      {
        title: 'Who we are',
        items: [
          { label: 'Company Overview', icon: 'pi pi-building', path: '/about-us#companyoverview' },
          { label: 'Mission and Philosophy', icon: 'pi pi-flag', path: '/about-us#missionphilosophy' },
          { label: 'What we Offer', icon: 'pi pi-briefcase', path: '/about-us#whatweoffer' },
          { label: 'Vision and Direction', icon: 'pi pi-eye', path: '/about-us#visiondirection' }
        ]
      }
    ]
  },

  //Velocity Enterprise section
  {
    key: 'velocity',
    label: 'Velocity Enterprise',
    icon: 'pi pi-bolt',
    path: '/velocity-enterprise',
    subSection: [
      {
        title: 'Velocity CTDMS',
        items: [
          { label: 'What is Velocity CTDMS?', icon: 'pi pi-question-circle', path: '/velocity-enterprise#velocityctdms' },
          { label: 'Features', icon: 'pi pi-list', path: '/velocity-enterprise#velocityfeatures' },
          { label: 'Benefits', icon: 'pi pi-chart-line', path: '/velocity-enterprise#velocityfuture' }
        ]
      },
      {
        title: 'Velocity HR',
        items: [
          { label: 'What is Velocity HR?', icon: 'pi pi-question-circle', path: '/velocity-enterprise' },
          { label: 'Features', icon: 'pi pi-list', path: '/velocity-enterprise' },
          { label: 'Benefits', icon: 'pi pi-chart-line', path: '/velocity-enterprise' }
        ]
      },
      {
        title: 'Login',
        items: [
          { label: 'Login', icon: 'pi pi-question-circle', path: '/velocity-enterprise' },
        ]
      }
    ]
  },

  //Services section
  {
    key: 'services',
    label: 'Services',
    icon: 'pi pi-cog',
    path: '/services',
    subSection: [
      {
        title: 'What can we do for you?',
        items: [
          { label: 'Bespoke Software Development', icon: 'pi pi-code', path: '/services#bespokesoftware' },
          { label: 'SaaS Platform Development', icon: 'pi pi-cloud', path: '/services#saasplatform' },
          { label: 'Web Application Development', icon: 'pi pi-globe', path: '/services#webapplication' },
          { label: 'Hosting and Infrastructure', icon: 'pi pi-server', path: '/services#hostinginfrastructure' },
          { label: 'IT Support', icon: 'pi pi-wrench', path: '/services#itsupport' }
        ]
      }
    ]
  },

  //Contact section
  {
    key: 'contact',
    label: 'Contact',
    icon: 'pi pi-envelope',
    path: '/contact',
    state: { openForm: false }
  },
];