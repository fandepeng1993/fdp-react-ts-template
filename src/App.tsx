import React from 'react';
import {useTranslation} from 'react-i18next';
import './style/index.less';
import {ConfigProvider} from 'antd';
import {Switch, HashRouter} from 'react-router-dom';
import routes, {RouteWithSubRoutes} from '@/router';
import zh_CN from 'antd/es/locale/zh_CN';
import en_GB from 'antd/es/locale/en_GB';
import {Lang} from '@/utils/lang';
import {getToken} from '@/utils/cookie'
import {useDispatch, useSelector} from "react-redux";
import {CURRENTER, UPDATELANGUAGE} from "@/store/actions";


const antLangEnum = {
    zh: zh_CN,
    en: en_GB,
};

function App() {
    const lng: Lang = useSelector((state: any) => state.language);

    const {i18n} = useTranslation();
    const dispatch = useDispatch();
    React.useEffect(() => {
        // 项目初始化操作
        const token = getToken();
        // 刷新页面获取当前用户数据
        if (token) {
            dispatch({type: CURRENTER.GETCURRENTER});
        }
    }, [dispatch]);

    React.useEffect(() => {
        // 设置antd 中英文
        // 设置react-i18next 中英文
        i18n.changeLanguage(lng);
        dispatch({type: UPDATELANGUAGE, payload: lng});
    }, [i18n, lng, dispatch]);

    return (
        <ConfigProvider locale={antLangEnum[lng]}>
            <div className="App">
                {/*<LangOpt/>*/}
                {/*中英文调用方法*/}
                {/*<p>{t('hello',{name:'fandepeng'})}</p>*/}
                {/*<Trans><h1>Welcome to React</h1></Trans>*/}
                {/*<p>{t('translation:key')}</p>*/}
                {/*<p>{t('translation:namespace1.key')}</p>*/}
                {/*<p>{t('test:language')}</p>*/}
                <HashRouter>
                    <Switch>
                        {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))}
                    </Switch>
                </HashRouter>
            </div>
        </ConfigProvider>
    );
}

export default App;
