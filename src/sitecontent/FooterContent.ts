// Define types for footer content
type FooterLine = {
  text: string;
  icon?: string;
};

type FooterLink = {
  label: string;
  href: string;
  icon: string;
  target?: string;
  rel?: string;
};

// Office details is the far left column of the footer
export const officeDetails: FooterLine[] = [
  { text: 'UK Head Office', icon: 'pi pi-map-marker' },
  { text: '5a St James Street' },
  { text: 'Dover' },
  { text: 'CT16 1QD' },
  { text: 'United Kingdom' },
];

// Company details and contact links are to the right of the office details
export const companyDetails: FooterLine[] = [
  { text: 'Linces Softco Limited', icon: 'pi pi-pen-to-square' },
  { text: 'VAT: GB 452 856 667', icon: 'pi pi-receipt' },
];

// Contact links are included with company details in the same block but are rendered as links instead of plain text
export const contactLinks: FooterLink[] = [
  {
    label: 'ITDepartment@linces-softco.com',
    href: 'mailto:ITDepartment@linces-softco.com',
    icon: 'pi pi-at',
  },
  {
    label: '+44 (0)2081 766 213',
    href: 'tel:+442081766213',
    icon: 'pi pi-phone',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/linces-softco-limited/',
    icon: 'pi pi-linkedin',
    target: '_blank',
    rel: 'noreferrer',
  },
];

// Copyright is in the middle column of the footer, below the main logo, each command represents a new line
export const copyright: string[] = [
  '© Linces Softco Limited',
  'Part of TGT Customs Limited. All rights reserved.',
];

// Credits are in the far right column of the footer, to the right of the company details and contact links, commas work the same in here as well
// These are done as a 2D array to create groups to seperate the two text blocks
export const credits: string[][] = [
  [
    'Asset Credits: Hasan As ari, Mohamad Faqih Nurzaman, Giuseppe Ramos, Eureka Design,',
    'Fatmawati Achmad Zaenuri, Titima Ongkantong, Yuliya Krautsevich and Langgeng Widodo.',
  ],
  ['All assets used are sourced from www.vecteezy.com', 'and are used under the free license.'],
];

