import React from "react";
import "../SCSS/styles.scss";
import UserComp from "./UserComp";

const Users: React.FC = () => {
  return (
    <div className="users">
      Users
      <UserComp />
    </div>
  );
};

export default Users;
