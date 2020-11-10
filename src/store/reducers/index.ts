import {combineReducers} from 'redux';
import language from "@/store/reducers/language";
import userInfo from "@/store/reducers/user-info";
const Reducer = combineReducers({
    language,
    userInfo
});

export default Reducer;