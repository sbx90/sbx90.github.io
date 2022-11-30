export enum SECTION_ID {
  ABOUT_SECTION = "about-us",
  OUR_SERVICES_SECTION = "our-services",
  CLIENTS_SECTION = "clients",
  CONTACT_US_SECTION = "contact-us",
}

export const main = [
  {
    title: "About us",
    href: `#${SECTION_ID.ABOUT_SECTION}`,
  },
  {
    title: "Our services",
    href: `#${SECTION_ID.OUR_SERVICES_SECTION}`,
  },
  {
    title: "Clients",
    href: `#${SECTION_ID.CLIENTS_SECTION}`,
  },
  {
    title: "Contact us",
    href: `#${SECTION_ID.CONTACT_US_SECTION}`,
  },
];

// Add Tag to any navigiation item
export const ItemsTag: {
  title: string;
  badge?: string;
  colorScheme?: string;
}[] = [
  {
    title: "More Demo",
    badge: "Soon",
    colorScheme: "green",
  },
  {
    title: "Account Forms",
    badge: "Modal",
    colorScheme: "pink",
  },
  // {
  //   title: "Account Overview",
  //   badge: "Hot",
  //   colorScheme: "pink",
  // },
];
