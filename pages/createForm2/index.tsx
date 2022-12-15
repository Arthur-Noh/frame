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

const CreateForm2 = observer(() => {
    const navigation = useNavigation<NativeStackNavigationProp<CreateFormStackParamList, 'CreateForm2'>>();

    useCustomHeader({
        title: '폼 생성 2',
        headerRightButtons: [
            {
                type: 'text',
                text: '버튼4',
                onPress: () => console.log('버튼4 눌림'),
            },
            {
                type: 'text',
                text: '버튼5',
                onPress: () => console.log('버튼5 눌림'),
            },
        ],
        useCustomLeftHeader: true,
        // headerLeftButton: {
        //     headerTitle: '11',
        //     customGoBack: () => console.log('왼쪽 눌림')
        // }
    });

    return (
        <Layout>
            <Text>createForm 2</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CreateForm3')}>
                <Text>다음으로 이동</Text>
            </TouchableOpacity>
        </Layout>
    );
});

export default CreateForm2;