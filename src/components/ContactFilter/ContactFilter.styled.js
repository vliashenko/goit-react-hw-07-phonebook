import styled from "styled-components";

export const Container = styled.div`
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 15px;
`;

export const Input = styled.input`
    width: 420px;
    border-radius: 20px;
    border: 0.5px solid rgba(0, 0, 0, 0.329);
    margin-right: 5px;
    padding: 7px 7px 7px 14px;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:focus {
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.529);
    }
`;
