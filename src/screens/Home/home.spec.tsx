import {Home} from '.';
import { Alert } from 'react-native';
import { render, fireEvent, RenderResult } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../styles/theme';

type makeSutReturn = {
    sut: RenderResult;
}

type ProviderParams = {
    children: React.ReactNode;
}

const Provider = ({children}: ProviderParams) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

const makeSut = (): makeSutReturn => {
    const sut = render(<Home />, {
        wrapper: Provider,
    });

    return {
        sut,
    }
}

jest.spyOn(Alert, 'alert');

const handleNewtaskAddMokc = jest.fn();

describe("HomeScreen", () => {
    it('should not be able to add a empty task description', () => {
        const { sut } = makeSut();

        const button = sut.queryByTestId('task-add-button');

        fireEvent.press(button);

        expect(Alert.alert).toHaveBeenCalledWith('Informe a descrição da tarefa!');
    })
})