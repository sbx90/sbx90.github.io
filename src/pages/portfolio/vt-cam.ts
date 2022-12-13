import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import nextI18NextConfig from "../../next-i18next.config.js";

export { default } from "@pages/portfolio/vtcam";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["global", "vtcam"],
        nextI18NextConfig,
      )),
    },
  };
}
