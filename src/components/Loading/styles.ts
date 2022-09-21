import styled from "styled-components/native";

export const Loader = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.colors.purple,
    size: 24,
}))`
    flex: 1;
    align-items: center;
`;