import { Formik, ErrorMessage } from 'formik';
import * as yup from "yup";
import { toast } from "react-toastify";
import { Container, Button, StyledForm, Div, StyledField, StyledError } from "./ContactForm.styled";
import { useGetContactsQuery, useAddContactMutation } from 'redux/ContactsSlice/contactsSlice';

const schema = yup.object().shape({
    name: yup
        .string()
        .required(),
    number: yup
        .string()
        .required()
})

const initialValues = {
    name: '',
    number: ''
}

const ContactForm = () => {

    const { data: contacts } = useGetContactsQuery();
    const [ addContact ] = useAddContactMutation();
    
    const handleSubmit = ( {name, number}, { resetForm } ) => {

        let checker = contacts?.filter( 
            item => item.name.toLowerCase() === name.toLowerCase()
        );

        if(checker.length === 0){
            addContact({name, number});
        } else {
             toast.info(`Contact with name ${name} is already in your phonebook!`, {
            position: toast.POSITION.TOP_RIGHT
        })
        }

        resetForm();
    }

    return (
        <Container>
        <Formik 
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <StyledForm>
                <Div>
                        <StyledField 
                            placeholder="Name"
                            type="text"     
                            name="name"
                            autoComplete="off"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        />

                            <StyledField 
                                placeholder="Number"
                                type="tel"     
                                name="number"
                                autoComplete="off"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            />
                    <Button type="submit"> + </Button>
                </Div>

                <Div>
                    <ErrorMessage component={StyledError} name="name"/>
                    <ErrorMessage component={StyledError} name="number"/>
                </Div>
                
            </StyledForm>
        </Formik>
    </Container>
    );
};

export default ContactForm;