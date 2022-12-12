import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackDef, AuthStackParamList } from './routeDef';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            { Object.entries({ ...AuthStackDef }).map(([ name, { initialParams, component }]) => (
                <Stack.Screen
                    key={name}
                    // @ts-ignore
                    name={name}
                    component={component}
                    initialParams={initialParams}
                />
            ))}
        </Stack.Navigator>
    );
};

export default AuthStack;