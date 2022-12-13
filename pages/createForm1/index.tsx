import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateFormStackParamList } from '../../screenRoute/appDef/createForm/routeDef';

const Layout = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const CreateForm1 = observer(() => {
    const navigation = useNavigation<NativeStackNavigationProp<CreateFormStackParamList>>();

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