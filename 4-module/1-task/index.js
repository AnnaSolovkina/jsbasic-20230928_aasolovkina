function makeFriendsList(friends) {
  // ваш код...

  let friendsList = document.createElement('UL');

  friends.map(function(friend) {
      return friend.firstName + ' ' + friend.lastName;
    }).forEach(function(friendName) {
      let myFriendsListItem = document.createElement('LI');
      myFriendsListItem.textContent = friendName;
      friendsList.append(myFriendsListItem);
    });

  return friendsList;
}
