import React from 'react'
import {connect, useSelector} from 'react-redux'
import {getToken} from '@/utils/cookie'
import {useTranslation} from "react-i18next";

const Home = (props: any) => {
    const {state} = props;
    const {t} = useTranslation();
    const lng = useSelector((state: any) => state.language);
    const isLogin = getToken();
    const userInfo = useSelector((state: any) => state.userInfo || {});
    console.log(state, 'sssssss');
    return (
        <div>
            Home
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        state: state,
    }
};

export default connect(mapStateToProps)(Home)
