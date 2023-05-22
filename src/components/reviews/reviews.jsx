import React from "react";
import jwtDecode from "jwt-decode";
function getcurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    const currentuser = jwtDecode(jwt);
    //console.log(currentuser);
    //setUser({ username: currentuser.name, admin: currentuser.admin });
    return currentuser;
  } catch (error) {}
}

const currentuser = getcurrentUser();

const Reviews = () => {
  return (
    <div>
      <h1>Reviews</h1>
    </div>
  );
};

export default Reviews;
