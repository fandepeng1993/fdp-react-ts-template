import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {getLang} from "@/utils/lang";
import zh from "@/lang/local/zh_CN";
import en from "@/lang/local/en_GB";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    zh: {
        translation: zh

    },
    en: {
        translation: en

    }
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: getLang(),
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;