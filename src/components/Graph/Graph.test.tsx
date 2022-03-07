import React from 'react';
import { render, screen } from '@testing-library/react';
import Graph from './Graph';
import {stateMock} from '../../__mocks__/ipc.mock';
import Chart from 'chart.js';

jest.mock('chart.js');


describe('Graph Component', ()=>{
    it('should generate chart when loading is false', ()=>{
        stateMock.loading = false;
        render(<Graph dataState={stateMock} />);
        expect(Chart).toHaveBeenCalled();
    });

    it('should show Loader when loading is true', ()=>{
        stateMock.loading = true;
        render(<Graph dataState={stateMock} />);
        const element = screen.getByTestId('loader_spinner');
        expect(element).toBeInTheDocument();
    });
});
