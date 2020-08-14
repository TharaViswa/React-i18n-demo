import './i18n'
import { useTranslation } from "react-i18next";

function translate(key) {
    const { t } = useTranslation();
    let result = t(key)
    return result;
};

export default translate;