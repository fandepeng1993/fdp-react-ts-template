import React from "react";
import styles from './index.module.less';
import {Button} from "antd";

const isLogin = true;
const Login = () => {
    /*if(isLogin){
        window.location.href='/my'
    }*/
    return (
        <div className={styles.color}>
            Login
            <Button type="default">123213123</Button>
        </div>
    )

};
export default Login