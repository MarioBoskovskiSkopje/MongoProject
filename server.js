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
app.use("/allroutes", router.AllItemRoutes);
app.use("/bottletypes", router.BottleTypesRoutes);
app.use("/boxes", router.BoxesRoutes);
app.use("/brandedtypes", router.BrandedTypesRoutes);
app.use("/brands", router.BrandsRoutes);
app.use("/color", router.ColorRoutes);
app.use("/customers", router.CustomersRoutes);
app.use("/fillLevels", router.FillLevelsRoutes);
app.use("/flavourmixes", router.FlavourMixesRoutes);
app.use("/flavourmixorders", router.FlavourMixOrdersRoutes);
app.use("/flavours", router.FlavoursRoutes);
app.use("/highestbatch", router.highestBatchRoutes);
app.use("/inventory", router.InventoryRoutes);
app.use("/labels", router.LabelsRoutes);
app.use("/lids", router.LidsRoutes);
app.use("/log", router.LogRoutes);
app.use("/machines", router.MachinesRoutes);
app.use("/misc", router.MiscRoutes);
app.use("/mixing", router.MixingRoutes);
app.use("/mixingteam", router.MixingTeamRoutes);
app.use("/orders", router.OrdersRoutes);
app.use("/packages", router.PackagesRoutes);
app.use("/packaging", router.PackagingRoutes);
app.use("/premixcoloring", router.PremixColoringRoutes);
app.use("/premixestypes", router.PremixesTypesRoutes);
app.use("/printing", router.PrintingRoutes);
app.use("/production", router.ProductionRoutes);
app.use("/recipes", router.RecipesRoutes);
app.use("/references", router.ReferencesRoutes);
app.use("/schedules", router.SchedulesRoutes);
app.use("/schedulesbreaks", router.SchedulesBreaksRoutes);
app.use("/schedulesreference", router.SchedulesReferenceRoutes);
app.use("/unbrandedTypes", router.UnbrandedTypesRoutes);
app.use("/shipping", router.ShippingRoutes);

// app.use(test);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
