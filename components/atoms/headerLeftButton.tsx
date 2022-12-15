import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import BackArrowImage from '../../asserts/common/backArrow.png';

const Button = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
padding: 5px 5px 0 5px;
`;

const BackArrow = styled.Image`
width: 20px;
height: 20px;
`;

const ButtonText = styled.Text`
font-size: ${({ theme }) => theme.typography.size.s2}px;
font-weight: ${({ theme }) => theme.typography.weight.medium};
color: ${({ theme }) => theme.colors.black.base};
`;

export interface IHeaderLeftButton {
    headerTitle: string;
    customGoBack?: () => void;
}

const HeaderLeftButton: React.FC<IHeaderLeftButton> = (props) => {
    const navigation = useNavigation();

    return (
        <Button onPress={ props.customGoBack ? props.customGoBack : navigation.goBack }>
            <BackArrow source={BackArrowImage} />
            <ButtonText>{props.headerTitle}</ButtonText>
        </Button>
    );
};

export default HeaderLeftButton;