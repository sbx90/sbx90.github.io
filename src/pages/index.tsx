import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import nextI18NextConfig from "../next-i18next.config.js";

export { default } from "@pages/home";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["global", "home", "testimony", "team"],
        nextI18NextConfig,
      )),
    },
  };
}
