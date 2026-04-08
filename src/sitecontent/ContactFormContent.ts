// Type for contact detail cards used in the contact form
// title is the heading displayed on the card
// icon references a primeicons class
// lines holds one or more lines of card text
// href/target/rel are optional link attributes for clickable cards
type ContactDetailCard = {
  title: string;
  icon: string;
  lines: string[];
  href?: string;
  target?: string;
  rel?: string;
};

// Main heading shown at the top of the contact form
export const contactFormTitle = 'Contact Form';

// Router state used to open the contact form when navigating from link
export const openContactFormState = { openForm: true } as const;

// Heading shown above the contact detail cards
export const contactAltWaysTitle = 'Other Ways to Contact Us';

// Address card shown on the left side of the contact details section
export const addressCard: ContactDetailCard = {
  title: 'Address',
  icon: 'pi pi-map-marker',
  lines: ['5a St James Street', 'Dover', 'CT16 1QD', 'United Kingdom'],
};

// Email and phone cards shown in the right-hand stack
export const sideContactCards: ContactDetailCard[] = [
  {
    title: 'Email Address',
    icon: 'pi pi-at',
    lines: ['ITDepartment@linces-softco.com'],
    href: 'mailto:ITDepartment@linces-softco.com',
  },
  {
    title: 'Phone',
    icon: 'pi pi-phone',
    lines: ['+44 (0)2081 766 213'],
    href: 'tel:+442081766213',
  },
];

// LinkedIn card shown below the address/email/phone card grid
export const linkedinCard: ContactDetailCard = {
  title: 'Find us on LinkedIn',
  icon: 'pi pi-linkedin',
  lines: ['https://www.linkedin.com/company/linces-softco-limited/'],
  href: 'https://www.linkedin.com/company/linces-softco-limited/',
  target: '_blank',
  rel: 'noreferrer',
};
