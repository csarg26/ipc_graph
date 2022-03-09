import React, {useState} from 'react';
import { Input } from "reakit/Input";
import { Button } from "reakit/Button";
import { useForm } from 'react-hook-form';
import { useAuthDataContext } from '../../context/AuthDataProvider';
import { loginUser } from '../../services/user.service';
import styles from './loginForm.module.scss';

const LoginForm = () => {
    const { register, handleSubmit, formState, setError, clearErrors } = useForm();
    const {errors} = formState;
    const { onLogin } = useAuthDataContext();

    const onSubmit = async ({ user, password }) => {
        const res = await loginUser({email: user, password});
        if(res.access_token){
            onLogin(res.access_token);
        }
            
        if(res.error){
            setError('apiError', {
                message: res.error.message,
              });
        }
    };
    
    return <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className={styles.inputGroup}>
            <Input placeholder="User"  {...register("user", {required: "Required field!"})}/>
            <div className={styles.error}>{errors?.user?.message}</div>
        </div>
        <div className={styles.inputGroup}>
            <Input placeholder="password"  {...register("password", {required: "Required field!"})} type="password" />
            <div className={styles.error}>{errors?.password?.message}</div>
        </div>
        <div className={styles.inputGroup}>
            <div className={styles.error}>{errors?.apiError?.message}</div>
        </div>
        <Button type="submit" onClick={()=>clearErrors()}>Enter!</Button>;
    </form>;
};

export default LoginForm;
