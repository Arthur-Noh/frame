import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateFormStackDef, CreateFormStackParamList } from '../screenRoute/appDef/createForm/routeDef';

const Stack = createNativeStackNavigator<CreateFormStackParamList>();

const CreateFormStack = () => {
    return (
        <Stack.Navigator initialRouteName='CreateForm1'>
            { Object.entries({ ...CreateFormStackDef }).map(([ name, { initialParams, component }]) => (
                <Stack.Screen
                    key={name}
                    options={{
                        headerTitleAlign: 'center',
                        contentStyle: { alignItems: 'center' },
                    }}
                    // @ts-ignore
                    name={name}
                    component={component}
                    initialParams={initialParams}
                />
            ))}
        </Stack.Navigator>
    );
};

export default CreateFormStack;