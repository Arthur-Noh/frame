import Home1 from "../../../pages/home1";
import Home2 from "../../../pages/home2";
import Home3 from "../../../pages/home3";

// App Router
type defaultParam = {
    defaultValue?: string,
} | undefined;

const HomeScreens = {
    Home1: {
        initialParams: {},
        component: Home1,
    },
    Home2: {
        initialParams: {},
        component: Home2,
    },
    Home3: {
        initialParams: {},
        component: Home3,
    }
};

export type HomeStackParamList = {
    Home1: defaultParam,
    Home2: defaultParam,
    Home3: defaultParam,
};

export const HomeStackDef = {
    ...HomeScreens,
};