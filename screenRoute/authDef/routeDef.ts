import Login from "../../pages/login";

// Auth Router
type defaultParam = {
    defaultValue?: string,
} | undefined;


// NOTE : 여러 페이지가 존재한다면, 스크린으로 관리해도 된다.
const LoginScreens = {
    Login: {
        initialParams: {},
        component: Login,
    }
}

export type AuthStackParamList = {
    Login: defaultParam,
};

export const AuthStackDef = {
    ...LoginScreens,
};