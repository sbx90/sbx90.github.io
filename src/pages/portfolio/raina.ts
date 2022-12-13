import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import nextI18NextConfig from "../../next-i18next.config.js";

export { default } from "@pages/portfolio/raina";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["global", "raina"],
        nextI18NextConfig,
      )),
    },
  };
}
