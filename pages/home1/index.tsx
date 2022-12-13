import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Layout = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const Home1 = observer(() => {

    return (
        <Layout>
            <Text>home 1</Text>
        </Layout>
    );
});

export default Home1;