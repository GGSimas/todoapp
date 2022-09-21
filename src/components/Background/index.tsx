import React from "react";
import { Container } from "./styles";

interface BackgroundProps {
    children: React.ReactNode;
}

export function Background({ children }: BackgroundProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}