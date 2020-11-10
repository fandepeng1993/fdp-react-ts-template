import React, {Fragment} from 'react'
import {Layout} from 'antd'
import {withRouter, Route, Switch} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'

const {Content} = Layout;
const Main: any = (props: any) => {
    const {routes} = props || [];
    const {t} = useTranslation();
    const userInfo = useSelector((state: any) => state.userInfo);
    const dispatch = useDispatch();
    console.log(dispatch,userInfo);
    return (
        <Fragment>
            <Layout>
                <div>LayoutPage</div>
                <Content>
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
        </Fragment>
    )
}

export default withRouter(Main)
