const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

let URL = "";
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production") {
  URL = "http://cosmodrome.team";
} else if (process.env.NODE_ENV === "development") {
  URL = "http://dev.cosmodrome.team";
} else if (process.env.NODE_ENV === "testing") {
  URL = "http://test.cosmodrome.team";
} else {
  URL = `http://localhost:${PORT}`;
}

console.log(URL);
