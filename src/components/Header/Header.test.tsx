import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', ()=>{
    it('should show on screen', ()=>{
        render(<Header />);
        const element = screen.getByText(/IPC GRAPH/i);
        expect(element).toBeInTheDocument();
    })
});
