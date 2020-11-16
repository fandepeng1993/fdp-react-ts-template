import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {getLang} from "@/utils/lang";
import zh from "@/lang/local/zh_CN";
import en from "@/lang/local/en_GB";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    zh: {
        translation: zh,
        title: {
            'title1': '1. 快速创建兼容IE9的React,typescript,redux-saga,react-router,react-i18next多语言切换的SPA的web项目',
            'title2': '2. 简介',
            content: {
                '<0>content1</0>': '<0>1.繁琐于重复构建项目模版修改，于是开发了{{tool}}手脚架和模版项目，用于快速构建新的项目，少量去修改项目配置。</0>',
                '<0>content2</0>': '<0>2.由于{{Intl}}对IE8-11 部分功能已经放弃兼容，故而使用了{{i18next}}做国际化。</0>',
                '<0>content3</0>': '<0>3.项目已经搭建好了{{saga}}，可以放心使用。</0>',
                '<0>content4</0>': '<0>4.项目封装好了路由守卫和鉴权，可以按照自己的需求进行调整。</0>',
                '<0>content5</0>': '<0>5.项目采用的是typerscript语言进行编写,ts文件和tsx文件。</0>',
                '<0>content6</0>': '<0>6.项目采用了css模块化开发样式。</0>',
                '<0>content7</0>': '<0>7.项目采用{{axios}}进行数据与服务器端传递。</0>',
                '<0>content8</0>': '<0>8.内置mock数据功能，供开发者快速完成页面逻辑开发。</0>',
                '<0>content9</0>': '<0>9.项目采用了antd 3.X版本的UI库，兼容到IE9。</0>',
            }

        }
    },
    en: {
        translation: en,
        title: {
            'title1': '1. Quickly create WEB projects for IE9 compatible React, Typescript, ReDUx-Saga, React - Router, React - I18Next Multi-language switching SPA',
            'title2': '2. Introduction',
            content: {
                '<0>content1</0>': '<0>1.Cumbersome repetitive construction project template modification, so developed {{tool}} frame and template project, for the rapid construction of new projects, to modify the project configuration.</0>',
                '<0>content2</0>': '<0>2.Since {{Intl}} has given up its compatibility with part of IE8-11, so {{i18next}} is used for internationalization.</0>',
                '<0>content3</0>': '<0>3.{{saga}}a has been set up for the project, so you can use it safely.</0>',
                '<0>content4</0>': '<0>4.The project encapsulates the routing guard and authentication, which can be adjusted according to your own needs.</0>',
                '<0>content5</0>': '<0>5.The project USES Typerscript language to write, TS files and TSX files.</0>',
                '<0>content6</0>': '<0>6.The project adopted a CSS modular development style.</0>',
                '<0>content7</0>': '<0>7.The project USES {{axios}} for data and server side transfer.</0>',
                '<0>content8</0>': '<0>8.Built-in Mock data feature for developers to quickly complete page logic development.</0>',
                '<0>content9</0>': '<0>9.The project USES ANTD 3.x version of the UI library, compatible with IE9.。</0>',
            }
        }
    }
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: getLang(),
        // keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;