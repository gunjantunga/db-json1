const fs = require("fs");

function read() {
    return JSON.parse(fs.readFileSync(__dirname + "/db.json"));
}

function write(obj) {
    if (obj) {
        fs.writeFileSync(__dirname + "/db.json", JSON.stringify(obj));
    }
}

function dfault(obj) {
    if (!fs.existsSync(__dirname + "/db.json")) {

        fs.appendFileSync(__dirname + "/db.json", JSON.stringify(obj));
    }
}
const db = {
    read,
    write,
    default: dfault
}

module.exports = db;