import React from 'react';
import {useTranslation,Trans} from 'react-i18next';
import './style/index.less';
import {ConfigProvider} from 'antd';
import {Switch, HashRouter} from 'react-router-dom';
import routes, {RouteWithSubRoutes} from '@/router';
import zh_CN from 'antd/es/locale/zh_CN';
import en_GB from 'antd/es/locale/en_GB';
import {Lang} from '@/utils/lang';
import LangOpt from '@/components/Lang';
import {useDispatch, useSelector} from "react-redux";
import {UPDATELANGUAGE} from "@/store/actions";



const antLangEnum = {
    zh: zh_CN,
    en: en_GB,
};

function App() {
    const lng: Lang = useSelector((state: any) => state.language);
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    React.useEffect(() => {
        console.log(lng,'asdasdasdasdasdasdasd--------')
        // 设置antd 中英文
        // 设置react-i18next 中英文
        i18n.changeLanguage(lng);
        dispatch({type: UPDATELANGUAGE, payload: lng});
    }, [i18n, lng]);

    return (
        <ConfigProvider locale={antLangEnum[lng]}>
            <div className="App">
                <LangOpt/>
                <p>{t('hello',{name:'fandepeng'})}</p>
                <Trans><h1>Welcome to React</h1></Trans>
                <p>{t('translation:key')}</p>
                <p>{t('translation:namespace1.key')}</p>
                <p>{t('test:language')}</p>
            </div>
            <HashRouter>
                <Switch>
                    {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))}
                </Switch>
            </HashRouter>
        </ConfigProvider>
    );
}

export default App;
