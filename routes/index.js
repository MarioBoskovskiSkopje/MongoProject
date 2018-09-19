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
const FlavoursRoutes = require("./FlavoursRoutes.js");
const InventoryRoutes = require("./InventoryRoutes.js");
const LabelsRoutes = require("./LabelsRoutes.js");
const LidsRoutes = require("./LidsRoutes.js");
const LogRoutes = require("./LogRoutes.js");
const MachinesRoutes = require("./MachinesRoutes.js");
const MiscRoutes = require("./MiscRoutes.js");
const MixingRoutes = require("./MixingRoutes.js");
const PackagesRoutes = require("./PackagesRoutes.js");
const PremixesTypesRoutes = require("./PremixesTypesRoutes.js");
const RecipesRoutes = require("./RecipesRoutes.js");
const SchedulesBreaksRoutes = require("./Schedules BreaksRoutes.js");
const UnbrandedTypesRoutes = require("./UnbrandedTypesRoutes.js");
const SchedulesReferenceRoutes = require("./Schedules ReferenceRoutes");
const FlavourMixes = require("./FlavourMixesRoutes");

module.exports = {
  BottleTypesRoutes,
  BoxesRoutes,
  BrandedTypesRoutes,
  BrandsRoutes,
  ColorRoutes,
  CustomersRoutes,
  FillLevelsRoutes,
  FlavoursRoutes,
  InventoryRoutes,
  LabelsRoutes,
  LidsRoutes,
  LogRoutes,
  MachinesRoutes,
  MiscRoutes,
  MixingRoutes,
  PackagesRoutes,
  PremixesTypesRoutes,
  RecipesRoutes,
  SchedulesBreaksRoutes,
  UnbrandedTypesRoutes,
  SchedulesReferenceRoutes,
  FlavourMixes
};
