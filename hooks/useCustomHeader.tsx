import { useNavigation } from '@react-navigation/native';
import { IHeaderButton } from '../helper/headerHelper';
import React, { useLayoutEffect } from 'react';
import HeaderRightButton from '../components/atoms/headerRightButton';
import HeaderLeftButton, { IHeaderLeftButton } from '../components/atoms/headerLeftButton';

interface ICustomerHeaderOption {
    title?: string;
    hide?: boolean;
    useCustomLeftHeader?: boolean;
    headerLeftButton?: IHeaderLeftButton;
    headerRightButtons?: Array<IHeaderButton>;
}

const useCustomHeader = (customHeaderOption: ICustomerHeaderOption) => {
    const {
        title = '',
        hide = false,
        useCustomLeftHeader = false,
        headerLeftButton = { headerTitle: '', customGoBack: () => {} },
        headerRightButtons = [],
    } = customHeaderOption;
    
    const navigation = useNavigation();

    useLayoutEffect(() => {
        let options: Partial<{}> = {
            headerTitle: title,
            headerShown: !hide,
            // NOTE : default disappear back button title
            headerBackTitle: '',
            headerRight: () => (
                <HeaderRightButton buttons={headerRightButtons} />
            ),
        };

        if (useCustomLeftHeader) {
            options = {
                ...options,
                headerLeft: () => (
                    <HeaderLeftButton
                        headerTitle={headerLeftButton.headerTitle}
                        customGoBack={headerLeftButton.customGoBack}
                    />
                ),
            };
        }

        navigation.setOptions(options);

        return () => {
            navigation.setOptions({
                HeaderRightButton: () => (
                    <HeaderRightButton buttons={[]} />
                ),
            });
        };
    }, [ navigation, title, hide, useCustomLeftHeader, headerLeftButton, headerRightButtons ]);
};

export default useCustomHeader;