import CreateForm1 from "../../../pages/createForm1";
import CreateForm2 from "../../../pages/createForm2";
import CreateForm3 from "../../../pages/createForm3";

// App Router
type defaultParam = {
    defaultValue?: string,
} | undefined;

const CreateFormScreens = {
    CreateForm1: {
        initialParams: {},
        component: CreateForm1,
    },
    CreateForm2: {
        initialParams: {},
        component: CreateForm2,
    },
    CreateForm3: {
        initialParams: {},
        component: CreateForm3,
    }
};

export type CreateFormStackParamList = {
    CreateForm1: defaultParam,
    CreateForm2: defaultParam,
    CreateForm3: defaultParam,
};

export const CreateFormStackDef = {
    ...CreateFormScreens,
};