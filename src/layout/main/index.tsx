import React, {Fragment} from 'react'
import {Layout, Menu, Icon, BackTop} from 'antd'
import {withRouter, Route, Switch} from 'react-router-dom'
import styles from './index.module.less'
import HeaderOption from "@/layout/header";

const {Header, Sider, Content} = Layout;
const {SubMenu} = Menu;

const Main: any = (props: any) => {
    const {routes} = props || [];
    const [collapsed, setCollapsed] = React.useState(false);
    const [openKeys, setOpenKeys] = React.useState<string[]>([]);
    const toggle = () => {
        setCollapsed(!collapsed)
    };
    const openChange = (openKeys: string[]) => {
        if (openKeys.length) {
            let last: number = openKeys.length - 1;
            setOpenKeys([openKeys[last]])
        } else {
            setOpenKeys([])
        }
        console.log(openKeys);
    };
    const goPage = (item: any) => {
        const {history} = props;
        history.push(item.key);
    };
    return (
        <Fragment>
            <Layout style={{minHeight: '100%'}}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className={styles.logo} onClick={()=>{goPage({key:'/'})}}>home</div>
                    <Menu theme="dark" mode="inline" onOpenChange={openChange} openKeys={openKeys}
                          defaultSelectedKeys={['1']} onClick={goPage}>
                        <SubMenu
                            key="/main/option1"
                            title={<span><Icon type="user"/><span>subnav 1</span></span>}
                        >
                            <Menu.Item key="1">option1</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="laptop"/><span>subnav 2</span></span>}
                        >
                            <Menu.Item key="/main/option5">option5</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span> <Icon type="notification"/> <span>subnav 3</span> </span>}>
                            <Menu.Item key="/main/option9">option9</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <div className={styles.header}>
                            <Icon
                                className={styles.trigger}
                                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={toggle}
                            />
                            <HeaderOption/>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            {routes.map((route: any, i: number) => (
                                <Route
                                    key={i}
                                    path={route.path}
                                    render={(props) => (
                                        <route.component {...props} routes={route.children}/>
                                    )}
                                />
                            ))}
                        </Switch>
                    </Content>
                </Layout>
                <BackTop/>
            </Layout>
        </Fragment>
    )
}

export default withRouter(Main)
