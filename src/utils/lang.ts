export type Lang = 'zh' | 'en';
const getLang: () => Lang = () => {
    return (localStorage.getItem('lang') || 'zh') as Lang;
};
const setLang = (lang: Lang) => {
    localStorage.setItem('lang', lang);
};
export {
    getLang,
    setLang,
};