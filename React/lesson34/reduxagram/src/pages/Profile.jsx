import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  return <h3>{`${currentUser.username}'s profile`}</h3>;
}

export default Profile;
