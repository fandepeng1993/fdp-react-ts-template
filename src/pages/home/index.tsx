import React from 'react'
import {connect} from 'react-redux'
import {useTranslation, Trans} from "react-i18next";
import styles from './index.module.less';
import PKG from '../../../package.json';
import HeaderOption from "@/layout/header";

const Home = (props: any) => {
    const {t} = useTranslation();
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
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        state: state,
    }
};

export default connect(mapStateToProps)(Home)
