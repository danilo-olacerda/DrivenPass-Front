import styled from 'styled-components';
import lock from '../../assets/lock.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function login(e){
        
        e.preventDefault();
        const body = {
            email,
            password,
            confirmPassword: password
        }
        
        const request = axios.post('https://driven-pass-danilo.herokuapp.com/register', body);

        request
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate('/');
            })
            .catch((res) => {
                if (res.response.status === 409){
                    alert("Usuário já cadastrado!");
                } else if (res.response.status === 422){
                    alert("Senha deve ter no mínimo 10 caracteres!");
                } else {
                    alert("Erro no cadastro!");
                }
            });

    }

    return (
        <Container>
            <img src={lock} alt="" />
            <Title>DrivenPass</Title>
            <form action="submit" onSubmit={login}>
                <label htmlFor="email">Usuário (e-mail)</label>
                <input type="email" id='email' required onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <label htmlFor="password">Senha</label>
                <input type="password" id='password' required onChange={(e)=> setPassword(e.target.value)} value={password}/>
                <button type='submit'>Criar</button>
                <BackButton onClick={()=> navigate("/")}>{'<'}Voltar</BackButton>
            </form>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 48px;
        label {
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            color: #000000;
            margin-bottom: 10px;
        }
        input {
            width: 80%;
            background: #FFFFFF;
            border: 3px solid #005985;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 5px;
            height: 40px;
            margin-bottom: 16px;
        }
        button {
            margin-top: 32px;
            width: calc(80% + 10px);
            height: 40px;
            background: #9BFBB0;
            border: 3px solid #9BFBB0;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 5px;
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            text-align: center;
            color: #000000;
            cursor: pointer;
        }
    }
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        text-decoration-line: underline;
        color: #000000;
        cursor: pointer;
    }
`;

const Title = styled.h1`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #005985;
    margin-bottom: 42px;
`;

const BackButton = styled.button`
    background: #FB9B9B !important;
    border: 3px solid #FB9B9B !important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`;