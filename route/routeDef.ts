import Login from "../pages/login";
import Main from "../pages/main";

// NOTE : 여러 페이지가 존재한다면
// 스크린으로 관리해도 된다.
const MainScreens = {
    Main: {
        initialParams: {},
        component: Main,
    }
};

type defaultParam = {
    defaultValue?: string,
} | undefined;

export type AppStackParamList = {
    Main: defaultParam;
}

export const AppStackDef = {
    Main: {
        initialParams: {},
        component: Main,
    },
};

export type AuthStackParamList = {
    Login: defaultParam;
}

export const AuthStackDef = {
    Login: {
        initialParams: {},
        component: Login,
    },
};