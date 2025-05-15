const express = require("express");
const app = express();
const assetDiversifierRoute = require("./routes/assetDiversifierRoute.js");

app.use(express.json()); // Make sure this line is here to parse JSON
app.use("/api/assetDiversifierRoute", assetDiversifierRoute);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
