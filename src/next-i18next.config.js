module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  serializeConfig: false,
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  ns: ["common", "global"],
};
