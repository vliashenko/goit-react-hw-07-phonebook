import { Container, Title, Input } from "./ContactFilter.styled";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from "redux/FilterSlice/filterSlice";

const Filter = () => {
    const filter = useSelector(state => state.filter.filter)
    const dispatch = useDispatch();

    return (
        <Container>
            <Title> 
                Filter
            </Title>

            <Input 
                placeholder="Find your contacts by name "
                type="text" 
                onChange={(e) => dispatch(setFilter({ filter: e.target.value}))} 
                name="filter"
                value={filter}
            />
        </Container>
    );
};

export default Filter;