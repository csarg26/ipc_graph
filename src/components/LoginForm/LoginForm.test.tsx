import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import LogingForm from './LoginForm';
import AuthDataProvider, { AuthDataContext } from '../../context/AuthDataProvider';
import userEvent from '@testing-library/user-event';
import * as UserServices from '../../services/user.service';


describe('LoginForm Component', ()=>{
    it('should show on screen', async ()=>{
        
        render(
            <AuthDataProvider>
                <LogingForm />
            </AuthDataProvider>
        );
        const element = await screen.findByText(/login/i);
        expect(element).toBeInTheDocument();
    });

    it('should validate empty inputs', async ()=>{
        const onLogin = jest.fn();
        render(
            <AuthDataContext.Provider value={{onLogin}}>
                <LogingForm />
            </AuthDataContext.Provider>
        );

        const button = await screen.findByText(/Enter/i);
        userEvent.click(button);
        
        const validationElement = await screen.findAllByText(/Required field/i);
        expect(validationElement).toHaveLength(2);
    })

    it('should validate empty inputs', async ()=>{
        const onLogin = jest.fn();
        jest.spyOn(UserServices, 'loginUser').mockResolvedValue({ access_token: 'aeiou' });

        render(
            <AuthDataContext.Provider value={{onLogin}}>
                <LogingForm />
            </AuthDataContext.Provider>
        );

        const inpUser = await screen.getByPlaceholderText(/user/i);
        userEvent.type(inpUser, 'usuario');

        const inpPassword = await screen.getByPlaceholderText(/password/i);
        userEvent.type(inpPassword, '123456')

        const button = await screen.findByText(/Enter/i);
        userEvent.click(button);
        await waitFor(() => expect(onLogin).toHaveBeenCalled());
    })

});
