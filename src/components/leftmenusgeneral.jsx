import React from "react";
import LeftMenusGeneralPrivilaged from "./leftmenusgeneralprivilaged";
import LeftMenusGeneralUser from "./leftmenusgeneraluser";

function LeftMenusGeneral({ currentuser }) {
  if (currentuser.admin) {
    return <LeftMenusGeneralPrivilaged />;
  }
  return <LeftMenusGeneralUser />;
}

export default LeftMenusGeneral;
