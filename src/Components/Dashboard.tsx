import React from "react";
import Navigation from "./Navigation";
import Users from "./Users";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Users />
    </div>
  );
};

export default Dashboard;
