import React, { useState} from 'react';
import './Login.css';
import Title from './components/Title/Title';
import Label from './components/Label/Label'; 
import Input from './components/Input/Input';
import Navbar from '../../shared/Navbar/index';
import Footer from '../../shared/Footer/Footer';

const Login = () => {

    const [ user, setUser ] = useState ('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);

    function handleChange(name, value) {
        if(name === 'usuario') {
            setUser(value)
        } else {
            if(value.length < 6) { 
                setPasswordError(true);
            } else {
                setPasswordError(false);
                setPassword(value);
            }
        }
    };

    function handleSubmit() {
        let account = { user, password }
        if(account) {

        }
    };

    return (
        <div>
            <Navbar/>
            <div className='login-container form-group'>
                <Title text='Iniciar Sesión' />
                <Label text='Usuario' />
                <Input 
                attribute={{
                    id: 'usuario', 
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su usuario'
                }}
                handleChange={handleChange}
                />
                <Label text='Contraseña' />
                <Input 
                attribute={{
                    id: 'contraseña', 
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese su contraseña'
                }}
                handleChange={handleChange}
                param={passwordError}
            />

                { passwordError &&
                    <label className='label-error'>
                        Contraseña inválida o incompleta
                    </label>
                }

                <div className='submit-button-container'></div> 
                <button onClick={handleSubmit} className='submit-button-container btn btn-outline-primary'>
                    Ingresar
                </button>
            </div>
            <Footer />
        </div>
    )
};
export default Login;
