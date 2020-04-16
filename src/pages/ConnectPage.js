import React from "react";
import Connect from "../components/connexion";
import UserProvider from "../components/UserProvider";

function Connection() {
  return (
    <UserProvider>
      <Connect />
    </UserProvider>
  );
}
export default Connection;
