export type Lang = 'zh' | 'en';
// export enum Lang {
//     zh,
//     en
// }

export const getLang: () => Lang = () => {
    const language: string | null = localStorage.getItem('language');
    let lang = 'zh';
    if (language) {
        try {
            lang = JSON.parse(language).language;
        } catch (e) {
        }
    }
    return lang as Lang;
};