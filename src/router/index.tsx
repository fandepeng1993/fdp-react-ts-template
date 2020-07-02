import React from "react";
import {Route, RouteProps, Redirect} from 'react-router-dom';
import Login from "@/pages/login";
import Layout from "@/layout/mian";
import MyPage from "@/pages/mypage";
import OtherPage from "@/pages/otherPage";

const router: RouteProps[] = [
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
        path: "/",
        component: Layout,
        children: [
            {
                path: "/my",
                // exact: true,
                component: MyPage
            },
            {
                path: "/other",
                // exact: true,
                component: OtherPage
            },
           /* {
                path: "*",
                // exact:true,
                component: () => (<Redirect to="404"/>)
            }, */
        ],
    },

];

export const RouteWithSubRoutes = (route: any) => (
    <Route
        path={route.path}
        render={props => (<route.component {...props} routes={route.children}/>)}
    />
);
export default router;