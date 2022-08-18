import { Form, Field } from "formik";
import styled from "styled-components";

export const Container = styled.div`
    
`;
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 24px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.829);
    width: 22px;
    height: 22px;
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
export const StyledForm = styled(Form)`
    margin: 15px;
`;
export const Div = styled.div`
    display: flex;
`;

export const StyledField = styled(Field)`
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
export const StyledError = styled.div`
    margin: 10px;
    color: rgba(0, 0, 0, 0.529);
`;