import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';

const Layout = styled.View`
flex: 1;
`;

const DefaultText = styled.Text`
font-size: ${({ theme }) => theme.typography.size.m2}px;
color: ${({ theme }) => theme.colors.primary.blue};
`;

const Login = observer(() => {
    return (
        <Layout>
            <DefaultText>로그인 페이지</DefaultText>
        </Layout>
    );
});

export default Login;