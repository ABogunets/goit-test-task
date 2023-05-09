import PropTypes from "prop-types";
import { useState } from "react";
import { CardListWrapper, LinkBack } from "components/CardList/CardList.styled";
import { Card } from "components/Card/Card";
import { Filter } from "components/Filter/Filter";
import { getFilteredUsers } from "components/services/filter-function";

export const CardList = ({ usersSet }) => {
  const [filterValue, setFilterValue] = useState("");

  const onChangeFilter = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredUsersSet = getFilteredUsers(filterValue, usersSet);

  return (
    <>
      <LinkBack to={"/home"}>{"\u2039"} Back</LinkBack>
      <Filter onChangeFilter={onChangeFilter} />
      <CardListWrapper>
        {filteredUsersSet.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardListWrapper>
    </>
  );
};

CardList.propTypes = {
  usersSet: PropTypes.arrayOf(PropTypes.object),
};
