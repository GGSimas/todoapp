import { TextInputProps } from "react-native";
import { Container, TextInput } from "./styles";

interface InputProps extends TextInputProps {}
export function Input({...rest}: InputProps) {
    return (
        <Container>
            <TextInput {...rest} />
        </Container>
    )
}