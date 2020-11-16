import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {UPDATELANGUAGE} from '@/store/actions'
import {Lang} from '@/utils/lang'
import { Dropdown, Icon, Menu} from "antd";
import {useTranslation} from "react-i18next";
import styles from './index.module.less'

const LangOpt = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const lng = useSelector((state: any) => state.language);
    const changeLanguage = (lng: Lang) => {
        dispatch({type: UPDATELANGUAGE, payload: lng})
    };
    const menu = (
        <Menu selectedKeys={[lng]} onClick={({key}) => {
            changeLanguage(key as Lang)
        }}>
            <Menu.Item key="zh">
                {t('translation:namespace.zh-CN')}
            </Menu.Item>
            <Menu.Item key="en">
                {t('translation:namespace.en-GB')}
            </Menu.Item>
        </Menu>
    );
    return (
        <div className={styles.wrap}>
            <Dropdown overlay={menu} placement="bottomCenter">
                <div className={styles.lang}><Icon type="global"
                                                   style={{marginRight: '10px'}}/>{t('translation:namespace.lang')}
                </div>
            </Dropdown>
        </div>
    )
};


export default LangOpt