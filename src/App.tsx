import React from 'react';
import {useTranslation} from 'react-i18next';
import './style/index.less';
import {ConfigProvider} from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import en_GB from 'antd/es/locale/en_GB';
import {setLang, getLang, Lang} from '@/utils/lang'
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'
import routes, {RouteWithSubRoutes} from '@/router';

const antLangEnum = {
    zh: zh_CN,
    en: en_GB,
};

function App() {
    const [lng, setLng] = React.useState<Lang>(getLang());
    const [locale, SetLocale] = React.useState();
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng: Lang) => {
        setLng(lng)
    };
    React.useEffect(() => {
        // 设置antd 中英文
        SetLocale(antLangEnum[lng]);
        // 设置react-i18next 中英文
        i18n.changeLanguage(lng);
        // 语言存储到本地
        setLang(lng);
    }, [lng]);

    return (
        <ConfigProvider locale={locale}>
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                    </Switch>
                </BrowserRouter>
            </div>
        </ConfigProvider>
    );
}

export default App;
