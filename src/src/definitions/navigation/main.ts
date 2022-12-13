export enum SECTION_ID {
  ABOUT_SECTION = "about-us",
  OUR_SERVICES_SECTION = "our-services",
  CLIENTS_SECTION = "clients",
  CONTACT_US_SECTION = "contact-us",
}

export const main = [
  {
    id: SECTION_ID.ABOUT_SECTION,
    title: "About us",
    i18nKey: "header.about",
    href: `/about`,
  },
  {
    id: SECTION_ID.OUR_SERVICES_SECTION,
    title: "Our services",
    i18nKey: "header.services",
    href: `/#${SECTION_ID.OUR_SERVICES_SECTION}`,
  },
  {
    id: SECTION_ID.CLIENTS_SECTION,
    title: "Clients",
    i18nKey: "header.cliebts",
    href: `/#${SECTION_ID.CLIENTS_SECTION}`,
  },
  {
    id: SECTION_ID.CONTACT_US_SECTION,
    title: "Contact us",
    i18nKey: "header.contact",
    href: `/#${SECTION_ID.CONTACT_US_SECTION}`,
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
