import Cookies from 'js-cookie';

const TokenKey = 'Authorization';

export function getToken() {
    return Cookies.get(TokenKey);
}

export function setToken(token: string, params: any) {
    return Cookies.set(TokenKey, token, {...params});
}

export function removeToken() {
    return Cookies.remove(TokenKey);
}
