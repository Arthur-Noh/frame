import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CreateFormStack from './createFormStack';
import HomeStack from './homeStack';
import MyPageStack from './myPage';

type defaultParam = {
    defaultValue?: string,
} | undefined;

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                key='CreateFormStack'
                name='CreateForm'
                component={CreateFormStack}
            />
            <Tab.Screen
                key='HomeStack'
                name='Home'
                component={HomeStack}
            />
            <Tab.Screen
                key='MyPageStack'
                name='MyPage'
                component={MyPageStack}
            />
        </Tab.Navigator>
    );
};

export default AppBottomTab;