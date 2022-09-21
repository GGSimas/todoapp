import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    height: 54px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.gray_500};
    padding: 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray_700}
`;

export const TextInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.colors.gray_300,
}))`
    width: 100%;
    height: 100%;
    ${({ theme}) => css`
        font-size: ${theme.fonts_size.xg};
        font-family: ${theme.fonts_family.regular};
        color: ${theme.colors.gray_100}
    `}
`;