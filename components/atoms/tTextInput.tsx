import { observer } from 'mobx-react';
import React from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components/native';
import { ComponentSize } from '../../helper/componentHelper';

const TextInputCSS = styled.TextInput<{ size?: ComponentSize }>`
font-size: ${({ theme }) => theme.typography.size.m1}px;
padding: ${({ size }) => size === 'large' ? 16 : 8 }px 18px;
border: solid 1px ${({ theme }) => theme.colors.gray[300]};
border-radius: 8px;
`;

interface ITTextInput {
    value?: string;
    onChangeText?: (text: string) => void;
    onSubmitEditing?: () => void;
    onEndEditing?: () => void;
    placeholder?: string;
    size?: ComponentSize;
    secureTextEntry?: boolean;
    onlyNumber?: boolean;
    multiline?: boolean;
    autoFocus?: boolean;
    autoCorrect?: boolean;
    disabled?: boolean;
}

const TTextInput: React.FC<ITTextInput> = observer((props) => {
    const _keyboardType = props.onlyNumber ?
        Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'number-pad' 
        : undefined;

    const _onChangeText = (text: string) => {
        if (!props.onChangeText) {
            return ;
        }
        
        const _text = text.replace(/[^0-9]/g, '');
        props.onChangeText(_text);
    }

    return (
        <View pointerEvents={props.disabled ? 'none' : 'auto'}>
            <TextInputCSS
                value={props.value}
                onChangeText={props.onlyNumber ? _onChangeText : props.onChangeText}
                onSubmitEditing={props.onSubmitEditing}
                onEndEditing={props.onEndEditing}
                placeholder={props.placeholder}
                size={props.size}
                secureTextEntry={props.secureTextEntry}
                multiline={props.multiline}
                autoFocus={props.autoFocus}
                autoCorrect={props.autoCorrect}
                autoCapitalize='none'
                keyboardType={_keyboardType}
            />
        </View>
    );
});

export default TTextInput;