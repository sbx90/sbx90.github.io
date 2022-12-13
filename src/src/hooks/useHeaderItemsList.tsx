import { useMemo } from "react";

import { useTranslation } from "next-i18next";

import { SECTION_ID } from "@definitions/navigation/main";

import { INavbar } from "@components/navbar/navbar";

import { useContactUsModal } from "@blocks/contact-us-modal";

const useHeaderItemsList = () => {
  const { onOpen } = useContactUsModal();
  const { t } = useTranslation("global");

  const items: INavbar.IItem[] = useMemo(
    () => [
      {
        id: SECTION_ID.ABOUT_SECTION,
        title: t("header.about", { defaultValue: "About us" }),
        href: `/about`,
      },
      {
        id: SECTION_ID.OUR_SERVICES_SECTION,
        title: t("header.services", { defaultValue: "Our services" }),
        href: `/#${SECTION_ID.OUR_SERVICES_SECTION}`,
      },
      {
        id: SECTION_ID.CLIENTS_SECTION,
        title: t("header.clients", { defaultValue: "Clients" }),
        href: `/#${SECTION_ID.CLIENTS_SECTION}`,
      },
      {
        id: SECTION_ID.CONTACT_US_SECTION,
        title: t("header.contact", { defaultValue: "Contact us" }),
        href: `/#${SECTION_ID.CONTACT_US_SECTION}`,
        onClick: () => onOpen(),
      },
    ],
    [],
  );

  return { items };
};

export default useHeaderItemsList;
