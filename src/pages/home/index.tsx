import React from 'react'
import {connect} from 'react-redux'
import {useTranslation, Trans} from "react-i18next";
import styles from './index.module.less';
import PKG from '../../../package.json';
import HeaderOption from "@/layout/header";
import {testProxyMock, testMock} from '@/services'

const Home = (props: any) => {
    const {t} = useTranslation();
    const testMockData = async () => {
        /*测试 no mock 请求*/
        const res = await testProxyMock();
        const res2 = await testMock();
        console.log('proxy代理数据：==>', res);
        console.log('mockjs数据：==>', res2)
        /**/
    }
    return (
        <div className={styles.home}>
            <div className={styles.header}>
                <h2 style={{margin: 0}}>{t('hello', {name: PKG.name})}</h2>
                <HeaderOption/>
            </div>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <Trans><h1 className={styles.welcome}>Welcome to React</h1></Trans>
            </div>
            <h3>{t('title:title1')}</h3>
            <pre>
                <code>
                    {t('translation:namespace.code')}
                </code>
            </pre>
            <h3>{t('title:title2')}</h3>
            <pre>
                <Trans ns="title" i18nKey="content.<0>content1</0>" values={{tool: '@frid/fdp-cli'}}>
                    <p>content1</p>
                </Trans>
                <Trans ns="title" i18nKey="content.<0>content2</0>"
                       values={{Intl: 'react-intl', i18next: 'react-i18next'}}>
                    <p>content2</p>
                </Trans>
                <Trans ns="title" i18nKey="content.<0>content3</0>" values={{saga: 'react-saga'}}>
                    <p>content3</p>
                </Trans>
                <Trans ns="title" i18nKey="content.<0>content4</0>"
                       values={{Intl: 'react-intl', i18next: 'react-i18next'}}>
                    <p>content4</p>
                </Trans>
                <Trans ns="title" i18nKey="content.<0>content5</0>"
                       values={{Intl: 'react-intl', i18next: 'react-i18next'}}>
                    <p>content5</p>
                </Trans>
                <Trans ns="title" i18nKey="content.<0>content6</0>"
                       values={{Intl: 'react-intl', i18next: 'react-i18next'}}>
                    <p>content6</p>
                </Trans>
                <Trans ns="title" i18nKey="content.<0>content7</0>" values={{axios: 'axios'}}>
                    <p>content7</p>
                </Trans>
                <Trans ns="title" i18nKey="content.<0>content8</0>"
                       values={{Intl: 'react-intl', i18next: 'react-i18next'}}>
                    <p>content8</p>
                </Trans>
                <Trans ns="title" i18nKey="content.<0>content9</0>">
                    <p>content9</p>
                </Trans>

            </pre>

            <h3>{t('title:title3')}</h3>
            <pre>
                <Trans ns="title" i18nKey="content.<0>content10</0>">
                   <p>
                        1.在development环境下Proxy会生效，production环境会根据.env文件下的环境变量替换请求axios的BASEURL。
                    </p>
                </Trans>
                <Trans ns="title" i18nKey="content.<0>content11</0>">
                    <p>
                        2.mockJS 的开关在package.json的script命令中开启。"node run mock &&...",关闭mockjs只需要去掉mock即可（node run &&...）。因为在run.js中会匹配mock参数。
                    </p>
                </Trans>
                <Trans ns="title" i18nKey="content.<0>content12</0>">
                   <p>
                        3.proxy模式 和 MockJS模式 在development环境中优先进入mockJS中拦截匹配，匹配不到url会进入proxy中服务的代理，当然一旦在mockjs中匹配到url则不会进入proxy了。
                    </p>
                </Trans>
                <Trans ns="title" i18nKey="content.<0>content13</0>">
                    <p>
                        4.在MockJS中匹配不到当前请求的url地址则会进入proxy模式，代理的服务为当前.env文件中的script命令中REACT_APP_ENV参数的服务。
                    </p>
                </Trans>
                <Trans ns="title" i18nKey="content.<0>content14</0>">
                    <p>
                        5.局域网联调，需要后端服务器关闭防火墙，前端在.env文件中配置对应的PC的IP地址，同时在package.json中script加上start命令参数为REACT_APP_ENV=（.env配置的参数key的值【REACT_APP_WEBSITE_"[value]"】）的启动命令。
                    </p>
                </Trans>
            </pre>
            <pre>
                <p>测试MockJS（确保开启的是package.json文件中script下的命令行 "start" 或者 "start:mock_local"）进行proxy和mockjs请求对比，打开控制台可以查看代理和mock返回的数据xhr</p>
                <button onClick={testMockData}>测试按钮</button>
           </pre>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        state: state,
    }
};

export default connect(mapStateToProps)(Home)
