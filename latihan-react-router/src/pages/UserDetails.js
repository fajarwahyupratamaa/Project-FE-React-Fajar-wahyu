import React from 'react';
import { useParams } from 'react-router-dom';
import { usersData } from '../data/UserData';

const UserDetail = () => {
  const { userId } = useParams();
  const user = usersData.find((user) => user.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <h3>Address</h3>
      <p>
        {user.address.street}, {user.address.suite}
      </p>
      <p>
        {user.address.city}, {user.address.zipcode}
      </p>
      <h3>Company</h3>
      <p>{user.company.name}</p>
      <p>{user.company.catchPhrase}</p>
      <p>{user.company.bs}</p>
    </div>
  );
};

export default UserDetail;
