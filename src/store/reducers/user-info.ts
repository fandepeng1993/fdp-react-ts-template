import {Action} from 'redux'
import {CURRENTER} from '@/store/actions'

const initState: any = {};
const userInfo = (state = initState, action: Action & {payload:any}) => {
    switch (action.type) {
        case CURRENTER.UPDATECURRENTER:
            return {...state,...action.payload};
        default:
            return state;
    }
};

export default userInfo