// @src/api/got.js

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/employees",
});
