const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("YOUR SECRET KEY!");

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => {
  res.status(200).send("HI!");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received BOOM! Amount ->", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency -> cents
    currency: "usd",
  });

  //OK + Created something
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-27359/us-central1/api
