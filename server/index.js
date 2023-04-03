const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;

app.listen(PORT || 8000, () => {
  console.log(`are YOU listening on port ${PORT}?`);
});
