import { TouchableOpacityProps } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

import { ButtonText, ButtonWrapper } from "./styles";
import theme from '../../styles/theme';
interface ButtonProps  extends TouchableOpacityProps {}

export function Button({...rest}: ButtonProps) {


    return (
        <ButtonWrapper {...rest}>
            <ButtonText>
                <EvilIcons name="plus" color={theme.colors.gray_100} size={24} />
            </ButtonText>
        </ButtonWrapper>
    )
}