import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import NavbarMainPrivilaged from "./NavbarMainPrivilaged";
import NavbarMainUser from "./NavbarMainUser";

function NavbarMain({ currentuser }) {
  // function getcurrentUser() {
  //   try {
  //     const jwt = localStorage.getItem("token");
  //     const currentuser = jwtDecode(jwt);
  //     //console.log(currentuser);
  //     //setUser({ username: currentuser.name, admin: currentuser.admin });

  //     return currentuser;
  //   } catch (error) {}
  // }

  // const currentuser = getcurrentUser();

  if (currentuser.admin) {
    return (
      <NavbarMainPrivilaged
        username={currentuser.username}
        firstname={currentuser.firstname}
        surname={currentuser.surname}
        designation={currentuser.designation}
        department={currentuser.departmentname}
      />
    );
  }
  return (
    <NavbarMainUser
      username={currentuser.username}
      firstname={currentuser.firstname}
      surname={currentuser.surname}
      designation={currentuser.designation}
      department={currentuser.departmentname}
    />
  );
}

export default NavbarMain;
