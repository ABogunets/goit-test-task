import { load } from "utils/storage";

export const getFilteredUsers = (filterValue, usersSet) => {
  const followingsTweetsIds = Object.keys(localStorage).filter(
    (id) => load(id).isClicked
  );
  console.log("followingsTweetsIds :>> ", followingsTweetsIds);
  switch (filterValue) {
    case "followings":
      return usersSet.filter((item) => followingsTweetsIds.includes(item.id));
    case "follow":
      console.log("follow");
      return usersSet.filter((item) => !followingsTweetsIds.includes(item.id));
    default:
      return usersSet;
  }
};
