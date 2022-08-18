import { BsFillTrashFill } from "react-icons/bs"
import { useDeleteContactMutation } from 'redux/ContactsSlice/contactsSlice';
import { Container, Image, Name, Number, Button, Div } from "./ContactItem.styled";
import PropTypes from "prop-types";

const ContactItem = ({ name, number, id, avatar }) => {
    const [ deleteContact ] = useDeleteContactMutation();

    return (
        <Container>
            <Image src={ avatar }/>
            <Div>
                <Name> { name }: </Name>
                <Number> { number } </Number>
            </Div>
                
            <Button onClick={() => deleteContact(id)}> 
                <BsFillTrashFill size={"14px"}/>
            </Button>
        </Container>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}

export default ContactItem;