import ContactForm from "components/ContactForm/ContactForm";
import ContactFilter from "components/ContactFilter/ContactFilter"
import ContactList from "components/ContactList/ContactList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Title } from "./App.styled"

export const App = () => {
  return (
    <Container>
      <Title>
        Contact
      </Title>
      <ContactForm/>
      <ContactFilter/>
      <ContactList/>
      <ToastContainer/>
    </Container>
  );
};
