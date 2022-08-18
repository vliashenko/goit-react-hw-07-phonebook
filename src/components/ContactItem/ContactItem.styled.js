import styled from "styled-components";

export const Container = styled.li`
    margin: 10px 0;
    width: 480px;
    border: 0.5px solid rgb(0, 0, 0, 0.232);
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    background-color: white;
`;
export const Image = styled.img`
    width: 34px;
    height: 34px;
    border: 1px solid grey;
    border-radius: 50%;
`;
export const Div = styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px;
    width: 340px;
`;
export const Name = styled.div`
    font-size: 18px;
    font-weight: 400;
    color: black;
    margin: 0 10px 0 40px;
`;
export const Number = styled.div`
    font-size: 18px;
    font-weight: 400;
    color: black;
`;
export const Button = styled.div`
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 24px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.829);
    width: 10px;
    height: 10px;
    margin: 0px 0px 0px 5px;
    padding: 17px;
    border-radius:50%;
    border: 0.5px solid rgba(0, 0, 0, 0.129);
    background-color:rgb(255, 255, 255);
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.529);
    }
`;