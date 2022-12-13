import React from 'react';
import { SafeAreaView } from 'react-native';
import { observer } from 'mobx-react';
import AuthStack from './authStack';
import AppBottomTab from './appBottomTab';

interface IAppScreen {
    userToken: string;
};

const AppScreen: React.FC<IAppScreen> = observer((props) => {
    return (
        <>
        { (props.userToken === '' || !props.userToken) ? 
            <SafeAreaView style={{ flex : 1 }}>
                <AuthStack />
            </SafeAreaView> :
            <AppBottomTab />
        }
        </>
    );
});

export default AppScreen;