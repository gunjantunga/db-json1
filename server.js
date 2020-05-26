const db = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

db.default({ studentList: [] });

app.set("view engine", "jade");
app.set("views", "views");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", function (req, res) {
    let data = db.read();
    res.render("hello", data);
});

app.post("/", function (req, res) {

    let student = req.body;
    let errorMsg = "";
    let successMsg = "";
    if (!student.name) {
        errorMsg += "Student name must not be blank";
    }
    if (!(parseInt(student.age) > 18)) {
        errorMsg += errorMsg ? " and " : "";
        errorMsg += "Student age must be > 18";
    }
    let data = db.read();
    if (!errorMsg) {
        data.studentList.push(student);
        db.write(data);
        successMsg += `${student.name} data saved successfully`;
    }
    res.render("hello", { studentList: data.studentList, errorMsg, successMsg });
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
})

