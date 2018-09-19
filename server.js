const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const app = express();
// const test = require("./routes/TestRoutes");
const mongoose = require("mongoose");

// DB Setup
mongoose.connect("mongodb://localhost:27017/gbvco");
mongoose.connection.on("connected", () => console.log("Connected"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/bottle", router.BottleTypesRoutes);
app.use("/boxes", router.BoxesRoutes);
app.use("/brandType", router.BrandedTypesRoutes);
app.use("/brands", router.BrandsRoutes);
app.use("/color", router.ColorRoutes);
app.use("/fillLevel", router.FillLevelsRoutes);
app.use("/flavour", router.FlavoursRoutes);
app.use("/inventory", router.InventoryRoutes);
app.use("/labels", router.LabelsRoutes);
app.use("/lids", router.LidsRoutes);
app.use("/log", router.LogRoutes);
app.use("/machines", router.MachinesRoutes);
app.use("/misc", router.MiscRoutes);
app.use("/mixing", router.MixingRoutes);
app.use("/package", router.PackagesRoutes);
app.use("/premixes", router.PremixesTypesRoutes);
app.use("/recipes", router.RecipesRoutes);
app.use("/schedulesBreaks", router.SchedulesBreaksRoutes);
app.use("/schedulesRef", router.SchedulesReferenceRoutes);
app.use("/unbrandedTypes", router.UnbrandedTypesRoutes);
app.use("/flavourMix", router.FlavourMixes);

// app.use(test);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
