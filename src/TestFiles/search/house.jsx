// @src/components/House.jsx

import React from "react";

import Members from "./members";

export default function House({ family }) {
  return (
    <div>
      <h1>{family.name}</h1>
      <Members members={family.members} />
    </div>
  );
}
