import styles from "./index.module.less";
import {Avatar, Divider, Icon, Dropdown, Menu} from "antd";
import LangOpt from "@/components/Lang";
import React from "react";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router";
import {getToken, removeToken} from "@/utils/cookie";
import {useSelector} from "react-redux";

const HeaderOption = () => {
    const {t} = useTranslation();
    const history = useHistory();
    const locationUrl = history.location.pathname;
    // const lng = useSelector((state: any) => state.language);
    const isLogin = getToken();
    const userInfo = useSelector((state: any) => state.userInfo || {});

    const goToLoginPage = () => {
        history.push('/login');
    };
    const goToMainPage = () => {
        history.push('/main');
    };
    const optionMenu = ({key}: any) => {
        switch (key) {
            case 'logout':
                removeToken();
                history.replace('/');
                break;
            default:
                break;
        }
    };
    const menu = (
        <Menu onClick={optionMenu}>
            <Menu.Item key={'logout'}>
                <span><Icon type="login" style={{marginRight: 10}}/>{
                    t('header.logout')
                }</span>
            </Menu.Item>
        </Menu>
    );
    return <>
        <div className={styles.option}>
            {
                locationUrl ==='/' && <><div className={styles.login} onClick={() => {
                    goToMainPage()
                }}>
                    {
                        t('header.manager')
                    }
                </div><Divider type="vertical"/></>
            }

            <LangOpt/>
            <Divider type="vertical"/>
            {
                !isLogin ? <div className={styles.login}>
                        <div onClick={goToLoginPage}><Icon type="login" style={{marginRight: 10}}/>
                            {
                                t('header.login')
                            }</div>
                    </div> :
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <div className={styles.login}>
                            <Avatar style={{
                                color: '#f56a00',
                                backgroundColor: '#fde3cf',
                                marginRight: '8px'
                            }}> {userInfo.name?userInfo.name.substr(0, 1).toLocaleUpperCase():''}</Avatar>
                            <span>{userInfo.name}</span>
                        </div>
                    </Dropdown>


            }
        </div>
    </>
}
export default HeaderOption;