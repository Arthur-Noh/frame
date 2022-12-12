import React from 'react';
import { SafeAreaView } from 'react-native';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';

const Layout = styled.View`
flex: 1;
`;

const TextView = styled.Text`
font-size: ${({ theme }) => theme.typography.size.m1}px;
color: ${({ theme }) => theme.colors.primary.blue};
`;

interface IAppScreen {
    userToken: string;
};

const AppScreen: React.FC<IAppScreen> = observer((props) => {
    return (
        <SafeAreaView style={{ flex : 1 }}>
            <Layout>
                <TextView>
                    안녕하세요?
                </TextView>
            </Layout>
        </SafeAreaView>
    );
});

export default AppScreen;