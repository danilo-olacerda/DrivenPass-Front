import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/UserContext.js";
import Header from "../../components/Header.js";
import { IoExit, IoLogIn, IoWallet, IoWifiOutline } from "react-icons/io5";
import { HiPencil } from "react-icons/hi";
import { ImProfile } from "react-icons/im";

export default function Home(){

    return (
        <>
            <Header />
            <Container>
                <TitleDiv>
                    <p>Minhas senhas</p>
                    <div></div>
                </TitleDiv>
                <PasswordsDiv>
                    <span>
                        <div>
                            <IoLogIn style={{color: '#005985', fontSize: '50px',}}/>
                            <p>Credenciais</p>
                        </div>
                        <QtdPasswords>
                            1
                        </QtdPasswords>
                    </span>
                    <span>
                        <div>
                            <HiPencil style={{color: '#005985', fontSize: '50px',}}/>
                            <p>Notas seguras</p>
                        </div>
                        <QtdPasswords>
                            1
                        </QtdPasswords>
                    </span>
                    <span>
                        <div>
                            <IoWallet style={{color: '#005985', fontSize: '50px',}}/>
                            <p>Cartões</p>
                        </div>
                        <QtdPasswords>
                            1
                        </QtdPasswords>
                    </span>
                    <span>
                        <div>
                            <IoWifiOutline style={{color: '#005985', fontSize: '50px',}}/>
                            <p>Senhas de Wi-fi</p>
                        </div>
                        <QtdPasswords>
                            1
                        </QtdPasswords>
                    </span>
                    <span>
                        <div>
                            <ImProfile style={{color: '#005985', fontSize: '50px',}}/>
                            <p>Documentos</p>
                        </div>
                        <QtdPasswords>
                            1
                        </QtdPasswords>
                    </span>
                </PasswordsDiv>
            </Container>
        </>
    )
};

const Container = styled.div`
    margin-top: 87px;
    width: 100%;
`;

const TitleDiv = styled.div`
    padding: 0 16px;
    height: 41px;
    background: #005985;
    border: 3px solid #005985;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
    }
`;

const PasswordsDiv = styled.div`
    width: 100%;
    span {
        cursor: pointer;
        margin-bottom: 30px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        div {
            display: flex;
            align-items: center;
            justify-content: center;
            p {
                margin-left: 20px;
            }
        }
        :hover {

        }
    }
`;

const QtdPasswords = styled.div`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background: #005985;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`;