import React, {Fragment} from "react";
import {Layout, Menu, Icon} from "antd";
import {withRouter, Route, Switch} from "react-router-dom";
import {RouteWithSubRoutes} from '@/router/index';

const {Header, Content, Footer, Sider} = Layout;
const isLogin = true;
const Main: any = (props: any) => {
    const {routes} = props || [];

    let routess = [...routes].splice(0,1);
    if(props.location.pathname === '/other'){
        props.history.replace('/404');
    }
    if (!isLogin) {
        props.history.replace('/login');
    }
    const goPage = () => {
        // onClik那里虽然看不到传值,但是默认会传过来四个参数,详见官网
        //  props.history.push(key); //编程式导航
    };
    return (
        <Fragment>
            <Layout>
                <Sider
                    style={{
                        overflow: "auto",
                        height: "100vh",
                        position: "fixed",
                        left: 0,
                    }}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={["/app/admin"]}>
                        <Menu.Item key="/app/admin" onClick={goPage}>
                            我到页面
                        </Menu.Item>
                        <Menu.Item key="/app/list" onClick={goPage}>
                            其他页面
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{marginLeft: 200}}>
                    <Header style={{background: "#fff", padding: 0}}/>
                    <Content style={{margin: "24px 16px 0", overflow: "initial"}}>
                        <Switch>
                            {routess.map((route: any, i: number) => <RouteWithSubRoutes key={i} {...route} />)}
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: "center"}}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </Fragment>
    );
};

export default withRouter(Main);

