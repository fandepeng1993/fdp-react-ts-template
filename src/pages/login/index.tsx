import React from "react";
import {Form, Icon, Input, Button, Alert, message} from 'antd';
import {FormComponentProps} from 'antd/es/form';
import styles from './index.module.less'
import {useTranslation} from "react-i18next";
import {getLogin} from "@/services";
import {setToken} from '@/utils/cookie';
import {useDispatch} from 'react-redux';
import {CURRENTER} from '@/store/actions'

interface LoginFormProps extends FormComponentProps {
    username: string;
    password: string;
}


const LoginForm = (props: any) => {
    const {getFieldDecorator} = props.form;
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        props.form.validateFields(async (err: Error, values: LoginFormProps) => {
            if (!err) {
                const {data, err: error} = await getLogin(values);

                if (error) {
                    message.error('账号密码错误');
                    return
                }
                const {token, ...reset} = data;
                setToken(token, {expires: 7});
                dispatch({type: CURRENTER.UPDATECURRENTER, payload: reset});
                props.history.replace('/')
            }
        });

    };
    return (
        <div className={styles.login}>
            <Alert
                message="账号和密码"
                description="账号admin，密码admin123"
                type="info"
            />
            <Form onSubmit={handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: t('loginForm.username')}],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            autoComplete="off"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: t('loginForm.password')}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            autoComplete="off"
                        />,
                    )}
                </Form.Item>
                <Form.Item style={{textAlign: 'center'}}>
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )
}

const Login = Form.create<LoginFormProps>({name: 'login'})(LoginForm);
export default Login;