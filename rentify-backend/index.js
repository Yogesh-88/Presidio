const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});
