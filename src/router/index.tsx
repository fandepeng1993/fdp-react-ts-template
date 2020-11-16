import React from "react";
import {Route, RouteProps, Redirect} from 'react-router-dom';
import RouterGuard from "@/layout/RouterGuard";
import Login from '@/pages/login';
import Home from '@/pages/home';
import Layout from '@/layout/main';

type RouterPropsCustom = RouteProps & { Auth?: Boolean, isToggleHeader?: Boolean,AuthStatus?:boolean }
const router: RouterPropsCustom[] = [
    {
        path: "/",
        exact: true,
        component: Home,
        isToggleHeader:true
    },
    {
        path: '/main',
        component: Layout,
        // exact: true,
        AuthStatus: true,
        Auth: true,
        children: [
            {
                path: "/main/option1",
                // exact: true,
                component: ()=><div>main - option1</div>
            },
            {
                path: "/main/option5",
                // exact: true,
                component: ()=><div>main - option5</div>
            },
            {
                path: "/main/option9",
                // exact: true,
                component: ()=><div>main - option9</div>
            },
            {
                path: "*",
                component: () => (<Redirect to="/main/option1"/>)
            },
        ],
    },
    {
        path: "/login",
        exact: true,
        component: Login
    },
    {
        path: "/404",
        // exact: true,
        component: () => (<div>404页面</div>)
    },
    {
        path: "*",
        component: () => (<Redirect to="/"/>)
    }
];
export const RouteWithSubRoutes: any = (route: any) => (
    <Route path={route.path} render={props => (<RouterGuard {...props} route={route}/>)}
    />);
export default router;