import React, { useState } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';
import TButton from '../../components/atoms/tButton';
import TTextInput from '../../components/atoms/tTextInput';

const Layout = styled.View`
flex: 1;
padding: 0 16px;
`;

const DefaultText = styled.Text`
font-size: ${({ theme }) => theme.typography.size.m2}px;
color: ${({ theme }) => theme.colors.primary.blue};
`;

const Login = observer(() => {
    const [ userId, setUserId ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    return (
        <Layout>
            <TTextInput
                placeholder='값을 입력하세요'
                size='large'
            />
            <TButton
                title='버튼'
                onPress={() => console.log('버튼 눌림')}
            />
        </Layout>
    );
});

export default Login;