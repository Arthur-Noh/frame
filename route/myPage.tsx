import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyPageStackDef, MyPageStackParamList } from '../screenRoute/appDef/myPage/routeDef';

const Stack = createNativeStackNavigator<MyPageStackParamList>();

const MyPageStack = () => {
    return (
        <Stack.Navigator initialRouteName='MyPage1'>
            { Object.entries({ ...MyPageStackDef }).map(([ name, { initialParams, component }]) => (
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

export default MyPageStack;