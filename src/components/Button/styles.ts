import styled from "styled-components/native";

export const ButtonWrapper = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.blue_dark};
    width: 54px;
    height: 54px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
`;

export const ButtonText = styled.Text`
    font-weight: bold;
`;