// import PropTypes from 'prop-types';
import { CardListWrapper } from "components/CardList/CardList.styled";
import { Card } from "components/Card/Card";

export const CardList = ({ usersData }) => {
  // console.log("CardList", props);
  return (
    <CardListWrapper>
      {usersData.map((card) => (
        // <Card key={card.id} card={card} onBtnClick isClicked />
        <Card key={card.id} card={card} />
      ))}
    </CardListWrapper>
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
