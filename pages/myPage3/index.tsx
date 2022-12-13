import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Layout = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const MyPage3 = observer(() => {

    return (
        <Layout>
            <Text>myPage 3</Text>
        </Layout>
    );
});

export default MyPage3;