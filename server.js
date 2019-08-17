// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var tables = [
  {
    customerName: "James semaj",
    phoneNumber: "6096188989",
    customerEmail: "ham@yahoo.com",
    customerID: 2
  },
  {
    customerName: "James semaj",
    phoneNumber: "6096188989",
    customerEmail: "ham@yahoo.com",
    customerID: 2
  },
  {
    customerName: "James semaj",
    phoneNumber: "6096188989",
    customerEmail: "ham@yahoo.com",
    customerID: 2
  },
  {
    customerName: "James semaj",
    phoneNumber: "6096188989",
    customerEmail: "ham@yahoo.com",
    customerID: 2
  },

];

var waitlist = [
  { 
    customerName: "Rizsa",
    phoneNumber: "dfds",
    customerEmail: "sdf",
    customerID: 8

}]
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all characters
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

// Displays a single character, or returns false
app.get("/api/tables/:tables", function(req, res) {
  var chosen = req.params.customer;

  for (var i = 0; i < tables.length; i++) {
    if (chosen === tables[i].routeName) {
      return res.json(tables[i]);
    }
  }
});

app.get("/api/waitlist/:waitlist", function(req, res) {
  var chosen = req.params.customer;

  for (var i = 0; i < waitlist.length; i++) {
    if (chosen === waitlist[i].routeName) {
      return res.json(waitlist[i]);
    }
  }
});

// function called in onclick js file
  app.post("/api/tables", function(req, res) {
    console.log (tables.length)
    if  (tables.length < 5){
      var newCustomer = req.body;
      newCustomer.routeName = newCustomer.customerName.replace(/\s+/g, "").toLowerCase();
      console.log(newCustomer);
      tables.push(newCustomer);
      res.json(newCustomer);
    } else {
    var newCustomer = req.body;
    newCustomer.routeName = newCustomer.customerName.replace(/\s+/g, "").toLowerCase();
    console.log(newCustomer);
    waitlist.push(newCustomer);
    res.json(newCustomer);
 }
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
