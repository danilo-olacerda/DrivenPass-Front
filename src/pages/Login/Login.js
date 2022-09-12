import styled from 'styled-components';
import lock from '../../assets/lock.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";
import axios from 'axios';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);

    function login(e){

        e.preventDefault();
        const body = {
            email,
            password
        }
        const request = axios.post('https://driven-pass-danilo.herokuapp.com/login', body);

        request
            .then((res) => {
                navigate('/home');
                setToken(res.data);
            })
            .catch((res) => {
                alert("Usuário ou senha incorretos!");
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
                <button type='submit'>Acessar</button>
            </form>
            <Line />
            <p onClick={()=> navigate("/register")}>Primeiro acesso? Crie sua conta!</p>
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

const Line = styled.div`
    width: 90%;
    height: 1px;
    background: #DBDBDB;
    margin-bottom: 38px;
`;