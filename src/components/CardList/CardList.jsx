// import PropTypes from 'prop-types';
import { useState } from "react";
import { CardListWrapper } from "components/CardList/CardList.styled";
import { Card } from "components/Card/Card";
import { Filter } from "components/Filter/Filter";
import { getFilteredUsers } from "components/service-functions";

export const CardList = ({ usersSet }) => {
  const [filterValue, setFilterValue] = useState("");

  const onChangeFilter = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredUsersSet = getFilteredUsers(filterValue, usersSet);

  return (
    <>
      <Filter onChangeFilter={onChangeFilter} />
      <CardListWrapper>
        {filteredUsersSet.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardListWrapper>
    </>
  );
};

// ImageGallery.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//     })
//   ),
// };
