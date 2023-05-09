import { load } from "utils/storage";

export const getFilteredUsers = (filterValue, usersSet) => {
  const followingsTweetsIds = Object.keys(localStorage).filter(
    (id) => load(id).isClicked
  );
  switch (filterValue) {
    case "followings":
      return usersSet.filter((item) => followingsTweetsIds.includes(item.id));
    case "follow":
      return usersSet.filter((item) => !followingsTweetsIds.includes(item.id));
    default:
      return usersSet;
  }
};
