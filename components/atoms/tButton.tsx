import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components/native';
import { ComponentSize } from '../../helper/componentHelper';

const ButtonLayout = styled.TouchableOpacity<{ size?: ComponentSize }>`
flex-direction: row;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.colors.primary.blue};
padding: ${({ size }) => size === 'large' ? 20 : 10 }px;
border-radius: 8px;
`;

const ButtonText = styled.Text<{ size?: ComponentSize }>`
font-size: ${({ theme, size }) => size === 'large' ?
    theme.typography.size.m3 :
    theme.typography.size.m1
}px;
color: ${({ theme }) => theme.colors.white.base};
`;

interface ITButton {
    title: string;
    onPress: () => void;
    size?: ComponentSize;
    disabled?: boolean;
}

const TButton: React.FC<ITButton> =  observer((props) => {
    return (
        <ButtonLayout
            size={props.size}
            onPress={props.onPress}
            disabled={props.disabled}
        >
            <ButtonText size={props.size}>
                {props.title}
            </ButtonText>
        </ButtonLayout>
    );
});

export default TButton;