import PropTypes from "prop-types";

import {
  FilterWrapper,
  Label,
  Select,
  Option,
} from "components/Filter/Filter.styled";

export const Filter = ({ onChangeFilter }) => {
  return (
    <FilterWrapper>
      <Label>
        Filter:
        <Select name="filter" onChange={onChangeFilter}>
          <Option value="all">show all</Option>
          <Option value="follow">follow</Option>
          <Option value="followings">followings</Option>
        </Select>
      </Label>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
};
