import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const title = 'Testing Header';
const contentText = 'Content test';
const content = <>{contentText}</>;

describe('Card Component', ()=>{
    it('should show on screen with title', ()=>{
        render(<Card header={title}>{content}</Card>);
        const element = screen.getByText(title);
        expect(element).toBeInTheDocument();
    })

    it('should show on screen with content', ()=>{
        render(<Card header={title}>{content}</Card>);
        const element = screen.getByText(contentText);
        expect(element).toBeInTheDocument();
    })
});
