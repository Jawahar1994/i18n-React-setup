import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import { initReactI18next } from 'react-i18next';
import HttpBackend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";

i18next
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    react: {
      useSuspense: true,
    },
    supported: ["en", "fr"],
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    whitelist: ["en", "fr"],
    interpolation: {
      escapeValue: false,
    },
    nsSeperator: false,
    keySeperator: false,
    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend((lng, ns) => import(`./assets/locales/${lng}/${ns}.json`))
      ],
      backendOptions: [
        {
          loadPath: "https://912b-103-25-205-2.in.ngrok.io/locales/{{lng}}/{{ns}}.json"
        }
      ]
    }
  });