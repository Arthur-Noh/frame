import MyPage1 from "../../../pages/myPage1";
import MyPage2 from "../../../pages/myPage2";
import MyPage3 from "../../../pages/myPage3";

// App Router
type defaultParam = {
    defaultValue?: string,
} | undefined;

const MyPageScreens = {
    MyPage1: {
        initialParams: {},
        component: MyPage1,
    },
    MyPage2: {
        initialParams: {},
        component: MyPage2,
    },
    MyPage3: {
        initialParams: {},
        component: MyPage3,
    }
};

export type MyPageStackParamList = {
    MyPage1: defaultParam,
    MyPage2: defaultParam,
    MyPage3: defaultParam,
};

export const MyPageStackDef = {
    ...MyPageScreens,
};