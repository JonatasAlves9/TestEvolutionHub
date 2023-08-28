import React from 'react';
import {render, screen} from '@testing-library/react';
import {Home} from '../../../modules/home';
import {rest} from "msw";
import {setupServer} from "msw/node";


const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(ctx.json({results: [{id: 1, name: 'Rick'}]}));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('displays character names after loading', async () => {
    render(<Home/>);

    // Aguarde até que os dados sejam carregados e os personagens sejam exibidos
    await screen.findByText('Rick');

    const characterName = screen.getByText('Rick');
    expect(characterName).toBeInTheDocument();
});
test('displays loading indicator on page load', () => {
    render(<Home/>);

    const loadingIndicator = screen.getByTestId('loading-indicator');
    expect(loadingIndicator).toBeInTheDocument();
});

test('displays loading indicator on page refresh', () => {
    render(<Home/>);

    const loadingIndicator = screen.getByTestId('loading-indicator');
    expect(loadingIndicator).toBeInTheDocument();

    window.location.reload();

    expect(loadingIndicator).toBeInTheDocument();
});