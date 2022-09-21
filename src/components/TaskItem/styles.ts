import styled from "styled-components/native";
import Checkbox from "expo-checkbox";

interface TaskDescriptionProps {
    done: boolean;
}

export const TaskWrapper = styled.View`
    width: 100%;
    height: 64px;
    border-radius: 8px;

    
    background-color: ${({ theme }) => theme.colors.gray_500};
    border: 1px solid ${({ theme }) => theme.colors.gray_400};
    padding: 12px;

    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const TaskCheck = styled(Checkbox).attrs(({ theme }) => ({
    color: theme.colors.purple,
}))`
    width: 18px;
    height: 18px;
    border-radius: 9px;
    justify-content: center;
    align-items: center;
`;

export const TaskDescription = styled.Text<TaskDescriptionProps>`
    color: ${({ theme, done }) => done ? theme.colors.gray_300 : theme.colors.gray_100};
    font-family: ${({ theme }) => theme.fonts_family.regular};
    font-size: ${({ theme }) => theme.fonts_size.md};
    text-decoration: ${({ done }) => done ? 'line-through' : ''};
    text-decoration-color: ${({ theme }) => theme.colors.gray_300};
`;

export const TaskExcludeButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
`;