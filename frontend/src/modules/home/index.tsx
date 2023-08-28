import React, {useEffect, useState} from 'react';
import {Box, Container, Text} from "@chakra-ui/react";

export const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    return (
        <Container>
            <Text >
                Welcome to the Home Page
            </Text>
            <Box>
                {isLoading ? (
                    <Box data-testid="loading-indicator">Loading...</Box>
                ) : (
                    // Conteúdo da página após o carregamento
                    <Box data-testid={"content-after-loading"}>Content loaded!</Box>
                )}
            </Box>
        </Container>
    )
}
