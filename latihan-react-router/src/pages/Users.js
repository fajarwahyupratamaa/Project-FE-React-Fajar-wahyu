// Users.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { usersData } from '../data/UserData';

const Users = () => {
  const history = useNavigate();

  const handleDetailClick = (id) => {
    history(`/user/details/${id}`);
  };

  return (
    <div>
      <h2>User Page</h2>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
                <td>
                  <button onClick={() => handleDetailClick(user.id)}>
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
  );
};

export default Users;
