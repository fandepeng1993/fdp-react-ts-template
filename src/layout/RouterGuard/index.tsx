import React from "react";
import {Redirect} from 'react-router-dom'
import {getToken} from '@/utils/cookie'
// import {useSelector} from "react-redux";

/*路由拦截器*/
//所有关于路由拦截的业务代码在这里操作

const RouterGuard = (props: any) => {
    const {route} = props;
    const isLogin = getToken();
    // const isLogin = false;
    if (route.Auth && !isLogin) {
        return <Redirect to={"/"}/>
    }
    return (<route.component {...props} routes={route.children}/>);
};
export default RouterGuard