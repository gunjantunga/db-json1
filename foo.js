const db = require("./db");

db.default({ studentList: [] });


let data = db.read();
console.log(data, "x");
data.studentList.push({ name: "gujan" });

db.write(data);