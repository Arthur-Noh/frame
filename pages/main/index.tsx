import React from 'react';
import styled from 'styled-components/native';
import { observer } from 'mobx-react';

const Layout = styled.View`
flex: 1;
`;

const DefaultText = styled.Text`
font-size: ${({ theme }) => theme.typography.size.m2}px;
color: ${({ theme }) => theme.colors.primary.blue};
`;

const Main = observer(() => {
    return (
        <Layout>
            <DefaultText>
                메인 페이지
            </DefaultText>
        </Layout>
    )
});

export default Main;