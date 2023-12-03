const express = require("express");
const moongose = require("mongoose");
const Employee = require("./models/Employee");
const bodyParser = require("body-parser");

moongose.connect("mongodb://localhost:27017/employees");

moongose.connection.once("open", () => {
  console.log("connected to database");
});

moongose.connection.on("error", (err) => {
  console.log("error", err);
});

const app = express();


app.use(bodyParser.json());



app.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
  res.json(employees);

  } catch (err) {
    console.log(err);
  }
});

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.find(id);
  res.json(employee);

  } catch (err) {
    console.log(err);
  }
});

app.post("/", async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        position:req.body.position,
        contact: req.body.contact,
    });
    try {
        await employee.save();
        res.json(employee);

    } catch (err) {
        res.json(err);
    }
    
});

app.listen(3000, () => {
  console.log("server started at 3000 port");
});
