import { nanoid } from 'nanoid';
import { ImSearch } from 'react-icons/im';
import {
  FilterWrapper,
  FilterLabel,
  FilterInput,
} from 'components/Filter/Filter.styled';

import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filter-slice';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contacts-selectors';

export const Filter = () => {
  const filterInputId = nanoid();

  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <FilterLabel htmlFor={filterInputId}>
        <ImSearch
          style={{ width: 20, height: 20, color: 'steelblue', marginRight: 10 }}
        />
        Find contacts by name
      </FilterLabel>
      <FilterInput
        type="text"
        id={filterInputId}
        value={filterValue}
        onChange={onChangeFilter}
      />
    </FilterWrapper>
  );
};
