const express = require("express");
const app = express();
const ServerPortRouter = express.Router();

const ServerPort = require("../models/ServerPort");

resSuccess = {
  saved: true
};

ServerPortRouter.route("/add").post((req, res) => {
  const serverport = new ServerPort(req.body);
  serverport
    .save()
    .then(serverport => {
      res.json(resSuccess);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

ServerPortRouter.route("/").get((req, res) => {
  ServerPort.find((err, serverports) => {
    if (err) {
      console.log(err);
    } else {
      res.json(serverports);
    }
  });
});

ServerPortRouter.route("/edit/:id").get((req, res) => {
  const id = req.params.id;
  ServerPort.findById(id, (err, serverport) => {
    res.json(serverport);
  });
});

ServerPortRouter.route("/update/:id").post((req, res) => {
  ServerPort.findById(req.params.id, (err, serverport) => {
    if (!serverport) return next(new Error("Could not load Document"));
    else {
      // do your updates here
      serverport.name = req.body.name;
      serverport.port = req.body.port;

      serverport
        .save()
        .then(serverport => {
          res.json(resSuccess);
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

ServerPortRouter.route("/delete/:id").get((req, res) => {
  ServerPort.findByIdAndRemove({ _id: req.params.id }, (err, serverport) => {
    if (err) res.json(err);
    else res.json(resSuccess);
  });
});

module.exports = ServerPortRouter;
