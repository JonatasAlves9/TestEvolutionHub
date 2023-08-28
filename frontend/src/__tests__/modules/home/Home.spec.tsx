import React from 'react';
import {render, screen} from '@testing-library/react';
import {Home} from '../../../modules/home';

test('displays loading indicator on page load', () => {
    render(<Home/>);

    const loadingIndicator = screen.getByTestId('loading-indicator');
    expect(loadingIndicator).toBeInTheDocument();
});

test('displays loading indicator on page refresh', () => {
    render(<Home />);

    const loadingIndicator = screen.getByTestId('loading-indicator');
    expect(loadingIndicator).toBeInTheDocument();

    window.location.reload();

    expect(loadingIndicator).toBeInTheDocument();
});