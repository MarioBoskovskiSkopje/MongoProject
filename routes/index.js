const testFolder = "./routes";
const fs = require("fs");
// const path = require("path");

// const allowedExts = [".js"];

// const files = fs.readdirSync(testFolder);
// let exports_name = "module.exports = {";
// if (files && files.length) {
//   files
//     .filter(file => allowedExts.indexOf(path.extname(file)) > -1)
//     .forEach(file => {
//       let name = path.basename(file, path.extname(file));
//      console.log(`const ${name} = require('./${name}.js')`);
//       exports_name += name + ",";
//     });
// }
// console.log(exports_name);

const BottleTypesRoutes = require("./BottleTypesRoutes.js");
const BoxesRoutes = require("./BoxesRoutes.js");
const BrandedTypesRoutes = require("./BrandedTypesRoutes.js");
const BrandsRoutes = require("./BrandsRoutes.js");
const ColorRoutes = require("./ColorRoutes.js");
const CustomersRoutes = require("./CustomersRoutes.js");
const FillLevelsRoutes = require("./FillLevelsRoutes.js");
const FlavourMixesRoutes = require("./FlavourMixesRoutes");
const FlavourMixOrdersRoutes = require("./FlavourMixOrdersRoutes");
const FlavoursRoutes = require("./FlavoursRoutes.js");
const highestBatchRoutes = require("./highestBatchRoutes.js");
const InventoryRoutes = require("./InventoryRoutes.js");
const LabellingRoutes = require("./LabellingRoutes.js");
const LabelsRoutes = require("./LabelsRoutes.js");
const LidsRoutes = require("./LidsRoutes.js");
const LogRoutes = require("./LogRoutes.js");
const MachinesRoutes = require("./MachinesRoutes.js");
const MiscRoutes = require("./MiscRoutes.js");
const MixingRoutes = require("./MixingRoutes.js");
const MixingTeamRoutes = require("./MixingTeamRoutes.js");
const OrdersRoutes = require("./OrdersRoutes.js");
const PackagesRoutes = require("./PackagesRoutes.js");
const PackagingRoutes = require("./PackagingRoutes.js");
const PremixColoringRoutes = require("./PremixColoringRoutes.js");
const PremixesTypesRoutes = require("./PremixesTypesRoutes.js");
const PrintingRoutes = require("./PrintingRoutes.js");
const ProductionRoutes = require("./ProductionRoutes.js");
const RecipesRoutes = require("./RecipesRoutes.js");
const ReferencesRoutes = require("./ReferencesRoutes.js");
const SchedulesBreaksRoutes = require("./Schedules BreaksRoutes.js");
const SchedulesReferenceRoutes = require("./Schedules ReferenceRoutes");
const SchedulesRoutes = require("./SchedulesRoutes.js");
const ShippingRoutes = require("./ShippingRoutes.js");
const UnbrandedTypesRoutes = require("./UnbrandedTypesRoutes.js");

module.exports = {
  BottleTypesRoutes,
  BoxesRoutes,
  BrandedTypesRoutes,
  BrandsRoutes,
  ColorRoutes,
  CustomersRoutes,
  FillLevelsRoutes,
  FlavoursRoutes,
  FlavourMixesRoutes,
  FlavourMixOrdersRoutes,
  highestBatchRoutes,
  InventoryRoutes,
  LabelsRoutes,
  LabellingRoutes,
  LidsRoutes,
  LogRoutes,
  MachinesRoutes,
  MiscRoutes,
  MixingRoutes,
  MixingTeamRoutes,
  OrdersRoutes,
  PackagesRoutes,
  PackagingRoutes,
  PremixesTypesRoutes,
  PremixColoringRoutes,
  PrintingRoutes,
  ProductionRoutes,
  RecipesRoutes,
  ReferencesRoutes,
  SchedulesBreaksRoutes,
  SchedulesReferenceRoutes,
  SchedulesRoutes,
  ShippingRoutes,
  UnbrandedTypesRoutes
};
