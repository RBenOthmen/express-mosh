const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const courses = require("./routes/courses");
const home = require("./routes/home");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("tiny"));
app.use("/api/courses", courses);
app.use("/", home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
