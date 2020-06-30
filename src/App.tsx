import React from 'react';
import {
    IntlProvider,
    FormattedMessage,
} from 'react-intl';
import languages from "./lang";
import {ConfigProvider} from 'antd';
import './style/index.less';
import {Button} from 'antd';
import {Popconfirm} from 'antd';

type Lang = 'zh' | 'en';

function App() {
    const [lang, setLang] = React.useState<Lang>('zh');
    const [antdLocale, setAntdLocale] = React.useState(languages[`ant_${lang}`]);
    const [locale, setLocale] = React.useState(languages[lang]);
    const changeLanguage = () => {
        setLang('en')
    };
    React.useEffect(() => {
        setAntdLocale(languages[`ant_${lang}`]);
        setLocale(languages[lang]);
    }, [lang]);

    return (
        <IntlProvider key="intl" locale={lang} messages={locale}>
            <ConfigProvider locale={antdLocale}>
                <div className="App">
                    <p>this is a template</p>
                    <Button type="primary" onClick={changeLanguage}>hello</Button>
                    <Popconfirm title="Question?">
                        <a href="#">Click to confirm</a>
                    </Popconfirm>
                    <span>
                       <FormattedMessage id="hello"/>
                   </span>
                </div>
            </ConfigProvider>
        </IntlProvider>

    );
}

export default App;
