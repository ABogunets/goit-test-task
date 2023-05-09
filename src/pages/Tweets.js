import { useState, useEffect } from "react";
import { CardList } from "components/CardList/CardList";
import { Container, Button } from "./Tweets.styled";
import { fetchUsers } from "components/services/users-api.js";
import { Loader } from "components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [usersSet, setUsersSet] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      try {
        const usersData = await fetchUsers(page);
        setUsersSet((prevUsersSet) =>
          page === 1 ? usersData : [...prevUsersSet, ...usersData]
        );
        if (usersData.length === 0 && page > 1) {
          toast.info(`Sorry, you've reached the end of the collection!`);
        }
        if (usersData.length === 0 && page === 1) {
          toast.info(`Sorry, there are no users in the collection!`);
        }
      } catch (err) {
        console.log(err.message);
        toast.error(
          `Sorry, something went wrong with the server, please try again.`
        );
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <Container>
      {!isLoading && usersSet.length > 0 && <CardList usersSet={usersSet} />}
      {isLoading && <Loader />}
      {!isLoading && usersSet.length > 0 && (
        <Button onClick={loadMore} type="button">
          Load more
        </Button>
      )}
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default Tweets;
