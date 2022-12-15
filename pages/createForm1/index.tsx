import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateFormStackParamList } from '../../screenRoute/appDef/createForm/routeDef';
import useCustomHeader from '../../hooks/useCustomHeader';

const Layout = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const CreateForm1 = observer(() => {
    const navigation = useNavigation<NativeStackNavigationProp<CreateFormStackParamList>>();

    useCustomHeader({
        title: '폼 생성 1',
        headerRightButtons: [
            {
                type: 'text',
                text: '버튼1',
                onPress: () => console.log('버튼1 눌림'),
            },
            {
                type: 'text',
                text: '버튼2',
                onPress: () => console.log('버튼2 눌림'),
            },
            {
                type: 'text',
                text: '버튼3',
                onPress: () => console.log('버튼3 눌림'),
            },
        ],
        useCustomLeftHeader: true,
        headerLeftButton: {
            headerTitle: '안녕하세요',
            customGoBack: () => console.log('왼쪽 눌림')
        }
    });

    return (
        <Layout>
            <Text>createForm 1</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CreateForm2')}>
                <Text>다음으로 이동</Text>
            </TouchableOpacity>
        </Layout>
    );
});

export default CreateForm1;