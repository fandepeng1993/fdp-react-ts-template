import React from 'react';

class ErrorBoundary extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error:Error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return {hasError: true};
    }

    componentDidCatch(error:Error, errorInfo:any) {
        // 你同样可以将错误日志上报给服务器
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>网站有异常报错。</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;