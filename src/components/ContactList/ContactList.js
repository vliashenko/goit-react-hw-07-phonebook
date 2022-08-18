import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/ContactsSlice/contactsSlice';
import ContactItem from '../ContactItem/ContactItem';
import { Container, Loader } from "./ContactList.styled";

const ContactList = () => {
    const filter = useSelector(state => state.filter.filter)
    const { data: contacts, isFetching } = useGetContactsQuery();
  
    const getVisibleContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts?.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    }
  
    const visibleContacts = getVisibleContacts();

    const view = visibleContacts?.map( contact => {
        const { id } = contact;
        return (
            <ContactItem 
                key={ id } 
                {...contact}
            />
        )
    });
    return ( 
        <Container>
            {isFetching && <Loader>Loading...</Loader>}
            {contacts && !isFetching && view}
        </Container>
    );
};

export default ContactList;