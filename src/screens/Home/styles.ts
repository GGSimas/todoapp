import { FlatList, FlatListProps } from "react-native";
import styled, { css } from "styled-components/native";
import ClipboardSvg from '../../assets/Clipboard.svg';
import { TaskDTO } from "../../dtos/task";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray_700};
`;

export const Header = styled.View`
    width: 100%;
    height: 173px;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 110px;
    height: 32px;
`;

export const Form = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 0 24px;
    top: -30px;
    margin-bottom: 30px;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray_600};
`;

export const Heading = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:0 30px;
`
export const TaskIndicator = styled.View`
    flex-direction: row;
    width: 100px;
    margin-bottom: 21px;
`

export const TaskCreated = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.blue};
        font-family: ${theme.fonts_family.bold};
        font-size: ${theme.fonts_size.md};
    `}
`;

export const TaskFinished = styled.Text`
${({ theme }) => css`
        color: ${theme.colors.purple};
        font-family: ${theme.fonts_family.bold};
        font-size: ${theme.fonts_size.md};
    `}
`;

export const Badge = styled.View`
    background-color: ${({ theme }) => theme.colors.gray_400};
    height: 19px;
    border-radius: 19px;
    padding: 2px 8px;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
`;

export const BadgeText = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.gray_100};
        font-family: ${theme.fonts_family.bold};
        font-size: ${theme.fonts_size.md};
    `}
`;

export const TaskList = styled(FlatList as new (props: FlatListProps<TaskDTO>) => FlatList<TaskDTO>).attrs(({ theme }) => ({
    contentContainerStyle: {
        borderTopWidth: 1,
        borderTopColor: theme.colors.gray_400,
    }
}))`
    flex: 1;
    padding: 24px;
`;

export const EmptyListWrapper = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Clipboard = styled(ClipboardSvg)`
    margin-top: 48px;
    margin-bottom: 12px;
`

export const EmptyListTitle = styled.Text`
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: ${({ theme }) => theme.fonts_size.md};
    font-family: ${({ theme }) => theme.fonts_family.bold};
    line-height: 19px;
`;

export const EmptyListSubtitle = styled.Text`
color: ${({ theme }) => theme.colors.gray_300};
    font-size: ${({ theme }) => theme.fonts_size.md};
    font-family: ${({ theme }) => theme.fonts_family.regular};
`;
