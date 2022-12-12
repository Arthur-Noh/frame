import React from 'react';
import { SafeAreaView } from 'react-native';
import { observer } from 'mobx-react';
import AuthStack from './authStack';
import AppStack from './appStack';

interface IAppScreen {
    userToken: string;
};

const AppScreen: React.FC<IAppScreen> = observer((props) => {
    return (
        <SafeAreaView style={{ flex : 1 }}>
            { (props.userToken === '' || !props.userToken) ?
                <AuthStack /> :
                <AppStack />
            }
        </SafeAreaView>
    );
});

export default AppScreen;