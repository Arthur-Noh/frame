import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackDef, HomeStackParamList } from '../screenRoute/appDef/home/routeDef';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home1'>
            { Object.entries({ ...HomeStackDef }).map(([ name, { initialParams, component }]) => (
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

export default HomeStack;