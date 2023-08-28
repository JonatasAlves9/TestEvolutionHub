import React, {useEffect, useState} from 'react';
import {Box, Container, Text, Image, SimpleGrid} from "@chakra-ui/react";

interface Character {
    id: string;
    name: string;
    image: string;
    species: string;
    gender: string
}

export const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [characters, setCharacters] = useState<Character[]>();

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
                setIsLoading(false);
            });
    }, []);
    console.log(characters)
    return (
        <Container>
            <Text>Welcome to the Home Page</Text>
            <Box>
                {isLoading ? (
                    <Box data-testid="loading-indicator">Loading...</Box>
                ) : (
                    <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={4}>
                        {(characters || []).map((character: Character) => (
                            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                                <Image src={character.image} alt={character.name}/>
                                <Text mt={2} fontWeight="semibold" fontSize="xl">
                                    {character.name}
                                </Text>
                                <Text>{character.species}</Text>
                                <Text>{character.gender}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                )}
            </Box>
        </Container>
    )
        ;
};