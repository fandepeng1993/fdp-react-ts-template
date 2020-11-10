import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {UPDATELANGUAGE} from '@/store/actions'
import {Lang} from '@/utils/lang'

const LangOpt = () => {
    const dispatch = useDispatch();
    const changeLanguage = (lng: Lang) => {
        dispatch({type: UPDATELANGUAGE, payload: lng})
    };
    return (
        <>
            <button onClick={() => {
                changeLanguage('zh')
            }}>中文
            </button>
            | <button onClick={() => {
            changeLanguage('en')
        }}>英文</button>
        </>
    )
};


export default LangOpt