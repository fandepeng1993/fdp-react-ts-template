/// <reference types="react-scripts" />
declare module 'react-router-config';
declare module 'nprogress';
// declare module "*.module.less"
declare module "*.module.less" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.less"
