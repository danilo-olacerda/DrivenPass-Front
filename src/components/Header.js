import styled from "styled-components";
import lock from "../assets/lock.png";
import { IoExit } from "react-icons/io5";

export default function Header(){
    return (
        <Container>
            <div>
                <img src={lock} alt="" />
                <Title>DrivenPass</Title>
            </div>
            <div>
                <IoExit style={{color: '#005985', fontSize: '50px',}}/>
            </div>
        </Container>
    )
};

const Container = styled.div`
    background: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 32px);
    height: 87px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    img {
        width: 45px;
        height: 60px;
        margin-right: 10px;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: center;
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
`;